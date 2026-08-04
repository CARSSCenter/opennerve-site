---
title: Components — overview & maturity
---

# Components: overview and maturity

!!! warning "Levels not yet assigned"
    Every cell below is unfilled. Per `CLAUDE.md` §6, an unfilled cell is
    better than a wrong one — do not treat a blank as "low" or "zero."
    Levels are assigned by project maintainers and must be recorded before
    this site is treated as authoritative.

Three independent axes, always shown separately — never collapsed into one
score, because a composite hides exactly the information this table exists to
surface. Definitions: [Maturity level definitions](../regulatory/maturity.md).

| Component | Repo | Documentation (D) | Evidence (E) | Manufacturing (M) | Availability |
|---|---|---|---|---|---|
| [Implantable Pulse Generator](ipg.md) — [Gen2](ipg-gen2.md) / [Gen1](ipg-gen1.md) | [OpenNerve-Implantable-Pulse-Generator](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator) | ? | ? | ? | ? |
| [Development board](dev-board.md) | [OpenNerve-Implantable-Pulse-Generator](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator) | ? | ? | ? | Purchasable — contact the consortium |
| [Standard Leads](standard-leads.md) | [OpenNerve-Standard-Leads](https://github.com/CARSSCenter/OpenNerve-Standard-Leads) | ? | ? | ? | ? |
| [Sub-mm Parylene Cuff](parylene-cuff.md) | [Sub-mm-Parylene-Cuff-Electrode](https://github.com/CARSSCenter/Sub-mm-Parylene-Cuff-Electrode) | ? | ? | ? | ? |
| [Charger](charger.md) | [OpenNerve-Charger](https://github.com/CARSSCenter/OpenNerve-Charger) | ? | ? | ? | ? |
| [Mechanical Sensors](mechanical-sensors.md) | [Mechanical-Sensors](https://github.com/CARSSCenter/Mechanical-Sensors) | ? | ? | ? | ? |
| [Chemical Sensors](chemical-sensors.md) | [Chemical-Sensors](https://github.com/CARSSCenter/Chemical-Sensors) | ? | ? | ? | ? |
| [Windows app (ONrecorder)](../software/windows.md) | [OpenNerve-Windows-App](https://github.com/CARSSCenter/OpenNerve-Windows-App) | ? | ? | ? | ? |
| [Android app](../software/android.md) | [OpenNerve-Android-App](https://github.com/CARSSCenter/OpenNerve-Android-App) | ? | ? | ? | ? |

Mechanical Sensors and Chemical Sensors were added to the site nav alongside
this table.

The IPG's two hardware revisions (Gen1, Gen2) each carry their own maturity
badges rather than sharing the single row above — see the
[Gen1 vs. Gen2 comparison](ipg.md#gen1-vs-gen2). Those per-revision badges are
currently illustrative placeholders for page-design review, not real
assessments; the `?` in this table remains the accurate summary until
maintainers assign real levels.

The **development board** carries the same Gen2 PCBA as the IPG, in its
manufacturing frame rather than trimmed for implantation — see
[Development board](dev-board.md). Its Availability cell is filled in because
that value doesn't depend on a maintainer assessment the way D/E/M do: boards
are available on request today, regardless of what levels get assigned later.

Every component page carries **Applies to revision** and **Last reviewed**
fields, and the same standing disclaimer: these
levels describe testing history and documentation state. They are not
regulatory clearance and not a safety endorsement.
