import type { ServiceDetail } from "@/content/services";
import { ArrowRightIcon } from "@/components/ui/ArrowRightIcon";
import { CardSlideshow } from "@/components/ui/CardSlideshow";
import { ServiceLink } from "@/components/ui/ServiceLink";

type ServiceCardProps = {
  service: ServiceDetail;
  moreLabel: string;
};

// A service card (Figma "Card 01", 19:1821): copy on the left and the service's photo
// on the right behind a hairline, in a card with a 2px border. The whole card is one
// link to the service: a click opens its overlay in place. The design draws the first
// card in its hover state (red border and title); hover and keyboard focus show that
// state, the arrow steps forward and the service's photos slide through.
//
// Ohm found the design's 219×270 portrait photo too tall (2026-10-31): the photo takes
// 40% of the card and the copy sets the card's height (about 2.5:1, 558×230 at 1440).
// In the one-column layout (sm to xl, derived) the photo takes 34%, so it stays about
// square in the wider card, and every card is at least 228px tall so a card with
// shorter copy matches the others.
// The photo cell stretches to the full row height, so it meets the card's border on
// every side with no strip; the photo covers it, cropped about its centre (it is near
// square, so a portrait photo loses little). Below sm (derived) the photo sits on top
// of the copy at 3:2.
export function ServiceCard({ service, moreLabel }: ServiceCardProps) {
  const { eyebrow, lines, photo } = service.card;
  const photos = [photo, ...service.heroGallery.flat().filter((item) => item.alt !== "" && item.src !== photo.src)];
  return (
    <ServiceLink
      slug={service.slug}
      aria-haspopup="dialog"
      className="group grid h-full overflow-hidden rounded-sm border-2 border-hairline bg-white transition-colors duration-300 ease-refined hover:border-brand-red focus-visible:border-brand-red focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-red sm:min-h-57 sm:grid-cols-[1fr_34%] xl:grid-cols-[1fr_40%]"
    >
      <div className="order-2 flex flex-col gap-4 p-6 sm:order-1 sm:py-8 sm:pr-4 sm:pl-8">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col text-ink transition-colors duration-300 ease-refined group-hover:text-brand-red group-focus-visible:text-brand-red">
            {eyebrow && (
              <span lang="zh-Hans" className="font-cjk text-kicker font-light">
                {eyebrow}
              </span>
            )}
            <h3 className="text-h3 font-semibold">{service.title}</h3>
          </div>
          <p className="text-body text-ink-secondary sm:max-w-71">
            {lines.map((line, index) => (
              <span key={line} className="md:block">
                {index > 0 && " "}
                {line}
              </span>
            ))}
          </p>
        </div>
        <span className="mt-auto inline-flex items-center gap-4 text-action font-semibold text-brand-red">
          {moreLabel}
          <ArrowRightIcon className="size-4 transition-transform duration-300 ease-refined group-hover:translate-x-1 group-focus-visible:translate-x-1" />
        </span>
      </div>
      <div className="relative order-1 aspect-[3/2] overflow-hidden bg-placeholder sm:order-2 sm:aspect-auto sm:border-l sm:border-hairline">
        <CardSlideshow photos={photos} sizes="(min-width: 1280px) 222px, (min-width: 640px) 229px, 100vw" />
      </div>
    </ServiceLink>
  );
}
