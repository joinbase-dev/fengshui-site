import Image from "next/image";
import Link from "next/link";
import { header } from "@/content/site";
import { LineChatIcon } from "@/components/ui/LineChatIcon";
import logo from "@/public/images/logo.png";

type SiteHeaderProps = {
  // The page this header is on, marked with aria-current in the menu.
  currentHref: string;
};

const linkStyle =
  "inline-flex min-h-11 items-center gap-2 rounded-xs text-home-nav text-black transition-colors duration-200 ease-refined hover:text-brand aria-[current=page]:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// Figma navbar (405:2274): a white bar with the logo, three service links and the
// LINE booking link, 1080px wide. Below lg the links move into a <details>
// disclosure, so the menu needs no client JavaScript.
export function SiteHeader({ currentHref }: SiteHeaderProps) {
  const items = (
    <>
      {header.nav.map((item) => (
        <li key={item.label}>
          <Link
            href={item.href}
            aria-current={item.href === currentHref ? "page" : undefined}
            className={linkStyle}
          >
            {item.label}
          </Link>
        </li>
      ))}
      <li>
        <a href={header.cta.href} target="_blank" rel="noopener noreferrer" className={linkStyle}>
          <LineChatIcon className="size-8 text-line" />
          {header.cta.label}
        </a>
      </li>
    </>
  );

  return (
    <header className="relative z-30 bg-white px-5 py-4 md:px-10">
      <div className="mx-auto flex max-w-home items-center justify-between gap-6">
        <Link
          href="/"
          className="shrink-0 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          {/* The design crops the round logo to 62×57. */}
          <Image src={logo} alt={header.homeLabel} width={64} height={64} sizes="64px" className="h-14.25 w-15.5 object-cover" />
        </Link>

        <nav aria-label={header.navLabel} className="hidden lg:block">
          <ul className="flex items-center gap-6">{items}</ul>
        </nav>

        <details className="group lg:hidden">
          <summary className="flex size-11 cursor-pointer list-none items-center justify-center rounded-sm text-black focus-visible:outline-2 focus-visible:outline-brand [&::-webkit-details-marker]:hidden">
            <MenuIcon />
            <span className="sr-only">{header.menuLabel}</span>
          </summary>
          <nav aria-label={header.navLabel} className="menu-panel absolute inset-x-0 top-full border-y border-border bg-white px-5 py-3 md:px-10">
            <ul className="flex flex-col gap-1">{items}</ul>
          </nav>
        </details>
      </div>
    </header>
  );
}
