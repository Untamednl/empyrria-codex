# EMPYRRIA MASTER

> Primary policy document.  
> Detailed step log: see EMPYRRIA_CODEX_MASTER.md

## Project overview & state

Empyrria Sigil Codex in this repository: static Astro codex, `src/data/sigils.json`, JSON schema, Decap CMS under `/admin` (`public/admin/`), UI, and Zierota/canon workflow—as implemented in the codebase.

**Current system state:**

- Working Astro site
- Single JSON sigil data model (locked)
- Decap CMS editing flow (stable)
- Custom preview helper (non-persistent)
- Showcase page (presentation layer)
- Codex layer introduced (What is a Sigil)
- External sharing via tunnel (validated)

### 🔍 CODE ↔ DOC ALIGNMENT RULE (LOCKED)

All documentation must reflect the actual codebase state of the Empyrria Sigil Codex.

Rules:

- If code changes, the .md must be updated in the same step
- If .md does not match code, the .md is considered invalid
- If something is not written in the .md, it does not exist
- No hidden decisions or mental-only state
- Every step must end with a documentation update

Workflow:

1. Plan change
2. Implement change
3. Validate (build / checks)
4. Update .md with:
   - what changed
   - current state
   - next step

Violation handling:

- If mismatch is detected, STOP work
- Fix the .md before continuing

Scope:

- Applies to CMS config, schema, JSON data, UI, and workflow

Result:

`EMPYRRIA_MASTER.md` becomes the single source of truth for the project.

### 🧭 MASTER ↔ CODEX RESPONSIBILITY RULE (LOCKED)

`EMPYRRIA_MASTER.md` and `EMPYRRIA_CODEX_MASTER.md` have separate responsibilities.

`EMPYRRIA_MASTER.md` is for:

- project rules
- architecture decisions
- workflow policies
- locked constraints
- source-of-truth definitions
- documentation rules

`EMPYRRIA_CODEX_MASTER.md` is for:

- step history
- implementation logs
- validation results
- changelog entries
- known issues
- next-step tracking
- practical project progress

Rule:

- If behavior changes → update `EMPYRRIA_CODEX_MASTER.md`
- If rules, architecture, workflow, or constraints change → update `EMPYRRIA_MASTER.md`
- If both change → update both
- If unsure → update CODEX first, then add a MASTER note only if the change becomes a rule

Violation handling:

- If MASTER and CODEX disagree, stop work
- Resolve the mismatch before continuing
- MASTER wins for rules
- CODEX wins for latest implementation state

Result:

The two-document system is locked and cannot drift silently.

## CHECKPOINT SYSTEM — LOCKED

Checkpoints are a locked governance mechanism for engineering stability and recovery.

### 1. Purpose

Checkpoints are formally validated, recoverable project states used for:

- rollback safety
- long-gap continuity
- experimentation safety
- release stability
- governance clarity

Checkpoints are internal engineering stability markers, not public releases by default.

### 2. Checkpoint definition

A checkpoint is valid only if all required conditions are met:

- implementation is complete
- validation is complete
- required manual testing is complete
- `npm run build` passes
- `npx astro check` passes
- required documentation is updated
- current step is locked
- known limitations are documented
- next step is identified

If a state is not fully validated and documented, it is not a checkpoint.

### 3. Checkpoint types

Defined checkpoint types:

- Milestone Checkpoint
- Rollback Checkpoint
- Architecture Lock Checkpoint
- Release Candidate Checkpoint
- Recovery Checkpoint

### 4. Naming convention

Locked checkpoint naming format:

`checkpoint-YYYY-MM-DD-short-description`

Examples:

- `checkpoint-2026-05-06-step28-codex-loop`
- `checkpoint-2026-05-06-pre-doc-split`
- `checkpoint-2026-05-06-release-candidate-v1`

Rules:

- lowercase only
- hyphen-separated
- short but descriptive
- must reflect the actual stable state

### 5. Required checkpoint contents

Every checkpoint must include:

- Git commit
- Git tag
- checkpoint name
- checkpoint type
- date
- validation state
- known limitations
- linked step(s)
- next planned step

Optional:

- deployment URL
- preview deployment
- screenshot/archive reference

### 6. Checkpoint workflow

Locked flow:

Implementation  
→ Validation  
→ Documentation update  
→ Checkpoint creation  
→ Git tag  
→ Optional deployment/release validation  
→ Continue development

### 7. Checkpoint rules

- No checkpoint may be created from unvalidated work.
- Experimental states are not checkpoints.
- A checkpoint must be reproducible from Git.
- A checkpoint must be understandable after long project gaps.
- Checkpoints are part of governance, not just source control.
- Major workflow/architecture changes should create rollback checkpoints first.
- Release candidate checkpoints should always include manual navigation testing.

### 8. Relationship to rollback system

- Rollback systems depend on checkpoints.
- Checkpoints are recovery anchors.
- Rollback procedures will be formally defined later.

### 9. Future integration note

Future systems may integrate checkpoints with:

- preview deployments
- release freezes
- automated validation
- smoke tests
- deployment verification

The checkpoint system itself remains intentionally lightweight and Git-centered.

### 10. Constraints

- Do not overengineer the checkpoint system.
- Do not introduce databases or external services.
- Git remains the source of truth.
- Simplicity and recoverability are prioritized over tooling complexity.

## OFFICIAL CHECKPOINTS — LOCKED

### checkpoint-2026-05-06-step28-codex-loop

Type:  
Milestone Checkpoint

Date:  
2026-05-06

Linked Steps:

- Step 26 — Link System Architecture into navigation flow
- Step 27 — Codex Hub (/codex index page)
- Step 28 — Codex Back-Link Integration

Validation State:

- `npm run build` — pass
- `npx astro check` — pass
- manual localhost navigation validation — pass
- Cloudflare parity validation — pass
- hard refresh validation — pass

Stable Characteristics:

- Codex loop fully navigable
- showcase → codex flow stable
- codex hub operational
- bidirectional codex navigation operational
- documentation aligned
- governance system stabilized for hardening phase start

Known Limitations:

- no automated validation yet
- no rollback runbook yet
- no preview deployment system yet
- no build-time content validation yet

Next Planned Step:  
STEP 3 — ROLLBACK RUNBOOK — LOCKED

Recovery Value:

This checkpoint is considered the first formally governed stable recovery state of the modern Codex navigation architecture.
