import Image from "next/image";
import Link from "next/link";
import { header } from "@/content/site";
import { LineChatIcon } from "@/components/ui/LineChatIcon";
import logo from "@/public/images/logo.png";

const linkStyle =
  "inline-flex min-h-11 items-center gap-2 rounded-xs text-menu font-medium text-black transition-colors duration-200 ease-refined hover:text-red-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-800";

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// Figma Navbar (1:752): the logo, then three links to sections of the page and, 64px
// further, the LINE consult link, across the 1280px content width. It sits on the page
// gradient. Below lg the links move into a <details> disclosure, so the menu needs no
// client JavaScript.
export function SiteHeader() {
  const links = header.nav.map((item) => (
    <li key={item.label}>
      <a href={item.href} className={linkStyle}>
        {item.label}
      </a>
    </li>
  ));
  // 24px list gap plus 40px: the 64px the design leaves before the consult link.
  const cta = (spaced: boolean) => (
    <li className={spaced ? "ml-10" : undefined}>
      <a href={header.cta.href} target="_blank" rel="noopener noreferrer" className={linkStyle}>
        <LineChatIcon className="size-8 text-line" />
        {header.cta.label}
      </a>
    </li>
  );

  return (
    <header className="relative z-30 px-5 py-4 md:px-10 lg:px-20">
      <div className="mx-auto flex max-w-wide items-center justify-between gap-6">
        <Link
          href="/"
          className="shrink-0 rounded-sm transition-opacity duration-200 ease-refined hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-800"
        >
          {/* The design crops the round logo to 62×57. */}
          <Image src={logo} alt={header.homeLabel} width={64} height={64} sizes="64px" className="h-14.25 w-15.5 object-cover" />
        </Link>

        <nav aria-label={header.navLabel} className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {links}
            {cta(true)}
          </ul>
        </nav>

        <details className="group lg:hidden">
          <summary className="flex size-11 cursor-pointer list-none items-center justify-center rounded-sm text-black focus-visible:outline-2 focus-visible:outline-red-800 [&::-webkit-details-marker]:hidden">
            <MenuIcon />
            <span className="sr-only">{header.menuLabel}</span>
          </summary>
          <nav aria-label={header.navLabel} className="menu-panel absolute inset-x-0 top-full border-y border-rule bg-blush px-5 py-3 md:px-10">
            <ul className="flex flex-col gap-1">
              {links}
              {cta(false)}
            </ul>
          </nav>
        </details>
      </div>
    </header>
  );
}
