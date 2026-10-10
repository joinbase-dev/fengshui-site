import Image from "next/image";
import Link from "next/link";
import { footer, site } from "@/content/site";
import { SocialIcon } from "@/components/ui/SocialIcon";
import logo from "@/public/images/logo.png";

const focusRing =
  "rounded-sm transition-opacity duration-200 ease-refined hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

export function Footer() {
  return (
    <footer className="bg-footer text-white">
      <div className="mx-auto flex max-w-page flex-col gap-10 px-5 py-12 md:gap-12 md:px-8 md:py-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:gap-16 xl:gap-40">
          <div className="flex flex-1 flex-col gap-2">
            <Image
              src={logo}
              alt={`${site.name} ${site.nameEn}`}
              width={120}
              height={120}
              sizes="120px"
              // Figma: drop shadows 0 1 3 /.3 and 0 4 8 /.15 (filter radius is half of Figma blur).
              className="[filter:drop-shadow(0_1px_1.5px_rgb(0_0_0/0.3))_drop-shadow(0_4px_4px_rgb(0_0_0/0.15))]"
            />
            <div className="flex flex-col gap-2">
              <p className="text-home-body">
                {site.name} <span className="whitespace-nowrap">{site.nameEn}</span>
              </p>
              <p className="text-home-tagline">
                {footer.taglineLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-8 lg:items-end">
            <ul className="flex gap-5" aria-label="โซเชียลมีเดีย">
              {footer.social.map((item) => (
                <li key={item.platform}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className={`block ${focusRing}`}
                  >
                    <SocialIcon platform={item.platform} />
                  </a>
                </li>
              ))}
            </ul>
            <nav aria-label="เมนูส่วนท้าย">
              <ul className="-my-2.5 flex flex-wrap gap-x-8">
                {footer.nav.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className={`inline-flex min-h-11 items-center text-home-nav ${focusRing}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <p className="border-t border-red-500 pt-8 text-body-2 lg:text-right">{footer.copyright}</p>
      </div>
    </footer>
  );
}
