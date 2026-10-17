import { founder, organization, seo, shareImage } from "@/content/seo";
import { servicePath, type ServiceDetail } from "@/content/services";
import { absoluteUrl, siteUrl } from "@/lib/site-url";

// Schema.org JSON-LD for the pages (components/ui/JsonLd.tsx writes it out). Every node
// says only what the page itself shows: no ratings, prices or credentials. Nodes refer
// to each other by @id, so each page can carry the club, the site and its founder once.

const ids = {
  organization: `${siteUrl}/#organization`,
  website: `${siteUrl}/#website`,
  founder: `${siteUrl}/#founder`,
};

type Node = Record<string, unknown>;

// The club: a professional service with the address, email and phone of the footer.
function organizationNode(): Node {
  return {
    "@type": "ProfessionalService",
    "@id": ids.organization,
    name: seo.siteName,
    alternateName: seo.alternateName,
    description: seo.home.description,
    url: absoluteUrl("/"),
    logo: absoluteUrl(organization.logoPath),
    image: absoluteUrl(shareImage.home.path),
    email: organization.email,
    telephone: organization.telephone,
    address: {
      "@type": "PostalAddress",
      streetAddress: organization.address.street,
      addressLocality: organization.address.city,
      postalCode: organization.address.postalCode,
      addressCountry: "TH",
    },
    areaServed: { "@type": "Country", name: "Thailand" },
    founder: { "@id": ids.founder },
    sameAs: organization.sameAs,
  };
}

function websiteNode(): Node {
  return {
    "@type": "WebSite",
    "@id": ids.website,
    name: seo.siteName,
    alternateName: seo.alternateName,
    url: absoluteUrl("/"),
    inLanguage: "th",
    publisher: { "@id": ids.organization },
  };
}

function founderNode(): Node {
  return {
    "@type": "Person",
    "@id": ids.founder,
    name: founder.name,
    honorificPrefix: founder.honorific,
    knowsAbout: founder.knowsAbout,
    worksFor: { "@id": ids.organization },
  };
}

function serviceNode(service: ServiceDetail): Node {
  return {
    "@type": "Service",
    "@id": `${absoluteUrl(servicePath(service.slug))}#service`,
    name: service.title,
    description: service.seo.description,
    url: absoluteUrl(servicePath(service.slug)),
    image: absoluteUrl(shareImage.service(service.slug)),
    provider: { "@id": ids.organization },
    areaServed: { "@type": "Country", name: "Thailand" },
  };
}

// The home page: the club, the site, its founder and the services it lists.
export function homeStructuredData(services: ServiceDetail[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      { ...organizationNode(), makesOffer: services.map((service) => ({ "@type": "Offer", itemOffered: serviceNode(service) })) },
      websiteNode(),
      founderNode(),
    ],
  };
}

// A service page: the service, the trail back to the home page (as the page's
// breadcrumb shows it), and the club it refers to.
export function serviceStructuredData(service: ServiceDetail, homeLabel: string) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      serviceNode(service),
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: homeLabel, item: absoluteUrl("/") },
          { "@type": "ListItem", position: 2, name: service.title, item: absoluteUrl(servicePath(service.slug)) },
        ],
      },
      organizationNode(),
      websiteNode(),
      founderNode(),
    ],
  };
}
