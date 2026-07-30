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

## How OpenNerve started

OpenNerve was developed by the Center for Autonomic Recording and Stimulation Systems (CARSS), funded under NIH SPARC HORNET
[1U41NS129514](https://reporter.nih.gov/project-details/10557000). Members include:

- [**University of Southern California**](https://usc.edu/) — lead institution
    - [**Biomedical Microsystems Lab, PI Ellis Meng**](https://biomems.usc.edu/) - manages project, system intergration lead, and develops 
  microfabricated Parylene C cuff for sub-mm peripheral nerves
    - [**MADLab, PI Maral Mousavi**](https://madlab.usc.edu/) - develops chemical sensing leads for dopamine, serotonin, and pH
    - [**Zhao Research Group, PI Hangbo Zhao**](https://sites.usc.edu/zhaogroup/) - develops mechanial sensing leads for strain and temperature
- [**Med-Ally LLC**](https://med-ally.com/) — IPG enclosure, standard leads, QMS/GMP manufacturing
- [**Medipace Inc.**](https://www.medipaceinc.com/) — IPG PCBA and firmware management, control software, dev board
  manufacture and distribution
- [**Focus Uy**](https://focus.uy/) — IPG and Charger PCBA design
- [**CoForce Ltd**](https://www.coforcemed.com/en/) — IPG firmware development

Our open-source community is currently managed by OpenNerve's developers and contributors. See [Governance](../contribute/governance.md) for more information.
