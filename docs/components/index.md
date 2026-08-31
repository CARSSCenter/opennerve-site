---
title: Components — overview & maturity
---

# Components: overview and maturity

The OpenNerve platform consists of several hardware and software components, which are listed in the table below. The core of OpenNerve is the implantable pulse generator (IPG), which itself consists of a hermetic enclosure and an internal PCBA. Two generations of the IPG's PCBA have been developed and released, and the Gen2 PCBA is available as a Development Board to aid in development and benchtop or acute / percutaneous animal research. The OpenNerve IPG is designed to be modular with a user's stimulation and measurement leads; several groups have developed leads for OpenNerve and released them as open source, and a user is welcome to develop new leads or use existing commercial leads. 

!!! danger "Not approved for human use"
    Nothing described on this page has regulatory clearance for human use.
    See [Regulatory status and disclaimers](../regulatory/status.md).

Two independent axes, always shown separately — never collapsed into one
score, because a composite hides exactly the information this table exists to
surface. Definitions: [Maturity level definitions](../regulatory/maturity.md).

| Component | Repo | Evidence (E) | Manufacturing readiness (M) | Availability |
|---|---|---|---|---|
| [Implantable Pulse Generator](ipg.md) — [Gen2](ipg-gen2.md) / [Gen1](ipg-gen1.md) | [OpenNerve-Implantable-Pulse-Generator](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator) | E2 | M3 |  |
| [Development board](dev-board.md) | [OpenNerve-Implantable-Pulse-Generator](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator) | E3 | M2 |  |
| [Windows app](../software/windows.md) | [OpenNerve-Windows-App](https://github.com/CARSSCenter/OpenNerve-Windows-App) | E3 | N/A |  |
| [Android app](../software/android.md) | [OpenNerve-Android-App](https://github.com/CARSSCenter/OpenNerve-Android-App) | E0 | N/A |  |
| [Standard Leads](standard-leads.md) | [OpenNerve-Standard-Leads](https://github.com/CARSSCenter/OpenNerve-Standard-Leads) | E3 | M3 |  |
| [Sub-mm Parylene Cuff](parylene-cuff.md) | [Sub-mm-Parylene-Cuff-Electrode](https://github.com/CARSSCenter/Sub-mm-Parylene-Cuff-Electrode) | E3 | M1 |  |
| [Charger](charger.md) | [OpenNerve-Charger](https://github.com/CARSSCenter/OpenNerve-Charger) | E1 | M2 |  |
| [Mechanical Sensors](mechanical-sensors.md) | [Mechanical-Sensors](https://github.com/CARSSCenter/Mechanical-Sensors) | E2 | M1 |  |
| [Chemical Sensors](chemical-sensors.md) | [Chemical-Sensors](https://github.com/CARSSCenter/Chemical-Sensors) | E2 | M1 |  |
| [Bring your own lead](byo-lead.md) | [OpenNerve-Implantable-Pulse-Generator](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator) |  | |  |


E/M levels above are maintainer-assigned, current as of 2026-08-28 — see each
component's own page for the full badge (with its descriptive label) and for
`N/A` cases, why the axis doesn't apply.

The IPG's two hardware revisions (Gen1, Gen2) each carry their own maturity
badges rather than sharing the single row above — see the
[Gen1 vs. Gen2 comparison](ipg.md#gen1-vs-gen2). The row here uses
[ipg.md](ipg.md)'s own levels, which describe the packaged IPG rather than
either bare PCBA — see that page for why the packaged levels differ from the
PCBA-only ones on the Gen1/Gen2 pages.

The **development board** carries the same Gen2 PCBA as the IPG, in its
manufacturing frame rather than trimmed for implantation — see
[Development board](dev-board.md). Its E/M cells mirror
[Gen2 PCBA maturity](ipg-gen2.md#maturity), and its Availability cell is
filled in because that value doesn't depend on a maintainer assessment the
way E/M do: boards are available on request today.

**[Bring your own lead](byo-lead.md)** documents the IPG header's connector
interface rather than a product OpenNerve ships, so its Availability reads
"Not applicable" instead of `?` or a real availability value — E/M remain
unassigned like any other not-yet-assessed row, since filling in one field on
this page must not read as progress on the other two (same principle as the
development board row above).

Software's Manufacturing readiness reads `N/A`: that axis is defined in terms
of fabrication protocols, suppliers, and QMS, none of which apply to an
application. See [Windows app maturity](../software/windows.md#maturity) and
[Android app maturity](../software/android.md#maturity).

See [Maturity level definitions](../regulatory/maturity.md) for the standing
disclaimer that applies to every level on this page: these levels describe
testing history and documentation state. They are not regulatory clearance
and not a safety endorsement.
