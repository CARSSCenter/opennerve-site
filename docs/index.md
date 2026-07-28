---
title: OpenNerve
hide:
  - navigation
  - toc
---

<div class="on-draftbar" markdown>
**Draft — internal review.** This site is a working draft circulated for
feedback. Branding, licensing, and maturity assignments are not settled. Do
not distribute outside the review group.
</div>

<div class="on-hero" markdown>

# Open source implantable hardware for peripheral nerve research

An implantable pulse generator, a lead library for stimulation, recording,
and biomarker sensing, a wireless charger, and control software for Windows
and Android. Every repo is CC-BY-4.0.

<div class="on-hero__reg" markdown>
**Preclinical research use only.** No component has regulatory clearance for
human use. [Full status and disclaimers →](regulatory/status.md)
</div>

<div class="on-hero__ctas" markdown>
[Components & maturity](components/index.md){ .md-button .md-button--primary }
[View on GitHub](https://github.com/CARSSCenter){ .md-button }
</div>

</div>

<div class="on-section" markdown>

## The platform

The IPG is the hub. Leads and sensors connect to it directly; a controller
talks to it over Bluetooth Low Energy; a charger replenishes it inductively.
Every block below links to that component's page.
([source](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/blob/main/README.md))

<div class="on-diagram" markdown>

<div class="on-diagram--top on-diagram__group" markdown>
<span class="on-diagram__group-label">Control software</span>
[Windows app<span class="on-diagram__node-tag">ONrecorder</span>](software/windows.md){: .on-diagram__node }
[Android app<span class="on-diagram__node-tag">in development</span>](software/android.md){: .on-diagram__node }
</div>

<div class="on-diagram--conn-top on-diagram__connector on-diagram__connector--v on-diagram__connector--wireless" markdown>
<span class="on-diagram__connector-label">BLE</span>
</div>

<div class="on-diagram--left on-diagram__group" markdown>
<span class="on-diagram__group-label">Leads</span>
[Standard Leads](components/standard-leads.md){: .on-diagram__node }
[Sub-mm Parylene Cuff](components/parylene-cuff.md){: .on-diagram__node }
</div>

<div class="on-diagram--conn-left on-diagram__connector on-diagram__connector--h" markdown>
<span class="on-diagram__connector-label">stim / record</span>
</div>

[IPG<span class="on-diagram__node-tag">Gen1 · Gen2 PCBA</span>](components/ipg.md){: .on-diagram--hub .on-diagram__node .on-diagram__node--hub }

<div class="on-diagram--conn-right on-diagram__connector on-diagram__connector--h on-diagram__connector--wireless" markdown>
<span class="on-diagram__connector-label">inductive</span>
</div>

[Charger<span class="on-diagram__node-tag">300 kHz</span>](components/charger.md){: .on-diagram--right .on-diagram__node }

<div class="on-diagram--conn-bottom on-diagram__connector on-diagram__connector--v" markdown>
<span class="on-diagram__connector-label">I2C</span>
</div>

<div class="on-diagram--bottom on-diagram__group" markdown>
<span class="on-diagram__group-label">Sensors</span>
[Mechanical Sensors](components/mechanical-sensors.md){: .on-diagram__node }
[Chemical Sensors](components/chemical-sensors.md){: .on-diagram__node }
</div>

</div>

See [Platform architecture](start/architecture.md) for the full write-up,
including the two IPG hardware generations and their different channel
counts.

</div>

<div class="on-section" markdown>

## What is actually published

<div class="on-cols" markdown>

<div class="on-col" markdown>
<div class="on-col__heading">Ships today</div>

- Schematics, PCB layout, and BOM for both IPG PCBAs (`Gen1`, `Gen2`)
- STEP models for both boards and the shared enclosure (rev 0.7)
- Assembly drawing, fabrication drawing, and test-point deck — **Gen1 only**
- MCU firmware for each generation, plus BLE firmware shared by both
- Windows control app source (`ONrecorder`)
- All of the above, CC-BY-4.0

</div>

<div class="on-col" markdown>
<div class="on-col__heading">Known gaps</div>

- Gen2 has no separate assembly drawing, fabrication drawing, or test-point
  document — Gen1 does
- Designed in Altium Designer V25 (closed source); a third-party KiCad
  converter exists, "use at your own risk"
- BOMs are `.xlsx`, not a machine-readable open format
- No tagged release and no DOI on the IPG repo — see
  [maturity level definitions](regulatory/maturity.md) for why that blocks D3
- Android app is prototype code, not a released application

</div>

</div>

Detail and sourcing: [Gen2 PCBA](components/ipg-gen2.md),
[Gen1 PCBA](components/ipg-gen1.md).

</div>

<div class="on-section" markdown>

## How maturity is tracked

Every component is assessed on three independent axes, always shown
separately — never combined into one score, because a composite hides
exactly the information a reader needs.

<div class="on-scale" markdown>

<div class="on-scale__row" markdown>
<span class="on-scale__axis">Documentation</span>
<div class="on-scale__steps" markdown>
<span class="on-scale__step">D0 Concept</span>
<span class="on-scale__step">D1 Partial</span>
<span class="on-scale__step">D2 Reproducible</span>
<span class="on-scale__step">D3 Released</span>
</div>
</div>

<div class="on-scale__row" markdown>
<span class="on-scale__axis">Evidence</span>
<div class="on-scale__steps" markdown>
<span class="on-scale__step">E0 None</span>
<span class="on-scale__step">E1 Bench</span>
<span class="on-scale__step">E2 Acute in vivo</span>
<span class="on-scale__step">E3 Chronic in vivo</span>
<span class="on-scale__step">E4 GLP safety</span>
<span class="on-scale__step">E5 Clinical</span>
</div>
</div>

<div class="on-scale__row" markdown>
<span class="on-scale__axis">Manufacturing</span>
<div class="on-scale__steps" markdown>
<span class="on-scale__step">M0 Lab build</span>
<span class="on-scale__step">M1 Pilot</span>
<span class="on-scale__step">M2 GMP-capable</span>
<span class="on-scale__step">M3 GMP-built</span>
</div>
</div>

</div>

Availability is tracked separately, not as a fourth level: files only,
purchasable, fabricate-to-order, or not currently available.

**Most levels are not yet assigned.** An unfilled cell means "not yet
assessed," not "zero." See the
[component overview and maturity table](components/index.md) and
[maturity level definitions](regulatory/maturity.md).

</div>

<div class="on-section" markdown>

## Find your path

<div class="on-cols" markdown>

<div class="on-col" markdown>
<div class="on-col__heading">Evaluating for a study</div>

Start with what OpenNerve is, then check the maturity table for the specific
component and hardware revision you'd rely on.

- [What is OpenNerve](start/overview.md)
- [Component overview & maturity](components/index.md)

</div>

<div class="on-col" markdown>
<div class="on-col__heading">Planning animal or human work</div>

Regulatory vocabulary used precisely, and a plain statement of what evidence
exists today and what doesn't.

- [Regulatory status and disclaimers](regulatory/status.md)

</div>

<div class="on-col" markdown>
<div class="on-col__heading">Contributing</div>

Hardware, firmware, software, and documentation all take contributions.

- [How to contribute](contribute/index.md)

</div>

</div>

</div>

<div class="on-section" markdown>

## Who builds it

A three-institution consortium, funded under NIH SPARC award
[1U41NS129514](https://reporter.nih.gov/project-details/10557000):

- **University of Southern California** — project lead; advanced sensing and
  stimulation leads, including a sub-mm Parylene cuff and strain,
  temperature, pH, and neurotransmitter sensors
- **Med-Ally LLC** — IPG enclosure, standard leads, QMS/GMP manufacturing
- **Medipace Inc.** — IPG PCB, firmware, control software, dev board
  manufacture and distribution

See [Governance](contribute/governance.md) for the funding entity name and
open questions on branding and licensing.

</div>

<div class="on-section on-section--tight" markdown>

## Community

Questions and design proposals happen in GitHub Discussions, in context.

<div class="on-hero__ctas" markdown>
[Ask a technical question](https://github.com/axbaldwin1/opennerve-site/discussions/new?category=q-a){ .md-button }
[Propose a design change](https://github.com/axbaldwin1/opennerve-site/discussions/new?category=design-proposals){ .md-button }
</div>

These links are provisional — see [Community](community/index.md) for the
target repo and category names still to be confirmed.

</div>
