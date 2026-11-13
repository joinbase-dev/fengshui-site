import Image from "next/image";
import { homeFooter } from "@/content/home";
import { social } from "@/content/site";
import { serviceDetails } from "@/content/services";
import { LineButton } from "@/components/ui/LineButton";
import { ServiceLink } from "@/components/ui/ServiceLink";
import { SocialIcon, type SocialName } from "@/components/ui/SocialIcon";
import { Phrases } from "@/components/ui/Phrases";
import emblem from "@/public/images/emblem.png";
import bannerBackground from "@/public/images/home/v4/banner-bg.webp";
import footerBackground from "@/public/images/home/v4/footer-bg.webp";
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

// Figma Footer (55:3699, 2026-11-13), over an ink-wash landscape of misty mountains and
// a lake under a cream veil (50%): the wide banner, then the club's emblem and address
// beside the quick links (เมนูลัด), then the copyright beside the red social icons,
// across 1140px.
//
// The banner is 1140×206 with 24px corners: a red lacquer panel with a carved dragon on
// the right and lattice on the left, อ.ดำรงชัย cut out at its left end, cropped by the
// banner's foot, then the heading in pale gold and the line of text in sand and, at the
// right, the LINE button. From md to xl (derived) the button goes under the text. On
// phones (Figma 48:3296, 342 wide) the heading reads จองคิวปรึกษา, centred over the line
// of text and the button, and the portrait stands below them in front of the faint
// emblem, cut off by the banner's foot. The design's emblem carries the club's name as
// part of the picture; here the name is real text under the emblem. Email and phone,
// which the design leaves out, stay under the address. Below md everything stacks.
export function HomeFooter() {
  return (
    <footer className="relative isolate overflow-hidden bg-warm px-5 pt-16 md:px-10 md:pt-20 xl:pt-25">
      <Image src={footerBackground} alt="" fill sizes="100vw" quality={75} className="-z-10 object-cover object-bottom" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-veil" />
      <div className="mx-auto flex max-w-content flex-col gap-10 md:gap-16">
        <div className="relative isolate flex flex-col items-center overflow-hidden rounded-banner bg-brand-red-dark px-6 pt-8 text-center md:min-h-51.5 md:items-start md:py-10 md:pr-10 md:pl-60 md:text-left lg:pl-76 xl:flex-row xl:items-center xl:justify-between xl:py-0 xl:pr-16 xl:pl-83.5">
          <Image src={bannerBackground} alt="" fill sizes="(min-width: 1280px) 1140px, 100vw" quality={80} className="-z-10 object-cover" />
          <Image
            src={emblem}
            alt=""
            sizes="455px"
            className="absolute top-52.5 left-1/2 -z-10 h-auto w-113.75 max-w-none -translate-x-1/2 opacity-20 mix-blend-screen md:hidden"
          />
          <div className="relative order-last mt-3.5 h-74.75 w-66.5 shrink-0 overflow-hidden md:absolute md:top-0 md:-left-2.75 md:order-none md:mt-0 md:h-full md:overflow-visible">
            <Image
              src={bannerPortrait}
              alt=""
              sizes="266px"
              className="absolute top-0 left-0 h-auto w-full md:-top-5"
            />
          </div>
          <div className="flex flex-col items-center md:items-start md:gap-3">
            <h2 className="text-h2 font-semibold text-banner-title">
              <span className="md:hidden">{homeFooter.ctaTitleCompact}</span>
              <span className="hidden md:inline">
                <Phrases parts={homeFooter.ctaTitle} />
              </span>
            </h2>
            <p className="text-body text-banner-text"><Phrases parts={homeFooter.ctaText} /></p>
          </div>
          <LineButton className="mt-4 shrink-0 md:mt-6 xl:mt-0" />
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
