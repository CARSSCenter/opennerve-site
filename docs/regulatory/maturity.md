---
title: Maturity level definitions
---

# Maturity level definitions

Three independent axes, plus a separate availability field. **Always shown
all three together; never collapsed into a single score** — a composite
would hide exactly the information that matters to a reader deciding whether
to build on a component.

## Documentation (D) — can a third party reproduce this?

| Level | Meaning |
|---|---|
| D0 | Concept — described, no releasable design files |
| D1 | Partial — some files published; gaps block reproduction |
| D2 | Reproducible — complete package: schematics, layout, fab drawings, BOM, process and test procedures |
| D3 | Released — D2 plus versioned, tagged, DOI'd, with changelog |

## Evidence (E) — what has this revision survived?

| Level | Meaning |
|---|---|
| E0 | None — concept only |
| E1 | Bench — electrical/mechanical characterization |
| E2 | Acute in vivo |
| E3 | Chronic in vivo — must state species and duration |
| E4 | GLP safety / biocompatibility testing |
| E5 | Clinical — human use under IDE or equivalent; must name the study |

## Manufacturing readiness (M)

| Level | Meaning |
|---|---|
| M0 | Lab build — research fabrication, no quality system |
| M1 | Pilot — controlled, documented process; not under certified QMS |
| M2 | GMP-capable — a named supplier can build under a quality system |
| M3 | GMP-built — units produced under QMS with device history records |

## Availability (separate field, not a maturity level)

Files only · Purchasable (name or link source) · Fabricate-to-order (name the
vendor) · Not currently available

## Rules

- Every E-level claim links to its evidence (protocol, report, or
  publication).
- Every component page carries **Applies to revision** and **Last reviewed**
  fields.
- A design change resets evidence claims to the last re-verified revision.
- Levels are assigned by project maintainers. This must happen before launch.

!!! note "Standing disclaimer"
    These levels describe testing history and documentation state. They are
    not regulatory clearance and not a safety endorsement.
