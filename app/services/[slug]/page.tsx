import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { PhotoBand } from "@/components/sections/PhotoBand";
import { ServiceIntro } from "@/components/sections/ServiceIntro";
import { ServiceHighlight } from "@/components/sections/ServiceHighlight";
import { ServiceLocation } from "@/components/sections/ServiceLocation";
import { ServiceVideo } from "@/components/sections/ServiceVideo";
import { Consultation } from "@/components/sections/Consultation";
import { PhotoGallery } from "@/components/sections/PhotoGallery";
import { Footer } from "@/components/sections/Footer";
import { JsonLd } from "@/components/ui/JsonLd";
import { getServiceDetail, serviceDetails } from "@/content/services";
import { site } from "@/content/site";
import { siteUrl } from "@/lib/site-url";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return serviceDetails.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps, parent: ResolvingMetadata): Promise<Metadata> {
  const service = getServiceDetail((await params).slug);
  if (!service) return {};

  // Setting openGraph/twitter here replaces the parent's, so carry over the site-wide
  // share image until the service has its own.
  const { openGraph, twitter } = await parent;

  const path = `/services/${service.slug}`;
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "th_TH",
      url: path,
      siteName: site.nameEn,
      title: service.metaTitle,
      description: service.metaDescription,
      images: openGraph?.images,
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      images: twitter?.images,
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const service = getServiceDetail((await params).slug);
  if (!service) notFound();

  const path = `/services/${service.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    url: `${siteUrl}${path}`,
    provider: {
      "@type": "ProfessionalService",
      name: site.name,
      alternateName: site.nameEn,
      url: siteUrl,
    },
  };

  return (
    <>
      <SiteHeader currentHref={path} />
      <main id="main">
        <PhotoBand photo={service.heroPhoto} preload />
        <ServiceIntro title={service.title} intro={service.intro} />
        <ServiceHighlight highlight={service.highlight} />
        <ServiceLocation location={service.location} />
        <ServiceVideo video={service.video} />
        <PhotoBand photo={service.groupPhoto} />
        <Consultation />
        <PhotoGallery photos={service.gallery} />
      </main>
      <Footer />
      <JsonLd data={structuredData} />
    </>
  );
}
