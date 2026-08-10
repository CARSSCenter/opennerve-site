---
title: Community
---

# Community

Questions and proposals happen in GitHub Discussions, in context — a thread
attached to the relevant page rather than a generic forum tab.

<div class="grid" markdown>

[Ask a technical question](https://github.com/axbaldwin1/opennerve-site/discussions/new?category=q-a){ .md-button }
[Propose a design change](https://github.com/axbaldwin1/opennerve-site/discussions/new?category=design-proposals){ .md-button }

</div>

<!--
!!! warning "Provisional links"
    These buttons point at `axbaldwin1/opennerve-site` — the repo this site
    currently builds from during the draft phase. Confirm before launch:
    which repo actually hosts Discussions (this one, or a
    `CARSSCenter`-org repo once the project moves there),
    and whether the `q-a` and `design-proposals` category slugs above have
    actually been created — `design-proposals` in particular is a guess,
    not yet confirmed.

## Recent conversations

**Not yet built.** This section should be populated by a
GitHub Action that queries the Discussions GraphQL API at build time, writes
the results to JSON, and renders a "Recent conversations" list here.

## Per-page discussion threads

Individual pages (e.g. the
[Sub-mm Parylene Cuff](../components/parylene-cuff.md) page) should carry an
embedded giscus thread rather than sending readers to a separate tab. **Not
yet wired in.** giscus needs a repo ID and category ID from
[giscus.app](https://giscus.app), which requires Discussions to already be
enabled on the target repo — do that first, then add the giscus theme
override and script tag to the relevant page templates.
-->