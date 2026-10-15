import { ServiceHero } from "@/components/sections/ServiceHero";
import { ServiceBody } from "@/components/sections/ServiceBody";
import { ServiceDialog } from "@/components/ui/ServiceDialog";
import { serviceUi, type ServiceDetail } from "@/content/services";

type ServiceOverlayProps = {
  service: ServiceDetail;
};

// One service's overlay (Figma 1:3286), opened from its card in the service list: a
// 702px sand panel on the right, 64px above and below its content and 32px at the
// sides, holding the service's heading block and its body 24px apart.
export function ServiceOverlay({ service }: ServiceOverlayProps) {
  const titleId = `service-${service.slug}-title`;
  return (
    <ServiceDialog slug={service.slug} labelledBy={titleId} closeLabel={serviceUi.close}>
      <div className="service-dialog-content flex flex-col gap-6 px-5 pt-16 pb-16 md:px-8">
        <ServiceHero titleId={titleId} title={service.title} byline={service.byline} />
        <ServiceBody gallery={service.heroGallery} blocks={service.body} />
      </div>
    </ServiceDialog>
  );
}
