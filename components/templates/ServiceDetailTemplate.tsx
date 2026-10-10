import { SiteHeader } from "@/components/sections/SiteHeader";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { ServiceBody } from "@/components/sections/ServiceBody";
import { ServiceBooking } from "@/components/sections/ServiceBooking";
import { Gallery } from "@/components/sections/Gallery";
import { Footer } from "@/components/sections/Footer";
import type { ServiceDetail } from "@/content/services";

type ServiceDetailTemplateProps = {
  service: ServiceDetail;
};

// Every service page (Figma 405:2008): the title beside the looping gallery, the
// service's copy, the shared booking block, and the photo strip and footer shared
// with Home.
export function ServiceDetailTemplate({ service }: ServiceDetailTemplateProps) {
  return (
    <>
      <SiteHeader currentHref={`/services/${service.slug}`} />
      <main id="main">
        <ServiceHero titleLines={service.titleLines} gallery={service.heroGallery} />
        <ServiceBody blocks={service.body} />
        <ServiceBooking />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
