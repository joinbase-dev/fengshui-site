import type { PhotoAsset } from "@/content/services";
import { tiktok } from "@/content/tiktok";
import heroDesk from "@/public/images/services/destiny-physiognomy/07.webp";
import heroStage from "@/public/images/services/destiny-physiognomy/01.webp";
import heroTemple from "@/public/images/home/gallery-temple.jpg";
import heroPortrait from "@/public/images/services/master-portrait.jpg";

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
  label: "คลับฮวงจุ้ยแห่งประเทศไทย",
  // The heading's second part is set white on a red band.
  title: "ศาสตร์แห่งฮวงจุ้ยและโหราศาสตร์จีน",
  titleHighlight: "จากประสบการณ์กว่า 35 ปี ของอาจารย์ดำรงชัย",
  intro:
    "คลับฮวงจุ้ยแห่งประเทศไทย ก่อตั้งโดยอาจารย์ดำรงชัย แท่นศรีเจริญ ผู้เชี่ยวชาญด้านฮวงจุ้ย โหราศาสตร์จีน โหราศาสตร์ไทย และศาสตร์โหงวเฮ้ง มุ่งนำองค์ความรู้และประสบการณ์มาประยุกต์ใช้ เพื่อให้คำปรึกษาด้านที่อยู่อาศัย ธุรกิจ และการวางแผนชีวิตอย่างเหมาะสม",
  // The design's photos could not be exported from Figma; these are the same photos
  // from the site's own image set.
  photos: [
    { src: heroDesk, alt: "อาจารย์ดำรงชัยกับลูกค้าสองท่านในสำนักงาน" },
    { src: heroStage, alt: "อาจารย์ดำรงชัยบรรยายเรื่องโหงวเฮ้งบนเวที" },
    { src: heroTemple, alt: "อาจารย์ดำรงชัยในเสื้อสีแดงที่ศาลเจ้า" },
    { src: heroPortrait, alt: "อาจารย์ดำรงชัยในชุดจีนสีแดง ถือโถกระเบื้องลายอักษรมงคล" },
  ] satisfies PhotoAsset[],
} as const;

// Every "ปรึกษาอาจารย์ดำรงชัย" link: the red text link with the arrow, and the navbar's.
export const consultCta = "ปรึกษาอาจารย์ดำรงชัย";

export const announcement =
  "เนื่องจากมีผู้สนใจติดต่อเข้ามาเป็นจำนวนมาก กรุณาติดต่อจองคิวผ่าน Line @Fengshuiclubth ช่องทางเดียวเท่านั้น";

// Figma service-section (1:782). The cards come from content/services/.
export const services = {
  id: "services",
  label: "บริการทั้งหมด",
  // The dotted panel's statement, one entry per line as the design breaks it.
  statementLines: ["ศาสตร์แห่งความสมดุล", "เสริมสิริมงคลในทุกมิติ", "เพื่อชีวิตที่มั่นคงและรุ่งเรือง"],
} as const;

// Figma activities album (1:798). The design's frames are still empty, so the album
// shows empty frames until the photos arrive.
export const gallery = {
  id: "activities",
  label: "รวมภาพกิจกรรม",
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

// Navbar (Figma 1:752): each item jumps to a section of the single page.
export const header = {
  homeLabel: "หน้าแรก คลับฮวงจุ้ยแห่งประเทศไทย",
  menuLabel: "เมนู",
  navLabel: "เมนูหลัก",
  nav: [
    { label: "คลับฮวงจุ้ยแห่งประเทศไทย", href: `#${hero.id}` },
    { label: "บริการทั้งหมด", href: `#${services.id}` },
    { label: "รวมภาพกิจกรรม", href: `#${gallery.id}` },
  ],
  cta: { label: consultCta, href: lineBooking },
} as const;

export const video = {
  // Not in the design: the screen-reader name of the play button.
  play: "เล่นวิดีโอ",
} as const;

export type SocialPlatform = "facebook" | "youtube" | "tiktok" | "line";

// The club's social accounts. Facebook and Instagram are placeholders until the real
// profiles are confirmed.
export const social = {
  line: { label: "LINE", href: lineBooking },
  tiktok: { label: "TikTok", href: tiktok.profileUrl },
  facebook: { label: "Facebook", href: "https://www.facebook.com/" },
  instagram: { label: "Instagram", href: "https://www.instagram.com/" },
} as const;

// Footer (Figma 1:807). The design's paragraph is lorem ipsum; until the real copy
// arrives it is the club's tagline.
export const footer = {
  title: site.name,
  taglineLines: [
    "ศาสตร์แห่งพลังชีวิต ที่ผสานภูมิปัญญาและพลังจักรวาล",
    "เพื่อเสริมความมั่งคั่ง สมดุล และความสุขในทุกจังหวะชีวิต",
  ],
  socialLabel: "โซเชียลมีเดีย",
  // The design's spelling of each name.
  social: [
    { label: "Facebook", href: social.facebook.href },
    { label: "Instagram", href: social.instagram.href },
    { label: "Tiktok", href: social.tiktok.href },
  ],
} as const;
