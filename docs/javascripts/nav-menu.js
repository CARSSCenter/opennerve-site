// Adds hover/keyboard dropdown menus to the header tabs (theme.features:
// navigation.tabs in mkdocs.yml). See CLAUDE.md §7 "Header dropdown menus".
//
// Material's tabs.html only links each top-level tab to its section's first
// page — it does not render the section's other children anywhere in the
// header. Rather than overriding Material's Jinja templates (custom_dir,
// which CLAUDE.md §7/§9 already flag as a maintenance-mode risk to avoid),
// this script builds each dropdown from data that is already present on
// every page: the full site nav tree that Material renders into the primary
// sidebar (`.md-sidebar--primary`) for the mobile drawer, at every level,
// on every page, regardless of the current section. That sidebar tree and
// the header tabs are both generated from the same top-to-bottom mkdocs.yml
// `nav:` list, in the same order, so the Nth header tab always corresponds
// to the Nth top-level sidebar item — no name-matching needed, just pairing
// by index.
//
// Only immediate children are shown per dropdown (not grandchildren, e.g.
// the IPG's own Gen1/Gen2/guide sub-pages) — that keeps the header menu a
// simple two-level "category -> page" picker; anything deeper is reached
// from the page's own left sidebar, same as before this script existed.
//
// Each menu is appended to <body> and positioned with `position: fixed`
// rather than being an absolutely-positioned child of the tab item. Material
// sets `overflow: auto` on `.md-tabs` and `.md-tabs__list` (so the tab row
// itself can scroll horizontally when there are many categories); any
// descendant that visually extends past that box gets clipped regardless of
// its own `position`, so a menu nested inside the tab item never became
// visible even though it was in the DOM (this is what broke it in Firefox —
// confirmed against Material's own compiled CSS, not browser-specific).
// Living outside the clipped tree sidesteps that.
(function () {
  "use strict";

  var HIDE_DELAY_MS = 150;

  function textOfLabel(el) {
    var ellipsis = el.querySelector(":scope > .md-ellipsis");
    return (ellipsis || el).textContent.trim();
  }

  // A rendered <li class="md-nav__item"> takes one of three shapes
  // (see mkdocs-material partials/nav-item.html):
  //   - leaf:            <a class="md-nav__link"> directly inside the <li>
  //   - indexed section:  <a> inside a <div class="md-nav__container">
  //   - plain section:    <label class="md-nav__link"> with no href at all
  // For the plain-section case there is no page to link the menu item to
  // directly, so fall back to the first link found anywhere inside it —
  // that is always the section's first descendant page, in document order.
  function directLinkInfo(li) {
    var a = li.querySelector(":scope > a.md-nav__link");
    if (a) {
      return { href: a.getAttribute("href"), text: textOfLabel(a) };
    }
    var containerA = li.querySelector(
      ":scope > div.md-nav__container > a.md-nav__link"
    );
    if (containerA) {
      return { href: containerA.getAttribute("href"), text: textOfLabel(containerA) };
    }
    var label = li.querySelector(":scope > label.md-nav__link");
    if (label) {
      var fallback = li.querySelector("a[href]");
      return {
        href: fallback ? fallback.getAttribute("href") : null,
        text: textOfLabel(label),
      };
    }
    return null;
  }

  function childItems(topLi) {
    if (!topLi.classList.contains("md-nav__item--nested")) {
      return [];
    }
    var list = topLi.querySelector(":scope > nav.md-nav > ul.md-nav__list");
    if (!list) {
      return [];
    }
    var items = [];
    Array.prototype.forEach.call(list.children, function (childLi) {
      var info = directLinkInfo(childLi);
      if (info && info.href) {
        items.push(info);
      }
    });
    return items;
  }

  function buildMenu(items) {
    var menu = document.createElement("div");
    menu.className = "on-navmenu";
    var list = document.createElement("ul");
    list.className = "on-navmenu__list";
    items.forEach(function (item) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = item.href;
      a.className = "on-navmenu__link";
      a.textContent = item.text;
      li.appendChild(a);
      list.appendChild(li);
    });
    menu.appendChild(list);
    document.body.appendChild(menu);
    return menu;
  }

  function init() {
    var tabItems = document.querySelectorAll(".md-tabs__list > .md-tabs__item");
    var sidebarNav = document.querySelector(".md-sidebar--primary nav.md-nav--primary");
    if (!tabItems.length || !sidebarNav) {
      return;
    }
    var sidebarList = sidebarNav.querySelector(":scope > ul.md-nav__list");
    if (!sidebarList) {
      return;
    }
    var sidebarTopItems = sidebarList.children;
    if (sidebarTopItems.length !== tabItems.length) {
      // Structure didn't match what we expect (e.g. a Material upgrade
      // changed the markup) — fail quietly and leave the plain tabs alone
      // rather than show a broken or empty menu.
      return;
    }

    var openMenu = null;
    var openTabLi = null;
    var hideTimer = null;

    function position(link, menu) {
      var rect = link.getBoundingClientRect();
      menu.style.left = rect.left + "px";
      menu.style.top = rect.bottom + "px";
    }

    function cancelHide() {
      if (hideTimer) {
        clearTimeout(hideTimer);
        hideTimer = null;
      }
    }

    function close() {
      cancelHide();
      if (openMenu) {
        openMenu.classList.remove("on-navmenu--visible");
        openTabLi.classList.remove("on-navmenu--open");
        openMenu = null;
        openTabLi = null;
      }
    }

    function scheduleClose() {
      cancelHide();
      hideTimer = setTimeout(close, HIDE_DELAY_MS);
    }

    function open(tabLi, link, menu) {
      cancelHide();
      if (openMenu && openMenu !== menu) {
        close();
      }
      position(link, menu);
      menu.classList.add("on-navmenu--visible");
      tabLi.classList.add("on-navmenu--open");
      openMenu = menu;
      openTabLi = tabLi;
    }

    tabItems.forEach(function (tabLi, index) {
      var items = childItems(sidebarTopItems[index]);
      if (!items.length) {
        return;
      }
      var link = tabLi.querySelector(":scope > .md-tabs__link");
      if (!link) {
        return;
      }
      var menu = buildMenu(items);
      tabLi.classList.add("md-tabs__item--has-menu");
      link.setAttribute("aria-haspopup", "true");

      tabLi.addEventListener("mouseenter", function () {
        open(tabLi, link, menu);
      });
      tabLi.addEventListener("mouseleave", scheduleClose);
      menu.addEventListener("mouseenter", cancelHide);
      menu.addEventListener("mouseleave", scheduleClose);

      link.addEventListener("focus", function () {
        open(tabLi, link, menu);
      });
      tabLi.addEventListener("focusout", function (event) {
        var next = event.relatedTarget;
        if (!next || (!tabLi.contains(next) && !menu.contains(next))) {
          close();
        }
      });
      menu.addEventListener("focusout", function (event) {
        var next = event.relatedTarget;
        if (!next || (!tabLi.contains(next) && !menu.contains(next))) {
          close();
        }
      });

      // Touch devices have no :hover/mouseenter, so without this the menu
      // would never be reachable — first tap opens it instead of navigating
      // away, second tap (menu already open) follows the link normally.
      link.addEventListener("click", function (event) {
        if (window.matchMedia && window.matchMedia("(hover: none)").matches) {
          if (menu !== openMenu) {
            event.preventDefault();
            open(tabLi, link, menu);
          }
        }
      });
    });

    document.addEventListener(
      "click",
      function (event) {
        if (
          openMenu &&
          !event.target.closest(".md-tabs__item--has-menu") &&
          !event.target.closest(".on-navmenu")
        ) {
          close();
        }
      },
      true
    );
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        close();
      }
    });
    window.addEventListener("scroll", close, { passive: true });
    window.addEventListener("resize", close);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
