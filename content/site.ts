import { tiktok } from "@/content/tiktok";

// Page copy, kept apart from layout so copy changes do not touch components.

export const site = {
  name: "คลับฮวงจุ้ยแห่งประเทศไทย",
  nameEn: "Fengshui Club Thailand",
  title: "คลับฮวงจุ้ยแห่งประเทศไทย | Fengshui Club Thailand",
  description:
    "ดูดวงชะตา เสริมดวง ฮวงจุ้ยบ้าน โดยอาจารย์ดำรงชัย คลับฮวงจุ้ยแห่งประเทศไทย ศาสตร์แห่งพลังชีวิต เพื่อเสริมความมั่งคั่ง สมดุล และความสุข",
} as const;

// LINE official account named in the Home announcement (@Fengshuiclubth). It is the
// only booking channel, so every "จองคิวด่วน" link points here.
export const lineBooking = "https://line.me/R/ti/p/@fengshuiclubth";

export const hero = {
  id: "about",
  // One line each, as the design breaks it; Thai has no spaces to wrap on reliably.
  titleLines: ["ดูดวงชะตา", "เสริมดวง", "ฮวงจุ้ยบ้าน"],
  subtitle: "โดย อาจารย์ดำรงชัย คลับฮวงจุ้ยประเทศไทย",
  cta: "จองคิวด่วน",
  imageAlt: "อาจารย์ดำรงชัยในชุดจีนสีแดงถือหลอแกฮวงจุ้ย ล้อมด้วยภาพอาจารย์กับผู้มาขอคำปรึกษา",
} as const;

export const announcement =
  "เนื่องจากมีผู้สนใจติดต่อเข้ามาเป็นจำนวนมาก กรุณาติดต่อจองคิวผ่าน Line @Fengshuiclubth ช่องทางเดียวเท่านั้น";

// Figma service-section (415:1658). The cards come from content/services/.
export const services = {
  id: "services",
  label: "บริการทั้งหมด",
  // The design's statement in the dotted panel is lorem ipsum; until the real line
  // arrives this is the club's tagline from the footer.
  statement: "ศาสตร์แห่งพลังชีวิต ที่ผสานภูมิปัญญาและพลังจักรวาล เพื่อเสริมความมั่งคั่ง สมดุล และความสุขในทุกจังหวะชีวิต",
} as const;

export const gallery = {
  id: "activities",
  label: "รวมภาพกิจกรรม",
  photos: [
    { name: "temple", alt: "อาจารย์ดำรงชัยในเสื้อสีแดงอธิบายแผนผังหลอแกให้ผู้มาปรึกษาที่ศาลเจ้า" },
    { name: "compass", alt: "นิ้วชี้ตำแหน่งบนแผ่นหลอแกฮวงจุ้ยที่มีอักษรจีน" },
    { name: "workshop", alt: "ผู้เข้าร่วมยืนล้อมดูแผ่นหลอแกขนาดใหญ่บนพื้น" },
  ],
} as const;

export const consultation = {
  id: "consultation",
  title: "เริ่มเส้นทางชีวิตใหม่ ด้วยพลังแห่งฮวงจุ้ย",
  bodyLines: [
    "เข้ารับคำปรึกษาฟรีกับผู้เชี่ยวชาญ เพื่อค้นหาพลังชีวิตในแบบของคุณ",
    "เพียงกรอกข้อมูลด้านล่าง ทีมงานจะติดต่อกลับเพื่อแนะนำแนวทางที่เหมาะสม",
  ],
  labels: {
    name: "ชื่อ-นามสกุล",
    birthDate: "วันเดือนปีเกิด",
    email: "อีเมล",
    phone: "เบอร์ติดต่อกลับ",
  },
  submit: "ส่งแบบฟอร์ม",
  // Not in the design: pending, success and error copy.
  submitting: "กำลังส่ง…",
  success: "ส่งข้อมูลเรียบร้อยแล้ว ทีมงานจะติดต่อกลับโดยเร็วที่สุด",
  failure: "ส่งข้อมูลไม่สำเร็จ กรุณาลองใหม่อีกครั้ง",
  errors: {
    name: "กรุณากรอกชื่อ-นามสกุล",
    birthDate: "กรุณากรอกวันเดือนปีเกิดให้ถูกต้อง",
    email: "กรุณากรอกอีเมลให้ถูกต้อง",
    phone: "กรุณากรอกเบอร์ติดต่อกลับให้ถูกต้อง",
    summary: "กรุณาตรวจสอบข้อมูลที่กรอก",
  },
} as const;

// In-page menu shared by the header and footer (Figma 415:1610 navbar). Each item
// jumps to a section of the single page. The design does not show where
// "เคล็ดลับดวงดี" goes; it points at the TikTok section until that is settled.
const sectionNav = [
  { label: "รู้จักอาจารย์ดำรงชัย", href: `#${hero.id}` },
  { label: "บริการทั้งหมด", href: `#${services.id}` },
  { label: "เคล็ดลับดวงดี", href: `#${tiktok.section.id}` },
] as const;

export const header = {
  homeLabel: "หน้าแรก คลับฮวงจุ้ยแห่งประเทศไทย",
  menuLabel: "เมนู",
  navLabel: "เมนูหลัก",
  nav: sectionNav,
  cta: { label: "จองคิวด่วน", href: lineBooking },
} as const;

export const video = {
  // Not in the design: the screen-reader name of the play button.
  play: "เล่นวิดีโอ",
} as const;

export type SocialPlatform = "facebook" | "youtube" | "tiktok" | "line";

export const footer = {
  taglineLines: [
    "ศาสตร์แห่งพลังชีวิต ที่ผสานภูมิปัญญาและพลังจักรวาล",
    "เพื่อเสริมความมั่งคั่ง สมดุล และความสุขในทุกจังหวะชีวิต",
  ],
  // Facebook and YouTube are placeholders until the real profiles are confirmed.
  social: [
    { platform: "facebook", label: "Facebook", href: "https://www.facebook.com/" },
    { platform: "youtube", label: "YouTube", href: "https://www.youtube.com/" },
    { platform: "tiktok", label: "TikTok", href: tiktok.profileUrl },
    { platform: "line", label: "LINE", href: lineBooking },
  ] satisfies { platform: SocialPlatform; label: string; href: string }[],
  nav: [{ label: "หน้าแรก", href: "#main" }, ...sectionNav],
  copyright: "©2025 FengShui Club Thailand. All rights reserved.",
} as const;
