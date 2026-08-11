---
title: Maturity level definitions
---

# Maturity level definitions

Each component is assigned maturity levels based on the evidence collected / what scenarios it has been used in and how ready it is for manufacturing. Evidence and Manufacturability are independent ratings, and are not intended to combine in any way. Manufacturability does encompass both technological readiness (can this be mass-manufactured with existing technology?) and open-source documentation (is the documentation on the OpenNerve repository sufficient for manufacturability?).


## Evidence (E) — what is the highest level use by this component so far?

| Level | Meaning |
|---|---|
| E0 | None — concept only |
| E1 | Bench — electrical/mechanical characterization |
| E2 | Acute in vivo |
| E3 | Chronic in vivo |
| E4 | GLP animal studies, safety testing, and/or biocompatibility testing |
| E5 | Clinical — human use under IDE or equivalent |

## Manufacturing readiness (M)

| Level | Meaning |
|---|---|
| M0 | Bespoke — hand-made or custom made in laboratory setting, no manufacturing protocol released |
| M1 | Lab reproducible — research fabrication, mfg protocol and source files released |
| M2 | Manufacturable — manufacturing can be outsourced to multiple suppliers, if not under QMS. Source files available |
| M3 | GMP-capable — capable of being built inder a QMS, but some manufacturer-specific engineering work may be necessary before production, or full manufacturing protocol not yet released |
| M4 | GMP-ready — all design files and protocols released, design can be entered into QMS and manufactured without major design or engineering work |

## Rules and requests for updating maturity levels

- Level change requests will be approved by project maintainers.
- Please link a claim to its evidence (protocol, report, or
  publication).

!!! note "Standing disclaimer"
    These levels describe testing history and documentation state. They are
    not regulatory clearance and not a safety endorsement. See [Regulatory status and disclaimers](../regulatory/status.md) for more information.
