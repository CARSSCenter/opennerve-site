---
title: Implantable Pulse Generator
---

# Implantable Pulse Generator (IPG)

**Repo:** [CARSSCenter/OpenNerve-Implantable-Pulse-Generator](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator)
**Applies to revision:** this page is revision-independent — maturity, evidence,
and BOM/fab claims are made per-revision on the [Gen2 PCBA](ipg-gen2.md) and
[Gen1 PCBA](ipg-gen1.md) pages, not here.
**Last reviewed:** not yet reviewed

!!! danger "Not approved for human use"
    Nothing described on this page has regulatory clearance for human use.
    See [Regulatory status and disclaimers](../regulatory/status.md).

## What it is

The IPG provides current-based bipolar electrical stimulation, records
biosignals through multiple analog front ends, and connects to third-party
sensors over an in-body I2C network. It communicates with a controller over
Bluetooth Low Energy and can be charged inductively. Two microcontrollers are
used: an nRF52810 for BLE, and an STM32 ("MCU") for most other functions.
([source](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/blob/main/README.md))

Two PCB revisions exist with different channel counts and stimulation
capability. Each has its own maturity, evidence, and BOM/fab-notes page — see
[Gen1 vs. Gen2](#gen1-vs-gen2) below. Also see
[Platform architecture](../start/architecture.md#two-ipg-hardware-generations).

The Gen2 PCBA is also available as a bench-friendly
[development board](dev-board.md) — the same hardware, retained in its
manufacturing frame with USB-C power and breakout connectors, rather than
trimmed down for implantation.

## Gen1 vs. Gen2

| | [Gen2 PCBA](ipg-gen2.md) | [Gen1 PCBA](ipg-gen1.md) |
|---|---|---|
| Stimulation channels | 2 fully independent bipolar (square wave to 1200 Hz, or low-frequency sine) | 8 pseudo-independent monopolar (configurable as 4 bipolar) |
| Biosignal AFEs | 4 configurable | 2 differential (ECG/EMG/eCAP) |
| MCU firmware | `Gen2 PCBA/FW-MCU-H2/` — revision-specific | `Gen1 PCBA/FW-MCU-H1-251201.hex` — revision-specific |
| BLE firmware | `FW-BLE/` — shared with Gen1 | `FW-BLE/` — shared with Gen2 |
| Design-output completeness | Schematic+layout, BOM, STEP, Altium source. **No** separate assembly or fabrication drawing, no test-point document. | Schematics, layout, BOM, **assembly drawing, fabrication drawing, test-point deck**, Altium source (incl. rendered assembly/fab drawing-exchange files). |
| Maturity, evidence, BOM/fab detail | [Gen2 page](ipg-gen2.md#maturity) | [Gen1 page](ipg-gen1.md#maturity) |

Both revisions share the same enclosure family (versioned independently, current
rev 0.7 — see either revision page), the same BLE firmware, and the same control
software.

## Maturity

Maturity, evidence, and availability are assigned **per PCB revision**, never
combined — see [Gen2 PCBA maturity](ipg-gen2.md#maturity) and
[Gen1 PCBA maturity](ipg-gen1.md#maturity). Both currently show illustrative,
not-yet-assigned values used only to review page layout; see each page's banner.

See [Maturity level definitions](../regulatory/maturity.md).

!!! note "Standing disclaimer"
    These levels describe testing history and documentation state. They are
    not regulatory clearance and not a safety endorsement.

## Documentation synced from the upstream repo

The pages below are pulled from the IPG repo's `Docs/` directory by
`tools/sync_docs.py` — each carries a banner recording the exact upstream
commit it reflects. Edit them upstream, not here.

- [Getting started](ipg/getting-started.md)
- [MCU flashing guide](ipg/mcu-flashing.md)
- [BLE flashing guide](ipg/ble-flashing.md)
- [OTA firmware update guide](ipg/ota-updates.md)
- [Logging guide](ipg/logging.md)
- [Magnetic switch guide](ipg/magnetic-switch.md)
- [Encryption instructions](ipg/encryption.md)
- [Charging (CAR-212)](ipg/charging.md)
- [WPT implementation report](ipg/wpt-report.md)
- [Impedance measurement strategy](ipg/impedance.md)
- [Tools: sine wave generator](ipg/tools-sine-wave-generator.md) — bench tool for
  testing neuromodulation hardware, from the repo's `Tools/` directory
- [Tools: OTA updater user guide](ipg/tools-ota-updater.md) — CLI tool for
  wireless Gen2 firmware updates over BLE, also from `Tools/`

## Software

- Windows app ("ONrecorder") — see [Windows software page](../software/windows.md).
- Android app, in development — see [Android software page](../software/android.md).
  Both require an encryption key exchange with the IPG firmware; contact
  carss@usc.edu for the shared development key, or see the encryption guide
  above to generate your own.
  ([source](https://github.com/CARSSCenter/OpenNerve-Windows-App/blob/main/README.md))

## Charging

The IPG can be charged inductively using the [OpenNerve Charger](charger.md).
