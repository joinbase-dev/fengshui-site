import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailTemplate } from "@/components/templates/ServiceDetailTemplate";
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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    url: `${siteUrl}/services/${service.slug}`,
    provider: {
      "@type": "ProfessionalService",
      name: site.name,
      alternateName: site.nameEn,
      url: siteUrl,
    },
  };

  return (
    <>
      <ServiceDetailTemplate service={service} />
      <JsonLd data={structuredData} />
    </>
  );
}
