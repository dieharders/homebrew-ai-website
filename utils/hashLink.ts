import type { MouseEvent } from "react";

/**
 * Click handler that makes `#anchor` links reliable on the page they already
 * point at.
 *
 * A same-page hash link is a dead click whenever the URL already carries that
 * hash: the browser sees no change and the router has no route to push, so
 * nothing scrolls. That is what makes a second click on "Apps" — or on any CTA
 * pointing at `#apps` after the nav already put the hash in the URL — go
 * nowhere. Owning the scroll ourselves makes every click behave the same.
 *
 * Returns early (leaving the click alone) for cross-page links and for
 * modified clicks, so Next's normal navigation and open-in-new-tab still work.
 */
export function scrollToHashOnClick(href: string) {
  return (e: MouseEvent<HTMLAnchorElement>) => {
    if (
      e.defaultPrevented ||
      e.button !== 0 ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey
    ) {
      return;
    }

    const hashIndex = href.indexOf("#");
    if (hashIndex === -1) return;

    const path = href.slice(0, hashIndex);
    const hash = href.slice(hashIndex + 1);
    if (!hash) return;
    // A path means another page — let Next navigate and land on the anchor.
    if (path && path !== window.location.pathname) return;

    const target = document.getElementById(hash);
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView();

    if (window.location.hash !== `#${hash}`) {
      const { pathname, search } = window.location;
      window.history.pushState(null, "", `${pathname}${search}#${hash}`);
    }
  };
}
