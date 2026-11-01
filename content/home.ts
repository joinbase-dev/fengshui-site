import { serviceDetails, type PhotoAsset } from "@/content/services";
import { address, contact, gallery, lineBooking, site } from "@/content/site";
import portrait from "@/public/images/home/hero/04-portrait.webp";
import partnerPlaceholder from "@/public/images/home/v3/partners/placeholder.webp";

// Copy of the home page (Figma 19:1781, "Web v.3"), kept apart from layout so copy
// changes do not touch components. The services' cards read their own copy from
// content/services/ (`card`).

export const homeHeader = {
  homeLabel: "หน้าแรก",
  logoLabel: "หน้าแรก คลับฮวงจุ้ยแห่งประเทศไทย",
  navLabel: "เมนูหลัก",
  menuLabel: "เมนู",
  closeLabel: "ปิดเมนู",
  // The design's navbar: home and three services, the logo in the middle after the
  // first service. The full-screen menu on smaller screens lists all four services.
  servicesBeforeLogo: ["feng-shui-home"],
  servicesAfterLogo: ["destiny-physiognomy", "sae-ki"],
} as const;

export const homeHero = {
  id: "top",
  // One h1, set on two lines as the design breaks it.
  titleLines: ["คลับฮวงจุ้ย", "แห่งประเทศไทย"],
  // The design spells it so here (the footer keeps "Fengshui").
  subtitle: "FengShui Club Thailand",
} as const;

// Figma Partners strip (19:1803). Until the club's real partners and their permission
// arrive, every slot shows Ohm's "LOGO" placeholder (2026-11-01). The placeholders
// say nothing, so their alt is empty; give each real logo its company's name.
export const partners = {
  label: "พาร์ทเนอร์",
  logos: Array.from({ length: 8 }, () => ({ src: partnerPlaceholder, alt: "" })) satisfies PhotoAsset[],
};

export const homeServices = {
  id: "services",
  eyebrowChinese: "三大命理",
  eyebrow: "ศาสตร์หลัก",
  // Phrases a narrow screen must not split (components/ui/Phrases.tsx).
  title: ["โหราศาสตร์จีนโดย", "อ.ดำรงชัย"],
  more: "ดูรายละเอียด",
} as const;

export const founderProfile = {
  id: "about",
  name: ["อ.ดำรงชัย", "แท่นศรีเจริญ"],
  bio: "คลับฮวงจุ้ยแห่งประเทศไทย ก่อตั้งโดยอาจารย์ดำรงชัย แท่นศรีเจริญ ผู้เชี่ยวชาญด้านฮวงจุ้ย โหราศาสตร์จีน โหราศาสตร์ไทย และศาสตร์โหงวเฮ้ง มุ่งนำองค์ความรู้และประสบการณ์มาประยุกต์ใช้ เพื่อให้คำปรึกษาด้านที่อยู่อาศัย ธุรกิจ และการวางแผนชีวิตอย่างเหมาะสม",
  // Two columns of three, read down each column.
  expertise: [
    "ฮวงจุ้ยบ้านและที่อยู่อาศัย",
    "ฮวงจุ้ยร้านค้าและสำนักงาน",
    "ฮวงจุ้ยที่ดินและทำเล",
    "วิเคราะห์ดวงชะตาเฉพาะบุคคล",
    "วางแผนชีวิตและธุรกิจ",
    "วิเคราะห์โหงวเฮ้ง",
  ],
  photo: {
    src: portrait,
    alt: "อาจารย์ดำรงชัย แท่นศรีเจริญ ในชุดจีนสีแดง ถือโถกระเบื้องลายอักษรมงคล",
  } satisfies PhotoAsset,
} as const;

// Every "ปรึกษาอาจารย์ดำรงชัย" button opens the club's LINE account, its only booking
// channel.
export const lineCta = { label: "ปรึกษาอาจารย์ดำรงชัย", href: lineBooking } as const;

export const consultSteps = {
  id: "consult",
  title: ["ต้องการปรึกษา", "อ.ดำรงชัย ?"],
  // Each step's text as the design breaks its lines.
  steps: [
    { title: "นัดหมายเวลาที่สะดวก", lines: ["ติดต่อแจ้งเรื่องที่ต้องการปรึกษา", "พร้อมเลือกวันและเวลา"] },
    {
      title: "พูดคุยปรึกษากับอาจารย์",
      lines: ["เล่ารายละเอียดและสิ่งที่คุณกังวล", "พร้อมรับคำแนะนำจากอาจารย์", "เพื่อประกอบการตัดสินใจ"],
    },
    {
      title: "ติดตามผลหลังปรึกษา",
      lines: ["นำคำแนะนำไปปรับใช้", "และแจ้งความคืบหน้าหรือข้อสงสัย", "เพื่อพูดคุยถึงแนวทางต่อไป"],
    },
  ],
  // Both open LINE, the club's only booking and enquiry channel.
  primary: { label: "นัดเวลาปรึกษา", href: lineBooking },
  secondary: { label: "ติดต่อสอบถามราคา", href: lineBooking },
} as const;

// The nth photo (from 1) of a service, in the order of its data file.
function servicePhoto(slug: string, n: number): PhotoAsset {
  const photos = serviceDetails.find((service) => service.slug === slug)?.gallery;
  const photo = photos?.[n - 1];
  if (!photo) throw new Error(`No photo ${n} for service ${slug}`);
  return photo;
}

// The design's strip holds stock photos as stand-ins; until the club's own activity
// photos arrive it shows these, from the club's events, courses and ceremonies.
export const activities = {
  id: "activities",
  title: "รูปภาพกิจกรรม",
  photos: [
    gallery.photos[1],
    servicePhoto("courses", 2),
    servicePhoto("destiny-physiognomy", 1),
    servicePhoto("sae-ki", 2),
    servicePhoto("courses", 3),
    gallery.photos[0],
    servicePhoto("feng-shui-home", 5),
    servicePhoto("sae-ki", 6),
    servicePhoto("destiny-physiognomy", 7),
    servicePhoto("courses", 6),
  ] satisfies PhotoAsset[],
};

export const homeFooter = {
  // The wide banner (Figma 37:3090).
  ctaTitle: ["ปรึกษา", "อ.ดำรงชัย"],
  // The banner's heading on phones (Figma 48:3296).
  ctaTitleCompact: "จองคิวปรึกษา",
  ctaText: ["ติดต่อแจ้งเรื่องที่ต้องการปรึกษา", "พร้อมเลือกวันและเวลา"],
  name: site.name,
  nameEn: site.nameEn,
  address: `${address.street} ${address.city} ${address.postalCode}`,
  email: contact.email,
  emailLabel: "อีเมล",
  phone: contact.phone,
  phoneHref: `tel:${contact.phoneInternational}`,
  phoneLabel: "โทรศัพท์",
  menuTitle: "เมนูลัด",
  contactLink: { label: "ติดต่อเรา", href: lineBooking },
  socialLabel: "โซเชียลมีเดีย",
  copyright: `© 2026 ${site.nameEn}. All rights reserved.`,
} as const;
