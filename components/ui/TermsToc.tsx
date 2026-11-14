"use client";

import { useEffect, useState } from "react";
import { terms } from "@/content/terms";

// Figma "TOC" (91:1775): the contents panel beside the document on wide screens. Each
// item jumps to its section; the section being read is highlighted as in the design's
// first item, and the panel stays in view while the document scrolls.
export function TermsToc() {
  const [current, setCurrent] = useState<string>(terms.sections[0].id);

  useEffect(() => {
    const sections = terms.sections
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => element !== null);
    // A section counts as being read once its top crosses the upper third of the screen.
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) setCurrent(visible[0].target.id);
      },
      { rootMargin: "0px 0px -66% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-labelledby="terms-toc-title"
      className="sticky top-6 flex w-65 shrink-0 flex-col gap-1 rounded-card border border-brass-light/30 bg-toc px-5 py-6 leading-label"
    >
      <h2 id="terms-toc-title" className="text-sm font-semibold text-brass-light">
        {terms.tocTitle}
      </h2>
      <ol className="flex flex-col gap-1">
        {terms.sections.map((section) => {
          const active = section.id === current;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                aria-current={active ? "location" : undefined}
                className={`flex items-start gap-2.5 rounded-sm py-2.5 pl-2.5 whitespace-nowrap transition-colors duration-200 ease-refined focus-visible:outline-2 focus-visible:outline-brass-light ${
                  active ? "bg-brass-light/15 font-semibold" : "hover:bg-brass-light/10"
                }`}
                onClick={() => setCurrent(section.id)}
              >
                <span className="font-serif-thai text-sm font-semibold text-brass-light">{section.number}</span>
                <span className="text-note text-parchment">{section.title}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
