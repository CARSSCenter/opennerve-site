---
title: IPG — Gen1 PCBA
---

# Implantable Pulse Generator — Gen1 PCBA

**Repo:** [CARSSCenter/OpenNerve-Implantable-Pulse-Generator](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator){ target="_blank" } · `Gen1 PCBA/` and `Docs/`
**Applies to revision:** Gen1 PCBA ("HORNET-1-IPG" in the Altium project name). No
further hardware revision or version number is published upstream for the PCB
itself — the only versioned artifact touching this board is the enclosure,
tracked separately below.
**Last reviewed:** not yet reviewed by a maintainer.

!!! danger "Not approved for human use"
    Nothing described on this page has regulatory clearance for human use. See
    [Regulatory status and disclaimers](../regulatory/status.md).

!!! warning "Illustrative maturity values — not assigned"
    The badges below show placeholder levels so the page layout can be reviewed.
    **These are not real assessments.** Actual levels are assigned by project
    maintainers per `CLAUDE.md` §6 and have not been set for this revision. Treat
    every filled-in level on this page as a mockup, not a claim.

## Maturity

<div class="on-maturity" markdown>
<div class="on-badge on-badge--illustrative" markdown>
<span class="on-badge__axis">Documentation</span>
<span class="on-badge__level">D2</span>
<span class="on-badge__label">Reproducible — illustrative</span>
</div>
<div class="on-badge on-badge--illustrative" markdown>
<span class="on-badge__axis">Evidence</span>
<span class="on-badge__level">E1</span>
<span class="on-badge__label">Bench — illustrative</span>
</div>
<div class="on-badge on-badge--illustrative" markdown>
<span class="on-badge__axis">Manufacturing</span>
<span class="on-badge__level">M1</span>
<span class="on-badge__label">Pilot — illustrative</span>
</div>
</div>

<div class="on-availability on-availability--illustrative" markdown>
<span class="on-availability__label">Availability</span>
Files only — illustrative, not assigned
</div>

See [Maturity level definitions](../regulatory/maturity.md) for what each level
means. Rationale for the illustrative values above is in
[Design outputs and BOM/fab notes](#design-outputs-and-bomfab-notes) and
[Testing and regulatory status](#testing-and-regulatory-status) below — D2 rather
than D1 because, unlike Gen2, this revision has a separate assembly drawing,
fabrication drawing, and test-point document (still short of D3, see below); E1
for the same reason as Gen2 — nothing in the repo documents a completed bench,
acute, or chronic study tied specifically to this revision (see
[Evidence](#evidence)); M1 for the same contract-manufacturer/no-named-GMP-supplier
reason as Gen2.

!!! note "Standing disclaimer"
    These levels describe testing history and documentation state. They are not
    regulatory clearance and not a safety endorsement.

## What this revision is

The Gen1 PCBA has eight pseudo-independent monopolar stimulation channels
(configurable as four bipolar channels), two differential biosignal amplifiers for
ECG/EMG/eCAP recording, and one I2C port for third-party digital sensors.
([source](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/blob/main/README.md))

Two microcontrollers are used, shared with Gen2: an nRF52810 for BLE
(`FW-BLE/`, same firmware across both revisions) and an STM32 ("MCU") for
stimulation, sensing, and system control (`Gen1 PCBA/FW-MCU-H1-251201.hex`,
revision-specific).

For how Gen1 compares to Gen2, see the [IPG overview](ipg.md#gen1-vs-gen2).

## Design outputs and BOM/fab notes

| File | Format | Path | Covers |
|---|---|---|---|
| [Schematics](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/blob/main/Gen1%20PCBA/IPG-V1%20schematics.PDF){ target="_blank" } | PDF | `Gen1 PCBA/IPG-V1 schematics.PDF` | Circuit schematics |
| [Layout](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/blob/main/Gen1%20PCBA/IPG-V1%20layout.PDF){ target="_blank" } | PDF (+ [`.step`](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/blob/main/Gen1%20PCBA/IPG-V1%20layout.step){ target="_blank" }) | `Gen1 PCBA/IPG-V1 layout.PDF` | Board layout |
| [Assembly drawing](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/blob/main/Gen1%20PCBA/IPG-V1%20assembly.PDF){ target="_blank" } | PDF | `Gen1 PCBA/IPG-V1 assembly.PDF` | Assembly instructions/drawing |
| [Fabrication drawing](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/blob/main/Gen1%20PCBA/IPG-V1%20fabrication.PDF){ target="_blank" } | PDF | `Gen1 PCBA/IPG-V1 fabrication.PDF` | Fab drawing |
| [Bill of materials](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/blob/main/Gen1%20PCBA/IPG-V1%20BOM.xlsx){ target="_blank" } | XLSX | `Gen1 PCBA/IPG-V1 BOM.xlsx` | Component list |
| [Test points](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/blob/main/Gen1%20PCBA/IPG%20test%20points.pptx){ target="_blank" } | PPTX | `Gen1 PCBA/IPG test points.pptx` | Test-point reference |
| [Altium project](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/blob/main/Gen1%20PCBA/PCBA-Altium/HORNET-1-IPG.PrjPcb){ target="_blank" } | Altium `.PrjPcb`/`.PcbDoc` | `Gen1 PCBA/PCBA-Altium/` | Editable schematic/layout source, plus rendered [assembly](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/blob/main/Gen1%20PCBA/PCBA-Altium/HORNET-1-IPG-ASSY.PCBDwf){ target="_blank" } and [fabrication](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/blob/main/Gen1%20PCBA/PCBA-Altium/HORNET-1-IPG-FAB.PCBDwf){ target="_blank" } drawing-exchange files and a machine-readable [BOM](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/blob/main/Gen1%20PCBA/PCBA-Altium/HORNET-1-IPG.BomDoc){ target="_blank" } |
| [MCU firmware image](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/blob/main/Gen1%20PCBA/FW-MCU-H1-251201.hex){ target="_blank" } | `.hex` | `Gen1 PCBA/FW-MCU-H1-251201.hex` | Built firmware image |

The enclosure is shared across both PCB revisions and versioned independently
(current rev 0.7):
[`12mm IPG model.STEP`/`.STL`](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/blob/main/Enclosure/12mm%20IPG%20model.STEP){ target="_blank" },
[`8383, 12mm IPG, Rev 0.7.STEP`](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/blob/main/Enclosure/8383%2C%2012mm%20IPG%2C%20Rev%200.7.STEP){ target="_blank" },
[design file set PDF](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/blob/main/Enclosure/Nest%201%20-%20IPG%20-%20Design%20File%20Set.pdf){ target="_blank" }.

Against the reproducibility bar in
[Maturity level definitions](../regulatory/maturity.md) (D2 = complete package:
schematics, layout, fab drawings, BOM, process and test procedures), this
revision's package is more complete than Gen2's — it has separate assembly,
fabrication, and test-point documents that Gen2's `Docs/` tree does not.

**What's still missing, relative to D3** ("D2 plus versioned, tagged, DOI'd, with
changelog" — see [Testing and regulatory status](#testing-and-regulatory-status)
below for why D3 is currently unreachable):

- Editable source is **Altium Designer**-only, a closed-source tool. The
  [`Gen1 PCBA/README.md`](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/blob/main/Gen1%20PCBA/README.md){ target="_blank" }
  itself recommends KiCad for outside developers and links a third-party
  Altium→KiCad converter, explicitly flagged "use at your own risk." No converted
  KiCad source exists in this repo. See the open questions on
  [Hardware contributions](../contribute/hardware.md).
- The BOM is `.xlsx`/`.BomDoc`, not a plain-text/versioned format.

## Testing and regulatory status

`Docs/Testing-Protocols/` contains eight PDFs, each named "Hornet IPG … DVT
Protocol":
[accelerated aging](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/blob/main/Docs/Testing-Protocols/Hornet%20IPG%20Accelerated%20Aging%20DVT%20Protocol.pdf){ target="_blank" } ·
[drop & impact](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/blob/main/Docs/Testing-Protocols/Hornet%20IPG%20Drop%20%26%20Impact%20%20DVT%20Protocol.pdf){ target="_blank" } ·
[heating during normal operation](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/blob/main/Docs/Testing-Protocols/Hornet%20IPG%20Heating%20Test%20During%20Normal%20Operation%20DVT%20Protocol.pdf){ target="_blank" } ·
[hermeticity](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/blob/main/Docs/Testing-Protocols/Hornet%20IPG%20Hermeticity%20DVT%20Protocol.pdf){ target="_blank" } ·
[minor mechanical shock](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/blob/main/Docs/Testing-Protocols/Hornet%20IPG%20Minor%20Mechanical%20Shock%20DVT%20Protocol.pdf){ target="_blank" } ·
[RGA](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/blob/main/Docs/Testing-Protocols/Hornet%20IPG%20RGA%20DVT%20Protocol.pdf){ target="_blank" } ·
[shear force](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/blob/main/Docs/Testing-Protocols/Hornet%20IPG%20Shear%20Force%20DVT%20Protocol.pdf){ target="_blank" } ·
[vibration mechanical force](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/blob/main/Docs/Testing-Protocols/Hornet%20IPG%20Vibration%20Mechanical%20Force%20DVT%20Protocol.pdf){ target="_blank" }.

Two things to be precise about, per `CLAUDE.md` §3:

- **These are protocols, not reports.** A protocol is a test plan; under
  21 CFR 820.30 it documents intended verification activity, not a completed
  verification result. No result/report document for any of these eight tests
  is present in the repo.
- **These plausibly target this revision, but it's not stated.** "Hornet" is
  the internal program codename, and the Gen1 Altium project is literally named
  `HORNET-1-IPG` — a stronger textual link to Gen1 than Gen2 has. Still, no
  filename or document explicitly says "Gen1," so this page treats the link as
  suggestive, not confirmed, per `CLAUDE.md` §5 (maturity binds to a specific
  revision — a plausible association isn't the same as a stated one).

Additional documents in `Docs/`, listed as they appear in the repo — acronyms are
**not** expanded here because their expansions aren't stated anywhere upstream:

- [`CAR-206 IPG SAD.pdf`](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/blob/main/Docs/CAR-206%20IPG%20SAD.pdf){ target="_blank" }
- [`CAR-207 IPG SDS.pdf`](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/blob/main/Docs/CAR-207%20IPG%20SDS.pdf){ target="_blank" }
- [`CAR-211-VVT.pdf`](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/blob/main/Docs/CAR-211-VVT.pdf){ target="_blank" }
- `Docs/DHF-Files/`: [Design Output Review](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/blob/main/Docs/DHF-Files/Nest%201-IPG%20and%20Charger%20-%20Design%20Output%20Review.pdf){ target="_blank" }, [Mechanical Specifications](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/blob/main/Docs/DHF-Files/Nest%201-IPG%20and%20Charger%20-%20Mechanical%20Specifications.pdf){ target="_blank" }, [Test Plan](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/blob/main/Docs/DHF-Files/Nest%201-IPG%20and%20Charger%20Test%20Plan%20.pdf){ target="_blank" }, [Mechanical Design Images](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/blob/main/Docs/DHF-Files/Nest%201-IPG%20and%20Charger-Mechanical%20Design%20Images.pdf){ target="_blank" }

The `Nest 1` naming in these documents and in the enclosure file set is the same
naming family as the enclosure files above, and appears to be shared across the
IPG and charger rather than IPG-only — worth confirming with whoever wrote them.
The folder name `DHF-Files` does not by itself establish that a QMS-controlled
Design History File exists per 21 CFR 820.30 — that's a claim only a maintainer
with visibility into the actual quality system can confirm.

**Why Documentation level D3 is currently unreachable, regardless of D2:** D3
requires "versioned, tagged, DOI'd, with changelog." Checked directly against
the repo (2026-07-28): **zero GitHub releases**, **one tag**
(`archive/feature/wireless-charging` — not a version tag), and **no DOI**. The
repo's [`CITATION.cff`](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/blob/main/CITATION.cff){ target="_blank" }
declares `version: '1.0'`, `date-released: '2025-01-01'`, but that's citation
metadata, not a corresponding git tag or release artifact, and it isn't scoped to
Gen1 vs. Gen2 either — so it doesn't satisfy "versioned, tagged" for this
revision as written.

## Firmware and software

- **MCU firmware** (`Gen1 PCBA/FW-MCU-H1-251201.hex`) is specific to this
  revision — do not carry over Gen2 MCU firmware claims. See the
  [MCU flashing guide](ipg/mcu-flashing.md).
- **BLE firmware** (`FW-BLE/`) is shared with Gen2.
  See the [BLE flashing guide](ipg/ble-flashing.md).
- Control software (Windows now, Android in development) is the same across both
  revisions — see [Software](../software/windows.md).

## Evidence

The upstream repo's `README` states the IPG "is currently being used by a number
of groups for acute and chronic preclinical studies, with plan to transition to
clinical studies when ready." No group, species, study duration, protocol, or
publication is named, and the claim is not scoped to Gen1 vs. Gen2.

Per `CLAUDE.md` §3 ("never state a capability without a source"), this is
recorded here as an **unverified claim, not evidence** — it cannot support any
Evidence (E) level above E0 until it can be linked to a specific protocol, report,
or publication naming the revision, species, and duration involved. See
[Animal data](../data/animal-data.md) and [Publications](../data/publications.md)
for what is currently linkable.

!!! note "Standing disclaimer"
    These levels describe testing history and documentation state. They are not
    regulatory clearance and not a safety endorsement.
