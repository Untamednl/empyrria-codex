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

## ROLLBACK RUNBOOK — LOCKED

The rollback system must remain:

- lightweight
- Git-centered
- deterministic
- stress-safe
- documentation-driven

### Purpose

- Rollback exists to restore previously validated stable states.
- Rollback protects canon integrity, deployment stability, and architectural safety.
- Rollback procedures must be executable under stress without improvisation.
- Rollback depends on official checkpoints.

A rollback is not failure.  
A rollback is controlled recovery.

### Rollback Triggers

Valid rollback triggers:

- broken deployment
- broken navigation
- corrupted content
- invalid CMS save
- failed infrastructure hardening step
- failed release validation
- unstable architecture change
- critical build instability
- accidental canon corruption
- unrecoverable regression

Minor visual imperfections alone do not automatically justify rollback unless they affect usability or canon clarity.

### Rollback Authority

- Rollback decisions belong to governance authority.
- Rollback should not occur impulsively.
- Rollback must reference a known stable checkpoint.
- Architecture-changing rollbacks require documentation review.
- Canon-related rollback decisions prioritize content integrity first.

### Rollback Workflow

Locked sequence:

Problem detected  
→ issue verified  
→ severity evaluated  
→ rollback checkpoint selected  
→ rollback executed  
→ validation rerun  
→ rollback documented  
→ system stabilized  
→ development resumes

No rollback is complete without validation.

### Rollback Execution

Standard Git-centered rollback process:

1. identify rollback checkpoint/tag
2. create safety branch if needed
3. restore stable state from checkpoint
4. rerun:
   - `npm run build`
   - `npx astro check`
   - required manual validation
5. verify rollback stability
6. document rollback event
7. lock recovered state before resuming development

Recovered states must become stable before new changes resume.

### Validation After Rollback

Required post-rollback validation:

- build passes
- astro check passes
- affected routes tested
- navigation verified
- codex integrity verified
- CMS/editorial flow verified if affected
- Cloudflare parity verified if deployment-related

Rollback without validation is incomplete recovery.

### Rollback Documentation

Every rollback event must record:

- rollback date
- rollback reason
- triggering failure
- restored checkpoint
- validation result
- known remaining issues
- next planned corrective step

If not documented, the rollback does not officially exist.

### Relationship to Checkpoints

- Checkpoints are rollback anchors.
- Rollback safety depends on checkpoint quality.
- Unstable checkpoints must never be used as rollback targets.
- Release candidate checkpoints should be preferred for deployment recovery.

### Constraints

- do not overengineer rollback systems
- do not introduce external rollback infrastructure
- Git remains the recovery source of truth
- rollback systems must remain understandable after long project gaps
- simplicity and recoverability are prioritized over automation complexity

### Core Principle

The rollback system exists to make recovery safer than panic-driven fixing.

## BUILD-TIME CONTENT VALIDATOR — LOCKED

Purpose:
Define the architecture, scope, constraints, and philosophy of the validator system before implementation.

The validator system exists to:

- prevent invalid content from shipping
- detect structural integrity failures early
- protect canon integrity
- reduce manual error detection burden
- reinforce checkpoint and rollback reliability

The validator system is preventative infrastructure, not runtime functionality.

### Core Principle

The validator must make invalid states harder to ship than correct states.

Validation should fail early, clearly, and deterministically.

### Validator Scope (Initial Phase)

The first validator version must remain intentionally small and focused.

Initial validation targets:

- required field existence
- slug uniqueness
- slug format validation
- empty critical fields
- image path existence
- malformed content structure
- invalid route-driving content

The validator should only check deterministic structural integrity during the first implementation phase.

### Validator Non-Goals

The validator must NOT initially include:

- AI analysis
- lore interpretation
- writing quality analysis
- visual design analysis
- semantic canon interpretation
- deployment infrastructure
- external APIs
- database systems
- runtime monitoring

The validator protects structure and recoverability first.

### Validator Philosophy

Defined principles:

- simple validators are preferred over complex systems
- deterministic validation is preferred over heuristic behavior
- local validation is preferred over cloud dependency
- explicit errors are preferred over silent correction
- validator failures must be understandable after long project gaps

The validator must remain understandable by a future developer returning after months away.

### Failure Behavior

If validation fails:

- build progression should stop
- errors must be explicit
- failures must identify:
  - affected entity
  - affected field
  - reason for failure
  - recommended correction

Silent validator failure is unacceptable.

### Relationship to Governance

- checkpoints depend on validator trustworthiness
- rollback safety improves when validator coverage improves
- validator integrity supports canon safety
- validator expansion must remain governance-controlled

Validators are governance infrastructure.

### Expansion Strategy

Future validator phases may later include:

- route manifest validation
- broken link detection
- orphan detection
- relationship validation
- content graph validation
- smoke tests
- deployment verification

These are intentionally deferred.

The validator system must grow incrementally and only when justified.

### Constraints

- do not overengineer the validator
- do not introduce runtime dependency
- do not add external infrastructure
- do not slow development unnecessarily
- Git and local validation remain primary
- validator execution must remain lightweight

### Initial Technical Direction

- validator will run before build
- validator should be executable through npm scripts
- validator should operate on local project files
- validator should produce deterministic terminal output
- validator should fail with non-zero exit code when integrity violations exist

The validator system should integrate naturally into the existing Git-centered workflow.

### Core Locked Principle

A validator should prevent preventable mistakes without becoming a source of unnecessary complexity.

## BROKEN LINK DETECTION — LOCKED

Purpose:
Define the scope, constraints, and philosophy of broken link detection before implementation.

The broken link detection system exists to:

- protect navigation integrity
- detect broken internal links
- detect broken static asset references
- reduce manual navigation testing burden
- support checkpoint and rollback trust
- prevent route drift as the Codex expands

Broken link detection is validation infrastructure, not runtime functionality.

### Core Principle

Broken link detection must make navigation failures visible before deployment.

It should fail clearly, deterministically, and locally.

### Initial Scope

Initial broken link detection should check:

- generated HTML output after build
- internal links between generated pages
- relative internal links
- root-relative internal links
- static asset links when practical
- missing local page targets
- missing local asset targets

The first version should focus on generated site integrity only.

### Non-Goals

Broken link detection must NOT initially include:

- external URL checking
- SEO crawling
- performance auditing
- accessibility auditing
- visual regression testing
- deployment monitoring
- AI analysis
- canon/lore validation

External link validation may be added later, but it is intentionally deferred.

### Failure Behavior

If broken links are found:

- validation must fail
- output must identify:
  - source file/page
  - broken link
  - reason
  - recommended correction

Silent broken-link failures are unacceptable.

### Relationship to Existing Validator

- the build-time content validator protects content structure
- broken link detection protects generated navigation integrity
- both systems support checkpoints, rollback safety, and release confidence
- broken link detection should run after build, because it checks generated output

The two systems are complementary, not overlapping.

### Initial Technical Direction

- detection should run after Astro build
- detection should inspect local `dist/`
- detection should be executable through npm scripts
- detection should be dependency-light
- detection should produce deterministic terminal output
- detection should exit non-zero on broken links

Recommended script direction:

- `scripts/check-links.mjs`
- npm script: `check:links`

### Expansion Strategy

Future phases MAY include:

- external link validation
- route manifest validation
- orphan page detection
- asset reference validation improvements
- CI integration
- preview deployment validation

These are deferred until basic generated-output validation is trusted.

### Constraints

- do not overengineer link checking
- do not introduce external services
- do not add runtime dependencies
- do not crawl the public web initially
- keep checks local and reproducible
- preserve manual UX/navigation review as a separate layer

### Core Locked Principle

Broken link detection should protect the Codex flow without turning validation into a heavy crawler system.

## PREVIEW DEPLOYMENT GOVERNANCE — LOCKED

Purpose:
Define how preview deployments should be used as production-like validation surfaces before public release or production deployment.

The preview deployment system exists to:

- reduce localhost-only confidence
- provide shareable review URLs
- validate built output in a hosted environment
- support Zierota review before public release
- strengthen checkpoint and rollback confidence
- catch deployment/environment issues before production

Preview deployments are validation infrastructure, not canon approval.

### Core Principle

Preview deployments must make hosted-environment issues visible before production release.

A preview deployment is not considered trusted until it passes validation.

### Preview Deployment Scope

Initial preview deployment governance covers:

- branch-based preview deployments
- deployment preview URLs
- hosted route validation
- visual/manual review
- link checker validation before deployment
- content validator validation before deployment
- Zierota review when public-facing content changes

Preview deployment validates the built site in an environment closer to production than localhost.

### Non-Goals

Preview deployment governance must NOT initially include:

- automated production release
- complex CI/CD orchestration
- multi-environment enterprise workflow
- database staging
- analytics integration
- uptime monitoring
- full visual regression testing
- automatic canon approval

Preview deployments support review and validation, but do not replace governance.

### Preview Validation Requirements

A preview deployment is only considered valid if:

- `npm run build` passes
- `npm run check:links` passes
- `npx astro check` passes
- affected routes are manually reviewed
- navigation flow is manually tested
- hosted preview URL loads correctly
- no broken public paths are observed
- public-facing content changes receive Zierota review when required

A preview URL alone is not validation.

### Relationship to Checkpoints

- checkpoints define known-good project states
- preview deployments validate those states in hosted form
- release candidate checkpoints may reference preview URLs
- failed previews must not become checkpoints
- preview validation improves rollback confidence

### Relationship to Rollback

- preview deployment failure should trigger investigation before production release
- rollback is only needed if bad changes were already merged or released
- failed preview work should usually be fixed forward or reverted before production
- rollback checkpoints remain recovery anchors

### Relationship to Validation Tools

- the build-time content validator protects content structure before build
- the broken link checker protects generated navigation after build
- preview deployment validates hosted behavior after local validation
- manual visual/UX review remains required because automation cannot judge atmosphere and intent

The three layers are complementary, not overlapping.

### Governance Rules

- Do not treat preview deployment success as canon approval.
- Do not skip local validation because a preview URL exists.
- Do not ship from preview if validation failed.
- Do not promote preview work without documentation update.
- Public-facing canon/content changes require Zierota review before release.
- Deployment validation must remain lightweight and understandable.

### Future Integration

Future phases MAY include:

- Netlify deploy previews
- Cloudflare Pages previews
- GitHub Actions validation
- release candidate checkpoints
- smoke tests
- deployment verification scripts
- preview URL logging in checkpoint entries

These must be introduced incrementally.

### Constraints

- do not overengineer deployment workflow
- do not introduce complex CI/CD before needed
- do not add external monitoring yet
- do not automate canon approval
- keep Git as the source of truth
- keep preview deployment as validation support, not control authority

### Core Locked Principle

Preview deployments exist to prove that locally validated work survives contact with a hosted environment.

## PREVIEW DEPLOYMENT ARCHITECTURE PLAN

This section is planning and architecture guidance only. It is not locked governance; boundaries remain defined in **PREVIEW DEPLOYMENT GOVERNANCE — LOCKED**.

### Purpose

This section defines the intended preview deployment architecture before implementation begins.

Governance defines boundaries (what must never happen, what counts as valid); architecture defines execution shape (how work flows through validation and hosting).

The goal is lightweight production-parity validation without enterprise overengineering.

### Preferred Initial Provider Direction

Netlify Deploy Previews and Cloudflare Pages Previews are the preferred initial candidates: both support branch preview URLs and both support static Astro deployments cleanly.

Provider choice is not locked yet. Avoid provider lock-in assumptions during early implementation so the workflow can adapt without rewriting governance.

### Current Deployment State

Current reality:

- localhost validation workflow exists
- Cloudflare tunnel has already been used manually for external review
- no official preview deployment pipeline exists yet
- no branch-based hosted preview workflow exists yet
- no deployment automation exists yet
- current workflow remains manual-first

### Intended Deployment Flow

Intended lightweight deployment lifecycle:

1. local validation
2. `npm run build`
3. `npm run check:links`
4. `npx astro check`
5. preview deployment generation
6. hosted manual review
7. navigation validation
8. Zierota review when applicable
9. release approval
10. production deployment (future phase)

Production deployment governance is intentionally deferred.

### Preview URL Lifecycle

Preview URLs are temporary validation environments. They should map to branches or explicit review states. They are not permanent canon references.

Checkpoint entries may later reference preview URLs as evidence; production URLs remain authoritative for what actually shipped.

### Branch / Workflow Philosophy

Feature work should remain isolated until validated. Preview deployments should validate merge candidates before release. Deployment validation happens after local validation, not instead of it.

Branch strategy should remain lightweight; avoid enterprise Git-flow complexity unless a future step justifies it.

### Validation Layers

Layered model:

- local content validation
- local build validation
- local generated-output validation
- hosted preview validation
- manual UX / atmosphere review
- future production validation

Each layer exists because different failure classes appear at different stages.

### Manual vs Automated Responsibility

Automation should handle deterministic checks, structural validation, generated-link validation, and deployment generation where those steps are repeatable and low-risk.

Humans must still handle atmosphere, readability, narrative consistency, visual cohesion, canon approval, and experiential quality.

### Deferred Future Expansion

Deferred items include:

- GitHub Actions
- automatic preview generation
- deployment status badges
- smoke-test automation
- release candidate workflows
- protected deployment branches
- production deployment governance
- deployment verification scripts

Future deployment automation must remain incremental and reversible.

### Risks

Risks to manage consciously:

- false confidence from preview URLs alone
- provider-specific behavior drift relative to localhost or production
- accidental coupling of the codebase to one deployment path
- overautomation that hides failures or slows iteration
- environment inconsistency between preview and production
- manual review fatigue under repeated previews
- deployment sprawl (many stale previews or unclear ownership)

### Core Planning Principle

The deployment system should remain simpler than the project it protects.

## PREVIEW DEPLOYMENT IMPLEMENTATION PLAN

This section is planning only. It is not locked governance; boundaries remain in **PREVIEW DEPLOYMENT GOVERNANCE — LOCKED**. Architecture shape remains in **PREVIEW DEPLOYMENT ARCHITECTURE PLAN**.

### Purpose

This section defines the intended implementation sequence for preview deployments before provider setup or automation begins.

The goal is predictable deployment onboarding with minimal risk. Implementation should remain reversible and incremental.

### Recommended Initial Strategy

Begin with a single-provider deployment workflow. Avoid multi-provider complexity initially. Keep implementation manual-first. Validate provider behavior before introducing automation.

The first deployment system should prioritize clarity over sophistication.

### Recommended Initial Provider

Preferred first implementation: **Netlify Deploy Previews**.

Reasons:

- extremely simple Astro static deployment
- automatic branch preview support
- minimal configuration overhead
- easy rollback/redeploy behavior
- clear preview URL handling
- lightweight onboarding
- suitable for manual-first governance

Cloudflare Pages remains a valid future alternative and comparison target.

### Expected Initial Workflow

Intended operator sequence:

1. local development
2. local validation
   - `npm run build`
   - `npm run check:links`
   - `npx astro check`
3. push branch
4. preview deployment generated
5. preview URL reviewed
6. hosted navigation tested
7. visual/UX review
8. Zierota review when applicable
9. merge approval
10. production release (future phase)

### Expected Repository Relationship

Git remains the source of truth. Deployments are artifacts of Git state. Preview environments should derive from branch state.

Deployment systems must not become canon authority. Deployment provider configuration should remain minimal and documented.

### Recommended Initial Branch Philosophy

Use lightweight feature branches. Prefer small isolated changes. Validate before merge. Avoid long-lived branch divergence and enterprise branching complexity.

### Preview Validation Checklist

**Before preview review:**

- `npm run build` passes
- `npm run check:links` passes
- `npx astro check` passes

**During preview review:**

- homepage loads
- showcase loads
- codex loads
- sigil pages load
- navigation loops work
- images load correctly
- no obvious layout breakage
- mobile sanity spot-check
- no broken public paths

**After preview review:**

- validation documented
- known issues documented
- approval state recorded

### Rollback Interaction

Preview deployment failures should normally be fixed before merge. Rollback checkpoints remain recovery anchors. Deployment rollback should remain Git-centered.

Deployment state must never become more authoritative than repository state.

### Initial Constraints

- do not add CI/CD pipelines yet
- do not automate production deployment yet
- do not add secrets-heavy infrastructure
- do not add analytics tooling
- do not introduce provider abstraction layers
- do not add environment complexity prematurely

### Future Promotion Path

Likely future sequence:

1. manual preview deployment
2. trusted preview workflow
3. optional automated preview validation
4. release candidate workflow
5. production deployment governance
6. deployment automation refinement

Every promotion step must remain reversible.

### Risks

Risks to watch:

- deployment-provider dependency drift
- false confidence from hosted previews
- merge-before-validation behavior
- preview URL sprawl
- deployment fatigue
- undocumented deployment states
- accidental production coupling

### Core Planning Principle

Deployment infrastructure should increase confidence without increasing system fragility.

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

### checkpoint-2026-05-06-infrastructure-hardening

Type:  
Infrastructure Checkpoint

Date:  
2026-05-06

Linked Steps:

- Step 3 — Rollback Runbook
- Step 4A — Build-Time Content Validator Design Lock
- Step 4B — Implement Minimal Build-Time Content Validator
- Step 4C — Validator Failure Test
- Step 5B — Minimal Broken Link Detection
- Step 5C — Validator / Link Checker Failure Test

Validation State:

- Fully validated

Stable Characteristics:

- rollback governance locked
- deterministic rollback workflow documented
- build-time content validator active
- build blocks invalid content
- generated-output broken link detection active
- broken navigation detection verified
- success/failure/recovery validation paths confirmed
- deterministic validator and link-checker output formats established
- infrastructure hardening workflow validated end-to-end

Known Limitations:

- broken link detection is still manual-post-build and not yet integrated into build pipeline
- external URL validation intentionally deferred
- anchor validation intentionally deferred
- CSS url() validation intentionally deferred
- visual regression testing not implemented
- route manifest validation not implemented

Next Planned Step:  
STEP 6 — Preview Deployment Governance

Recovery Value:

Stable recovery point before deployment-layer hardening and preview-environment expansion.
