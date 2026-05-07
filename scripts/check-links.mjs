import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const DIST_RELATIVE = "dist";
const DIST_PATH = path.join(ROOT, DIST_RELATIVE);
const ADMIN_SUBDIR = "admin";

const ASSET_EXTENSIONS = new Set([
  ".svg",
  ".png",
  ".jpg",
  ".jpeg",
  ".webp",
  ".avif",
  ".gif",
  ".ico",
  ".css",
  ".js",
  ".mjs",
  ".json",
  ".txt",
  ".xml",
  ".woff",
  ".woff2",
  ".map",
]);

const IGNORED_SCHEMES = [
  "http:",
  "https:",
  "mailto:",
  "tel:",
  "sms:",
  "javascript:",
  "data:",
  "blob:",
  "about:",
  "ftp:",
  "ws:",
  "wss:",
];

/**
 * Extraction targets. Each entry defines an attribute on a tag we care about
 * and whether the value is a single URL or a srcset list.
 */
const EXTRACTORS = [
  { tag: "a", attr: "href", kind: "single" },
  { tag: "link", attr: "href", kind: "single" },
  { tag: "img", attr: "src", kind: "single" },
  { tag: "img", attr: "srcset", kind: "srcset" },
  { tag: "script", attr: "src", kind: "single" },
  { tag: "source", attr: "src", kind: "single" },
  { tag: "source", attr: "srcset", kind: "srcset" },
];

function makeError(index, code, source, attrAndHref, reason, recommendation) {
  return `[E${String(index).padStart(3, "0")}] ${code} | ${source} | ${attrAndHref} | ${reason} | fix: ${recommendation}`;
}

function toPosix(p) {
  return p.split(path.sep).join("/");
}

async function pathExists(targetPath) {
  try {
    await stat(targetPath);
    return true;
  } catch {
    return false;
  }
}

/**
 * Case-sensitive file existence check. On Windows the FS is case-insensitive,
 * but production hosts are case-sensitive. Walk segment by segment and require
 * each to match an actual entry by exact case.
 */
async function fileExistsCaseSensitive(absolutePath) {
  const distAbs = path.resolve(DIST_PATH);
  const target = path.resolve(absolutePath);
  if (target !== distAbs && !target.startsWith(distAbs + path.sep)) {
    return false;
  }
  if (!(await pathExists(target))) {
    return false;
  }
  const relative = path.relative(distAbs, target);
  if (relative === "") {
    return true;
  }
  const segments = relative.split(path.sep);
  let cursor = distAbs;
  for (const segment of segments) {
    let entries;
    try {
      entries = await readdir(cursor);
    } catch {
      return false;
    }
    if (!entries.includes(segment)) {
      return false;
    }
    cursor = path.join(cursor, segment);
  }
  return true;
}

async function listHtmlFiles(dir) {
  const results = [];

  async function walk(current) {
    let entries;
    try {
      entries = await readdir(current, { withFileTypes: true });
    } catch {
      return;
    }
    const sorted = [...entries].sort((a, b) => a.name.localeCompare(b.name, "en"));
    for (const entry of sorted) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) {
        const relFromDist = path.relative(DIST_PATH, full).split(path.sep)[0];
        if (relFromDist === ADMIN_SUBDIR) {
          continue;
        }
        await walk(full);
      } else if (entry.isFile() && entry.name.toLowerCase().endsWith(".html")) {
        results.push(full);
      }
    }
  }

  await walk(dir);
  return results;
}

function stripHtmlComments(html) {
  return html.replace(/<!--[\s\S]*?-->/g, (match) => " ".repeat(match.length));
}

function decodeHtmlAttr(value) {
  return value
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x2F;/gi, "/")
    .replace(/&#47;/g, "/");
}

/**
 * Extract links from HTML in document order. Returns an array of:
 *   { tag, attr, value, index }
 * `index` is the byte offset of the matched attribute within the source HTML,
 * used later for stable ordering of errors.
 */
function extractLinks(html) {
  const cleaned = stripHtmlComments(html);
  const found = [];

  for (const { tag, attr, kind } of EXTRACTORS) {
    const pattern = new RegExp(
      `<${tag}\\b[^>]*?\\b${attr}\\s*=\\s*("([^"]*)"|'([^']*)'|([^\\s"'>]+))`,
      "gi"
    );
    let match;
    while ((match = pattern.exec(cleaned)) !== null) {
      const raw = match[2] ?? match[3] ?? match[4] ?? "";
      const decoded = decodeHtmlAttr(raw);
      if (kind === "srcset") {
        const candidates = decoded
          .split(",")
          .map((c) => c.trim())
          .filter((c) => c.length > 0);
        for (const candidate of candidates) {
          const url = candidate.split(/\s+/)[0] ?? "";
          found.push({ tag, attr, value: url, index: match.index });
        }
      } else {
        found.push({ tag, attr, value: decoded, index: match.index });
      }
    }
  }

  found.sort((a, b) => a.index - b.index);
  return found;
}

function shouldIgnore(value) {
  if (value === "") return true;
  const trimmed = value.trim();
  if (trimmed === "") return true;
  if (trimmed.startsWith("#")) return true;
  if (trimmed.startsWith("//")) return true;
  const lowered = trimmed.toLowerCase();
  for (const scheme of IGNORED_SCHEMES) {
    if (lowered.startsWith(scheme)) return true;
  }
  return false;
}

function stripQueryAndFragment(value) {
  let result = value;
  const hashIdx = result.indexOf("#");
  if (hashIdx !== -1) result = result.slice(0, hashIdx);
  const queryIdx = result.indexOf("?");
  if (queryIdx !== -1) result = result.slice(0, queryIdx);
  return result;
}

function classifyAsAsset(refPath) {
  const ext = path.posix.extname(refPath).toLowerCase();
  if (ext === ".html") return false;
  return ASSET_EXTENSIONS.has(ext);
}

/**
 * Resolve `ref` (already stripped of query/fragment) into a candidate list of
 * absolute paths inside dist/. Returns either:
 *   { kind: "candidates", isAsset, paths: string[] }
 * or { kind: "escape" } if traversal escapes dist/, or
 *    { kind: "parse-error", reason } if the reference cannot be normalized.
 */
function resolveReference(ref, sourceFileAbs) {
  let decoded;
  try {
    decoded = decodeURI(ref);
  } catch (error) {
    return {
      kind: "parse-error",
      reason: `invalid percent-encoding: ${error instanceof Error ? error.message : String(error)}`,
    };
  }

  let absInsideDist;
  if (decoded.startsWith("/")) {
    const cleaned = decoded.replace(/^\/+/, "");
    absInsideDist = path.resolve(DIST_PATH, cleaned);
  } else {
    const sourceDir = path.dirname(sourceFileAbs);
    absInsideDist = path.resolve(sourceDir, decoded);
  }

  const distResolved = path.resolve(DIST_PATH);
  if (
    absInsideDist !== distResolved &&
    !absInsideDist.startsWith(distResolved + path.sep)
  ) {
    return { kind: "escape" };
  }

  const isAsset = classifyAsAsset(decoded);

  if (isAsset) {
    return { kind: "candidates", isAsset: true, paths: [absInsideDist] };
  }

  const trimmedTrailing = absInsideDist.replace(/[\\/]+$/, "");
  const candidates = [];

  if (decoded === "/" || decoded === "") {
    candidates.push(path.join(distResolved, "index.html"));
  } else if (decoded.endsWith("/")) {
    candidates.push(path.join(trimmedTrailing, "index.html"));
  } else if (decoded.toLowerCase().endsWith(".html")) {
    candidates.push(absInsideDist);
  } else {
    candidates.push(`${trimmedTrailing}.html`);
    candidates.push(path.join(trimmedTrailing, "index.html"));
    candidates.push(absInsideDist);
  }

  return { kind: "candidates", isAsset: false, paths: candidates };
}

async function checkLinks() {
  const errors = [];

  if (!(await pathExists(DIST_PATH))) {
    return {
      pages: 0,
      links: 0,
      ignored: 0,
      errors,
      missingDist: true,
    };
  }

  const htmlFiles = await listHtmlFiles(DIST_PATH);
  htmlFiles.sort((a, b) =>
    path.relative(DIST_PATH, a).localeCompare(path.relative(DIST_PATH, b), "en")
  );

  const collected = [];
  let totalLinks = 0;
  let totalIgnored = 0;

  for (const htmlFile of htmlFiles) {
    let html;
    try {
      html = await readFile(htmlFile, "utf8");
    } catch (error) {
      collected.push({
        sortKey: [path.relative(DIST_PATH, htmlFile), -1],
        line: {
          code: "LINK_PARSE_ERROR",
          source: toPosix(path.relative(DIST_PATH, htmlFile)),
          attrAndHref: "file:read",
          reason: `unable to read HTML file: ${error instanceof Error ? error.message : String(error)}`,
          recommendation: "verify file permissions and rerun after npm run build",
        },
      });
      continue;
    }

    const refs = extractLinks(html);
    const sourceRel = toPosix(path.relative(DIST_PATH, htmlFile));

    for (const ref of refs) {
      const rawValue = ref.value;
      if (shouldIgnore(rawValue)) {
        totalIgnored += 1;
        continue;
      }

      totalLinks += 1;

      const stripped = stripQueryAndFragment(rawValue);
      if (stripped === "") {
        continue;
      }

      const resolution = resolveReference(stripped, htmlFile);

      if (resolution.kind === "parse-error") {
        collected.push({
          sortKey: [sourceRel, ref.index],
          line: {
            code: "LINK_PARSE_ERROR",
            source: sourceRel,
            attrAndHref: `${ref.tag}.${ref.attr}:${rawValue}`,
            reason: resolution.reason,
            recommendation: "fix the malformed reference in source",
          },
        });
        continue;
      }

      if (resolution.kind === "escape") {
        collected.push({
          sortKey: [sourceRel, ref.index],
          line: {
            code: "LINK_ESCAPES_DIST",
            source: sourceRel,
            attrAndHref: `${ref.tag}.${ref.attr}:${rawValue}`,
            reason: "reference resolves outside dist/",
            recommendation: "remove the traversal segments or correct the path",
          },
        });
        continue;
      }

      let resolved = false;
      for (const candidate of resolution.paths) {
        if (await fileExistsCaseSensitive(candidate)) {
          resolved = true;
          break;
        }
      }

      if (!resolved) {
        const expected = resolution.paths
          .map((p) => toPosix(path.relative(ROOT, p)))
          .join(" or ");
        if (resolution.isAsset) {
          collected.push({
            sortKey: [sourceRel, ref.index],
            line: {
              code: "BROKEN_ASSET_LINK",
              source: sourceRel,
              attrAndHref: `${ref.tag}.${ref.attr}:${rawValue}`,
              reason: `asset not found: ${expected}`,
              recommendation: "add the asset to public/ or update the reference",
            },
          });
        } else {
          collected.push({
            sortKey: [sourceRel, ref.index],
            line: {
              code: "BROKEN_PAGE_LINK",
              source: sourceRel,
              attrAndHref: `${ref.tag}.${ref.attr}:${rawValue}`,
              reason: `target not found: ${expected}`,
              recommendation: "create the page or fix the href",
            },
          });
        }
      }
    }
  }

  collected.sort((a, b) => {
    if (a.sortKey[0] !== b.sortKey[0]) {
      return a.sortKey[0].localeCompare(b.sortKey[0], "en");
    }
    return a.sortKey[1] - b.sortKey[1];
  });

  for (let i = 0; i < collected.length; i += 1) {
    const item = collected[i].line;
    errors.push(
      makeError(
        i + 1,
        item.code,
        item.source,
        item.attrAndHref,
        item.reason,
        item.recommendation
      )
    );
  }

  return {
    pages: htmlFiles.length,
    links: totalLinks,
    ignored: totalIgnored,
    errors,
    missingDist: false,
  };
}

async function main() {
  try {
    const result = await checkLinks();

    if (result.missingDist) {
      process.stdout.write(
        `[check:links] WARN ${DIST_RELATIVE}/ not found — did you run npm run build?\n`
      );
      process.exit(0);
    }

    if (result.errors.length === 0) {
      process.stdout.write(
        `[check:links] PASS — ${result.pages} pages scanned, ${result.links} links checked, ${result.ignored} ignored\n`
      );
      process.exit(0);
    }

    process.stderr.write(`[check:links] FAILED (${result.errors.length} errors)\n`);
    for (const errorLine of result.errors) {
      process.stderr.write(`${errorLine}\n`);
    }
    process.exit(1);
  } catch (error) {
    process.stderr.write("[check:links] FAILED (1 errors)\n");
    process.stderr.write(
      `${makeError(
        1,
        "LINK_PARSE_ERROR",
        "checker",
        "runtime:fatal",
        error instanceof Error ? error.message : String(error),
        "inspect scripts/check-links.mjs and rerun"
      )}\n`
    );
    process.exit(1);
  }
}

await main();
