"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const EMBED_SCRIPT = "https://www.tiktok.com/embed.js";

type Props = {
  // blockquote.tiktok-embed markup that embed.js turns into TikTok's players.
  children: ReactNode;
  className?: string;
};

/**
 * Renders TikTok's official embeds once they are about to scroll into view.
 * embed.js is third-party and heavy, so neither it nor the blockquotes load
 * before then; until that point the reserved box keeps the layout stable.
 */
export function TikTokEmbed({ children, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [near, setNear] = useState(false);

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
    document.body.appendChild(script);
    return () => script.remove();
  }, [near]);

  return (
    <div ref={ref} className={className}>
      {near && children}
    </div>
  );
}
