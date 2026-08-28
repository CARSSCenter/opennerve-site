---
title: IPG — Gen2 PCBA
---

# Implantable Pulse Generator — Gen2 PCBA

**Repo:** [CARSSCenter/OpenNerve-Implantable-Pulse-Generator](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator){ target="_blank" } · `Gen2 PCBA/` and `Docs/`


!!! danger "Not approved for human use"
    Nothing described on this page has regulatory clearance for human use. See
    [Regulatory status and disclaimers](../regulatory/status.md).


## Maturity

<div class="on-maturity" markdown>
<div class="on-badge on-badge--illustrative" markdown>
<span class="on-badge__axis">Evidence</span>
<span class="on-badge__level">E3</span>
<span class="on-badge__label">Acute in vivo</span>
</div>
<div class="on-badge on-badge--illustrative" markdown>
<span class="on-badge__axis">Manufacturing</span>
<span class="on-badge__level">M2</span>
<span class="on-badge__label">Manufacturable by most PCBA vendors</span>
</div>
</div>

See [Maturity level definitions](../regulatory/maturity.md) for more information.

!!! note "Standing disclaimer"
    These levels describe testing history and documentation state. They are not
    regulatory clearance and not a safety endorsement.

## About the Gen2 PCBA

The Gen2 PCBA has two fully independent bipolar stimulation channels (also configurable as four monopolar stim channels), capable of
square-wave stimulation up to 1200 Hz or low-frequency sine-wave stimulation, four
configurable analog front ends (AFEs) for biosignal recording, and one I2C port for
third-party digital sensors.
([source](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/blob/main/README.md))

Detailed AFE filter/gain/sampling-rate specifications are in the Windows app's
synced [Getting started](../software/windows/getting-started.md) guide.

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

## Documentation

### Gen2 PCBA design files

The schematic and layout PDF in `Gen2 PCBA/`, embedded below:

<details class="on-pdf-details" markdown>
<summary>Schematic + layout</summary>
<div class="on-pdf" markdown>
<div class="on-pdf__embed" data-pdf-src="https://raw.githubusercontent.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/main/Gen2%20PCBA/IPG-schematic-layout.PDF" data-pdf-title="IPG schematic + layout"></div>
<a class="on-pdf__fallback" href="https://raw.githubusercontent.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/main/Gen2%20PCBA/IPG-schematic-layout.PDF">Open directly &#8599;</a>
</div>
</details>

## Firmware Design Documentation

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



## Firmware and software

- **MCU firmware** (`Gen2 PCBA/FW-MCU-H2/`) is specific to this revision — do not
  carry over Gen1 MCU firmware claims. See the
  [MCU flashing guide](ipg/mcu-flashing.md).
- **BLE firmware** (`FW-BLE/`) is shared with Gen1.
  See the [BLE flashing guide](ipg/ble-flashing.md).
- Control software (Windows now, Android in development) is the same across both
  revisions — see [Software](../software/windows.md).

