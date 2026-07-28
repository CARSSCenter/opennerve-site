---
title: Android
---

# Android app

**Repo:** [CARSSCenter/OpenNerve-Android-App](https://github.com/CARSSCenter/OpenNerve-Android-App)
**Applies to revision:** not yet assigned
**Last reviewed:** not yet reviewed

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

| Axis | Level | Notes |
|---|---|---|
| Documentation (D) | ? | Not yet assigned by maintainers |
| Evidence (E) | ? | Not yet assigned by maintainers |
| Manufacturing readiness (M) | ? | Not yet assigned by maintainers |
| Availability | ? | Not currently available — in development |

See [Maturity level definitions](../regulatory/maturity.md).

!!! note "Standing disclaimer"
    These levels describe testing history and documentation state. They are
    not regulatory clearance and not a safety endorsement.
