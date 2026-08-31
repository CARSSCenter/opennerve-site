---
title: Android
---

# Android app

**Repo:** [CARSSCenter/OpenNerve-Android-App](https://github.com/CARSSCenter/OpenNerve-Android-App)


## What it is

An Android app for interacting with OpenNerve IPGs and development boards.
It is under active development — prototype code, not a released application.
([source](https://github.com/CARSSCenter/OpenNerve-Android-App/blob/main/README.md))

Authentication uses ECDSA P-256 key pairs for three permission levels (Admin,
Clinician, Patient); the IPG firmware holds the public keys, and the app must
supply the matching private key over BLE at startup. Development keys are
available on request; the repo documents how to generate your own with
OpenSSL for any new clinical application.

## Maturity

<div class="on-maturity" markdown>
<div class="on-badge" markdown>
<span class="on-badge__axis">Evidence</span>
<span class="on-badge__level">E0</span>
<span class="on-badge__label">Concept — in development</span>
</div>
<div class="on-badge" markdown>
<span class="on-badge__axis">Manufacturing readiness</span>
<span class="on-badge__level">N/A</span>
<span class="on-badge__label">Not applicable to software</span>
</div>
</div>

See [Maturity level definitions](../regulatory/maturity.md).
