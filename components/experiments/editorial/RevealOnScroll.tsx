"use client";

import { useEffect } from "react";

// Marks the experiment's root as scripted, so its [data-reveal] blocks start hidden,
// then shows each block once as it enters the viewport. Without script (or before
// hydration) every block is simply visible.
export function RevealOnScroll({ rootId }: { rootId: string }) {
  useEffect(() => {
    const root = document.getElementById(rootId);
    if (!root) return;
    const blocks = root.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-revealed", "");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );
    // Blocks already on screen show at once; the rest wait for the observer.
    blocks.forEach((block) => observer.observe(block));
    root.setAttribute("data-scripted", "");
    return () => observer.disconnect();
  }, [rootId]);
  return null;
}
