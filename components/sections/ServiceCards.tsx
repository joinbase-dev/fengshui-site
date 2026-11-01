import Image from "next/image";
import { homeServices } from "@/content/home";
import { serviceDetails } from "@/content/services";
import { Partners } from "@/components/sections/Partners";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Phrases } from "@/components/ui/Phrases";
import servicesBackground from "@/public/images/home/v3/services-bg.webp";

// Figma Services Section (19:1813, and 36:1726 on phones; revised 2026-11-01): on the
// warm grey, a blurred photo of the same tones, then the partner strip along the top,
// the eyebrow (三大命理 ศาสตร์หลัก) over the h2, centred, and the four service cards
// two by two, 24px apart, across 1140px, 100px from the foot. The backdrop is a blur,
// so it ships small and scales up. Below xl the cards stack in one column (the 390
// frame on phones, derived between).
export function ServiceCards() {
  return (
    <section
      id={homeServices.id}
      aria-labelledby="services-title"
      className="relative isolate scroll-mt-6 overflow-hidden bg-warm pb-16 md:pb-20 xl:pb-25"
    >
      <Image src={servicesBackground} alt="" fill sizes="100vw" quality={70} className="-z-10 object-cover object-top" />
      <Partners />
      <div className="mx-auto mt-13 flex max-w-content flex-col items-center gap-8 px-6 md:mt-8 md:gap-16 md:px-10 xl:px-0">
        <div className="flex flex-col items-center gap-4 text-center text-ink">
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
