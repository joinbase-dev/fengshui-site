import { SiteHeader } from "@/components/sections/SiteHeader";
import { Hero } from "@/components/sections/Hero";
import { Announcement } from "@/components/sections/Announcement";
import { Services } from "@/components/sections/Services";
import { TikTokFeed } from "@/components/sections/TikTokFeed";
import { Gallery } from "@/components/sections/Gallery";
import { Footer } from "@/components/sections/Footer";
import { JsonLd } from "@/components/ui/JsonLd";
import { site } from "@/content/site";
import { siteUrl } from "@/lib/site-url";

// Static, regenerated at most hourly so the TikTok row picks up new videos and fresh
// cover image URLs (see lib/tiktok/videos.ts).
export const revalidate = 3600;

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  alternateName: site.nameEn,
  description: site.description,
  url: siteUrl,
  logo: `${siteUrl}/images/logo.png`,
};

export default function Home() {
  return (
    <>
      <SiteHeader currentHref="/" />
      <main id="main">
        <Hero />
        <Announcement />
        <Services />
        <TikTokFeed />
        <Gallery />
      </main>
      <Footer />
      <JsonLd data={structuredData} />
    </>
  );
}
