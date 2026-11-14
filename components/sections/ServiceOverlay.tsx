import { ServiceBody } from "@/components/sections/ServiceBody";
import { ContactIcons } from "@/components/ui/ContactIcons";
import { ServiceDialog } from "@/components/ui/ServiceDialog";
import { serviceUi, type ServiceDetail } from "@/content/services";

type ServiceOverlayProps = {
  service: ServiceDetail;
};

// One service's overlay (Figma 37:2816, revised 2026-11-01), opened from its card, the
// navbar or the footer: 64px above and below its content and 32px at the sides, the
// title block, then the photo carousel, the copy box and the consult link. The title is
// the card's Chinese eyebrow, a dot and the service's name in 32px; under it the
// byline beside the club's contact icons. On the red temple panel (2026-11-14) all of
// it is white and the dot gold, which the red dot of the old light panel would vanish
// into.
export function ServiceOverlay({ service }: ServiceOverlayProps) {
  const titleId = `service-${service.slug}-title`;
  const { eyebrow } = service.card;
  return (
    <ServiceDialog slug={service.slug} labelledBy={titleId} closeLabel={serviceUi.close}>
      <div className="service-dialog-content flex flex-col gap-6 px-5 pt-16 pb-16 md:px-8">
        <div className="flex flex-col gap-4 text-white">
          <h2 id={titleId} className="flex flex-wrap items-center gap-x-4 gap-y-1 pr-20 text-intro-sm font-semibold md:text-intro">
            {eyebrow && (
              <>
                <span lang="zh-Hans">{eyebrow}</span>
                <span aria-hidden="true" className="size-3 shrink-0 rounded-full bg-brand-gold" />
              </>
            )}
            <span>{service.title}</span>
          </h2>
          <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
            {/* White at 75% on the red panel (well over 4.5:1). */}
            <p className="text-copy-sm text-white/75 md:text-copy">{service.byline}</p>
            <ContactIcons label={serviceUi.contact} tone="light" />
          </div>
        </div>
        <ServiceBody service={service} variant="overlay" />
      </div>
    </ServiceDialog>
  );
}
