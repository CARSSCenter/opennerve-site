---
title: Hardware contributions
---

# Hardware contributions

This page is intentionally a stub of open questions. None
of these has been decided; do not treat anything below as settled process.
If your work touches one of these, raise it with the team rather than
resolving it unilaterally.

## What counts as a "hardware contribution"?

- Does a change to a KiCad schematic/layout count the same as a change to a
  mechanical CAD model (STEP/SolidWorks) or a fabrication protocol document?
  They likely need different review, but that's undecided.
- Where's the line between a hardware contribution and a firmware
  contribution, for something like a PCB revision that also requires a
  firmware register-map change?
- Does a fabrication protocol PDF (e.g. the Parylene cuff's fabrication and
  testing documents) count as documentation-only, or as a hardware
  contribution subject to the same review as a design file?

## How does a PR against a design file get reviewed?

- KiCad and SolidWorks/STEP files are binary or semi-binary — a standard
  `git diff` doesn't show a meaningful change. What review artifact is
  expected (rendered diff images? a written change summary? a re-run of
  specific checks)?
- Who has the domain expertise and authority to approve a design change per
  component (electrical vs. mechanical vs. materials/process)? Is this
  per-institution (USC / Med-Ally / Medipace) or a cross-consortium review?
- Per this site's maturity policy, "a design change resets evidence claims to
  the last re-verified revision." Who is responsible for re-verifying evidence after
  a hardware PR merges, and what's the minimum bar before the new revision
  can carry any Evidence (E) level at all?

## What must a contributor supply?

- For a new or modified fabrication process: what's the minimum required to
  reach Documentation level D2 ("complete package: schematics, layout, fab
  drawings, BOM, process and test procedures")? Is there a checklist, or does
  a maintainer judge case by case?
- Does a hardware PR need to state which hardware revision it targets and
  update the component maturity table, or is that maintained separately?

## Licensing

All repos are currently CC-BY-4.0. Does a hardware
contribution need any additional agreement (e.g. a contributor license
agreement) beyond what CC-BY-4.0 already implies? This is unresolved and may
be revisited on a repo-by-repo basis.
