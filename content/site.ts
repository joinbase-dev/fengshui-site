// Page copy, kept apart from layout so copy changes do not touch components.
// Text marked "placeholder copy" is lorem ipsum from the design and must be
// replaced before launch.

export const site = {
  name: "คลับฮวงจุ้ยแห่งประเทศไทย",
  nameEn: "Fengshui Club Thailand",
  title: "คลับฮวงจุ้ยแห่งประเทศไทย | Fengshui Club Thailand",
  description:
    "ศาสตร์แห่งพลังชีวิต ที่ผสานภูมิปัญญาและพลังจักรวาล เพื่อเสริมความมั่งคั่ง สมดุล และความสุขในทุกจังหวะชีวิต รับคำปรึกษาฟรีกับผู้เชี่ยวชาญ",
} as const;

export const hero = {
  titleLines: ["คลับฮวงจุ้ย", "แห่งประเทศไทย"],
  // Placeholder copy from the design.
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id elementum. Quam vel aliquam sit vulputate. Faucibus nec gravida ipsum pulvinar vel.",
  cta: "ปรึกษา/ขอคำแนะนำ",
  imageAlt: "ซินแสดำรงชัย ถือเข็มทิศฮวงจุ้ย",
} as const;

export const services = {
  // Not shown in the design; gives the list a heading for screen readers.
  heading: "บริการของเรา",
  items: [
    {
      title: "ฮวงจุ้ยบ้านและอาคาร",
      // Placeholder copy from the design.
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "ดูโหงวเฮ้งจากใบหน้า",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "แซกีเสริมดวงชะตา",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
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

export type SocialPlatform = "facebook" | "youtube" | "tiktok" | "line";

export const footer = {
  taglineLines: [
    "ศาสตร์แห่งพลังชีวิต ที่ผสานภูมิปัญญาและพลังจักรวาล",
    "เพื่อเสริมความมั่งคั่ง สมดุล และความสุขในทุกจังหวะชีวิต",
  ],
  // Account URLs are placeholders until the real profiles are confirmed.
  social: [
    { platform: "facebook", label: "Facebook", href: "https://www.facebook.com/" },
    { platform: "youtube", label: "YouTube", href: "https://www.youtube.com/" },
    { platform: "tiktok", label: "TikTok", href: "https://www.tiktok.com/" },
    { platform: "line", label: "LINE", href: "https://line.me/" },
  ] satisfies { platform: SocialPlatform; label: string; href: string }[],
  // Only the home and contact anchors exist on this page; the other targets
  // need their own pages or URLs.
  nav: [
    { label: "หน้าแรก", href: "#top" },
    { label: "ดูฮวงจุ้ย", href: "#services" },
    { label: "แซกีเสริมดวง", href: "#services" },
    { label: "คอร์สเรียนดูดวง", href: "#services" },
    { label: "ติดต่อเรา", href: "#consultation" },
  ],
  copyright: "©2025 FengShui Club Thailand. All rights reserved.",
} as const;
