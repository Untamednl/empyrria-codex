# EMPYRRIA MASTER

**Empyrria Sigil Codex** — public **Empyrria Sigil & Doctrine Library**: static Astro site with searchable, filterable, sortable sigil cards and per-sigil detail views backed by `src/data/sigils.json`.

**Philosophy/governance expansion has been archived and is no longer the active development driver. The active project focus is the practical Sigil & Doctrine Library MVP.**

---

## MVP goal

Deliver a fast, readable library experience for approved Empyrria sigil doctrine and system context: browse, search, filter, sort, open detail pages — without inventing canon or restructuring lore.

---

## Links

| Resource | URL |
| -------- | --- |
| **Live site** | https://empyrria-codex.netlify.app |
| **GitHub** | https://github.com/Untamednl/empyrria-codex |
| **Implementation detail / MVP tracking** | `EMPYRRIA_CODEX_MASTER.md` |
| **Historical philosophy, long checkpoints, step logs, pre-SIMPLIFY masters** | `EMPYRRIA_PHILOSOPHY_ARCHIVE.md` |

---

## Checkpoints & rollback (active summary)

**Primary release candidate (current):** `checkpoint-2026-05-07-release-candidate-1` (RC1).

**Deployment rollback anchor:** `checkpoint-2026-05-07-first-hosted-deployment`.

Use Git tags / history with these ids for recovery. Full checkpoint narratives, governance consolidations, and older step references live in **`EMPYRRIA_PHILOSOPHY_ARCHIVE.md`** alongside the archived master bodies — **do not delete that file**; it preserves rollback context and project history.

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

## CANON INGESTION PIPELINE — LOCKED

**canon source** → **structured codex entry** → **optional sigil asset** → **validation** → **lock**

Rules: source **before** `sigils.json`; no invented doctrine; no `image` path without a file under **`public/media/sigils/`**; **`npm run build`** must pass before content is treated as release-ready. Details: **`EMPYRRIA_CODEX_MASTER.md`**.

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

**Operational:** maintain build discipline; next canon adds follow **`EMPYRRIA_CODEX_MASTER.md`** ingestion pipeline. **IAH-VEA** live ingestion **locked** (**2026-05-09**).

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
- **`EMPYRRIA_MASTER.md`** holds policies, links, checkpoints summary, and this rule set.
- If MASTER and CODEX disagree on **facts**, fix the docs before continuing.

### MASTER ↔ CODEX roles

- **MASTER:** policies, links, checkpoint ids, workflow rules.
- **CODEX:** current routes/components/data summary, MVP gaps, validation checklist, implementation next step.

### Admin

- Decap CMS at `/admin`; production Identity/Git Gateway deferred per historical plan — see archive and `public/admin/config.yml` for field wiring.

---

## SIMPLIFY-1 note

Documentation was split: active masters refocused on the library MVP; long philosophy/governance and verbatim historical bodies moved to **`EMPYRRIA_PHILOSOPHY_ARCHIVE.md`** (includes former **`EMPYRRIA_CODEX_MASTER.md`** head and tail and the pre-SIMPLIFY **`EMPYRRIA_MASTER.md`**).
