---
title: Windows (ONrecorder)
---

# Windows app (ONrecorder)

**Repo:** [CARSSCenter/OpenNerve-Windows-App](https://github.com/CARSSCenter/OpenNerve-Windows-App)
**Applies to revision:** not yet assigned
**Last reviewed:** not yet reviewed

## What it is

A Windows desktop application (C#, .NET, WinForms) for communicating with and
controlling the OpenNerve IPG over Bluetooth Low Energy. It targets 32-bit
Windows (x86), builds in Visual Studio 2022 with the .NET SDK, and requires
no third-party runtime beyond standard Windows BLE support. It discovers and
connects to the IPG, performs an authentication handshake, then exchanges
control and data messages using a custom BLE protocol. It is optimized for
the Gen2 board but can target Gen1 by changing a constant in `Form1.cs`.
([source](https://github.com/CARSSCenter/OpenNerve-Windows-App/blob/main/README.md))

![Screenshot of the OpenNerve Windows app](../images/windows-software.jpg)

*The Windows app for OpenNerve allows control of stimulation and real-time streaming of data from both analog front-ends and I2C sensors.*

Admin authentication requires a private key file placed locally (not
committed to the repo); contact carss@usc.edu for the shared development key,
or generate your own — see the encryption guide on the
[IPG component page](../components/ipg.md#documentation-synced-from-the-upstream-repo).

Licensed CC-BY-4.0.

## Documentation synced from the upstream repo

The following documentation is available in the Windows app's repository and has
been mirrored here for convenience. Please submit pull requests for edits in the
original document, not on this website!

- [Getting started](windows/getting-started.md)

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
