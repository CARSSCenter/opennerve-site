---
title: What is OpenNerve
---

# What is OpenNerve

OpenNerve is an open source hardware and software platform for bioelectronic
medicine research: an implantable pulse generator (IPG), a library of leads
for electrical stimulation, biosignal recording, and biomarker sensing, an
inductive wireless charger, and control software (a Windows desktop app and an
Android app in development).

The platform is built around one IPG that other components are designed to
interface with:

- The IPG provides current-based bipolar electrical stimulation, records
  biosignals through multiple analog front ends, and connects to third-party
  sensors over an in-body I2C network. It communicates with a controller over
  Bluetooth Low Energy and can be charged inductively.
  ([source](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/blob/main/README.md))
- Leads (standard and specialized) attach to the IPG for stimulation,
  recording, and sensing.
- The charger inductively charges the IPG at 300 kHz.
  ([source](https://github.com/CARSSCenter/OpenNerve-Charger/blob/main/README.md))
- Control software (Windows, Android) discovers the IPG over BLE, performs an
  authentication handshake, and exchanges control and data messages.

For what exists today, what's documented, and what you can obtain, see the
[component overview and maturity table](../components/index.md). For whether
this fits a specific research use, see
[Is this right for my work](fit.md).

!!! danger "Not approved for human use"
    OpenNerve components are used in acute and chronic preclinical studies.
    Nothing described on this site has regulatory clearance for human use.
    See [Regulatory status and disclaimers](../regulatory/status.md).
