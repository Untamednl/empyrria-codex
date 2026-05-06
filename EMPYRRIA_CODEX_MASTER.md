# EMPYRRIA CODEX MASTER

NOTE:  
The system is now in a “stable demo state”.  
Changes should prioritize clarity, system depth, and controlled expansion.

### 📌 STEP LOG FORMAT (LOCKED)

Every step must be logged using this structure:

#### Step `<ID>` — `<Title>`

**Goal:**
Short description of the purpose

**Changes:**
- file path + what changed

**Unchanged:**
- list important untouched parts

**Checks:**
- astro check result
- build result
- validation notes

**Result:**
- what is now true

**Next Step:**
- exact next action

Rules:

- No step is complete without a log entry
- If not logged, it does not exist
- Logs must reflect real code, not intention

> Detailed implementation log.  
> Alignment rules: see EMPYRRIA_MASTER.md

Doc responsibility rule added to EMPYRRIA_MASTER.md.

## PROJECT

Empyrria Sigil Codex

## PROJECT NAMING — LOCKED

- Project name: Empyrria
- Codex name: Empyrria Sigil Codex
- The codex represents the symbolic and structural layer of the Empyrria system.

## CREATOR

Zierota is the creator of Empyrria, all sigils, characters, doctrine, and the animateren project.

## MY ROLE

Build and maintain the public-facing codex interface.

## WORKFLOW / PROJECT RULES

### Canon & interface

- Do not invent canon
- Do not reinterpret lore
- Only structure and present existing material
- All content must reflect Zierota’s system

### CURSOR EXECUTION RULE

Whenever a task can be performed inside Cursor, it must be done through a clear, ready-to-use Cursor prompt.

Rules:

- Do not give vague manual coding instructions.
- Do not edit files without first defining the task.
- Use Cursor prompts for implementation, refactoring, file creation, validation, documentation updates, and changelog updates.
- Manual instructions are only allowed for actions outside Cursor, such as installing software, opening programs, selecting setup options, or checking browser output.
- Every Cursor task must update `EMPYRRIA_CODEX_MASTER.md` with:
  - completed step
  - current step
  - next step
  - changelog entry

## ADMIN CONTENT WORKFLOW — LOCKED

### Goal

Zierota can manage sigil content herself through a protected admin interface.

### Rules

- Cursor/developer builds and maintains the codex system.
- Zierota owns and manages canon content.
- Long-term content edits should happen through admin UI, not manual Cursor editing.
- Admin must support adding/editing sigils, image paths, status, tags/facets, doctrine text, and Underlay/System Context.
- Public codex must remain static, fast, and clean.
- No public user-generated content.
- No comments.
- No open registration.

### Preferred direction

Use a Git-based CMS/admin layer; locked stack and workflows are defined in **ADMIN / CMS PLAN — LOCKED**.

### Implementation constraint — LOCKED

**Do not implement** Netlify Identity or Git Gateway wiring until **Step 14** per **ADMIN / CMS PLAN — LOCKED**. **Step 13** applies **STEP 12 — CMS FIELD MODEL — LOCKED** for Decap configuration; **Step 13B** ships the static `/admin` shell; **Step 13C** adds `public/admin/config.yml` (Git Gateway backend, `sigils` files collection → `src/data/sigils.json`) **without** running Identity/Git Gateway or `npx decap-server` unless a later step adds **local_backend** for local editing.

### Planned steps (roadmap)

See **ADMIN / CMS PLAN — LOCKED** for the numbered roadmap (Steps 11–16). The former “first approved sigil visuals only” milestone is **Step 16** after the admin pipeline is live.

## ADMIN / CMS PLAN — LOCKED

### Decision

Use **Netlify + Decap CMS + Netlify Identity/Git Gateway** for the first admin version.

### Reason

- Simplest Decap CMS authentication path.
- No custom OAuth worker required for V1.
- Zierota can edit content through `/admin` without using Cursor.
- Content remains Git-backed and static.
- No database required.

### Admin route

- `/admin`

### Zierota workflow

1. Zierota receives an admin invite.
2. She opens `/admin`.
3. She logs in with her email.
4. She adds or edits sigils using form fields.
5. She uploads or selects approved sigil visuals.
6. She saves/publishes changes.
7. Netlify triggers a rebuild.
8. She checks the public codex after deployment.

### Zierota does NOT need

- Cursor
- Git knowledge
- manual JSON editing
- coding
- local installs

### Developer workflow

- Developer/Cursor builds the CMS system.
- Developer controls schema/config.
- Developer protects canon rules and data structure.
- Developer reviews setup and deployment.

### Constraints

- No public registration.
- No comments.
- No public user-generated content.
- No database.
- No unfinished placeholder content.
- Admin edits must follow Zierota-approved canon rules.

### Roadmap

- **Step 11 — Admin/CMS planning**
- **Step 12 — CMS-compatible data model and field design**
- **Step 13 — Add Decap CMS admin interface**
- **Step 14 — Netlify Identity/Git Gateway setup**
- **Step 15 — Test admin editing workflow**
- **Step 16 — Add first approved sigil visuals through admin**

## STEP 12 — CMS FIELD MODEL — LOCKED

### Purpose

Translate the existing V1 sigil record shape (as used in `src/data/sigils.json` and `sigils.schema.json`) into a **Decap CMS** collection Zierota can use without touching raw structure. No new top-level fields are introduced; no existing fields are removed. Optional fields stay optional.

### Baseline sigil object (current JSON)

Each entry in the `sigils` array uses:

| Field | In current repo data | Notes |
| ----- | -------------------- | ----- |
| `slug` | Yes | Stable URL key; kebab-case per schema pattern. |
| `name` | Yes | Display title. |
| `doctrine` | Yes | Verbatim / approved Meaning–Function text (multiline string). |
| `underlay` | Yes | Multiline system/context block (structured lines in prose). |
| `facets` | Yes | Array of category strings (taxonomy-driven). |
| `image` | Optional | Public path to SVG (e.g. under `/media/sigils/`). |
| `canonStatus` | Optional (reserved) | Not present in current `sigils.json`; include in CMS when schema adopts it so entries stay forward-compatible without inventing other keys. |

Root document fields outside each sigil (`$schema`, `version`, top-level `sigils` array) remain **out of this collection** — they are version/packaging concerns handled at build or by the developer in Step 13.

### Collection (Decap CMS)

| Setting | Value |
| ------- | ----- |
| **Collection `name`** | `sigils` |
| **Editor label** | Sigils (or “Sigil entries”) — clear for one admin user. |
| **One CMS entry** | One sigil (same fields as one object in the `sigils` array). |

**Persistence note (Step 13 implementation, not done here):** Decap is usually configured as a **folder collection** (one file per sigil) or another pattern that still **compiles to** the existing consumer shape: `version` + `sigils[]` with the same per-sigil keys. The **field model below is the contract** regardless of whether one or many source files feed the build.

### Collection definition (YAML — reference for Step 13)

Below is the **authoritative field model** to drop into `admin/config.yml` (or equivalent) when Step 13 wires the admin UI. Paths and `folder`/`create`/`extension` are placeholders until the repo layout is chosen.

```yaml
collections:
  - name: sigils
    label: Sigils
    label_singular: Sigil
    folder: content/sigils # TBD in Step 13 — must align with chosen Git-backed path
    create: true
    slug: "{{slug}}"
    extension: json
    format: json
    fields:
      # --- Identity ---
      - name: name
        label: Sigil name
        widget: string
        required: true
        hint: "The title visitors see on the codex (not the URL)."

      - name: slug
        label: URL key (stable ID)
        widget: string
        required: true
        pattern: ['^[a-z0-9]+(?:-[a-z0-9]+)*$', 'Use lowercase words separated by hyphens only.']
        hint: "Slug (ID — do not change). Used internally. Only set this once."

      # --- Meaning ---
      - name: doctrine
        label: Doctrine
        widget: text
        required: true
        hint: "Primary teaching text for this sigil (approved wording only)."

      # --- System layer ---
      - name: underlay
        label: Underlay / System context
        widget: text
        required: true
        hint: "Category, geometry, color logic, usage — the structured system layer (approved wording only)."

      # --- Classification ---
      - name: facets
        label: Facets / Categories
        widget: list
        required: false
        summary: "{{fields.facet}}"
        field:
          name: facet
          label: Category
          widget: string
        hint: "One line per category (e.g. State Sigil). Use only taxonomy Zierota has approved."

      # --- Visual ---
      - name: image
        label: Sigil image (optional)
        widget: image
        required: false
        media_folder: public/media/sigils
        public_folder: /media/sigils
        hint: "SVG preferred. Leave empty if this sigil has no image yet."

      # --- Canon status (when used) ---
      - name: canonStatus
        label: Canon status
        widget: select
        required: false
        options:
          - { label: Canon, value: canon }
          - { label: Provisional, value: provisional }
          - { label: Deprecated, value: deprecated }
        hint: "Only if this entry participates in canon-status workflow; omit or leave unset if not used."
```

**Facets and JSON `string[]`:** The list widget above uses a small per-item object shape in the editor (`facet` per row). Step 13 must **normalize** to the existing JSON array of plain strings (`facets: ["State Sigil", …]`) when writing `sigils.json` or merging sources — no new semantics, only storage glue.

**Image path:** Committed value must remain a **string path** compatible with today’s app (e.g. `/media/sigils/name.svg`), matching `sigils.schema.json` / loader expectations.

### Field list (summary)

| `name` (JSON key) | Widget | Required | Admin label |
| ----------------- | ------ | -------- | ----------- |
| `slug` | string | yes | URL key (stable ID) |
| `name` | string | yes | Sigil name |
| `doctrine` | text (multiline) | yes | Doctrine |
| `underlay` | text (multiline) | yes | Underlay / System context |
| `facets` | list (normalized to `string[]`) | no (JSON Schema); every shipped sigil today has at least one — keep filled for browse/filter | Facets / Categories |
| `image` | image | no | Sigil image (optional) |
| `canonStatus` | select | no | Canon status |

### UX grouping (Zierota-facing)

Use the **Identity → Meaning → System layer → Classification → Visual** flow in the admin UI (as in the YAML). Copy avoids developer jargon (“slug” is labeled as URL key; “doctrine” and “underlay” match codex language). Hints remind: approved wording only, taxonomy for facets; the slug hint states it is internal and set once only.

### Validation rules

| Rule | How it is enforced |
| ---- | ------------------ |
| **Slug stable after creation** | **Process + review:** Slug field copy warns it is internal and set once; Zierota should not rename a published slug. Decap does not hard-lock a field after first save — if hard enforcement is required later, Step 13+ can add custom preview / CI check that rejects slug changes for existing files. |
| **Slug format** | Match existing JSON Schema: lowercase kebab-case (`^[a-z0-9]+(?:-[a-z0-9]+)*$`). |
| **Doctrine non-empty** | `required: true` on doctrine; build/CI should reject empty strings to match `minLength: 1` in schema. |
| **Underlay non-empty** | `required: true` in CMS; aligns with operational expectation (current entries all have content; schema does not mark `underlay` required — CMS is stricter for editorial quality). |
| **Name non-empty** | `required: true`; matches schema `minLength: 1`. |
| **No free-form structural changes** | Collection fields are **closed** — editors must not add keys outside this model; `additionalProperties: false` in JSON Schema stays the guardrail at data level. |
| **Canon status** | Only the three enumerated values when the field is present. |
| **Image** | Optional; when set, must resolve under the configured public media path for sigils. |

### Constraints (recap)

- Do not invent fields beyond this set (and root `version` / packaging handled outside the collection).
- Do not remove fields the codex already uses.
- Persisted sigil objects must remain compatible with the current app loader and `sigils.schema.json` (updated in a later step if `canonStatus` is formally added to schema).

## STEP 12 VALIDATION NOTES

_Step 12 validation lock. No application code or `sigils.json` changes._

- **JSON alignment:** CMS field model in `STEP 12 — CMS FIELD MODEL — LOCKED` matches the existing per-sigil object shape (`slug`, `name`, `doctrine`, `underlay`, `facets`, optional `image`, optional `canonStatus` when used) and root packaging (`version`, `sigils[]`) remains outside the collection.
- **No new canon fields:** No additional keys were introduced beyond that locked set.
- **Required vs optional:** `slug`, `name`, `doctrine`, and `underlay` are required in the CMS reference; `facets` follows schema (optional at JSON Schema level, editorially kept filled); `image` and `canonStatus` remain optional.
- **Facets:** List widget maps to the existing `string[]` contract, with Step 13 responsible for normalizing list rows to a plain string array in persisted data.
- **Image:** Optional; `public/media/sigils` / `/media/sigils` align with **SIGIL VISUAL INTEGRATION — LOCKED** and Step 10 asset pipeline.
- **UX grouping:** Identity → Meaning → System layer → Classification → Visual improves clarity for a single admin editor.
- **Slug copy:** Hint updated to **“Slug (ID — do not change). Used internally. Only set this once.”** to reduce accidental slug edits.
- **Scope:** No code or data file changes were made in this validation step.

### Step 12 approved

Step 12 is validated and approved. Proceed to **Step 13 — Add Decap CMS admin interface** when ready.

## CURRENT VERSION

V1 — Sigils Only

## STACK

- Astro
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- Static JSON
- Fuse.js (sigil browse search)
- Cursor
- Git

## MVP FEATURES

- Home page
- Sigil grid page
- Sigil detail page
- Search
- Filter
- Sort
- About page

## DESIGN RULES

- Dark background
- Gold = doctrine
- Cyan = Underlay
- Clean, minimal
- No fantasy clutter
- No database/table feel

## SIGIL VISUAL INTEGRATION — LOCKED

### Goal

Define how sigil visuals should appear inside the codex.

### Rules

- Sigils must be SVG when possible.
- Transparent background only.
- Square aspect ratio preferred.
- Visual weight must not overpower the sigil name.
- Stroke style should be consistent across all sigils.
- No glow, no effects, no animation.
- Visual clarity is more important than artistic complexity.
- Sigils represent system structure, not decoration.

### Placement

- Always above the sigil name.
- Centered.
- Fixed max size (consistent across all sigils).
- Maintain spacing between image and title.

### Constraint

- Only Zierota-approved visuals may be used.
- No placeholder or generated sigils.

## CANON RULES

- Zierota controls canon
- No new sigils created here
- No assumptions or guesses
- Only approved content
- System-level definitions may reference files under `canon/system/`.

## EMPYRRIA SYSTEM MODEL — LOCKED

_Alignment note: Layer names and relationships below follow Zierota’s **EMPYRRIA SYSTEM ARCHITECTURE — MASTER TABLE v2.2**. Verbatim definitions for layers not quoted from this repository’s canon files must be taken from that source document. The PDF lives at `canon/system/EMPYRRIA_SYSTEM_ARCHITECTURE_v2.2.pdf` (see `canon/system/README.md`); if a placeholder is present, replace it with Zierota’s authoritative export before using it as a definition source._

### Core of Being

- **Definition (canon-backed):** In approved sigil source, Soulflame “Represents the Core of Being” and “expresses the unchangeable inner identity of a person”; Soulflame “is not a state and not a phenomenon.” (`canon/EMPYRRIA_SIGIL_CODEX_SOURCE.md`)
- **Role in system:** Foundational identity layer; distinguished from state and phenomenon in the same source.

### Doctrine

- **Definition (codex usage):** Canonical teaching text for a sigil entry — stored in `doctrine` in `sigils.json`, sourced from approved Meaning / Function lines.
- **Role in system:** Primary readable doctrine on the codex (UI: gold).

### State (axis-based system)

- **Definition (canon-backed):** Approved entries include **State Sigil** as a category (e.g. Top-Clear-Mind, Top-Solid-Anchor / Sha-karys); meanings describe mastery / stability of consciousness rather than replacing personality where stated. (`canon/EMPYRRIA_SIGIL_CODEX_SOURCE.md`)
- **Role in system:** Operational states expressed in the taxonomy; **full axis model per v2.2** is not duplicated here — see architecture master table.

### Discipline

- **Definition (source):** Authoritative wording in **EMPYRRIA SYSTEM ARCHITECTURE — MASTER TABLE v2.2** (not reprinted here).
- **Role in system:** Layer sigils may engage with disciplined practice where the architecture defines it; codex does not model discipline as its own JSON field in V1.

### Phenomenon

- **Definition (canon-backed contrast):** Soulflame is explicitly **not** a phenomenon in approved source (`canon/EMPYRRIA_SIGIL_CODEX_SOURCE.md`). Further phenomenon semantics per **v2.2**.
- **Role in system:** Distinguished from Core / Soulflame class entries where Zierota’s table specifies.

### Sigil (symbolic representation layer)

- **Definition (canon-backed):** Entries combine Meaning / Function, geometry, color logic, and usage context as approved; symbolic structure described per entry (e.g. “Energy-oriented symbolic structure”, “Radial symmetry”, “Dual structure / mirrored form”). (`canon/EMPYRRIA_SIGIL_CODEX_SOURCE.md`)
- **Role in system:** Public codex V1 presents sigils as browseable symbolic entries with doctrine + underlay fields.

### Warcry

- **Definition (source):** Authoritative wording in **EMPYRRIA SYSTEM ARCHITECTURE — MASTER TABLE v2.2** (not reprinted here).
- **Role in system:** Not a field in V1 `sigils.json`; future layers may link when architecture and canon extend.

### Sigil representation rule — LOCKED

**Sigils are not standalone entities.** In Empyrria’s system they represent relations to deeper structure, including:

- **Core** (Core of Being / identity-class grounding per architecture and canon)
- **Doctrine** (canonical teaching text as approved)
- **State** (including state-class sigils and state semantics per taxonomy / v2.2)
- **Discipline** (per architecture table — see v2.2)

The codex **surfaces** approved textual fields only; it does not redefine these layers.

## FUTURE CODEX DIRECTION

This codex **currently**:

- Focuses on **Sigils** (V1 — Sigils Only).

**Future expansion** (when Zierota approves scope):

- **Multi-layer codex** — explicit navigation or views keyed to architecture layers beyond the sigil list alone.
- **Relational structure** — links between entities (e.g. relational sigils, dual-state interaction) matching system semantics.
- **State interaction model** — presentation aligned with the axis-based state system from architecture docs.
- **System mapping** — structured browsing that reflects Empyrria’s model (not only flat entries).

### Architecture alignment constraint — LOCKED

**Do not restructure the current implementation** to match the full architecture prematurely. This section is **forward-looking alignment** only: V1 routes, JSON shape, and UI remain as shipped until a planned migration step with Zierota approval.

## CURRENT STEP

**Current Phase:**  
Infrastructure Hardening Phase

**Current Step:**  
STEP 2 — First Official Checkpoint (completed)

**Status:**  
Stable / ready for feedback iteration

**Next Step:**  
STEP 3 — Rollback Runbook — LOCKED

## STEPS (living)

| Field | Value |
| ----- | ----- |
| **Last completed step** | Step 28 — Codex Back-Link Integration (**Locked step entries → Step 28**) |
| **Current step** | STEP 2 — First Official Checkpoint (completed) |
| **Next step** | STEP 3 — Rollback Runbook — LOCKED |

Recent locked entries (presentation + Codex layer):

- **Step 19** — Showcase page (presentation layer) — **Locked step entries → Step 19**
- **Step 20** — Subtle visual polish — **Locked step entries → Step 20**
- **Step 21** — Identity polish — **Locked step entries → Step 21**
- **Step 22** — Codex page (What is a Sigil) — **Locked step entries → Step 22**
- **Step 23** — Link Codex from showcase — **Locked step entries → Step 23**
- **Step 24** — Codex presence signal — **Locked step entries → Step 24**
- **Step 25** — System Architecture Codex page — **Locked step entries → Step 25**
- **Step 26** — Link System Architecture into navigation flow — **Locked step entries → Step 26**
- **Step 27** — Codex Hub (/codex index page) — **Locked step entries → Step 27**
- **Step 28** — Codex Back-Link Integration — **Locked step entries → Step 28**

#### Step 25 — System Architecture Codex page

**Goal:**
Translate the system architecture into a clear, cinematic Codex page that explains how everything fits together.

**Changes:**

- `src/pages/codex/system-architecture.astro` — added a standalone cinematic Codex entry page with gradient title, layered architecture sections (Core of Being, Doctrine, State, Discipline, Phenomenon, Sigil, Command / War), alignment callout block, and back link to `/codex/what-is-a-sigil`.

**Unchanged:**

- `src/data/sigils.json`
- Schema and CMS configuration/workflow
- Existing Codex page at `/codex/what-is-a-sigil`

**Checks:**

- `npx astro check` — pass (0 errors, 0 warnings, 0 hints)
- `npm run build` — pass
- Validation notes: New route builds successfully as `/codex/system-architecture`.

**Result:**
Second Codex page now exists and clearly communicates system structure and alignment.

**Next Step:**
Implement Step 26 navigation flow between showcase and both Codex pages.

#### Step 26 — Link System Architecture into navigation flow

**Goal:**
Connect `/codex/system-architecture` into the visible user journey so visitors can move naturally: Showcase → What is a Sigil → System Architecture → back.

**Changes:**

- `src/pages/codex/what-is-a-sigil.astro` — added a visible forward link (`→ Continue to System Architecture`) to `/codex/system-architecture`, styled to match existing restrained Codex accent/link behavior.
- `src/pages/codex/system-architecture.astro` — kept existing back link to `/codex/what-is-a-sigil` and added an additional visible back link to `/showcase` for return navigation.

**Unchanged:**

- `src/data/sigils.json`
- Schema files and validation model
- Decap CMS config and workflow
- `preview_link` widget behavior/scripts
- Slug behavior and sigil routes

**Checks:**

- `npx astro check` — pass
- `npm run build` — pass
- Validation notes: `/showcase`, `/codex/what-is-a-sigil`, and `/codex/system-architecture` all build and the forward/back flow is now explicitly visible.

**Result:**
Codex navigation flow is now connected in the visible journey: `/showcase` → `/codex/what-is-a-sigil` → `/codex/system-architecture` with clear back paths.

**Next Step:**
Create a central Codex hub route (`/codex`) for current and future entries.

#### Step 27 — Codex Hub (/codex index page)

**Goal:**
Create a central Codex index page at `/codex` that acts as the entry point for all Codex content.

**Changes:**

- `src/pages/codex/index.astro` — added new static Codex hub page with:
  - title `Codex`
  - intro line: “The Codex contains the core principles and structure behind sigils.”
  - link list to `/codex/what-is-a-sigil` and `/codex/system-architecture`
  - minimal styling aligned with existing Codex typography, spacing, gradient heading, and restrained violet link style

**Unchanged:**

- `src/data/sigils.json`
- Schema files
- Decap CMS config
- `preview_link` widget
- Slug behavior and routing logic
- Existing codex pages (`/codex/what-is-a-sigil`, `/codex/system-architecture`)

**Checks:**

- `npx astro check` — pass
- `npm run build` — pass
- Validation notes: `/codex` builds and links to both existing Codex pages.

**Result:**
Codex now has a central, static hub page at `/codex` that cleanly exposes all current Codex entries.

**Next Step:**
Add explicit Codex hub back-linking from all Codex entry pages.

#### Step 28 — Codex Back-Link Integration

**Goal:**
Make Codex pages aware of the Codex hub by adding a visible back-link to `/codex`, completing the loop between hub and entries.

**Changes:**

- `src/pages/codex/what-is-a-sigil.astro` — added visible link `← Back to Codex` pointing to `/codex` near the existing bottom navigation links; styled with subtle violet accent matching current Codex link treatment.
- `src/pages/codex/system-architecture.astro` — added visible link `← Back to Codex` pointing to `/codex` in the same bottom navigation area with matching subtle violet style.

**Unchanged:**

- `src/data/sigils.json`
- Schema files
- Decap CMS config
- `preview_link` widget
- Slug behavior
- Routing system
- Existing content text and existing navigation links

**Checks:**

- Local manual route test passed:
  - `/showcase`
  - `/codex`
  - `/codex/what-is-a-sigil`
  - `/codex/system-architecture`
- Local navigation loop passed:
  - `showcase → sigil → system → codex → sigil → codex → system → showcase`
- Visual check passed:
  - link spacing
  - violet accent consistency
  - bottom navigation placement
  - no floating/misaligned links
- Cloudflare external tunnel test passed:
  - `/showcase` and Codex navigation flow matched localhost
- Hard refresh check passed:
  - styles loaded correctly, no stale cached version observed
- `npx astro check` — pass
- `npm run build` — pass
- Validation notes: Both Codex entry pages now include a direct link back to `/codex`; existing navigation remains intact.

**Result:**
Step 28 is fully validated locally and through Cloudflare and approved to proceed to Step 29.

**Next Step:**
Step 29 — TBD (next Codex expansion placeholder).

## STEP 13B VALIDATION NOTES

_Step 13B — static admin shell only. No `src/` page or component changes for the codex UI. No `sigils.json` or canon edits._

### What was added

- **`public/admin/index.html`** — title “Empyrria Admin”; loads `https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js` (no local styling, no CMS schema, no authentication).

### Dev server `/admin` URL

- **Vite dev** does not serve `public/admin/index.html` for bare `/admin` or `/admin/` (404 without help). **`astro.config.mjs`** includes a **dev-only** middleware that rewrites `/admin` and `/admin/` to `/admin/index.html` so `http://localhost:4321/admin` matches the **ADMIN / CMS PLAN — LOCKED** route. This is **not** Decap `config.yml` and not production application UI.
- **`astro preview`** (static `dist/`) returns **200** for `/admin`, `/admin/`, and `/admin/index.html` without that middleware.

### What passed (`npm run dev`)

- Dev server starts; **`GET /admin`** and **`GET /admin/`** return **200** after the rewrite.
- Response body includes the Decap script tag and is not blank; Decap’s UI is expected to load in the browser (CDN script; no local bundle).

### What was explicitly not done (13B scope)

- ~~No `config.yml`~~ — added in **Step 13C** (`public/admin/config.yml`).
- No Netlify Identity / Git Gateway (still deferred to Step 14).
- Editorial wiring beyond `config.yml` is limited to the schema in that file until Step 13D+.

## STEP 13C — DECAP CONFIG

_Decap configuration only. No edits to `src/data/sigils.json` or canon in this step._

- **`public/admin/config.yml`** — `backend.name: git-gateway`, `branch: main`; `media_folder: public/media/sigils`, `public_folder: /media/sigils`.
- **Files collection:** Decap expects a **`files`** list for a single JSON document; the collection is named `sigils`, with one file entry (`name: codex`) pointing at **`src/data/sigils.json`**, `format: json`, fields `version` (string, required) and `sigils` (list of objects: `name`, `slug`, `doctrine`, `underlay`, `facets`, `image` per task; `underlay` / `facets` / `image` optional in config where noted).
- **`facets` widget:** Uses Decap’s **`list` widget with no nested `field`/`fields`** so existing on-disk values stay a **`string[]`**. A nested `facet` subfield would round-trip as objects and would not match current JSON; Step 13D should confirm load/save behavior in the UI.
- **`$schema`:** Not declared as a CMS field; Decap may strip or preserve unknown top-level keys on save — treat as a **Step 13D / editorial** risk, not changed here.
- **Build tooling:** `npm run build` and `npx astro check` pass after adding the config; no `src/pages` or public codex routes were modified for this step.

## STEP 13D VALIDATION NOTES

_Step 13D — validate local admin config. No `sigils.json` or canon edits; no config/code changes unless a bug was found (none found)._

### Config delivery (`npm run dev`)

- **`GET http://localhost:4321/admin`** returns **200**; HTML includes the Decap CDN script tag (admin shell from Step 13B).
- **`GET http://localhost:4321/admin/config.yml`** returns **200** with the expected YAML body (same origin as `/admin`, suitable for Decap’s default config fetch).
- **Fixed dev routing for `/admin/config.yml` (Decap config loading issue):** In dev, Vite could serve the wrong asset or MIME type for `/admin/config.yml`, so Decap showed **“Failed to load `config.yml`”**. **`astro.config.mjs`** `configureServer` middleware now **short-circuits `GET /admin/config.yml`** by reading `public/admin/config.yml` and responding with **`Content-Type: text/yaml; charset=utf-8`**. The existing **`/admin` → `/admin/index.html`** rewrite is unchanged. **`configureServer` does not run on production build**; `public/` copies in `dist/` remain the preview/production path.
- **YAML parse** (via the repo’s `yaml` package on `public/admin/config.yml`) succeeds — **no structural/syntax errors** in the checked file.

### Schema vs UI expectations

- **Collection:** Parsed config includes **`collections[0].name: sigils`**, **`label: Sigils`**, and a **`files`** entry targeting **`src/data/sigils.json`** (`format: json`) — matches the intended **single-file** Sigils document (entry id `codex` in CMS).
- **Top-level fields:** **`Version`** (`version`, string) and **`Sigils`** (`sigils`, list) are present with the expected labels.
- **Per-sigil nested fields** under the `sigils` list: **Name**, **Slug (ID — do not change)**, **Doctrine**, **Underlay / System Context**, **Facets / Categories**, **Image** — all present in config with the intended widgets/required flags per **Step 13C — DECAP CONFIG**.

### Login / Git Gateway (expected limitations)

- **`backend.name: git-gateway`** remains configured for **Step 14** (Netlify Identity + Git Gateway). **Login and persistence are not expected to work end-to-end** in this environment without that wiring; **saving to Git** is out of scope for 13D and acceptable per **ADMIN / CMS PLAN — LOCKED**.

### Regression

- **`npm run build`** and **`npx astro check`** both pass after validation (no edits applied in 13D).

### Browser note

- Full **Decap React UI** (e.g. absence of “Failed to load `config.yml`”, sidebar collection chrome) was **not** driven from a headless browser in this run; checks were **HTTP + YAML parse + field inventory**. If anything differs in a graphical session, capture it in a follow-up or Step 14 prep.

### Step 14 readiness

- **Step 14 is approved to begin** — config file is served and parses; collection and field model match the locked `sigils.json` shape for local admin behavior validation. Proceed with **Netlify Identity + Git Gateway** when ready.

## STEP 6 VALIDATION NOTES

- Sigil browse grid exists at `/sigils`.
- Four canon sigils generate individual static detail pages.
- No canon JSON was modified during UI build.
- `npm run build` passes.
- `npx astro check` passes.
- Next functional layer is search/filter/sort.

## STEP 7 VALIDATION NOTES

_Pre–Step 8 validation (2026-05-02). Canon files and `sigils.json` were not modified._

### What passed

- **Dev server:** `npm run dev` starts successfully; Astro reports ready at `http://localhost:4321/`.
- **Routes (HTTP smoke):** `GET /`, `/sigils`, and all four `/sigils/<slug>/` detail routes returned **200** while dev server was running.
- **Search (Fuse parity):** A Node script using the same Fuse options as `src/pages/sigils/index.astro` matched expectations:
  - `Soulflame` → Soulflame Sigil only
  - `Clear` → Top-Clear-Mind only
  - `Anchor` → Top-Solid-Anchor / Sha-karys only
  - `Zenga` → Zenga Zellia only
  - `Sha-karys` → Top-Solid-Anchor / Sha-karys only
  - `nonsenseword` → **0** results (empty state copy **“No sigils match your search.”** is appropriate)
- **Filter / sort / combined:** The same pipeline logic as the client script was exercised for search + facet + sort combinations (including `Clear` + `State Sigil`, empty query + facet + A–Z, and query + facet + Z–A); ordering and filtering behaved as intended.
- **Navigation (build output):** Built HTML includes card links to `/sigils/<slug>` and detail pages include a back link to `/sigils` (“← All sigils”).
- **Regression:** `npm run build` and `npx astro check` both pass (re-run during this validation).

### What failed

- Nothing observed in scope.

### Bugs found

- None. **No code changes** were required.

### Step 8 readiness

- **Approved to begin** — Step 7 browse behavior matches expectations; no fixes applied.

_Note: Full interactive UI clicks were not executed in a graphical browser from this environment; behavior was validated via dev HTTP checks, Fuse parity against live script settings, pipeline simulation, and inspection of built markup._

## STEP 8 FINAL VALIDATION NOTES

_Step 8.4 — Final UI validation lock. No code changes in this step._

- Sigil names now have restrained identity color per role.
- Doctrine is clearly the primary section anchor.
- Underlay / System Context is structured and secondary, not chaotic.
- Underlay label/value pairs are readable and scannable.
- Typography hierarchy is clear and comfortable.
- Spacing between sections feels balanced.
- Color usage is controlled (no glow, no neon, no clutter).
- No canon content was modified.
- `npm run build` passes.
- `npx astro check` passes.

### Step 8 approved

Step 8 is approved and locked. Proceed to Step 9 when ready.

## STEP 10 VALIDATION NOTES

_Step 10 — Sigil asset pipeline (SVG-first). Validation lock; no code changes in this step._

- `public/media/sigils/` exists and is ready for approved SVG assets.
- No placeholder or invented visuals were added.
- `image` field remains optional.
- Cards and detail pages render images only if `image` exists.
- Current UI remains clean when images are absent.
- No canon text or `sigils.json` content was modified.
- `npm run build` passes.
- `npx astro check` passes.

### Step 10 approved

Step 10 is approved and locked. Proceed to Step 11 — Admin/CMS planning when ready (see **ADMIN / CMS PLAN — LOCKED**).

## MASTER MODE WORKFLOW — LOCKED

This project uses the same disciplined workflow style as KickReforge, adapted for Empyrria Codex.

### META MODE

Controls project direction.

- Defines current phase.
- Prevents scope drift.
- Confirms whether the project is still V1 Sigils Only.
- Approves phase transitions.

### ARCHITECT MODE

Controls structure.

- Defines folders, routes, data files, components, and page relationships.
- Ensures no hidden dependencies.
- Keeps the project modular and maintainable.

### ENGINEER MODE

Controls implementation reliability.

- Implements only approved tasks.
- Runs build and validation checks.
- Prevents regressions.
- Updates the master document after each completed step.

### CONSTRAINT MODE

Protects canon and boundaries.

- No invented sigils.
- No rewritten doctrine.
- No unapproved lore.
- No overdesigned UI.
- No user-generated canon.
- Public content must be source-backed or approved by Zierota.

### CREATIVE MODE

Controls atmosphere only.

- May suggest layout, typography, spacing, color mood, and visual polish.
- Must not create or alter canon.
- Must stay restrained, readable, and aligned with Empyrria.

### COMPILER MODE

Turns approved decisions into execution.

- Produces ready-to-use Cursor prompts.
- Produces changelog updates.
- Produces structured implementation instructions.
- Keeps outputs copy-ready.

## STANDARD STEP FLOW — LOCKED

Every development step must follow:

1. Research or source check
2. Plan
3. Cursor prompt
4. Cursor implementation
5. Validation
6. Master document update
7. Next step lock

## REGRESSION RULE — LOCKED

After each major step:

- `npm run build` must pass.
- `npx astro check` must pass.
- No canon JSON may change unless the step explicitly allows it.
- `EMPYRRIA_CODEX_MASTER.md` must be updated.
- If a step changes public content, Zierota review is required before public release.

## CANON SAFETY RULE — LOCKED

Cursor may structure, display, filter, and link canon.

Cursor may not invent, rewrite, expand, or reinterpret canon.

## PRE-NEXT-STEP TEST GATE — LOCKED

Before starting any new development step, the previous step must be tested and locked.

Required before moving forward:

- Run the dev server when UI behavior changed.
- Manually test the affected page(s).
- Confirm navigation still works.
- Run `npm run build`.
- Run `npx astro check`.
- Document results in a validation notes section.
- Only then approve the next step.

Rules:

- Do not start polish or new features before testing the previous feature.
- If a bug is found, fix only the smallest confirmed issue.
- Do not redesign during validation.
- Do not modify canon content during validation unless the test step specifically allows it.
- Every validation must be logged in `EMPYRRIA_CODEX_MASTER.md`.

## STEP 9 DESIGN — MEDIA INTEGRATION

_Design only — Step 9. This section stays **future-ready documentation**: animateren videos are not finished yet, so **no visible video UI, iframe/embed, or placeholder blocks** are built until Zierota ships real clips and approves wiring. Step 9.1 focuses on **readiness planning** only (see §7)._

### 1. Current sigil model (baseline)

| Field | Role |
| ----- | ----- |
| `slug` | Stable URL key and join identifier for sigil ↔ media linking. |
| `name` | Display title; identity tint in UI is presentation-only. |
| `doctrine` | Canonical textual layer (gold / primary reading). |
| `underlay` | Structured system/context fields (cyan / secondary text). |
| `facets` | Category filters; from Zierota’s taxonomy only. |

The TypeScript model also allows optional `image` (static asset path); current JSON does not populate it. Media for animateren is **orthogonal** to `image`: video is referential, not a replacement sigil glyph unless explicitly defined later.

### 2. Minimal media extension (proposed data shape)

Add optional fields **only** at the sigil level for the first implementation wave. All are **non-canon**: they point to or describe external media; they do not replace `doctrine` or `underlay` text.

| Field | Type | Purpose |
| ----- | ----- | ----- |
| `videoUrl` | `string` (required when media block exists) | HTTPS URL to the video asset or canonical embed endpoint (e.g. animateren-hosted file or approved iframe src pattern). |
| `videoTimestamp` | `number` (optional) | Start offset in **seconds** from the beginning of `videoUrl` (simple, locale-safe). Omit = start at 0. |
| `mediaDescription` | `string` (optional) | Short, Zierota-approved caption or usage note for the clip (e.g. “Reference motion for Geometry Logic”). Not doctrine; optional search/index helper later. |

**Grouping:** Introduce a single optional object on `Sigil` to avoid polluting the top-level namespace and to ease migration to multiple clips:

```text
media?: {
  videoUrl: string
  videoTimestamp?: number
  mediaDescription?: string
}
```

When implementation activates **after** videos exist: schema may flatten or nest per tooling preference as long as semantics match.

### 3. Detail page — UI placement and hierarchy _(activation deferred)_

The layout below is the **approved target** when conditional rendering is turned on. Until then, the shipped codex **must not** show players, embeds, or “coming soon” media chrome — **§3 is specification only, not current UI**.

**Reading order (recommended):**

1. Sigil title + facets (unchanged).
2. **Doctrine** — remains the first major textual anchor (unchanged prominence).
3. **Media (animateren)** — new section **after Doctrine**, **before Underlay**.
   - Rationale: reader completes canonical text before optional illustration; Underlay stays the structured “system” block at the end.
4. **Underlay / System context** — unchanged role as secondary, structured layer.

**Visual hierarchy:**

- Doctrine: unchanged typography and authority (primary).
- Media: **supporting** band — neutral framing (thin border, subdued label e.g. “Reference” or “Animateren”), width constrained to match content column, **no** competing gold/cyan scale with Doctrine headings.
- Underlay: remains clearly separated below media (spacing + existing panel language).

**If no media:**

- Omit the media block entirely — **no** empty players, placeholders, or “coming soon” noise.
- Page layout and canon clarity match today’s behavior.

**Player behavior:**

- **No autoplay.** User-initiated play only.
- Prefer native `<video controls>` or a minimal embed that respects no-autoplay; ambient motion/glow avoided per existing UI rules.

### 4. Rules (behavior and product)

- **Media supports meaning; it does not replace it.** Doctrine + Underlay remain the source of truth for textual canon on the codex.
- **No autoplay.**
- **No UI clutter** — one controlled block per sigil in v1; no carousel unless Step 9.x explicitly adds it.
- **No dependency on media for understanding** — copy, filters, and detail text must remain sufficient if `media` is absent or fails to load.

### 5. Future-proofing

| Topic | Decision |
| ----- | ----- |
| **Multiple videos per sigil** | **Yes, eventually.** Extend `media` to `media?: MediaClip \| MediaClip[]` or `clips?: MediaClip[]` where each clip shares `videoUrl`, optional `videoTimestamp`, optional `mediaDescription`. v1 implements a **single clip** via one optional `media` object to stay minimal. |
| **Sigil ↔ video linking** | **Slug is the stable key.** External animateren catalogs can reference `slug`; optional future `externalId` field only if Zierota’s pipeline requires it (not assumed in v1). |
| **Video index page** | **Possible later** — e.g. `/animateren` or `/media` listing clips keyed by sigil name/slug; out of scope for Step 9 design lock; must not be required for primary navigation. |

### 6. Constraints (non-negotiable)

- **Canon clarity cannot be broken** — no wording changes introduced by media fields; `mediaDescription` is ancillary copy only if approved.
- **Codex must remain fully usable without media** — browse, search, filter, sort, detail reading paths work unchanged when `media` is omitted everywhere.

### 7. Step 9.1 — Media readiness planning _(revised; no visible media yet)_

**Context:** Zierota’s animateren videos are **not finished**. The codex stays **clean**: text-first experience unchanged.

**Rules for this phase:**

- **No video UI** in the app (no `<video>`, no custom player chrome).
- **No iframe / embed** for animateren or third-party hosts yet.
- **No placeholder media blocks** (“coming soon”, grey boxes, fake thumbnails).
- **Do not add `media` fields to JSON** or extend schema in code until Zierota provides real URLs and signs off — keeps data and UI aligned.
- **`STEP 9 DESIGN — MEDIA INTEGRATION` remains the contract:** when videos exist, add optional `media` per §2, then implement **conditional** detail rendering per §3 (Doctrine → Media → Underlay), still **no autoplay**, **omit section if absent**.

**After videos exist (future step, not Step 9.1):**

- Extend types + JSON Schema + `sigils.json` with approved `media` payloads only.
- Ship conditional media section on `[slug]` per §3–§4; validate build/check + manual gate.

**Step 9.1 deliverable:** Planning locked in this document only; proceed to **Step 10 — image/sigil asset pipeline** without changing application code for animateren video.

### Locked step entries

#### Step 16 — Add real Astro preview URL inside Decap CMS

**Goal:**
Point Decap’s preview / “live” link at the real Astro sigil detail route (`/sigils/<slug>`) while editing `src/data/sigils.json` in the CMS.

**Changes:**

- `public/admin/config.yml` — on the `files` entry for `src/data/sigils.json` (`name: codex`), added `preview_path: "sigils/{{slug}}"` immediately after `format: json` (aligned with `file` / `format` / `fields`).

**Unchanged:**

- `local_backend`, `backend`, `media_folder`, `public_folder`, `collections`, nested `fields`, `src/data/sigils.json`, `src/data/sigils.schema.json`, `public/admin/index.html`, Astro routes.

**Checks:**

- `npx astro check` — pass (0 errors).
- `npm run build` — pass.

**Result:**

- Decap can resolve preview targets to `http://localhost:<port>/sigils/<slug>` when `{{slug}}` is available in the editing context (confirm in browser with dev server + `decap-server`). If previews stay relative-only, set optional root `site_url` in a follow-up.

**Next Step:**

- Manually open a sigil in Decap and confirm the preview URL; add `site_url` at the top of `config.yml` only if Decap’s version requires it for correct preview links.

#### Step 16B — Add `site_url` for Decap preview

**Goal:**
Give Decap an absolute site base so `preview_path` resolves to real Astro URLs (e.g. `http://localhost:4321/sigils/<slug>`).

**Changes:**

- `public/admin/config.yml` — top-level `site_url: "http://localhost:4321"` (same level as `local_backend` and `backend`; placed after `local_backend`, before `backend`); nothing else in the file changed.

**Unchanged:**

- `local_backend`, `backend`, `media_folder`, `public_folder`, `collections`, `preview_path`, all `fields`, `src/data/sigils.json`, schema, `index.html`, app code.

**Checks:**

- `npx astro check` — pass (0 errors).
- `npm run build` — pass.

**Result:**

- Decap can join `site_url` + `preview_path` for previews such as `http://localhost:4321/sigils/<slug>` when `npm run dev` uses Astro’s default port **4321**; if Astro uses another port, update `site_url` to match.

**Next Step:**

- Open a sigil in Decap with `npm run dev` on **4321** (or the same port as `site_url`) and confirm the live preview link.

#### Step 16D — Fix `preview_path` slug source for list-based JSON

**Goal:**
Use each sigil’s `slug` field for Decap live preview instead of the file entry name (`codex`), so previews hit `/sigils/soulflame-sigil` etc.

**Changes:**

- `public/admin/config.yml` — on the `files` entry `name: codex`, set `preview_path` to `"sigils/{{fields.slug}}"` (was `"sigils/{{slug}}"`).

**Unchanged:**

- `local_backend`, `site_url`, `backend`, `media_folder`, `public_folder`, `collections`, all `fields`, `src/data/sigils.json`, schema, `index.html`, app code.

**Checks:**

- `npx astro check` — pass (0 errors).
- `npm run build` — pass.

**Result:**

- With `site_url: "http://localhost:4321"`, preview should resolve to `http://localhost:4321/sigils/<sigil.slug>` (e.g. `…/sigils/soulflame-sigil`) when Decap substitutes `fields.slug` from the list item being edited.

**Next Step:**

- Restart `npm run dev`, reload `/admin`, and confirm the preview link for a sigil row.

#### Step 16E — Document preview limitation (single JSON structure)

**Goal:**
Record known limitation of Decap preview with nested list items.

**Changes:**

- Added note explaining preview behavior for single-file JSON structure (this step; documentation only).

**Unchanged:**

- `src/data/sigils.json` structure
- CMS configuration
- `preview_path` and `site_url` setup

**Checks:**

- Confirmed "View Live" works for active slug
- Confirmed preview does not switch per nested sigil item

**Result:**

- Preview works at entry level only
- Nested sigils (list items) cannot dynamically change preview target

**Next Step:**

- Build custom preview/link helper that reads selected sigil slug inside CMS (future step)

**Note:**

Decap CMS does not support per-item preview for nested list data in a single JSON file.
This is expected behavior, not a bug.

#### Step 17 — Add smart per-sigil live preview widget

**Goal:**
Add a per–list-item “Open live preview” control in Decap that targets `http://localhost:4321/sigils/<slug>` for the sigil row being edited, without changing the JSON schema or `sigils.json`.

**Changes:**

- Added `public/admin/preview-link-widget.js` — registers custom `preview-link` widget (`CMS.registerWidget`); reads slug from `parent` when present, otherwise from the slug string control in the same list object row (Decap does not pass a parent map to nested controls); `shouldComponentUpdate` always true so the link updates when the slug field changes; root `id` uses `forID` for DOM lookup.
- `public/admin/index.html` — load `/admin/preview-link-widget.js` after Decap.
- `public/admin/config.yml` — optional nested field `preview_link` (`widget: preview-link`) immediately after `slug`.

**Unchanged:**

- `src/data/sigils.json` (content)
- JSON schema, `local_backend`, backend block, and overall single-file `sigils` structure (no intentional model change beyond optional CMS-only field name in config)

**Checks:**

- `npx astro check` — pass
- `npm run build` — pass

**Result:**

- Each sigil row in the CMS can show a Live Preview link that opens `http://localhost:4321/sigils/<that-row-slug>` when a slug is set.

**Next Step:**

- Manually verify in `/admin` with dev server + `decap-server`: open a sigil, edit slug, confirm the purple link updates and opens the correct detail page.

#### Step 17B — Make preview widget non-persistent

**Goal:**
Keep `preview_link` UI-only so it is not written into `src/data/sigils.json`.

**Changes:**

- `public/admin/config.yml` — on the Live Preview field: `hint: "UI only — not saved"`; `pattern: ["^$", ""]` (only an empty stored value validates); `required: false` unchanged.
- `public/admin/preview-link-widget.js` — documented no `onChange`; added `getValidateValue` returning `""` for validation; registered `CMS.registerWidgetValueSerializer("preview-link", …)` so serialize/deserialize return `undefined` and Decap omits non-nil stored values on the serialize path where the serializer runs.

**Unchanged:**

- App source, schema, and intentional codex JSON shape (no hand-edited `sigils.json` in this step).

**Checks:**

- `npx astro check` — pass
- `npm run build` — pass

**Result:**

- Editors see the hint and cannot save a non-empty `preview_link`; the control does not push a value via `onChange`, and the serializer strips widget-backed values on persist when applicable.

**Next Step:**

- If any `preview_link` key was saved earlier, remove it once from `src/data/sigils.json` (or re-save entries after 17B so serializers normalize).

#### Step 18 — Safe CMS editor UX cleanup

**Goal:**
Improve the Decap sigil editor without changing the flat `sigils.json` shape (no `object` grouping widgets).

**Changes:**

- `public/admin/config.yml` — reordered nested `sigils` list fields to: name, slug, `preview_link`, doctrine, category, status, facets, geometry, color, terms, usage, underlay, image; added or aligned **hints** on slug, doctrine, category, status, facets, geometry, color, terms, usage, underlay, and image (`preview_link` keeps the Step 17B UI-only hint).

**Unchanged:**

- Field `name`, `widget`, `required`, `pattern` (where present), `backend`, `local_backend`, `site_url`, `preview_path`, list `summary`, media paths, `preview-link-widget.js`, `src/data/sigils.json`, `sigils.schema.json`, `src/lib/sigils.ts`, `src/types/sigil.ts`.

**Checks:**

- `npx astro check` — pass
- `npm run build` — pass

**Result:**

- Editors see a clearer field order and inline guidance; persisted sigil objects remain flat.

**Next Step:**

- Optional: tweak labels only if Zierota wants different wording; avoid `object` wrappers that introduce `*_group` keys.

**Background:**

An earlier attempt used nested Decap `object` widgets for CORE / SYSTEM / … sections; that was **reverted** because it changed on-disk JSON. Native Decap object grouping remains **rejected** for this codex; Step 18 is the flat, hint-driven layout instead.

#### Step 19 — Showcase page (presentation layer)

**Goal:**
Upgrade `/showcase` into a clear, shareable demo of the Sigil Codex (presentation only).

**Changes:**

- `src/pages/showcase.astro` — added page **header** (title + positioning copy); **hero** uses category badge, `h2`, CTA “Explore this sigil”; **grid** cards show category · status, 90-char doctrine preview, optional **terms** line; refreshed CSS (`.header`, `.badge`, `.meta`, `.terms`, hero link color, wider cards).

**Unchanged:**

- `src/data/sigils.json`, `sigils.schema.json`, `public/admin/config.yml`, CMS / preview widget scripts.

**Checks:**

- `npx astro check` — pass
- `npm run build` — pass

**Result:**

- Showcase reads as an intentional product-style landing page while still linking into the main codex routes.

**Next Step:**

- Optional: add nav link from home or README to `/showcase` if Zierota wants it discoverable in-repo.

#### Step 20 — Subtle visual polish

**Goal:**
Improve spacing, typography, and hierarchy on `/showcase` while staying minimal.

**Changes:**

- `src/pages/showcase.astro` — **CSS only**: body line-height and font stack; container padding; header title/size/letter-spacing; hero padding, radius, gradient stop, typography and CTA color (`#8b5cf6`) + hover; badge opacity; grid gap; card padding, radius, hover border, `h3` size; `.meta` / `.card p` / `.terms` opacity tweaks; card transition `ease`.

**Unchanged:**

- Markup, frontmatter, `sigils.json`, schema, CMS config.

**Checks:**

- `npx astro check` — pass
- `npm run build` — pass

**Result:**

- Showcase reads slightly more refined without new components or complexity.

**Next Step:**

- None required; optional further copy tweaks only if Zierota requests.

#### Step 21 — Identity polish

**Goal:**
Add a restrained Empyrria / violet identity layer to `/showcase` without clutter.

**Changes:**

- `src/pages/showcase.astro` — `:root` `--accent` / `--accent-soft`; header `h1` gradient text clip; hero soft accent ring (`box-shadow`); hero CTA uses `var(--accent)`; cards gain hover glow; badge uppercase / tighter type; first grid card gets default `border-color: var(--accent)` via inline `style` when `i === 0`.

**Unchanged:**

- Data import, copy, links, `sigils.json`, schema, CMS.

**Checks:**

- `npx astro check` — pass
- `npm run build` — pass

**Result:**

- Showcase reads slightly more “branded” while staying dark, minimal, and readable.

**Next Step:**

- None required unless Zierota wants copy or accent tuning.

#### Step 22 — Codex page (What is a Sigil)

**Goal:**
Add a cinematic Empyrria Codex entry that explains what a sigil is—tone of entering a system, not a spec sheet.

**Changes:**

- `src/pages/codex/what-is-a-sigil.astro` — standalone page (`/codex/what-is-a-sigil`) with narrow column, gradient title, sections (Definition, Function, System Role, Design Principle, Presence), accent rule callout, back link to `/showcase`; `white-space: pre-line` + template strings for the original line-broken intro and rule copy; `background-clip: text` on title for non-WebKit; empty frontmatter for valid `.astro`.

**Unchanged:**

- `src/data/sigils.json`, schema, CMS config, showcase logic.

**Checks:**

- `npx astro check` — pass
- `npm run build` — pass

**Result:**

- Codex has a dedicated “What is a Sigil” entry page suitable for sharing alongside the showcase.

**Next Step:**

- Optional: link to this page from `/showcase` or the main site nav when Zierota approves placement.

#### Step 23 — Link Codex from showcase

**Goal:**
Let visitors move from `/showcase` into the Codex “What is a Sigil” page without hunting URLs.

**Changes:**

- `src/pages/showcase.astro` — under the header intro paragraph, added `<a href="/codex/what-is-a-sigil" class="codex-link">→ What is a sigil</a>`; styles `.codex-link` / `.codex-link:hover` using `var(--accent)`.

**Unchanged:**

- All other showcase markup, styles, data import, `sigils.json`, schema, CMS.

**Checks:**

- `npx astro check` — pass
- `npm run build` — pass

**Result:**

- Showcase reads into the cinematic Codex entry in one click.

**Next Step:**

- Optional: mirror the link on the home page or `/sigils` if Zierota wants broader discovery.

#### Step 24 — Codex presence signal

**Goal:**
Signal that the Codex is an expanding system, not a one-off essay page.

**Changes:**

- `src/pages/codex/what-is-a-sigil.astro` — above the “← Back to Codex” link, added `.next` copy: “More entries will be added as the system expands.”; CSS `.next` (`margin-top`, `font-size`, `opacity`).

**Unchanged:**

- All other Codex copy, styles, routes, data, CMS.

**Checks:**

- `npx astro check` — pass
- `npm run build` — pass

**Result:**

- Readers see an explicit “more to come” layer before returning to the showcase.

**Next Step:**

- Add further `/codex/…` entries when doctrine copy exists; keep this footer pattern or evolve into a small index block.

## CHANGELOG

- Project initialized
- Tailwind CSS v4 installed and verified; global CSS wired through shared layout
- Sigil types, JSON schema, and loader accessors created; home page verifies codex version and sigil count
- Locked Cursor-first execution workflow: all Cursor-capable tasks now require copy-ready prompts
- npm audit: pinned transitive `yaml` to `^2.8.3` via `package.json` overrides (GHSA-48c2-rrv3-qjmp); dev tooling chain (`@astrojs/language-server`) no longer reports 4 moderate findings
- Canon source file created under `/canon` (`EMPYRRIA_SIGIL_CODEX_SOURCE.md`); sole import source for `sigils.json`
- First approved sigil entries added from source documents (Soulflame Sigil, Top-Clear-Mind, Top-Solid-Anchor / Sha-karys, Zenga Zellia)
- Step 5: Canon import into `src/data/sigils.json` (v2): `doctrine` = verbatim Meaning / Function; `underlay` = remaining source fields; `facets` = Category; `image` omitted; slugs `soulflame-sigil`, `top-clear-mind`, `top-solid-anchor-sha-karys`, `zenga-zellia`
- Step 6: `/sigils` grid + `/sigils/[slug]` static detail (`getStaticPaths`), `SigilCard` / `SigilMeta`, gold/cyan accents; home → Browse sigils
- Added locked Master Mode workflow adapted from KickReforge.
- Step 7: `/sigils` client-side Fuse.js search (fuzzy, case-insensitive), single-select category filter, sort order; empty state copy; `fuse.js` dependency; canon JSON and detail routes unchanged
- Pre–Step 8: Step 7 validation recorded (`STEP 7 VALIDATION NOTES`); no bugs found; Step 8 approved to begin
- Added locked pre-next-step test gate: every completed step must be tested and logged before the next step begins.
- Step 8 (UI refinement): stronger title hierarchy (`font-semibold`, dominant sigil names); doctrine / underlay muted amber & cyan with relaxed line-height; facets lighter (`SigilMeta`); cards—extra padding, soft border/surface, subtle `-translate-y` hover; browse—aligned controls, `rounded-md` inputs, wider grid gaps; detail—narrower measure (`max-w-2xl`), section spacing & dividers; layout default text `neutral-200`; home hero aligned; `npm run build` / `npx astro check` pass
- Step 8.1 (targeted refinement): sigil names bolder/larger on cards + detail; doctrine uses Georgia serif stack via `.text-doctrine`, higher line-height, warm amber tone; underlay separated—panel, soft left accent, “Underlay” + “System context”, source lines as spaced paragraphs, muted cyan; body default `neutral-300`; increased vertical rhythm title→doctrine→underlay
- Step 8.2 (visual hierarchy): unified warm gold tint on all sigil titles (cards + detail); Doctrine / Underlay / System context labels larger (`text-xs`/`text-[11px]`) and `font-semibold`; underlay rows parsed at first colon—labels `font-semibold text-cyan-400/65`, values softer `text-cyan-200/48`; lines without colon unchanged
- Step 8.3 (authority + identity): Doctrine / Underlay / System context as bold section anchors with borders + spacing; `sigilTitleColorClass(slug)` — Soulflame amber, Top-Clear-Mind sky/cyan clarity, Anchor stone, Zenga soft fuchsia; underlay field labels `text-base font-bold`, values larger/softer + `space-y-7`; title→doctrine→underlay vertical rhythm increased
- Step 8 finalized after hierarchy, typography, underlay structuring, and identity color refinement.
- Step 9 (design only): `STEP 9 DESIGN — MEDIA INTEGRATION` — optional nested `media` (`videoUrl`, `videoTimestamp`, `mediaDescription`); detail placement after Doctrine / before Underlay; no autoplay; codex usable without media; future multi-clip + optional index page documented; no code or JSON changes
- Step 9.1 adjusted: animateren media integration remains planned, but visible video support is postponed until real videos exist.
- Integrated Empyrria System Architecture v2.2 into master document (`EMPYRRIA SYSTEM MODEL — LOCKED`, sigil representation rule, `FUTURE CODEX DIRECTION`, alignment constraint); canon-backed quotes from `canon/EMPYRRIA_SIGIL_CODEX_SOURCE.md`; layers not defined in-repo defer to **EMPYRRIA SYSTEM ARCHITECTURE — MASTER TABLE v2.2** without inventing meaning; no code or JSON changes
- Added system architecture v2.2 PDF to `canon/system` for future source-backed definitions.
- Step 10: Added optional SVG image field to sigil model (`src/types/sigil.ts`, `sigils.schema.json`).
- Step 10: Prepared `public/media/sigils/` and conditional image rendering on `SigilCard` and `[slug]` (no placeholder assets; UI unchanged when `image` is omitted).
- Step 10 validated: SVG-ready image pipeline works without placeholders or canon changes.
- Added project naming reference: Empyrria (animateren project) and Empyrria Sigil Codex (system layer)
- Added sigil visual integration guidelines for future assets
- Updated roadmap for Zierota-managed admin content workflow.
- Planned Netlify + Decap CMS admin workflow for Zierota-managed content.
- Defined CMS field model for sigil editing via Decap CMS (`STEP 12 — CMS FIELD MODEL — LOCKED`).
- Step 12 validated with UX refinement for slug handling (`STEP 12 VALIDATION NOTES`; Step 12 approved; proceed to Step 13).
- Step 13B: Added `public/admin/index.html` (Decap CMS 3 from unpkg); dev-only `/admin` → `/admin/index.html` rewrite in `astro.config.mjs` so `npm run dev` matches `/admin` route; no `config.yml`, auth, or styling; `STEP 13B VALIDATION NOTES`.
- Added Decap CMS `config.yml` for current `sigils.json` structure (Step 13C: `public/admin/config.yml`, Git Gateway, `sigils` files collection; no `sigils.json` or public page edits; `STEP 13C — DECAP CONFIG`).
- Validated Decap CMS local config behavior before authentication setup (`STEP 13D VALIDATION NOTES`; no `config.yml` changes; Step 14 approved to begin).
- Fixed dev-only routing issue for Decap CMS `config.yml` (`astro.config.mjs`: explicit `GET /admin/config.yml` → `public/admin/config.yml` + `text/yaml`; see `STEP 13D VALIDATION NOTES`).
- Fixed Decap config URL loading by using `data-cms-config-url` on the Decap script in `public/admin/index.html` (replaces manual `CMS.init` so YAML is fetched as config, not mis-parsed as an inline object).
- Step 16: Decap `preview_path: "sigils/{{slug}}"` on `src/data/sigils.json` file entry in `public/admin/config.yml` (Astro sigil detail preview); see **Locked step entries → Step 16**.
- Step 16B: Decap `site_url: "http://localhost:4321"` in `public/admin/config.yml` (preview base for `preview_path`, top-level with `local_backend` / `backend`); see **Locked step entries → Step 16B**.
- Step 16D: Decap `preview_path: "sigils/{{fields.slug}}"` on `codex` file entry in `public/admin/config.yml` (list-based JSON preview); see **Locked step entries → Step 16D**.
- Step 16E: Documented Decap preview limitation for single-file JSON + nested `sigils` list (no `config.yml` / JSON edits); see **Locked step entries → Step 16E**.
- Step 17: Custom Decap `preview-link` widget + script in `public/admin/`, optional `preview_link` field in nested sigils list (`public/admin/config.yml`); see **Locked step entries → Step 17**.
- Step 17B: Non-persistent `preview_link` — config hint + empty-only `pattern`, widget `getValidateValue` + no `onChange`, `registerWidgetValueSerializer` for `preview-link`; see **Locked step entries → Step 17B**.
- Step 18: Safe Decap CMS editor UX — flat field reorder + hints in `public/admin/config.yml` (no `object` grouping, no JSON/schema/loader changes); see **Locked step entries → Step 18**.
- Step 19: Refined `/showcase` presentation (header, hero badge + CTA, card meta + terms); see **Locked step entries → Step 19**.
- Step 20: Showcase page CSS polish (spacing, type, hero/card hierarchy, violet accents); see **Locked step entries → Step 20**.
- Step 21: Showcase identity layer (`:root` accent vars, gradient title, hero ring, card hover glow, featured first card); see **Locked step entries → Step 21**.
- Step 22: Codex page `/codex/what-is-a-sigil` (meaning, function, system role, principles, presence); see **Locked step entries → Step 22**.
- Step 23: Showcase header links to `/codex/what-is-a-sigil` (`.codex-link`); see **Locked step entries → Step 23**.
- Step 24: Codex page “future entries” line (`.next`) before back link on `/codex/what-is-a-sigil`; see **Locked step entries → Step 24**.
- Step 25: Added `/codex/system-architecture` cinematic Codex page describing architecture layers and alignment, with back link to `/codex/what-is-a-sigil`; see **Locked step entries → Step 25**.
- Step 26: Connected visible Codex navigation flow by adding forward link `/codex/what-is-a-sigil` → `/codex/system-architecture` and additional back path from `/codex/system-architecture` to `/showcase`; see **Locked step entries → Step 26**.
- Step 27: Added static Codex hub page at `/codex` with links to `/codex/what-is-a-sigil` and `/codex/system-architecture`; see **Locked step entries → Step 27**.
- Step 28: Added visible `← Back to Codex` links to `/codex/what-is-a-sigil` and `/codex/system-architecture`, both targeting `/codex` while keeping existing page navigation intact; see **Locked step entries → Step 28**.
- Step 28 manual validation passed locally and through Cloudflare; Codex navigation loop approved for Step 29.
- DOC-4: Full alignment pass — CODEX `CURRENT STEP` / `STEPS (living)`, top NOTE, locked step titles 19–24; MASTER “Current system state” under project overview.
- Created first official governed checkpoint: checkpoint-2026-05-06-step28-codex-loop (Milestone Checkpoint) after full Codex navigation validation and infrastructure hardening initialization.
