import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { ServiceBody } from "@/components/sections/ServiceBody";
import { OtherServices } from "@/components/sections/OtherServices";
import { Footer } from "@/components/sections/Footer";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { serviceDetails, servicePath, serviceUi } from "@/content/services";
import { shareImage } from "@/content/seo";
import { pageMetadata } from "@/lib/metadata";
import { serviceStructuredData } from "@/lib/structured-data";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

// One page per service, built at build time; any other slug is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return serviceDetails.map((service) => ({ slug: service.slug }));
}

function findService(slug: string) {
  return serviceDetails.find((service) => service.slug === slug);
}

export async function generateMetadata({ params }: ServicePageProps) {
  const service = findService((await params).slug);
  if (!service) return {};
  return pageMetadata({
    title: service.seo.title,
    description: service.seo.description,
    path: servicePath(service.slug),
    image: { path: shareImage.service(service.slug), alt: service.title },
  });
}

// A service's own page: the same content as its overlay on the home page, rendered on
// the server so it can be found, linked to and shared on its own. Not in the design;
// derived from the overlay (the sand panel, its heading and copy) with the site's
// header and footer, a breadcrumb back to the home page and the club's other services
// beside it from xl, below it on smaller screens.
export default async function ServicePage({ params }: ServicePageProps) {
  const service = findService((await params).slug);
  if (!service) notFound();
  const titleId = `service-${service.slug}-title`;

  return (
    <>
      <SiteHeader />
      <main id="main" className="px-5 pt-4 pb-4 md:px-10 lg:px-20 lg:pb-8">
        <div className="mx-auto max-w-wide">
          <Breadcrumbs
            label={serviceUi.breadcrumbLabel}
            items={[
              { label: serviceUi.home, href: "/" },
              { label: service.title, href: servicePath(service.slug) },
            ]}
          />
          <div className="mt-4 grid gap-16 xl:grid-cols-[var(--container-drawer)_1fr] xl:items-start">
            <article aria-labelledby={titleId} className="flex flex-col gap-6 bg-sand px-5 py-10 md:px-8 md:py-16">
              <ServiceHero titleId={titleId} title={service.title} byline={service.byline} headingLevel="h1" />
              <ServiceBody gallery={service.heroGallery} blocks={service.body} cta={service.cta} galleryLoading="eager" />
            </article>
            <OtherServices current={service.slug} />
          </div>
        </div>
      </main>
      <Footer />
      <JsonLd data={serviceStructuredData(service, serviceUi.home)} />
    </>
  );
}
