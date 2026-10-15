import Image from "next/image";
import Link from "next/link";
import { footer, header } from "@/content/site";
import { LineChatIcon } from "@/components/ui/LineChatIcon";
import { MobileMenu } from "@/components/ui/MobileMenu";
import logoImage from "@/public/images/logo.png";

const linkStyle =
  "inline-flex min-h-11 items-center gap-2 rounded-xs text-menu font-medium text-black transition-colors duration-200 ease-refined hover:text-red-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-800";

// Figma Navbar (1:752): the logo, then three links to sections of the page and, 64px
// further, the LINE consult link, across the 1280px content width. It sits on the page
// gradient. Below lg a hamburger opens them in a full-screen menu (MobileMenu).
export function SiteHeader() {
  const links = header.nav.map((item) => (
    <li key={item.label}>
      <a href={item.href} className={linkStyle}>
        {item.label}
      </a>
    </li>
  ));
  // 24px list gap plus 40px: the 64px the design leaves before the consult link.
  const cta = (
    <li className="ml-10">
      <a href={header.cta.href} target="_blank" rel="noopener noreferrer" className={linkStyle}>
        <LineChatIcon className="size-8 text-line" />
        {header.cta.label}
      </a>
    </li>
  );

  const logo = (
    <Link
      href="/"
      className="shrink-0 rounded-sm transition-opacity duration-200 ease-refined hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-800"
    >
      {/* The design crops the round logo to 62×57. */}
      <Image src={logoImage} alt={header.homeLabel} width={64} height={64} sizes="64px" className="h-14.25 w-15.5 object-cover" />
    </Link>
  );

  return (
    <header className="relative z-30 px-5 py-4 md:px-10 lg:px-20">
      <div className="mx-auto flex max-w-wide items-center justify-between gap-6">
        {logo}

        <nav aria-label={header.navLabel} className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {links}
            {cta}
          </ul>
        </nav>

        <div className="lg:hidden">
          <MobileMenu
            logo={logo}
            links={header.nav}
            social={footer.social}
            socialLabel={footer.socialLabel}
            menuLabel={header.menuLabel}
            closeLabel={header.closeLabel}
            navLabel={header.navLabel}
          />
        </div>
      </div>
    </header>
  );
}
