# EMPYRRIA MASTER

**Empyrria Sigil Codex** — public **Empyrria Sigil & Doctrine Library**: static Astro site with searchable, filterable, sortable sigil cards and per-sigil detail views backed by `src/data/sigils.json`.

**Philosophy/governance expansion has been archived and is no longer the active development driver. The active project focus is the practical Sigil & Doctrine Library MVP.**

---

## Operational dashboard (Phase 1B)

Compact orientation only — **no** change to lock text, meaning, or order below.

### ACTIVE OPS (week-to-week)

| Item | Where |
| ---- | ----- |
| Canonical public site | **Cloudflare Pages** → `https://empyrria-codex.pages.dev` (production branch **`pages-cms-prototype`**) |
| Rollback + Decap + Netlify Identity | **Netlify** → `https://empyrria-codex.netlify.app` |
| Release gate | **`npm run build`** (see **Build & check commands** below) |
| Zierota constrained edits | **Pages CMS** (**PATH A**) — **`## ZIEROTA ADMIN ACCESS — PHASE 1`** in this file + **`EMPYRRIA_CODEX_MASTER.md`** |
| Full-field / higher-authority editorial | **Decap** **`/admin`** + **Netlify Identity** + **Git Gateway** — **Project rules (essential)** → **Admin** |

### ACTIVE LAW (binding)

**This file:** every **`## … — LOCK`** / **`## … — PHASE`** block below keeps the authoritative **governance rules** and **no-behavior-change** statements for its topic. **`EMPYRRIA_CODEX_MASTER.md`:** same **`##` titles** carry **tables, matrices, validation evidence, and depth**; start from **`## Locked implementation progress`** when you need the chronicle row.

### CHRONICLE (history & lineage)

**Implementation / RFC narrative** — read **`EMPYRRIA_CODEX_MASTER.md`** in **existing section order** (starting at **`## Locked implementation progress`**). **Philosophy-era bodies and long checkpoints** — **`EMPYRRIA_PHILOSOPHY_ARCHIVE.md`**.

---

## MVP goal

Deliver a fast, readable library experience for approved Empyrria sigil doctrine and system context: browse, search, filter, sort, open detail pages — without inventing canon or restructuring lore.

---

## Links

| Resource | URL |
| -------- | --- |
| **Live site (canonical — Cloudflare Pages)** | https://empyrria-codex.pages.dev |
| **Live site (legacy rollback — Netlify)** | https://empyrria-codex.netlify.app |
| **GitHub** | https://github.com/Untamednl/empyrria-codex |
| **Zierota PATH A (Pages CMS)** | **Cloudflare Dashboard** → **Workers & Pages** → this repo’s project → **Pages CMS** (branch **`pages-cms-prototype`**); **or** hosted app **`https://app.pagescms.org`** (GitHub sign-in) — procedure locked in **`## ZIEROTA ADMIN ACCESS — PHASE 1`** |
| **Implementation detail / MVP tracking** | `EMPYRRIA_CODEX_MASTER.md` |
| **Historical philosophy, long checkpoints, step logs, pre-SIMPLIFY masters** | `EMPYRRIA_PHILOSOPHY_ARCHIVE.md` |

---

## Checkpoints & rollback (active summary)

**Primary release candidate (current):** `checkpoint-2026-05-07-release-candidate-1` (RC1).

**Deployment rollback anchor:** `checkpoint-2026-05-07-first-hosted-deployment`.

**CLOUDFLARE PAGES MIGRATION — VALIDATED (2026-05-12):** Production hosting on **Cloudflare Pages** is **active** at **`https://empyrria-codex.pages.dev`**. The GitHub repository is connected; **automatic deployments** are enabled on branch **`pages-cms-prototype`**. **Canonical deployment pipeline:** Cloudflare Pages (`npm run build` → output **`dist`**, Node **22** aligned with prior Netlify `NODE_VERSION`). **Netlify** path is **legacy / superseded** for primary releases but **retained** for rollback and Decap + Netlify Identity admin until a planned post-migration cleanup phase. **Public visibility validated** on the Cloudflare deployment: **six** public sigils listed; **`internal-test-fixture`** excluded from public discovery as intended. **Resolved during migration:** (1) initial wrong production branch (**`main`** showed older four-sigil state) — fixed by switching Cloudflare production branch to **`pages-cms-prototype`**; (2) **`IMAGE_MISSING_FILE`** build failures — resolved by restoring required image assets under **`public/media/sigils/`** and/or correcting JSON **`image`** references; (3) **`Could not resolve "../lib/sigilDisplay" from src/pages/showcase.astro`** — resolved. **Known non-blocking warnings:** **`npm`** peer-dependency warnings from **Decap**-related packages; **non-fatal**; deploy succeeds; may be cleaned when **Decap** is modernized or removed.

Use Git tags / history with these ids for recovery. Full checkpoint narratives, governance consolidations, and older step references live in **`EMPYRRIA_PHILOSOPHY_ARCHIVE.md`** alongside the archived master bodies — **do not delete that file**; it preserves rollback context and project history.

---

## POST-MIGRATION LEGACY SYSTEM AUDIT — LOCK

**Status:** **LOCKED (2026-05-12)** — **documentation / audit / governance only.** **No** runtime, route, Astro component, **Pages CMS** (`.pages.yml`), Decap config, schema/data, package, deployment-config, or deletion work is performed or implied by this lock. **Canonical public deployment authority:** **Cloudflare Pages** (**`https://empyrria-codex.pages.dev`**), production branch **`pages-cms-prototype`**. **Netlify**, **Decap**, and **Netlify Identity** remain **intentionally preserved in-repo** for **rollback** and **admin continuity** until a **dedicated future retirement lock** phase.

**Purpose:** Formal **legacy infrastructure inventory** and **dependency governance** after **CLOUDFLARE PAGES MIGRATION — VALIDATED**. **Authoritative category inventory, file map, rollback-critical list, and retirement-candidate list:** **`EMPYRRIA_CODEX_MASTER.md`** → same lock title.

### Operational role classification (summary)

| Role | What it covers (this project) |
| ---- | ------------------------------ |
| **Active canonical** | **Cloudflare Pages** static output (`npm run build` → **`dist`**); **Pages CMS** (repo **`.pages.yml`**, GitHub auth) on **`pages-cms-prototype`** as the **constrained Zierota editorial surface** only — **PATH A** per **EDITORIAL SCOPE DECISION — LOCK**; **not** full admin/canon authority. |
| **Active fallback / legacy preserved** | **Netlify** site and **`netlify.toml`**; **Decap** **`/admin`** shell (**higher-authority** editorial surface vs Pages scope); **Netlify Identity** + **Git Gateway** per **`public/admin/config.yml`**; **`public/admin/invite.html`**; **`public/_redirect-identity.js`** + **`Layout.astro`** inline identity redirect; **`public/admin/netlify-identity-init.js`**, **`preview-link-widget.js`**, **`index.html`**. |
| **Future retirement candidates** | **Deferred** by **PATH A** until Git-based governance + rollback strategy mature; **only** after **dedicated execution lock** (not implied by reduced-scope Pages adoption): Decap CDN / **`decap-cms-app`** cleanup; Netlify-only doc URLs; redundant admin surface. |

### Governance rules (MASTER)

- **Legacy systems stay intact** until a **retirement** phase is **explicitly locked** in masters — **no partial removals**, **no mixed admin-state drift** (e.g. Identity disabled while Decap still linked).
- **Retirement** = **dedicated future lock** + checklist + rollback window — **not** drive-by deletes.
- **Cloudflare Pages** = **canonical production** for the public codex; **Netlify** = **authorized non-canonical rollback** path until retired.

---

## PAGES CMS VALIDATION AUDIT — LOCK

**Status:** **LOCKED (2026-05-12)** — **documentation / validation / governance only.** **Does not** authorize Decap removal, Identity removal, **`.pages.yml`** edits, branch changes, or any runtime/config/package/schema/data work. **Canonical public deployment authority** remains **Cloudflare Pages** on **`pages-cms-prototype`**. **Editorial scope** is now **formally** governed by **EDITORIAL SCOPE DECISION — LOCK** (**PATH A** — reduced-scope Pages CMS); **Pages CMS** is **not** a full Decap parity target. **Decap + Identity** remain **preserved fallback** (**POST-MIGRATION LEGACY SYSTEM AUDIT — LOCK**).

**Purpose:** Record whether the **current** **`.pages.yml`** setup **could** support a **future** transition away from legacy editorial — and what **gaps** remain. **Authoritative parity tables, gap inventory, retirement-readiness matrix, and governance boundaries:** **`EMPYRRIA_CODEX_MASTER.md`** → **PAGES CMS VALIDATION AUDIT — LOCK**.

### Headline validation conclusion (MASTER summary)

- **Zierota-safe, governance-hardened editing** of **`title`**, **`meaning`**, **`facets`**, **`terms`** appears **operationally viable** on **`pages-cms-prototype`** when combined with **`npm run build`** discipline — **not** the same as **full editorial parity** with Decap.
- **Full replacement** of Decap (doctrine edits, governance field changes, new sigils via CMS, **`underlay`** maturation, **`image`** uploads without a separate admin profile) is **not** validated as **ready** by this audit — classify as **partially ready / blocked / unknown** per **CODEX** matrix. **PATH A** (**EDITORIAL SCOPE DECISION — LOCK**) now **formally adopts** reduced-scope Pages CMS — **full parity is not a project goal** for Pages CMS.
- **Rollback** remains **mandatory** until a **dedicated retirement execution lock** exists. **PATH A** does **not** require **full** Decap parity for **ongoing** constrained Pages use — it **does** require keeping **legacy** available until **retirement** is **explicitly** governed and executed.

### Governance rules (MASTER — validation phase)

- This lock **does not** authorize removal of any editorial or identity system.
- **Full parity** (or a **complete alternative** for **all** high-authority editorial) must be **proven** before **Decap/Identity retirement** moves to **execution**. **PATH A** is the **locked accepted reduced scope** for **Pages CMS** — **not** a retirement authorization.
- **Rollback path** (Netlify + Decap + Identity stack) stays **protected** per **POST-MIGRATION LEGACY SYSTEM AUDIT — LOCK**.

### Operational role classification (editorial plane — summary)

| Classification | Editorial / CMS |
| -------------- | ----------------- |
| **Active canonical (constrained editorial surface)** | **Pages CMS** **`.pages.yml`** on **`pages-cms-prototype`** — **Zierota-facing**, **low-risk**, **limited** field editability per **EDITORIAL SCOPE DECISION — LOCK**; **not** canon-admin authority. |
| **Active fallback / legacy preserved (higher-authority editorial)** | **Decap** + **Netlify Identity** + **Git Gateway** — **full-field** path, **`main`**-anchored **`config.yml`**, **rollback / admin continuity**; **legacy preserved**, **retirement deferred**. |
| **Unresolved dependency** | **Branch mismatch** (Decap **`backend.branch: main`** vs Cloudflare **`pages-cms-prototype`**); **admin-only** Pages profile vs **Zierota** profile not fully documented as separate configs in-repo; long-term **JSON round-trip** fidelity for **readonly** fields under all Pages versions — **monitor**, not closed. |

---

## EDITORIAL SCOPE DECISION — LOCK (PATH A)

**Status:** **LOCKED (2026-05-12)** — **governance and editorial-boundary decision only.** **PATH A:** **REDUCED-SCOPE PAGES CMS EDITORIAL MODEL**. **No** configs, permissions, routes, packages, schema, data, deployments, admin removals, Identity retirement, or migrations are executed or implied.

**Decision:** **Pages CMS** is **officially** the **constrained**, **Zierota-facing** editorial surface for **safe scoped** content work (**`.pages.yml`** as implemented: readonly canon/governance fields; editable **`title`**, **`meaning`**, **`facets`**, **`terms`**). **Full canon / archive / schema / deployment authority** remains **outside** Pages CMS (**Decap + Identity + git** and documented **Git-based** governance for future maturation).

**Authoritative definitions, non-goals, high-authority list, Decap/Identity role, future strategy, governance rules:** **`EMPYRRIA_CODEX_MASTER.md`** → **EDITORIAL SCOPE DECISION — LOCK**.

### Governance rules (MASTER — PATH A)

- **Constrained surface stays intentionally limited** — no **accidental privilege expansion** via drive-by **`.pages.yml`** edits without a **dedicated governance lock**.
- **Editorial convenience must not override canon integrity** — **`npm run build`** / **`validate:content`** remain the gate; high-impact edits use **non-Pages** paths.
- **Decap / Identity retirement** remains **deferred** — **POST-MIGRATION** + **PAGES CMS VALIDATION** + this lock **do not** authorize execution.

### No-behavior-change statement (MASTER)

- **No** repository configs or permissions were **changed** by this lock; **governance text only**.

---

## ZIEROTA ADMIN ACCESS — PHASE 1

**Status:** **LOCKED (2026-05-12)** — **documentation + implementation audit only.** **Does not** remove **Decap**, **Netlify Identity**, **`public/admin/*`**, **`public/_redirect-identity.js`**, **`netlify.toml`**, or **legacy** redirects; **does not** change **schema**, **`sigils.json`**, **visibility** rules, or **admin UI**. **Builds on** **EDITORIAL SCOPE DECISION — LOCK** (**PATH A**), **PAGES CMS VALIDATION AUDIT — LOCK**, **POST-MIGRATION LEGACY SYSTEM AUDIT — LOCK**.

**Purpose:** Lock the **safest operational** answer for **where Zierota signs in** today: **PATH A** = **Pages CMS** + **GitHub** on **`pages-cms-prototype`**; **fallback / higher-authority** = **Decap** **`/admin`** on **`https://empyrria-codex.netlify.app`** + **Netlify Identity** + **Git Gateway** (**`public/admin/config.yml`**).

**Authoritative path table, auth requirements, GitHub necessity, Pages-vs-Decap scope, unsafe removals, recommended verification steps, no-retirement boundary, and no-behavior-change:** **`EMPYRRIA_CODEX_MASTER.md`** → **ZIEROTA ADMIN ACCESS — PHASE 1**.

### Governance rules (MASTER — Zierota admin access Phase 1)

- **PATH A first** — default **Zierota** work to **Pages CMS** for **allowed** fields only; **build-gate** after saves.  
- **Netlify `/admin` stays live** — **no** silent assumption that **Cloudflare `/admin`** alone replaces **Identity**/**Git Gateway** flows.  
- **No retirement without execution lock** — same boundary as **POST-MIGRATION** + **EDITORIAL SCOPE**.

### No-behavior-change statement (MASTER — Zierota admin access Phase 1)

- **No** configs, **admin** assets, redirects, **schema**, data, or **deploy** settings were **changed** by this lock — **audit documentation only**.

---

## ZIEROTA EDITORIAL PRESSURE LOG — PHASE 1

**Status:** **LOCKED (2026-05-14)** — **documentation / operational-pressure logging / classification / governance framing only.** **Observational** first-phase record of **validated Zierota** feedback from **live PATH A** usage; **not** implementation, schema, **`.pages.yml`**, runtime, UI, cleanup execution, relationship engine, image uploads, admin redesign, or discoverability work.

**Purpose:** Capture **real** editorial friction, **field** appetite, **rendering**/**UX** pressure, and **cleanup** wishes as **classified telemetry** so **SELECTIVE MATURATION PAUSE + OBSERVATIONAL STABILITY WINDOW** has a **traceable** pressure anchor — **without** treating wishes as **automatic approvals**.

**Authoritative feedback inventory, pressure classification table, high/medium/low groupings, governance interpretation, stabilization alignment, future implementation boundary, explicit no-behavior-change list, and preserved operational reality:** **`EMPYRRIA_CODEX_MASTER.md`** → **ZIEROTA EDITORIAL PRESSURE LOG — PHASE 1**.

### Governance rules (MASTER — Zierota editorial pressure log Phase 1)

- **Pressure ≠ mandate** — items in the **CODEX** log remain **unauthorized** until **dedicated** execution or **RFC** phases.  
- **PATH A boundary unchanged** — **EDITORIAL SCOPE DECISION — LOCK** remains **authoritative**; this log **does not** widen **Pages CMS** scope.  
- **Prefer incremental future execution** — if any item ships later, use **isolated** locks; **no** bulk rollout implied by classification.  
- **Preserve rollback posture** — cleanup desires (**reason** fields, **`reviewReference`**, etc.) must respect **lifecycle traceability** and **POST-MIGRATION** continuity until a **dedicated cleanup** lock.

### No-behavior-change statement (MASTER — Zierota editorial pressure log Phase 1)

- **No** implementation, **no** schema, **no** **`.pages.yml`**, **no** runtime/UI, **no** field removals, **no** relationship engine, **no** image upload system, **no** admin redesign, **no** discoverability changes — **masters documentation only**.

---

## TEXT RENDERING & DISPLAY ERGONOMICS — PHASE 1

**Status:** **LOCKED (2026-05-14)** — **first micro execution pass:** Astro presentation only for **line-break fidelity** and **display headline** order; **no** schema, **`.pages.yml`**, routing, visibility, canon authority, relationship engine, uploads, new-sigil paths, or Decap/Netlify cleanup.

**Purpose:** Address **high-priority** items from **ZIEROTA EDITORIAL PRESSURE LOG — PHASE 1** (paragraph/line breaks, visible heading, readability) within **tight** scope — **presentation layer only**.

**Authoritative scope, fields touched, headline fallback order, explicit non-goals, and validation:** **`EMPYRRIA_CODEX_MASTER.md`** → **TEXT RENDERING & DISPLAY ERGONOMICS — PHASE 1**.

### Governance rules (MASTER — text rendering Phase 1)

- **Presentation-only baseline** — **TEXT RENDERING** did **not** add JSON keys; **EDITORIAL FIELD EVOLUTION — PHASE 1** adds **optional** keys only (**additive**). **No** **`slug`** or route contract change; **`name`** remains registry identity for **alt** text and **subtitle** when **`title`** is the headline.  
- **No PATH A expansion** — **EDITORIAL SCOPE DECISION — LOCK** unchanged; this phase **does not** enable doctrine editing, new rows, or image workflow in CMS.  
- **Escalation for broader UI** — further layout work stays behind **future** locks / RFCs.

### Implementation boundary (MASTER — summary)

- **Line breaks:** `white-space: pre-wrap` (+ `break-words`) on long prose surfaces in **`/sigils/[slug]`** and showcase hero doctrine; list cards keep **single-line** doctrine preview (whitespace collapsed) for density.  
- **Headline:** **`displayHeadline`**: **`title`** → **`name`** → **`slug`**; detail **`<h1>`** and **`<Layout title>`** use the same string; optional muted **registry `name`** line when it differs from the headline.

### No-behavior-change statement (MASTER — text rendering Phase 1)

- **Does not** change **`getPubliclyDiscoverableSigils`**, **`getSigilBySlug`**, **static paths**, **Decap**, **Netlify**, **`.pages.yml`**, or **field removal** — see **CODEX** for the explicit list.

---

## EDITORIAL FIELD EVOLUTION — PHASE 1

**Status:** **LOCKED (2026-05-14)** — **additive schema + PATH A / Decap editorial fields** + **public display cleanup**; **no** routing, **no** visibility rules, **no** graph engine, **no** data key deletion, **no** new-sigil **`create`**, **no** image upload, **no** doctrine unlocked on **PATH A**.

**Purpose:** Land the first **Zierota-requested** optional fields (**`characterLink`**, **`loreContext`**, **`sigilRelationships`**, **`placeOfOrigin`**) and **hide** weak **Classification** noise (**`color`**, **`terms`**) on **public** detail/showcase while keeping values in **JSON** for maintainers and **Decap**.

**Authoritative proposal table, schema list, CMS exposure, public vs admin behavior, validator notes, and risks:** **`EMPYRRIA_CODEX_MASTER.md`** → **EDITORIAL FIELD EVOLUTION — PHASE 1**.

### Governance rules (MASTER — editorial field evolution Phase 1)

- **Strings are not edges** — **`sigilRelationships`** entries are **declared labels** only until a **future** linking governance phase.  
- **PATH A widens only as documented** — four new keys join **`title`**, **`meaning`**, **`facets`**, **`terms`** on the **Pages** editable surface; **high-authority** fields remain **readonly** on **PATH A**.  
- **Public hide ≠ delete** — **`reviewReference`** / reason fields stay in data and **Decap**; **never** were public reader surfaces.

### No-behavior-change statement (MASTER — editorial field evolution Phase 1)

- **Does not** change **`getPubliclyDiscoverableSigils`**, **`internal-test-fixture`** posture, **slug** routing, or **canon transition** automation — see **CODEX**.

---

## PATH A GOVERNANCE FIELD HIDING — PHASE 1

**Status:** **LOCKED (2026-05-14)** — **`.pages.yml` only:** Pages CMS **PATH A** editor surface hides selected governance/legacy fields; **no** JSON, schema, Decap, validator, or public site changes.

**Purpose:** Reduce **Zierota** **PATH A** editor clutter from readonly or noisy fields that remain required in **data** and **higher-authority** tooling.

**Hidden in Pages CMS (PATH A) only:** **`terms`**, **`color`**, **`reviewReference`**, **`deprecatedReason`**, **`archivedReason`** — each keeps the same **`name`**, **`type`**, **`readonly`** (where applicable), **`options`**, **`pattern`**, and **`description`** in **`.pages.yml`**; only **`hidden: true`** was added per field.

**Preservation rule:** Those keys remain **canonical** in **`src/data/sigils.json`**, **`sigils.schema.json`**, **`validate-content.mjs`**, and **`public/admin/config.yml`** (Decap / admin fallback). **`terms`** and governance reasons are edited **outside** **PATH A** where already configured (e.g. **Decap** / **git**).

**Rollback:** Revert the **`.pages.yml`** commit (remove the five **`hidden: true`** lines).

### Live round-trip validation (PASS — 2026-05-14)

- **Commits:** **`657ec94`** (`.pages.yml` **`hidden: true`**) → **`2b699cf`** (*Update src/data/sigils.json (via Pages CMS)*).  
- **Observed change:** **`soulflame-sigil`** only — added **`sigilRelationships`**: **`["Flame Heart"]`**; **3** insertions, **0** deletions; **7** rows preserved.  
- **Hidden keys** **`terms`**, **`color`**, **`reviewReference`**, **`deprecatedReason`**, **`archivedReason`**: **PASS** — per-sigil presence and deep equality vs parent commit; no stripping/nulling/mass drift.  
- **Future:** skim **`sigils.json`** diffs after Pages saves for unexpected hidden-key drops.  
- **Failure:** never hand-repair JSON; revert/fix **`.pages.yml`** and restore **`sigils.json`** from **git** (see **CODEX** §8).

**Authoritative implementation log, validation, and result:** **`EMPYRRIA_CODEX_MASTER.md`** → **PATH A GOVERNANCE FIELD HIDING — PHASE 1** (including **§8 — LIVE ROUND-TRIP VALIDATED PASS**). **PATH A Pages CMS field order (title + image; placeOfOrigin before loreContext):** **`EMPYRRIA_CODEX_MASTER.md`** → **PATH A EDITORIAL ERGONOMICS — PHASE 2A**. **PATH A additional readonly hides (geometry, name, status):** **`EMPYRRIA_CODEX_MASTER.md`** → **PATH A EDITORIAL SURFACE REFINEMENT — PHASE 2B**.

---

## PATH A EDITORIAL ERGONOMICS — PHASE 2A

**Status:** **LOCKED (2026-05-14)** — **`.pages.yml` only:** reorder **`content.codex.fields.sigils.fields`** for **Zierota** **PATH A** ergonomics; **no** JSON, schema, Decap, validator, or public site changes.

**Purpose:** Apply **validated** editorial UX feedback without widening **PATH A** authority or touching data contracts.

**Source feedback (Zierota):**

- **“PlaceofOrigin mag boven LoreContext”** — **`placeOfOrigin`** appears **above** **`loreContext`**.  
- **“Image bij titel”** — **`image`** appears **directly after** **`title`**.

**Exact reorder:** **`title`** → **`image`** (unchanged **`readonly`** definition; **moved** from after **`color`**) → **`meaning`** → **`facets`** → **`terms`** (**`hidden: true`** unchanged) → **`characterLink`** → **`placeOfOrigin`** → **`loreContext`** → **`sigilRelationships`** → then the **readonly** canon/governance block (**`slug`** through **`underlay`**) in the same **internal** order as before this phase, **without** a second **`image`** entry.

**Preserved:** Hidden-field behavior and validation record (**`657ec94`**, **`2b699cf`**, **`1034c3b`**); **no** changes to **`hidden`**, **`name`**, **`type`**, **`readonly`**, **`options`**, **`pattern`**, or field **`description`** strings — **only** sibling **order** of existing blocks in **`.pages.yml`**.

**Rollback:** Revert the **`.pages.yml`** reorder commit (and master pointers if reverted together).

**Authoritative section:** **`EMPYRRIA_CODEX_MASTER.md`** → **PATH A EDITORIAL ERGONOMICS — PHASE 2A**.

---

## PATH A EDITORIAL SURFACE REFINEMENT — PHASE 2B

**Status:** **LOCKED (2026-05-17)** — **`.pages.yml` only:** add **`hidden: true`** on **`geometry`**, **`name`**, and **`status`** under **`content.codex.fields.sigils.fields`** — **PATH A** editor declutter; **no** **`sigils.json`**, **schema**, **Decap**, **validator**, **public** Astro/UI, **routing**, or **visibility** implementation changes.

**Purpose:** Remove **infrastructure noise** from the **Zierota** **PATH A** surface: readonly **registry / governance texture** that does not materially support **lore**, **doctrine polish**, **relationship** strings, or **atmosphere** editing in Pages CMS.

**Hidden in Pages CMS (PATH A) only (this phase):** **`geometry`**, **`name`**, **`status`** — each field block keeps **`label`**, **`type`**, **`readonly`**, **`required`**, **`options`** / **`pattern`** / **`description`** unchanged; **only** **`hidden: true`** is added.

**Preservation:** Keys remain in **`sigils.json`** and **schema**; **Decap** **`public/admin/config.yml`** unchanged and **continues** to show these widgets for **higher-authority** edits; **`visibility`**, **`title`**, **`image`**, **`doctrine`**, and **editorial** fields remain **visible** in **PATH A** per project rules.

**Rollback:** Revert the **`.pages.yml`** commit (remove the three **`hidden: true`** lines).

**Authoritative section:** **`EMPYRRIA_CODEX_MASTER.md`** → **PATH A EDITORIAL SURFACE REFINEMENT — PHASE 2B**.

### Governance rules (MASTER — Phase 2B)

- **PATH A is presentation-only** — **no** authority removal from **data** or **Decap**.  
- **Hidden ≠ deleted** — round-trip must **preserve** keys in JSON (same discipline as **PATH A GOVERNANCE FIELD HIDING — PHASE 1**).  
- **Do not** hide **`visibility`**, **`doctrine`**, **`title`**, **`image`**, or **editorial** writing fields in this phase.

### No-behavior-change statement (MASTER — Phase 2B)

- **No** public site behavior, **no** validator edits, **no** schema shape change — **`.pages.yml`** **PATH A** profile only.

---

## SIGIL READABILITY & VISUAL HIERARCHY — PHASE 1A

**Status:** **LOCKED (2026-05-14)** — **`src/pages/sigils/[slug].astro`** **presentation and spacing only** (**Tailwind**). **No** **`sigils.json`**, **schema**, **`.pages.yml`**, **Decap**, **validator**, **routing**, **CMS** config, **relationship** engine, or rich-text pipeline changes.

**Purpose:** Reduce **middle-band homogenization** on public sigil detail pages: optional **editorial** fields (**Lore Context**, **Character Link**, **Place of Origin**, **Sigil Relationships**) had **section headings** too close in weight/tone to **Classification** / **Function**, weakening scan hierarchy after **Doctrine**.

**Authoritative problem statement, presentation rules, validation, and rollback:** **`EMPYRRIA_CODEX_MASTER.md`** → **SIGIL READABILITY & VISUAL HIERARCHY — PHASE 1A**.

### Governance rules (MASTER — Phase 1A)

- **Doctrine remains apex** — presentation tweaks **must not** flatten **Doctrine** authority or serif/amber chapter treatment.  
- **No structural relationship UI** — **no** pills, **no** chip grids, **no** graph widgets in this phase.  
- **Frontend-only** — **no** contract, discoverability, or CMS permission expansion via styling.

### No-behavior-change statement (MASTER — Phase 1A)

- **No** JSON keys, **no** **`getPubliclyDiscoverableSigils`** / visibility, **no** routes, **no** admin/CMS config — **markup + Tailwind classes + spacing only**.

---

## REGISTRY LAYER HIERARCHY REFINEMENT — PHASE 1B.5

**Status:** **LOCKED (2026-05-15)** — **`src/pages/sigils/[slug].astro`** **presentation only** (**Tailwind**). Touches **Function within Empyrria**, **Classification**, and **Geometry / Category** label–value typography and **footer** cadence before **← All sigils**. **No** **`sigils.json`**, **schema**, **`.pages.yml`**, **Decap**, **validator**, **routing**, **CMS**, **Doctrine** block, **hero**, **editorial** band structure, **relationship** list architecture, or **Underlay** system.

**Purpose:** The lower **registry** strip read as **secondary neutral informational text**; this pass strengthens **institutional codex** hierarchy **without** cards, colored panels, chips, glow, or new accent colors outside the existing neutral field.

**Authoritative scope, constraints, validation targets, and rollback:** **`EMPYRRIA_CODEX_MASTER.md`** → **REGISTRY LAYER HIERARCHY REFINEMENT — PHASE 1B.5**.

### Governance rules (MASTER — Phase 1B.5)

- **Doctrine dominance preserved** — **no** changes to **Doctrine** serif/amber chapter system.  
- **Editorial + relationship architecture preserved** — **no** restructuring of the editorial band or **relationship** list pattern.  
- **Thin-line codex aesthetic** — typography, opacity, spacing, and rule weight only.

### No-behavior-change statement (MASTER — Phase 1B.5)

- **No** data, **no** CMS contracts, **no** routes — **Tailwind class + rhythm adjustments only**.

---

## HERO METADATA HIERARCHY REFINEMENT — PHASE 1B.6

**Status:** **LOCKED (2026-05-16)** — **`src/pages/sigils/[slug].astro`** **presentation only** (**Tailwind**). Refines **registry-name subtitle** (when shown beneath **`h1`**) and **archival taxonomy line** (facets via **`SigilMeta`** **`variant="archival"`**) using **wrapper descendant selectors** — **no** edits to **`SigilMeta.astro`**, **no** **`sigils.json`**, **schema**, **CMS**, **routing**, **Doctrine** block, **editorial** band, **registry** sections, **Underlay**, **relationship** list styling, **`h1`**, or **image** layout.

**Purpose:** Hero metadata read **too faint** under the strong display headline; this pass restores **quiet codex authority** (engraved / archival designation) **without** dashboard chrome, pills, glow, or new accent colors.

**Authoritative scope, constraints, validation targets, and rollback:** **`EMPYRRIA_CODEX_MASTER.md`** → **HERO METADATA HIERARCHY REFINEMENT — PHASE 1B.6**.

### Governance rules (MASTER — Phase 1B.6)

- **`h1` > Doctrine > editorial/registry > metadata`** — metadata gains **readability**, not **parity** with headline or doctrine.  
- **Neutral field only** — stay within existing **neutral** (and established **amber/cyan** elsewhere on the page); **no** new hues.  
- **No component or content churn** — **`SigilMeta`** implementation file **unchanged**; presentation applied from **`[slug].astro`** only.

### No-behavior-change statement (MASTER — Phase 1B.6)

- **No** JSON, **no** routes, **no** CMS — **classes + spacing on subtitle + taxonomy wrapper only**.

---

## CONTENT GOVERNANCE MATURITY — PHASE 1

**Status:** **LOCKED (2026-05-11)** — **lifecycle / governance vocabulary and policy structure only.** **No** content edits, **no** **`sigils.json`** or schema changes, **no** route or discoverability logic changes, **no** CMS/admin/config/package work. **Complements** **EDITORIAL SCOPE DECISION — LOCK** (**PATH A**): lifecycle rules describe **what kinds of change exist**; **PATH A** defines **which tools** may touch **which fields** today.

**Purpose:** First **formal** model for how **sigils**, **doctrine**, **archive material**, **provisional canon**, and **historical** content are **conceptually** expected to **evolve** over time **without** silent canon damage, broken continuity, or confused authority.

**Authoritative taxonomy, transitions, archive/deprecation philosophy, editorial responsibility layers, principles, and platform-independence statement:** **`EMPYRRIA_CODEX_MASTER.md`** → **CONTENT GOVERNANCE MATURITY — PHASE 1**. **Operational PATH A editorial pressure log** (Zierota usage feedback **classified**; **not** feature approval): **`EMPYRRIA_CODEX_MASTER.md`** → **ZIEROTA EDITORIAL PRESSURE LOG — PHASE 1**. **Text rendering + display headline micro-pass** (Astro only; **no** schema/routing/visibility change): **`EMPYRRIA_CODEX_MASTER.md`** → **TEXT RENDERING & DISPLAY ERGONOMICS — PHASE 1**. **Editorial field evolution — Phase 1** (additive optional fields + **PATH A** exposure + public hide of weak metadata; **no** routing/visibility change): **`EMPYRRIA_CODEX_MASTER.md`** → **EDITORIAL FIELD EVOLUTION — PHASE 1**. **PATH A governance field hiding — Phase 1** (Pages CMS **`hidden`** on five keys only; **no** JSON/schema/Decap/public change): **`EMPYRRIA_CODEX_MASTER.md`** → **PATH A GOVERNANCE FIELD HIDING — PHASE 1**. **PATH A editorial ergonomics — Phase 2A** (Pages CMS **`.pages.yml`** field **order** only; **no** data/schema/Decap/public change): **`EMPYRRIA_CODEX_MASTER.md`** → **PATH A EDITORIAL ERGONOMICS — PHASE 2A**. **PATH A editorial surface refinement — Phase 2B** (**`.pages.yml`** **`hidden: true`** on **`geometry`**, **`name`**, **`status`** only; **no** JSON/schema/Decap/public change): **`EMPYRRIA_CODEX_MASTER.md`** → **PATH A EDITORIAL SURFACE REFINEMENT — PHASE 2B**. **Sigil readability & visual hierarchy — Phase 1A** (public **`/sigils/[slug]`** editorial-band **typography + spacing** only; **no** data/schema/CMS/routing): **`EMPYRRIA_CODEX_MASTER.md`** → **SIGIL READABILITY & VISUAL HIERARCHY — PHASE 1A**. **Registry layer hierarchy refinement — Phase 1B.5** (lower **Function / Classification / Geometry / Category** presentation only; **no** Doctrine/editorial/Underlay/relationship architecture changes): **`EMPYRRIA_CODEX_MASTER.md`** → **REGISTRY LAYER HIERARCHY REFINEMENT — PHASE 1B.5**. **Hero metadata hierarchy refinement — Phase 1B.6** (subtitle + archival **facets** line under **`h1`** only; **`[slug].astro`** presentation; **no** **`SigilMeta.astro`** source edits): **`EMPYRRIA_CODEX_MASTER.md`** → **HERO METADATA HIERARCHY REFINEMENT — PHASE 1B.6**. **Procedural transition authority** (who approves moves, escalation): **`EMPYRRIA_CODEX_MASTER.md`** → **CANON TRANSITION GOVERNANCE — PHASE 1**. **Evidence and review epistemology** (what counts as proof, sufficient review): **`EMPYRRIA_CODEX_MASTER.md`** → **CANON EVIDENCE & REVIEW GOVERNANCE — PHASE 1**. **Annotation & commentary boundaries** (interpretation **around** canon without authority bleed): **`EMPYRRIA_CODEX_MASTER.md`** → **CANON ANNOTATION & COMMENTARY GOVERNANCE — PHASE 1**. **Entity relationship semantics** (how sigils/doctrine/layers/symbols may be **linked conceptually** without authority drift): **`EMPYRRIA_CODEX_MASTER.md`** → **CANON ENTITY RELATIONSHIP GOVERNANCE — PHASE 1**. **Governance evolution & amendment** (how masters and locks **change** without silent supersession or governance memory loss): **`EMPYRRIA_CODEX_MASTER.md`** → **GOVERNANCE EVOLUTION & AMENDMENT GOVERNANCE — PHASE 1**. **Governance consolidation & constitutional index** (domain map, **MASTER**/**CODEX** source-of-truth, terminology — **navigation only**): **`EMPYRRIA_CODEX_MASTER.md`** → **GOVERNANCE CONSOLIDATION & CONSTITUTIONAL INDEX — PHASE 1**. **Selective maturation pause + observational stability window** (pause **governance-stack expansion**; **observe** friction; **canon**/editorial work **continues**): **`EMPYRRIA_CODEX_MASTER.md`** → **SELECTIVE MATURATION PAUSE + OBSERVATIONAL STABILITY WINDOW**. **Full entry prototype — Phase 1** (specimen-entry **layer** and **presentation** planning only; **no** rollout commitment): **`EMPYRRIA_CODEX_MASTER.md`** → **FULL ENTRY PROTOTYPE — PHASE 1**. **Full entry visual mockup — Phase 1** (specimen-page **visual-conceptual** governance only; **no** UI/CSS/React implementation): **`EMPYRRIA_CODEX_MASTER.md`** → **FULL ENTRY VISUAL MOCKUP — PHASE 1**. **Specimen entry wireframe — Phase 1** (low-fidelity **structural** layout planning only; **no** production UI, **no** design/style system): **`EMPYRRIA_CODEX_MASTER.md`** → **SPECIMEN ENTRY WIREFRAME — PHASE 1**.

### Governance rules (MASTER — Phase 1)

- **Lifecycle governance is platform-independent** — **Pages** / **Decap** / **git** are **implementation**; **canon authority** stays with **Zierota + documented pipeline + locks**, not a product UI.
- **Governance before convenience** — state changes (**provisional → canon**, **canon → deprecated**, etc.) require **explicit** review and **master** documentation when executed in future phases — **not** implied by this Phase **1** lock.
- **Archives over deletion** — deprecated or archived material remains **historically legible** where policy allows; **archive ≠ erase**.

### No-behavior-change statement (MASTER — Phase 1)

- **No** sigil rows moved, **no** **`status`** / **`visibility`** values changed, **no** editorial permissions altered — **definitions and boundaries only**.

---

## CANON TRANSITION GOVERNANCE — PHASE 1

**Status:** **LOCKED (2026-05-11)** — **transition mechanics, authority, and process rules only.** **Does not** redefine lifecycle **vocabulary** or stability **tiers** (see **CONTENT GOVERNANCE MATURITY — PHASE 1**). **No** **`sigils.json`** edits, **no** **status remapping**, **no** discoverability or **visibility** logic changes, **no** CMS/schema/route/package/deploy changes, **no** workflow **automation** added.

**Purpose:** Procedural rules for **how** content **may move** between lifecycle **states** — **who** may **propose** vs **approve**, **what** escalates to **locks**, and **how** **preservation** and **traceability** behave **during** transitions.

**Authoritative authority matrix, allowed transitions, promotion/deprecation rules, escalation ladder, contradiction handling, traceability, and implementation boundary:** **`EMPYRRIA_CODEX_MASTER.md`** → **CANON TRANSITION GOVERNANCE — PHASE 1**. **Evidence / review epistemology** (what counts as proof, sufficient review, interpretation vs declaration): **`EMPYRRIA_CODEX_MASTER.md`** → **CANON EVIDENCE & REVIEW GOVERNANCE — PHASE 1**.

### Governance rules (MASTER — transition Phase 1)

- **Transitions are not editorial shortcuts** — changing **tier** or **governance posture** (**provisional → stable**, **canon → deprecated**, **public candidate**, etc.) **exceeds** **PATH A** unless a **dedicated** transition or ingestion lock **explicitly** says otherwise.
- **Canon promotion and deprecation** require **canon governance** + **documented** rationale (masters / PR / optional reason fields when used) — **not** CMS convenience alone.
- **Automation** (future) **assists** traceability; it **does not** replace **Zierota** or **lock** authority.

### No-behavior-change statement (MASTER — transition Phase 1)

- **No** canon transitions **executed**; **no** statuses or discoverability **altered** — **process definitions only**.

---

## CANON EVIDENCE & REVIEW GOVERNANCE — PHASE 1

**Status:** **LOCKED (2026-05-11)** — **evidence standards, review epistemology, and canon-evaluation rules only.** **Builds on** **CONTENT GOVERNANCE MATURITY — PHASE 1** (vocabulary), **CANON TRANSITION GOVERNANCE — PHASE 1** (who moves what). **Does not** execute transitions or change data. **No** schema, **sigils.json**, **status**, **visibility**, discoverability, CMS, deploy, package, or **review automation** implementation.

**Purpose:** Define **what counts as evidence**, **what sufficient review means**, how **canon confidence** is judged, how **interpretation** differs from **declaration**, and how **conflicting evidence** is treated — **without** inventing new lifecycle **definitions** or **replacing** transition **authority**.

**Authoritative evidence taxonomy, declaration vs interpretation, confidence levels, review scope, contradiction epistemology, historical evidence philosophy, stability epistemology, review traceability, and implementation boundary:** **`EMPYRRIA_CODEX_MASTER.md`** → **CANON EVIDENCE & REVIEW GOVERNANCE — PHASE 1**. **Annotation & commentary** (notes, uncertainty, symbolic readings **around** declared canon): **`EMPYRRIA_CODEX_MASTER.md`** → **CANON ANNOTATION & COMMENTARY GOVERNANCE — PHASE 1**.

### Governance rules (MASTER — evidence Phase 1)

- **Interpretation is not canon** — recurring symbolism, reader theories, or **editorial** convenience **do not** **elevate** to declared canon without **Zierota** + **documented** evidence path.
- **Automation may surface evidence; it does not determine canon** — same boundary as **CANON TRANSITION** for **tooling**.
- **Uncertainty may remain** — **intentional** ambiguity or **disputed** readings can be **preserved** when **governance** chooses **honesty** over **false closure**.

### No-behavior-change statement (MASTER — evidence Phase 1)

- **No** canon states, **no** discoverability, **no** permissions, **no** review **automation** added — **epistemology and standards text only**.

---

## CANON ANNOTATION & COMMENTARY GOVERNANCE — PHASE 1

**Status:** **LOCKED (2026-05-11)** — **annotation philosophy, commentary boundaries, and representation rules only.** **Builds on** **CANON EVIDENCE & REVIEW GOVERNANCE — PHASE 1** (declaration vs interpretation), **CONTENT** / **CANON TRANSITION** (lifecycle + authority). **No** **`sigils.json`**, **schema**, **data**, **status**/**visibility**, discoverability, **CMS**, deploy, package, **annotation UI**, or **automation** implementation.

**Purpose:** Define how **interpretation**, **commentary**, **historical notes**, **uncertainty**, **symbolic readings**, and **editorial context** may **exist around** canon **without** **silently** changing **canon authority**.

**Authoritative annotation taxonomy, canon vs commentary separation, uncertainty representation, commentary authority hierarchy, historical commentary, multi-reading handling, traceability, principles, and implementation boundary:** **`EMPYRRIA_CODEX_MASTER.md`** → **CANON ANNOTATION & COMMENTARY GOVERNANCE — PHASE 1**. **Entity relationship semantics** (associations, lineage, overlap **without** graph implementation or canon inflation): **`EMPYRRIA_CODEX_MASTER.md`** → **CANON ENTITY RELATIONSHIP GOVERNANCE — PHASE 1**.

### Governance rules (MASTER — annotation Phase 1)

- **Commentary supplements; it does not override** declared canon — **promotion** to canon remains **ingestion / Zierota** path (**CANON TRANSITION**).
- **Annotation visibility ≠ authority** — surfacing notes in UI (**future**) must **not** **inflate** doctrinal **certainty**.
- **Ambiguity may remain visible** — **honest** **unresolved** layers beat **false** **flattened** closure.

### No-behavior-change statement (MASTER — annotation Phase 1)

- **No** canon text changed, **no** commentary system shipped, **no** permissions or discoverability altered — **governance definitions only**.

---

## CANON ENTITY RELATIONSHIP GOVERNANCE — PHASE 1

**Status:** **LOCKED (2026-05-11)** — **conceptual relationship semantics, association authority, and semantic-structure rules only.** **Builds on** **CANON EVIDENCE**, **CANON ANNOTATION**, **CANON TRANSITION**, **CONTENT** (lifecycle/archive). **No** **`sigils.json`**, **schema**, **graph**/**database**, **search**/**discoverability**, **CMS**, **relationship UI**, deploy, package, or **automation** implementation.

**Purpose:** Define how **relationships** between **sigils**, **doctrine**, **entities**, **layers**, **symbols**, **historical states**, **archive material**, and **interpretations** may be **thought and spoken about** **without** **accidental** canon **authority** drift.

**Authoritative relationship taxonomy, authority/confidence hierarchy, declared vs inferred rules, historical lineage philosophy, contradiction/overlap handling, traceability, principles, and implementation boundary:** **`EMPYRRIA_CODEX_MASTER.md`** → **CANON ENTITY RELATIONSHIP GOVERNANCE — PHASE 1**. **Governance evolution & amendment** (hierarchy, supersession, governance archive): **`EMPYRRIA_CODEX_MASTER.md`** → **GOVERNANCE EVOLUTION & AMENDMENT GOVERNANCE — PHASE 1**. **Governance consolidation & constitutional index** (cross-lock map, terminology — **no** redesign): **`EMPYRRIA_CODEX_MASTER.md`** → **GOVERNANCE CONSOLIDATION & CONSTITUTIONAL INDEX — PHASE 1**.

### Governance rules (MASTER — entity relationship Phase 1)

- **Association ≠ inheritance** — **linking** two ideas **does not** make them **doctrinally equal** or **causally** bound unless **declared**.
- **Resonance ≠ confirmation** — **symbolic** adjacency or **thematic** echo **does not** **elevate** **inference** to **canon** without **CANON TRANSITION** / **ingestion** path.
- **Future graphs must preserve authority distinctions** — **visibility** of edges **≠** **governance** **weight**.

### No-behavior-change statement (MASTER — entity relationship Phase 1)

- **No** relationships **implemented**, **no** sigils **modified**, **no** graph system added — **definitions only**.

---

## DOCUMENTATION DISCIPLINE — LOCKED

Every meaningful phase follows:

1. Review / Audit  
2. Plan  
3. Update **`EMPYRRIA_CODEX_MASTER.md`** (pre-implementation intent + scope)  
4. Implement  
5. Validate  
6. Update **`.md`** (results + lock state + next step)  
7. Lock  

If implementation changes but documentation does not: **the phase is incomplete.** Full phase table and live state: **`EMPYRRIA_CODEX_MASTER.md`**.

---

## GOVERNANCE EVOLUTION & AMENDMENT GOVERNANCE — PHASE 1

**Status:** **LOCKED (2026-05-11)** — **meta-governance only:** hierarchy of governance layers, amendment vs clarification, supersession traceability, stability tiers for governance prose, governance archive philosophy, and future boundary (**no** autonomous governance automation). **No** permissions, **no** canon/**`sigils.json`**, **no** runtime, **no** CMS/deploy/package/discoverability changes.

**Purpose:** Keep **constitutional** intent, **canon** process, **editorial** bounds, and **operational** guidance in **ordered** relationship so **convenience** does not **silently** **rewrite** **locks**.

**Authoritative hierarchy model, amendment authority, supersession/conflict rules, stability tiers, immutability vs evolvability, traceability, governance archive philosophy, principles, and implementation boundary:** **`EMPYRRIA_CODEX_MASTER.md`** → **GOVERNANCE EVOLUTION & AMENDMENT GOVERNANCE — PHASE 1**. **Constitutional consolidation index** (where domain locks live, **MASTER**/**CODEX** roles, dependency map — **navigation only**): **`EMPYRRIA_CODEX_MASTER.md`** → **GOVERNANCE CONSOLIDATION & CONSTITUTIONAL INDEX — PHASE 1**.

### Governance rules (MASTER — meta-governance Phase 1)

- **Clarification ≠ amendment** — **material** obligation changes need **explicit** **lock**/**PR** trail (**CODEX** meta section).
- **Supersession must be traceable** — **newer** text **states** **what** it **narrows** or **replaces**; **no** **silent** **orphaning** of **prior** **governance**.
- **Automation must not autonomously amend governance** — **tooling** may **index** or **flag**; **humans** **ratify** **lock** text.

### No-behavior-change statement (MASTER — meta-governance Phase 1)

- **No** systems removed, **no** permissions changed, **no** canon modified, **no** governance bots added — **definitions only**.

---

## GOVERNANCE CONSOLIDATION & CONSTITUTIONAL INDEX — PHASE 1

**Status:** **LOCKED (2026-05-11)** — **constitutional navigation, domain index, terminology coordination, and dependency visibility only.** **Does not** change **authority**, **meaning**, or **binding** text of any prior governance lock. **No** canon/**`sigils.json`**, **no** runtime, **no** CMS/deploy/package/discoverability/schema/automation changes.

**Purpose:** **Orient** readers across **CONTENT**, **CANON TRANSITION**, **CANON EVIDENCE**, **CANON ANNOTATION**, **CANON ENTITY**, **GOVERNANCE EVOLUTION**, **PATH A**, and **authoritative roots** — **without** governance redesign.

**Authoritative constitutional index, domain map, source-of-truth hierarchy, terminology guide, dependency and overlap notes, navigation principles, future consolidation boundary, traceability expectations, and implementation boundary:** **`EMPYRRIA_CODEX_MASTER.md`** → **GOVERNANCE CONSOLIDATION & CONSTITUTIONAL INDEX — PHASE 1**.

### Governance rules (MASTER — consolidation Phase 1)

- **Navigation does not alter authority** — **reordering** or **summarizing** **must not** silently **upgrade** **steering** text into **new** **constitutional** obligations.
- **One authoritative home per domain** — **index** **points**; **domain locks** **bind**.
- **MASTER vs CODEX** — **MASTER** for **condensed** policy + checkpoints; **CODEX** for **full** lock bodies and **implementation map**; **resolve** factual drift per **MASTER** ↔ **CODEX** rules.

### No-behavior-change statement (MASTER — consolidation Phase 1)

- **No** governance **authority** or **constitutional** **meaning** changed, **no** canon modified — **index and mapping definitions only**.

---

## SELECTIVE MATURATION PAUSE + OBSERVATIONAL STABILITY WINDOW

**Status:** **LOCKED (2026-05-11)** — **stabilization and observational governance only.** **Pause** on **major constitutional / governance-stack expansion**; **canon**, **ingestion**, **PATH A** editorial work, and **content growth** **continue** per **existing** locks. **No** runtime, **schema**, **CMS**, deploy, discoverability, migration execution, or automation **from this lock**; **no** authority change to prior locks.

**Purpose:** Reduce **governance overgrowth**; **observe** real operational friction; **treat stability** as an objective.

**Authoritative maturation-pause philosophy, observational window, allowed/discouraged activity, pressure detection, health principles, resumption rules, traceability, implementation boundary, and no-behavior-change:** **`EMPYRRIA_CODEX_MASTER.md`** → **SELECTIVE MATURATION PAUSE + OBSERVATIONAL STABILITY WINDOW**. **First classified operational pressures from live PATH A (Zierota):** **`EMPYRRIA_CODEX_MASTER.md`** → **ZIEROTA EDITORIAL PRESSURE LOG — PHASE 1** (**MASTER** summary under same title).

### Governance rules (MASTER — observational stability)

- **Governance expansion waits on demonstrated need** — align with **GOVERNANCE EVOLUTION & AMENDMENT GOVERNANCE — PHASE 1** and **GOVERNANCE CONSOLIDATION & CONSTITUTIONAL INDEX — PHASE 1**.  
- **Implementation may proceed** — does **not** **silently** amend governance text.  
- **Observation ≠ immediate new locks** — record pressure first.

### No-behavior-change statement (MASTER — observational stability)

- **No** systems removed, **no** canon modified **by this lock**, **no** permissions or lifecycle **data** changed — **stabilization definitions only**.

---

## FULL ENTRY PROTOTYPE — PHASE 1

**Status:** **LOCKED (2026-05-11)** — **documentation and planning only:** conceptual **specimen** full-entry structure to **bridge** constitutional governance into **future** presentation thinking—**not** schema migration, **not** graph/relationship implementation, **not** mass rollout. **No** **`sigils.json`**, routes, discoverability, CMS, deploy, or automation changes **from this lock**.

**Purpose:** **Pressure-test** layering and **readability** ideas on **one** canonical entry narrative; **subordinate** to **CANON ANNOTATION**, **CANON ENTITY**, **CANON EVIDENCE**, and **TOP-IRON-ENDURANCE PHASE A IMPLEMENTATION** (live reference).

**Authoritative specimen layer model, presentation separation, relationship/traceability concepts, pressure-testing goals, future implementation boundary, principles, and no-behavior-change:** **`EMPYRRIA_CODEX_MASTER.md`** → **FULL ENTRY PROTOTYPE — PHASE 1**.

### Governance rules (MASTER — full entry prototype Phase 1)

- **Planning ≠ shipping** — **wireframe** and **copy** experiments stay in **docs** until **execution** locks.  
- **Authority boundaries stay visible** — **no** mockup that **merges** commentary into **doctrine** voice **without** labeling.  
- **Align with selective maturation** — **observe** friction; **do not** use prototype text to **bypass** governance expansion pause.

### No-behavior-change statement (MASTER — full entry prototype Phase 1)

- **No** entry modified **by this lock**; **no** schema changed; **no** relationships implemented; **no** graph tooling added; **no** discoverability changes; **no** runtime behavior changed — **prototype planning only**.

---

## FULL ENTRY VISUAL MOCKUP — PHASE 1

**Status:** **LOCKED (2026-05-11)** — **documentation / visual-conceptual planning only:** specimen codex-page **mockup** ideas (sketches, prose layout notes, **non-shipping** boards) for canon vs commentary vs archive vs relationships vs traceability — **not** production UI, **not** Astro/React/components, **not** CSS implementation, **not** schema/graph/discoverability/CMS/deploy changes **from this lock**.

**Purpose:** **Pressure-test** constitutional **readability** **visually**; **observe** authority hierarchy legibility and **atmospheric** balance vs **governance** clarity; **subordinate** to **FULL ENTRY PROTOTYPE — PHASE 1**, **CANON ANNOTATION**, **CANON ENTITY**, **CANON EVIDENCE**, and **AUTHORITATIVE POLICY ROOTS** (doctrine-first, atmosphere protection); **live** tone reference: **TOP-IRON-ENDURANCE PHASE A IMPLEMENTATION**.

**Authoritative visual layer model, authority signaling philosophy, commentary/relationship visualization ideas, atmospheric balance principles, pressure-testing goals, future implementation boundary, and no-behavior-change:** **`EMPYRRIA_CODEX_MASTER.md`** → **FULL ENTRY VISUAL MOCKUP — PHASE 1**.

### Governance rules (MASTER — full entry visual mockup Phase 1)

- **Sketches ≠ ship** — **no** treating **design-board** experiments as **approved** UI **without** **execution** lock + **RFC** gates.  
- **Prominence obeys authority** — **no** visual **hero** treatment for commentary, **speculation**, or **traceability** that **outranks** doctrine.  
- **Align with selective maturation** — **observe** presentation friction; **do not** **bypass** governance-stack pause with **implicit** “**we already designed it**” **pressure**.

### No-behavior-change statement (MASTER — full entry visual mockup Phase 1)

- **No** UI implemented; **no** Astro/React/components or **CSS** authored **under this lock**; **no** schema changed; **no** relationships implemented; **no** graph tooling added; **no** discoverability changes; **no** runtime behavior changed — **visual-governance planning only**.

---

## SPECIMEN ENTRY WIREFRAME — PHASE 1

**Status:** **LOCKED (2026-05-11)** — **documentation / structural wireframe planning only:** **low-fidelity** blocks-and-flow for **one** specimen codex entry — **no** production UI, **no** React/**component** architecture lock, **no** CSS or **design**/**style** system, **no** final visual identity or motion as **governance proof**, **no** schema/graph/discoverability/CMS/deploy/runtime changes **from this lock**.

**Purpose:** **Pressure-test** constitutional readability as **pure structure**; **validate** hierarchy **without** aesthetic assistance; **subordinate** to **FULL ENTRY PROTOTYPE — PHASE 1**, **complements** **FULL ENTRY VISUAL MOCKUP — PHASE 1** (skeleton vs surface); **binds** to **CANON ANNOTATION**, **CANON ENTITY**, **CANON EVIDENCE**, **AUTHORITATIVE POLICY ROOTS** (doctrine-first, sparse density); **structural** reference: **TOP-IRON-ENDURANCE PHASE A IMPLEMENTATION**.

**Authoritative structural layout model, hierarchy-first principles, commentary/archive containment, relationship/traceability structure, atmospheric-neutrality test, pressure-testing goals, future implementation boundary, and no-behavior-change:** **`EMPYRRIA_CODEX_MASTER.md`** → **SPECIMEN ENTRY WIREFRAME — PHASE 1**.

### Governance rules (MASTER — specimen entry wireframe Phase 1)

- **Blocks before chrome** — **no** treating **palette** or **motion** as **substitutes** for **weak** **region** boundaries.  
- **Regions preserve authority** — **no** **single** slab mixing **doctrine**, **commentary**, and **traceability** **without** **labeled** **zones** in **planning** sketches.  
- **Align with selective maturation** — **observe** layout friction; **do not** **force** implementation **via** **wireframe** **momentum**.

### No-behavior-change statement (MASTER — specimen entry wireframe Phase 1)

- **No** UI implemented; **no** CSS or **design**/**style** system created; **no** visual design lock established **here**; **no** schema changed; **no** relationships implemented; **no** graph tooling added; **no** discoverability changes; **no** runtime behavior changed — **structural-planning only**.

---

## CANON INGESTION PIPELINE — LOCKED

**canon source** → **structured codex entry** → **optional sigil asset** → **validation** → **lock**

Rules: source **before** `sigils.json`; no invented doctrine; no `image` path without a file under **`public/media/sigils/`**; **`npm run build`** must pass before content is treated as release-ready. Details: **`EMPYRRIA_CODEX_MASTER.md`**. **Conceptual lifecycle / stability tiers** (how material **matures** or **archives** over time): **`CONTENT GOVERNANCE MATURITY — PHASE 1`** — **definitions only**; **does not** replace live **`status`**/**`visibility`** implementation by itself. **Transition authority and escalation** (who may move material between tiers, what requires locks): **`CANON TRANSITION GOVERNANCE — PHASE 1`** — **process only**; **no** transitions executed by that document alone. **Evidence and review epistemology** (what counts as proof, interpretation vs declaration, confidence levels): **`CANON EVIDENCE & REVIEW GOVERNANCE — PHASE 1`** — **standards only**; **no** data or automation from that document alone. **Annotation & commentary** (how notes and uncertainty sit **around** canon): **`CANON ANNOTATION & COMMENTARY GOVERNANCE — PHASE 1`** — **boundaries only**; **no** commentary tooling from that document alone. **Entity relationships** (how associations/lineage are **governed conceptually**): **`CANON ENTITY RELATIONSHIP GOVERNANCE — PHASE 1`** — **semantics only**; **no** graph or **`sigils.json`** structure from that document alone. **Governance evolution & amendment** (how **locks** and **constitutional** prose **change** with **traceable** supersession): **`GOVERNANCE EVOLUTION & AMENDMENT GOVERNANCE — PHASE 1`** — **meta-definitions only**; **no** governance automation from that document alone. **Governance consolidation & constitutional index** (cross-lock **navigation**, **terminology**, **dependency** visibility): **`GOVERNANCE CONSOLIDATION & CONSTITUTIONAL INDEX — PHASE 1`** — **index only**; **does not** alter **meaning** of domain locks from that document alone. **Selective maturation pause + observational stability window** (stabilize governance **architecture**; **observe** operational friction; **canon**/content work **continues**): **`SELECTIVE MATURATION PAUSE + OBSERVATIONAL STABILITY WINDOW`** — **definitions only**; **no** implied freeze on **ingestion** beyond **existing** rules. **Full entry prototype — Phase 1** (specimen **layer**/**presentation** planning; **no** schema/graph/discoverability commitment): **`FULL ENTRY PROTOTYPE — PHASE 1`** — **planning only**. **Full entry visual mockup — Phase 1** (specimen-page **visual**/**atmospheric** governance sketches; **no** UI/CSS/React implementation): **`FULL ENTRY VISUAL MOCKUP — PHASE 1`** — **planning only**. **Specimen entry wireframe — Phase 1** (low-fidelity **structural** hierarchy / containment; **no** production UI, **no** design system): **`SPECIMEN ENTRY WIREFRAME — PHASE 1`** — **planning only**.

---

## Active development phase

**Sigil & Doctrine Library MVP** — **implementation pipeline stable**. Current bottleneck: **canon artifact quality and availability**, not the archive shell.

**Controlled content growth:** new public sigils require an approved extract in **`canon/EMPYRRIA_SIGIL_CODEX_SOURCE.md`** before **`src/data/sigils.json`**.

**CONTENT PHASE 1A — fifth entry:** **IAH-VEA** ingested **2026-05-09** (approved canon source + JSON + **`/media/sigils/iah-vea.svg`**). Further entries still require approved **`canon/EMPYRRIA_SIGIL_CODEX_SOURCE.md`** blocks before **`sigils.json`** (see **`EMPYRRIA_CODEX_MASTER.md`**).

---

## Guardrails (identity)

Do **not**: restart architecture expansion; grow philosophy/governance in active docs; add lore to JSON without source approval; integrate non-canon sigils; overdecorate UI or add FX-heavy chrome. **Restrained ceremonial archive** — symbolic clarity, meaning before decoration, **one validated artifact at a time** through the ingestion pipeline.

---

## Current next step

**Operational snapshot:** Keep **`npm run build`** as the release gate. **New public sigils** follow **`EMPYRRIA_CODEX_MASTER.md`** → **`## CANON INGESTION PIPELINE — LOCKED`** (approved **`canon/EMPYRRIA_SIGIL_CODEX_SOURCE.md`** before **`src/data/sigils.json`**). **Hosting** is **locked** on **Cloudflare Pages** (**`pages-cms-prototype`**) with **Netlify + Decap + Identity** retained for **rollback** and **higher-authority** edits — see **Checkpoints & rollback** in this file; **`## POST-MIGRATION LEGACY SYSTEM AUDIT — LOCK`** and **`## EDITORIAL SCOPE DECISION — LOCK (PATH A)`** below; full migration lock body → **`EMPYRRIA_CODEX_MASTER.md`** → **`## CLOUDFLARE PAGES MIGRATION — VALIDATED`**. **PATH A** Pages CMS evidence (including **`.pages.yml`** round-trip **`657ec94`** → **`2b699cf`**) stays under **`## PATH A GOVERNANCE FIELD HIDING — PHASE 1`** and related **`## … — PHASE`** headings here and in **`EMPYRRIA_CODEX_MASTER.md`**. **PATH A editorial surface — Phase 2B** (**`geometry`**, **`name`**, **`status`** **`hidden: true`** in **`.pages.yml`** only): **`## PATH A EDITORIAL SURFACE REFINEMENT — PHASE 2B`**. **Sigil detail readability — Phase 1A** (public **`/sigils/[slug]`** presentation only): **`## SIGIL READABILITY & VISUAL HIERARCHY — PHASE 1A`**. **Registry layer hierarchy — Phase 1B.5** (lower **Function / Classification** + **Geometry / Category** typography only): **`## REGISTRY LAYER HIERARCHY REFINEMENT — PHASE 1B.5`**. **Hero metadata hierarchy — Phase 1B.6** (**`h1`** subtitle + archival **facets** line only): **`## HERO METADATA HIERARCHY REFINEMENT — PHASE 1B.6`**.

**Index (replaces repeating each lock here):** Per-topic **rules** and **no-behavior-change** lines remain under each **`## … — LOCK` / `## … — PHASE`** section **above** in this file. **Matrices, parity notes, validation detail, and chronicle rows** → **`EMPYRRIA_CODEX_MASTER.md`** (same **`##` titles**, plus **`## Locked implementation progress`** and **`## OPERATIONAL STATE — CURRENT NEXT STEP`** for the long-form operational rollup).

**Next focus:** Optional post-migration cleanup; **Git-based** governance maturation for high-authority work; **dedicated execution lock** before any Decap/Identity retirement; **CMS modernization** (dependency / warning cleanup).

*(Deferred MVP item: `/about` page — descope or implement per `EMPYRRIA_CODEX_MASTER.md` gaps when not blocking content work.)*

---

## Build & check commands

| Command | Role |
| ------- | ---- |
| `npm run dev` | Local development |
| `npm run build` | Content validation + production build (**gate for releases**) |
| `npm run validate:content` | Validator only |
| `npx astro check` | Astro / TS static analysis |
| `npm run check:links` | Internal link check |
| `npm run preview` | Preview production build |

---

## Project rules (essential)

### Canon & content

- **Zierota** owns Empyrria canon. Do not invent sigils, doctrine, or lore on this site.
- Present approved material only; structure and UX only here.

### Code ↔ documentation

- If behavior or routes change, update **`EMPYRRIA_CODEX_MASTER.md`** in the same change when practical.
- **Sigil detail readability (Phase 1A):** presentation-only detail-page pass — **`## SIGIL READABILITY & VISUAL HIERARCHY — PHASE 1A`**; **no** implied data or CMS contract change from styling work alone.
- **Registry layer hierarchy (Phase 1B.5):** lower-band **Function / Classification / Geometry / Category** typography only — **`## REGISTRY LAYER HIERARCHY REFINEMENT — PHASE 1B.5`**; **no** Doctrine, editorial band, Underlay, or relationship-structure changes.
- **Hero metadata hierarchy (Phase 1B.6):** **`h1`** subtitle + archival **facets** line only in **`[slug].astro`** — **`## HERO METADATA HIERARCHY REFINEMENT — PHASE 1B.6`**; **no** **`SigilMeta.astro`** edits, **no** layout redesign.
- **PATH A editorial surface (Phase 2B):** **`.pages.yml`** **`hidden: true`** on **`geometry`**, **`name`**, **`status`** only — **`## PATH A EDITORIAL SURFACE REFINEMENT — PHASE 2B`**; **no** JSON/schema/public UI/Decap field removal.
- **`EMPYRRIA_MASTER.md`** holds policies, links, checkpoints summary, and this rule set.
- If MASTER and CODEX disagree on **facts**, fix the docs before continuing.

### MASTER ↔ CODEX roles

- **MASTER:** policies, links, checkpoint ids, workflow rules.
- **CODEX:** current routes/components/data summary, MVP gaps, validation checklist, implementation next step.

### Admin

- **Pages CMS** (GitHub auth, **`.pages.yml`** on **`pages-cms-prototype`**) is the **primary constrained (Zierota) editorial path** for **scoped** safe edits — **EDITORIAL SCOPE DECISION — LOCK** (**PATH A**); **not** a full admin replacement and **not** a Decap parity target (**PAGES CMS VALIDATION AUDIT — LOCK**). **Live PATH A operational pressure** (classified feedback only; **no** implied scope expansion): **ZIEROTA EDITORIAL PRESSURE LOG — PHASE 1** (**MASTER** + **CODEX**). **Public text rendering + headline ergonomics** (site presentation only): **TEXT RENDERING & DISPLAY ERGONOMICS — PHASE 1** (**MASTER** + **CODEX**). **Editorial field evolution — Phase 1** (additive **PATH A** fields + public metadata cleanup): **EDITORIAL FIELD EVOLUTION — PHASE 1** (**MASTER** + **CODEX**). **PATH A governance field hiding — Phase 1** (five **`hidden: true`** fields in **`.pages.yml`** only; **live round-trip validated PASS** **`657ec94`** → **`2b699cf`** — **CODEX** §8): **PATH A GOVERNANCE FIELD HIDING — PHASE 1** (**MASTER** + **CODEX**). **PATH A editorial ergonomics — Phase 2A** (**`.pages.yml`** **field order** only — **`image`** after **`title`**; **`placeOfOrigin`** before **`loreContext`**): **PATH A EDITORIAL ERGONOMICS — PHASE 2A** (**MASTER** + **CODEX**). **PATH A editorial surface refinement — Phase 2B** (**`.pages.yml`** **`hidden: true`** on **`geometry`**, **`name`**, **`status`** only): **PATH A EDITORIAL SURFACE REFINEMENT — PHASE 2B** (**MASTER** + **CODEX**). **Decap** at **`/admin`** with **Netlify Identity** + **Git Gateway** remains **higher-authority editorial**, **legacy rollback**, and **admin continuity** — see **`public/admin/config.yml`**, **`EMPYRRIA_CODEX_MASTER.md`** (**EDITORIAL SCOPE** + **ZIEROTA ADMIN ACCESS — PHASE 1** + validation audit), and archive for field wiring. **Canon / archive state vocabulary** (what “deprecated” or “provisional” **means** in governance): **CONTENT GOVERNANCE MATURITY — PHASE 1** — **documentation only**. **Who may execute tier moves and under what escalation:** **CANON TRANSITION GOVERNANCE — PHASE 1** — **process only** (**PATH A** cannot silently promote/deprecate/archive). **What counts as evidence for canon confidence and how interpretation differs from declaration:** **CANON EVIDENCE & REVIEW GOVERNANCE — PHASE 1** — **epistemology only**. **How commentary and notes may surround canon without mutating authority:** **CANON ANNOTATION & COMMENTARY GOVERNANCE — PHASE 1** — **annotation rules only** (no tooling implemented). **How conceptual links between sigils/doctrine/layers relate without implying equal canon authority:** **CANON ENTITY RELATIONSHIP GOVERNANCE — PHASE 1** — **relationship semantics only** (no graph).

---

## SIMPLIFY-1 note

Documentation was split: active masters refocused on the library MVP; long philosophy/governance and verbatim historical bodies moved to **`EMPYRRIA_PHILOSOPHY_ARCHIVE.md`** (includes former **`EMPYRRIA_CODEX_MASTER.md`** head and tail and the pre-SIMPLIFY **`EMPYRRIA_MASTER.md`**).
