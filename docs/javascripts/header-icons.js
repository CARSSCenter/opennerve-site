// Header icon links: GitHub, community message board, LinkedIn, email
// (CLAUDE.md §7 "Header external links", added 2026-07-30).
//
// Same template-free approach as nav-menu.js: built and appended in JS
// rather than editing Material's header.html partial (custom_dir — a
// maintenance-mode risk this repo already avoids, see CLAUDE.md §7/§9).
// Appended right after .md-search inside .md-header__inner. Unlike
// nav-menu.js's dropdowns, nothing here needs to escape an `overflow: auto`
// ancestor, so no fixed-position/body-append trick is needed — a plain
// child element is enough.
//
// Also relabels the search box's placeholder/aria-label from Material's
// default ("Search") to "Search documentation". Material only exposes that
// string through its i18n system (`lang.t('search.placeholder')` in
// partials/search.html) — there's no `mkdocs.yml`-level override for a
// single string, and the only theme-level way to change it is a
// `theme.custom_dir` translation-partial override, which is exactly the
// maintenance-mode risk this file already exists to avoid. Setting the two
// attributes directly once the input exists is simpler and cheaper than
// vendoring a translation partial for one line of copy.
//
// Icon path data below is copied from the Font Awesome Free (github,
// linkedin — CC BY 4.0) and Material Design Icons (forum, email —
// Apache-2.0) sets already vendored inside the installed mkdocs-material
// package (the same icons `extra.social` draws from for the footer icon
// mkdocs.yml now configures). Reproduced here as inline <path>s rather than
// <img>s so they recolor with currentColor like every other header icon
// (search, palette toggle) instead of needing separate light/dark image
// assets.
(function () {
  "use strict";

  var LINKS = [
    {
      label: "OpenNerve on GitHub",
      href: "https://github.com/CARSSCenter",
      viewBox: "0 0 512 512",
      path:
        "M173.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6m-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3m44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9M252.8 8C114.1 8 8 113.3 8 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C436.2 457.8 504 362.9 504 252 504 113.3 391.5 8 252.8 8M105.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1m-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7m32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1m-11.4-14.7c-1.6 1-1.6 3.6 0 5.9s4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2",
    },
    {
      // Target confirmed 2026-08-28 — see CLAUDE.md §7 "Community forum
      // repo confirmed". Same repo the landing-page and Community-page
      // buttons use.
      label: "Community message board",
      href: "https://github.com/CARSSCenter/OpenNerve-Community/discussions",
      viewBox: "0 0 24 24",
      path:
        "M17 12V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v14l4-4h10a1 1 0 0 0 1-1m4-6h-2v9H6v2a1 1 0 0 0 1 1h11l4 4V7a1 1 0 0 0-1-1",
    },
    {
      label: "OpenNerve on LinkedIn",
      href: "https://www.linkedin.com/company/opennerve/",
      viewBox: "0 0 448 512",
      path:
        "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3M135.4 416H69V202.2h66.5V416zM102.2 96a38.5 38.5 0 1 1 0 77 38.5 38.5 0 1 1 0-77m282.1 320h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9z",
    },
    {
      label: "Email the consortium",
      href: "mailto:open.nerve@usc.edu",
      viewBox: "0 0 24 24",
      path:
        "m20 8-8 5-8-5V6l8 5 8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2",
    },
  ];

  function build() {
    var header = document.querySelector(".md-header__inner");
    if (!header) {
      return;
    }
    var searchEl = header.querySelector(".md-search");

    var nav = document.createElement("div");
    nav.className = "on-header-icons";
    LINKS.forEach(function (link) {
      var a = document.createElement("a");
      a.className = "on-header-icons__link";
      a.href = link.href;
      a.title = link.label;
      a.setAttribute("aria-label", link.label);
      if (/^https?:/.test(link.href)) {
        a.target = "_blank";
        a.rel = "noopener";
      }
      a.innerHTML =
        '<svg viewBox="' +
        link.viewBox +
        '" aria-hidden="true"><path d="' +
        link.path +
        '"/></svg>';
      nav.appendChild(a);
    });

    if (searchEl) {
      searchEl.insertAdjacentElement("afterend", nav);
    } else {
      header.appendChild(nav);
    }

    var searchInput = header.querySelector(".md-search__input");
    if (searchInput) {
      searchInput.setAttribute("placeholder", "Search documentation");
      searchInput.setAttribute("aria-label", "Search documentation");
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", build);
  } else {
    build();
  }
})();
