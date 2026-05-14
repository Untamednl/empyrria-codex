import { access, readFile } from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const DATA_RELATIVE = "src/data/sigils.json";
const DATA_PATH = path.join(ROOT, DATA_RELATIVE);
const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const ISO_DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

function makeError(index, code, entity, field, reason, recommendation) {
  return `[E${String(index).padStart(3, "0")}] ${code} | ${entity} | ${field} | ${reason} | fix: ${recommendation}`;
}

function makeWarning(index, code, entity, field, reason, recommendation) {
  return `[W${String(index).padStart(3, "0")}] ${code} | ${entity} | ${field} | ${reason} | fix: ${recommendation}`;
}

async function fileExists(targetPath) {
  try {
    await access(targetPath);
    return true;
  } catch {
    return false;
  }
}

/** Optional sigil media fields: same path + on-disk rules as each other. */
const SIGIL_IMAGE_PATH_FIELDS = ["image", "mainImage"];

/**
 * If value is a non-empty string, require `media/sigils/…` prefix and existing file under `public/media/sigils/`.
 * @param {unknown} rawValue
 */
async function validateSigilImageField(errors, entity, fieldName, rawValue) {
  if (typeof rawValue !== "string" || rawValue.trim().length === 0) {
    return;
  }
  const normalized = rawValue.replace(/^\/+/, "");
  const expectedPrefix = "media/sigils/";
  if (!normalized.startsWith(expectedPrefix)) {
    errors.push(
      makeError(
        errors.length + 1,
        "IMAGE_PATH_INVALID",
        entity,
        fieldName,
        `${fieldName} path must start with /media/sigils/ or media/sigils/`,
        `set ${fieldName} to /media/sigils/<filename>`
      )
    );
    return;
  }
  const relativePath = normalized.slice(expectedPrefix.length);
  const filePath = path.join(ROOT, "public", "media", "sigils", relativePath);
  if (!(await fileExists(filePath))) {
    errors.push(
      makeError(
        errors.length + 1,
        "IMAGE_MISSING_FILE",
        entity,
        fieldName,
        `file not found: public/media/sigils/${relativePath}`,
        `add the file under public/media/sigils/ or remove ${fieldName}`
      )
    );
  }
}

function toNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

async function validate() {
  const errors = [];
  const warnings = [];

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
    return { errors, warnings };
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
    return { errors, warnings };
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
    return { errors, warnings };
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
    return { errors, warnings };
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
    return { errors, warnings };
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
    return { errors, warnings };
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

    const sigilLabel =
      typeof sigil.slug === "string" && sigil.slug.trim().length > 0
        ? `${entity} (${sigil.slug})`
        : entity;

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

    if ("sigilRelationships" in sigil && !Array.isArray(sigil.sigilRelationships)) {
      errors.push(
        makeError(
          errors.length + 1,
          "FIELD_TYPE_INVALID",
          entity,
          "sigilRelationships",
          "sigilRelationships must be an array when present",
          "set sigilRelationships to an array of strings or remove it"
        )
      );
    } else if (Array.isArray(sigil.sigilRelationships)) {
      for (let j = 0; j < sigil.sigilRelationships.length; j += 1) {
        const rel = sigil.sigilRelationships[j];
        if (typeof rel !== "string" || !toNonEmptyString(rel)) {
          errors.push(
            makeError(
              errors.length + 1,
              "FIELD_TYPE_INVALID",
              entity,
              `sigilRelationships[${j}]`,
              "each relationship entry must be a non-empty string",
              "use non-empty strings only (declared labels, no objects)"
            )
          );
        }
      }
    }

    for (const opt of ["characterLink", "loreContext", "placeOfOrigin"]) {
      if (opt in sigil && typeof sigil[opt] !== "string") {
        errors.push(
          makeError(
            errors.length + 1,
            "FIELD_TYPE_INVALID",
            entity,
            opt,
            `${opt} must be a string when present`,
            `set ${opt} to a string or remove it`
          )
        );
      }
    }

    if (sigil.status === "deprecated" && !toNonEmptyString(sigil.deprecatedReason)) {
      errors.push(
        makeError(
          errors.length + 1,
          "CANON_DEPRECATED_REASON_MISSING",
          sigilLabel,
          "deprecatedReason",
          "status is deprecated but deprecatedReason is missing or empty",
          "add a non-empty deprecatedReason"
        )
      );
    }

    if (sigil.status === "archived" && !toNonEmptyString(sigil.archivedReason)) {
      errors.push(
        makeError(
          errors.length + 1,
          "CANON_ARCHIVED_REASON_MISSING",
          sigilLabel,
          "archivedReason",
          "status is archived but archivedReason is missing or empty",
          "add a non-empty archivedReason"
        )
      );
    }

    if (sigil.status === "draft" && sigil.visibility === "public") {
      errors.push(
        makeError(
          errors.length + 1,
          "CANON_VISIBILITY_INVALID",
          sigilLabel,
          "visibility",
          "draft content must not use public visibility",
          "set visibility to hidden or internal"
        )
      );
    }

    if (sigil.status === "archived" && sigil.visibility === "public") {
      errors.push(
        makeError(
          errors.length + 1,
          "CANON_VISIBILITY_INVALID",
          sigilLabel,
          "visibility",
          "archived content must not use public visibility",
          "set visibility to archive_only or hidden"
        )
      );
    }

    if (sigil.status === "provisional" && sigil.visibility === "public") {
      warnings.push(
        makeWarning(
          warnings.length + 1,
          "CANON_VISIBILITY_REVIEW",
          sigilLabel,
          "visibility",
          "provisional public content should be explicitly marked",
          "use marked_public unless this is intentionally unmarked"
        )
      );
    }

    if (sigil.status === "approved" && sigil.visibility === "hidden") {
      warnings.push(
        makeWarning(
          warnings.length + 1,
          "CANON_VISIBILITY_REVIEW",
          sigilLabel,
          "visibility",
          "approved canon is hidden from public visibility",
          "confirm this is intentional and documented"
        )
      );
    }

    if (
      typeof sigil.lastCanonReview === "string" &&
      sigil.lastCanonReview.trim().length > 0 &&
      !ISO_DATE_PATTERN.test(sigil.lastCanonReview)
    ) {
      errors.push(
        makeError(
          errors.length + 1,
          "CANON_REVIEW_DATE_INVALID",
          sigilLabel,
          "lastCanonReview",
          "lastCanonReview must use YYYY-MM-DD format when present",
          "set lastCanonReview to an ISO date such as 2026-05-08"
        )
      );
    }

    for (const fieldName of SIGIL_IMAGE_PATH_FIELDS) {
      if (fieldName in sigil && typeof sigil[fieldName] !== "string") {
        errors.push(
          makeError(
            errors.length + 1,
            "FIELD_TYPE_INVALID",
            entity,
            fieldName,
            `${fieldName} must be a string when present`,
            `set ${fieldName} to a string path or remove it`
          )
        );
      }
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

    for (const fieldName of SIGIL_IMAGE_PATH_FIELDS) {
      await validateSigilImageField(errors, entity, fieldName, sigil[fieldName]);
    }
  }

  return { errors, warnings };
}

async function main() {
  try {
    const { errors, warnings } = await validate();

    if (errors.length === 0) {
      for (const warningLine of warnings) {
        console.warn(warningLine);
      }
      console.log("[validate:content] PASS");
      process.exit(0);
    }

    console.error(`[validate:content] FAILED (${errors.length} errors)`);
    for (const errorLine of errors) {
      console.error(errorLine);
    }
    for (const warningLine of warnings) {
      console.warn(warningLine);
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
