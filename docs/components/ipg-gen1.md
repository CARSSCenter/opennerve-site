---
title: IPG — Gen1 PCBA
---

# Implantable Pulse Generator — Gen1 PCBA

**Repo:** [CARSSCenter/OpenNerve-Implantable-Pulse-Generator](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator){ target="_blank" } · `Gen1 PCBA/` and `Docs/`


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

## About Gen1 PCBA

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



## Firmware and software

- **MCU firmware** (`Gen1 PCBA/FW-MCU-H1-251201.hex`) is specific to this
  revision — do not carry over Gen2 MCU firmware claims. See the
  [MCU flashing guide](ipg/mcu-flashing.md).
- **BLE firmware** (`FW-BLE/`) is shared with Gen2.
  See the [BLE flashing guide](ipg/ble-flashing.md).
- Control software (Windows now, Android in development) is the same across both
  revisions — see [Software](../software/windows.md).


