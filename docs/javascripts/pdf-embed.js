// Embeds PDFs in-page using the vendored pdf.js viewer (docs/javascripts/pdfjs/).
// See CLAUDE.md §7 "PDF viewer" for why this exists and how it works.
//
// Markup contract (see the .on-pdf component doc-comment in
// docs/stylesheets/extra.css): a container with class "on-pdf__embed" and a
// data-pdf-src attribute holding the PDF's URL — either an upstream absolute
// URL (the common case: CLAUDE.md §7's documented freshness-over-commit-
// pinning tradeoff for synced repo docs) or a same-site relative path, for a
// PDF vendored directly into this repo (e.g. docs/data/educational-resources.md's
// poster, which has no upstream repo to sync from). data-pdf-src is resolved
// against the current page's own URL before use, so a relative path behaves
// exactly like a normal markdown link — same origin, same page-depth
// handling — while an already-absolute URL passes through unchanged. This
// script replaces that container's content with an <iframe> pointing at the
// vendored viewer.html, passing the resolved URL as its `file` parameter —
// for a same-site PDF this is a same-origin fetch, which pdf.js's own
// validateFileURL allows without needing the raw.githubusercontent.com
// allow-list patch documented in CLAUDE.md §7 ("PDF viewer was rendering
// blank, root-caused and fixed").
//
// Dense reference lists (e.g. the Gen1/Gen2 test-protocol PDFs) wrap each
// .on-pdf in a <details> so the page stays scannable; for those, the
// iframe — and the network fetch of the PDF it triggers — is only created
// the first time that <details> is opened, not on page load.
//
// document.currentScript.src is only valid during this script's own
// synchronous top-level evaluation, so it's captured into a const here
// rather than read later inside the DOMContentLoaded callback (by then
// document.currentScript is null). Resolving the viewer path against that
// captured, browser-resolved absolute URL — rather than a hardcoded root
// path — is what makes this work regardless of page nesting depth or
// whether the site is served from a domain root or a subpath.
(function () {
  "use strict";

  var scriptEl = document.currentScript;
  if (!scriptEl) {
    return;
  }
  var viewerUrl = new URL("pdfjs/web/viewer.html", scriptEl.src);

  function initEmbed(container) {
    if (container.hasAttribute("data-pdf-initialized")) {
      return;
    }
    container.setAttribute("data-pdf-initialized", "true");

    var pdfSrc = container.getAttribute("data-pdf-src");
    var resolvedPdfSrc = new URL(pdfSrc, window.location.href).href;
    var title = container.getAttribute("data-pdf-title") || "PDF document";
    var src =
      viewerUrl.href + "?file=" + encodeURIComponent(resolvedPdfSrc) + "#zoom=page-width";

    var iframe = document.createElement("iframe");
    iframe.className = "on-pdf__frame";
    iframe.src = src;
    iframe.title = title;
    iframe.loading = "lazy";
    container.appendChild(iframe);
  }

  function embedAll() {
    document
      .querySelectorAll(".on-pdf__embed[data-pdf-src]")
      .forEach(function (container) {
        var details = container.closest("details");
        if (!details) {
          initEmbed(container);
          return;
        }
        if (details.open) {
          initEmbed(container);
        }
        details.addEventListener("toggle", function () {
          if (details.open) {
            initEmbed(container);
          }
        });
      });
  }

  // This site does not enable Material's navigation.instant feature, so
  // every page is a full load and a one-time DOMContentLoaded is enough —
  // no document$ subscription needed (see mkdocs.yml theme.features).
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", embedAll);
  } else {
    embedAll();
  }
})();
