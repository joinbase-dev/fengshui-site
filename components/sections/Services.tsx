import { services } from "@/content/site";
import { serviceDetails } from "@/content/services";
import { ArrowUpRightIcon } from "@/components/ui/ArrowUpRightIcon";
import { Clover } from "@/components/ui/Clover";
import { DotField } from "@/components/ui/DotField";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ServiceLink } from "@/components/ui/ServiceLink";

// Shared timing for the card's hover: transform, opacity and colour only.
const ease = "duration-300 ease-refined";

// Design line breaks hold from sm up; on phones the lines run together and wrap.
function Lines({ lines }: { lines: readonly string[] }) {
  return lines.map((line, index) => (
    <span key={line} className="sm:block">
      {index > 0 && " "}
      {line}
    </span>
  ));
}

// Figma service-section (1:782), 1280px wide at 1440: the numbered service list
// (650px) beside the dotted panel (630×701), ruled above, below and between. Each card
// opens its service's overlay. Hover, keyboard focus and touch screens show the card's
// hover state from the design's service-card component (1:11): a sand background and
// a red arrow circle 16px right of the copy, which slides over to make room. Cards are
// at least 164px tall, as the design's one-line card is. Below xl (derived, not drawn)
// the panel sits under the list.
//
// The panel's dots, clover and statement are placed as shares of the 630×701 frame,
// so the panel keeps the design's composition at any width.
export function Services() {
  return (
    <section
      id={services.id}
      aria-labelledby="services-title"
      className="scroll-mt-6 px-5 pt-12 pb-20 md:px-10 lg:px-20 lg:pt-15 lg:pb-30"
    >
      <div className="mx-auto max-w-wide">
        <SectionLabel id="services-title">{services.label}</SectionLabel>

        <div className="mt-8 grid border-y border-rule xl:grid-cols-[650fr_630fr]">
          <ul className="border-rule xl:border-r">
            {serviceDetails.map((service, index) => (
              <li key={service.slug} className="border-b border-rule last:border-b-0">
                <ServiceLink
                  slug={service.slug}
                  aria-haspopup="dialog"
                  className={`group relative flex items-start gap-4 px-5 py-8 text-black transition-colors md:min-h-41 md:px-8 md:py-10 ${ease} hover:bg-sand focus-visible:bg-sand focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-red-800`}
                >
                  <span className="shrink-0 text-service-title-sm font-semibold tabular-nums md:text-service-title">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {/* The left padding is room for the copy to slide into when the arrow shows. */}
                  <span
                    className={`flex min-w-0 flex-1 flex-col items-end pl-16 text-right transition-transform ${ease} group-hover:-translate-x-16 group-focus-visible:-translate-x-16 pointer-coarse:-translate-x-16`}
                  >
                    <h3 className="text-service-title-sm font-semibold md:text-service-title">{service.title}</h3>
                    <span className="text-copy-sm md:text-copy">
                      <Lines lines={service.summaryLines} />
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className={`absolute top-1/2 right-5 flex size-12 -translate-y-1/2 scale-50 items-center justify-center rounded-full bg-red-800 text-white opacity-0 transition ${ease} group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100 md:right-8 pointer-coarse:scale-100 pointer-coarse:opacity-100`}
                  >
                    <ArrowUpRightIcon className="size-5" />
                  </span>
                </ServiceLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-center border-t border-rule xl:border-t-0">
            <div className="relative aspect-[630/701] w-full max-w-157.5">
              <DotField className="absolute top-[4.422%] left-[4.603%] h-[84.879%] w-[92.063%]" />
              <Clover className="pointer-events-none absolute top-[22.825%] left-[26.825%] w-[47.302%]" />
              <p className="pointer-events-none absolute top-[17.546%] right-[9.365%] left-[6%] text-right text-statement-xs font-semibold text-black sm:left-[17.778%] sm:text-statement-sm xl:text-statement">
                {services.statementLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
