import type { PhotoAsset } from "@/content/services";
import heroOffice from "@/public/images/home/hero/01-office.webp";
import heroPoster from "@/public/images/home/hero/02-office-poster.webp";
import heroTemple from "@/public/images/home/hero/03-temple.webp";
import heroPortrait from "@/public/images/home/hero/04-portrait.webp";
import galleryCompass from "@/public/images/home/gallery-compass.jpg";
import galleryWorkshop from "@/public/images/home/gallery-workshop.jpg";

// Page copy, kept apart from layout so copy changes do not touch components.

export const site = {
  name: "คลับฮวงจุ้ยแห่งประเทศไทย",
  nameEn: "Fengshui Club Thailand",
  title: "คลับฮวงจุ้ยแห่งประเทศไทย | Fengshui Club Thailand",
  description:
    "ดูดวงชะตา เสริมดวง ฮวงจุ้ยบ้าน โดยอาจารย์ดำรงชัย คลับฮวงจุ้ยแห่งประเทศไทย ศาสตร์แห่งพลังชีวิต เพื่อเสริมความมั่งคั่ง สมดุล และความสุข",
} as const;

// The club's LINE official account (@Fengshuiclubth), its only booking channel: every
// "ปรึกษาอาจารย์ดำรงชัย" link points here.
export const lineBooking = "https://line.me/R/ti/p/@fengshuiclubth";

export const hero = {
  id: "about",
  label: "คลับฮวงจุ้ยแห่งประเทศไทย",
  // The heading's second part is set white on a red band.
  title: "ศาสตร์แห่งฮวงจุ้ยและโหราศาสตร์จีน",
  titleHighlight: "จากประสบการณ์กว่า 35 ปี ของอาจารย์ดำรงชัย",
  intro:
    "คลับฮวงจุ้ยแห่งประเทศไทย ก่อตั้งโดยอาจารย์ดำรงชัย แท่นศรีเจริญ ผู้เชี่ยวชาญด้านฮวงจุ้ย โหราศาสตร์จีน โหราศาสตร์ไทย และศาสตร์โหงวเฮ้ง มุ่งนำองค์ความรู้และประสบการณ์มาประยุกต์ใช้ เพื่อให้คำปรึกษาด้านที่อยู่อาศัย ธุรกิจ และการวางแผนชีวิตอย่างเหมาะสม",
  // The album's four photos, left to right.
  photos: [
    { src: heroOffice, alt: "อาจารย์ดำรงชัยที่โต๊ะทำงานกับลูกค้าสองท่านที่ถือแผ่นภาพการดูโหงวเฮ้ง" },
    { src: heroPoster, alt: "ลูกค้าสองท่านถือแผ่นภาพการดูโหงวเฮ้งยืนข้างอาจารย์ดำรงชัยในสำนักงาน" },
    { src: heroTemple, alt: "อาจารย์ดำรงชัยในเสื้อสีแดงอธิบายแผนผังหลอแกที่ศาลเจ้า" },
    { src: heroPortrait, alt: "อาจารย์ดำรงชัยในชุดจีนสีแดง ถือโถกระเบื้องลายอักษรมงคล" },
  ] satisfies PhotoAsset[],
} as const;

// Every "ปรึกษาอาจารย์ดำรงชัย" link: the red text link with the arrow, and the navbar's.
export const consultCta = "ปรึกษาอาจารย์ดำรงชัย";

// Figma service-section (1:782). The cards come from content/services/.
export const services = {
  id: "services",
  label: "บริการทั้งหมด",
  // The dotted panel's statement, one entry per line as the design breaks it.
  statementLines: ["ศาสตร์แห่งความสมดุล", "เสริมสิริมงคลในทุกมิติ", "เพื่อชีวิตที่มั่นคงและรุ่งเรือง"],
} as const;

// Figma activities album (1:798). Until its own photos arrive it is a slideshow of
// these and the services' photos (components/sections/Gallery.tsx).
export const gallery = {
  id: "activities",
  label: "รวมภาพกิจกรรม",
  photos: [
    { src: galleryCompass, alt: "นิ้วชี้ตำแหน่งบนแผ่นหลอแกฮวงจุ้ยที่มีอักษรจีน" },
    { src: galleryWorkshop, alt: "ผู้เข้าร่วมยืนล้อมดูแผ่นหลอแกขนาดใหญ่บนพื้น" },
  ] satisfies PhotoAsset[],
} as const;

// Navbar (Figma 1:752): each item jumps to a section of the single page.
export const header = {
  homeLabel: "หน้าแรก คลับฮวงจุ้ยแห่งประเทศไทย",
  menuLabel: "เมนู",
  closeLabel: "ปิดเมนู",
  navLabel: "เมนูหลัก",
  nav: [
    { label: "คลับฮวงจุ้ยแห่งประเทศไทย", href: `#${hero.id}` },
    { label: "บริการทั้งหมด", href: `#${services.id}` },
    { label: "รวมภาพกิจกรรม", href: `#${gallery.id}` },
  ],
  cta: { label: consultCta, href: lineBooking },
} as const;

// The club's accounts, shared without their tracking parameters.
export const social = {
  line: { label: "LINE", href: lineBooking },
  tiktok: { label: "TikTok", href: "https://www.tiktok.com/@aj.damrongchai" },
  facebook: { label: "Facebook", href: "https://www.facebook.com/share/1C3GRP76EN/" },
  instagram: { label: "Instagram", href: "https://www.instagram.com/fengshuiclubth" },
} as const;

// The club's address, shown in the footer and given to search engines.
export const address = {
  street: "อาคาร K.A.N ซอย นราธิวาส 10",
  city: "กรุงเทพมหานคร",
  postalCode: "10120",
} as const;

// The club's email and phone (Figma footer 1:807), shown in the footer and given to
// search engines.
export const contact = {
  email: "fengshuiclubth@gmail.com",
  phone: "096-098-8228",
  phoneInternational: "+66960988228",
} as const;

// Footer (Figma 1:807): the club's name over its address, email and phone.
export const footer = {
  title: site.name,
  address: `${address.street} ${address.city} ${address.postalCode}`,
  emailLabel: "อีเมล",
  phoneLabel: "โทรศัพท์",
  socialLabel: "โซเชียลมีเดีย",
  // The design's spelling of each name.
  social: [
    { label: "LINE", href: social.line.href },
    { label: "Facebook", href: social.facebook.href },
    { label: "Instagram", href: social.instagram.href },
    { label: "Tiktok", href: social.tiktok.href },
  ],
} as const;
