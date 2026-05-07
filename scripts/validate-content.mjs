import { access, readFile } from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const DATA_RELATIVE = "src/data/sigils.json";
const DATA_PATH = path.join(ROOT, DATA_RELATIVE);
const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function makeError(index, code, entity, field, reason, recommendation) {
  return `[E${String(index).padStart(3, "0")}] ${code} | ${entity} | ${field} | ${reason} | fix: ${recommendation}`;
}

async function fileExists(targetPath) {
  try {
    await access(targetPath);
    return true;
  } catch {
    return false;
  }
}

function toNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

async function validate() {
  const errors = [];

  if (!(await fileExists(DATA_PATH))) {
    errors.push(
      makeError(
        errors.length + 1,
        "FILE_MISSING",
        DATA_RELATIVE,
        "file",
        "content file does not exist",
        "create src/data/sigils.json"
      )
    );
    return errors;
  }

  let rawText = "";
  try {
    rawText = await readFile(DATA_PATH, "utf8");
  } catch (error) {
    errors.push(
      makeError(
        errors.length + 1,
        "FILE_READ_ERROR",
        DATA_RELATIVE,
        "file",
        `unable to read file: ${error instanceof Error ? error.message : String(error)}`,
        "verify file permissions and path"
      )
    );
    return errors;
  }

  let payload;
  try {
    payload = JSON.parse(rawText);
  } catch (error) {
    errors.push(
      makeError(
        errors.length + 1,
        "JSON_PARSE_ERROR",
        DATA_RELATIVE,
        "json",
        `invalid JSON: ${error instanceof Error ? error.message : String(error)}`,
        "fix JSON syntax in src/data/sigils.json"
      )
    );
    return errors;
  }

  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    errors.push(
      makeError(
        errors.length + 1,
        "ROOT_INVALID",
        "root",
        "root",
        "root value must be an object",
        "ensure top-level JSON is an object with version and sigils"
      )
    );
    return errors;
  }

  if (!("version" in payload)) {
    errors.push(
      makeError(
        errors.length + 1,
        "ROOT_MISSING_VERSION",
        "root",
        "version",
        "version field is missing",
        "add a top-level version string"
      )
    );
  }

  if (!("sigils" in payload)) {
    errors.push(
      makeError(
        errors.length + 1,
        "ROOT_MISSING_SIGILS",
        "root",
        "sigils",
        "sigils field is missing",
        "add a top-level sigils array"
      )
    );
    return errors;
  }

  if (!Array.isArray(payload.sigils)) {
    errors.push(
      makeError(
        errors.length + 1,
        "ROOT_SIGILS_NOT_ARRAY",
        "root",
        "sigils",
        "sigils must be an array",
        "set sigils to an array of sigil objects"
      )
    );
    return errors;
  }

  const seenSlugs = new Map();
  for (let i = 0; i < payload.sigils.length; i += 1) {
    const sigil = payload.sigils[i];
    const entity = `sigils[${i}]`;

    if (!sigil || typeof sigil !== "object" || Array.isArray(sigil)) {
      errors.push(
        makeError(
          errors.length + 1,
          "SIGIL_NOT_OBJECT",
          entity,
          "sigil",
          "sigil entry must be an object",
          "replace this entry with a valid sigil object"
        )
      );
      continue;
    }

    for (const fieldName of ["name", "slug", "doctrine"]) {
      if (!(fieldName in sigil)) {
        errors.push(
          makeError(
            errors.length + 1,
            "REQUIRED_FIELD_MISSING",
            entity,
            fieldName,
            "required field is missing",
            `add non-empty ${fieldName}`
          )
        );
        continue;
      }

      const value = sigil[fieldName];
      if (typeof value !== "string") {
        errors.push(
          makeError(
            errors.length + 1,
            "FIELD_TYPE_INVALID",
            entity,
            fieldName,
            "field must be a string",
            `set ${fieldName} to a string value`
          )
        );
        continue;
      }

      if (!toNonEmptyString(value)) {
        errors.push(
          makeError(
            errors.length + 1,
            "REQUIRED_FIELD_EMPTY",
            entity,
            fieldName,
            "field must not be empty",
            `fill ${fieldName} with non-empty text`
          )
        );
      }
    }

    if ("facets" in sigil && !Array.isArray(sigil.facets)) {
      errors.push(
        makeError(
          errors.length + 1,
          "FIELD_TYPE_INVALID",
          entity,
          "facets",
          "facets must be an array when present",
          "set facets to an array or remove it"
        )
      );
    }

    if ("image" in sigil && typeof sigil.image !== "string") {
      errors.push(
        makeError(
          errors.length + 1,
          "FIELD_TYPE_INVALID",
          entity,
          "image",
          "image must be a string when present",
          "set image to a string path or remove it"
        )
      );
    }

    if (typeof sigil.slug === "string") {
      if (!SLUG_PATTERN.test(sigil.slug)) {
        errors.push(
          makeError(
            errors.length + 1,
            "SLUG_FORMAT_INVALID",
            entity,
            "slug",
            "slug must match lowercase kebab-case pattern",
            "use lowercase letters, numbers, and single hyphens only"
          )
        );
      }

      if (toNonEmptyString(sigil.slug)) {
        if (seenSlugs.has(sigil.slug)) {
          errors.push(
            makeError(
              errors.length + 1,
              "SLUG_DUPLICATE",
              entity,
              "slug",
              `slug duplicates ${seenSlugs.get(sigil.slug)}`,
              "use a unique slug value"
            )
          );
        } else {
          seenSlugs.set(sigil.slug, entity);
        }
      }
    }

    if (typeof sigil.image === "string" && sigil.image.trim().length > 0) {
      const normalized = sigil.image.replace(/^\/+/, "");
      const expectedPrefix = "media/sigils/";
      if (!normalized.startsWith(expectedPrefix)) {
        errors.push(
          makeError(
            errors.length + 1,
            "IMAGE_PATH_INVALID",
            entity,
            "image",
            "image path must start with /media/sigils/ or media/sigils/",
            "set image to /media/sigils/<filename>"
          )
        );
      } else {
        const relativePath = normalized.slice(expectedPrefix.length);
        const filePath = path.join(ROOT, "public", "media", "sigils", relativePath);
        if (!(await fileExists(filePath))) {
          errors.push(
            makeError(
              errors.length + 1,
              "IMAGE_MISSING_FILE",
              entity,
              "image",
              `file not found: public/media/sigils/${relativePath}`,
              "add the image file or remove the image field"
            )
          );
        }
      }
    }
  }

  return errors;
}

async function main() {
  try {
    const errors = await validate();

    if (errors.length === 0) {
      console.log("[validate:content] PASS");
      process.exit(0);
    }

    console.error(`[validate:content] FAILED (${errors.length} errors)`);
    for (const errorLine of errors) {
      console.error(errorLine);
    }
    process.exit(1);
  } catch (error) {
    console.error("[validate:content] FAILED (1 errors)");
    console.error(
      makeError(
        1,
        "FATAL_RUNTIME_ERROR",
        "validator",
        "runtime",
        error instanceof Error ? error.message : String(error),
        "inspect validate-content.mjs and rerun"
      )
    );
    process.exit(1);
  }
}

await main();
