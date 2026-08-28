---
title: Bring your own lead
---

# Bring your own lead

**Repo references:** [CARSSCenter/OpenNerve-Implantable-Pulse-Generator](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator){ target="_blank" } (header/enclosure) and [CARSSCenter/OpenNerve-Standard-Leads](https://github.com/CARSSCenter/OpenNerve-Standard-Leads){ target="_blank" } (mating lead geometry)

You are not limited to OpenNerve's own [Standard Leads](standard-leads.md) and
[Sub-mm Parylene Cuff](parylene-cuff.md). A number of third-party leads have been used with OpenNerve IPGs and dev boards. There are two pathways to using third-party leads with the OpenNerve IPG:

**On the benchtop** — the [development board](dev-board.md) breaks out
feedthrough contacts to header pins. Any electrode with a wire
can be connected directly, with no connector compatibility question at all. See
[Getting started](../software/windows/getting-started.md).

**Implanted** — using a third-party lead with the packaged OpenNerve IPG requires it to
match the header pitch and diameter of the Bal-Seal connectors used.

## The packaged IPG header specification

The IPG's lead connector is a Bal Seal Sygnus Neuro system, 2.8 mm pitch,
arranged as four bores of four contacts each (16 total; a bore can also be
rebuilt as an 8-contact configuration).
([source](https://github.com/CARSSCenter/OpenNerve-Implantable-Pulse-Generator/blob/main/Docs/DHF-Files/Nest%201-IPG%20and%20Charger%20-%20Mechanical%20Specifications.pdf))

A lead's proximal end has to match this geometry to seat correctly:

| Parameter | Value |
|---|---|
| Lead outer diameter | 1.270 ±0.013 mm |
| Contacts per bore | 4 (4 functional ring contacts + 1 terminal set-screw ring) |
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

![Simplified diagram showing an example lead proximal end compatible with the OpenNerve IPG header: 1.270 mm diameter, three 1.500 mm ring contacts on 2.745 mm pitch separated by 1.245 mm insulating gaps, a terminal 3.000 mm set-screw contact, and a 3.253 mm inactive tip segment](../images/byo-lead-proximal.svg)


Unlike in the cardiac space, there is no ISO or AAMI connector standard for neuromodulation leads  Bal Seal's Sygnus connector system, which is used in OpenNerve, is engineered per customer: pitch, housing diameter, spring force,
and seal design are all specified individually for each device. Two
implants both built on Sygnus connectors are not guaranteed to share a
mating geometry just because they share a supplier.

!!! warning "Mechanical fit is not electrical fit"
    1.27–1.3 mm is a common lead diameter across neuromodulation devices, so
    a lead built for a different header may still physically insert into an
    OpenNerve bore and hold under the set screw — while its contacts sit in
    the wrong position relative to the Bal Seal springs. That can bridge two
    seals, miss a contact band, or make an intermittent connection that
    looks like a working channel until it isn't. Check impedance on every
    channel before trusting a non-OpenNerve lead, and don't assume a
    mechanical fit is a working one.
