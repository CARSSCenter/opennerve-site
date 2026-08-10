---
title: Bring your own lead
---

# Bring your own lead

**Repo:** [CARSSCenter/OpenNerve-Implantable-Pulse-Generator](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator){ target="_blank" } (header/enclosure) and [CARSSCenter/OpenNerve-Standard-Leads](https://github.com/CARSSCenter/OpenNerve-Standard-Leads){ target="_blank" } (mating lead geometry)
**Applies to revision:** the IPG enclosure/header, shared across Gen1 and Gen2 PCBAs and versioned independently (current rev 0.7) — see [Gen2 PCBA](ipg-gen2.md#design-outputs-and-bomfab-notes) / [Gen1 PCBA](ipg-gen1.md#design-outputs-and-bomfab-notes).
**Last reviewed:** not yet reviewed by a maintainer.

!!! danger "Not approved for human use"
    Nothing described on this page has regulatory clearance for human use. See
    [Regulatory status and disclaimers](../regulatory/status.md).

You are not limited to OpenNerve's own [Standard Leads](standard-leads.md) and
[Sub-mm Parylene Cuff](parylene-cuff.md). Researchers have already connected
other electrodes and leads to OpenNerve hardware, and you're welcome to do the
same. This page covers two different ways to do that.

## Two different questions

**On the bench** — the [development board](dev-board.md) breaks all 16
feedthrough contacts out to 2 mm banana connectors. Any electrode with a wire
can be connected directly, with no connector compatibility question at all.
This is the lowest-barrier path, and it's what most of the third-party-lead
use described below actually did. See
[Getting started](ipg/getting-started.md).

**Implanted** — a lead has to mechanically and electrically mate with the
IPG's header connector. That's a real constraint, and it's what the rest of
this page is about.

## Leads and sensors researchers have used

- **CorTec** and **Microprobes for LifeScience** leads have been used with
  OpenNerve hardware in acute rat studies. These are examples of what has
  been connected in practice, not a statement that either vendor's leads are
  mechanically compatible with the IPG's implantable header — treat them as
  a starting point for your own evaluation, not a benchmark.
- **Microprobes for LifeScience Macro Electrodes** (EMG needle electrodes)
  were used for electromyography in the UCLA sacral-stimulation minipig
  studies, wired to external data-acquisition hardware (an NI 9234/cDAQ-9184
  or an oscilloscope) rather than to the IPG itself.
- Two USC-built sensors were used in the same studies over their own wired
  connections, independent of the IPG header: a capacitive strain sensor
  (Zhao lab) and a Parylene-based electrochemical dopamine sensor (Mousavi
  lab).
- Stimulation and recording in these studies used OpenNerve Gen1 development
  boards with Med-Ally bipolar nerve cuffs on the sacral nerve roots — the
  one OpenNerve-header connection in the list above.

  ([dataset source](https://sparc.science/datasets/653) — see
  [Animal data](../data/animal-data.md) for the full citation)

## The implantable header

The IPG's lead connector is a Bal Seal Sygnus Neuro system, 2.8 mm pitch,
arranged as four bores of four contacts each (16 total; a bore can also be
rebuilt as an 8-contact configuration).
([source](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/blob/main/Docs/DHF-Files/Nest%201-IPG%20and%20Charger%20-%20Mechanical%20Specifications.pdf))

A lead's proximal end has to match this geometry to seat correctly:

| Parameter | Value |
|---|---|
| Lead outer diameter | 1.270 ±0.013 mm |
| Contacts per bore | 4 (3 ring contacts + 1 terminal set-screw contact) |
| Ring contact length | 1.500 mm each |
| Insulating gap between contacts | 1.245 mm |
| Contact pitch (center-to-center) | 2.745 mm, uniform |
| Set-screw contact length | 3.000 mm (terminal contact) |
| Inactive tip segment | 3.253 mm |
| Full proximal contact array | 14.488 mm, tip to end |
| Retention force | ≥ 10 N (ISO 14708-2 §23.6) |
| Insertion / withdrawal force | ≤ 9.8 N (2.2 lbf) |
| Set screw | #2-56, 316L stainless, 5 in-oz hex torque |

([lead geometry source](https://github.com/CARSSCenter/OpenNerve-Standard-Leads/blob/main/Nest%203%20-%20Leads%20-%20Design%20File%20Set.pdf), drawing 3019;
[connector materials source](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/blob/main/Docs/DHF-Files/Nest%201-IPG%20and%20Charger%20-%20Mechanical%20Specifications.pdf))

![Dimensioned side view of a lead proximal end compatible with the OpenNerve IPG header: 1.270 mm diameter, three 1.500 mm ring contacts on 2.745 mm pitch separated by 1.245 mm insulating gaps, a terminal 3.000 mm set-screw contact, and a 3.253 mm inactive tip segment, for a total proximal contact array length of 14.488 mm](../images/byo-lead-proximal.svg)

## Why there is no compatibility list

There is no ISO or AAMI connector standard for neuromodulation leads — unlike
cardiac rhythm management, which has one (IS-1, IS-4/DF-4, under ISO 27186,
a separate family built around a 3.2 mm pitch). Bal Seal's Sygnus connector
system is engineered per customer: pitch, housing diameter, spring force,
and seal design are all specified individually for each device. Two
implants both built on Sygnus connectors are not guaranteed to share a
mating geometry just because they share a supplier.

That means the geometry above is the only reliable way to check whether a
given lead will fit — there is no shortcut through a standard or a
manufacturer name.

!!! warning "Mechanical fit is not electrical fit"
    1.27–1.3 mm is a common lead diameter across neuromodulation devices, so
    a lead built for a different header may still physically insert into an
    OpenNerve bore and hold under the set screw — while its contacts sit in
    the wrong position relative to the Bal Seal springs. That can bridge two
    seals, miss a contact band, or make an intermittent connection that
    looks like a working channel until it isn't. Check impedance on every
    channel before trusting a non-OpenNerve lead, and don't assume a
    mechanical fit is a working one.

## Maturity

| Axis | Level | Notes |
|---|---|---|
| Documentation (D) | ? | Not yet assigned by maintainers |
| Evidence (E) | ? | Not yet assigned by maintainers |
| Manufacturing readiness (M) | ? | Not yet assigned by maintainers |
| Availability | Not applicable | This page describes an interface, not a product |

See [Maturity level definitions](../regulatory/maturity.md).

!!! note "Standing disclaimer"
    These levels describe testing history and documentation state. They are
    not regulatory clearance and not a safety endorsement.
