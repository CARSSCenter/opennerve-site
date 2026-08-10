---
title: Platform architecture
---

# Platform architecture

## Components and how they connect

<div class="on-diagram" markdown>

<div class="on-diagram--lab-out on-diagram__region" markdown>Outside the body</div>

<div class="on-diagram--sw on-diagram__group" markdown>
<span class="on-diagram__group-label">Control software</span>
[![Screenshot of the OpenNerve Controller Windows app, showing a captured waveform and stimulation parameter controls](../images/windows-software.jpg){: .on-diagram__node-media } <span class="on-diagram__node-body">Windows app<span class="on-diagram__node-tag">ONrecorder</span></span>](../software/windows.md){: .on-diagram__node }
[![Placeholder — no Android app photo published yet](../images/placeholder.jpg){: .on-diagram__node-media } <span class="on-diagram__node-body">Android app<span class="on-diagram__node-tag">in development</span></span>](../software/android.md){: .on-diagram__node }
</div>

<div class="on-diagram--ble on-diagram__connector on-diagram__connector--wireless" markdown>
<span class="on-diagram__connector-rule"></span>
<span class="on-diagram__connector-label">BLE</span>
</div>

<div class="on-diagram--chg on-diagram__group" markdown>
[![CAD render of the charger's internal coil and PCB assembly](../images/charger.jpg){: .on-diagram__node-media } <span class="on-diagram__node-body">Charger</span>](../components/charger.md){: .on-diagram__node }
</div>

<div class="on-diagram--pwr on-diagram__connector on-diagram__connector--wireless on-diagram__connector--one-way" markdown>
<span class="on-diagram__connector-rule"></span>
<span class="on-diagram__connector-label">inductive</span>
</div>

<div class="on-diagram--skin" markdown>
<span class="on-diagram__skin-label">skin</span>
</div>

<div class="on-diagram--lab-in on-diagram__region" markdown>Inside the body</div>

<div class="on-diagram--hub" markdown>
[![Photograph of an assembled OpenNerve implantable pulse generator, unit 00000162](../images/hero-ipg.jpg){: .on-diagram__node-media } <span class="on-diagram__node-body">IPG<span class="on-diagram__node-tag">Gen1 · Gen2 PCBA</span></span>](../components/ipg.md){: .on-diagram__node .on-diagram__node--hub }
</div>

<div class="on-diagram--stim on-diagram__connector" markdown>
<span class="on-diagram__connector-rule"></span>
<span class="on-diagram__connector-label">stim / record</span>
</div>

<div class="on-diagram--leads on-diagram__group" markdown>
<span class="on-diagram__group-label">Leads</span>
[![Standard Leads: bipolar cuff, EMG/ECG, and 4x4 tined lead assemblies](../images/lead-standard.jpg){: .on-diagram__node-media } <span class="on-diagram__node-body">Standard Leads</span>](../components/standard-leads.md){: .on-diagram__node }
[![Sub-mm Parylene Cuff electrode](../images/lead-cuff.jpg){: .on-diagram__node-media } <span class="on-diagram__node-body">Sub-mm Parylene Cuff</span>](../components/parylene-cuff.md){: .on-diagram__node }
</div>

<div class="on-diagram--byolc on-diagram__connector" markdown>
<span class="on-diagram__connector-rule"></span>
<span class="on-diagram__connector-label">Bal Seal header</span>
</div>

<div class="on-diagram--byol" markdown>
[<span class="on-diagram__node-body">Bring your own lead<span class="on-diagram__node-tag">third-party</span></span>](../components/byo-lead.md){: .on-diagram__node }
</div>

<div class="on-diagram--i2c on-diagram__connector" markdown>
<span class="on-diagram__connector-rule"></span>
<span class="on-diagram__connector-label">I2C</span>
</div>

<div class="on-diagram--sensors on-diagram__group" markdown>
<span class="on-diagram__group-label">Sensors</span>
[![Mechanical strain sensor, two sizes shown with 1 cm scale](../images/sensor-mechanical.jpg){: .on-diagram__node-media } <span class="on-diagram__node-body">Mechanical Sensors</span>](../components/mechanical-sensors.md){: .on-diagram__node }
[![Electrochemical neurotransmitter sensor, cyclic-voltammetry trace](../images/sensor-chemical.jpg){: .on-diagram__node-media } <span class="on-diagram__node-body">Chemical Sensors</span>](../components/chemical-sensors.md){: .on-diagram__node }
</div>

</div>

Solid lines are wired connections inside the body; dashed lines cross the
skin (BLE and inductive charging); arrows show data or power direction.
Same diagram as the [landing page](../index.md#the-opennerve-platform).

- The **IPG** is the hub: current-based bipolar stimulation, multiple analog
  front ends for biosignal recording, and an in-body I2C bus for third-party
  sensors. It talks to a controller over Bluetooth Low Energy and can be
  charged inductively.
  ([source](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/blob/main/README.md))
- **Leads** connect to the IPG for stimulation, recording, or sensing,
  depending on the target nerve and study. See
  [Components](../components/index.md) for the library, or
  [Bring your own lead](../components/byo-lead.md) for the header's mating
  geometry if you want to use a different one.
- **Mechanical and chemical sensors** connect over the same I2C bus as
  third-party digital sensors.
- The **charger** inductively charges the IPG at 300 kHz and is not
  otherwise part of the signal path.
  ([source](https://github.com/CARSSCenter/OpenNerve-Charger/blob/main/README.md))
- **Control software** (Windows now, Android in development) authenticates
  to the IPG over BLE using a private/public key handshake before exchanging
  control and data messages.

## Two IPG hardware generations

The IPG has two PCB revisions, and their capabilities differ — maturity
claims on this site are tied to one revision, never averaged across both:

- **Gen1 PCBA** — eight pseudo-independent monopolar stimulation channels
  (configurable as four bipolar channels), two differential biosignal
  amplifiers for ECG/EMG/eCAP recording, one I2C port.
- **Gen2 PCBA** — two fully independent bipolar stimulation channels (square
  wave up to 1200 Hz, or low-frequency sine wave), four configurable analog
  front ends, one I2C port.

([source](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/blob/main/README.md))

## What this page is missing

This is a stub. It does not yet cover:

- Firmware architecture (BLE MCU vs. main MCU split) — draft material exists
  in the IPG repo's `Docs/` guides, linked from the
  [IPG component page](../components/ipg.md).
- The authentication/encryption model in enough detail to be useful to a new
  integrator (see the IPG's encryption guide, linked from the same page).
