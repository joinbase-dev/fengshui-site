import Image from "next/image";
import Link from "next/link";
import { header } from "@/content/site";
import { primaryButtonCompact } from "@/components/ui/button-styles";
import logo from "@/public/images/logo.png";

type SiteHeaderProps = {
  // The page this header is on, marked with aria-current in the menu.
  currentHref: string;
};

const linkStyle =
  "inline-flex min-h-11 items-center rounded-xs text-nav font-bold text-gray-900 transition-colors duration-200 ease-refined hover:text-brand aria-[current=page]:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// Desktop layout from Figma (header/desktop): logo, four text links and the CTA.
// Below lg the links and CTA move into a <details> disclosure, so the menu needs no
// client JavaScript. The header sticks to the top; its glass bar (.header-glass in
// globals.css) appears on scroll through a CSS scroll timeline, also without JS.
export function SiteHeader({ currentHref }: SiteHeaderProps) {
  const links = header.nav.map((item) => (
    <li key={item.label}>
      <Link
        href={item.href}
        aria-current={item.href === currentHref ? "page" : undefined}
        className={linkStyle}
      >
        {item.label}
      </Link>
    </li>
  ));

  return (
    // The header box spans the full width but only the bar takes pointer events, so the
    // transparent margin around the floating bar never blocks the page underneath.
    <header className="pointer-events-none sticky top-0 z-30 px-5 py-3 md:px-10 md:py-4 xl:px-30 xl:py-6">
      <div className="header-glass pointer-events-auto relative mx-auto flex max-w-card items-center justify-between gap-6">
        <Link
          href="/"
          className="shrink-0 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          <Image src={logo} alt={header.homeLabel} width={64} height={64} sizes="64px" className="size-12 lg:size-16" />
        </Link>

        <nav aria-label={header.navLabel} className="hidden lg:block">
          <ul className="flex items-center gap-12">{links}</ul>
        </nav>

        <div className="hidden lg:block">
          <a href={header.cta.href} className={primaryButtonCompact}>
            {header.cta.label}
          </a>
        </div>

        <details className="group lg:hidden">
          <summary className="flex size-11 cursor-pointer list-none items-center justify-center rounded-sm text-gray-900 focus-visible:outline-2 focus-visible:outline-brand [&::-webkit-details-marker]:hidden">
            <MenuIcon />
            <span className="sr-only">{header.menuLabel}</span>
          </summary>
          <div className="glass-panel absolute inset-x-0 top-full mt-4 rounded-lg p-5">
            <nav aria-label={header.navLabel}>
              <ul className="flex flex-col gap-1">{links}</ul>
            </nav>
            <a href={header.cta.href} className={`${primaryButtonCompact} mt-4 w-full`}>
              {header.cta.label}
            </a>
          </div>
        </details>
      </div>
    </header>
  );
}
