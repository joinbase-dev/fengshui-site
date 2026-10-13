import { ServiceHero } from "@/components/sections/ServiceHero";
import { ServiceBody } from "@/components/sections/ServiceBody";
import { ServiceBooking } from "@/components/sections/ServiceBooking";
import { ServiceDialog } from "@/components/ui/ServiceDialog";
import { serviceUi, type ServiceDetail } from "@/content/services";

type ServiceOverlayProps = {
  service: ServiceDetail;
};

// One service's overlay (Figma 423:3681), opened from its card in the service list:
// the title beside the infinite image loop, the service's copy and the shared booking
// block. Until the overlay frame is read, its content keeps the layout of the old
// service pages (Figma 405:2008).
export function ServiceOverlay({ service }: ServiceOverlayProps) {
  const titleId = `service-${service.slug}-title`;
  return (
    <ServiceDialog slug={service.slug} labelledBy={titleId} closeLabel={serviceUi.close}>
      <ServiceHero titleId={titleId} titleLines={service.titleLines} gallery={service.heroGallery} />
      <ServiceBody blocks={service.body} />
      <ServiceBooking id={`service-${service.slug}-booking`} />
    </ServiceDialog>
  );
}
