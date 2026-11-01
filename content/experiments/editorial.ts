// Copy and pictures for the editorial experiment (/experiments/editorial), a proof of
// concept for the home page's hero and service list in a new art direction. Nothing
// here is used by the live pages. Copy is taken from content/site.ts and the services
// where it exists; lines written for the experiment are marked "sample" and need
// Ohm's and อ.ดำรงชัย's approval before any of it could ship.

import type { StaticImageData } from "next/image";
import { consultCta, hero as liveHero, lineBooking, site } from "@/content/site";
import heroSite from "@/public/images/experiments/editorial/hero-site.webp";
import portrait from "@/public/images/experiments/editorial/portrait.webp";
import svcFengShuiHome from "@/public/images/experiments/editorial/svc-feng-shui-home.webp";
import svcDestiny from "@/public/images/experiments/editorial/svc-destiny-physiognomy.webp";
import svcSaeKi from "@/public/images/experiments/editorial/svc-sae-ki.webp";
import svcCourses from "@/public/images/experiments/editorial/svc-courses.webp";

type Photo = { src: StaticImageData; alt: string; caption: string };

export const editorialHeader = {
  homeLabel: "หน้าแรก คลับฮวงจุ้ยแห่งประเทศไทย",
  nameLines: ["คลับฮวงจุ้ย", "แห่งประเทศไทย", site.nameEn],
  navLabel: "เมนูหลัก",
  nav: [
    { label: "บริการ", href: "#services" },
    { label: "ปีชง 2569", href: "#clash" },
    { label: "ติดต่อ", href: lineBooking, external: true },
  ],
} as const;

export const editorialHero = {
  // One h1, the club's name, broken where the design breaks it (fengshui-handoff.md).
  titleLines: ["คลับฮวงจุ้ย", "แห่งประเทศไทย"],
  // content/site.ts hero title, as one sentence.
  sentence: `${liveHero.title} ${liveHero.titleHighlight}`,
  cta: { label: consultCta, href: lineBooking },
  photo: {
    src: heroSite,
    alt: "อาจารย์ดำรงชัยยืนอยู่บนที่ดินที่กำลังก่อสร้าง ถือแผนผังไว้ในมือ มีโครงอาคารและรถขุดอยู่ด้านหลัง",
    caption: "อาจารย์ดำรงชัยดูชัยภูมิบนที่ดินที่กำลังก่อสร้าง",
  } satisfies Photo,
} as const;

export const editorialIntro = {
  // Two lines, so the name never breaks inside ดำรงชัย.
  titleLines: ["อาจารย์ดำรงชัย", "แท่นศรีเจริญ"],
  text: liveHero.intro,
  fact: { value: "กว่า 35 ปี", note: "ประสบการณ์ด้านฮวงจุ้ยและโหราศาสตร์จีน" },
  photo: {
    src: portrait,
    alt: "อาจารย์ดำรงชัยในชุดจีนสีแดง ถือโถกระเบื้องลายอักษรมงคล",
    caption: "อาจารย์ดำรงชัย แท่นศรีเจริญ ผู้ก่อตั้งคลับ",
  } satisfies Photo,
} as const;

// One photograph per service, by slug. The 4:5 crops were cut from Ohm's originals.
export const servicePhotos: Record<string, Photo> = {
  "feng-shui-home": {
    src: svcFengShuiHome,
    alt: "อาจารย์ดำรงชัยถือเข็มทิศฮวงจุ้ยหน้าอาคาร LADAWAN",
    caption: "ตรวจชัยภูมิหน้าอาคาร LADAWAN",
  },
  "destiny-physiognomy": {
    src: svcDestiny,
    alt: "มือถือหนังสือการดูโหงวเฮ้ง เปิดหน้าที่มีภาพวาดตำแหน่งบนใบหน้า",
    caption: "ตำราการดูโหงวเฮ้ง",
  },
  "sae-ki": {
    src: svcSaeKi,
    alt: "ศาลเจ้าจีนสีแดง มีโต๊ะเครื่องเซ่นและโคมแดงแขวนอยู่",
    caption: "โต๊ะเครื่องเซ่นในพิธีแซกี",
  },
  courses: {
    src: svcCourses,
    alt: "อาจารย์ดำรงชัยถือหนังสือ ยืนหน้าห้อง Mandarin Grand Ballroom",
    caption: "คอร์สเรียนที่ Mandarin Grand Ballroom",
  },
};

export const editorialServices = {
  id: "services",
  titleLines: ["โหราศาสตร์จีน", "โดย อ.ดำรงชัย"],
  tableName: "บริการ",
  // Sample: what each service is about, in two or three words (written for the experiment).
  kinds: {
    "feng-shui-home": "บ้าน ธุรกิจ ที่ดิน",
    "destiny-physiognomy": "ดวงชะตา ใบหน้า",
    "sae-ki": "เสริมดวง ปีชง",
    courses: "เรียนกับอาจารย์",
  } as Record<string, string>,
  openLabel: "อ่านรายละเอียด",
} as const;

// The live thing: which birth years clash with the year of the Fire Horse, 2569
// (2026). Sample content from the standard Chinese 犯太歲 table (值/刑 Horse, 沖 Rat,
// 害 Ox, 破 Rabbit); อ.ดำรงชัย must confirm it before it could go anywhere public.
export const clashYear = {
  id: "clash",
  title: "ปี 2569 ปีเกิดของคุณชงหรือไม่",
  // Shown without script too, so the answer never depends on the input.
  summary: "ปี 2569 เป็นปีมะเมีย ปีเกิดที่ชงตามตำราจีน ได้แก่ ปีมะเมีย ปีชวด ปีฉลู และปีเถาะ",
  inputLabel: "ปีเกิดของคุณ (พ.ศ. หรือ ค.ศ.)",
  inputHint: "ถ้าเกิดก่อนวันลีชุน (ราว 4 กุมภาพันธ์) ให้ใช้ปีก่อนหน้า",
  placeholder: "เช่น 2527",
  invalid: "ใส่ปีเกิด 4 หลัก เช่น 2527 หรือ 1984",
  serviceSlug: "sae-ki",
  serviceCta: "ดูบริการแซกีเสริมดวง",
  consultCta: "ถามอาจารย์ทาง LINE",
  // Zodiac animals from the Rat; a Gregorian year's animal is (year - 4) mod 12.
  animals: ["ชวด", "ฉลู", "ขาล", "เถาะ", "มะโรง", "มะเส็ง", "มะเมีย", "มะแม", "วอก", "ระกา", "จอ", "กุน"],
  clashes: {
    ชวด: "ชงตรงกับปีมะเมีย",
    มะเมีย: "ชงตัวเอง เพราะเป็นปีนักษัตรเดียวกับปีนี้",
    ฉลู: "ชงร่วม",
    เถาะ: "ชงร่วม",
  } as Record<string, string>,
  noClash: "ไม่อยู่ในกลุ่มปีชงของปีนี้",
} as const;

export const editorialEnd = {
  note: "หน้านี้เป็นต้นแบบทดลองของส่วนเปิดและรายการบริการ ไม่ใช่หน้าเว็บจริง",
  homeLabel: "ไปหน้าเว็บปัจจุบัน",
} as const;
