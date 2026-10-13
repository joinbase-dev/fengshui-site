import { services } from "@/content/site";
import { serviceDetails } from "@/content/services";
import { ArrowUpRightIcon } from "@/components/ui/ArrowUpRightIcon";
import { DotField } from "@/components/ui/DotField";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ServiceLink } from "@/components/ui/ServiceLink";

// Shared timing for the card's hover: transform, opacity and colour only.
const ease = "duration-300 ease-refined";

// Figma service-section (415:1658), 1280px wide at 1440: the numbered service list
// (650px) beside the dotted panel (630px), ruled above, below and between. Each card
// opens its service's overlay. Hover, keyboard focus and touch screens show the card's
// hover state from the design's service-card component: a sand background and a red
// arrow circle that slides in beside the title. Below lg (derived, not drawn) the
// panel sits under the list.
//
// Not built yet: the clover drawn over the panel (415:1658 "clover-element"), which
// needs exporting from Figma as an SVG.
export function Services() {
  return (
    <section
      id={services.id}
      aria-labelledby="services-title"
      className="scroll-mt-6 px-5 pt-12 pb-20 md:px-10 lg:px-20 lg:pt-15 lg:pb-30"
    >
      <div className="mx-auto max-w-wide">
        <SectionLabel id="services-title">{services.label}</SectionLabel>

        <div className="mt-8 grid border-y border-rule lg:grid-cols-[650fr_630fr]">
          <ul className="border-rule lg:border-r">
            {serviceDetails.map((service, index) => (
              <li key={service.slug} className="border-b border-rule last:border-b-0">
                <ServiceLink
                  slug={service.slug}
                  aria-haspopup="dialog"
                  className={`group relative flex min-h-41.25 items-start gap-4 px-5 pt-10 pb-8 text-black transition-colors md:px-8 ${ease} hover:bg-sand focus-visible:bg-sand focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand`}
                >
                  <span className="shrink-0 text-service-title-sm font-semibold tabular-nums lg:text-service-title">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {/* The left padding is room for the copy to slide into when the arrow shows. */}
                  <span
                    className={`flex min-w-0 flex-1 flex-col items-end pl-16 text-right transition-transform ${ease} group-hover:-translate-x-16 group-focus-visible:-translate-x-16 pointer-coarse:-translate-x-16`}
                  >
                    <h3 className="text-service-title-sm font-semibold lg:text-service-title">{service.title}</h3>
                    <span className="mt-3 text-service-summary">{service.summary}</span>
                  </span>
                  <span
                    aria-hidden="true"
                    className={`absolute top-1/2 right-5 flex size-12 -translate-y-1/2 scale-50 items-center justify-center rounded-full bg-crimson text-white opacity-0 transition ${ease} group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100 md:right-8 pointer-coarse:scale-100 pointer-coarse:opacity-100`}
                  >
                    <ArrowUpRightIcon className="size-5" />
                  </span>
                </ServiceLink>
              </li>
            ))}
          </ul>

          <div className="relative min-h-100 overflow-hidden border-t border-rule lg:min-h-0 lg:border-t-0">
            <DotField className="absolute inset-x-5 inset-y-6 md:inset-x-7 md:inset-y-8" />
            <p className="pointer-events-none relative ml-auto max-w-103.25 px-6 pt-16 pb-12 text-right text-statement-sm font-semibold text-black md:pr-14.75 lg:pt-29.5 lg:text-statement">
              {services.statement}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
