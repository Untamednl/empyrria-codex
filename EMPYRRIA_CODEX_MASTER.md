# EMPYRRIA CODEX MASTER

Operational implementation companion for the **Empyrria Sigil & Doctrine Library** MVP.

**Philosophy/governance expansion has been archived and is no longer the active development driver. The active project focus is the practical Sigil & Doctrine Library MVP.**

- **Historical docs:** Long-form step logs, governance checkpoints, philosophy-phase chains, former CODEX head/tail, and the pre-SIMPLIFY `EMPYRRIA_MASTER.md` body → `EMPYRRIA_PHILOSOPHY_ARCHIVE.md`
- **Rules & checkpoints (active summary):** → `EMPYRRIA_MASTER.md`

---

## CANONICAL DOCUMENT STRUCTURE — STABLE

This master file is maintained in seven governance bands:

1. **PROJECT IDENTITY** — purpose, archive philosophy, ceremonial doctrine/atmosphere constraints.
2. **GOVERNANCE LAYER** — documentation discipline, canon governance, editorial governance, rollout rules.
3. **CORE ARCHITECTURE** — entity/dossier/template RFCs, mapping plans, visibility-tier model, adapter philosophy.
4. **IMPLEMENTATION LAYER** — Top-Iron Phase A system, layout/wireframe/atmosphere/detail governance.
5. **EDITORIAL EXECUTIONS** — selective enrichment passes (IAH-VEA, Soulflame, Top-Clear-Mind).
6. **FUTURE / DEFERRED SYSTEMS** — Phase B, structured entity model, graph-level and advanced CMS expansions.
7. **OPERATIONAL STATE** — current next step, active priorities, release/validation guardrails, warnings.

### Status Vocabulary (normalized)

Use these labels consistently:

- **LOCKED** — validated decision/execution, treated as canonical.
- **DOCUMENTED** — approved planning/RFC guidance, not yet executed.
- **ACTIVE** — current operating focus.
- **DEFERRED** — intentionally postponed, out of active scope.
- **STABLE** — operationally reliable baseline/system state.

### Consolidation Rule

Doctrine-first, atmosphere protection, anti-wiki constraints, sparse-entry validity, prose-preservation, selective enrichment discipline, and compatibility-first evolution are authoritative in dedicated roots below and should be referenced, not rewritten, in phase notes.

---

## AUTHORITATIVE POLICY ROOTS — STABLE

**Status:** **LOCKED** — governance consolidation authority for recurring archive-policy rules. These roots are the default citation targets for future RFCs and execution notes.

### 1. DOCTRINE-FIRST GOVERNANCE — AUTHORITATIVE ROOT

**Status:** **LOCKED**  
Doctrine remains the canonical and visual apex on detail surfaces. Meaning/layer/lore/relations must support doctrine, never displace it.

**Intent:** Preserve doctrinal authority and avoid interpretive drift.  
**Referenced by:** Editorial executions, layout/detail RFCs, atmosphere audits.

### 2. ATMOSPHERE PROTECTION — AUTHORITATIVE ROOT

**Status:** **LOCKED**  
Maintain ceremonial archive pacing, quiet density, symbolic gravity, restrained disclosure, and anti-dashboard/anti-wiki tone.

**Intent:** Prevent UI/content drift into spectacle, panel clutter, or encyclopedic velocity.  
**Referenced by:** Atmosphere refinement, consistency audit, selective enrichment passes.

### 3. SPARSE ENTRY + DENSITY GOVERNANCE — AUTHORITATIVE ROOT

**Status:** **LOCKED**  
Sparse entries are canon-valid. Uniform section depth is not required; richness scales by canon importance and symbolic depth.

**Intent:** Protect lean entries from forced parity and avoid density inflation.  
**Referenced by:** Universal dossier architecture, selective enrichment planning, rollout decisions.

### 4. PROSE-PRESERVATION GOVERNANCE — AUTHORITATIVE ROOT

**Status:** **LOCKED**  
Interpretive/lore compartments remain prose-first unless repeated, stable semantics justify structure. Do not over-structure symbolic text prematurely.

**Intent:** Preserve expressive symbolic reading while avoiding brittle pseudo-structure.  
**Referenced by:** Dossier architecture, mapping plans, deferred Phase B design.

### 5. COMPATIBILITY-FIRST EVOLUTION — AUTHORITATIVE ROOT

**Status:** **LOCKED**  
Prefer additive, adapter-first evolution over big-bang schema/route/CMS rewrites. Existing runtime compatibility and discoverability behavior remain protected.

**Intent:** Keep the codex shippable while architecture matures incrementally.  
**Referenced by:** Data model realignment, additive field waves, implementation staging.

### 6. SELECTIVE ENRICHMENT GOVERNANCE — AUTHORITATIVE ROOT

**Status:** **LOCKED**  
Editorial maturation proceeds sigil-by-sigil, reviewable, rollback-simple, and source-traceable. Bulk canon floods and uncontrolled tone drift are prohibited.

**Intent:** Enable continuous enrichment without sacrificing coherence, auditability, or restraint.  
**Referenced by:** Controlled Editorial Enrichment Guidelines and all selective enrichment passes.

---

## Locked implementation progress

| Phase | Status / result |
| ----- | ---------------- |
| **SIMPLIFY-1** | Locked — philosophy/governance overhead archived to `EMPYRRIA_PHILOSOPHY_ARCHIVE.md`; active docs refocused on practical MVP. |
| **PRACTICAL-1** | Complete — MVP feature audit. |
| **PRACTICAL-2** | Complete — UX / atmosphere refinement planning. |
| **IMPLEMENT-1** | Locked pass — global nav + shared `Layout` for `/codex` & Showcase. |
| **IMPLEMENT-2** | Locked pass — codex route visual unification. |
| **IMPLEMENT-3** | Locked pass — Classification block on sigil detail (`geometry`, `usage`, `color`, `terms`, `category`). |
| **IMPLEMENT-4** | Locked pass — optional `image`, plates, validator paths. |
| **IMPLEMENT-5** | Locked pass — first live SVGs (`soulflame`, `top-clear-mind`, `zenga-zellia`). |
| **IMPLEMENT-6** | Locked **review-only** — content quality pass; no data change. |
| **MICRO-PASS A** | Locked pass — Soulflame `underlay` normalized; **category vs facets** documented. |
| **CONTENT PHASE 1A** | Superseded for **IAH-VEA** — fifth approved source block added (`### IAH-VEA`, **2026-05-09**); gate mechanics unchanged for **future** entries. |
| **SHOWCASE COHESION** | **Locked** — `/showcase` aligned to archival Tailwind language (neutral/amber), SVG plates mirrored `SigilCard`, doctrine preview ellipsis fixed, hover/subtle featured accent only; no canon or ingestion changes. |
| **LIVE MICRO-POLISH (detail/card)** | **Locked** — `SigilCard`: removed trailing **View** (card link is self-evident). Detail **Classification**: body + Terms chips slightly brighter neutrals for long-copy readability. Detail sections: modest mobile tighten (`mt-20 md:mt-24`; Underlay `mt-24` / `pt-14` on small, restore `md:mt-28 md:pt-16`). **No** canon, **IAH-VEA**, JSON, or asset changes. |
| **IAH-VEA INGESTION** | **Locked (2026-05-09)** — Zierota approved live addition: **`### IAH-VEA`** promoted to **`## SIGIL ENTRIES`** (`Status: Approved`); **`public/media/sigils/iah-vea.svg`** from frozen candidate; **`sigils.json`** fifth public row (`provisional` / `marked_public` per live convention; canon source approved); **`sigilIdentity`** title tint for **`iah-vea`**. Data **`version`**: **3**. Doctrine/SVG unchanged from preserved draft. |
| **IAH-VEA STABILIZATION (micro-fix)** | **Locked** — **`iah-vea.svg`**: replaced corrupted UTF-8 in XML comment (parser/broken-image risk) with ASCII-only comment; **geometry unchanged**. **Route:** no code change—**`/sigils/iah-vea`** is generated by **`getStaticPaths`**; **404** = stale **`astro dev`** (restart after JSON change) or preview **`dist`** without rebuild/redeploy. **`npm run build`** / **`npx astro check`** PASS. |
| **DATA MODEL — DISPLAY ADAPTER** | **Locked** — **`src/lib/sigilDisplay.ts`** MVP bridge; **`showcase.astro`** + **`sigils/[slug].astro`** consume **`toSigilDisplayItem`** where applicable; **`SigilCard`** / browse grid unchanged. |
| **ADDITIVE FIELD RFC** | **Documented** — **`DATA MODEL REALIGNMENT — ADDITIVE FIELD RFC`**; first-wave recommendation **`title`**, **`meaning`**, **`layer`**; implementation gated until schema + CMS + adapter + validation; **no** JSON edits in RFC step. |
| **OPTIONAL FIELDS — WAVE 1** | **Locked** — Schema + **`Sigil`** type + **`sigilDisplay`** precedence for **`title`**, **`meaning`**, **`layer`** (optional only). CMS **not** updated. **`npm run build`** / **`npx astro check`** PASS. |
| **CONTENT ENRICHMENT PILOT** | **Locked** — Single-sigil editorial pilot (**`iah-vea`**): optional **`title`**, **`meaning`**, **`layer`** populated; adapter precedence verified; browse/detail unchanged (**`name`**); showcase **`toSigilDisplayItem`** shows ceremonial **`title`**. **`npm run build`** / **`npx astro check`** PASS. |
| **DISPLAY METADATA UI RFC** | **Locked** — Safe rendering plan for **`title`** / **`meaning`** / **`layer`**; first surface = detail page only; staged rollout A→B→C. |
| **DETAIL PAGE DISPLAY METADATA — CONTROLLED IMPLEMENTATION** | **Locked (2026-05-09)** — Optional **`title`** / **`meaning`** / **`layer`** on **`/sigils/[slug]`** only; gated omission; **`npm run build`** / **`npx astro check`** PASS. |
| **SECOND SELECTIVE CONTENT ENRICHMENT PILOT** | **Locked (2026-05-09)** — **`soulflame-sigil`** only; optional **`title`** / **`meaning`** / **`layer`**; **`npm run build`** / **`npx astro check`** PASS; data **`version`** **4**. |
| **CMS OPTIONAL FIELD EXPOSURE — TITLE / MEANING / LAYER** | **Locked (2026-05-10)** — Decap **`public/admin/config.yml`**: optional **`title`**, **`meaning`**, **`layer`** (**`required: false`**, no defaults). **`sigils.json`** not modified in-repo for this phase; no schema/app/route/UI/discoverability changes. **`npm run build`** / **`npx astro check`** PASS. |
| **ENTITY MODEL ARCHITECTURE RFC** | **Locked (2026-05-10)** — **`Top-Iron-Endurance`**-informed **grouped** entity map and **future** nested shape proposal; **documentation only**; growth boundaries until superseded. **No** `sigils.json`, schema, CMS, UI, routes, discoverability, or migration in this RFC. |
| **TOP-IRON-ENDURANCE INGESTION RFC** | **Documented** — staged ingestion boundary for **Top-Iron-Endurance**; **RFC / planning only**; **no** ingestion, data, schema, CMS, UI, relations, or graph work in this pass. |
| **SIGIL ENTITY TEMPLATE RFC** | **Locked** — universal **entry anatomy** (sections A–Q); **documentation only**; **no** data/CMS/schema/UI in-RFC. |
| **SIGIL TEMPLATE → CURRENT MODEL MAPPING PLAN** | **Documented** — template-to-row translation; **documentation only** until **reviewed and locked**. **No** ingestion, schema, CMS, UI, graph, routes. |
| **TOP-IRON-ENDURANCE LAYOUT SPEC / RFC** | **Documented** — full **detail-page** layout prototype for **Top-Iron-Endurance** before broad CMS expansion; **documentation only**; **no** UI/schema/ingestion. |
| **TOP-IRON-ENDURANCE LAYOUT WIREFRAME PLAN** | **Documented** — reading cadence, hierarchy, collapse/pacing for **full** sigil detail; **planning only**; **no** implementation/CMS/ingestion. |
| **TOP-IRON-ENDURANCE PHASE A IMPLEMENTATION PLAN** | **Locked** — Phase **A** scope (sections, fields, rollback); execution authorized per **TOP-IRON-ENDURANCE PHASE A IMPLEMENTATION** (below). |
| **TOP-IRON-ENDURANCE PHASE A IMPLEMENTATION** | **Locked** — **`top-iron-endurance`** row + SVG; **`sigils.json`** **`version`** **5**; detail layout (reading order, lore/relations split); **no** schema/CMS/graph/discoverability route changes. **`npm run build`** / **`npx astro check`** PASS. |
| **PHASE A ATMOSPHERE + RHYTHM REFINEMENT PASS** | **Locked** — detail **cadence** / **terms** (inline ·) / **Classification** header quieting / disclosure **de-card**; **`SigilMeta`** **`archival`** on detail only. **No** data/schema/CMS/discoverability. **`npm run build`** / **`npx astro check`** PASS. |
| **DETAIL PAGE ATMOSPHERE CONSISTENCY AUDIT** | **Documented** — cross-sigil detail **read‑through** audit (no code/data); informs optional **micro‑polish** vs **Phase B** gate. |
| **CONTROLLED EDITORIAL ENRICHMENT GUIDELINES RFC** | **Locked** — editorial-governance rules for **gradual** sigil enrichment **without** lore bloat, wiki density, or inconsistent canon tone; **no** schema/CMS/UI/systems expansion in-RFC; operational discipline for passes like **SELECTIVE SIGIL ENRICHMENT**. |
| **SELECTIVE SIGIL ENRICHMENT PASS — IAH-VEA** | **Locked (2026-05-10)** — single-sigil editorial refinement (**`iah-vea`** only); **`title`**, **`meaning`**, **`doctrine`**, **`usage`**, **`geometry`** tightened in **`sigils.json`** + **`canon/EMPYRRIA_SIGIL_CODEX_SOURCE.md`**; data **`version`** **6**; **no** schema/CMS/UI/new fields/underlay. **`npm run build`** / **`npx astro check`** PASS. |
| **SELECTIVE SIGIL ENRICHMENT PASS — SOULFLAME** | **Locked (2026-05-10)** — single-sigil editorial refinement (**`soulflame-sigil`** only); **`title`**, **`meaning`**, **`doctrine`**, **`usage`**, **`geometry`**, **`color`** tightened (**`sigils.json`** + **`canon/EMPYRRIA_SIGIL_CODEX_SOURCE.md`**); **`underlay`** empty; data **`version`** **7**. **`npm run build`** / **`npx astro check`** PASS. |
| **SELECTIVE SIGIL ENRICHMENT PASS — TOP-CLEAR-MIND** | **Locked (2026-05-10)** — single-sigil editorial refinement (**`top-clear-mind`** only); **`doctrine`**, **`usage`**, **`geometry`**, **`color`** in **`sigils.json`** + **`canon/EMPYRRIA_SIGIL_CODEX_SOURCE.md`** (**no** new **`title`/`meaning`/`layer`** — existing row); **`version`** **8**. **`npm run build`** / **`npx astro check`** PASS. |
| **CONTROLLED DOSSIER MATURATION PASS — ZENGA ZELLIA** | **Locked (2026-05-11)** — single-sigil controlled dossier maturation (**`zenga-zellia`** only); **`title`**, **`meaning`**, **`layer`**, **`doctrine`**, **`usage`**, **`geometry`**, **`color`** refined in **`sigils.json`** + mirrored **`canon/EMPYRRIA_SIGIL_CODEX_SOURCE.md`**; relational-symbolic register tightened without graph/social semantics; data **`version`** **9**. **`npm run build`** / **`npx astro check`** PASS. |
| **CONTROLLED DOSSIER MATURATION PASS — TOP-SOLID-ANCHOR-SHA-KARYS** | **Locked (2026-05-11)** — single-sigil controlled dossier maturation (**`top-solid-anchor-sha-karys`** only); **`title`**, **`meaning`**, **`layer`**, **`doctrine`**, **`usage`**, **`geometry`**, **`color`** refined in **`sigils.json`** + mirrored **`canon/EMPYRRIA_SIGIL_CODEX_SOURCE.md`**; structural-support register deepened without combat/power-fantasy drift; data **`version`** **10**. **`npm run build`** / **`npx astro check`** PASS. |
| **DOCTRINAL REGISTER COHERENCE AUDIT** | **Locked (2026-05-11)** — cross-register doctrine coherence analysis across matured sigils; audit-only (no data/schema/CMS/UI/system changes); confirms stable shared symbolic grammar and archive voice with manageable residual overlap risks. |
| **DOCTRINAL REGISTER MAP INDEX PASS** | **Locked (2026-05-11)** — lightweight doctrinal navigation layer (`DOCTRINAL REGISTER MAP — STABLE INDEX`) for fast audits and overlap monitoring; explicitly non-ontology/non-taxonomy; no data/schema/CMS/UI/system changes. |
| **SYMBOLIC PHRASE REPETITION AUDIT** | **Locked (2026-05-11)** — lightweight editorial/governance audit of recurring doctrinal constructions and cadence pressure; confirms low-to-moderate pressure with no immediate intervention required. |
| **SELECTIVE MATURATION PAUSE + OBSERVATIONAL STABILITY WINDOW** | **Locked (2026-05-11)** — intentional non-expansion governance window; pause on new maturation pressure while monitoring drift/overlap/repetition signals; no data/schema/CMS/UI/system expansion during observation window. |
| **LIVE EXPERIENCE OBSERVATION PASS** | **Locked (2026-05-11)** — reader-first live observation governance (no reactive implementation scope); establishes rhythm-aware observation priorities and intervention thresholds. |
| **LIGHTWEIGHT OBSERVATION LOG TEMPLATE PASS** | **Locked (2026-05-11)** — tiny optional ceremonial observation template added under live observation governance; intentionally non-metric, non-analytic, and non-bureaucratic. |
| **STEWARDSHIP MODE TRANSITION RECORD** | **Locked (2026-05-11)** — formal transition from construction-dominant operation to long-term stewardship posture; confirms restraint, rereading, and selective necessity as default growth discipline. |
| **ZIEROTA ONLINE ADMIN SETUP — DECAP PRODUCTION HARDENING** | **Locked (2026-05-11)** — production-hardening pass for `/admin`: explicit `git-gateway` branch `main`, production `site_url`, and origin-aware preview link widget; no schema/content/UI/discoverability changes. **`npm run build`** / **`npx astro check`** PASS. |
| **ZIEROTA ONLINE ADMIN SETUP — IDENTITY INVITE/RECOVERY TOKEN FIX** | **Locked (2026-05-11)** — Dedicated **`public/admin/invite.html`**: static page, Netlify Identity widget only (no Decap); supports **`invite_token`**, **`recovery_token`**, **`confirmation_token`** in URL hash; post-login redirect to production **`/admin/`**. Documented onboarding only—no **`sigils.json`**, schema, CMS collections, codex UI, routes, or Astro changes in this lock. **`npm run build`** / **`npx astro check`** PASS. |
| **UNIVERSAL SIGIL DOSSIER ARCHITECTURE RFC** | **Documented** — canonical **dossier anatomy** + **visibility tiers** for **all** sigils; **no** equal density mandate; **prose-first** / **sparse-entry** validity; **no** `sigils.json`, schema, CMS, UI, graph, or discoverability changes in-RFC. |

---

## DATA MODEL REALIGNMENT — ADAPTER-FIRST STRATEGY

**Intent:** Bridge toward the original MVP **display item** without renaming **`sigils.json`** keys or breaking browse/detail/CMS/discoverability.

### Target MVP item shape (display / export vocabulary)

```json
{
  "title": "...",
  "empyrriaans": "...",
  "type": "...",
  "category": "...",
  "meaning": "...",
  "description": "...",
  "layer": "...",
  "status": "...",
  "tags": [],
  "image": "...",
  "version": "v1"
}
```

### Current internal model (unchanged in JSON)

`slug`, `name`, `doctrine`, `underlay`, `category`, `facets`, `terms`, `geometry`, `usage`, `color`, `image`, `status`, `visibility` (+ optional CMS/schema fields).

### Mapping principles

- **`title`** ← optional future `title` **or** `name`.
- **`description`** ← full `doctrine` string (until split fields exist in data).
- **`meaning`** ← derived short line from `doctrine` (heuristic; no canon edit).
- **`type` / `category`** ← `facets[0]` / `category` fallbacks per policy.
- **`tags`** ← unique merge of `terms` + `facets`.
- **`status` (display)** ← readable combo of existing **`status`** / **`visibility`** — **does not replace** routing rules; **`getPubliclyDiscoverableSigils`** stays authoritative.

### Why Big Bang rename is rejected

Single-shot JSON renames break: **`sigils.schema.json`**, **`validate-content.mjs`**, **Decap `config.yml`**, Fuse keys, slug routes, and all Astro bindings — unacceptable while the archive must stay stable.

### Adapter-first strategy

1. Add **`src/lib/sigilDisplay.ts`**: **`SigilDisplayItem`**, **`toSigilDisplayItem()`** — maps **`Sigil`** (+ optional **`title`**, **`status`**, **`visibility`**) to the display shape with safe fallbacks.
2. **Smoke:** use adapter only on **`/showcase`** first; UI stays visually identical (same strings where **`title`**/`name` and **`description`**/`doctrine` align).
3. **Later:** optional additive JSON fields (`meaning`, `layer`, …) + CMS — **after** adapter proven.

### Status / visibility

Discoverability remains **`isPubliclyDiscoverableSigil`** (**`provisional`** + **`marked_public`**). Display **`status`** string is labels only.

### Validation

**`npm run build`**, **`npx astro check`** after adapter lands; no **`sigils.json`** edits in this phase.

### Source compatibility

**Current `sigils.json` remains the canonical pack;** adapter is a **read-only view** for presentation and future API alignment.

### Implementation — adapter smoke (locked — 2026-05-09)

- **`src/lib/sigilDisplay.ts`** — **`SigilDisplayItem`**, **`SigilRecord`**, **`toSigilDisplayItem()`**, helpers (**`mergeTags`**, **`extractShortMeaningFromDoctrine`**, **`formatPublicationDisplayStatus`**, etc.). Maps **`title ?? name`**, **`description`** = **`doctrine`**, **`meaning`** heuristic, **`tags`** from **`facets`∪`terms`**, display **`status`** string only (discoverability unchanged).
- **Smoke integration:** **`src/pages/showcase.astro`** — hero + grid use **`toSigilDisplayItem`** for **`title`**, **`description`**, **`image`**, **`doctrinePreview`** input; **routes/slugs**, **`sigil.category`** meta line, **`sigil.status`/`terms`** provisional + footer unchanged for identical browse-adjacent behavior.
- **`sigils.json`**, schema, CMS, **`getPubliclyDiscoverableSigils`**, **`/sigils`**, **`[slug]`**, **`SigilCard`**: **unchanged**.

**Validation:** `npm run build` — **PASS**; `npx astro check` — **PASS**.

**Next recommended phase:** documented under **DATA MODEL REALIGNMENT — ADDITIVE FIELD RFC** (below). Implementation waits until RFC is reviewed and locked.

---

## DATA MODEL REALIGNMENT — ADDITIVE FIELD RFC

**Status:** planning / documentation only — **no** `sigils.json`, schema, CMS, UI, or adapter code changes in this step.

### 1. Purpose

**Additive fields** let the MVP **display model** (`SigilDisplayItem`) become **explicit in data** over time: editorial values can be stored alongside—never instead of—the existing internal canon fields (`slug`, `name`, `doctrine`, `facets`, `category`, `terms`, …). Nothing is renamed or deleted; optional keys augment the pack when editorially ready.

### 2. Candidate additive fields (evaluation)

| Field | Role |
| ----- | ---- |
| **`title`** | Optional public-facing title; overrides **`name`** in display adapter only when set. |
| **`meaning`** | Optional short primary line; replaces **`extractShortMeaningFromDoctrine(doctrine)`** when set. |
| **`layer`** | Optional archive layer (e.g. system layer / codex shelf); supports browse grouping or labels later. |
| **`empyrriaans`** | Optional Empyrean proper-name line (distinct from **`terms`** list semantics). |
| **`displayType`** | Optional display taxonomy separate from **`facets`** / **`category`**. |
| **`displayCategory`** | Optional display grouping separate from **`category`** / **`facets`**. |
| **`version`** | Optional per-sigil version string; today adapter emits fixed **`v1`**. |

### 3. Recommended first wave (safest)

Adopt first, when implementing:

1. **`title`** — Clear win: **optional**; **`name`** stays canonical for alt text fallbacks, CMS summary, and stability; adapter already supports **`title ?? name`** via **`SigilRecord`** once JSON allows it.
2. **`meaning`** — Removes reliance on **doctrine-parsing heuristics** for the short “meaning” line; **`doctrine`** remains full storage for detail / search / canon.
3. **`layer`** — **Organizational** metadata only; does not collide with **`facets`** / **`category`** if defined carefully; all optional.

**Why these three:** each is **optional**, **non-breaking** if omitted, and maps cleanly to **`toSigilDisplayItem`** precedence (explicit additive → internal fallback → default). No duplication of filter taxonomy until editorial policy exists.

### 4. Fields to delay

| Field | Reason to defer |
| ----- | ----------------- |
| **`empyrriaans`** | Requires **naming doctrine** (one column vs **`terms`**, Zierota vs English, duplicates). |
| **`displayType`** | Risks **duplicating** **`facets[0]`** / **`category`** before taxonomy rules are locked. |
| **`displayCategory`** | Same—overlap with **`category`** and browse filters; needs glossary first. |
| **`version`** | Adapter already supplies **`"v1"`**; per-sigil **`version`** adds CMS/editor overhead with little gain until export/API needs it. |

### 5. Adapter precedence rule (future)

When additive fields exist:

**explicit optional additive value** → **current internal field(s)** → **empty / heuristic / default** (e.g. **`meaning`** additive → else **`extractShortMeaningFromDoctrine(doctrine)`** → else **`""`**).

**Routing, search keys, and discoverability** continue to use **unchanged internal fields** unless a future RFC explicitly extends them.

### 6. Schema / CMS / validation / adapter gate

A field is **not** live-editorial until **all** are true:

1. **`sigils.schema.json`** allows the property (with correct typing / optional).
2. **`public/admin/config.yml`** exposes the field for Zierota with hints.
3. **`toSigilDisplayItem`** (and any consumer) **reads** the field with precedence rules.
4. **`npm run build`** (`validate:content`) **PASS**.

Order of work in a later phase: **schema** → **validator** (if needed) → **adapter** → **CMS** → **optional JSON population** (editorial).

### 7. No Big Bang rename rule

**Existing fields remain authoritative** for: storage shape, **`slug`** routing, canon alignment, Fuse search (`name`, `doctrine`, `facets`), **`getPubliclyDiscoverableSigils`**, and Classification blocks. Additive fields are **presentation and organization overlays**, not replacements.

### 8. Next recommended implementation phase

**Name:** **ADD OPTIONAL FIELDS TO SCHEMA + ADAPTER SUPPORT** (first wave: **`title`**, **`meaning`**, **`layer`** only).

**Preconditions:** this RFC **reviewed and locked** by maintainer/creator; no data migration until schema + adapter + validation + CMS are ready.

**Out of scope until a later RFC:** **`SigilCard`** / detail page migration to adapter (optional follow-on).

---

## OPTIONAL FIELD IMPLEMENTATION — FIRST WAVE

### Pre-implementation *(intent — 2026-05-09)*

**Scope:** First-wave **optional** additive keys — **`title`**, **`meaning`**, **`layer`** — in **`sigils.schema.json`**, **`Sigil`** TypeScript type, and **`toSigilDisplayItem`** precedence only.

**Optional-only rule:** No entry **requires** these fields; existing **`sigils.json`** rows remain valid unchanged.

**Authoritative fallback:** **`slug`**, **`name`**, **`doctrine`**, **`facets`**, **`category`**, **`terms`**, **`status`**, **`visibility`**, discoverability, Fuse keys, routes — **unchanged**. Additive fields **overlay** display logic only where adapter consumes them.

**Schema compatibility:** Extend **`$defs/sigil.properties`** with optional strings; **`additionalProperties: false`** preserved by listing new keys explicitly.

**Adapter precedence:** **`title`** explicit → **`name`**; **`meaning`** explicit → **`extractShortMeaningFromDoctrine(doctrine)`**; **`layer`** explicit → **`""`**.

**Validation:** **`npm run build`**, **`npx astro check`** after implementation.

**Rollback safety:** Revert schema + type + adapter commits; JSON untouched → identical runtime behavior.

**CMS:** **Unchanged** this pass — Decap **not** wired for new fields yet (optional editorial later).

### Implementation result — locked (2026-05-09)

**Implemented:**

- **`src/data/sigils.schema.json`** — optional **`title`**, **`meaning`**, **`layer`** on **`$defs/sigil`** (`additionalProperties: false` preserved).
- **`src/types/sigil.ts`** — **`title?`**, **`meaning?`**, **`layer?`** on **`Sigil`**.
- **`src/lib/sigilDisplay.ts`** — **`SigilRecord`** no longer duplicates **`title`**; precedence: **`title`** → **`name`**; **`meaning`** → **`extractShortMeaningFromDoctrine(doctrine)`**; **`layer`** → **`""`**. Discoverability, **`status`**, tags merge unchanged.

**Not changed:** **`sigils.json`** (no additive keys populated yet), **`public/admin/config.yml`**, **`lib/sigils.ts`**, **`SigilCard`**, **`sigils/[slug]`**, **`sigils/index`**, Fuse keys, routes.

**CMS status:** **Untouched** — optional fields not in Decap until a dedicated CMS pass.

**Validation:** `npm run build` — **PASS**; `npx astro check` — **PASS**.

**Unchanged behavior:** All five public sigils + fixture validate with **no** new keys required; browse/search/filter/detail/showcase behavior unchanged (additive fields only affect adapter output when present).

**Next recommended phase:** (1) **CMS pass** — add optional widgets + hints for **`title`**, **`meaning`**, **`layer`**; or (2) **editorial** — populate selective keys in JSON + smoke-test adapter; or (3) **adapter rollout** — use **`toSigilDisplayItem`** on **`SigilCard`** / detail when ready.

---

## SELECTIVE CONTENT ENRICHMENT PILOT

### Pre-implementation *(intent — 2026-05-09)*

**Purpose:** Validate **editorial semantics** and **adapter precedence** with real **`sigils.json`** data on **one** live entry before archive-wide enrichment.

**Why only one sigil:** Isolated blast radius; clear **A/B** against siblings using fallback-only behavior; simple **rollback** (remove three optional keys from one object).

**Rollback:** Delete **`title`**, **`meaning`**, **`layer`** from the pilot row → identical to pre-pilot adapter output.

**Scope:** **No** CMS expansion, **no** UI refactor, **no** taxonomy/discoverability/route/search changes; **no** other sigils touched.

**Success criteria:** Build passes; **`toSigilDisplayItem`** prefers explicit **`title`**, **`meaning`**, **`layer`**; other entries unchanged.

### Pilot result — locked (2026-05-09)

**Pilot sigil:** **`iah-vea`** only.

**Fields added in `sigils.json`:**

| Field | Value |
| ----- | ----- |
| **`title`** | `IAH-VEA · Declared Doctrine` |
| **`meaning`** | `Inscription of declared structure—not felt, not trained.` |
| **`layer`** | `Doctrine · Layer 2` |

**Doctrine:** Unchanged (full **`Meaning / Function`** block preserved).

**Adapter:** **`toSigilDisplayItem`** resolves **`title`**, **`meaning`**, **`layer`** from explicit keys; other sigils unchanged (fallbacks only).

**Visible UI:** **`/showcase`** grid uses adapter for card **`title`** → pilot entry shows ceremonial **`title`**; **`/sigils`**, **`SigilCard`**, **`/sigils/iah-vea`** detail still use **`name`** for headings (no card/detail refactor this phase). **`meaning`** / **`layer`** present in **`SigilDisplayItem`** for future surfaces; not rendered on showcase yet.

**Editorial note:** Short **`meaning`** matches the locked doctrine lead sentence; **`layer`** is a minimal archive designation (not new system lore).

**Rollback:** Remove the three keys from the **`iah-vea`** object → prior display strings.

**Validation:** `npm run build` — **PASS**; `npx astro check` — **PASS**.

**Next recommended phase:** Optional second pilot sigil (e.g. Soulflame) **or** CMS widgets for optional fields **or** surface **`meaning`** / **`layer`** on detail when layout RFC is ready.

---

## SECOND SELECTIVE CONTENT ENRICHMENT PILOT

### Pre-implementation *(intent)*

**Purpose:** Validate optional **`title`**, **`meaning`**, **`layer`** on a **second live archetype** after **`iah-vea`** — proving adapter + detail gating hold across **different** catalogue roles, not only Doctrine-class entries.

**Why Soulflame:** First pilot (**`iah-vea`**) is a **Doctrine Sigil** (declarative / inscriptional posture). **Soulflame** is **Core / Energy** — identity-rooted, non-doctrine-primary wording in canon. Exercising the same optional keys on **Core / Energy** reduces risk of accidental coupling between enrichment and one taxonomy bucket.

**Difference from IAH-VEA:** **`iah-vea`** — doctrine-layer archive line (**`Doctrine · Layer 2`**), declarative title gloss. **Soulflame** — core-identity register, title/meaning/layer aligned to **inner identity / Core of Being** without rewriting doctrine.

**Scope:** **Exactly one** sigil — **`soulflame-sigil`** — **`sigils.json`** only (**no** other rows). **No** schema/CMS/UI/discoverability/route/search changes.

**Rollback:** Remove **`title`**, **`meaning`**, **`layer`** from the Soulflame object → behavior matches pre-second-pilot (detail page omits optional block for that entry).

**No archive-wide rollout:** This phase does **not** authorize bulk enrichment or CMS-required population — editorial pilot **#2** only.

### Pilot result — locked (2026-05-09)

**Target sigil:** **`soulflame-sigil`** (`Soulflame Sigil`) — **only** row enriched.

**Fields added in `sigils.json`:**

| Field | Value |
| ----- | ----- |
| **`title`** | `Soulflame · Core of Being` |
| **`meaning`** | `Core identity made symbolic—not state, not phenomenon.` |
| **`layer`** | `Core · Layer 1` |

**Doctrine:** Unchanged — full **`Meaning / Function`** block verbatim.

**Visual behavior:** Same detail-page rules as **`iah-vea`** — muted gloss under **`<h1>`**, **`meaning`** + **`layer`** block above Doctrine (**`/sigils/soulflame-sigil`**). Showcase grid picks up ceremonial **`title`** via adapter for Soulflame card only among siblings.

**Validation:** **`npm run build`** — PASS (**`validate:content`** included); **`npx astro check`** — PASS.

**Spot-check:** **`iah-vea`** optional lines unchanged; sigils **without** optional keys (e.g. Top-Clear-Mind) show **no** enrichment block.

**Rollback:** Delete the three keys from the Soulflame object; optionally revert **`version`** if rolling back sole change.

**Next recommended phase:** See **CMS OPTIONAL FIELD EXPOSURE — TITLE / MEANING / LAYER** (below) when locked; **or** RFC Stage **B** (**`SigilCard`** browse parity) **if** editorial wants — **or** define **archive-wide enrichment policy** (still **no** mandatory bulk JSON pass until approved).

---

## CMS OPTIONAL FIELD EXPOSURE — TITLE / MEANING / LAYER

### Purpose

Expose **`title`**, **`meaning`**, and **`layer`** in **Decap CMS** (`public/admin/config.yml`) as **optional** editorial widgets so future canon work can set display metadata through the CMS when desired. The site already supports these keys in **`sigils.schema.json`**, types, adapter, and detail rendering; this phase **only** widens the editor surface—**no** `sigils.json` edits, **no** public UI or route changes, **no** discoverability changes.

### Optional-only rule

Every added widget is **`required: false`**. Editors may leave all three empty; saves must not force values. Absent keys in JSON continue to mean “omit on site” per existing gates.

### No migration rule

**No archive-wide obligation** to backfill **`title`** / **`meaning`** / **`layer`**. Existing rows remain valid unchanged. Population stays **selective editorial** only when maintainer canon workflow chooses it.

### Editorial guidance

| Field | Use |
| ----- | ----- |
| **`title`** | Short **display** gloss when the ceremonial heading should differ from **`name`**; **`name`** stays the stable catalogue identity / CMS summary / alt fallbacks unless product policy evolves elsewhere. |
| **`meaning`** | Short **doctrine-adjacent** summary line—neutral, restrained; never a substitute for full **`doctrine`**. |
| **`layer`** | Restrained **archive / catalogue layer** label (e.g. role or stratum shorthand)—not taxonomy replacement for **`category`** / **`facets`**. |

**Defaults:** none in CMS—no hidden generated values.

### Validation requirements

- **`npm run build`** (includes **`validate:content`**).
- **`npx astro check`**.
- **CMS smoke (manual):** `npm run dev` + **`npx decap-server`** where local backend applies; **`/admin`** loads; new fields visible and skippable; editing a sigil without touching them leaves behavior unchanged.

### Rollback simplicity

Revert the three widget definitions in **`public/admin/config.yml`**. Published JSON is unchanged unless an editor deliberately saved optional keys—no schema or app code rollback required for this phase alone.

### Lock — implementation result (2026-05-10)

- **CMS fields added** in **`public/admin/config.yml`** (per-sigil list): **`title`** (`string`), **`meaning`** (`text`), **`layer`** (`string`), each **`required: false`**, **no** default values, **no** hidden generated values.
- **`sigils.json`:** **not** edited in this task (stable committed pack).
- **Schema / app / routes / discoverability / public UI:** **unchanged** — editorial surface only.

### Validation results

| Check | Result |
| ----- | ------ |
| **`npm run build`** (includes **`validate:content`**) | **PASS** |
| **`npx astro check`** | **PASS** (0 errors, 0 warnings, 0 hints) |

### CMS smoke

- **`npx decap-server`** (with **`local_backend: true`**) starts and binds (File System Proxy; **8081** in verification run).
- Full **`/admin`** load and optional-field edit flow: use **`npm run dev`** + browser (**manual**).

### Optional behavior (confirmed by config + build)

- Widgets are **not** required; existing entries need **no** new metadata to remain valid in CMS and in **`validate:content`**.
- Saving without filling **`title`** / **`meaning`** / **`layer`** does not inject keys unless Decap omits empty optionals (editor behavior); site gates already treat missing keys as omission.

### Next recommended phase

**RFC Stage B** (**`SigilCard`** optional metadata) **if** editorial wants browse parity — **or** next **canon ingestion** per **CANON INGESTION PIPELINE** — **or** explicit **archive-wide enrichment policy** (still **no** mandatory backfill).

### Lock

**CLOSED** — additive editorial tooling only; **ceremonial archive** contract preserved.

---

## ENTITY MODEL ARCHITECTURE RFC

**Status:** **Locked** (**2026-05-10**) — **documentation / planning baseline**; governs codex growth until superseded. **Intent:** constrain how the Sigil Codex **grows** before new fields arrive—prevent the archive from collapsing into an undifferentiated lore database while optional metadata infrastructure (**schema**, **`sigilDisplay`**, detail/CMS) remains operational for today’s **`iah-vea`** / **`soulflame-sigil`** pilots. **Ingestion staging** for **Top-Iron-Endurance** → **`TOP-IRON-ENDURANCE INGESTION RFC`** (below).

### 1. Purpose

Working notes for **Top-Iron-Endurance** exposed information dimensions that extend **beyond** the practical **single-row sigil record** optimized for **`slug` routing**, Classification, Doctrine, governance (**`status`** / **`visibility`**), and search. Those dimensions are legitimate for a **setting-scale symbolic entity**, but **not** all belong in one flat **`sigils.json`** object unless grouped, gated, and introduced with policy. This RFC **names groups and boundaries** before any ingestion or schema work.

### 2. Current model boundary (locked for this RFC)

Present **internal sigil row** vocabulary (canonical pack + additive display metadata already in use):

`slug`, `name`, `doctrine`, `underlay`, `category`, `facets`, `terms`, `geometry`, `usage`, `color`, `image`, `status`, `visibility`, **`title`**, **`meaning`**, **`layer`**.

This row remains the **authoritative shipping surface** until a later **structured entity** design is reviewed, locked, and implemented through **additive** paths.

### 3. New observed field groups (from Top-Iron-Endurance–class material)

Classify **candidate** information—**not** present as a flat schema commitment—into **semantic groups**. Many items overlap today’s row (e.g. **`name`**, **`category`**, **`doctrine`**) but some imply **new** slots or **relation graphs** the current model does not represent.

**A. Canon identity**

- name  
- image  
- category  
- status  

**B. Doctrine / system**

- doctrine / system (system-level framing adjacent to core text)  
- function  
- meaning  
- lore explanation  

**C. Origin / ontology**

- place of origin  
- source system  
- symbolic origin  

**D. Relationship graph**

- related sigils  
- related systems  
- related places  
- related characters  

**E. Character resonance**

- character-link  
- character-specific interpretation  

**F. Visual doctrine**

- colors  
- geometry  
- shape language  
- icon rules  
- visual constraints  

**G. Presentation / display**

- card title  
- card summary  
- hover text  
- display priority  
- recommended page type  

**H. Search / discovery**

- tags  
- filter words  
- spoiler level  
- public-safe markers  

**I. Editorial / CMS convenience**

- simple CMS fields  
- internal notes  
- CMS test-entry markers  

### 4. Core principle — no premature flat collapse

Do **not** merge all groups into a **single** wide flat schema yet. Treat each group as a candidate **subsystem**—each **may** later become its **own structured object** (nested block, sidecar, or reference set) rather than endlessly appending loosely named keys beside **`doctrine`**.

### 5. Recommended future architecture (conceptual — not implemented)

Goal shape for discussion only (exact names and nesting TBD):

```text
identity:       { … }   # stable IDs, catalogue name, canon-facing labels
doctrine:     { … }   # authoritative text blocks + doctrine/system framing
origin:       { … }   # ontology / provenance buckets
relations:    { … }   # outgoing links (see warnings)
characterLinks: [ … ] # resonance lanes, character-scoped readings
visual:       { … }   # emblem rules, palettes, geometric language
display:      { … }   # UX-facing presentation overrides
discovery:    { … }   # tagging, spoilers, browse surfaces
editorial:    { … }   # CMS-only / internal (non-public)
```

**No** implementation, **no** JSON shape, **no** TypeScript types are implied by this sketch.

### 6. Migration strategy

- **Adapter-first** remains **approved** — presentation can lag or abstract without reshaping raw storage prematurely.  
- **Additive fields** remain **approved** — new keys introduced only where schema + validator + CMS + consumers are ready; **never** wholesale rename.  
- **No Big Bang rename** — same rule as **`DATA MODEL REALIGNMENT`** family: stability of **`slug`** and existing keys dominates.  
- **No graph / relation engine** until **relationship semantics** are defined (targets, cardinality, canon vs speculative, spoiler policy).

### 7. Relationship warning

Relationship fields (**related sigils / systems / places / characters**) will almost certainly require **stable targets** (**`slug`**, IDs, or controlled vocab)—**not** only free prose—before they are machine-safe or browseable. Plain-text lists are insufficient for inference; defer graph features until linkage rules lock.

### 8. Visual doctrine warning

Separate **design-system / emblem constraints** (**F**) from **canon doctrinal prose** (**B**). Mixing **`color`** / **`geometry`** narrative with doctrinal authority too early blurs “what the symbol **is**” vs “how we **draw** it for the site,” and invites layout debt.

### 9. CMS warning

Do **not** expose every future group in Decap at once. The CMS must stay **legible** for editorial use (Barry and collaborators); overwhelming field lists cause silent mistakes and abandoned drafts. Stage CMS exposure **per group** after **schema + policy + adapter** alignment for that group.

### 10. Top-Iron-Endurance handling

**Top-Iron-Endurance** was an **architecture specimen**; Phase **A** row **`top-iron-endurance`** is now **live** under **`TOP-IRON-ENDURANCE PHASE A IMPLEMENTATION`** — **still** governed by staged ingestion (**Phases B–D** deferred); **no** graph/schema expansion without follow-on RFCs.

### 11. Next recommended phase

After maintainer/creator review of **this** RFC:

1. **TOP-IRON-ENDURANCE INGESTION RFC** — **documented** (below); sequencing follows **SIGIL ENTITY TEMPLATE RFC** (**locked**) → **SIGIL TEMPLATE → CURRENT MODEL MAPPING PLAN** → **TOP-IRON-ENDURANCE LAYOUT SPEC / RFC** → **LAYOUT WIREFRAME PLAN** → **PHASE A IMPLEMENTATION PLAN** (**documented**; lock) → **`TOP-IRON-ENDURANCE PHASE A IMPLEMENTATION`** (execution) → **PHASE A CONTENT INGESTION** as applicable (layout spec §9; implementation plan §12).  
2. **STRUCTURED ENTITY MODEL DESIGN RFC** — formalize nested **`identity` / `doctrine` / …** shapes, validation, adapter mapping, and phased CMS before wide lore-style expansion—**if** flat row + Phase A–B cannot hold the entry safely.

**Gate:** **Do not** implement ingestion or structural JSON until **TOP-IRON-ENDURANCE PHASE A IMPLEMENTATION PLAN** (and prior mapping/layout/wireframe gates) is **reviewed and locked** — or until **STRUCTURED ENTITY MODEL DESIGN RFC** supersedes the path.

---

## UNIVERSAL SIGIL DOSSIER ARCHITECTURE RFC

**Status:** **Documented** (**2026-05-10**) — **documentation / architecture only**; **no** **`sigils.json`** edits, **no** **`sigils.schema.json`**, **no** CMS/UI, **no** graph/query systems, **no** discoverability rewires, **no** mandated backfill / bulk expansion. **Complements:** **ENTITY MODEL ARCHITECTURE RFC** (**locked**) — grouped growth boundaries — by naming the **reader-facing dossier skeleton** shared by **every** sigil regardless of shipping depth.

### 1. Purpose

Establish that **each** canon sigil **conceptually** occupies the **same dossier frame**: a repeatable **intellectual anatomy** for identity, doctrine, function, lore, visuals, classification, relations, and internal notes. Entries differ by **which dossier compartments are populated**, **how much** prose they carry, **what UI reveals**, and **what remains future-facing** — **not** by belonging to fundamentally different archival species.

### 2. Core architectural principle

**Universal dossier ≠ uniform dossier.**

A universal dossier structure **does not** mean:

- **Equal visible density** on the public detail page  
- **Equal depth** inside every dossier section  
- **Forced field population** so sparse rows imitate rich ones  
- **Flat schema explosion** (“one column per subsection”) without governance  
- **Mandatory public exposure** of every conceptual compartment  

**Sparse entries remain canonically valid.** Minimum public truth can be **small** while the **implicit dossier map** still describes where future material **would** live.

### 3. Universal dossier sections (conceptual anatomy)

Recurring compartments — **not** a commitment that each has a dedicated machine field today:

| Section | Role (conceptual) | Typical content focus |
| ------- | ----------------- | ---------------------- |
| **A. Identity** | Registry-facing who/what | **`name`**, ceremonial **`title`**, plate **`image`**, catalogue **`category`** / **`facets`**, governance **`status`** / **`visibility`**, route **`slug`** |
| **B. Doctrine / System** | Canonical meaning & system placement | **`doctrine`**, optional lead **`meaning`**, archive line **`layer`** (or future **system placement** prose) |
| **C. Function** | Operational role in-world & in narrative | **`usage`** (function / scenes / operative context) |
| **D. Origin** | Provenance & emergence | Source, historical placement, emergence narrative — **often prose-only** or absent until approved |
| **E. Relations** | Network context (subtle by default) | Related sigils, systems, places, resonance links — **today may be** absent, embedded in **`underlay`**, or prototype-gated prose |
| **F. Character resonance** | Entity-scoped readings | Character-linked interpretation — **future** or rare; must not turn public pages into character wikis |
| **G. Visual Identity** | Emblem & palette logic | **`geometry`**, **`color`**, symbolic visual behavior — **archival analysis tone**, not design-brief noise |
| **H. Lore / Interpretation** | Contextual explanation | Narrative / interpretive layer — **`underlay`**, disciplined doctrine-adjacent prose, or **future** dedicated blocks |
| **I. Discovery / Classification** | Lexicon & discovery helpers | **`terms`**, **`facets`**, filter/search behavior, inline classification — **quiet** on the page |
| **J. Editorial / Internal** | Non-public process | Notes, staging, governance-only markers — **never** shipped to public routes by default |

Overlap with **ENTITY MODEL ARCHITECTURE RFC** groups is **intentional**; this RFC states the **dossier reader contract** and **visibility philosophy** that those groups eventually **must** serve.

### 4. Visibility tiers

| Tier | Name | Intent |
| ---- | ---- | ------ |
| **TIER 1 — CORE PUBLIC** | Always expected for a **discoverable** public sigil | **Identity** (at least registry identity + route), **`doctrine`**, **function** (**`usage`** or doctrine-bound equivalent), **minimal classification** (category / facets / terms as policy requires) |
| **TIER 2 — OPTIONAL PUBLIC DEPTH** | Render **only when** editorially justified | Expanded **lore**, **origin**, fuller **visual identity** prose, **relations**, **character resonance** — gated so pages do not Auto-Wiki |
| **TIER 3 — COLLAPSED / SUBTLE** | Present but **quiet** | Dense discovery metadata, extended relations previews, indexing terms rows, **`<details>`**-class disclosure (as already used for tertiary material on select entries) |
| **TIER 4 — INTERNAL / EDITORIAL** | Non-public default | Maintainer notes, draft staging, ingestion commentary — **excluded from** static public build semantics |

### 5. Sparse-entry rule

**Canon validity does not require a fat row.** A sigil may ship with only:

- **`name`** (and implied **`slug`**)  
- **`doctrine`**  
- **`image`** *(still optional under existing asset policy)*  

…and remain **fully valid** inside the dossier framework: absent sections are **implicitly empty**, **not** “missing lore.” Editors may later **selectively deepen** dossier compartments per **Controlled Editorial Enrichment** discipline.

### 6. Prose-preservation rule

Many dossier compartments remain **prose-first**, **interpretive**, and **symbolic** indefinitely:

- Do **not** force every nuanced reading into keyed sub-records prematurely.  
- Prefer **disciplined free text** inside approved surfaces (**`doctrine`**, **`underlay`**, controlled additions) until **semantic repetition** justifies extraction.  

**Interpretive density** beats **premature normalization**.

### 7. Future-structure rule

Only compartments with **stable, repeated semantics** — validated across entries and editorially stable — may graduate to:

- Structured objects / nested props  
- Graph-safe relations (**see ENTITY MODEL ARCHITECTURE RFC**, relationship warnings)  

**Phase B–class** structure is **Earned**, not speculative front-loading.

### 8. Atmosphere protection

The dossier metaphor must **never** collapse the codex into:

- A **fandom wiki** (exhaustive cross-links, tonal sprawl)  
- A **game codex UI** (stat grids, rarity chrome)  
- A **dashboard** (competing section headers / panel soup)  
- A **flat metadata dump** (every tier visible at once)  

**Preserve:**

- Ceremonial **pacing** and **doctrine-first** hierarchy  
- **Quiet** classification & discovery layers  
- **Symbolic gravity**, **restrained disclosure**, **tiered visibility**

### 9. CMS implication

Dec **`public/admin/config.yml`** exposure must track:

- **Visibility tiers** (ship Tier **1** helpers before Tier **2**)  
- **Editorial maturity** (fields editors can maintain without error)  
- **Section stability** (do not expose speculative compartments until semantics lock)  

**Never** expose the **entire** conceptual dossier as editable columns in one rollout.

### 10. Reading-flow protection

Regardless of dossier depth on disk:

1. **`doctrine`** remains **visually and rhetorically primary** on detail.  
2. **Lore / interpretation** remains **secondary** — supporting, never usurping.  
3. **Relations** stay **subtle** — no public page becomes a **navigation hub**.  
4. **Metadata & classification** remain **quiet** — caption-scale, inline, or collapsed as policy dictates.

### 11. Current compatibility

Today’s lightweight **single-row model** (see **ENTITY MODEL ARCHITECTURE RFC**, § **Current model boundary**) already expresses **much** of the dossier anatomy:

- **Identity** — **`slug`**, **`name`**, **`title`**, **`image`**, **`category`**, **`facets`**, **`status`**, **`visibility`**  
- **Doctrine / System** — **`doctrine`**, **`meaning`**, **`layer`**  
- **Function** — **`usage`**  
- **Visual Identity** — **`geometry`**, **`color`**  
- **Lore / Relations (partial)** — **`underlay`** (including prototype split prose for **`top-iron-endurance`**)  
- **Discovery / Classification** — **`terms`**, **`facets`**, Fuse/search consumers, Classification **`dl`**  
- **Presentation** — **`sigilDisplay`** adapter bridges catalogues without flattening dossier tiers in UI  

**Phase B nested entities** remain **optional** until **semantic pressure** exceeds what **additive prose**, **sparse rows**, **selective enrichment**, and **slug-scoped UX gates** can hold cleanly.

### 12. Readiness conclusion

**Yes** — the codex can **continue maturing** safely within **current architecture**: selective enrichment, canon mirroring, optional display metadata, and controlled tertiary disclosure already implement **tiered dossier behavior** **without** global schema churn.

### 13. Next recommended phase

| Path | When |
| ---- | ---- |
| **SELECTIVE DOSSIER EXPANSION PASSES** | **Default** — deepen **one sigil at a time** (which dossier compartments to fill / reveal, prose vs future structure) under **Controlled Editorial Enrichment Guidelines** (**locked**) and atmosphere locks. |
| **STRUCTURED ENTITY MODEL DESIGN RFC** | **Only if** recurring relation/origin/visual-system semantics create **genuine flattening pressure** against the row + adapter surface — **not** merely because dossier compartments exist conceptually. |

**Recommendation:** Continue **selective dossier expansion** in prose and existing fields; treat **STRUCTURED ENTITY MODEL DESIGN RFC** as an **escape hatch** for validated structural pain, **not** the next default milestone.

---

## TOP-IRON-ENDURANCE INGESTION RFC

**Status:** **RFC / planning only** — **no** **Top-Iron-Endurance** ingestion, **no** `sigils.json`, schema, CMS, UI, new fields, relationship implementation, graph logic, route, or discoverability changes in **this** pass.

**Depends on:** **ENTITY MODEL ARCHITECTURE RFC** (**locked**) — grouped entity map; **avoid** unstructured lore-database sprawl.

### 1. Purpose

**Top-Iron-Endurance** is the first **full-spectrum** symbolic-entity specimen in the planning corpus: breadth approaches **ENTITY MODEL ARCHITECTURE RFC** groups A–I. Shipping that breadth **inline** without staging would pressure **schema**, **CMS**, **adapter**, and editorial clarity—risks echoed by **Soulflame** / **IAH-VEA** pilots but at larger surface area. **Ingestion must be staged**: start from what already matches the **sigil row** contract, preserve **doctrine-first** ceremonial tone, defer graphs and visual-design systems until semantics and UX policy exist.

### 2. Current compatibility audit

Map specimen content to today’s codex machinery (see **ENTITY MODEL ARCHITECTURE RFC**, § **Current model boundary**).

**LIKELY COMPATIBLE NOW** *(map into existing or already-approved additive slots without new primitives)*  

- **name** — aligns with **`name`**.  
- **image** — aligns with **`image`** (+ asset path convention).  
- **category** — aligns with **`category`** / **`facets`**.  
- **doctrine** — aligns with **`doctrine`** (canonical long block).  
- **title**, **meaning**, **layer** — align with optional additive display metadata (**schema + CMS + detail** already support).  
- **tags / search terms** — align with **`terms`** / **`facets`** (existing discoverability helpers).  
- **status** — aligns with **`status`** / **`visibility`** (governance + discoverability; match live conventions).  
- **basic lore text** — can remain **`doctrine`**, **`underlay`**, or disciplined prose chunks **inside** approved text fields—not every paragraph needs a new key (**see §5**).

**LIKELY PARTIAL** *(present row can hold drafts, but meaning may straddle prose vs future structured slots)*  

- **function** — may fit **`usage`** or a short adjunct line today; fuller “function ontology” belongs in later structured **`doctrine`** / **`origin`** work (**Phase B**).  
- **place of origin** — no dedicated slot; tentative **`underlay`** or disciplined prose until **`origin`** object exists (**Phase B**).  
- **doctrine / system references** — risk of duplicating **`doctrine`**; cross-system pointers need policy before separate fields (**Phase B**).

**LIKELY FUTURE-ONLY** *(do not ingest as first-class coded data yet)*  

- **structured relations** (sigils / systems / places / characters).  
- **character resonance graph** (**character-link**, character-scoped interpretations as graph).  
- **visual doctrine system** (beyond today’s Classification **strings**: full **design bible**, **icon rules**, **symbolic shape language** as a subsystem).  
- **display-priority** and **page-type** systems.  
- **spoiler / public-safe** machinery as schema-driven flags.  

**Note:** **`geometry`**, **`color`**, **`usage`** exist on the row for **Classification** — **Phase D** is about treating **visual doctrine** as its **own** governed architecture, not about denying current fields.

### 3. Ingestion risk analysis

| Risk | Why it hurts the codex |
| ---- | ---------------------- |
| **Schema explosion** | Too many parallel keys **`doctrine`**, **`lore`**, **`explanation`** … collapse into competing “truth” strings; validator and adapter debt. |
| **CMS overload** | Editors face wall of fields → inconsistent fills, abandonment, stealth typos in canon-visible slots. |
| **Relationship ambiguity** | Free-text “related to X” never becomes browseable or spoiler-safe graph without targets and rules. |
| **Visual doctrine mixed with canon** | Design-bible palettes and emblem rules mistaken for doctrinal authority (or Doctrine polluted with UX notes). |
| **Duplicated doctrine / lore fields** | Same narrative in two keys; conflicting edits; unclear which block is authoritative. |
| **Uncontrolled metadata growth** | Every workshop note becomes a column; ceremonial archive reads as RPG wiki dump. |

### 4. Recommended staged ingestion

**PHASE A — Minimal compatible**  

- **`slug`**, **`name`**, **`doctrine`** (and existing required row contract only).  
- Optional: **`title`**, **`meaning`**, **`layer`**, **`category`**, **`facets`**, **`terms`**, **`image`**, **`status`**, **`visibility`** as already supported.  
- **Additive metadata only** where already allowed; **prose preserved** verbatim in **`doctrine`** / **`underlay`** when lore is long (**§5**).  
- **No** new schema fields; **no** relation graph; **no** spoiler engines.

**PHASE B — Controlled structured additions** *(after RFC + explicit schema/CMS/adapter milestones)*  

- **`origin`**-class material (place, source system, symbolic origin) — **nested or additive** per **STRUCTURED ENTITY MODEL DESIGN RFC**, not one-off orphans.  
- **`function`** (and **doctrine/system** references) — **explicit** separation from duplicated **`doctrine`** body; adapter rules for precedence.

**PHASE C — Graph-aware systems** *(deferred heavily)*  

- **Structured relations** (targets: **slug** / ID vocabulary).  
- **Character-link** references and ontology-backed interpretation lanes.  

**PHASE D — Visual doctrine architecture**  

- **`geometry`** / **`color`** evolve from **Classification copy** toward **design-bible / art-direction** subsystem if editorially required—**distinct** canon boundary (**§7**).

### 5. Prose vs structured data rule

**Not** every rich sentence warrants a dedicated JSON key. Lore density may intentionally stay **prose inside vetted surfaces** (**`doctrine`**, **`underlay`**) to avoid premature atomization.

**Structured fields** emerge only where:

- semantics are **stable** (won’t churn weekly),  
- consumers exist (browse, spoiler filter, relational graph), and  
- **one** authoring location is enforced (no silent duplicate doctrines).

### 6. Relationship handling warning

**Do not** park complex relationship semantics indefinitely in **uncontrolled** long text lists. Persistent “related entities” belongs in **Phase C** with **IDs / slugs** (or equivalent controlled targets)—not prose-only substitutes.

### 7. Visual doctrine handling warning

Rich **visual identity** notes for **Top-Iron-Endurance**–class entries behave more like a **design bible** or **symbolic art direction** than a finished **canon ontology** slot. **Keep separated** from authoritative **doctrine** prose until **Phase D** has its own contract; do not fold palette/icon grammar into **`doctrine`** as a shortcut.

### 8. CMS warning

**Do not** surface all **ENTITY MODEL** groups in Decap in one release. Preserve **editorial readability** and **low cognitive load**—stage CMS with **schema + adapter** for each slice (**same rule** as **ENTITY MODEL ARCHITECTURE RFC §9**).

### 9. Recommended future architecture path

- **Adapter-first** — **approved**: map new shapes in **`sigilDisplay`** (and successors) before raw JSON churn spreads.  
- **Additive evolution** — **approved**: optional keys + nested blobs only through gated milestones; **no** Big Bang migration.  
- **Nested architecture** — **approved** as **future direction** (**ENTITY MODEL ARCHITECTURE RFC §5** sketch), not mandatory for Phase A.  
- **Graph architecture** — **deferred** until **Phase C** semantics lock.  
- **No Big Bang rename** — **unchanged** project rule.

### 10. Ingestion readiness conclusion

**Top-Iron-Endurance is not ready for full structured ingestion.**

Only **selective staged** ingestion should eventually occur: **Phase A** first (**current row contract**); Phases **B→D** only after discrete RFC/implementation gates. **Do not treat** specimen worksheets as mandates to instantiate every hypothetical field at once.

### 11. Next recommended phase

Gate order: **`SIGIL ENTITY TEMPLATE RFC`** (**locked**) → **`SIGIL TEMPLATE → CURRENT MODEL MAPPING PLAN`** (**documented**; **lock** after review) → **`TOP-IRON-ENDURANCE LAYOUT SPEC / RFC`** (**documented**) → **`TOP-IRON-ENDURANCE LAYOUT WIREFRAME PLAN`** (**documented**; **lock** after review) → **`TOP-IRON-ENDURANCE PHASE A IMPLEMENTATION PLAN`** (**documented**; **lock** after review) → **`TOP-IRON-ENDURANCE PHASE A IMPLEMENTATION`** (execution: UI + data + canon per plan) → **`TOP-IRON-ENDURANCE PHASE A CONTENT INGESTION`** / pack land (layout spec §9; wireframe §12; **implementation plan §12**). Optional: **`TOP-IRON-ENDURANCE PHASE A IMPLEMENTATION RFC`** for formal governance.

**No code/ingestion** until **mapping**, **layout spec**, **wireframe**, and **Phase A implementation plan** are **reviewed and locked** where applicable (mapping plan §12; layout spec §9; wireframe §11–§12; **implementation plan §11–§12**).

---

## SIGIL ENTITY TEMPLATE RFC

**Status:** **Locked** — **RFC / documentation baseline**; universal **workspace / canon-sheet** anatomy for **every** sigil entry. **Clarifies:** **Top-Iron-Endurance** is early **proof** of a **standard skeleton**, not an exception—all sigils recur through the **same sections** with **different** content, tone, relations, and visual identity.

**Depends on:** **ENTITY MODEL ARCHITECTURE RFC** (**locked**), **TOP-IRON-ENDURANCE INGESTION RFC** (**documented**) — phased ingestion and growth boundaries still apply.

**Out of scope this pass:** **no** ingestion, **`sigils.json`**, schema, CMS, UI, new fields, relations, graph logic, routes, discoverability.

### 1. Purpose

**Top-Iron-Endurance** surfaced a **worksheet-scale** completeness that generalizes: the codex benefit is **one repeatable entry template** so authors and ingestion pipelines **think in the same rooms** regardless of taxonomy (Core, State, Doctrine, Relational…). Purpose here is **name those rooms**, classify them for storage/rendering **today vs later**, and **block** naive “flatten everything to JSON columns” instincts before **individual** ingestions (including **Phase A**) are planned.

### 2. Template principle

All sigils **may** follow the **same recurring section headings** while varying:

- substantive **content**,  
- **tone** / register,  
- density of **relations** and character resonance (including **empty** sections), and  
- **visual identity** detail.

Absent content in a subsection is normal—**structure is recurrence**, **not equality of length**.

### 3. Proposed recurring sections

Standard **authoring / archival** scaffold (conceptual—not a schema dump):

**A. Database Summary** — name; category; status; doctrine/system (high-level); place of origin; website role; spoiler/public level.

**B. Short Website Explanation** — public-facing concise explanation.

**C. CMS Summary** — editor-friendly condensed description.

**D. Lore Explanation** — longer narrative / doctrinal prose.

**E. Function Within Empyrria** — what the sigil **does** or **marks** in-setting.

**F. One-Sentence Meaning** — short explicit meaning line.

**G. Core Meaning** — deeper interpretive explanation.

**H. Place of Origin** — origin location / system / provenance.

**I. Character Link** — related character(s) and resonance.

**J. Relations** — connected sigils / systems / places.

**K. Contrasts** — what the sigil is **not** (disambiguation).

**L. Visual Identity** — colors, shape language, visual principles.

**M. Icon-Version Guidelines** — reduction rules for small display / icon use.

**N. Website Display** — card title; badge/category; hover text; slug; page type; display priority; card summary.

**O. Search Tags / Filter Words** — discovery terms.

**P. Simple CMS Fields** — simplified editorial entry fields.

**Q. Internal Notes** — non-public editorial notes.

### 4. Section classification

Primary label per section (sub-bullets inside a section may advance on a **different** schedule—see **§5**).

| Section | Classification |
| ------- | -------------- |
| **A. Database Summary** | **Canonical now** *(name, category, status);* **future structured** for spoiler/public level and system-level rollups *when policy exists*. |
| **B. Short Website Explanation** | **Display-only** |
| **C. CMS Summary** | **Editorial-only** |
| **D. Lore Explanation** | **Prose-only now** |
| **E. Function Within Empyrria** | **Canonical now** *(via **`usage`** + doctrine context;* may split **future structured** when origin/function objects land). |
| **F. One-Sentence Meaning** | **Canonical now** *(optional **`meaning`** key when set)* |
| **G. Core Meaning** | **Prose-only now** |
| **H. Place of Origin** | **Prose-only now** (`underlay` / doctrine-adjacent prose); **future structured** as **`origin`** object. |
| **I. Character Link** | **Future graph-aware** |
| **J. Relations** | **Future graph-aware** |
| **K. Contrasts** | **Prose-only now** |
| **L. Visual Identity** | **Future visual-governed** |
| **M. Icon-Version Guidelines** | **Future visual-governed** |
| **N. Website Display** | **Display-only** *(slug is **canonical now** in data;* other bullets **display/future structured**). |
| **O. Search Tags / Filter Words** | **Canonical now** (`terms` / `facets`) |
| **P. Simple CMS Fields** | **Editorial-only** |
| **Q. Internal Notes** | **Editorial-only** |

### 5. Do-not-flatten rule

**Recurring template sections do not imply one JSON field per heading.** Many sections stay **prose blocks** inside **`doctrine`** / **`underlay`**, or **display-only** surfaces shaped by the **adapter**, or **editorial-only** notes **outside** the public pack. Flattening the entire worksheet into **`sigils.json`** would recreate the **lore-database antipattern** this RFC family rejects.

### 6. Current model compatibility

Safe **Phase-A-style** mapping targets (see **TOP-IRON-ENDURANCE INGESTION RFC**, Phase A) — **no new keys required** for “compatible” content:

| Template need | Current row / additive (when present) |
| ------------- | -------------------------------------- |
| Stable ID / URL | **`slug`** |
| Catalogue name | **`name`** |
| Plate / asset | **`image`** |
| Category / buckets | **`category`**, **`facets`** |
| Long authoritative text | **`doctrine`** |
| Optional display heading | **`title`** |
| One-sentence / short line | **`meaning`** |
| Archive / layer gloss | **`layer`** |
| Discovery | **`terms`**, **`facets`** |
| Governance | **`status`**, **`visibility`** |
| Supplementary prose | **`underlay`** |
| Operational “function” copy | **`usage`** (and **`geometry`** / **`color`** for Classification styling—**not** full **§L/M** maturity) |

Interpretive depth (**§G**, long **§D**) remains **prose-first** unless a later RFC splits it **additively**.

### 7. Future structured architecture

When sections **stabilize**, they **may** map into nested objects (**ENTITY MODEL ARCHITECTURE RFC** sketch)—**conceptual anchors only**:

- **`identity`** — stable labels, spoiler/public policy when codified  
- **`doctrine`** — layered text blocks vs single monolith **`doctrine`** string  
- **`origin`** — place / source system / symbolic origin  
- **`relations`** — graph-safe edges  
- **`characterLinks`** — resonance lanes  
- **`visual`** — **§L**, **§M** under governance  
- **`display`** — **§N** presentation overrides  
- **`discovery`** — controlled tag/filter/spoiler vocabularies  
- **`editorial`** — **§C**, **§P**, **§Q**; non-public  

**Implementation** waits **STRUCTURED ENTITY MODEL DESIGN RFC** (or successor) plus staged CMS/schema gates.

### 8. Relationship warning

**§I** and **§J** must eventually use **controlled references** (**slug**, IDs, enumerated relation types)—**not** indefinite plain-text paragraphs. Early template adoption should **assume prose placeholders** **only where** ingestions cannot yet cite targets (**TOP-IRON-ENDURANCE INGESTION RFC**, Phase **C**).

### 9. Visual identity warning

**§L** and **§M** read as **design bible / symbolic art-direction** alongside today’s Classification strings. Treat as **future visual-governed**; **keep** partitioned from authoritative **§D** doctrine until **visual doctrine architecture** (**TOP-IRON-ENDURANCE** Phase **D**) matures (**same separation rule** as **ENTITY MODEL ARCHITECTURE RFC §8**, **TOP-IRON-ENDURANCE INGESTION RFC §7**).

### 10. CMS warning

Expose **only** what Barry (and collaborators) **need for safe editing today** — staged by **SIGIL TEMPLATE → CURRENT MODEL MAPPING PLAN** + **CMS OPTIONAL FIELD EXPOSURE** precedent. **Do not** paste sections **A–Q** verbatim into Decap as **first-class widgets** without schema/read-path discipline.

### 11. Ingestion impact

**All future sigil ingestions** should **trace** authoring from this template into **explicit mapping** (“section → prose vs field → JSON key”). **Top-Iron-Endurance Phase A** applies the **same** template discipline as Soulflame-class or IAH-class rows—only the **fills** change.

### 12. Next recommended phase

**SIGIL TEMPLATE → CURRENT MODEL MAPPING PLAN** — **documented** (below); **lock** after review. **Then** **TOP-IRON-ENDURANCE LAYOUT WIREFRAME PLAN** (**documented**; **lock**), **TOP-IRON-ENDURANCE PHASE A IMPLEMENTATION PLAN** (**documented**; **lock**), then **`TOP-IRON-ENDURANCE PHASE A IMPLEMENTATION`** (execution) per mapping §12 — **no** pack land until those planning gates **lock**.

---

## SIGIL TEMPLATE → CURRENT MODEL MAPPING PLAN

**Status:** **documentation / planning only** — authoritative **translation** between **SIGIL ENTITY TEMPLATE RFC** (A–Q) and the **current** `sigils.json` **row contract**. **Purpose:** ingest and author **without** triggering **premature nested architecture**, **ontology explosion**, or **template-driven field sprawl**.

**Depends on:** **SIGIL ENTITY TEMPLATE RFC** (**locked**), **TOP-IRON-ENDURANCE INGESTION RFC** (Phase **A** = current row scope), adapter (`sigilDisplay`) and governance patterns already shipped.

**Out of scope this pass:** ingestion (**including Top-Iron-Endurance**), **`sigils.json`**, schema, CMS, UI, new fields, graph systems, nested architecture implementation, routes, discoverability.

### 1. Purpose

Universal **template anatomy** exists; the **shipping** codex remains a **lightweight flat row**. This plan defines **exactly** how worksheet sections land **today** — structured keys, **`doctrine`/`underlay` prose**, **`usage`/`geometry`/`color`** catalogue copy, adapter-only presentation, **out-of-repo editorial** surfaces — **before** **Top-Iron-Endurance Phase A** (or any entry) drives ad hoc schema fantasies.

### 2. Mapping philosophy

| Principle | Meaning |
| --------- | ------- |
| **Compatibility-first** | Prefer existing keys and ship behavior **before** inventing parallels. |
| **Additive evolution** | New columns only after **explicit** RFC + schema + validator + CMS + consumer gates—not because a template heading exists. |
| **Prose-preserving** | Rich content may stay **`doctrine`** / disciplined **`underlay`** rather than prematurely atomizing. |
| **Adapter-safe** | Card title, teaser lines, merges of tags, display status strings: **`toSigilDisplayItem`** and UI read paths — **without** rewriting storage. |
| **No ontology explosion** | Sections **I–J** (relations) are **not** a graph schema today. |
| **No forced flattening** | A–Q headings **do not** each require JSON fields (**SIGIL ENTITY TEMPLATE RFC §5** reinforced). |

### 3. Current stable codex fields

These are the **only** authoritative per-sigil storage slots in the shipped model (**no additions in this doc**):

`slug`, `name`, `doctrine`, `underlay`, `category`, `facets`, `terms`, `geometry`, `usage`, `color`, `image`, `status`, `visibility`, `title`, `meaning`, `layer`

### 4. Template section mapping table

| Template Section | Current Handling | Current Field(s) | Status | Notes |
| ---------------- | ---------------- | ---------------- | ------ | ----- |
| **A. Database Summary** | Partial structured + prose hybrid | `name`, `category`, `status`, `visibility`; fringe items in prose or omitted | Stable | **`slug`** carries URL identity. Spoiler/public level: **no** dedicated key—policy TBD (**future structured**); “doctrine/system” rollup can open **`doctrine`** or touch **`layer`** only if canon review accepts that gloss. Place of origin: see row **H** + **§7** (**not** **`underlay`** as a catch-all ontology dump). Website role: adapter/display wording only unless later **`display`** object. |
| **B. Short Website Explanation** | Display prose / adapter-safe | **`meaning`** (explicit short line); **`title`** / adapter fallbacks (`name`, `doctrinePreview` patterns) | Stable | Prefer **explicit** **`meaning`** over inventing previews from **`doctrine`** when editorial precision matters. Full “short explanation” **must not duplicate** **`doctrine`** verbatim without intent. |
| **C. CMS Summary** | Editorial / display only | *(out of canon JSON pack by default)*; optional future CMS-local notes—not codified here | Editorial | Keep **readable** summaries in **workflow** (**Decap hints**, README, canon sheet)—**not** a new required **`sigils`** key yet. |
| **D. Lore Explanation** | Doctrine prose | `doctrine` | Stable | Primary **authority** block for narrative/doctrinal length. Split sub-headings remain **Markdown/prose inside** **`doctrine`**, not new schema. |
| **E. Function Within Empyrria** | Prose-first operational label | **`usage`** (Classification); reinforcing sentences may live **`doctrine`** | Stable | “Function ontology” (**future structured**) is **out** for Phase **A**. |
| **F. One-Sentence Meaning** | Explicit short line when set | **`meaning`** | Stable | Adapter **already** prefers explicit **`meaning`** over heuristics (**DATA MODEL REALIGNMENT** lineage). |
| **G. Core Meaning** | Deeper interpretive prose | **`doctrine`** (primary); **`underlay`** sparingly (**§7**) | Stable | Guard against **duplicate** competing “truth” paragraphs—**§5**. |
| **H. Place of Origin** | Prose-only / `underlay`-adjacent | **`underlay`** *or* subsection of **`doctrine`** (disciplined choice per entry—**§7**) | Stable | **`underlay`** is **not** a general **origin/ontology bucket** (**§7**); keep origin copy **narrow** when placed there. |
| **I. Character Link** | Prose-only placeholder | **`underlay`** and/or delineated **`doctrine`** annex (prose) | Interim | **Future graph-aware** (**ENTITY MODEL ARCHITECTURE RFC**); no relation IDs yet. Avoid fake structure in **`terms`**. |
| **J. Relations** | Prose-only placeholder | Same as **§I**: **`underlay`** / **`doctrine`** annex | Interim | **Future graph-aware** — **controlled slugs/targets later** (**TOP-IRON-ENDURANCE** Phase **C**). Plain lists acceptable **temporarily as prose** inside allowed blocks—not as fabricated JSON arrays of free names without policy. |
| **K. Contrasts** | Prose-only disambiguation | **`doctrine`** and/or **`underlay`** | Stable | No **`contrasts`** key—intentionally. |
| **L. Visual Identity** | **`geometry`/`color` partial** + prose overflow | **`geometry`**, **`color`**, **`usage`** (as today’s Classification); overflow in prose only if it does not claim canonical equality with **`doctrine`** | Stable / partial | Today’s fields are **catalogue-style** copy, **not** full **visual doctrine system** (**TOP-IRON-ENDURANCE** Phase **D**). |
| **M. Icon-Version Guidelines** | Prose-only; future visual-governed | **`geometry`** / **`color`** text *or* prose inside **`underlay`** (pick one lane per entry) | Interim | Icon reduction rules **must not** pollute **`doctrine`** authority without explicit editorial decision. |
| **N. Website Display** | Adapter / display layer | **`slug`**, **`name`**, **`title`**, **`category`**, **`layer`**, **`meaning`**, merged tags via adapter; card copy patterns | Stable / partial | **Page type**, **display priority**, **hover text**: **not** in row—**adapter/CMS policy** or **future `display` object** only if RFC’d. |
| **O. Search Tags / Filter Words** | Discovery lists | **`terms`**, **`facets`** | Stable | Unique merge + Fuse keys unchanged; **do not** invent parallel tag arrays. |
| **P. Simple CMS Fields** | CMS / editorial layer | Governed by **`public/admin/config.yml`** today—**subset** of row | Stable | **Do not** mirror full A–Q into Decap (**SIGIL ENTITY TEMPLATE RFC §10**). |
| **Q. Internal Notes** | Editorial-only; non-public canon | **Out of `sigils.json`** (private sheet, issue tracker, internal doc) unless a future **`editorial`** object is explicitly RFC’d | Editorial | Never treat internal notes as **public** discoverability input. |

### 5. Structured-vs-prose boundary

**Intentional prose** is a **first-class outcome**: **§D**, **§G**, **§H–K**, and parts of **§L–M** may remain **long-form or medium-form text** inside **`doctrine`** / **`underlay`** even when the template **repeats** those headings across sigils. **Structure** is earned when **semantics stabilize** and **exactly one** authoring location is enforced (**SIGIL ENTITY TEMPLATE RFC** alignment).

### 6. Adapter responsibility

**`toSigilDisplayItem`** (and successor read models) may **synthesize** card titles, short lines, merged tags, and display status **strings** **without** changing **`sigils.json` shape**. Presentation experiments stay **downstream** of canonical fields—**adapter-first** (**DATA MODEL REALIGNMENT**).

### 7. Underlay handling note

**`underlay`** today: **supplementary atmosphere / contextual prose** on detail pages—**not** a universal **origin**, **relations**, or **CMS summary** column. Overloading it turns the row into a **junk drawer**; **§H–J** content placed in **`underlay`** should be **bounded** (short, narrative context) **or** folded into **`doctrine`** with clear internal structure—**per-entry editorial choice**, not automatic “origin bucket.”

### 8. Future migration note

When specific blocks **repeat identically** across many entries with **stable semantics** (e.g. origin triples, relation edges, icon rule packs), they **may** graduate into **nested objects** (**ENTITY MODEL ARCHITECTURE RFC §5**)—**only after** **STRUCTURED ENTITY MODEL DESIGN RFC** (or successor) + validation + CMS stages. **No** migration pressure from the template alone.

### 9. Anti-expansion rule

**Do not add fields** to **`sigils.json`** **merely because** a template section exists. Every new key needs **consumer + governance + editorial load** justification—**additive RFC** path.

### 10. Top-Iron-Endurance implication

**Top-Iron-Endurance** is evaluated **through this matrix** first: which A–Q cells **land in which existing keys** or **stay prose** or **stay out of pack**—**not** by expanding schema to match worksheet width. Any Phase **A** gap is a **wording/placement** problem until **Phase B+** RFCs unlock structure.

### 11. Readiness conclusion

**The current codex model is sufficient for Phase A ingestion** as defined in **TOP-IRON-ENDURANCE INGESTION RFC** (minimal compatible row, **no** new primitives, **no** graph). **Additional RFC work** is **not** required **before** Phase **A** **if** maintainers accept **prose containment** and **existing** additive keys (**`title`**, **`meaning`**, **`layer`**, Classification trio) as the Phase **A envelope**.

**Escape hatch:** If canon source **cannot** fit **without** duplicating contradictory “meaning” blocks or without **relations** as **machine data**, pause for **structured-entity RFC** (**Phase B proposal**)—**not** ad hoc **`sigils`** keys mid-stream.

### 12. Next recommended phase

**After** **this mapping plan** is **reviewed and locked:**

- **Layout pass (before CMS sprawl):** **TOP-IRON-ENDURANCE LAYOUT WIREFRAME PLAN** — **documented** (below); **lock** after review; reading cadence + collapse (**LAYOUT SPEC / RFC**).  
- **Implementation scope plan:** **TOP-IRON-ENDURANCE PHASE A IMPLEMENTATION PLAN** — **documented** (below); **lock** after review (**§3–§8** = approved/deferred surface + field usage).  
- **Optional (formal governance):** **TOP-IRON-ENDURANCE PHASE A IMPLEMENTATION RFC** — scope + risks + rollback if the repo wants a heavier gate.  
- **Then execution:** **`TOP-IRON-ENDURANCE PHASE A IMPLEMENTATION`** — Astro/detail + **`sigils.json`** + canon source + asset per **implementation plan** + **CANON INGESTION PIPELINE**.  
- **Content land:** **TOP-IRON-ENDURANCE PHASE A CONTENT INGESTION** — may coincide with execution milestone or follow immediately after UI skeleton.

**Do not** begin **code or pack land** until **layout wireframe** + **Phase A implementation plan** are **reviewed and locked** (**layout spec §9**; **implementation plan §11**).

**CMS:** Field groups follow **locked** layout sections—not the reverse (**TOP-IRON-ENDURANCE LAYOUT SPEC / RFC §2–§3, §8**).

---

## TOP-IRON-ENDURANCE LAYOUT SPEC / RFC

**Status:** **documentation / planning only** — defines the **future full sigil detail page** anatomy using **Top-Iron-Endurance** as **layout prototype** for **later** entries. Aligns **SIGIL ENTITY TEMPLATE RFC** + **SIGIL TEMPLATE → CURRENT MODEL MAPPING PLAN** toward **readable public UI** **before** admin surface area grows.

**Out of scope this pass:** **no** ingestion, **`sigils.json`**, schema, **`public/admin/config.yml`**, Astro/UI code, routes, discoverability, new JSON fields.

### 1. Purpose

**Top-Iron-Endurance** is not only an ingestion specimen—it is the **first target** for a **complete symbolic entry layout** on **`/sigils/[slug]`** (successor generations). Fixing this **structure** establishes the **repeatable ceremonial reading order** every sigil deserves. **Purpose:** agree on section order, hierarchy, and atmosphere **on paper** so later code and CMS additions **mirror** deliberate layout—not ad hoc spreadsheets.

### 2. Admin strategy note

Long term, **admin** should support uploading a sigil image and filling **structured + prose** Sigil Codex fields without fighting the archive.

**Ordering constraint:** **First** stabilize the **public detail layout** (what visitors read and scroll). **Then** grow Decap/CMS widgets **in groups that map 1:1 to visible sections**—so editors never populate fields that lack a **purpose** on the page. Fields **serve layout**; layout does **not** chase random data.

### 3. Layout-first principle

| Rule | Enforcement |
| ---- | ----------- |
| **Layout before CMS expansion** | No broad “add every worksheet column to admin” sprint before section design locks. |
| **Page structure before field explosion** | Section titles, flow, omission rules—and **mobile** pacing—lead; schema follows. |
| **Visible public entry before admin complexity** | Shippers approve **screens** (even wireframes) before expanding editorial burden. |

### 4. Proposed public page sections

Future **full** sigil detail page—reading order (**A→K**); **§5** trims what ships in **prototype** pass.

**A. Hero / Identity**

- **`image`** (plate)  
- **Canonical `name`** (stable catalogue identity—may pair with **`title`** per existing policy)  
- **Ceremonial `title`** (when set; adapter-aware)  
- **`category`** / **`status`** (muted—**§6**, not badge walls; **`visibility`** with **`status`** remains **discoverability** policy—**not** decorative marketing labels)  
- **Short **`meaning`** line (when present)  
- **`layer`** (muted archive gloss when present)

**B. Doctrine Block**

- **`doctrine`** as **authority** spine—may encompass **meaning / doctrine / symbolic function prose** unless split later (**mapping plan** containment rules).

**C. Lore Explanation**

- Extended narrative layered **below** Doctrine or as **explicit sub-block** once layout stable—still **doctrine-adjacent**, not a second competing “truth” document.

**D. Function Within Empyrria**

- What the sigil **marks** or **does**—maps today to **`usage`** + supporting **`doctrine`** sentences; future dedicated block if structure splits.

**E. Origin Block**

- **Place** + **explanation**—today often **`underlay`** or disciplined **`doctrine`** subsection (**mapping plan §7**); dedicated layout region when content recurs.

**F. Character Link**

- Character(s) + resonance—**prose-first** now; **graph later** (**ENTITY MODEL ARCHITECTURE RFC**).

**G. Relations Block**

- Connected sigils / systems / places—**prose links** in prototype; **structured slugs** later (**TOP-IRON-ENDURANCE INGESTION RFC** Phase **C**).

**H. Contrast Block**

- What the sigil **is not**—disambiguation prose; **no** dedicated JSON key today.

**I. Visual Identity Block**

- Colors, shape language, icon rules, constraints—**distinct** from Doctrine authority (**visual doctrine** lane); today partially **`geometry`**, **`color`**, **`usage`** in Classification; **expanded** art-direction only when **Phase D**-class governance exists.

**J. Search / Discovery Metadata**

- **`terms` / `facets`**—if surfaced on detail at all: **subtle** (footer, muted list) or **hidden** from main reading column—**never** a primary “tag cloud” above Doctrine.

**K. Editorial / Internal Notes**

- **Not public**—out of pack or future **`editorial`** object only if RFC’d.

### 5. First layout prototype boundary (Top-Iron-Endurance)

**Ship in early prototype** (structure + hierarchy, still **no** live ingestion in **this** RFC):

- **A — Hero / Identity** (full scaffold; image + metadata lines restrained).  
- **B — Doctrine Block** (primary gold column; unchanged ceremonial role).  
- **D — Function** as **Classification / usage** continuation *or* clear subheading under Doctrine until split is warranted.  
- **I — Visual Identity** at **Classification parity** (existing **`geometry` / `color` / `usage`** presentation language)—**not** full design-bible expansion yet.

**Defer as dedicated layout regions** until copy + policy exist (empty sections **omit entirely**—**no** placeholders):

- **C — Lore Explanation** as separate **visual** block *if* redundant with B for v1—else introduce as **second scroll milestone** with clear typographic separation.  
- **E — Origin** (unless already lean copy approved for **`underlay`** slot in mapping).  
- **F — Character Link**  
- **G — Relations** (optional **short** prose appendix if needed; **no** link farm).  
- **H — Contrast**  
- **I — expanded** (icon grids, multi-column specs, “rules engine” copy).  
- **J — on-page discovery** strip (prefer **browse/search** UX over noisy detail taxonomy).

**K** — never prototype on public templates.

### 6. Atmosphere rules

Maintain **DISPLAY METADATA UI RFC** lineage and codex grammar:

- **Restrained ceremonial archive** — museum tone, calm vertical rhythm.  
- **Doctrine-first** — **`doctrine`** remains **apex** narrative; Hero does **not** “explain the whole canon” above it.  
- **No wiki clutter** — collapsible junk drawers, trivia rails, lore dumps discouraged.  
- **No game-card stats** — no numeric RPG stats, tier badges, rarity chrome.  
- **No huge badge walls** — **category/status/layer** = **muted** metadata, **not** chip stacks.  
- **No admin-looking layout** — no raw field labels (**“Slug: …”**) as UX; prose headings only.  
- **No over-explaining above Doctrine** — short Hero lines **invite** reading; Doctrine **grounds** authority.

### 7. Mobile / readability note

The **future full** layout must **budget scroll**: section breaks (`mt-*` discipline), typography scale, optional **anchors** later—not an **infinite chaotic stack**. If **C–H** proliferate, consider **tiered disclosure** (**future RFC**) rather than simultaneous walls of text (**layout wireframe gate** validates this).

### 8. Future CMS implication

When layout is **accepted**:

- CMS fields migrate **by section cohort** (**A**, then **B** + allied prose, then **I** expansion, …)—mirroring **`§4`** order.  
- **Do not** expose the **entire** worksheet (**SIGIL ENTITY TEMPLATE RFC**) in Decap before **each** cohort has a **determinate** read path (**SIGIL ENTITY TEMPLATE RFC §10**, **MAPPING PLAN §12** restraint).

### 9. Next recommended phase

1. **`TOP-IRON-ENDURANCE LAYOUT WIREFRAME PLAN`** — **documented**; **lock** after review.  
2. **`TOP-IRON-ENDURANCE PHASE A IMPLEMENTATION PLAN`** — **documented** (below); **lock** after review—minimal Phase **A** scope + field usage + rollback.  
3. **`TOP-IRON-ENDURANCE PHASE A IMPLEMENTATION`** — **execution** (**UI + data + canon**) **only after** (1)–(2) **lock**.  
4. **`TOP-IRON-ENDURANCE PHASE A CONTENT INGESTION`** — pack land per **CANON INGESTION PIPELINE** (may align with step 3).

**Gate:** **No** bulk CMS redesign **before** wireframe + **Phase A implementation plan** **lock**.

---

## TOP-IRON-ENDURANCE LAYOUT WIREFRAME PLAN

**Status:** **planning / wireframe documentation only** — **no** Astro/UI implementation, **no** final styling system, **no** `sigils.json`, schema, CMS, routes, discoverability, field additions, or **Top-Iron-Endurance** ingestion.

**Depends on:** **TOP-IRON-ENDURANCE LAYOUT SPEC / RFC** (**documented**); **SIGIL TEMPLATE → CURRENT MODEL MAPPING PLAN** (row mapping rules remain authoritative for *where* copy lives until nested architecture).

**Frozen hierarchy decisions (this pass):** **image first**; **meaning before doctrine**; **doctrine before lore**; **doctrine/system block = sacred core**; **relations collapsed / subtle**; **medium scroll** target; **discovery metadata subtle/minimal**.

### 1. Purpose

The **LAYOUT SPEC / RFC** names **what** sections exist; **this plan** names **how the eye and mind move** through a **future full** sigil detail page—**cadence**, **weight**, **collapse**, and **mobile** behavior—**before** any implementation or large-scale CMS expansion. **Top-Iron-Endurance** is the **reference mental model** for wireframe review.

### 2. Core reading philosophy

| Idea | Application |
| ---- | ----------- |
| **Symbolic first impression** | **`image`** + identity lines establish **gravitas** before long text. |
| **Doctrine-centered flow** | After the short **lead** (**`meaning`**), the reader **lands** in **`doctrine`** / system core—**apex** of meaning, not a sidebar. |
| **Ceremonial archive pacing** | Quiet vertical rhythm; **no** dashboard or wiki velocity. |
| **Layered disclosure** | Primary story **open**; extended context **available** without **simultaneous** walls of text. |
| **Medium-depth reading** | Target **one sitting** of focused reading—not a novel, not a tweet. |
| **Restrained information density** | Each band carries **one job**; metadata stays **lighter** than doctrine. |

### 3. Primary reading sequence

**A. Hero / Identity Layer** *(first screenful priority)*  

- **`image`** (plate, top or upper fold—**first** among content, per frozen decisions)  
- **Canonical `name`**  
- **Ceremonial `title`** (when set)  
- **`category` / `status`** (muted—**not** badge parade)  
- **Short `meaning`** *(before Doctrine block—bridge into core)*  
- **`layer`** (archive gloss, quiet)

**B. Doctrine / System Core** *(sacred core)*  

- **`doctrine`** body—**canonical interpretive center**  
- **System / function summary** *inside or tightly bound* to this block (today: disciplined prose + optional **`usage`** adjacency per **MAPPING PLAN**—**not** a competing “second doctrine”)

**C. Lore Layer**  

- **Expanded narrative / lore explanation**—**secondary** to **B**; **never** supplants doctrine authority; **doctrine before lore** in scroll order and **typographic** weight.

**D. Extended Context Layers** *(ordered for wireframe; implementation may use collapse—**§5**)*  

- **Origin**  
- **Character resonance**  
- **Contrasts**  
- **Visual identity** (Classification depth first; **expandable** art-direction **later**—**§5**)  
- **Relations** *(**collapsed / subtle** by default—**§5**)*  
- **Search / discovery metadata** *(minimal / off-primary column—**§5**, **§8**)*

### 4. Section hierarchy weights

| Weight | Contents |
| ------ | -------- |
| **PRIMARY** | **`image`**; **`name`**; **short `meaning`**; **`doctrine`** + **system/function** center (interpretive core bound to doctrine block) |
| **SECONDARY** | **Lore** (expanded narrative); **function** (explicit sub-band if split from B); **origin** |
| **TERTIARY** | **Relations**; **contrasts**; **visual identity** (extended); **search / discovery** surfacing on page |
| **EDITORIAL ONLY** | **Internal notes**—**never** public wireframe surface |

### 5. Collapse behavior

- **Relations** — **collapsed by default** (summary line, “related” disclosure, or foot-tray—**implementation TBD**); **never** a link farm above **C–D** layers.  
- **Search / discovery** — **minimized or hidden** on detail; support **navigation** elsewhere (**§8**).  
- **Visual doctrine** — **Classification-level** open; **full** guidelines **expandable** when Phase **D**-class content warrants—**no** icon-law walls in primary flow **v1**.  
- **Lore** — **no giant uninterrupted lore wall**: breaks, subheads, or **bounded height** patterns encouraged; lore **follows** doctrine, **does not** replace pacing discipline.

### 6. Visual pacing

- **Breathing room** between **A→B**, **B→C**, **C→D** bands—**explicit** sectional `margin` discipline in implementation later.  
- **Restrained typography** — doctrine **prominent** (strong but not gimmicky); metadata **lighter** scale/color.  
- **Doctrine visually sacred** — clearest readable column, **apex** hierarchy.  
- **Metadata visually lighter** — category, layer, tags **do not shout**.  
- **No dashboard density** — no grids of labels masquerading as content.  
- **No game-wiki energy** — no statfeel, rarity, or collectible chrome.

### 7. Mobile flow

- **`image`** + **short `meaning`** remain **high priority** above the fold **where feasible**.  
- **Doctrine** remains **reachable early** — user should not scroll through **relations** or **tags** before core text.  
- **Secondary systems** (**D** layers)—consider **accordion / collapsed** defaults on narrow viewports **before** desktop.  
- **Avoid infinite-scroll fatigue** — **medium scroll** budget; tertiary blocks **defer** behind collapse.

### 8. Discovery philosophy

Discovery / search metadata should **support browse and search UX**, **not dominate** the reading column: **subtle/minimal**, **no visible tag spam**, **no tag cloud ego** above **B**. Prefer **muted footer** or **hidden** entirely on detail if browse already exposes **`terms`** / **`facets`**.

### 9. Atmosphere protection

Maintain **DISPLAY METADATA UI RFC** + **LAYOUT SPEC / RFC** lineage:

- **Ceremonial archive** — calm, deliberate.  
- **Symbolic gravity** — image + doctrine carry **weight**; chrome does **not**.  
- **Controlled density** — layered disclosure defeats clutter.  
- **Quiet presentation** — transitions and decoration **minimal**.  
- **No excessive UI chrome** — no sticky widget stacks, no promo rails.  
- **No stat-card feeling** — no RPG framing.

### 10. Future CMS implication

Expose admin in **cohorts mapped to visible page stacks** (**not all at once**):

| CMS cohort | Serves wireframe band |
| ---------- | --------------------- |
| **Identity** | **A** (Hero) |
| **Doctrine** | **B** (+ bound system/function copy) |
| **Lore** | **C** |
| **Relations** | **G** *(tertiary, collapsed UX)* |
| **Visual identity** | **I** *(Classification first; expand later)* |
| **Discovery** | **J** *(often off-page or minimal)* |
| **Editorial** | **K** *(non-public)* |

**§D** subsets (**origin**, **character**, **contrasts**) may batch as **Extended context** rollout waves—still **stage**, never Big Bang.

### 11. Wireframe readiness conclusion

**Yes** — paired with **LAYOUT SPEC / RFC** section map, **this wireframe plan** yields a **stable reading structure** sufficient to lock **TOP-IRON-ENDURANCE PHASE A IMPLEMENTATION PLAN** (**documented** below): implementers can reason about **order**, **collapse**, **typographic weight**, and **mobile** degradation **without** inventing layout in the same pass as **content** or **CMS** sprawl.

**Condition:** Treat **this plan** + **LAYOUT SPEC** as **reviewed and locked** in maintainer process before **Phase A implementation plan** lock—if layout debate reopens, **pause** until wireframe revision lands.

### 12. Next recommended phase

**`TOP-IRON-ENDURANCE PHASE A IMPLEMENTATION PLAN`** — **documented** (below); **lock** after review (**approved vs deferred** sections, field map, rollback). **Then** **`TOP-IRON-ENDURANCE PHASE A IMPLEMENTATION`** (execution), then **content/pack** land per **implementation plan §12**.

---

## TOP-IRON-ENDURANCE PHASE A IMPLEMENTATION PLAN

**Status:** **Locked** — **planning baseline** executed in **`TOP-IRON-ENDURANCE PHASE A IMPLEMENTATION`** (**below**).

**Historical scope (frozen):** The **minimal** build + data boundary for the **first full-entry prototype** (**Top-Iron-Endurance**) **without** destabilizing architecture. **Wireframe cadence (stable):** **Image → Meaning → Doctrine / System Core → Lore → Extended Context** (with collapse rules from **WIREFRAME PLAN**).

**Depends on (all documented):** **ENTITY MODEL ARCHITECTURE RFC** (**locked**); **TOP-IRON-ENDURANCE INGESTION RFC**; **SIGIL ENTITY TEMPLATE RFC** (**locked**); **SIGIL TEMPLATE → CURRENT MODEL MAPPING PLAN**; **TOP-IRON-ENDURANCE LAYOUT SPEC / RFC**; **TOP-IRON-ENDURANCE LAYOUT WIREFRAME PLAN**.

**RFC-era out of scope (pre-execution):** the planning pass did **not** itself edit **`sigils.json`**, schema, CMS, or routes — execution is recorded under **TOP-IRON-ENDURANCE PHASE A IMPLEMENTATION §G**.

### 1. Purpose

Define the **exact Phase A envelope**: what **appears** on the future full sigil detail page, what **data keys** may power it, what **stays deferred**, and how to **roll back**—so **implementation** and **ingestion** do not expand into **Phase B–D** by accident.

### 2. Phase A implementation philosophy

| Principle | Practice |
| --------- | -------- |
| **Compatibility-first** | Use **current** row keys + **`sigilDisplay`** patterns; **no** speculative schema. |
| **Layout-aware** | Ship order matches **WIREFRAME**: identity → **meaning** → **doctrine** → **limited lore** → extended (collapsed). |
| **Prose-preserving** | **`doctrine`** remains primary storage for authority + much “lore”; **no** aggressive atomization. |
| **Doctrine-first** | **Sacred core** block unchanged in **authority**; Hero **leads**, does **not** replace doctrine. |
| **Adapter-safe** | Presentation may use **`toSigilDisplayItem`** / existing conventions; **discoverability** rules untouched. |
| **Additive-only** | **No** new JSON fields in Phase **A** unless a **separate** additive RFC lands—**this plan assumes none**. |
| **Rollback-friendly** | Feature flag / revert path: template partials or section gates removable **without** breaking other sigils. |
| **Low-risk** | **One** prototype slug path first; browse/search contracts **unchanged** in spirit. |

### 3. Approved Phase A visible sections

**WILL** appear (when copy exists—**empty sections omit**, **no** placeholders):

- **Hero / Identity** — **`image`**, **`name`**, **`title`**, muted **`category`/`status`**, **`layer`**, identity metadata per **LAYOUT SPEC**.  
- **Meaning** — short **`meaning`** line **before** doctrine block (**WIREFRAME** / **DISPLAY METADATA UI RFC**).  
- **Doctrine / System Core** — full **`doctrine`**; **function/system** summary **bound** to this band (prose inside **`doctrine`** and/or **`usage`** adjacency per **MAPPING PLAN**).  
- **Limited Lore section** — **secondary** narrative: prose **continuation** or clearly subordinate block **below** doctrine (**limited** visible density—**§6**).  
- **Basic Function strip** — **`usage`** (Classification-style), not a separate “systems engine.”  
- **Minimal Visual Identity block** — **`geometry`**, **`color`** (and linked **`usage`** prose) **only** at **lightweight descriptive** depth—**§8**.  
- **Collapsed Relations preview** — **optional**, **minimal** (one line + disclosure / foot appendix)—**§7**; **not** link farms.

### 4. Deferred sections (out of Phase A)

**STAY OUT** until later RFC / phases:

- **Full graph-aware relations**  
- **Character resonance systems** (dedicated blocks, graph)  
- **Structured origin architecture** (dedicated **Origin** object / heavy layout)  
- **Expanded visual doctrine systems** (icon grids, multi-page art direction)  
- **Display priority systems**  
- **Spoiler / public-safe systems** (schema-driven)  
- **Advanced discovery systems** (on-page tag clouds, filter UX on detail)  
- **Editorial / internal systems** on public pages  

### 5. Phase A data usage (current fields only)

Expected **existing** keys to power Phase **A** (**no** new fields):

| Role | Field(s) |
| ---- | -------- |
| Identity / URL | **`slug`**, **`name`**, optional **`title`** |
| Plate | **`image`** |
| Taxonomy / governance | **`category`**, **`facets`**, **`status`**, **`visibility`** |
| Doctrine + bound system copy | **`doctrine`** |
| Short lead | **`meaning`** |
| Archive gloss | **`layer`** |
| Function strip | **`usage`** |
| Minimal visual | **`geometry`**, **`color`** |
| Discovery (subtle; often off-primary) | **`terms`**, **`facets`** |
| Optional extended prose | **`underlay`** — **only** if needed for **lore** or **relations** prose **without** new keys (**MAPPING PLAN §7** cautions) |

**Clarify:** **Prose remains primary**; Phase **A** does **not** justify **field explosion**. Relations / character / origin **richness** stays **inside** allowed prose surfaces until **Phase B+**.

### 6. Lore handling rule

- **Secondary** to **`doctrine`** always—**doctrine before lore** in scroll and **hierarchy**.  
- **Partially prose-preserved** inside **`doctrine`** boundary or a **single** clearly marked **Lore** sub-block **below** core doctrine—**not** a parallel “second canon.”  
- **Intentionally limited density** in Phase **A**—**no** full wiki article mode; **medium scroll** target (**WIREFRAME**).

### 7. Relations handling rule

- **Prose-first** only (inside **`underlay`** or annex of **`doctrine`** per **MAPPING PLAN**).  
- **Optionally** **collapsed / one-line preview** + expand—**no** graph, **no** heavy nav, **no** slug graph **in Phase A**.  
- **Not** a primary reading stop above **Lore**.

### 8. Visual identity handling rule

- **Lightweight descriptive layer** only—existing **Classification** presentation.  
- **Not** a full **symbolic visual ontology**; **no** complex rendering systems (grids, interactive specs) in Phase **A**.

### 9. CMS implication

Phase **A** execution should keep **current lightweight Decap** surface: **no** massive new widget grid. Editors use **existing** fields + **prose discipline**; **future** cohort CMS expansion (**LAYOUT SPEC §8**, **WIREFRAME §10**) **after** public layout **proven** on **Top-Iron-Endurance**.

### 10. Rollback strategy

Phase **A** work should be **reducible** without breaking:

- **Other sigil detail pages** (default layout path or feature scope **Top-Iron-first** if needed)  
- **`sigilDisplay` / adapter** contracts for existing entries  
- **`sigils.schema.json`** + **`validate-content`** compatibility  
- **CMS** — revert config only if Phase **A** touched it (**this plan**: **avoid** CMS churn in Phase **A**)

Rollback = remove **Top-Iron-Endurance** row + asset + optional template-only section wrappers; **no** Big Bang.

### 11. Readiness conclusion

**Yes** — with **template**, **mapping**, **layout spec**, and **wireframe** documented, the codex is **ready** to **execute** **Phase A implementation** **after** **this implementation plan** is **reviewed and locked**. **No further planning RFC** is **required** for Phase **A** unless maintainers reopen **layout** or **escape** the **MAPPING PLAN** structured-entity hatch.

### 12. Next recommended phase

**`TOP-IRON-ENDURANCE PHASE A IMPLEMENTATION`** — actual work: **Astro** detail layout for **full-entry prototype** (sections **§3**), **`sigils.json`** row + **`public/media/sigils/`** asset + canon source update per **CANON INGESTION PIPELINE**, **`npm run build`** + **`npx astro check`**, discoverability unchanged in **policy**. **Only after** **this implementation plan** is **reviewed and locked**.

**TOP-IRON-ENDURANCE PHASE A CONTENT INGESTION** — treat as the **pack/canon land** milestone **inside or immediately following** that implementation effort (wording optional; pipeline unchanged).

---

## TOP-IRON-ENDURANCE PHASE A IMPLEMENTATION

### A. Pre-implementation record (intent)

**Scope:** First **executable** Phase **A** prototype for **`/sigils/top-iron-endurance`** — **minimal** boundary per **TOP-IRON-ENDURANCE PHASE A IMPLEMENTATION PLAN** (**locked**).

**Architectural posture:** **compatibility-first**, **doctrine-first**, **prose-preserving**, **additive-only**, **rollback-friendly**. **No** new architecture systems (**no** graph, ontology objects, spoiler engines, nested JSON, CMS expansion, **`getPubliclyDiscoverableSigils`** edits, or **`slug`** route changes).

**Approved visible surfaces (planned):**

- Hero / identity (`image`, `name`, ceremonial **`title`**, facets via **`SigilMeta`**)  
- **`meaning`** + **`layer`** before **Doctrine** (adapter-backed)  
- **Doctrine** apex block  
- **Lore context** subsection ( **`underlay`** split, prototype slug only — **below**)  
- **Function** strip (`**usage`**; removed duplicate **Usage** row from Classification)  
- **Classification** (geometry / color / terms / category) — tertiary **terms** gated for prototype readability  
- **Relations preview** (**`<details>`**, prose-only)

**Rollback boundary:** Delete **`top-iron-endurance`** row + **`public/media/sigils/top-iron-endurance.svg`** + revert **`[slug].astro`** / **`sigilIdentity.ts`**; restore **`sigils`** **`version`**; other sigils return to prior layout pacing.

---

### G. Post-implementation lock (result)

**Status:** **LOCKED** (**2026-05-11**) — Phase **A** shipped without expanding **schema**, **CMS**, or **discoverability** contracts.

#### Implemented surfaces

| Area | Result |
| ---- | ------ |
| **Data** | New public row **`slug`**: **`top-iron-endurance`**; **`sigils.json`** **`version`** **5** — fields only from **MAPPING PLAN** (**`slug`**, **`name`**, **`image`**, **`category`**, **`facets`**, **`doctrine`**, **`title`**, **`meaning`**, **`layer`**, **`terms`**, **`status`**, **`visibility`**, **`usage`**, **`geometry`**, **`color`**, **`underlay`** lore/relations prose split). |
| **Asset** | **`public/media/sigils/top-iron-endurance.svg`** — archival neutral strokes; stable path mirrors existing **`/media/sigils/`** convention. |
| **Detail (`[slug].astro`)** | **Global** refinement: **`meaning`/`layer`** sit **above** provisional notice and **before** bordered **Doctrine**; **Doctrine** remains typographic apex; **`usage`** promoted to **Function within Empyrria** section (**not duplicated** inside Classification **`dl`**); Classification keeps geometry / color / terms / category. **Prototype-only:** **`underlay`** text split on **`\\n---\\n`** → **Lore context** `<section>` + **Relations preview** `<details>`; **`terms`** moved to compact **Terms (compact)** `<details>` on **`top-iron-endurance`** only (Fuse/browse unchanged — data present). **`sigilTitleColorClass`** tint for **`top-iron-endurance`**. Legacy **Underlay** UI unchanged for other entries. |

#### Deferred systems (confirmed)

Unchanged vs **IMPLEMENTATION PLAN §4**: graph relations, character resonance panels, structured origin blobs, expanded visual ontology, spoiler/public flags, editorial-on-page, CMS field explosion.

#### Validation

| Command | Result |
| ------- | ------ |
| **`npm run build`** | **PASS** (**`validate:content`** + **12** pages including **`/sigils/top-iron-endurance`**) |
| **`npx astro check`** | **PASS** (0 errors / warnings / hints) |

**Smoke targets:** **`/sigils/top-iron-endurance`**, **`/sigils`** (browse), **`/sigils/soulflame-sigil`**, **`/sigils/iah-vea`** — doctrine prominence + no route regressions (`**`getStaticPaths`**` derives from **`getPubliclyDiscoverableSigils()`** unchanged).

#### Rollback notes

Remove prototype row/asset; revert **`src/pages/sigils/[slug].astro`** and **`src/lib/sigilIdentity.ts`**; set **`version`** back if desired. **Underlay splitter** convention is **explicit** to **`top-iron-endurance`** — safe for other sigils.

#### Architectural observations

- **Layout-first payoff:** Single prototype slug owns **lore/relations **`underlay`** split** until a future RFC promotes a schema field.  
- **Ceremonial continuity:** Existing entries gain **cleaner doctrine lead** positioning and deduplicated **usage** strip without lore sections.  
- **Adapter:** **`toSigilDisplayItem`** usage unchanged (**compatibility-first**).

#### Next recommended phase

**TOP-IRON-ENDURANCE PHASE B PREP — STRUCTURED CONTEXT RFC** (**or** **STRUCTURED ENTITY MODEL DESIGN RFC**) when **origin**/expanded relations justify **Additive** milestones — **or** generalize Phase **A** detail layout patterns to remaining sigils **without** ingestion pressure.

---

## PHASE A ATMOSPHERE + RHYTHM REFINEMENT PASS

### A. Pre-implementation record (intent)

**Purpose:** After **TOP-IRON-ENDURANCE PHASE A IMPLEMENTATION** shipped, calm **visual cadence** on **`/sigils/[slug]`** so the page reads closer to a **ceremonial archive document** and less like a **metadata / SaaS** surface—**without** touching architecture, JSON, schema, CMS, discoverability, or layout *structure* (section order unchanged).

**Refinement-only scope:** Typography weight, **spacing rhythm**, **terms** presentation, **Classification** header hierarchy, **disclosure** chrome—**small** Tailwind-class edits only.

**Explicitly out of scope:** New systems, fields, graph, ontology, route rules, card/dashboard UI, doctrine copy edits, **`sigils.json`** changes.

**Cadence / atmosphere focus:** Softer section **transitions**, **Doctrine** apex preserved, lower sections read as **marginalia / registry** not competing hero blocks.

---

### G. Post-implementation lock (result)

**Status:** **LOCKED** — atmosphere pass applied (**2026-05-11**).

#### Refinement changes

| Area | Change |
| ---- | ------ |
| **Terms (Classification)** | **Inline codex line** — `term1 · term2` in body text (`<p>`); **no** pill/chip/flex tag grid. |
| **Terms (prototype disclosure)** | Renamed summary **Indexing terms**; same **inline ·** treatment; **removed** bordered “card” wrapper. |
| **Facets (hero)** | **`SigilMeta`** **`variant="archival"`** on **detail only** — uppercase **·**-separated line; **cards** still use chip **`SigilMeta`** default. |
| **Classification heading** | Down-weighted to **caption-scale** caps (aligns with **Lore** / **Function**), **not** second `text-lg` dashboard header. |
| **Classification `dl`** | Tighter **dt/dd** tracking; **line-height** ~1.72 for analytical prose. |
| **Rhythm** | Doctrine separator **slightly taller** entry (`mt-*` fractional); lore/function **lighter** top borders (`/32`); **extra breath** before Classification (`Function → Classification` gap nudged). |
| **Relations disclosure** | **Left rule** engraving cue; **no** rounded tinted box. |

#### Atmosphere observations

- **Doctrine-first** unchanged: apex **Doctrine** `h2` + gold body **unchanged** in hierarchy intent.  
- **Quieter tertiary:** Classification reads as **archival analysis**, not RPG stat blocks.  
- **Continuous reading:** Reduced “UI panel” interruptions between bands.

#### Validation

| Command | Result |
| ------- | ------ |
| **`npm run build`** | **PASS** |
| **`npx astro check`** | **PASS** |

#### Rollback

Revert **`SigilMeta.astro`** + **`sigils/[slug].astro`** atmosphere commit; **`SigilCard`** unaffected.

#### Next recommended phase

**Phase B structured-context planning** (**when** editorially ready) — **or** optional **browse-card** tonal alignment later (**separate micro-pass**, not mixed with doctrine surface).

---

## DETAIL PAGE ATMOSPHERE CONSISTENCY AUDIT

**Status:** **documentation / audit only** — **no** UI, **`sigils.json`**, schema, CMS, Phase **B**, discoverability, or component refactors. **Depends on:** **TOP-IRON-ENDURANCE PHASE A IMPLEMENTATION** (**locked**) + **PHASE A ATMOSPHERE + RHYTHM REFINEMENT PASS** (**locked**).

### 1. Purpose

Confirm whether the **single-template** **`/sigils/[slug]`** experience reads as **one ceremonial archive** across all **six** publicly discoverable sigils—or whether **content shape** differences (optional fields, image presence, lore blocks) unintentionally fracture tone before any **architecture / CMS / Phase B** expansion.

### 2. Pages audited

Live detail routes (**public** **`provisional` + `marked_public`** convention):

| Route | Notes (data snapshot affecting layout) |
| ----- | -------------------------------------- |
| **`/sigils/top-iron-endurance`** | **Full-entry prototype**: **`title`**, **`meaning`**, **`layer`**, **`image`**, **`usage`**, lore + relations via **`underlay`** **`\n---\n`** split; **`terms`** in Classification **hidden** → **Indexing terms** **`<details>`** (prototype-only gate). |
| **`/sigils/iah-vea`** | Enriched pilots: **`title`**, **`meaning`**, **`layer`**, **`image`**, **`usage`**; empty **`underlay`**. |
| **`/sigils/soulflame-sigil`** | Same optional display trio + **`image`**, **`usage`**; empty **`underlay`**. |
| **`/sigils/top-clear-mind`** | **No** separate **`title`**, **`meaning`**, **`layer`**; **`image`**, **`usage`**. |
| **`/sigils/top-solid-anchor-sha-karys`** | **No** **`image`**; **no** optional display trio; **`usage`**, full Classification. |
| **`/sigils/zenga-zellia`** | **No** optional display trio; **`image`**, **`usage`**. |

### 3. Audit criteria (findings)

| Criterion | Assessment |
| --------- | ---------- |
| **Doctrine-first feeling** | **Strong / shared.** All entries use the same **Doctrine** band (amber heading + **`text-doctrine`** body) as **apex** narrative. **Meaning**/lead copy never replaces doctrine authority. |
| **Meaning placement** | **Consistent mechanically; variable by data.** **`meaning`** + **`layer`** render **above** provisional and **below** archival facets **only when** populated (**Soulflame**, **IAH-VEA**, **Top-Iron-Endurance**). Other entries skip that band—reads **quieter**, not broken. |
| **Title / gloss behavior** | **Consistent.** Ceremonial line shows **only** when **`title`** ≠ trimmed **`name`**—same rule for all (**DISPLAY METADATA** lineage). |
| **Spacing / rhythm** | **Shared stylesheet** post **ATMOSPHERE + RHYTHM** pass: fractional **`mt`/borders**, caption-weight **Classification** header, **Function** strip before **Classification**. **Perceived** scroll length varies with **content** (Top-Iron longest). |
| **Classification weight** | **Aligned globally.** **Geometry / Color / Terms / Category** use the same **dt/dd** grammar; **Terms** are **inline ·** prose (not chips) for non-prototype rows. **Top-Iron** omits **Terms** from **`dl`** by design (tertiary disclosure). |
| **Underlay behavior** | **Bifurcated by intent, not leaking.** **Legacy Underlay** cyan module **only** when **`underlay`** non-empty **and** not consumed by prototype split. **Only Top-Iron** uses split → **Lore context** + **Relations preview**; others **empty** **`underlay`** → **no** Underlay UI—**expected**. |
| **Terms rendering** | **Two modes, explicit gate:** (1) **Inline ·** in **Classification** for five sigils; (2) **Top-Iron** → **Indexing terms** disclosure + **no** **`dl`** row—**slug-scoped** (`slug === top-iron-endurance`), **not** a global leak. |
| **Page length** | **Top-Iron** materially longer (lore + relations + disclosure). Others **medium** to **short**—appropriate for lean doctrine rows; **not** a template fault. |
| **Mobile readability** | **Unchanged architecture** (`max-w-2xl`, single column, `<details>` for tertiary). No new horizontal chrome; **Classification** remains single-column **`dl`**. |
| **Atmosphere consistency** | **High** on **chrome** (archival facets line, quiet Classification, de-card disclosures, doctrine gravity). **Variance** is **editorial completeness** of optional fields and **Top-Iron**-only sections—**acceptable** within “archive with selective enrichment.” |

### 4. Expected result (against audit questions)

| Question | Conclusion |
| -------- | ---------- |
| **Current system stable?** | **Yes** — one template, explicit prototype gates, **no** competing layout forks. |
| **Top-Iron too different?** | **Intentionally richer** (content + prototype sections); **skin** matches the house style. Difference = **band count / scroll**, **not** “another app UI.” |
| **Older entries need light alignment?** | **Optional editorial only** (e.g. add **`meaning`/`layer`**) if tonal **parity** is desired—not **required** for stability. **`Top-Solid-Anchor`** **`image`** absence is content/asset choice—archive-like, not erroneous. |
| **Browse / showcase untouched?** | **Confirmed** — audit scope **detail** **`[slug]`** + **`SigilMeta`** **`archival`** only on detail; **`SigilCard`** chip facets **unchanged**. |
| **Phase B should wait?** | **Yes** — archive **reads unified enough** under current rules; Phase **B** is for **structured context / schema**, **not** to fix baseline atmosphere drift. |

### 5. Risk flags

| Risk | Observation |
| ---- | ----------- |
| **Dashboard feel** | **Low** after refinement—caption **Classification**, inline **Terms**, archival hero line; **Doctrine** dominates. |
| **Wiki clutter** | **Low** globally; **Top-Iron** most bands—still **tiered** (lore secondary, relations **collapsed**). |
| **Inconsistent metadata weight** | **Present but explainable**: optional **`meaning`/layer`** missing on three sigils ⇒ **different** hero density—** editorial**, not accidental CSS drift. |
| **Too much empty space** | **Possible** on rows **without** image / without meaning block (**Top-Solid-Anchor**)—reads **minimal archive**, acceptable; monitor if editorial finds it **too austere**. |
| **Too much density** | **Top-Iron** only near higher density—mitigated by **disclosures** and typographic restraint. |
| **Hidden prototype behavior leaking globally** | **Not observed.** **`FULL_ENTRY_UNDERLAY_SPLIT`**, lore section, relations block, **`showTermsOnPage`** negation tied to **`slug === 'top-iron-endurance'`** only. **Archival** **`SigilMeta`** is **intentional global** detail polish—**not** prototype-specific. |

### 6. Recommendation

**B. Micro-polish only** (and **optional**, **content-driven**): The **code path** is **stable** and **cohesive**. Any further alignment is **selective**—e.g. editorial **`title`/`meaning`/`layer`** on additional rows for **hero rhythm parity**, or a future **asset** for **Top-Solid-Anchor**—**not** a layout overhaul.

**Not** **D** (Phase **B** begin on atmosphere grounds alone) or **E** (another refinement pass **required**)—**C** (older entries **need** code alignment) **does not** apply; **A** alone is slightly under-stated because **B** captures **optional editorial micro-alignment** without obligation.

**Next step:** Hold **Phase B** until **structured-context** need is **canon + policy**-clear; keep **browse/showcase** out of detail-atmosphere scope unless a **separate** micro-pass is chartered.

---

## CONTROLLED EDITORIAL ENRICHMENT GUIDELINES RFC

**Status:** **LOCKED** — **editorial governance only** (operational discipline for selective passes); **no** schema, CMS, UI, new systems, Phase **B**, ontology expansion, discoverability rules, or bulk **`sigils.json`** edits in-RFC. **Depends on:** stable **layout cadence** (**TOP-IRON-ENDURANCE PHASE A IMPLEMENTATION** + **PHASE A ATMOSPHERE + RHYTHM REFINEMENT PASS**, both **locked**); **DETAIL PAGE ATMOSPHERE CONSISTENCY AUDIT** (cohesive read confirmed). **Governed executions:** **SELECTIVE SIGIL ENRICHMENT PASS — IAH-VEA** (**locked**); **SELECTIVE SIGIL ENRICHMENT PASS — SOULFLAME** (**locked**); **SELECTIVE SIGIL ENRICHMENT PASS — TOP-CLEAR-MIND** (**locked**); **CONTROLLED DOSSIER MATURATION PASS — ZENGA ZELLIA** (**locked**); **CONTROLLED DOSSIER MATURATION PASS — TOP-SOLID-ANCHOR-SHA-KARYS** (**locked**).

### 1. Purpose

Define **editorial rules** for **gradually** enriching sigil entries now that **archive architecture** and **detail-page atmosphere** are stable—so future copy work **deepens** the codex **without** collapsing it into inconsistent canon density, wiki exposition, or procedural clutter.

### 2. Editorial philosophy

Content enrichment should:

- **Deepen symbolic meaning** — clarify what the sigil *does* in the world of the archive, not inflate word count.
- **Strengthen doctrine clarity** — sharpen the canonical claim; avoid dilution with accessory voices.
- **Preserve restraint** — leave room for the reader; the archive is **ceremonial**, not a glossary of everything.
- **Avoid over-explaining** — one strong layer beats three redundant paragraphs.
- **Avoid wiki-style exposition** — no neutral-encyclopedia tone, no “lore article” sprawl, no cross-linked trivia for its own sake.
- **Preserve mystery where appropriate** — not every gap must be filled; **intentional quiet** is part of the tone.

### 3. Approved enrichment targets (safe areas)

Future edits may focus on **existing** fields and **Zierota-approved** canon surfaces, including:

- **Meaning lines** (short, declarative anchors).
- **Doctrine** — clarity, precision, alignment with approved source (not invention).
- **Lore refinement** — **`underlay`** / split lore where the template already allows it; proportional to importance.
- **Function wording** — **`usage`**: what the sigil *is for* in plain archival language.
- **Visual identity prose** — symbolic reading of form and color, not design-brief or game stat copy.
- **Relation prose** — light, resonant links to other sigils or roles (where policy allows).
- **Origin / context prose** — only when sourced or explicitly approved; never filler “backstory.”
- **Ceremonial title refinement** — optional **`title`** distinct from registry **`name`**, when it serves the entry.

### 4. Avoided enrichment patterns (reject)

Do **not**:

- **Excessive lore dumps** — long unstructured narrative blocks.
- **Fandom / wiki exposition** — exhaustive timelines, fan-compendium tone, “expanded universe” padding.
- **Stat-style descriptions** — numeric tiers, power levels, rarity language, gameplay framing.
- **Over-tagging** — stuffing **`terms`** or facets beyond indexing utility.
- **Redundant explanation** — repeating doctrine in meaning, lore, and function with minor rewording.
- **Cinematic trailer writing** — hype, teaser fragments, dramatic italics abuse.
- **Overly modern terminology** — casual internet idiom, corporate slogans, meme-adjacent phrasing.
- **Pseudo-mythology filler** — invented proper nouns and cycles not grounded in approved canon.

### 5. Density control

- **Not every sigil must become equally large.** Sparse entries remain **valid** and **on-brand**.
- **Richness** should track **canon importance** and **symbolic depth**, not a quota per row.
- Prefer **one sigil deeply considered** over **many rows** touched shallowly in one sweep.

### 6. Doctrine-first rule

**Doctrine** remains:

- **Primary** in narrative authority.
- **Visually dominant** on the detail page (apex band; unchanged hierarchy intent).
- **Canonically central** — other bands **support** or **annotate** it; they do not **replace** it.

**Lore supports doctrine, not the reverse.** If lore and doctrine conflict, **doctrine + approved source** win; lore is revised or omitted.

### 7. Meaning-line rule

**Meaning** lines should:

- Stay **concise** (a line or tight couplet of sentences, not a mini-essay).
- Remain **declarative** — state what is *meant*, not a riddle unless canon explicitly requires it.
- Avoid **poetry overload** — occasional cadence is fine; the band is an **anchor**, not a verse block.
- Avoid **vague mysticism** — “energy,” “vibration,” “alignment” without concrete symbolic referent.
- Function as **conceptual anchors** — the reader should know *what idea* sits above the full doctrine.

### 8. Relations rule

**Relations** (where present) should:

- Stay **subtle** — suggest adjacency, not encyclopedic cross-linking.
- **Avoid turning pages into navigation hubs** — the detail page is an **entry**, not a site map.
- Prefer **symbolic resonance** over **database feeling** — no exhaustive relationship grids in prose.

### 9. Visual identity prose rule

Visual identity copy should read like **archival symbolic analysis** (form, proportion, color as *meaning*).

It should **not** read like:

- **Graphic-design specifications** — exact pt sizes, export settings, tool stacks.
- **Game rarity or item flavor** — loot tone, tier colors, collectible copy.

### 10. Atmosphere protection

Maintain across all enrichment:

- **Ceremonial archive tone** — quiet, deliberate, respectful of the material.
- **Quiet density** — information without noise; no competing “hero” sections.
- **Symbolic gravity** — language matches **doctrine** weight.
- **Calm pacing** — short bands, clear order; avoid scroll inflation for drama.
- **Restrained language** — prefer precision over flourish.
- **Interpretive depth** — room for the reader to complete the picture **without** mandatory ambiguity theater.

### 11. Editorial rollout strategy

Enrichment should:

- Happen **sigil-by-sigil** (or **single approved extract** at a time)—never **bulk** canon floods without review.
- Remain **reviewable** — each change traceable to **approved source** or explicit editorial charter.
- **Avoid bulk canon floods** — no “update all rows this week” unless an exceptional, documented policy event.
- Preserve **rollback simplicity** — small diffs, clear ownership; prefer reverting one entry over untangling a mass edit.

**Browse / showcase** discoverability and card density stay **out of scope** unless a **separate** micro-pass is chartered (**DISPLAY METADATA UI RFC** staging still applies).

### 12. Readiness conclusion

The codex is **stable enough** for **gradual editorial maturation** **without** major architecture work: **one template**, **locked** atmosphere cadence, **explicit** prototype gates, and **documented** consistency audit. Further growth in **copy richness** is an **editorial** discipline problem first; **Phase B** / structured context remains **optional** and **not** required to “fix” reading order or ceremonial tone.

### 13. Next recommended phase (choose by need)

| Phase | When to use |
| ----- | ------------ |
| **SELECTIVE SIGIL ENRICHMENT PASS** | **Default.** One sigil (or one new approved entry) at a time: tighten doctrine, meaning, function, lore **within** existing fields and layout—**after** this RFC is acknowledged. |
| **CANON SOURCEBOOK ALIGNMENT PASS** | When **`canon/EMPYRRIA_SIGIL_CODEX_SOURCE.md`** and public rows need **reconciliation** (terminology, ordering, approved extracts) **before** deeper per-sigil prose work—**documentation + mirror** discipline, still **no** ontology expansion unless separately chartered. |

**Recommendation:** Prefer **SELECTIVE SIGIL ENRICHMENT PASS** as the operational default; schedule **CANON SOURCEBOOK ALIGNMENT PASS** when source-of-truth drift or bulk terminology sync is blocking clean edits.

---

## SELECTIVE SIGIL ENRICHMENT PASS — IAH-VEA

**Status:** **LOCKED (2026-05-10)** — **controlled editorial / content refinement only**; **no** new systems, fields, schema, CMS, layout architecture, ontology, graph, discoverability, or bulk sigil edits.

**Governs under:** **CONTROLLED EDITORIAL ENRICHMENT GUIDELINES RFC** (**locked**).

### Part A — Pre-enrichment charter

| Item | Commitment |
| ---- | ---------- |
| **Target sigil** | **`iah-vea`** only — public row **`/sigils/iah-vea`**, **`Doctrine Sigil`**. |
| **Enrichment-only scope** | Copy refinement inside **existing** JSON/canon fields; **no** structural or route changes. |
| **No architecture changes** | Detail template, **Phase A** prototype gates, browse/showcase — **unchanged**. |
| **No new fields** | **`underlay`** remains **empty**; no relations block, no Phase **B** keys. |
| **Doctrine-first preservation** | Per **DOCTRINE-FIRST GOVERNANCE — AUTHORITATIVE ROOT**. |
| **Rollback simplicity** | Revert **`### IAH-VEA`** in **`canon/EMPYRRIA_SIGIL_CODEX_SOURCE.md`** + single **`sigils.json`** object; optional bump **`version`** down—no migration. |
| **Atmosphere requirements** | Per **ATMOSPHERE PROTECTION — AUTHORITATIVE ROOT**, tuned for declared-structure register. |

### Part B — Approved enrichment scope (this pass)

**Allowed:** meaning clarity; doctrine tightening; ceremonial **`title`** refinement; **`usage`** / function wording; **`geometry`** (visual-identity prose); symbolic consistency across bands.

**Rejected for this pass:** lore dumps; wiki exposition; filler mythology; modern/game diction; giant prose walls; **`underlay`** expansion.

### Part C — IAH-VEA refinement goals (executed)

- Sharpen **doctrine identity** around **inscription** vs **cultivation** / **channel** confusion.
- Clarify **symbolic function** (witness, record, designation) without duplicating **`usage`** unnecessarily.
- Strengthen **declared structure** atmosphere in **title** + **meaning** + **doctrine** triad.
- **Restrained, weighty** diction; **mystery** preserved by **not** over-specifying narrative scenes.

**Held constant:** calm cadence, archival tone, interpretive density, **concise** meaning line, **`layer`**: **`Doctrine · Layer 2`**.

### Part D — Validation

| Check | Result |
| ----- | ------ |
| **`npm run build`** | **PASS** |
| **`npx astro check`** | **PASS** |
| **Atmosphere vs Top-Iron** | **Consistent** — same template; **IAH-VEA** remains **shorter** (no lore split); **no** density explosion. |
| **Doctrine primary** | **Yes** — apex band unchanged in hierarchy; refinements **support** doctrine focus. |
| **Meaning line** | **Concise** (single sentence). |
| **Schema / CMS** | **Untouched** — no **`sigils.schema.json`**, no **`public/admin/config.yml`**. |
| **Ceremonial vs encyclopedic** | **Ceremonial** — analytical **`geometry`**, no new tertiary sections. |

### Part E — Post-enrichment summary

| Area | Change (summary) |
| ---- | ----------------- |
| **`title`** | Ceremonial gloss stresses **declared structure** (not generic “doctrine” label alone). |
| **`meaning`** | Tighter **anchor**—legible **form** / **witness** vs **cultivation**. |
| **`doctrine`** | Middle sentence **tightened** for **open, stable, witnessed** form; negation clause **preserved** (attainment / rehearsal / affective cultivation). |
| **`usage`** | **Calmer** sentence boundary; same **record/designation** negations—**not** channel / enhancement / projection. |
| **`geometry`** | Light **declarative-order** read on pillar bearer—symbolic, not spec-sheet. |
| **`color`**, **`terms`**, **`layer`**, **`underlay`** | **Unchanged** (terms list unchanged). |

**Doctrine observation:** Reads as **fixed published order**—aligned with **Doctrine Sigil** role and **Top-Iron** era **archive** cadence without matching **Top-Iron** scroll length.

**Atmosphere observation:** **Quieter** than full-entry prototype by design; **weight** from **precision**, not **volume**.

**Rollback boundary:** Single sigil object in **`sigils.json`** + **`### IAH-VEA`** canon block; **`version`** **6** documents this editorial generation only.

**Next recommended sigil (selective pass):** **`soulflame-sigil`** → **SELECTIVE SIGIL ENRICHMENT PASS — SOULFLAME**; **`top-clear-mind`** → **SELECTIVE SIGIL ENRICHMENT PASS — TOP-CLEAR-MIND**—then **`top-solid-anchor-sha-karys`** or **`zenga-zellia`** per **Zierota** priority.

---

## SELECTIVE SIGIL ENRICHMENT PASS — SOULFLAME

**Status:** **LOCKED (2026-05-10)** — **editorial refinement only**; **no** new systems, fields, schema, CMS, layout architecture, ontology, graph, discoverability, or non-target sigil edits.

**Governs under:** **CONTROLLED EDITORIAL ENRICHMENT GUIDELINES RFC** (**locked**). **Depends on:** **SELECTIVE SIGIL ENRICHMENT PASS — IAH-VEA** (**locked**).

### Part A — Pre-enrichment charter

| Item | Commitment |
| ---- | ---------- |
| **Target sigil** | **`soulflame-sigil`** — **`Soulflame Sigil`**, **`Core / Energy`**, **`/sigils/soulflame-sigil`**. |
| **Enrichment-only scope** | Copy refinement inside **existing** **`sigils.json`** fields + mirrored **`### Soulflame Sigil`** canon block. |
| **No architecture changes** | Detail/browse/showcase — **unchanged**. |
| **No new fields** | **`underlay`** remains **empty**; no lore blocks, Phase **B** keys, relation surfaces. |
| **Doctrine-first preservation** | Per **DOCTRINE-FIRST GOVERNANCE — AUTHORITATIVE ROOT**. |
| **Rollback simplicity** | Revert single **`Soulflame Sigil`** stanza **`+`** one JSON object; optional **`version`** **6** rewind—no migrations. |
| **Atmosphere requirements** | Per **ATMOSPHERE PROTECTION — AUTHORITATIVE ROOT**, tuned for inward-identity register (anti-melodrama retained). |

### Part B — Approved refinement scope

**Allowed:** **`title`**, **`meaning`**, **`doctrine`**, **`usage`**, **`geometry`**, **`color`** (visual-identity wording); **`layer`** held constant (**`Core · Layer 1`**).

**Rejected:** lore walls; poetic overload; vague mysticism; wiki exposition; trailer prose; modern/game jargon; **`underlay`** expansion.

### Part C — Soulflame refinement goals (executed)

- Stress **foundation** / **essential selfhood** / **continuity of being** in **clinical** ceremonial register.
- **Negative space** retained: explicitly **not** state, **not** phenomenon—then **positive** grounding in **steady inward identity**.
- **Geometry** loses ambient **“energy”** cue in favor of **continuity-bearing form** (**symbolic**, not kinetic-fantasy).
- **Usage / color** tightened to **identity-bound** typography—**no decorative mood** implication.

### Part D — Validation

| Check | Result |
| ----- | ------ |
| **`npm run build`** | **PASS** |
| **`npx astro check`** | **PASS** |
| **Atmosphere vs IAH-VEA / Top-Iron** | **Unified** — same detail template; **Soulflame** emotional register **steady / inward**, **not** melodramatic. |
| **Doctrine visually primary** | **Yes**. |
| **Meaning line** | **Concise**, sharpened pivot on **foundation** vs **state/display**. |
| **Schema / CMS** | **Untouched.** |
| **Lore bloat** | **None** — **`underlay`** untouched. |

### Part E — Post-enrichment summary

| Area | Change (summary) |
| ---- | ----------------- |
| **`title`** | **Core of Being** retained as canonical spine; ceremonial line **steady** (**no** flashy substitute). |
| **`meaning`** | **Anchor** tightened: **foundation** / **identity** explicit; **passing state / outward display** negated crisply. |
| **`doctrine`** | **`transient`** + **`circumstance or mood`** frame—**precision** over abstraction; avoids flame/destiny language. |
| **`usage`** | **Underlay** usage reframed—**foundation at stake**, not decorative “depth.” |
| **`geometry`** | **Continuity-bearing** read; removes **energy-oriented / living** wording that could read kinetic-mystical. |
| **`color`** | **Identity-linked** requirement kept; **“resonance”** traded for **portrayed identity / non-generic ornament** wording. |
| **`layer`**, **`terms`**, **`underlay`** | **Unchanged.** |

**Doctrine observation:** Still **apex** doctrinal authority for **Core / Energy**—reads **existentially stable**, not ecstatic.

**Symbolic observation:** Flame **proper name** retained; prose **suppresses combustion metaphor**—**Soulflame** as **proper noun / axis**, not “burning soul” cliché.

**Atmosphere observation:** **Quiet strength** aligned with archive restraint; complements **IAH-VEA** (declared order) without matching its docrine-class diction wholesale.

**Rollback boundary:** **`### Soulflame Sigil`** canon block + **`soulflame-sigil`** JSON object; **`version`** **7** tags this editorial generation only.

**Next recommended sigil (selective pass):** **`top-clear-mind`** — fulfilled by **SELECTIVE SIGIL ENRICHMENT PASS — TOP-CLEAR-MIND** (below); then **`top-solid-anchor-sha-karys`** or **`zenga-zellia`** per **Zierota** priority.

---

## SELECTIVE SIGIL ENRICHMENT PASS — TOP-CLEAR-MIND

**Status:** **LOCKED (2026-05-10)** — **editorial refinement only**; **no** new systems, **no** new fields (optional display trio **not** introduced on this row), schema, CMS, layout, ontology, graph, discoverability, or other-sigil edits.

**Governs under:** **CONTROLLED EDITORIAL ENRICHMENT GUIDELINES RFC** (**locked**). **Depends on:** **IAH-VEA** + **SOULFLAME** selective passes (**locked**).

### Part A — Pre-enrichment charter

| Item | Commitment |
| ---- | ---------- |
| **Target sigil** | **`top-clear-mind`** — **`State Sigil`**, **`/sigils/top-clear-mind`**. |
| **Enrichment-only scope** | **`doctrine`**, **`usage`**, **`geometry`**, **`color`** only—mirrored **`### Top-Clear-Mind`** canon block. |
| **No architecture changes** | Detail/browse/showcase — **unchanged**. |
| **No new fields** | **No** **`title`**, **`meaning`**, **`layer`**, **`underlay`**, or Phase **B** keys; row stays **lean** public entry. |
| **Doctrine-first preservation** | Per **DOCTRINE-FIRST GOVERNANCE — AUTHORITATIVE ROOT**. |
| **Rollback simplicity** | Revert **`### Top-Clear-Mind`** + one JSON object; optional **`version`** **7** rewind. |
| **Atmosphere requirements** | Per **ATMOSPHERE PROTECTION — AUTHORITATIVE ROOT**, tuned for structural-clarity register (anti-wellness tone retained). |

### Part B — Approved refinement scope

**Allowed:** **`doctrine`**, **`usage`**, **`geometry`**, **`color`**; **`terms`** / **`name`** / **`layer`** (N/A) — **unchanged**.

**Rejected:** mindfulness/self-help tone; enlightenment or transcendence diction; inner-peace serenity; focus/productivity jargon; trailer prose; lore **`underlay`**.

### Part C — Top-Clear-Mind refinement goals (executed)

- Center **unobstructed cognition** and **clarity as structural condition** (not mood “calm”).
- Replace geometry’s **disciplined calm** register with **structural / reference-frame** language.
- Negate **euphoria**, **identity substitution**, and **trance-style narrowing**—guardrails against meditative misread **without** importing mindfulness vocabulary **positively**.

### Part D — Validation

| Check | Result |
| ----- | ------ |
| **`npm run build`** | **PASS** |
| **`npx astro check`** | **PASS** |
| **Atmosphere vs IAH-VEA / Soulflame / Top-Iron** | **Unified** — same template; tone **analytic / structural**, not wellness. |
| **Doctrine primary** | **Yes**. |
| **Meaning line** | **N/A** — **no** optional **`meaning`** field on row (**by charter**); doctrine remains lead text. |
| **Schema / CMS** | **Untouched.** |
| **Lore bloat** | **None** — **`underlay`** empty. |

### Part E — Post-enrichment summary

| Area | Change (summary) |
| ---- | ----------------- |
| **`doctrine`** | **Unobstructed cognition** explicit; **structural** clarity; negations for **euphoria / identity substitution / trance-narrowing**—precision over “mastery” self-help echo. |
| **`geometry`** | **Radial symmetry** kept; **stable reference / cognitive order in form** replaces **calm**-adjacent wording. |
| **`color`** | **Legible distinction** / **contrast**—not “supporting calm perception” soft-sell. |
| **`usage`** | **Precise perception**, **misread reduction**, **discriminative judgment**—narrative register; negations for **wellness framing**, **productivity-plot conceits**, **didactic coaching rhythm**. |
| **`terms`**, **`underlay`**, optional display keys | **Unchanged** / **absent**. |

**Doctrine observation:** Reads as **clarity-of-judgment** archive line—parallel to **Soulflame** (inward identity) and **IAH-VEA** (declared order) without sharing their diction.

**Symbolic observation:** **Clear-Mind** = **structural lucidity**, not **serenity brand**.

**Atmosphere observation:** **Restraint maintained**; negations **block** New-Age/focus-coach hijack **without** lengthening into essay.

**Rollback boundary:** **`### Top-Clear-Mind`** + **`top-clear-mind`** object; **`version`** **8**.

**Next recommended sigil (selective pass):** **`zenga-zellia`** — fulfilled by **CONTROLLED DOSSIER MATURATION PASS — ZENGA ZELLIA** (below); then **`top-solid-anchor-sha-karys`** (weight/stability register; optional **`title`/`meaning`/`layer`** + **asset** when chartered).

---

## CONTROLLED DOSSIER MATURATION PASS — ZENGA ZELLIA

**Status:** **LOCKED (2026-05-11)** — controlled dossier maturation only; **no** new systems, fields, schema, CMS, layout architecture, ontology expansion, graph systems, bulk edits, or discoverability changes.

**Governs under:** Per **DOCTRINE-FIRST GOVERNANCE — AUTHORITATIVE ROOT**, **ATMOSPHERE PROTECTION — AUTHORITATIVE ROOT**, **PROSE-PRESERVATION GOVERNANCE — AUTHORITATIVE ROOT**, and **SELECTIVE ENRICHMENT GOVERNANCE — AUTHORITATIVE ROOT**.  
**Depends on:** selective enrichment lineage (**IAH-VEA**, **Soulflame**, **Top-Clear-Mind**) and dossier-policy stabilization.

### Part A — Pre-maturation charter

| Item | Commitment |
| ---- | ---------- |
| **Target sigil** | **`zenga-zellia`** — **`Relational Sigil`**, **`/sigils/zenga-zellia`**. |
| **Maturation-only scope** | Refine existing row/canon prose under current keys; no structural expansion. |
| **No architecture changes** | Detail/browse/showcase/route behavior unchanged. |
| **No new fields** | No new schema surface; row uses existing optional keys only. |
| **Doctrine-first preservation** | Per **DOCTRINE-FIRST GOVERNANCE — AUTHORITATIVE ROOT**. |
| **Relational-symbolism constraints** | Relational presence must stay symbolic/interpretive; no social graph, romance prose, or fandom pair-language. |
| **Rollback simplicity** | Revert **`### Zenga Zellia`** canon block + one JSON object; optional **`version`** rewind. |
| **Atmosphere requirements** | Per **ATMOSPHERE PROTECTION — AUTHORITATIVE ROOT**, tuned for quietly magnetic, non-melodramatic relational register. |

### Part B — Approved refinement scope

**Allowed:** ceremonial **`title`** refinement; **`meaning`** sharpening; **`doctrine`** tightening; symbolic relationship refinement; restrained lore/context emphasis via existing prose fields; **`geometry`**, **`color`**, **`usage`** wording refinement; relational resonance kept subtle.

**Rejected:** romance prose, emotional melodrama, fandom/wiki relationship writing, shipping language, social-network feeling, giant lore walls, modern emotional vocabulary, hidden graph semantics.

### Part C — Zenga Zellia maturation goals (executed)

- Center **relational symbolic presence** as structured resonance between beings, not sentiment narrative.
- Preserve **meaningful proximity** and **interpretive relational tension** without emotional overflow language.
- Clarify mirrored/reflective structure as **recognition geometry** with stable relational gravity.
- Keep copy concise and doctrine-led while allowing quiet magnetic tone.

### Part D — Validation

| Check | Result |
| ----- | ------ |
| **`npm run build`** | **PASS** |
| **`npx astro check`** | **PASS** |
| **Atmosphere vs existing sigils** | **Unified** — relational tone remains restrained and archival. |
| **Doctrine primary** | **Yes** — hierarchy unchanged. |
| **Lore-density explosion** | **None** — **`underlay`** remains empty. |
| **Schema / CMS** | **Untouched**. |
| **Graph-system drift** | **Not observed** — prose-only relational framing, no relational database semantics. |

### Part E — Post-maturation summary

| Area | Change (summary) |
| ---- | ----------------- |
| **`title`** | Added ceremonial gloss emphasizing relational resonance without romantic framing. |
| **`meaning`** | Added concise anchor line for aligned recognition / mirrored relation. |
| **`layer`** | Added archive layer line to classify relational register under existing optional metadata path. |
| **`doctrine`** | Tightened into symbolic relational structure: proximity + recognition + non-fusion boundaries. |
| **`usage`** | Refined toward scenes of alignment/attunement and misread reduction, away from social-drama tone. |
| **`geometry`** | Mirrored dual form reframed as reciprocal orientation and structured tension, not decorative duality. |
| **`color`** | Magenta logic reframed as relational signal/contrast, avoiding sentimental palette language. |
| **`terms`**, **`underlay`** | **Unchanged** / **empty**. |

**Relational-symbolic observation:** Zenga Zellia now reads as relational **structure** rather than relational **story**; resonance is present, but interpretive and restrained.

**Doctrine observation:** Relational meaning is clearer while preserving non-fusion and non-sentimental boundaries.

**Atmosphere observation:** Quietly magnetic but ceremonially disciplined; no social-network or romance drift.

**Rollback boundary:** **`### Zenga Zellia`** + **`zenga-zellia`** object; **`version`** **9** marks this maturation generation.

**Next recommended sigil:** **`top-solid-anchor-sha-karys`** — fulfilled by **CONTROLLED DOSSIER MATURATION PASS — TOP-SOLID-ANCHOR-SHA-KARYS** (below); next candidate: **`iah-vea`** or **`top-iron-endurance`** only if new canon pressure justifies another controlled pass.

---

## CONTROLLED DOSSIER MATURATION PASS — TOP-SOLID-ANCHOR-SHA-KARYS

**Status:** **LOCKED (2026-05-11)** — controlled dossier maturation only; **no** new systems, fields, schema, CMS, layout architecture, ontology expansion, graph systems, bulk edits, discoverability changes, or combat/power-scaling semantics.

**Governs under:** Per **DOCTRINE-FIRST GOVERNANCE — AUTHORITATIVE ROOT**, **ATMOSPHERE PROTECTION — AUTHORITATIVE ROOT**, **SPARSE ENTRY + DENSITY GOVERNANCE — AUTHORITATIVE ROOT**, **PROSE-PRESERVATION GOVERNANCE — AUTHORITATIVE ROOT**, and **SELECTIVE ENRICHMENT GOVERNANCE — AUTHORITATIVE ROOT**.  
**Depends on:** prior maturation lineage and doctrinal register differentiation already locked.

### Part A — Pre-maturation charter

| Item | Commitment |
| ---- | ---------- |
| **Target sigil** | **`top-solid-anchor-sha-karys`** — **`State Sigil`**, **`/sigils/top-solid-anchor-sha-karys`**. |
| **Maturation-only scope** | Refine existing row/canon prose under current keys; no architecture/system changes. |
| **No architecture changes** | Detail/browse/showcase/routing unchanged. |
| **No new fields** | No schema/CMS expansion; only existing optional metadata path if used. |
| **Doctrine-first preservation** | Per **DOCTRINE-FIRST GOVERNANCE — AUTHORITATIVE ROOT**. |
| **Structural-support symbolism constraints** | Register must stay load-bearing/stability-focused without warrior/protector/power rhetoric. |
| **Rollback simplicity** | Revert **`### Top-Solid-Anchor / Sha-karys`** canon block + one JSON object; optional **`version`** rewind. |
| **Atmosphere requirements** | Per **ATMOSPHERE PROTECTION — AUTHORITATIVE ROOT**, tuned for grounded non-theatrical stability language. |

### Part B — Approved refinement scope

**Allowed:** ceremonial **`title`** refinement; **`meaning`** sharpening; **`doctrine`** tightening; structural-support symbolic precision; **`geometry`**, **`color`**, **`usage`** wording refinement; restrained contextual deepening.

**Rejected:** warrior/fighter archetypes, domination/control rhetoric, militarized atmosphere, motivational-strength framing, heroic narration, power/prowess language, combat semantics.

### Part C — Top-Solid-Anchor-Sha-Karys maturation goals (executed)

- Clarify load-bearing symbolic function as stable positional integrity rather than force display.
- Emphasize grounded continuity and non-reactive holding structure.
- Preserve quiet endurance language without spectacle or triumph coding.
- Keep concise doctrine/meaning hierarchy and interpretive restraint.

### Part D — Validation

| Check | Result |
| ----- | ------ |
| **`npm run build`** | **PASS** |
| **`npx astro check`** | **PASS** |
| **Atmosphere vs existing sigils** | **Unified** — weight/stability register remains ceremonial and restrained. |
| **Power-fantasy drift** | **Not observed** — no militarized/prowess coding introduced. |
| **Doctrine primary** | **Yes** — visual hierarchy unchanged. |
| **Lore-density explosion** | **None** — **`underlay`** remains empty. |
| **Schema / CMS** | **Untouched**. |
| **Hidden archetype drift** | **Not observed** — structural-support framing held without hero archetype language. |

### Part E — Post-maturation summary

| Area | Change (summary) |
| ---- | ----------------- |
| **`title`** | Added ceremonial gloss emphasizing anchored endurance without spectacle. |
| **`meaning`** | Added concise load-bearing anchor line aligned to quiet stability. |
| **`layer`** | Added archive layer marker under existing optional metadata path. |
| **`doctrine`** | Tightened around structural holding under weight with non-reactive continuity and non-spectacle framing. |
| **`usage`** | Refined toward scenes of grounded consequence-bearing and reliable support, not archetypal strength display. |
| **`geometry`** | Reframed as bearing architecture / footing integrity and stable support orientation. |
| **`color`** | Reframed toward low-flash stability signaling; avoids triumph/hero palette rhetoric. |
| **`terms`**, **`underlay`**, **`image`** | **Unchanged** / **empty** / **absent**. |

**Structural-symbolic observation:** Top-Solid-Anchor now reads as **support architecture** rather than personality archetype; strength is implicit in holding function, not dramatized.

**Doctrine observation:** Stability register is clearer and more differentiated from endurance-performance rhetoric.

**Atmosphere observation:** Quiet, grounded, and dependable; no combat/power-fantasy leakage.

**Rollback boundary:** **`### Top-Solid-Anchor / Sha-karys`** + **`top-solid-anchor-sha-karys`** object; **`version`** **10** marks this maturation generation.

**Next recommended sigil:** **`iah-vea`** (only if new source pressure warrants another doctrine-register tightening) or **`top-iron-endurance`** (only with explicit scope charter to avoid density creep).

---

## DOCTRINAL REGISTER COHERENCE AUDIT

**Status:** **LOCKED (2026-05-11)** — audit + doctrinal coherence analysis only. **No implementation scope:** no `sigils.json` edits, schema, CMS, UI, systems, discoverability, or enrichment changes in this phase.

### Part A — Audit purpose

Evaluate whether current matured registers now behave as one coherent symbolic philosophy system rather than disconnected sigil fragments, with atmosphere preservation as the primary guardrail.

**Matured register set audited:**

- **IAH-VEA** → declared structure  
- **Soulflame** → continuity of being  
- **Top-Iron-Endurance** → grounded endurance  
- **Top-Clear-Mind** → legible cognition  
- **Zenga Zellia** → reciprocal resonance  
- **Top-Solid-Anchor / Sha-karys** → structural support under load

**Authority references:** Per **DOCTRINE-FIRST GOVERNANCE — AUTHORITATIVE ROOT**, **ATMOSPHERE PROTECTION — AUTHORITATIVE ROOT**, **SPARSE ENTRY + DENSITY GOVERNANCE — AUTHORITATIVE ROOT**, and **PROSE-PRESERVATION GOVERNANCE — AUTHORITATIVE ROOT**.

### Part B — Coherence criteria findings

| Criterion | Audit finding |
| --------- | ------------- |
| **Philosophical compatibility** | **Pass.** Registers read as compatible doctrinal conditions within one symbolic system, not separate fantasy genres. |
| **Tonal consistency** | **Pass.** Archive voice remains quiet, analytical, ceremonial across all matured rows. |
| **Symbolic restraint** | **Pass.** No mature row crosses into melodrama, mysticism overload, fandom/wiki tone, self-help coaching tone, or cinematic hype. |
| **Register distinction** | **Pass.** Each register now has a clear doctrinal lane with limited collision. |
| **Density balance** | **Pass.** Rich and sparse entries coexist naturally; depth variance still reads intentional, not broken. |
| **Structural consistency** | **Pass.** One dossier frame remains legible despite variable populated depth. |

### Part C — Register analysis

| Register | Core doctrinal mode | Tonal risks avoided | System role | Overlap risk |
| -------- | ------------------- | ------------------- | ----------- | ------------ |
| **IAH-VEA** | Declared structure / witnessed doctrine | Avoids cultivation-performance drift | Formal fixation lane | Minor overlap with Top-Clear-Mind if “clarity” language overused; currently controlled |
| **Soulflame** | Continuity of being / foundational identity | Avoids combustion mysticism and melodrama | Identity axis | Mild overlap with Top-Iron on endurance language; currently distinct by identity vs load |
| **Top-Iron-Endurance** | Grounded endurance under load | Avoids heroic spectacle coding | Continuance-through-weight lane | Could crowd Top-Solid-Anchor if both become generic “strength”; currently differentiated |
| **Top-Clear-Mind** | Legible cognition / distortion reduction | Avoids wellness/self-help frame | Cognitive-order lane | Possible touchpoint with IAH-VEA’s formal clarity; still separated by domain |
| **Zenga Zellia** | Reciprocal resonance without fusion | Avoids romance/fandom relational prose | Relational-structure lane | Could blur with Soulflame if intimacy language appears; currently constrained |
| **Top-Solid-Anchor / Sha-karys** | Structural support under load | Avoids warrior/military/power fantasy coding | Positional-integrity support lane | Nearest neighbor to Top-Iron; distinction held by support architecture vs endurance process |

### Part D — Emergent system analysis

The codex now shows **emergent philosophical structure** without formal ontology hardening:

- Recurring doctrinal grammar: identity, cognition, structure, endurance, relation, and support as compatible conditions.
- Stable symbolic language: restraint-first prose, explicit anti-drift negations, archive-level semantic discipline.
- Archive semantic gravity: entries increasingly read as parts of one doctrine matrix, not stand-alone flavor texts.

No forced ontology is required yet; prose + current lightweight architecture remain sufficient.

### Part E — Risk analysis

| Risk | Status |
| ---- | ------ |
| **Register collapse** | **Low** (distinctions currently legible) |
| **Emotional overreach** | **Low** (anti-melodrama constraints holding) |
| **Repetitive doctrine patterns** | **Medium-low** (watch Top-Iron vs Top-Solid phrasing convergence) |
| **Archetype duplication** | **Low** (recent passes reduced this risk) |
| **Archive fragmentation** | **Low** (voice remains unified) |
| **Hidden genre drift** | **Low** (no fandom/game/wellness leakage detected) |
| **Semantic inflation** | **Medium-low** (future risk if all rows are deepened simultaneously) |

### Part F — Readiness conclusion

- **Current codex stability:** **Stable** doctrinally and atmospherically.  
- **Enrichment pace sustainability:** **Sustainable** if kept single-sigil and policy-root anchored.  
- **Architecture pressure:** **Not yet compelling**; no immediate need to trigger structured-entity migration.  
- **Lightweight systems sufficiency:** **Still sufficient** for current maturity stage.

### Part G — Next recommended phase

**Recommendation:** **Continue selective maturation slowly** (single-sigil scope, policy-root citations mandatory).  
Fallback trigger: only begin **structured-entity pressure study** if repeated overlap pressure appears across three or more registers despite disciplined language boundaries.

### Part H — Lock / result record

**Audit conclusion:** Matured registers currently function as a coherent symbolic doctrine system with distinct lanes and shared archive voice.  
**Coherence observation:** Differentiation improved while maintaining one ceremonial grammar.  
**Remaining risks:** Manageable overlap risk between load-bearing/endurance lanes; monitor for semantic inflation from over-concurrent deepening.  
**Current codex maturity state:** Stable enough for continued controlled maturation without premature ontology hardening.

---

## DOCTRINAL REGISTER MAP — STABLE INDEX

**Status:** **LOCKED (2026-05-11)** — lightweight doctrinal index for navigation and calibration. This map is intentionally **non-ontology** and **non-taxonomy-engine**.

### Part A — Purpose

Provide fast doctrinal orientation for future audits, overlap detection, symbolic calibration, and long-document navigation while preserving ceremonial archive openness.

**Authority references:** Per **DOCTRINE-FIRST GOVERNANCE — AUTHORITATIVE ROOT**, **ATMOSPHERE PROTECTION — AUTHORITATIVE ROOT**, **PROSE-PRESERVATION GOVERNANCE — AUTHORITATIVE ROOT**, and **COMPATIBILITY-FIRST EVOLUTION — AUTHORITATIVE ROOT**.

### Part B — Register map format

- One concise line per matured register.
- No hierarchy tree, dependency graph, rank/order system, power implication, or exhaustive decomposition.
- Orientation-first utility: quick doctrinal read, not system hardening.

### Part C — Register design rules

- The map is **descriptive**, not authoritative ontology.
- Entries may evolve gradually under controlled maturation.
- Overlap pressure is expected and monitored.
- Neighboring registers are acceptable.
- Distinction matters more than perfect isolation.
- Do **not** freeze semantics prematurely or force all future sigils into fixed lanes.

### Part D — Current register index

- **IAH-VEA** → declared structure / witnessed doctrine *(avoids cultivation-performance drift)*  
- **Soulflame** → continuity of being / foundational identity *(avoids combustion melodrama)*  
- **Top-Iron-Endurance** → endurance under sustained load *(avoids heroic spectacle coding)*  
- **Top-Clear-Mind** → legible cognition / distortion reduction *(avoids wellness coaching drift)*  
- **Zenga Zellia** → reciprocal resonance without fusion *(avoids romance/fandom framing)*  
- **Top-Solid-Anchor / Sha-karys** → structural support under load / positional integrity *(avoids warrior-power archetype language)*  

### Part E — Overlap governance

- Overlap is a concern only when multiple registers become indistinguishable **despite** controlled refinement.
- Semantic adjacency is healthy.
- Doctrinal resonance is acceptable.
- Actual risk is **register collapse**, not controlled proximity.

### Part F — Atmosphere protection

This map must never become:

- a class system
- a stat framework
- a power taxonomy
- a fandom categorization grid
- a rigid ontology engine

Maintain:

- ceremonial archive feeling
- interpretive openness
- symbolic restraint
- lightweight navigation utility

### Part G — Readiness conclusion

- The codex currently benefits from this lightweight register map for faster coherence auditing and calibration.
- Formal ontology pressure is still absent.
- Selective maturation remains the preferred growth model.

---

## DOCTRINAL REGISTER MAP INDEX PASS

**Status:** **LOCKED** — documentation/index pass complete (**no** data/schema/CMS/UI/system changes).

### Result record

- Created **DOCTRINAL REGISTER MAP — STABLE INDEX** as a compact doctrinal navigation layer.
- Preserved lightweight governance intent (descriptive map, no hard ontology/taxonomy engine).
- Established overlap-monitoring role (adjacency acceptable; collapse is the risk signal).
- Reinforced atmosphere protection boundaries for future use of the map.

### Future caution notes

- Do not convert the map into a scoring/rank model.
- Do not force new sigils into existing lanes before doctrine maturation justifies alignment.
- If overlap pressure increases across multiple registers, run a focused pressure-study audit before any architecture hardening.

---

## SYMBOLIC PHRASE REPETITION AUDIT

**Status:** **LOCKED (2026-05-11)** — lightweight editorial/governance audit only. **No implementation scope:** no `sigils.json`, schema, CMS, UI, systems, ontology hardening, discoverability changes, or enrichment execution in this phase.

### Part A — Purpose

Audit emerging symbolic phrase repetition and doctrinal cadence concentration before flattening risk appears, while preserving coherence and archive restraint.

**Authority references:** Per **DOCTRINE-FIRST GOVERNANCE — AUTHORITATIVE ROOT**, **ATMOSPHERE PROTECTION — AUTHORITATIVE ROOT**, **PROSE-PRESERVATION GOVERNANCE — AUTHORITATIVE ROOT**, and **SELECTIVE ENRICHMENT GOVERNANCE — AUTHORITATIVE ROOT**.

### Part B — Audit targets

Observed across matured registers:

- repeated doctrinal constructions
- repeated negation templates (`not X / not Y`)
- repeated symbolic verbs and structural phrases
- repeated cadence shape
- repeated conceptual pairings and archive descriptors

Focus lexicon monitored: **continuity**, **structure**, **stability**, **distortion**, **load**, **resonance**, **legibility**, **foundational**, and sustained-load constructions.

### Part C — Risk types

1. Semantic flattening  
2. Register blur  
3. Predictable cadence  
4. Shared phrase overuse  
5. Atmosphere monotony  
6. Negation-pattern dependency  
7. Vocabulary narrowing

Shared philosophical vocabulary alone is **not** failure; only drift toward indistinguishable diction is problematic.

### Part D — Current observations

- Repetition currently remains **healthy / manageable**.
- Distinctions survive; registers remain readable as separate doctrinal lanes.
- Codex voice remains alive rather than mechanically templated.
- Primary pressure points are **neighbor-lane phrasing** (Top-Iron / Top-Solid) and repeated negation cadence.

Low-risk repetitions: structural-support vocabulary, coherence terms, doctrine-first framing.  
Healthy echoes: stability/continuity/resonance motifs with lane-specific qualifiers.  
Future pressure watchpoints: overuse of mirrored sentence logic and anti-drift negation lists.

### Part E — Governance response (if pressure grows)

Preferred lightweight responses:

- lexical diversification where natural
- cadence variation between neighboring passes
- alternate framing structures (positive definition vs repeated negation)
- symbolic-angle shifts aligned to register intent
- reducing overused negation patterns

Without:

- artificial synonym churn
- coherence-breaking stylistic divergence
- decorative prose inflation

### Part F — Atmosphere protection

Do **not** answer repetition pressure with:

- poetic inflation
- fantasy flourish
- abstract mysticism
- over-written symbolism
- ornamental prose

Maintain: restraint, clarity, doctrinal precision, symbolic gravity.

### Part G — Readiness conclusion

- Current repetition pressure is **acceptable** (low-to-moderate).
- Symbolic grammar remains healthy.
- Immediate intervention is **not required**.

### Part H — Lock / result record

**Repetition findings:** manageable recurring constructions; no active flattening failure.  
**Healthy echoes vs risks:** echoes currently support coherence; risks are localized and monitorable.  
**Current pressure level:** **low-to-moderate**.  
**Future caution notes:** watch negation dependency and neighbor-lane diction convergence before opening additional active maturation passes.

---

## LIVE EXPERIENCE OBSERVATION PASS

**Status:** **LOCKED (2026-05-11)** — observational-only governance phase. No immediate UI/editorial/system reaction is authorized from single-session friction observations.

### Part A — Observation purpose

Observe the codex in-browser as a living reading experience (reader/archivist/witness stance), distinct from implementation thinking.

**Focus:** rhythm, weight, silence, doctrine landing, and atmosphere continuity.  
**Governance stance:** anti-reactive change; sustained patterns outrank isolated discomfort.

**Authority references:** Per **ATMOSPHERE PROTECTION — AUTHORITATIVE ROOT**, **SPARSE ENTRY + DENSITY GOVERNANCE — AUTHORITATIVE ROOT**, and **SELECTIVE ENRICHMENT GOVERNANCE — AUTHORITATIVE ROOT**.

### Part B — Observation targets

- first-impression atmosphere
- doctrine landing strength
- image / meaning / doctrine cadence
- scrolling rhythm
- spacing pressure
- dense vs sparse coexistence
- disclosure pacing
- classification subtlety
- relations restraint
- archive silence
- mobile reading behavior
- emotional temperature of the archive

Observe as reader/archivist/witness — not optimizer, dashboard designer, or feature hunter.

### Part C — Do not react early

Do not immediately react to:

- tiny spacing discomfort
- isolated wording preference
- minor asymmetry
- sparse-entry quietness
- unresolved interpretive ambiguity

Only sustained friction patterns justify future intervention phases.

### Part D — Experience prompts

- Does doctrine still feel primary?
- Do sigils maintain distinct emotional temperatures?
- Does scrolling feel ceremonial or informational?
- Are dense entries still breathable?
- Does silence still exist between sections?
- Does the archive still feel governed rather than content-heavy?

### Part E — Future intervention thresholds

Future UI/editorial passes should open only when:

- multiple entries exhibit the same friction
- cadence pressure becomes systemic
- archive atmosphere weakens materially
- disclosure density begins accumulating
- doctrine hierarchy degrades repeatedly

### Part F — Readiness conclusion

- Codex is mature enough for observational reading.
- Not every observation requires intervention.
- Restraint is part of archive quality.
- Long-term atmosphere depends on controlled pacing.

### LIGHTWEIGHT OBSERVATION LOG TEMPLATE

**Purpose:** tiny reusable observation memory aid for live reading sessions.  
**Philosophy:** witnessing over measurement; accumulation over reaction.  
**Authority references:** Per **ATMOSPHERE PROTECTION — AUTHORITATIVE ROOT** and **SELECTIVE ENRICHMENT GOVERNANCE — AUTHORITATIVE ROOT**.

**Template characteristics (locked):**

- optional
- 3–6 bullets max
- non-scored
- non-metricized
- interpretive
- calm
- archival

**Optional template (copy per session):**

- Atmosphere observed:
- Doctrine landing:
- Cadence / silence:
- Density pressure:
- Distinctive emotional temperature:
- Notable symbolic resonance or friction:

No forced completion logic; leave lines blank when no signal is present.

### Anti-overanalysis governance

This log exists to:

- notice patterns slowly
- preserve interpretive memory
- support gentle future calibration

Not to:

- optimize continuously
- trigger reactive redesign
- pressure constant refinement
- create measurable UX infrastructure

### Atmosphere protection for notes

Keep notes restrained, brief, reflective, and interpretive.  
Avoid hyper-analysis, over-diagnosis, engineering language, and aggressive critique posture.

### Template readiness conclusion

- Current codex now has sufficient lightweight observation infrastructure.
- Further observation systems are unnecessary for now.
- Simplicity itself protects the archive atmosphere.

---

## LIGHTWEIGHT OBSERVATION LOG TEMPLATE PASS

**Status:** **LOCKED** — template pass complete (documentation-only, minimal by design).

### Result record

- Added a tiny reusable **LIGHTWEIGHT OBSERVATION LOG TEMPLATE** under **LIVE EXPERIENCE OBSERVATION PASS**.
- Preserved anti-measurement governance: no ratings, percentages, severity labels, KPI wording, or optimization loops.
- Clarified future-use philosophy: memory and pattern awareness without bureaucracy.
- Confirmed restraint rationale: minimal scaffolding protects ceremonial reading quality better than analytic expansion.

---

## STEWARDSHIP MODE TRANSITION RECORD

**Status:** **LOCKED (2026-05-11)** — documentation-only transition marker from active construction posture to long-term symbolic stewardship posture.

### Part A — Purpose

Formally record the governance transition from building-focused operation to stewardship-focused continuity.

**Intent:**

- acknowledge symbolic settling as a valid phase
- protect continuity over momentum
- preserve atmosphere while reducing intervention frequency

**Authority references:** Per **ATMOSPHERE PROTECTION — AUTHORITATIVE ROOT**, **COMPATIBILITY-FIRST EVOLUTION — AUTHORITATIVE ROOT**, and **SELECTIVE ENRICHMENT GOVERNANCE — AUTHORITATIVE ROOT**.

### Part B — Transition observation

Empyrria now behaves more like a **governed symbolic archive** than an expanding construction project.

Future work should emerge from:

- necessity
- pressure
- canon demand
- sustained observation

Not from:

- momentum
- feature hunger
- optimization instinct
- expansion pressure alone

### Part C — Building vs stewardship

**BUILDING MODE**

- invention-heavy
- architecture-seeking
- expansion-oriented
- system-creating

**STEWARDSHIP MODE**

- atmosphere-preserving
- calibration-aware
- restraint-oriented
- continuity-focused
- observation-driven

Clarification: the archive is not “finished,” but it no longer requires constant structural growth.

### Part D — Stillness principle

- Symbolic systems require settling time.
- Rereading reveals pressure better than constant redesign.
- Silence is part of archive cadence.
- Incompleteness can remain intentional.

Protected as healthy states:

- unresolved ambiguity
- sparse entries
- quiet pages
- interpretive openness

### Part E — Future development philosophy

Future additions should be:

- deliberate
- sparse
- pressure-driven
- canon-justified
- atmosphere-compatible

Avoid:

- expansion for novelty
- governance inflation
- semantic bureaucracy
- lore accumulation reflexes

### Part F — Archive health observation

Current archive state reads:

- coherent
- breathable
- restrained
- semantically alive
- not over-managed
- not over-optimized

The archive currently benefits more from careful rereading than from additional architecture.

### Part G — Final stewardship note

Empyrria should now be allowed to mature partially through time, recurrence, observation, and selective necessity rather than perpetual intervention.

---

## STEWARDSHIP MODE TRANSITION RECORD — LOCK / RESULT

**Status:** **LOCKED** — stewardship transition acknowledged as active governance posture.

### Result record

- Recorded transition from construction-dominant mode to stewardship-dominant mode.
- Confirmed anti-momentum governance orientation.
- Reaffirmed restraint, continuity, and observation as long-horizon quality controls.
- Preserved reentry logic: resume active development only on sustained, meaningful pressure.

### Future caution notes

- Do not confuse temporary creative energy with structural necessity.
- Do not reopen architecture from momentum alone.
- Prefer rereading and accumulation of evidence before intervention.

---

## ZIEROTA ONLINE ADMIN SETUP — DECAP PRODUCTION HARDENING

**Status:** **LOCKED (2026-05-11)** — minimal production-hardening implementation for Decap online admin readiness.

### Scope (strict)

- **Edited:** `public/admin/config.yml`, `public/admin/preview-link-widget.js`
- **Unchanged:** `sigils.json`, schema, CMS field model, UI/routes, discoverability, data semantics

### Applied changes

1. **`public/admin/config.yml`**
   - `backend.name` remains `git-gateway`
   - `backend.branch` set explicitly to `main`
   - `site_url` set to `https://empyrria-codex.netlify.app`
   - `local_backend: true` preserved
   - `media_folder` / `public_folder` unchanged (`public/media/sigils` / `/media/sigils`)
   - optional `title` / `meaning` / `layer` behavior unchanged

2. **`public/admin/preview-link-widget.js`**
   - Removed hardcoded `http://localhost:4321`
   - Added origin-aware base URL logic:
     - use `window.location.origin` when available
     - safe fallback to `http://localhost:4321` when unavailable
   - Widget registration behavior unchanged

### Validation

| Command | Result |
| ------- | ------ |
| `npm run build` | **PASS** |
| `npx astro check` | **PASS** |

### Decap CDN note

`public/admin/index.html` still uses `https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js`.  
Recommendation: pin to a fixed patch version in a separate minimal hardening pass when release stability policy is approved.

### Remaining real-world Netlify dashboard steps

1. Confirm **Netlify Identity** is enabled for the site.
2. Confirm **Git Gateway** is enabled.
3. Confirm authorized editor accounts include Zierota.
4. Verify production `/admin` login and commit flow on branch `main`.
5. Optionally set invite/role policy and session rules per editorial governance.

---

## ZIEROTA ONLINE ADMIN SETUP — IDENTITY INVITE/RECOVERY TOKEN FIX

**Status:** **LOCKED (2026-05-11)** — dedicated Netlify Identity invite/recovery/confirmation handler (`invite.html`) so those flows are not blocked by Decap’s login UI.

### Issue observed

Invite and recovery emails often point editors at **`/admin`** with a hash token. That page loads **Decap CMS**, whose Git Gateway login can **interfere** with **Netlify Identity**’s invite/password and recovery modal, so account setup did not complete cleanly.

### Supported token types (URL hash)

| Token | Role |
| ----- | ---- |
| **`invite_token`** | New editor invite — accept invite, set password |
| **`recovery_token`** | Password recovery |
| **`confirmation_token`** | Email / account confirmation (when Identity sends it) |

### Scope (strict)

- **Edited:** `public/admin/invite.html`, this document
- **Unchanged:** existing **`/admin`** CMS shell, **`sigils.json`**, schema, CMS collections, codex UI, routes/discoverability, Astro pages/components

### Applied fix

- **`public/admin/invite.html`** — plain static HTML; loads only `https://identity.netlify.com/v1/netlify-identity-widget.js`; initializes Identity safely; if the hash contains one of the supported tokens, opens the correct modal (`signup` for invite/confirmation, `login` for recovery); on **`login`**, redirects to **`https://empyrria-codex.netlify.app/admin/`** so the editor reaches Decap after Identity succeeds. **Decap is not loaded** on this page.

### Final editor onboarding flow

1. Site owner invites the editor in **Netlify → Identity**.
2. Editor receives the email; **rewrite or replace** the opened URL so it uses **`/admin/invite.html`** with the **same hash** Netlify appended (see exact formats below). That avoids landing on generic Decap login before Identity runs.
3. Editor completes the **Netlify Identity** modal (password / recovery / confirm as applicable).
4. Browser redirects to **`https://empyrria-codex.netlify.app/admin/`**; editor uses **Decap** as usual (Git Gateway) while logged in.

### Validation

| Command | Result |
| ------- | ------ |
| `npm run build` | **PASS** |
| `npx astro check` | **PASS** |

### Exact URL formats (production)

- **Invite:** `https://empyrria-codex.netlify.app/admin/invite.html#invite_token=<TOKEN>`
- **Recovery:** `https://empyrria-codex.netlify.app/admin/invite.html#recovery_token=<TOKEN>`
- **Confirmation:** `https://empyrria-codex.netlify.app/admin/invite.html#confirmation_token=<TOKEN>`

Path-only form (same host): **`/admin/invite.html#invite_token=<TOKEN>`** (and the same pattern for the other two tokens).

### Zierota onboarding steps (exact)

1. Netlify **Identity** + **Git Gateway** enabled; Zierota invited as an editor.
2. From the invite email, build or follow: **`https://empyrria-codex.netlify.app/admin/invite.html#invite_token=<TOKEN>`** (token copied from the link Identity sent).
3. Confirm the **Netlify Identity** modal opens (centered status line shows while it opens); complete password / account setup—not only Decap’s login screen.
4. After Identity reports success, confirm redirect to **`https://empyrria-codex.netlify.app/admin/`** and that Decap shows the **`sigils`** collection.
5. For recovery testing: use **`https://empyrria-codex.netlify.app/admin/invite.html#recovery_token=<TOKEN>`** from the recovery email; finish reset; confirm redirect to **`https://empyrria-codex.netlify.app/admin/`**.

---

## SELECTIVE MATURATION PAUSE + OBSERVATIONAL STABILITY WINDOW

**Status:** **LOCKED (2026-05-11)** — intentional non-expansion governance phase. No new sigils, enrichment/maturation passes, Phase B systems, schema/CMS growth, graph work, dossier restructuring, ontology hardening, or broad rewrites during this window.

### Part A — Purpose

Create a deliberate stabilization window so the codex can be observed as a living symbolic system before adding new maturation pressure.

**Rationale:**

- anti-overexpansion discipline
- semantic settling before further intervention
- atmosphere preservation through restraint
- observation-before-expansion governance

**Authority references:** Per **ATMOSPHERE PROTECTION — AUTHORITATIVE ROOT**, **SPARSE ENTRY + DENSITY GOVERNANCE — AUTHORITATIVE ROOT**, **COMPATIBILITY-FIRST EVOLUTION — AUTHORITATIVE ROOT**, and **SELECTIVE ENRICHMENT GOVERNANCE — AUTHORITATIVE ROOT**.

### Part B — Current stable state

Current codex state supports a safe pause:

- coherent doctrinal registers
- stable archive voice
- sustainable lightweight architecture
- acceptable symbolic repetition levels
- successful sparse/dense coexistence
- healthy dossier layering

**No immediate architectural pressure is currently emerging.**

### Part C — Observation targets

During the pause, monitor:

- register drift
- phrase repetition escalation
- overlap pressure
- atmosphere fatigue
- cadence predictability
- accidental genre drift
- unnecessary density growth
- symbolic flattening

Observation does **not** imply immediate intervention.

### Part D — Anti-reaction governance

Do **not** respond to early pressure signs by:

- forcing ontology systems
- introducing decorative prose
- over-diversifying vocabulary
- adding architecture complexity
- inflating lore density
- creating semantic bureaucracy

Evolve only when pressure is sustained and structurally meaningful.

### Part E — Current maturity observation

Empyrria now behaves more like a **governed symbolic archive** than a loose lore collection.

Future growth priority order:

1. calibration
2. restraint
3. doctrinal clarity
4. semantic integrity

Over:

1. quantity
2. density
3. complexity

### Part F — Readiness conclusion

- Codex is stable enough to pause safely.
- No immediate new system layer is required.
- Selective maturation remains available later.
- Observation itself is now a productive governance phase.

### Part G — Future reentry conditions

Resume active maturation only when at least one condition is materially present:

- a sigil genuinely needs refinement
- semantic pressure accumulates
- overlap drift appears repeatedly
- canon expansion justifies it
- visual-doctrine pressure emerges
- dossier limits become materially constraining

---

## SELECTIVE MATURATION PAUSE + OBSERVATIONAL STABILITY WINDOW — LOCK / RESULT

**Status:** **LOCKED** — stabilization window documented and active as governance intent.

### Result record

- Established intentional pause to prevent unnecessary expansion pressure.
- Confirmed current codex maturity supports observation-first operation.
- Defined concrete observation targets and anti-reaction constraints.
- Preserved selective reentry conditions for future controlled activation.

### Future caution notes

- Do not confuse temporary phrase overlap with systemic failure.
- Do not reopen maturation solely for momentum.
- Reentry should be trigger-based, not schedule-based.

---

## DISPLAY METADATA UI RFC

**Status:** documentation / planning only — **no** `sigils.json`, schema, CMS, or component edits until a controlled implementation phase.

### 1. Purpose

Plan **safe, restrained** rendering of optional display metadata — **`title`**, **`meaning`**, **`layer`** — so the public codex can surface editorial enrichments **without** upsetting the **ceremonial archive** tone or **doctrine-first** hierarchy.

### 2. Candidate UI locations (evaluation)

| Surface | Role | Risk / note |
| ------- | ---- | ----------- |
| **`/showcase`** cards | Already uses adapter **`title`** on grid | Adding **`meaning`**/**`layer`** risks busy curated tiles |
| **`/sigils`** browse cards | Dense grid; primary job is scan + enter detail | **High** clutter risk if **`meaning`**/**`layer`** appear here early |
| **`/sigils/[slug]`** detail | Full doctrine + Classification | **Low** layout risk; strongest context for short summary + archive line |
| **Classification block** | Structured catalogue rows | Mixing optional display fields with **geometry**/**usage** may blur semantics — prefer **separate** subtle block unless taxonomy aligns |
| **Hero / featured** (showcase) | Single spotlight | Could mirror detail treatment later; not required for first rollout |

### 3. Recommended first UI surface

**`sigils/[slug]` detail page only** — first implementation surface.

**Reasons:**

- **Lowest public layout risk** — single-column reading flow already established.
- **Strongest doctrine context** — **`meaning`** reads as a **short lead** into full **`doctrine`**, not marketing copy.
- **Avoids busy browse** — **`SigilCard`** stays lean until a later RFC proves density is acceptable.
- **Canon-aligned** — metadata supports reading, not promotion.

### 4. Display rules

| Field | Rule |
| ----- | ---- |
| **`title`** | Optional **display** heading override **only where product adopts adapter for `<h1>`**; must not fight **`name`** for routing/SEO without an explicit decision; if shown, same restrained typography as current title. |
| **`meaning`** | Render **only if** present in data — short **doctrine summary** line (neutral tone), placed **above or immediately before** full Doctrine block — **never** duplicated as fake subtitle when absent. |
| **`layer`** | Render **only if** present — **subtle archive metadata** (e.g. small label row or muted line), **no** badge stacks — **never** placeholders (**“Unknown layer”**, etc.). |
| **Missing fields** | **No** fabricated UI; **no** fallbacks that invent labels — omit sections entirely. |

### 5. Atmosphere constraints

Maintain:

- **Restrained ceremonial archive** — no flash, no promotional stripes.
- **Doctrine-first** — full **`doctrine`** remains the authoritative gold block; **`meaning`** is auxiliary when present.
- **Symbolic codex tone** — typography/spacing consistent with existing Classification / Doctrine sections.
- **No** marketing-style cards, **no** noisy badges, **no** over-labeling every optional key.

### 6. Rollout plan (staged)

| Stage | Scope |
| ----- | ----- |
| **A** | **Detail page** — optional compact **Display metadata** subsection (or lead-in lines): **`meaning`**, **`layer`** when present; optional **`title`** vs **`name`** policy decided before coding. |
| **B** | **`SigilCard`** — only if Stage A proves stable and editorial wants browse parity (still minimal). |
| **C** | **`/showcase`** — refine only **after** A (and B only if needed); avoid duplicating long metadata on hero/grid. |

### 7. Validation requirements (future implementation)

Implementation gate:

- Entries **without** optional fields render **identically** to today (no empty boxes).
- **IAH-VEA** shows **`meaning`** / **`layer`** correctly when keys present.
- No layout regression at **`max-w-2xl`**; mobile spacing unchanged in spirit.
- **Search / discoverability / Fuse / routes** unchanged.
- **`npm run build`** + **`npx astro check`** PASS.

### 8. Next recommended implementation phase

**DETAIL PAGE DISPLAY METADATA — CONTROLLED IMPLEMENTATION**

Scope: **`src/pages/sigils/[slug].astro`** (+ minimal shared styling if needed); **`toSigilDisplayItem(sigil)`** or conditional reads of **`sigil.meaning`** / **`sigil.layer`** / optional **`title`** **only** per rules above — **after** this RFC is accepted.

---

## DETAIL PAGE DISPLAY METADATA — CONTROLLED IMPLEMENTATION

**Status:** **Locked** — optional display metadata on **`/sigils/[slug]`** only (see post-validation notes below).

**Non-authoritative declaration:** Optional **`title`**, **`meaning`**, and **`layer`** are **editorial / archival assists** for reading. They **do not** supersede **`name`**, **`doctrine`**, Classification, routing, discoverability, or canon source text.

### Implementation scope

- **Files:** **`src/pages/sigils/[slug].astro`** exclusively for this phase (no **`SigilCard`**, no **`showcase`**, no shared component refactor unless unavoidable).
- **Adapter:** Call **`toSigilDisplayItem(sigil)`** on the detail route; render adapter-backed strings **only** where the underlying optional JSON field is **present** (see omission behavior — **`meaning`** must **not** use adapter fallback derived from doctrine when the optional key is absent).

### Detail-page-only rule

Browse (**`/sigils`**) and showcase surfaces stay unchanged; optional metadata appears **only** on the sigil detail template.

### Metadata hierarchy

1. **`name`** remains the stable primary heading (**`<h1>`**) and canonical identity on the page.
2. Optional **`title`** (when present and distinct from **`name`**) may appear as a **single restrained line** — archival gloss, not a replacement headline.
3. **`meaning`** (when present): one short **muted** line **before** the Doctrine section — doctrine-adjacent lead, not marketing subtitle.
4. **`layer`** (when present): **subtle** archive metadata (low dominance), typically below **`meaning`** when both exist.
5. Full **`doctrine`** block remains the authoritative reading body (**doctrine-first**).

### Omission behavior

- Missing optional fields produce **no** DOM for that field — **no** placeholders, **no** “Unknown …”, **no** adapter-invented **`meaning`** from doctrine unless **`meaning`** exists in JSON.
- Sigils without optional metadata match prior layout (no empty regions).

### Rollback simplicity

Revert or strip the optional markup block(s) in **`[slug].astro`** — **no** schema, CMS, JSON, or route changes required for rollback.

### Atmosphere constraints

- Ceremonial archive tone; restrained spacing; **no** badge stacks, **no** metadata cards/panels, **no** dashboard or spec-sheet framing.
- Annotation sits **at the edge** of doctrine — thin typography, muted neutrals / amber-adjacent restraint consistent with existing sections.

### Validation requirements

- **`npm run build`** and **`npx astro check`** PASS.
- **`iah-vea`** (pilot): optional lines render correctly; other public sigils unchanged visually except intentional pilot lines.
- No discoverability, Fuse, taxonomy, or routing changes.

### Locked implementation notes (post-validation)

**Rendering locations (`src/pages/sigils/[slug].astro`):**

| Optional field | Placement | Source |
| -------------- | --------- | ------ |
| **`title`** | One line **below** **`<h1>`** (`sigil.name`), only when **`title`** is present **and** trim‑distinct from **`name`** | **`display.title`** (`toSigilDisplayItem`) |
| **`meaning`** | Muted paragraph **after** **`SigilMeta`** / classification chips strip, **before** Doctrine heading | **`display.meaning`** — rendered **only** when **`sigil.meaning`** is non-empty (adapter doctrine extraction **not** shown without JSON key) |
| **`layer`** | Uppercase micro-label line below **`meaning`** when both exist; alone same block | **`display.layer`** — only when **`sigil.layer`** is non-empty |

**Document title:** **`Layout`** `title` remains **`${sigil.name} · Empyrria Sigil Codex`** (stable SEO/route identity string).

**Omission:** Absent keys → no markup for that field; no placeholders.

**Styling:** Restrained neutrals — ceremonial **`title`** `text-sm` muted; **`meaning`** doctrine-adjacent body-muted; **`layer`** `text-[0.65rem]` uppercase tracking — **no** panels, badges, or dashboard framing.

**Validation results:** **`npm run build`** — PASS (**`validate:content`** included); **`npx astro check`** — PASS (**2026-05-09**).

**Rollback:** Remove optional blocks in **`[slug].astro`** (adapter import + gates); no data/schema/CMS edits.

**Next recommended phase:** RFC Stage **B** — optional **`SigilCard`** lines **only if** editorial need; **or** CMS widgets for optional fields; **or** second enrichment pilot sigil — **not** required for MVP stability.

---

## DOCUMENTATION DISCIPLINE — LOCKED

Every meaningful phase follows:

1. Review / Audit  
2. Plan  
3. Update `.md` (pre-implementation intent + scope)  
4. Implement  
5. Validate  
6. Update `.md` (results + lock state + next step)  
7. Lock  

If implementation changes but documentation does not: **the phase is incomplete.**

Active `.md` files are **operational memory**, **canon continuity**, **rollback reference**, **implementation history**, and **project-state authority** for this repository.

---

## CANON INGESTION PIPELINE — LOCKED

**canon source** → **structured codex entry** → **optional sigil asset** → **validation** → **lock**

Rules:

- **Approved canon source ≠ draft preservation:** Sections under **`## DRAFT — NOT APPROVED (DO NOT INGEST)`** in **`canon/EMPYRRIA_SIGIL_CODEX_SOURCE.md`** are continuity records only—they are **not** approved canon and **must not** populate `sigils.json` until promoted to **`## SIGIL ENTRIES`** with **`Status: Approved`**.
- **`canon/EMPYRRIA_SIGIL_CODEX_SOURCE.md`** (approved blocks only—or equivalently approved source) **before** `src/data/sigils.json`.
- No invented entries; no placeholder doctrine; no fake underlay.
- No `image` path in JSON unless the file exists under **`public/media/sigils/`** (validator enforces).
- **`npm run build`** (`validate:content` + Astro build) must pass before treating a content change as locked for release.

---

## OPERATIONAL STATE — CURRENT LIVE CODEX

**Live public sigils (six):** Soulflame Sigil · Top-Clear-Mind · Top-Solid-Anchor / Sha-karys · Zenga Zellia · **IAH-VEA** · **Top-Iron-Endurance** (plus internal test fixture, non-public).

**Live SVG assets:** `/media/sigils/soulflame.svg`, `top-clear-mind.svg`, `zenga-zellia.svg`, **`iah-vea.svg`**, `top-iron-endurance.svg`. **Top-Solid-Anchor** remains **text-only** (no `image` field).

**Shipped UI / behavior:** Global nav in `Layout.astro`; unified `/codex` visual language; **`/showcase`** uses the same Tailwind archive grammar as Browse/detail (post–SHOWCASE COHESION); browse cards without redundant footer **View** label (post–LIVE MICRO-POLISH); **Classification** on detail (slightly lifted neutral body for long lines); optional sigil images on cards/detail/showcase hero & grid with neutral plates; image paths validated at build; **category vs facets** documented; restrained ceremonial atmosphere preserved.

**Stack note:** Tailwind v4 + Astro; Fuse.js on browse; Decap `/admin` (Identity deferred). See **routes** and **data structure** below for file map.

---

## Library MVP — requirements

- **Browse** sigils as cards on `/sigils`.
- **Search** across name, doctrine, and facets (client-side Fuse.js on `/sigils`; `underlay` is not in the Fuse key list today — add it if product wants full-text search there).
- **Filter** by facet (category).
- **Sort** (original JSON order, A–Z, Z–A by name).
- **Detail view** at `/sigils/[slug]`: doctrine (gold tone), optional **Classification** block (neutral label/value rows for `geometry`, `usage`, `color`, `terms`, `category` when present in JSON), underlay (cyan tone), optional SVG image, facets.
- **Data:** single JSON pack (`src/data/sigils.json`) validated at build time (`npm run build` runs `validate:content`).
- **Legacy MVP checklist** also listed an **About** page — there is still **no** `/about` route (see gaps below).

---

## Current data structure

Authoritative constraints: `src/data/sigils.schema.json`. Loader/helpers: `src/lib/sigils.ts`.

Root document:

| Field | Role |
| ----- | ---- |
| `$schema` | JSON Schema reference |
| `version` | Data pack version (shown on home) |
| `sigils` | Array of sigil records |

Per sigil (keys used in repo):

| Field | Role |
| ----- | ---- |
| `slug` | Stable URL segment (`/sigils/[slug]`) |
| `name` | Display title |
| `title` | Optional display override (adapter; falls back to `name`) |
| `doctrine` | Doctrine text |
| `meaning` | Optional short meaning line (adapter; falls back to heuristic from `doctrine`) |
| `layer` | Optional archive / system layer label |
| `underlay` | System / context text |
| `category` | Optional primary canonical classification label |
| `facets` | String array — browse/filter taxonomy tags (see **Category vs facets** below) |
| `image` | Optional public path (SVG preferred); see **Sigil images** below |
| `canonStatus` | Optional when present |
| `geometry`, `usage`, `color` | Optional strings; shown on detail **Classification** when non-empty |
| `terms` | Optional string array; shown as compact chips when non-empty |

**Category vs facets:** `category` is the **primary canonical classification** label for an entry. `facets` drive **browse/filter** on `/sigils`; keep them **taxonomy-oriented** (role in the system, e.g. State Sigil) and avoid drift into mood-only or loose aesthetic tags unless canon defines them. Current data often duplicates the same string in both fields for simplicity — no migration required; future multi-facet entries should still treat `facets` as tags, not vibes.

CMS/editor contract (Decap): see `public/admin/config.yml` and archived **STEP 12 — CMS FIELD MODEL** in `EMPYRRIA_PHILOSOPHY_ARCHIVE.md`.

### Sigil images (optional assets)

- **`image` is optional** — browse cards and detail pages omit the visual plate when no path is set; layout stays valid with text-only entries.
- **Paths:** commit files under `public/media/sigils/`; JSON value like `/media/sigils/<file>.svg` (build validator enforces path prefix and file presence when set).
- **UI:** Square neutral **plates** (subtle border, dark fill, `object-contain`) on cards and detail so silhouettes stay readable at small sizes; not hero imagery, no glow. **Alt text:** `{name} sigil` when an image is shown.
- **First canonical assets:** Soulflame, Top-Clear-Mind, and Zenga Zellia ship with curated SVG line art (`soulflame.svg`, `top-clear-mind.svg`, `zenga-zellia.svg`); pipeline and layout validated with live files; silhouettes kept simple for card-scale readability.

---

## Current routes (pages)

| Route | Source |
| ----- | ------ |
| `/` | `src/pages/index.astro` |
| `/sigils` | `src/pages/sigils/index.astro` |
| `/sigils/[slug]` | `src/pages/sigils/[slug].astro` |
| `/showcase` | `src/pages/showcase.astro` |
| `/codex` | `src/pages/codex/index.astro` |
| `/codex/what-is-a-sigil` | `src/pages/codex/what-is-a-sigil.astro` |
| `/codex/system-architecture` | `src/pages/codex/system-architecture.astro` |

---

## Key components / scripts

- `src/components/SigilCard.astro` — browse grid cards
- `src/lib/sigils.ts` — codex load, public filter rules
- `src/layouts/Layout.astro` — shared shell for Home, Sigils, Showcase, and Codex routes; **global text nav** (Home · Sigils · Codex · Showcase) lives here
- `scripts/validate-content.mjs` — build-time validation (slug shape, required strings, image paths, etc.)

---

## Guardrails — project identity

Do **not**: restart architecture work; expand philosophy/governance systems; add lore directly to JSON; integrate non-canon sigils; overdecorate the UI; add glow / FX-heavy chrome; redesign the codex while **content** is the bottleneck.

**Identity:** restrained ceremonial archive; symbolic clarity; meaning before decoration; archive / museum mentality; **one validated artifact at a time** through the ingestion pipeline.

---

## Missing MVP / gaps

- **About page** — listed in legacy MVP features; not implemented (no `/about`). *Defer or descope when not conflicting with active content priority.*

---

## OPERATIONAL STATE — ACTIVE DEVELOPMENT PHASE

**Sigil & Doctrine Library MVP** — implementation **STABLE**. **IAH-VEA**, **Soulflame** selective refinements, **Top-Clear-Mind** selective refinement, and **Top-Iron-Endurance** Phase A are all integrated into the live codex. Continued emphasis: archival stewardship, release discipline, and controlled dossier expansion (no speculative canon).

---

## IAH-VEA INGESTION PREP — plan → complete (2026-05-09)

**Reason:** Zierota approved adding **IAH-VEA** to live public sigils.

**Pre-implementation intent:**

- Promote preserved **`### IAH-VEA`** from **`## DRAFT — NOT APPROVED`** to **`## SIGIL ENTRIES`** with **`Status: Approved`** — **no doctrine rewrite**.
- Copy frozen **`experiments/iah-vea/iah-vea-candidate.svg`** → **`public/media/sigils/iah-vea.svg`** — **no SVG redesign**.
- Append **`sigils.json`** row (`status`/`visibility` per existing **`marked_public`** convention; **`provisional`** matches other live entries).
- Validate (`npm run build`, `npx astro check`).

**Implementation result:** Completed — see **locked** row in **Locked implementation progress** and **Validation** under this heading.

**Validation:** `npm run build` — **PASS**; `npx astro check` — **PASS** (recorded at lock).

---

## IAH-VEA — stabilization micro-fix — locked

**Issues addressed:** broken plate image; **`/sigils/iah-vea`** reported **404**.

**Root causes:**

1. **SVG:** **`public/media/sigils/iah-vea.svg`** contained an invalid UTF-8 / replacement character in the HTML comment, which can cause strict XML/SVG parsers to reject the file → broken `<img>` in cards/detail.
2. **Route:** **`slug`**: **`iah-vea`** and **`getPubliclyDiscoverableSigils()`** were already correct; static build emits **`dist/sigils/iah-vea/index.html`**. **`404`** typically indicates **`astro dev`** started before **`sigils.json`** included the row (**restart dev**) or viewing an old **`dist`** / deployment without rebuilding.

**Changes:** **`iah-vea.svg`** — ASCII-only comment line; **same paths, geometry, colors**.

**Validation:** `npm run build`; `npx astro check` — **PASS** (recorded at lock).

---

## LIVE CODEX — SHOWCASE COHESION PASS — locked (2026-05-09)

**Goal:** Converge **`/showcase`** with Browse/detail/codex archive grammar—no rebranding, no new routes, no canon edits.

**Implementation:**

- **`src/pages/showcase.astro`** — Removed scoped hex/gradient/marketing card styling; **`neutral-*`**, **`amber-*`** accents, **`shadow-sm`** only; hero panel **`border-amber-500/15`** (curated, not glow); grid cards mirror **`SigilCard`** plate + **`sigilTitleColorClass`**; **`hover:-translate-y-px`** only (no deep lift or amber drop shadow); links match codex underline discipline.
- **SVG plates** — Optional **`sigil.image`** on hero + grid (`aspect-square`, **`object-contain`**, same footprint as browse **`w-[5.25rem]`** grid / slightly larger hero **`w-[6rem]`**).
- **Doctrine preview** — **`doctrinePreview()`** truncates with ellipsis **only when** text exceeds max (**100** chars); word-boundary trim when sensible.
- **IAH-VEA / canon / `sigils.json` / `public/media`** — untouched.

**Validation:** `npm run build`; `npx astro check` — recorded at lock.

---

## LIVE CODEX — MICRO-POLISH (detail / card) — locked (2026-05-09)

**Scope:** Small craft fixes on **`SigilCard`** and **`sigils/[slug]`** only.

**Changes:**

- **`src/components/SigilCard.astro`** — Removed uppercase **View** hint from card footer; entire card remains one focusable link—clearer archival tone, less dashboard chrome.
- **`src/pages/sigils/[slug].astro`** — **Classification** `<dd>` prose and Terms chip labels: **`text-neutral-300/88`** / **`text-neutral-300/80`** (was **`neutral-400`**) for readability on long Geometry/Usage lines without competing with Doctrine. Doctrine / Underlay hierarchy unchanged.
- **Vertical rhythm** — Doctrine and Classification: **`mt-20 md:mt-24`** (was **`mt-24`** everywhere). Underlay block: **`mt-24 pt-14`** default, **`md:mt-28 md:pt-16`** preserves museum spacing on large screens.

**Out of scope (confirmed):** no **`sigils.json`**, **`public/media/`**, canon files, **IAH-VEA**, routes, or layout redesign.

**Validation:** `npm run build`; `npx astro check` — recorded at lock.

---

## OPERATIONAL STATE — CURRENT NEXT STEP

**Operational maintenance** — treat **`npm run build`** as the content gate for releases; next canon additions follow **CANON INGESTION PIPELINE — LOCKED**. Decap optional widgets for **`title`**, **`meaning`**, and **`layer`** are **locked** (see **CMS OPTIONAL FIELD EXPOSURE — TITLE / MEANING / LAYER**). **IAH-VEA** ingestion is **complete** (see **IAH-VEA INGESTION PREP — plan → complete**).

**Full-entry prototype:** **`TOP-IRON-ENDURANCE PHASE A IMPLEMENTATION`** — **locked** (**2026-05-11**); live **`/sigils/top-iron-endurance`** with Phase **A** layout + data (**`sigils.json`** **`version`** **5**) — see master section **TOP-IRON-ENDURANCE PHASE A IMPLEMENTATION** (**§G**). **Ceremonial polish:** **`PHASE A ATMOSPHERE + RHYTHM REFINEMENT PASS`** — **locked** (detail cadence / inline terms / quieter Classification). **Cross-sigil audit:** **`DETAIL PAGE ATMOSPHERE CONSISTENCY AUDIT`** — **documented** (unified archive read; **Phase B** not atmosphere-gated). **Editorial governance:** **`CONTROLLED EDITORIAL ENRICHMENT GUIDELINES RFC`** — **locked**. **Selective enrichment:** **`SELECTIVE SIGIL ENRICHMENT PASS — IAH-VEA`** (**`version`** **6**); **`SELECTIVE SIGIL ENRICHMENT PASS — SOULFLAME`** (**`version`** **7**); **`SELECTIVE SIGIL ENRICHMENT PASS — TOP-CLEAR-MIND`** (**`version`** **8**); **`CONTROLLED DOSSIER MATURATION PASS — ZENGA ZELLIA`** (**`version`** **9**); **`CONTROLLED DOSSIER MATURATION PASS — TOP-SOLID-ANCHOR-SHA-KARYS`** (**`version`** **10**) — all **locked**. **System-level audits:** **`DOCTRINAL REGISTER COHERENCE AUDIT`** and **`SYMBOLIC PHRASE REPETITION AUDIT`** — **locked**. **Navigation layer:** **`DOCTRINAL REGISTER MAP — STABLE INDEX`** — **locked** (lightweight audit/index map; non-ontology). **Observation layer:** **`LIVE EXPERIENCE OBSERVATION PASS`** and **`LIGHTWEIGHT OBSERVATION LOG TEMPLATE PASS`** — **locked** (reader-first observational governance, minimal non-metric template). **Admin readiness:** **`ZIEROTA ONLINE ADMIN SETUP — DECAP PRODUCTION HARDENING`** and **`ZIEROTA ONLINE ADMIN SETUP — IDENTITY INVITE/RECOVERY TOKEN FIX`** — **locked**. **Current governance mode:** **`SELECTIVE MATURATION PAUSE + OBSERVATIONAL STABILITY WINDOW`** and **`STEWARDSHIP MODE TRANSITION RECORD`** — **locked** (observation-first, non-expansion stewardship posture).

**Architecture planning baseline:** **ENTITY MODEL ARCHITECTURE RFC** — **locked**. **UNIVERSAL SIGIL DOSSIER ARCHITECTURE RFC** — **documented** (shared dossier frame, visibility tiers, sparse-entry validity — **no** mandatory density). **SIGIL ENTITY TEMPLATE RFC** — **locked**. **MAPPING / LAYOUT SPEC / WIREFRAME / PHASE A IMPLEMENTATION PLAN** — **locked** for execution. **Next:** **SELECTIVE DOSSIER EXPANSION PASSES** as default maturity path; Phase **B** (**STRUCTURED ENTITY MODEL DESIGN RFC**) only if **semantic pressure** on the flat row exceeds prose + selective disclosure — see **UNIVERSAL SIGIL DOSSIER ARCHITECTURE RFC** §§ **11–13**.

---

## IAH-VEA — archive reference (post-ingestion)

**Status:** **LIVE** — approved canon source (`## SIGIL ENTRIES`), **`sigils.json`** public row, **`/media/sigils/iah-vea.svg`**.

**Frozen silhouette** remains documented in **`experiments/iah-vea/`** (studies); **public** asset matches **`iah-vea-candidate.svg`** geometry (no redesign at ingestion).

**Underlay:** empty in JSON until a separate doctrine-layer spec adds text.

**Governed refinement:** **`SELECTIVE SIGIL ENRICHMENT PASS — IAH-VEA`** (**2026-05-10**, **`sigils.json`** **`version`** **6**) — approved **`### IAH-VEA`** block and public row stay **mirrored**; editorial tightening only (**`title`**, **`meaning`**, **`doctrine`**, **`usage`**, **`geometry`**).

**Further symbolic exploration** for this sigil is **not** active unless Zierota explicitly reopens.

---

## CONTENT PHASE 1A — Canon continuation (locked)

**Uses DOCUMENTATION DISCIPLINE — LOCKED** (above).

### Review / audit (2026-05-09)

- **`canon/EMPYRRIA_SIGIL_CODEX_SOURCE.md`** — **five** approved extract blocks under **`## SIGIL ENTRIES`** (Soulflame, Top-Clear-Mind, Top-Solid-Anchor / Sha-karys, Zenga Zellia, **IAH-VEA**). **`## DRAFT — NOT APPROVED`:** empty *(no draft sigils)* at lock after **IAH-VEA** promotion (**2026-05-09**).
- Other named candidates (Nakarei Vae Lumis, Maereth Karuth, Primordial Forge, etc.) **not** represented in-repo in canon source until approved extracts exist.
- **`src/data/sigils.json`** — public canon matches **five** approved entries (+ internal test fixture). Data **`version`**: **4** (Soulflame second enrichment pilot). **No PDF** reference files committed in workspace.
- **Taxonomy balance:** 1× Core / Energy, 2× State Sigil, 1× Relational, **1× Doctrine Sigil** (**IAH-VEA**).

### Plan (pre-implementation)

- **Selected next entry (historical):** **IAH-VEA** — fulfilled **2026-05-09** (approved source + JSON + asset).
- **Recommendation when material exists:** Integrate the **next Zierota-approved block** appended to **`EMPYRRIA_SIGIL_CODEX_SOURCE.md`** (single source of truth), then mirror fields into `sigils.json` with existing patterns (`doctrine`, `geometry`, `color`, `usage`, `terms`, `category`/`facets`, `status`/`visibility`, optional `image` only if `public/media/sigils/` file exists).
- **Constraints (unchanged):** no invented canon; no placeholder doctrine; no speculative geometry; image optional.

### Implementation result

- **IAH-VEA shipped** — see **IAH-VEA INGESTION PREP — plan → complete** and **Locked implementation progress** (**IAH-VEA INGESTION** row).

### Validation

- **Post–IAH-VEA:** `npm run build` — **PASS**; `npx astro check` — **PASS**.

### Lock state & next direction

- **Next canon entry:** follow pipeline — approved **`## SIGIL ENTRIES`** block → **`sigils.json`** (+ asset when applicable) → **`npm run build`**.

---

## IAH-VEA — creative reference (ingested)

**Live:** **`/sigils/iah-vea`**, **`/media/sigils/iah-vea.svg`**, **`Doctrine Sigil`** in JSON.

**Canon:** **`canon/EMPYRRIA_SIGIL_CODEX_SOURCE.md`** → **`### IAH-VEA`** under **`## SIGIL ENTRIES`** (**`Status: Approved`**).

**Private studies:** Folder **`experiments/iah-vea/`** retains proportion experiments; **`iah-vea-candidate.svg`** matches shipped public SVG.

**Role (reference):** Doctrine-layer **inscription** of declared structure—distinct from identity (**Soulflame**), **state** sigils (**Top-***), relational (**Zenga Zellia**), anchor idiom (**Top-Solid-Anchor**).

---

## MASTER DOCUMENT CLEANUP PASS

**Status:** **LOCKED** — structure + cleanup pass complete (**documentation-only**; no schema/CMS/UI/data semantics changes).

### Major reorganizations

- Added **CANONICAL DOCUMENT STRUCTURE — STABLE** to establish the seven-band long-term organization model.
- Added a normalized **Status Vocabulary** and **Consolidation Rule** to reduce drift and repeated policy wording.
- Normalized operational section headings for scanability:
  - **OPERATIONAL STATE — CURRENT LIVE CODEX**
  - **OPERATIONAL STATE — ACTIVE DEVELOPMENT PHASE**
  - **OPERATIONAL STATE — CURRENT NEXT STEP**

### Normalization decisions

- Standardized top-level status language around **LOCKED / DOCUMENTED / ACTIVE / DEFERRED / STABLE**.
- Declared policy consolidation behavior: reuse authoritative governance sections instead of copying protection lists into every phase block.
- Kept existing RFC names and lock records intact; this pass normalizes structure/navigation, not historical labels.

### Preserved historical sections

- All major RFC outcomes, lock chronology, and implementation history remain preserved.
- Selective enrichment execution records (IAH-VEA, Soulflame, Top-Clear-Mind) remain unchanged in substance.
- Phase A system lineage (spec, wireframe, implementation plan, implementation, atmosphere pass, consistency audit) remains intact.

### Redundancy cleanup

- Reduced governance repetition pressure by introducing an explicit consolidation rule.
- Eliminated stale operational contradiction in live-state summary:
  - Updated public sigil count to **six**
  - Added **Top-Iron-Endurance** to live SVG assets
- Updated active-phase wording to reflect current locked state set.

### Navigation improvements

- Document now has a stable up-front structure map for future growth.
- Operational-state headings are grouped and clearly named for quick scans.
- Cleanup pass itself is documented as a lockable governance event for future audits.

### Current canonical structure

1. **PROJECT IDENTITY**
2. **GOVERNANCE LAYER**
3. **CORE ARCHITECTURE**
4. **IMPLEMENTATION LAYER**
5. **EDITORIAL EXECUTIONS**
6. **FUTURE / DEFERRED SYSTEMS**
7. **OPERATIONAL STATE**

### Unresolved areas

- Legacy section order remains historically layered rather than physically re-chunked into strict contiguous bands to preserve chronological audit trails.
- If desired later, a pure physical reorder can be done as a separate **documentation-only migration pass** with line-by-line cross-reference verification.

---

## AUTHORITATIVE POLICY ROOTS CONSOLIDATION PASS

**Status:** **LOCKED** — governance consolidation layer applied (**documentation-only**; no schema/CMS/UI/data/canon-meaning changes).

### Consolidated policy roots

- Added **AUTHORITATIVE POLICY ROOTS — STABLE** with six canonical roots:
  1. **DOCTRINE-FIRST GOVERNANCE — AUTHORITATIVE ROOT**
  2. **ATMOSPHERE PROTECTION — AUTHORITATIVE ROOT**
  3. **SPARSE ENTRY + DENSITY GOVERNANCE — AUTHORITATIVE ROOT**
  4. **PROSE-PRESERVATION GOVERNANCE — AUTHORITATIVE ROOT**
  5. **COMPATIBILITY-FIRST EVOLUTION — AUTHORITATIVE ROOT**
  6. **SELECTIVE ENRICHMENT GOVERNANCE — AUTHORITATIVE ROOT**

### Normalized references

- Selective-enrichment execution charters now cite roots directly for recurring doctrine/atmosphere constraints instead of repeating full protection lists.
- Consolidation rule updated to point future phases toward root citations by default.

### Preserved chronology and lineage

- Historical RFC content, lock chronology, and execution sequence remain intact.
- No historical section was removed; consolidation is additive and referential.

### Reduced duplication

- Repeated doctrine-first and atmosphere boilerplate in pass charters replaced with root references while preserving pass-specific tonal qualifiers.
- Core protections remain unchanged in meaning; only citation style and duplication burden were normalized.

### Navigation improvements

- Policy discoverability improved through a single stable root cluster near the top of the document.
- Each root now includes intent + “Referenced by” guidance for faster audit and maintenance.

### Unresolved future cleanup considerations

- Additional legacy sections still contain repeated anti-wiki / anti-schema language for historical context; further compression should be done gradually to avoid over-sterilizing chronology.
- A later optional pass can add lightweight cross-links from older RFC subsections directly to root IDs for tighter navigability.

---

## Validation checklist (before merge / release)

Run locally:

| Command | Purpose |
| ------- | ------- |
| `npm run build` | Runs `validate:content` then `astro build` — **required** |
| `npx astro check` | Astro + TypeScript check |
| `npm run check:links` | Internal link scan (manual workflow today) |

Manual smoke (hosted or `npm run dev`):

- `/`, `/sigils`, `/sigils/iah-vea`, **`/sigils/top-iron-endurance`** (Phase **A** prototype row), other live slugs, `/codex`, `/codex/what-is-a-sigil`, `/codex/system-architecture`, `/showcase`
- Browse: search, filter, sort behave as expected
- `/admin` loads Decap shell if relevant to the change
