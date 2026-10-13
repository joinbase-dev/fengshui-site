"use client";

import { useSyncExternalStore } from "react";

// Which service overlay is open lives in the address bar as /?service=<slug>, so an
// open overlay can be shared, survives a reload, and closes with the back button. The
// page itself stays static: the parameter is read in the browser, never on the server.
//
// Opening pushes a history entry and closing goes back over it, so back and the close
// button agree. An overlay that was opened from a shared link has no entry of ours
// behind it, so closing it replaces the URL instead of leaving the site.

const param = "service";
const changeEvent = "service-overlay-change";
// Marks the history entries this module pushed.
const pushedKey = "serviceOverlay";

export function readOpenService(): string | null {
  return new URLSearchParams(window.location.search).get(param);
}

function subscribe(onChange: () => void) {
  window.addEventListener("popstate", onChange);
  window.addEventListener(changeEvent, onChange);
  return () => {
    window.removeEventListener("popstate", onChange);
    window.removeEventListener(changeEvent, onChange);
  };
}

// The slug of the open overlay, or null. Null during prerender and hydration, so the
// static HTML always has every overlay closed.
export function useOpenService(): string | null {
  return useSyncExternalStore(subscribe, readOpenService, () => null);
}

export function serviceHref(slug: string): string {
  return `/?${param}=${encodeURIComponent(slug)}`;
}

export function openService(slug: string) {
  if (readOpenService() === slug) return;
  const url = new URL(window.location.href);
  url.searchParams.set(param, slug);
  url.hash = "";
  // Next.js keeps its router in step with pushState and keeps our key in the state.
  window.history.pushState({ ...window.history.state, [pushedKey]: true }, "", url);
  window.dispatchEvent(new Event(changeEvent));
}

export function closeService() {
  if (readOpenService() === null) return;
  if (window.history.state?.[pushedKey]) {
    // popstate tells the subscribers.
    window.history.back();
    return;
  }
  const url = new URL(window.location.href);
  url.searchParams.delete(param);
  window.history.replaceState(window.history.state, "", url);
  window.dispatchEvent(new Event(changeEvent));
}
