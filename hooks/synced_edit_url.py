"""MkDocs build hook — not a plugin dependency (no pip package, nothing in
requirements.txt). See CLAUDE.md §7.

Component documentation is synced from upstream repos onto this site by
tools/sync_docs.py rather than fetched live by a plugin (mkdocs-multirepo-plugin
was considered and rejected; CLAUDE.md §7 records why). Every synced page's
front matter carries `synced_edit_url`, the exact upstream GitHub blob URL for
the source file. This hook overrides that page's `edit_url` so Material's
"Edit this page" link sends a contributor to the correct upstream repo instead
of this one.

Registered via `hooks:` in mkdocs.yml.
"""

from __future__ import annotations

from mkdocs.structure.pages import Page
from mkdocs.config.defaults import MkDocsConfig
from mkdocs.structure.nav import Navigation


def on_page_context(
    context: dict, *, page: Page, config: MkDocsConfig, nav: Navigation
) -> dict:
    edit_url = page.meta.get("synced_edit_url")
    if edit_url:
        page.edit_url = edit_url
    return context
