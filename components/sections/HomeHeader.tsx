import Image from "next/image";
import { homeHeader } from "@/content/home";
import { footer } from "@/content/site";
import { serviceDetails } from "@/content/services";
import { MobileMenu } from "@/components/ui/MobileMenu";
import { ServiceLink } from "@/components/ui/ServiceLink";
import emblem from "@/public/images/emblem.png";

const linkStyle =
  "inline-flex min-h-11 items-center whitespace-nowrap rounded-xs text-action font-semibold text-white underline-offset-8 decoration-brand-gold decoration-2 transition-colors duration-200 ease-refined hover:text-brand-gold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";

function serviceBySlug(slug: string) {
  const service = serviceDetails.find((item) => item.slug === slug);
  if (!service) throw new Error(`Unknown service ${slug}`);
  return service;
}

// Figma header/desktop (19:1980): white links on the hero, 24px from the top, with the
// club's emblem in the middle, centred across the page. The service links open their
// overlays. Below lg (derived) the emblem moves left and a menu button on the right opens
// the full-screen menu, which lists home and all four services.
export function HomeHeader() {
  const logo = (outline: string) => (
    <a
      href="#top"
      aria-label={homeHeader.logoLabel}
      className={`flex size-16 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ease-refined hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 ${outline}`}
    >
      <Image src={emblem} alt="" width={56} height={52} sizes="56px" className="h-auto w-14" />
    </a>
  );

  const serviceItem = (slug: string) => {
    const service = serviceBySlug(slug);
    return (
      <li key={slug}>
        <ServiceLink slug={slug} aria-haspopup="dialog" className={linkStyle}>
          {service.title}
        </ServiceLink>
      </li>
    );
  };

  return (
    <header className="absolute inset-x-0 top-0 z-30 px-5 pt-[max(1rem,env(safe-area-inset-top))] md:px-10 lg:py-6 xl:px-30">
      <nav aria-label={homeHeader.navLabel} className="mx-auto hidden max-w-wide lg:block">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-8 xl:gap-12">
          <ul className="flex items-center justify-end gap-8 xl:gap-12">
            <li>
              <a href="#top" className={linkStyle}>
                {homeHeader.homeLabel}
              </a>
            </li>
            {homeHeader.servicesBeforeLogo.map(serviceItem)}
          </ul>
          {logo("focus-visible:outline-white")}
          <ul className="flex items-center gap-8 xl:gap-12">{homeHeader.servicesAfterLogo.map(serviceItem)}</ul>
        </div>
      </nav>

      <div className="flex items-center justify-between gap-6 pb-2 lg:hidden">
        {logo("focus-visible:outline-white")}
        <MobileMenu
          logo={logo("focus-visible:outline-red-800")}
          links={[
            { label: homeHeader.homeLabel, href: "#top" },
            ...serviceDetails.map((service) => ({ label: service.title, href: "", service: service.slug })),
          ]}
          social={footer.social}
          socialLabel={footer.socialLabel}
          menuLabel={homeHeader.menuLabel}
          closeLabel={homeHeader.closeLabel}
          navLabel={homeHeader.navLabel}
          triggerClassName="text-white hover:text-brand-gold focus-visible:outline-white"
        />
      </div>
    </header>
  );
}
