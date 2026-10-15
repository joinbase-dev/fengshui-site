import Image from "next/image";
import { services } from "@/content/site";
import { serviceDetails } from "@/content/services";
import { ArrowUpRightIcon } from "@/components/ui/ArrowUpRightIcon";
import { Clover } from "@/components/ui/Clover";
import { DotField } from "@/components/ui/DotField";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
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
// so the panel keeps the design's composition at any width. On wide screens with a
// pointer, hovering or focusing a card swaps the clover and statement for a stack of
// three of that service's photos (Ohm's mock-up, 2026-10-15), in pure CSS
// (app/styles/services.css). Services without photos keep the statement.
export function Services() {
  return (
    <section
      id={services.id}
      aria-labelledby="services-title"
      className="scroll-mt-6 px-5 pt-12 pb-20 md:px-10 lg:px-20 lg:pt-15 lg:pb-30"
    >
      <div className="mx-auto max-w-wide">
        <SectionLabel id="services-title">{services.label}</SectionLabel>

        <div className="services-showcase mt-8 grid border-y border-rule xl:grid-cols-[650fr_630fr]">
          <ul className="border-rule xl:border-r">
            {serviceDetails.map((service, index) => (
              <li
                key={service.slug}
                data-preview={service.heroGallery.length > 0 || undefined}
                className="border-b border-rule last:border-b-0"
              >
                <ServiceLink
                  slug={service.slug}
                  aria-haspopup="dialog"
                  className={`group relative flex items-start gap-4 px-5 py-8 text-black transition-colors md:min-h-41 md:px-8 md:py-10 ${ease} hover:bg-sand focus-visible:bg-sand focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-red-800`}
                >
                  <span className="shrink-0 text-service-title-sm font-semibold tabular-nums md:text-service-title">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {/* From md the left padding is room for the copy to slide into when the arrow shows. */}
                  <span
                    className={`flex min-w-0 flex-1 flex-col items-end text-right md:pl-16 md:transition-transform ${ease} md:group-hover:-translate-x-16 md:group-focus-visible:-translate-x-16 md:pointer-coarse:-translate-x-16`}
                  >
                    <h3 className="flex items-center gap-2 text-service-title-sm font-semibold md:text-service-title">
                      {service.title}
                      {/* Phones: a small arrow beside the title instead of the circle. */}
                      <ArrowUpRightIcon className="size-4 text-red-800 md:hidden" />
                    </h3>
                    <span className="text-copy-sm md:text-copy">
                      <Lines lines={service.summaryLines} />
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className={`absolute top-1/2 right-8 hidden size-12 -translate-y-1/2 scale-50 items-center justify-center rounded-full bg-red-800 text-white opacity-0 transition md:flex ${ease} group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100 pointer-coarse:scale-100 pointer-coarse:opacity-100`}
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
              <div className="service-statement pointer-events-none absolute inset-0">
                <Clover className="absolute top-[22.825%] left-[26.825%] w-[47.302%]" />
                <p className="absolute top-[17.546%] right-[9.365%] left-[6%] text-right text-statement-xs font-semibold text-black sm:left-[17.778%] sm:text-statement-sm xl:text-statement">
                  {services.statementLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>
              {/* One stack per service, in list order, so the nth card shows the nth stack. */}
              <div aria-hidden="true" className="service-previews">
                {serviceDetails.map((service) => (
                  <div key={service.slug} className="service-preview">
                    {service.heroGallery
                      .flat()
                      .slice(0, 3)
                      .reverse()
                      .map((photo, index) => (
                        <PhotoFrame key={index} className="service-preview-frame absolute">
                          <Image
                            src={photo.src}
                            alt=""
                            fill
                            // About 58% of the panel, which is 630px wide at 1440.
                            sizes="(min-width: 1440px) 365px, 26vw"
                            className="object-cover"
                          />
                        </PhotoFrame>
                      ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
