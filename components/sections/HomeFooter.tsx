import Image from "next/image";
import { homeFooter } from "@/content/home";
import { social } from "@/content/site";
import { serviceDetails } from "@/content/services";
import { LineButton } from "@/components/ui/LineButton";
import { ServiceLink } from "@/components/ui/ServiceLink";
import { SocialIcon, type SocialName } from "@/components/ui/SocialIcon";
import { Phrases } from "@/components/ui/Phrases";
import emblem from "@/public/images/emblem.png";
import bannerBackground from "@/public/images/home/v3/banner-bg.webp";
import bannerPortrait from "@/public/images/home/v3/banner-portrait.webp";

const textLink =
  "inline-flex min-h-11 items-center rounded-xs text-body text-ink-secondary underline-offset-4 transition-colors duration-200 ease-refined hover:text-brand-red hover:underline focus-visible:outline-2 focus-visible:outline-brand-red md:min-h-0";

// The design's order: Facebook, Instagram, TikTok, LINE.
const socialLinks: { name: SocialName; label: string; href: string }[] = [
  { name: "facebook", ...social.facebook },
  { name: "instagram", ...social.instagram },
  { name: "tiktok", ...social.tiktok },
  { name: "line", ...social.line },
];

// Figma Footer (19:1939, revised 2026-11-01), on the warm grey: the wide banner
// (37:3090), then the club's emblem and address beside the quick links (เมนูลัด), then
// the copyright beside the red social icons, across 1140px.
//
// The banner is 1140×206 with 24px corners: a blurred photo in sand tones with the
// club's emblem screened over its left end (one image, as the design layers them),
// อ.ดำรงชัย cut out and standing in front of the emblem, cropped by the banner's foot,
// then the heading and line of text and, at the right, the LINE button. From md to xl
// (derived) the button goes under the text; on phones (derived) the portrait stands
// centred on top and the text and button follow, centred. The design's emblem carries the club's name as
// part of the picture; here the name is real text under the emblem. Email and phone,
// which the design leaves out, stay under the address. Below md (derived) everything
// stacks.
export function HomeFooter() {
  return (
    <footer className="bg-warm px-5 pt-16 md:px-10 md:pt-20 xl:pt-25">
      <div className="mx-auto flex max-w-content flex-col gap-10 md:gap-16">
        <div className="relative isolate flex flex-col items-center overflow-hidden rounded-banner bg-banner px-6 pb-8 text-center md:min-h-51.5 md:items-start md:py-10 md:pr-10 md:pl-60 md:text-left lg:pl-76 xl:flex-row xl:items-center xl:justify-between xl:py-0 xl:pr-16 xl:pl-83.5">
          <Image src={bannerBackground} alt="" fill sizes="(min-width: 1280px) 1140px, 100vw" quality={80} className="-z-10 object-cover object-left" />
          <div className="relative h-52 w-48 shrink-0 overflow-hidden md:absolute md:top-0 md:-left-2.75 md:h-full md:w-66.5 md:overflow-visible">
            <Image
              src={bannerPortrait}
              alt=""
              sizes="266px"
              className="absolute top-3 left-0 h-auto w-full md:-top-5"
            />
          </div>
          <div className="flex flex-col items-center gap-3 pt-2 md:items-start md:pt-0">
            <h2 className="text-h2 font-semibold text-ink"><Phrases parts={homeFooter.ctaTitle} /></h2>
            <p className="text-body text-ink-secondary">{homeFooter.ctaText}</p>
          </div>
          <LineButton className="mt-6 w-full shrink-0 sm:w-auto xl:mt-0" />
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

        <div className="flex flex-col-reverse gap-4 py-10 sm:flex-row sm:items-center sm:justify-between md:pt-4">
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
