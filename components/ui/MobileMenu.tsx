"use client";

import { useEffect, useRef, type MouseEvent, type ReactNode } from "react";
import { ConsultLink } from "@/components/ui/ConsultLink";

type MenuLink = { label: string; href: string };

type MobileMenuProps = {
  // The header's logo link, repeated at the same spot inside the menu.
  logo: ReactNode;
  links: readonly MenuLink[];
  social: readonly MenuLink[];
  socialLabel: string;
  menuLabel: string;
  closeLabel: string;
  navLabel: string;
};

// Each menu row's place in the load-in stagger (--i in app/styles/motion.css).
const stagger = ["[--i:0]", "[--i:1]", "[--i:2]", "[--i:3]", "[--i:4]", "[--i:5]"];

const iconButton =
  "flex size-11 items-center justify-center rounded-sm text-black transition-colors duration-200 ease-refined hover:text-red-800 focus-visible:outline-2 focus-visible:outline-red-800";

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// The navbar's menu below lg: the hamburger opens a full-screen sheet in a native modal
// <dialog> (focus trap, Escape, an inert page, focus back on the button), with the
// logo and a close button where the header has them, the section links large and
// numbered between thin rules, the consult link, and the social links at the foot.
// Following any link closes it. Motion in app/styles/motion.css.
export function MobileMenu({ logo, links, social, socialLabel, menuLabel, closeLabel, navLabel }: MobileMenuProps) {
  const ref = useRef<HTMLDialogElement>(null);

  // The sheet is for narrow screens; widening to the full navbar closes it.
  useEffect(() => {
    const wide = window.matchMedia("(min-width: 64rem)");
    const close = () => {
      if (wide.matches) ref.current?.close();
    };
    wide.addEventListener("change", close);
    return () => wide.removeEventListener("change", close);
  }, []);

  // A link inside closes the sheet first, so the page under it can scroll to the
  // section (or the new tab opens over a closed menu).
  function handleClick(event: MouseEvent<HTMLDialogElement>) {
    if (event.target instanceof Element && event.target.closest("a")) event.currentTarget.close();
  }

  return (
    <>
      <button type="button" aria-haspopup="dialog" onClick={() => ref.current?.showModal()} className={iconButton}>
        <MenuIcon />
        <span className="sr-only">{menuLabel}</span>
      </button>

      <dialog ref={ref} aria-label={menuLabel} onClick={handleClick} className="menu-dialog">
        <div className="flex min-h-full flex-col px-5 py-4 md:px-10">
          <div className="flex items-center justify-between gap-6">
            {logo}
            <button type="button" onClick={() => ref.current?.close()} className={iconButton}>
              <CloseIcon />
              <span className="sr-only">{closeLabel}</span>
            </button>
          </div>

          <nav aria-label={navLabel} className="mt-10 md:mt-16">
            <ol className="border-t border-rule">
              {links.map((link, index) => (
                <li key={link.href} className={`menu-item border-b border-rule ${stagger[index]}`}>
                  <a
                    href={link.href}
                    className="group flex min-h-11 items-baseline gap-4 py-5 text-service-title-sm font-medium text-black transition-colors duration-200 ease-refined hover:text-red-800 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-red-800 md:gap-6 md:py-7 md:text-service-title"
                  >
                    <span className="text-eyebrow text-red-800 tabular-nums">{String(index + 1).padStart(2, "0")}</span>
                    <span className="transition-transform duration-200 ease-refined group-hover:translate-x-1 group-focus-visible:translate-x-1">
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
            </ol>
            <ConsultLink className={`menu-item mt-8 md:mt-10 ${stagger[links.length]}`} />
          </nav>

          <ul aria-label={socialLabel} className={`menu-item -mx-2 mt-auto flex flex-wrap gap-x-4 pt-12 ${stagger[links.length + 1]}`}>
            {social.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center rounded-xs px-2 text-footer text-black underline-offset-4 transition-colors duration-200 ease-refined hover:text-red-800 hover:underline focus-visible:outline-2 focus-visible:outline-red-800"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </dialog>
    </>
  );
}
