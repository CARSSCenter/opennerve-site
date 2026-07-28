---
title: Charger
---

# Charger

**Repo:** [CARSSCenter/OpenNerve-Charger](https://github.com/CARSSCenter/OpenNerve-Charger)
**Applies to revision:** not yet assigned
**Last reviewed:** not yet reviewed

!!! danger "Not approved for human use"
    Nothing described on this page has regulatory clearance for human use.
    See [Regulatory status and disclaimers](../regulatory/status.md).

## What it is

A wireless charger that inductively charges the OpenNerve IPG at 300 kHz.
Firmware runs a state machine (`INITIALIZATION` → `WAIT` → `SCAN` →
`SLOW_CHARGE_AND_SCAN`/`CHARGE`) with front-panel buttons for scan, MCU reset,
and DFU (USB-C firmware update) mode, and LED indicators for charge state.
Charging includes thermal protection: it stops automatically if the IPG
reports a temperature at or above 41 °C.
([source](https://github.com/CARSSCenter/OpenNerve-Charger/blob/main/README.md))

## Documentation synced from the upstream repo

- [Firmware report](charger/firmware-report.md)

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
