import { homeServices } from "@/content/home";
import { serviceDetails } from "@/content/services";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Phrases } from "@/components/ui/Phrases";
import { SectionBackdrop } from "@/components/ui/SectionBackdrop";
import servicesBackground from "@/public/images/home/v4/services-bg.webp";
import servicesBackgroundTablet from "@/public/images/home/v4/services-bg-tablet.webp";
import servicesBackgroundMobile from "@/public/images/home/v4/services-bg-mobile.webp";

// Figma services section (55:3571, 2026-11-13): 866px tall at 1440 in the red temple hall
// with its dragon pillars, the design's own crops for tablet and phone (71:1646), and a
// warm glow (a blurred ellipse in the design) spilling down from the top edge. The white
// eyebrow (三大命理 ศาสตร์หลัก) over the white h2, centred, then the four service cards two
// by two, 24px apart, across 1200px. Below xl the cards stack in one column (derived).
export function ServiceCards() {
  return (
    <section
      id={homeServices.id}
      aria-labelledby="services-title"
      className="relative isolate scroll-mt-6 overflow-hidden bg-brand-red-dark px-5 py-16 md:px-10 md:py-20 xl:px-30"
    >
      <SectionBackdrop desktop={servicesBackground} tablet={servicesBackgroundTablet} mobile={servicesBackgroundMobile} desktopFrom={1280} />
      <div aria-hidden="true" className="services-glow" />
      <div className="mx-auto flex max-w-founder flex-col items-center gap-8 md:gap-16">
        <div className="flex flex-col items-center gap-4 text-center text-white">
          <p className="flex items-center gap-2 text-kicker">
            <span lang="zh-Hans" className="font-cjk font-light">
              {homeServices.eyebrowChinese}
            </span>
            <span>{homeServices.eyebrow}</span>
          </p>
          <h2 id="services-title" className="text-h2 font-semibold">
            <Phrases parts={homeServices.title} />
          </h2>
        </div>
        <ul className="grid w-full max-w-2xl gap-6 xl:max-w-none xl:grid-cols-2">
          {serviceDetails.map((service) => (
            <li key={service.slug}>
              <ServiceCard service={service} moreLabel={homeServices.more} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
