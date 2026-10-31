import Image from "next/image";
import { homeFooter } from "@/content/home";
import { social } from "@/content/site";
import { serviceDetails } from "@/content/services";
import { LineButton } from "@/components/ui/LineButton";
import { ServiceLink } from "@/components/ui/ServiceLink";
import { SocialIcon, type SocialName } from "@/components/ui/SocialIcon";
import { Phrases } from "@/components/ui/Phrases";
import emblem from "@/public/images/emblem.png";

const textLink =
  "inline-flex min-h-11 items-center rounded-xs text-body text-ink-secondary underline-offset-4 transition-colors duration-200 ease-refined hover:text-brand-red hover:underline focus-visible:outline-2 focus-visible:outline-brand-red md:min-h-0";

// The design's order: Facebook, Instagram, TikTok, LINE.
const socialLinks: { name: SocialName; label: string; href: string }[] = [
  { name: "facebook", ...social.facebook },
  { name: "instagram", ...social.instagram },
  { name: "tiktok", ...social.tiktok },
  { name: "line", ...social.line },
];

// Figma Footer (19:1939): the mint call to action with the LINE button, then the
// club's emblem and address beside the quick links (เมนูลัด), then the copyright beside
// the red social icons, across 1140px. The design's emblem carries the club's name as
// part of the picture; here the name is real text under the emblem. Email and phone,
// which the design leaves out, stay under the address. Below md (derived) everything
// stacks.
export function HomeFooter() {
  return (
    <footer className="bg-white px-5 pt-16 md:px-10 md:pt-20 xl:pt-25">
      <div className="mx-auto flex max-w-content flex-col gap-10">
        <div className="flex flex-col items-start gap-6 rounded-panel bg-mint p-6 md:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="text-h2 font-semibold text-ink"><Phrases parts={homeFooter.ctaTitle} /></h2>
            <p className="text-body text-ink-secondary">{homeFooter.ctaText}</p>
          </div>
          <LineButton className="w-full shrink-0 sm:w-auto" />
        </div>

        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col items-start gap-6">
            <a
              href="#top"
              className="group flex flex-col items-center gap-1 rounded-sm text-center whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red"
            >
              <Image
                src={emblem}
                alt=""
                width={64}
                height={59}
                sizes="64px"
                className="h-auto w-16 transition-transform duration-300 ease-refined group-hover:scale-105"
              />
              <span className="text-xs text-gold-700">
                {homeFooter.name}
                <span lang="en" className="block">
                  {homeFooter.nameEn}
                </span>
              </span>
            </a>
            <address className="flex max-w-91 flex-col items-start gap-1 text-body text-ink-secondary not-italic">
              <span>{homeFooter.address}</span>
              <a href={`mailto:${homeFooter.email}`} className={textLink}>
                <span className="sr-only">{homeFooter.emailLabel} </span>
                {homeFooter.email}
              </a>
              <a href={homeFooter.phoneHref} className={textLink}>
                <span className="sr-only">{homeFooter.phoneLabel} </span>
                {homeFooter.phone}
              </a>
            </address>
          </div>

          <nav aria-labelledby="footer-menu-title" className="flex flex-col gap-6 md:w-70.25">
            <h2 id="footer-menu-title" className="text-h3 font-semibold text-ink">
              {homeFooter.menuTitle}
            </h2>
            <ul className="flex flex-col gap-0 md:gap-2">
              {serviceDetails.map((service) => (
                <li key={service.slug}>
                  <ServiceLink slug={service.slug} aria-haspopup="dialog" className={textLink}>
                    {service.title}
                  </ServiceLink>
                </li>
              ))}
              <li>
                <a href={homeFooter.contactLink.href} target="_blank" rel="noopener noreferrer" className={textLink}>
                  {homeFooter.contactLink.label}
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex flex-col-reverse gap-4 py-10 sm:flex-row sm:items-center sm:justify-between">
          <p lang="en" className="text-body text-ink-secondary">
            {homeFooter.copyright}
          </p>
          <ul aria-label={homeFooter.socialLabel} className="-mx-2 flex items-center gap-2 sm:gap-2">
            {socialLinks.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="flex size-11 items-center justify-center rounded-sm text-brand-red transition duration-200 ease-refined hover:-translate-y-0.5 hover:text-brand-red-dark focus-visible:outline-2 focus-visible:outline-brand-red"
                >
                  <SocialIcon name={item.name} className="size-7" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
