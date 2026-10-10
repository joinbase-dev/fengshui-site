import { Hero } from "@/components/sections/Hero";
import { TikTokFeed } from "@/components/sections/TikTokFeed";
import { Consultation } from "@/components/sections/Consultation";
import { Footer } from "@/components/sections/Footer";
import { site } from "@/content/site";
import { siteUrl } from "@/lib/site-url";

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
      <main id="main">
        <Hero />
        <TikTokFeed />
        <Consultation />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        // Static, build-time data; escaping "<" keeps it inert inside the script tag.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
