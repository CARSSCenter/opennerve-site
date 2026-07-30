---
title: Development board
---

# OpenNerve development board

**Repo:** [CARSSCenter/OpenNerve-Implantable-Pulse-Generator](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator){ target="_blank" } — same hardware and firmware as the [Gen2 PCBA](ipg-gen2.md)
**Applies to revision:** Gen2 PCBA. Older internal documents refer to this same
board as "Gen1.5" — the project settled on "Gen2" as the external name; no
hardware difference is implied by the different names.
**Last reviewed:** not yet reviewed by a maintainer.

!!! danger "Not approved for human use"
    Nothing described on this page has regulatory clearance for human use. See
    [Regulatory status and disclaimers](../regulatory/status.md). The board is
    suitable for bench work and non-human research use only — see
    [What you can do with it](#what-you-can-do-with-it) below.

## What it is

The development board is a genuine OpenNerve Gen2 PCBA, retained inside its
manufacturing frame rather than trimmed down for implantation. The frame
brings every signal that would otherwise be inside an implanted enclosure out
to accessible connectors: USB-C for power and control (no battery required),
2 mm banana connectors on each of the 16 feedthrough contacts, and header
pins for both onboard microcontrollers. This is the same PCBA described on
the [Gen2 PCBA page](ipg-gen2.md) — nothing about the electronics is
different, only what surrounds them.

![Photograph of a green OpenNerve development board PCBA in its manufacturing frame, showing the labeled CH1–CH16 breakout header, a USB-C connector, and BLE/MCU JTAG and SWD header pins](../images/dev-board.jpg)

*HORNET-1-IPG development board, Rev A Ver 1.4. Illustrates the frame and
connector layout; boards currently ship as the Gen2 PCBA.*

## What you can do with it

Everything below applies to the actual, sourced Gen2 hardware and firmware
documentation already on this site — the development board is simply the
form factor that gets you access to it on a bench:

- **Stimulation and impedance measurement** — set square-wave (to 1200 Hz) or
  low-frequency sine-wave stimulation parameters and read channel impedance
  from the Windows control app. See the synced
  [Getting started guide](ipg/getting-started.md).
- **Biosignal recording** — four configurable analog front ends (AFEs) for
  ECG, EMG, and eCAP/ENG recording; filter, gain, and sampling-rate figures
  for each are in the [Getting started guide](ipg/getting-started.md#sensing).
- **Firmware development** — flash the STM32 MCU firmware or the shared
  nRF52810 BLE firmware directly over JTAG/SWD. See the
  [MCU flashing guide](ipg/mcu-flashing.md) and
  [BLE flashing guide](ipg/ble-flashing.md).
- **Over-the-air firmware updates** — push a new firmware image over BLE
  without a wired connection. See the
  [OTA firmware update guide](ipg/ota-updates.md). Powering the board from
  USB disables the magnetic switch, so waking it after an OTA update uses the
  reset button instead — noted in that guide.
  ([source](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/blob/main/Tools/ota_updater/user-guide.md))
- **On-device log capture** — download and clear logs recorded internally by
  the IPG firmware. See the [Logging guide](ipg/logging.md).
- **Third-party digital sensors** — the board's I2C port supports the AMS
  motion-sensing lead today, and is open to other digital sensors under
  development. See [Standard Leads](standard-leads.md).

## What the frame adds

The frame itself — the parts that only exist on the development board, not on
an implantable unit — is described in an internal project write-up rather
than a published repo file. It is recorded here, marked accordingly per
`CLAUDE.md` §3, rather than left out:

!!! warning "Not yet linked to a public source"
    The list below comes from an internal document, not a file in the IPG
    repo. Treat it as accurate but currently unverifiable by a third party.
    Publishing an equivalent file upstream (e.g. `Docs/Dev-Board.md`) would
    resolve this — see the open flag in `CLAUDE.md` §9.

- 2 mm banana connectors for each of the 16 feedthrough contacts, plus
  enclosure ground
- JTAG, SWD, and serial headers for both the main and BLE microcontrollers
- Power and control over USB-C, with no battery required
- Test points for verifying and troubleshooting PCBA functionality
- Connectors for a BLE antenna, batteries, and an inductive receive coil —
  each supplied separately from the board itself

## Maturity

| Axis | Level | Notes |
|---|---|---|
| Documentation (D) | ? | Not yet assigned by maintainers |
| Evidence (E) | ? | Not yet assigned by maintainers |
| Manufacturing readiness (M) | ? | Not yet assigned by maintainers |
| Availability | Purchasable — contact the consortium | See [How to get one](#how-to-get-one) |

See [Maturity level definitions](../regulatory/maturity.md).

!!! note "Standing disclaimer"
    These levels describe testing history and documentation state. They are
    not regulatory clearance and not a safety endorsement.

## How to get one

Development boards are provided directly by the consortium rather than
through an online store. Contact **carss@usc.edu** to ask about availability
— the same address used for the firmware encryption key exchange described
on the [IPG overview page](ipg.md#software).

## Documentation

- [Getting started](ipg/getting-started.md)
- [MCU flashing guide](ipg/mcu-flashing.md)
- [BLE flashing guide](ipg/ble-flashing.md)
- [OTA firmware update guide](ipg/ota-updates.md)
- [Logging guide](ipg/logging.md)
- [Gen2 PCBA](ipg-gen2.md) — the underlying hardware this board carries
