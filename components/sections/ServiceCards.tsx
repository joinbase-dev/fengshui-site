import { homeServices } from "@/content/home";
import { serviceDetails } from "@/content/services";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Phrases } from "@/components/ui/Phrases";

// Figma Services Section (19:1813): the eyebrow (三大命理 ศาสตร์หลัก) over the h2, centred,
// then the four service cards two by two, 24px apart, across 1140px with 100px above
// and below. Below xl (derived) the cards stack in one column.
export function ServiceCards() {
  return (
    <section
      id={homeServices.id}
      aria-labelledby="services-title"
      className="scroll-mt-6 bg-white px-5 py-16 md:px-10 md:py-20 xl:py-25"
    >
      <div className="mx-auto flex max-w-content flex-col items-center gap-10 md:gap-16">
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
