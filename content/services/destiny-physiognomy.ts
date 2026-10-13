// Personal โหวงเฮ้ง: the name is from the single-page design's service list (Figma
// 415:1610). Its detail frame (406:2959) has not been read yet, so the opening line is
// this service's card copy from the previous Home. Replace the body with the frame's copy.

import { galleryColumns } from "./gallery";
import type { ServiceDetail } from "./types";
import photo01 from "@/public/images/services/destiny-physiognomy/01.webp";
import photo02 from "@/public/images/services/destiny-physiognomy/02.webp";
import photo03 from "@/public/images/services/destiny-physiognomy/03.webp";
import photo04 from "@/public/images/services/destiny-physiognomy/04.webp";
import photo05 from "@/public/images/services/destiny-physiognomy/05.webp";
import photo06 from "@/public/images/services/destiny-physiognomy/06.webp";
import photo07 from "@/public/images/services/destiny-physiognomy/07.webp";
import photo08 from "@/public/images/services/destiny-physiognomy/08.webp";
import photo09 from "@/public/images/services/destiny-physiognomy/09.webp";

export const destinyPhysiognomy: ServiceDetail = {
  slug: "destiny-physiognomy",
  title: "Personal โหวงเฮ้ง",
  summaryLines: ["ให้คำปรึกษาดวงชะตาส่วนบุคคล เข้าใจพื้นดวง", "ค้นหาจังหวะชีวิต และวิเคราะห์โหงวเฮ้งเฉพาะบุคคล"],
  byline: "Personal โหวงเฮ้ง โดย อ.ดำรงชัย",
  description:
    "วิเคราะห์ลักษณะใบหน้าและองค์ประกอบบนเรือนหน้า อ่านนิสัย วาสนา และโชคชะตาที่ซ่อนอยู่ พร้อมแนวทางเสริมราศีให้โดดเด่น กับอาจารย์ดำรงชัย",
  heroGallery: galleryColumns([
    { src: photo01, alt: "อาจารย์ดำรงชัยบรรยายเรื่องโหงวเฮ้งบนเวที" },
    { src: photo02, alt: "อาจารย์ดำรงชัยกับผู้มาดูโหงวเฮ้งที่ถือแผ่นภาพการดูโหงวเฮ้ง" },
    { src: photo03, alt: "ผู้ร่วมงานถือแผ่นภาพการดูโหงวเฮ้งไว้ตรงใบหน้า" },
    { src: photo04, alt: "หนังสือการดูโหงวเฮ้งที่แสดงตำแหน่งต่างๆ บนใบหน้า" },
    { src: photo05, alt: "โปสเตอร์เปิดจองดูดวงชะตา" },
    { src: photo06, alt: "อาจารย์ดำรงชัยกับผู้มาดูโหงวเฮ้งในสำนักงาน" },
    { src: photo07, alt: "อาจารย์ดำรงชัยกับลูกค้าสองท่านในสำนักงาน" },
    { src: photo08, alt: "อาจารย์ดำรงชัยกับลูกค้าที่ถือแผ่นภาพการดูโหงวเฮ้ง" },
    { src: photo09, alt: "ลูกค้าถือแผ่นภาพการดูโหงวเฮ้งข้างอาจารย์ดำรงชัย" },
  ]),
  body: [
    {
      type: "lead",
      lines: [
        "วิเคราะห์ลักษณะใบหน้าและองค์ประกอบบนเรือนหน้า อ่านนิสัย วาสนา และโชคชะตาที่ซ่อนอยู่",
        "พร้อมแนวทางเสริมราศีให้โดดเด่น",
      ],
    },
  ],
};
