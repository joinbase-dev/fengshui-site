import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import logo from "@/public/images/logo.png";

// Figma "Header" (97:2554, phones 91:1857): the club's logo and name, which lead back
// to the home page, over a faint brass rule. Phones drop the English name.
export function CheckoutHeader() {
  return (
    <header className="border-b border-brass-light/25">
      <div className="flex h-16 items-center px-4 md:h-22 md:px-16">
        <Link
          href="/"
          className="group flex items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass-light"
        >
          <Image
            src={logo}
            alt=""
            sizes="(min-width: 768px) 52px, 40px"
            className="size-10 object-contain transition-transform duration-300 ease-refined group-hover:scale-105 md:size-13"
          />
          <span className="flex flex-col leading-label whitespace-nowrap">
            <span className="text-sm font-semibold text-parchment md:text-brand">{site.name}</span>
            <span lang="en" className="hidden text-fine text-brass-light md:block">
              {site.nameEn}
            </span>
          </span>
        </Link>
      </div>
    </header>
  );
}
