import { address, contact, site, social } from "@/content/site";

// Everything search engines and social previews are told about the site, in one place.
// Page titles, descriptions and share images for each page live with that page's
// content (the home page here, each service in content/services/). The production
// address comes from NEXT_PUBLIC_SITE_URL (lib/site-url.ts).

export const seo = {
  siteName: site.name,
  alternateName: site.nameEn,
  locale: "th_TH",
  // A page's own title, then the club's name. The home page sets its title in full.
  titleTemplate: `%s | ${site.name}`,
  home: {
    title: "คลับฮวงจุ้ยแห่งประเทศไทย ดูฮวงจุ้ย โหงวเฮ้ง โดย อ.ดำรงชัย",
    description:
      "ปรึกษาอาจารย์ดำรงชัย แท่นศรีเจริญ ผู้เชี่ยวชาญฮวงจุ้ยและโหราศาสตร์จีนกว่า 35 ปี ดูฮวงจุ้ยบ้านและธุรกิจ วิเคราะห์โหงวเฮ้ง แซกีเสริมดวง และคอร์สเรียนฮวงจุ้ย",
  },
} as const;

// Share images: 1200×630 JPEGs in public/og/. The home page's is Ohm's design; the
// services' are drawn from it by scripts/og-images.mjs (see the README).
export const shareImage = {
  width: 1200,
  height: 630,
  type: "image/jpeg",
  home: { path: "/og/home.jpg", alt: `${site.name} ${site.nameEn}` },
  service: (slug: string) => `/og/services/${slug}.jpg`,
} as const;

// The club's founder, as the home page introduces him (content/site.ts `hero.intro`).
// Only what the page says: his name, that he founded the club and what he practises.
export const founder = {
  name: "ดำรงชัย แท่นศรีเจริญ",
  honorific: "อาจารย์",
  knowsAbout: ["ฮวงจุ้ย", "โหราศาสตร์จีน", "โหราศาสตร์ไทย", "โหงวเฮ้ง"],
} as const;

// The club as an organisation: its contact details are the ones shown in the footer.
export const organization = {
  logoPath: "/images/logo.png",
  email: contact.email,
  telephone: contact.phoneInternational,
  address,
  sameAs: [social.facebook.href, social.instagram.href, social.tiktok.href],
} as const;
