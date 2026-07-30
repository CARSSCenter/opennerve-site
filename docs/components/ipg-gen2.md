---
title: IPG — Gen2 PCBA
---

# Implantable Pulse Generator — Gen2 PCBA

**Repo:** [CARSSCenter/OpenNerve-Implantable-Pulse-Generator](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator){ target="_blank" } · `Gen2 PCBA/` and `Docs/`
**Applies to revision:** Gen2 PCBA. No further hardware revision or version number
is published upstream for the PCB itself — the only versioned artifact touching
this board is the enclosure, tracked separately below.
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
<span class="on-badge__level">D1</span>
<span class="on-badge__label">Partial — illustrative</span>
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
means. Rationale for the illustrative values above, file by file, is in
[Design outputs and BOM/fab notes](#design-outputs-and-bomfab-notes) and
[Testing and regulatory status](#testing-and-regulatory-status) below — D1 rather
than D2 because assembly and fabrication drawings are absent (see gaps below); E1
rather than higher because nothing in the repo documents a completed bench, acute,
or chronic study for this revision specifically (see [Evidence](#evidence)); M1
rather than higher because fabrication is Altium/contract-manufacturer based with
no named GMP-capable supplier stated in the repo.

!!! note "Standing disclaimer"
    These levels describe testing history and documentation state. They are not
    regulatory clearance and not a safety endorsement.

## What this revision is

The Gen2 PCBA has two fully independent bipolar stimulation channels, capable of
square-wave stimulation up to 1200 Hz or low-frequency sine-wave stimulation, four
configurable analog front ends (AFEs) for biosignal recording, and one I2C port for
third-party digital sensors.
([source](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/blob/main/README.md))

Detailed AFE filter/gain/sampling-rate specifications are in the synced
[Getting started](ipg/getting-started.md) guide.

Two microcontrollers are used, shared with Gen1: an nRF52810 for BLE
(`FW-BLE/`, same firmware across both revisions) and an STM32U5 for stimulation,
sensing, and system control (`Gen2 PCBA/FW-MCU-H2/`, revision-specific).

For how Gen2 compares to Gen1, see the [IPG overview](ipg.md#gen1-vs-gen2).

This is the PCB revision used in the [development board](dev-board.md) — the
same electronics, kept in its manufacturing frame for bench use instead of
being trimmed down for implantation.

## Design outputs and BOM/fab notes

| File | Format | Path | Covers |
|---|---|---|---|
| [Schematic + layout](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/blob/main/Gen2%20PCBA/IPG-schematic-layout.PDF){ target="_blank" } | PDF | `Gen2 PCBA/IPG-schematic-layout.PDF` | Schematic and layout combined in a single document |
| [Bill of materials](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/blob/main/Gen2%20PCBA/IPG-BOM.xlsx){ target="_blank" } | XLSX | `Gen2 PCBA/IPG-BOM.xlsx` | Component list |
| [3D model](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/blob/main/Gen2%20PCBA/IPG.step){ target="_blank" } | STEP | `Gen2 PCBA/IPG.step` | Board mechanical outline |
| [Altium project](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/blob/main/Gen2%20PCBA/PCBA-Altium/IPG.PrjPcb){ target="_blank" } | Altium `.PrjPcb`/`.PcbDoc` | `Gen2 PCBA/PCBA-Altium/` | Editable schematic/layout source (`IPG.PcbDoc`, `IPG_Rigid.PcbDoc`, 15 sheet `.SchDoc` files, [`HORNET-IPG.IntLib`](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/blob/main/Gen2%20PCBA/PCBA-Altium/Libraries/HORNET-IPG.IntLib){ target="_blank" } component library) |
| [MCU firmware image](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/blob/main/Gen2%20PCBA/FW-MCU-H2/FW-NIH-MCU-H2-260522.hex){ target="_blank" } | `.hex` (also `.bin`) | `Gen2 PCBA/FW-MCU-H2/` | Most recent built firmware image; source under `FW-NIH-MCU-H2/` |

The enclosure is shared across both PCB revisions and versioned independently
(current rev 0.7):
[`12mm IPG model.STEP`/`.STL`](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/blob/main/Enclosure/12mm%20IPG%20model.STEP){ target="_blank" },
[`8383, 12mm IPG, Rev 0.7.STEP`](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/blob/main/Enclosure/8383%2C%2012mm%20IPG%2C%20Rev%200.7.STEP){ target="_blank" },
[design file set PDF](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/blob/main/Enclosure/Nest%201%20-%20IPG%20-%20Design%20File%20Set.pdf){ target="_blank" }.

**What's missing, compared to the reproducibility bar in
[Maturity level definitions](../regulatory/maturity.md) (D2 = complete package:
schematics, layout, fab drawings, BOM, process and test procedures):**

- No separate **assembly drawing**.
- No separate **fabrication drawing** (Gen1 has one — see the
  [Gen1 PCBA page](ipg-gen1.md#design-outputs-and-bomfab-notes)).
- No **test-point** reference document (Gen1 has a slide deck covering this).
- The BOM is `.xlsx`, not a plain-text/versioned format.
- Editable source is **Altium Designer**-only, a closed-source tool. The sibling
  Gen1 folder's `README` recommends KiCad for outside developers and links a
  third-party Altium→KiCad converter "used at your own risk" — the same caveat
  applies here; no converted KiCad source exists in this repo for either
  revision. See the open questions on
  [Hardware contributions](../contribute/hardware.md).

## Testing and regulatory status

`Docs/Testing-Protocols/` contains eight PDFs, each named "Hornet IPG … DVT
Protocol". Each viewer below fetches its PDF live from the repo's default
branch (`CLAUDE.md` §7, "PDF viewer") — click a title to expand it:

<details class="on-pdf-details" markdown>
<summary>Accelerated aging DVT protocol</summary>
<div class="on-pdf" markdown>
<div class="on-pdf__embed" data-pdf-src="https://raw.githubusercontent.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/main/Docs/Testing-Protocols/Hornet%20IPG%20Accelerated%20Aging%20DVT%20Protocol.pdf" data-pdf-title="Hornet IPG Accelerated Aging DVT Protocol"></div>
<a class="on-pdf__fallback" href="https://raw.githubusercontent.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/main/Docs/Testing-Protocols/Hornet%20IPG%20Accelerated%20Aging%20DVT%20Protocol.pdf">Open directly &#8599;</a>
</div>
</details>

<details class="on-pdf-details" markdown>
<summary>Drop &amp; impact DVT protocol</summary>
<div class="on-pdf" markdown>
<div class="on-pdf__embed" data-pdf-src="https://raw.githubusercontent.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/main/Docs/Testing-Protocols/Hornet%20IPG%20Drop%20%26%20Impact%20%20DVT%20Protocol.pdf" data-pdf-title="Hornet IPG Drop & Impact DVT Protocol"></div>
<a class="on-pdf__fallback" href="https://raw.githubusercontent.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/main/Docs/Testing-Protocols/Hornet%20IPG%20Drop%20%26%20Impact%20%20DVT%20Protocol.pdf">Open directly &#8599;</a>
</div>
</details>

<details class="on-pdf-details" markdown>
<summary>Heating during normal operation DVT protocol</summary>
<div class="on-pdf" markdown>
<div class="on-pdf__embed" data-pdf-src="https://raw.githubusercontent.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/main/Docs/Testing-Protocols/Hornet%20IPG%20Heating%20Test%20During%20Normal%20Operation%20DVT%20Protocol.pdf" data-pdf-title="Hornet IPG Heating Test During Normal Operation DVT Protocol"></div>
<a class="on-pdf__fallback" href="https://raw.githubusercontent.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/main/Docs/Testing-Protocols/Hornet%20IPG%20Heating%20Test%20During%20Normal%20Operation%20DVT%20Protocol.pdf">Open directly &#8599;</a>
</div>
</details>

<details class="on-pdf-details" markdown>
<summary>Hermeticity DVT protocol</summary>
<div class="on-pdf" markdown>
<div class="on-pdf__embed" data-pdf-src="https://raw.githubusercontent.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/main/Docs/Testing-Protocols/Hornet%20IPG%20Hermeticity%20DVT%20Protocol.pdf" data-pdf-title="Hornet IPG Hermeticity DVT Protocol"></div>
<a class="on-pdf__fallback" href="https://raw.githubusercontent.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/main/Docs/Testing-Protocols/Hornet%20IPG%20Hermeticity%20DVT%20Protocol.pdf">Open directly &#8599;</a>
</div>
</details>

<details class="on-pdf-details" markdown>
<summary>Minor mechanical shock DVT protocol</summary>
<div class="on-pdf" markdown>
<div class="on-pdf__embed" data-pdf-src="https://raw.githubusercontent.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/main/Docs/Testing-Protocols/Hornet%20IPG%20Minor%20Mechanical%20Shock%20DVT%20Protocol.pdf" data-pdf-title="Hornet IPG Minor Mechanical Shock DVT Protocol"></div>
<a class="on-pdf__fallback" href="https://raw.githubusercontent.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/main/Docs/Testing-Protocols/Hornet%20IPG%20Minor%20Mechanical%20Shock%20DVT%20Protocol.pdf">Open directly &#8599;</a>
</div>
</details>

<details class="on-pdf-details" markdown>
<summary>RGA DVT protocol</summary>
<div class="on-pdf" markdown>
<div class="on-pdf__embed" data-pdf-src="https://raw.githubusercontent.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/main/Docs/Testing-Protocols/Hornet%20IPG%20RGA%20DVT%20Protocol.pdf" data-pdf-title="Hornet IPG RGA DVT Protocol"></div>
<a class="on-pdf__fallback" href="https://raw.githubusercontent.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/main/Docs/Testing-Protocols/Hornet%20IPG%20RGA%20DVT%20Protocol.pdf">Open directly &#8599;</a>
</div>
</details>

<details class="on-pdf-details" markdown>
<summary>Shear force DVT protocol</summary>
<div class="on-pdf" markdown>
<div class="on-pdf__embed" data-pdf-src="https://raw.githubusercontent.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/main/Docs/Testing-Protocols/Hornet%20IPG%20Shear%20Force%20DVT%20Protocol.pdf" data-pdf-title="Hornet IPG Shear Force DVT Protocol"></div>
<a class="on-pdf__fallback" href="https://raw.githubusercontent.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/main/Docs/Testing-Protocols/Hornet%20IPG%20Shear%20Force%20DVT%20Protocol.pdf">Open directly &#8599;</a>
</div>
</details>

<details class="on-pdf-details" markdown>
<summary>Vibration mechanical force DVT protocol</summary>
<div class="on-pdf" markdown>
<div class="on-pdf__embed" data-pdf-src="https://raw.githubusercontent.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/main/Docs/Testing-Protocols/Hornet%20IPG%20Vibration%20Mechanical%20Force%20DVT%20Protocol.pdf" data-pdf-title="Hornet IPG Vibration Mechanical Force DVT Protocol"></div>
<a class="on-pdf__fallback" href="https://raw.githubusercontent.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/main/Docs/Testing-Protocols/Hornet%20IPG%20Vibration%20Mechanical%20Force%20DVT%20Protocol.pdf">Open directly &#8599;</a>
</div>
</details>

Two things to be precise about, per `CLAUDE.md` §3:

- **These are protocols, not reports.** A protocol is a test plan; under
  21 CFR 820.30 it documents intended verification activity, not a completed
  verification result. No result/report document for any of these eight tests
  is present in the repo.
- **None states which PCB revision it applies to.** "Hornet" is the internal
  program codename (the Gen1 Altium project is literally named
  `HORNET-1-IPG`), which suggests these protocols may predate or target Gen1
  specifically — but nothing in the filenames or repo confirms that either
  way. Until a maintainer resolves this, the Gen1 and Gen2 pages cannot each
  claim these protocols as their own without over-stating what's verified —
  which is exactly the failure mode `CLAUDE.md` §5 (maturity binds to a
  specific revision) exists to prevent.

Additional documents in `Docs/`, listed as they appear in the repo — acronyms are
**not** expanded here because their expansions aren't stated anywhere upstream:

<details class="on-pdf-details" markdown>
<summary><code>CAR-206 IPG SAD.pdf</code></summary>
<div class="on-pdf" markdown>
<div class="on-pdf__embed" data-pdf-src="https://raw.githubusercontent.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/main/Docs/Firmware-Design-History-Files/CAR-206%20IPG%20SAD.pdf" data-pdf-title="CAR-206 IPG SAD"></div>
<a class="on-pdf__fallback" href="https://raw.githubusercontent.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/main/Docs/Firmware-Design-History-Files/CAR-206%20IPG%20SAD.pdf">Open directly &#8599;</a>
</div>
</details>

<details class="on-pdf-details" markdown>
<summary><code>CAR-207 IPG SDS.pdf</code></summary>
<div class="on-pdf" markdown>
<div class="on-pdf__embed" data-pdf-src="https://raw.githubusercontent.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/main/Docs/Firmware-Design-History-Files/CAR-207%20IPG%20SDS.pdf" data-pdf-title="CAR-207 IPG SDS"></div>
<a class="on-pdf__fallback" href="https://raw.githubusercontent.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/main/Docs/Firmware-Design-History-Files/CAR-207%20IPG%20SDS.pdf">Open directly &#8599;</a>
</div>
</details>

<details class="on-pdf-details" markdown>
<summary><code>CAR-211-VVT.pdf</code></summary>
<div class="on-pdf" markdown>
<div class="on-pdf__embed" data-pdf-src="https://raw.githubusercontent.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/main/Docs/Firmware-Design-History-Files/CAR-211-VVT.pdf" data-pdf-title="CAR-211-VVT"></div>
<a class="on-pdf__fallback" href="https://raw.githubusercontent.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/main/Docs/Firmware-Design-History-Files/CAR-211-VVT.pdf">Open directly &#8599;</a>
</div>
</details>

`Docs/DHF-Files/`:

<details class="on-pdf-details" markdown>
<summary>Design Output Review</summary>
<div class="on-pdf" markdown>
<div class="on-pdf__embed" data-pdf-src="https://raw.githubusercontent.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/main/Docs/DHF-Files/Nest%201-IPG%20and%20Charger%20-%20Design%20Output%20Review.pdf" data-pdf-title="Nest 1 - IPG and Charger - Design Output Review"></div>
<a class="on-pdf__fallback" href="https://raw.githubusercontent.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/main/Docs/DHF-Files/Nest%201-IPG%20and%20Charger%20-%20Design%20Output%20Review.pdf">Open directly &#8599;</a>
</div>
</details>

<details class="on-pdf-details" markdown>
<summary>Mechanical Specifications</summary>
<div class="on-pdf" markdown>
<div class="on-pdf__embed" data-pdf-src="https://raw.githubusercontent.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/main/Docs/DHF-Files/Nest%201-IPG%20and%20Charger%20-%20Mechanical%20Specifications.pdf" data-pdf-title="Nest 1 - IPG and Charger - Mechanical Specifications"></div>
<a class="on-pdf__fallback" href="https://raw.githubusercontent.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/main/Docs/DHF-Files/Nest%201-IPG%20and%20Charger%20-%20Mechanical%20Specifications.pdf">Open directly &#8599;</a>
</div>
</details>

<details class="on-pdf-details" markdown>
<summary>Test Plan</summary>
<div class="on-pdf" markdown>
<div class="on-pdf__embed" data-pdf-src="https://raw.githubusercontent.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/main/Docs/DHF-Files/Nest%201-IPG%20and%20Charger%20Test%20Plan%20.pdf" data-pdf-title="Nest 1 - IPG and Charger Test Plan"></div>
<a class="on-pdf__fallback" href="https://raw.githubusercontent.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/main/Docs/DHF-Files/Nest%201-IPG%20and%20Charger%20Test%20Plan%20.pdf">Open directly &#8599;</a>
</div>
</details>

<details class="on-pdf-details" markdown>
<summary>Mechanical Design Images</summary>
<div class="on-pdf" markdown>
<div class="on-pdf__embed" data-pdf-src="https://raw.githubusercontent.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/main/Docs/DHF-Files/Nest%201-IPG%20and%20Charger-Mechanical%20Design%20Images.pdf" data-pdf-title="Nest 1 - IPG and Charger - Mechanical Design Images"></div>
<a class="on-pdf__fallback" href="https://raw.githubusercontent.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/main/Docs/DHF-Files/Nest%201-IPG%20and%20Charger-Mechanical%20Design%20Images.pdf">Open directly &#8599;</a>
</div>
</details>

The folder name `DHF-Files` does not by itself establish that a QMS-controlled
Design History File exists per 21 CFR 820.30 — that's a claim only a maintainer
with visibility into the actual quality system can confirm.

**Why Documentation level D3 is currently unreachable, regardless of D2:** D3
requires "versioned, tagged, DOI'd, with changelog." Checked directly against
the repo (2026-07-28): **zero GitHub releases**, **one tag**
(`archive/feature/wireless-charging` — not a version tag), and **no DOI**. The
repo's [`CITATION.cff`](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/blob/main/CITATION.cff){ target="_blank" }
declares `version: '1.0'`, `date-released: '2025-01-01'`, but that's citation
metadata, not a corresponding git tag or release artifact — so it doesn't satisfy
"versioned, tagged" as written.

## Firmware and software

- **MCU firmware** (`Gen2 PCBA/FW-MCU-H2/`) is specific to this revision — do not
  carry over Gen1 MCU firmware claims. See the
  [MCU flashing guide](ipg/mcu-flashing.md).
- **BLE firmware** (`FW-BLE/`) is shared with Gen1.
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
