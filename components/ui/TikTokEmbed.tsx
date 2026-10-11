"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const EMBED_SCRIPT = "https://www.tiktok.com/embed.js";
// How long TikTok gets to report in before the fallback replaces the embed.
const LOAD_TIMEOUT_MS = 8000;

type Props = {
  // blockquote.tiktok-embed markup that embed.js turns into TikTok's players.
  children: ReactNode;
  // Shown instead when the embed fails: embed.js is blocked, or TikTok's frame
  // never reports in (it answers with "overload-protect triggered" when it is
  // rate limiting).
  fallback: ReactNode;
  className?: string;
  // Height kept free for the embed while it loads; dropped when the fallback shows.
  reserveClassName?: string;
};

/**
 * Renders TikTok's official embeds once they are about to scroll into view.
 * embed.js is third-party and heavy, so neither it nor the blockquotes load
 * before then; until that point the reserved box keeps the layout stable.
 *
 * A working TikTok frame posts messages to the page (embed.js sizes the frame from
 * them); an error page posts none. If no message from TikTok arrives in time, or the
 * script fails to load, the embed is hidden and the fallback shows instead.
 */
export function TikTokEmbed({ children, fallback, className = "", reserveClassName = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [near, setNear] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setNear(true);
          observer.disconnect();
        }
      },
      { rootMargin: "600px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!near) return;
    // embed.js converts every blockquote.tiktok-embed on the page each time it
    // runs, so a fresh script tag also covers a remount after client navigation.
    const script = document.createElement("script");
    script.src = EMBED_SCRIPT;
    script.async = true;
    script.onerror = () => setFailed(true);

    const timer = window.setTimeout(() => setFailed(true), LOAD_TIMEOUT_MS);
    const onMessage = (event: MessageEvent) => {
      if (new URL(event.origin).hostname.endsWith("tiktok.com")) {
        window.clearTimeout(timer);
        window.removeEventListener("message", onMessage);
      }
    };
    window.addEventListener("message", onMessage);
    document.body.appendChild(script);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("message", onMessage);
      script.remove();
    };
  }, [near]);

  // The embed stays mounted but hidden on failure: embed.js has rewritten its DOM,
  // so React should not try to remove it.
  return (
    <div ref={ref} className={`${className} ${failed ? "" : reserveClassName}`}>
      <div hidden={failed}>{near && children}</div>
      {failed && fallback}
    </div>
  );
}
