# Design notes for maintainers

This file explains *why* the site is built the way it is — the decisions a future
maintainer might otherwise "fix" by accident. For the practical "how do I edit a page"
guide, see `README.md`. For day-to-day content, `README.md` is almost always the file
you want; come here when you're about to change something structural (a plugin, the
theme, the federated-docs mechanism, the deploy pipeline) and want to know if there's a
reason it's not done the obvious way.

## Generator: MkDocs + Material

Chosen for low maintenance burden and long-term buildability by a small team. Both
`mkdocs` and `mkdocs-material` are pinned to exact versions in `requirements.txt`, with
the full transitive dependency closure captured in `requirements.lock.txt`
(`pip freeze` after installing `requirements.txt` — regenerate it whenever
`requirements.txt` changes, and use the lock file for CI/deploy installs, not the
human-edited source file).

**Known risk:** Material for MkDocs entered maintenance mode (no new features, critical
fixes only) with its own maintainers moving effort to a successor project. Upstream
MkDocs itself has an incompatible 2.0 in the works that would remove the plugin system
Material depends on, with no migration path announced. The version pins mean nothing
here breaks on its own, but this generator choice should be revisited by the team within
the next few years rather than assumed permanent.

**Plugins are kept to a minimum on purpose** — every plugin is a future breakage risk for
a small team. Currently just two: `search` (MkDocs builtin, no extra dependency) and
`mkdocs-git-revision-date-localized-plugin` (real "last updated" dates per page, which
`mkdocs build` derives from each file's own git commit history — this is why the CI
workflow uses a full, unshallowed checkout).

## Federated documentation: `tools/sync_docs.py`, not a plugin

Several component repos (IPG, Windows app, Charger, the two sensor repos) own their own
engineering documentation. Rather than a federation plugin, this site pulls an explicit
allow-list of files into `docs/` via `tools/sync_docs.py` + `docs-sources.yml`.

Why not a plugin: `mkdocs-multirepo-plugin`, the obvious choice, was evaluated and
rejected — it's not actively maintained, and its import mechanism assumes every source
repo already has its own `mkdocs.yml` with a `nav:` section (none of ours do). A
glob-based import was also rejected: some source repos vendor third-party SDK markdown
(e.g. the Charger repo vendors Nordic's nRF5 SDK and mbedTLS docs) that must never be
published, and only a small fraction of any given repo's markdown is real, publishable
documentation.

How it works: `tools/sync_docs.py` is a small stdlib script (PyYAML only) that reads
`docs-sources.yml` (exact upstream path → destination under `docs/`), fetches each file
from `raw.githubusercontent.com`, resolves the ref to a commit SHA via the GitHub API,
and writes the file with front matter recording that commit and date.
`hooks/synced_edit_url.py` (a local MkDocs build hook, not a plugin) reads that front
matter and overrides the page's "Edit this page" link to point at the correct upstream
repo and commit, so contributors editing a synced page land in the right place instead
of this repo.

**Synced output is committed to this repo.** This means `mkdocs build` needs no network
access and is reproducible from a clean checkout — and it's why the deploy workflow does
not run `tools/sync_docs.py` itself. Run it manually (`python tools/sync_docs.py`)
whenever an upstream doc changes, then commit the result. `--check` validates the
manifest with no network access, for a quick sanity check before committing a
`docs-sources.yml` change.

## Avoiding `theme.custom_dir`

Overriding Material's Jinja templates via `theme.custom_dir` is a deeper maintenance-mode
risk than it looks — a Material upgrade can silently change the markup an override
depends on, and the failure mode is a broken page, not a build error. This repo avoids it
everywhere it can: the header dropdown menus (`docs/javascripts/nav-menu.js`), the header
icon links (`docs/javascripts/header-icons.js`), and the PDF embed wiring
(`docs/javascripts/pdf-embed.js`) are all plain JavaScript that reads the DOM Material
already renders, rather than template overrides.

The one exception is `overrides/partials/comments.html` (the giscus comment widget).
Material ships `partials/comments.html` as a deliberately empty extension point,
included unconditionally but with the expectation that a site substitutes real content —
there's no real Material markup in it for an upgrade to break out from under, so the
usual risk doesn't apply here.

## Vendored PDF.js

Some upstream repos publish protocols and reports as PDFs rather than markdown, to
freeze a specific release. These are shown in-page via a self-hosted, pinned build of
PDF.js (`docs/javascripts/pdfjs/`, registered via `extra_javascript`) rather than a plain
`<iframe>` — `raw.githubusercontent.com` serves PDFs with `X-Frame-Options: deny`, which
blocks a naive iframe outright. `docs/javascripts/pdf-embed.js` instead injects an
iframe pointing at the vendored viewer with `?file=<url>`; the viewer's own `fetch()` of
that URL isn't subject to the framing restriction, and `raw.githubusercontent.com` sends
permissive CORS headers, so the cross-origin fetch works.

**This vendored build carries one local patch, and it must survive any re-vendoring.**
PDF.js's `validateFileURL` function refuses to open a `?file=` URL from a different
origin than the viewer itself — a legitimate anti-abuse guard, since without it the
generic viewer could be used as an open redirect to arbitrary content. Every PDF this
site embeds from an upstream repo *is* cross-origin (`raw.githubusercontent.com`), so
`web/viewer.mjs` carries a narrow origin allow-list adding that one host — full details
and the exact patch are recorded in `docs/javascripts/pdfjs/VENDORED.txt`. Re-vendoring a
newer PDF.js release means reapplying and re-reviewing that patch, not just replacing the
files; skipping it silently reintroduces blank PDF embeds sitewide.

A PDF vendored directly into this repo (rather than fetched from an upstream repo) needs
no such patch — same-origin fetches are unconditionally allowed — but see
`docs/data/educational-resources.md`'s handling for a directory-depth gotcha: MkDocs's
directory-style URLs mean a same-directory PDF needs a `../` prefix in `data-pdf-src`,
since only markdown-syntax links get MkDocs's own relative-path rewriting, not raw HTML
attributes.

## Self-hosted fonts

`theme.font: false` plus `docs/stylesheets/fonts.css` (vendoring IBM Plex Sans/Mono as
woff2, with the OFL license text kept alongside per that license's requirement) replaces
Material's default runtime Google Fonts call. This is the one runtime network dependency
a build-with-no-network-access goal would otherwise leave uncovered.

## Maturity taxonomy: two axes, never collapsed

Every component page shows Evidence (E0–E5) and Manufacturing readiness (M0–M4) as two
separate badges — see `docs/regulatory/maturity.md` for the canonical definitions. These
are deliberately never combined into a single score: a composite would hide exactly the
information a bench researcher needs (how much has this been tested vs. can I actually
get one built), which is the entire reason the two-axis system exists. If you're adding a
new component page, copy the two-badge markup from an existing one
(`.on-maturity`/`.on-badge` in `docs/stylesheets/extra.css`) rather than inventing a new
presentation.

## Deployment

`.github/workflows/deploy.yml` builds and publishes on every push to `main`, via GitHub
Pages' native Actions deployment (not a `gh-pages` branch). The build step is plain
`mkdocs build --strict`, installed from `requirements.lock.txt` with a full, unshallowed
git checkout (needed for the "last updated" dates above). `docs/CNAME` carries the
custom domain and ships inside the build output automatically, since MkDocs copies
non-Markdown files from `docs/` verbatim into the published site.

`tools/sync_docs.py` is intentionally not part of this pipeline — see the federated-docs
section above.
