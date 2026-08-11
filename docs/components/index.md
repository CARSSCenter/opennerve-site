---
title: Components — overview & maturity
---

# Components: overview and maturity

The OpenNerve platform consists of several hardware and software components, which are listed in the table below. The core of OpenNerve is the implantable pulse generator (IPG), which itself consists of a hermetic enclosure and an internal PCBA. Two generations of the IPG's PCBA have been developed and released, and the Gen2 PCBA is available as a Development Board to aid in development and benchtop or acute / percutaneous animal research. The OpenNerve IPG is designed to be modular with a user's stimulation and measurement leads; several groups have developed leads for OpenNerve and released them as open source, and a user is welcome to develop new leads or use existing commercial leads. 

!!! danger "Not approved for human use"
    Nothing described on this page has regulatory clearance for human use.
    See [Regulatory status and disclaimers](../regulatory/status.md).

Three independent axes, always shown separately — never collapsed into one
score, because a composite hides exactly the information this table exists to
surface. Definitions: [Maturity level definitions](../regulatory/maturity.md).

| Component | Repo | Documentation (D) | Evidence (E) | Manufacturing (M) | Availability |
|---|---|---|---|---|---|
| [Implantable Pulse Generator](ipg.md) — [Gen2](ipg-gen2.md) / [Gen1](ipg-gen1.md) | [OpenNerve-Implantable-Pulse-Generator](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator) | ? | ? | ? | ? |
| [Development board](dev-board.md) | [OpenNerve-Implantable-Pulse-Generator](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator) | ? | ? | ? | Purchasable — contact the consortium |
| [Windows app](../software/windows.md) | [OpenNerve-Windows-App](https://github.com/CARSSCenter/OpenNerve-Windows-App) | ? | ? | ? | ? |
| [Android app](../software/android.md) | [OpenNerve-Android-App](https://github.com/CARSSCenter/OpenNerve-Android-App) | ? | ? | ? | ? |
| [Standard Leads](standard-leads.md) | [OpenNerve-Standard-Leads](https://github.com/CARSSCenter/OpenNerve-Standard-Leads) | ? | ? | ? | ? |
| [Sub-mm Parylene Cuff](parylene-cuff.md) | [Sub-mm-Parylene-Cuff-Electrode](https://github.com/CARSSCenter/Sub-mm-Parylene-Cuff-Electrode) | ? | ? | ? | ? |
| [Charger](charger.md) | [OpenNerve-Charger](https://github.com/CARSSCenter/OpenNerve-Charger) | ? | ? | ? | ? |
| [Mechanical Sensors](mechanical-sensors.md) | [Mechanical-Sensors](https://github.com/CARSSCenter/Mechanical-Sensors) | ? | ? | ? | ? |
| [Chemical Sensors](chemical-sensors.md) | [Chemical-Sensors](https://github.com/CARSSCenter/Chemical-Sensors) | ? | ? | ? | ? |
| [Bring your own lead](byo-lead.md) | [OpenNerve-Implantable-Pulse-Generator](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator) | ? | ? | ? | Not applicable |

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

**[Bring your own lead](byo-lead.md)** documents the IPG header's connector
interface rather than a product OpenNerve ships, so its Availability reads
"Not applicable" instead of `?` or a real availability value — D/E/M remain
unassigned like every other row, since filling in one field on this page must
not read as progress on the other two (same principle as the development
board row above).

Every component page carries **Applies to revision** and **Last reviewed**
fields, and the same standing disclaimer: these
levels describe testing history and documentation state. They are not
regulatory clearance and not a safety endorsement.
