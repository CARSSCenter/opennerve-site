---
title: Implantable Pulse Generator
---

# Implantable Pulse Generator (IPG)

**Repo:** [CARSSCenter/OpenNerve-Implantable-Pulse-Generator](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator)
**Applies to revision:** not yet assigned per revision — see [Platform architecture](../start/architecture.md) for Gen1 vs. Gen2 differences
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
capability — see [Platform architecture](../start/architecture.md#two-ipg-hardware-generations)
for the specifics of each.

## Maturity

| Axis | Level | Notes |
|---|---|---|
| Documentation (D) | ? | Not yet assigned by maintainers |
| Evidence (E) | ? | Not yet assigned by maintainers |
| Manufacturing readiness (M) | ? | Not yet assigned by maintainers |
| Availability | ? | Not yet assigned |

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

## Software

- Windows app ("ONrecorder") — see [Windows software page](../software/windows.md).
- Android app, in development — see [Android software page](../software/android.md).
  Both require an encryption key exchange with the IPG firmware; contact
  carss@usc.edu for the shared development key, or see the encryption guide
  above to generate your own.
  ([source](https://github.com/CARSSCenter/OpenNerve-Windows-App/blob/main/README.md))

## Charging

The IPG can be charged inductively using the [OpenNerve Charger](charger.md).
