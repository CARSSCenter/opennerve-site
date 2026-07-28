---
title: Platform architecture
---

# Platform architecture

## Components and how they connect

<div class="on-diagram" markdown>

<div class="on-diagram--top on-diagram__group" markdown>
<span class="on-diagram__group-label">Control software</span>
[Windows app<span class="on-diagram__node-tag">ONrecorder</span>](../software/windows.md){: .on-diagram__node }
[Android app<span class="on-diagram__node-tag">in development</span>](../software/android.md){: .on-diagram__node }
</div>

<div class="on-diagram--conn-top on-diagram__connector on-diagram__connector--v on-diagram__connector--wireless" markdown>
<span class="on-diagram__connector-label">BLE</span>
</div>

<div class="on-diagram--left on-diagram__group" markdown>
<span class="on-diagram__group-label">Leads</span>
[Standard Leads](../components/standard-leads.md){: .on-diagram__node }
[Sub-mm Parylene Cuff](../components/parylene-cuff.md){: .on-diagram__node }
</div>

<div class="on-diagram--conn-left on-diagram__connector on-diagram__connector--h" markdown>
<span class="on-diagram__connector-label">stim / record</span>
</div>

[IPG<span class="on-diagram__node-tag">Gen1 · Gen2 PCBA</span>](../components/ipg.md){: .on-diagram--hub .on-diagram__node .on-diagram__node--hub }

<div class="on-diagram--conn-right on-diagram__connector on-diagram__connector--h on-diagram__connector--wireless" markdown>
<span class="on-diagram__connector-label">inductive</span>
</div>

[Charger<span class="on-diagram__node-tag">300 kHz</span>](../components/charger.md){: .on-diagram--right .on-diagram__node }

<div class="on-diagram--conn-bottom on-diagram__connector on-diagram__connector--v" markdown>
<span class="on-diagram__connector-label">I2C</span>
</div>

<div class="on-diagram--bottom on-diagram__group" markdown>
<span class="on-diagram__group-label">Sensors</span>
[Mechanical Sensors](../components/mechanical-sensors.md){: .on-diagram__node }
[Chemical Sensors](../components/chemical-sensors.md){: .on-diagram__node }
</div>

</div>

Same diagram as the [landing page](../index.md#the-platform); shared styling
lives in `docs/stylesheets/extra.css` since it's used on both pages (see
`CLAUDE.md` §7).

- The **IPG** is the hub: current-based bipolar stimulation, multiple analog
  front ends for biosignal recording, and an in-body I2C bus for third-party
  sensors. It talks to a controller over Bluetooth Low Energy and can be
  charged inductively.
  ([source](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/blob/main/README.md))
- **Leads** connect to the IPG for stimulation, recording, or sensing,
  depending on the target nerve and study. See
  [Components](../components/index.md) for the library.
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
claims on this site are tied to one revision, never averaged across both
(`CLAUDE.md` §5):

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
