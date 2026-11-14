// Personal โหงวเฮ้ง. Overlay copy transcribed from Ohm's mock-up (2026-10-17).

import type { ServiceDetail } from "./types";
import cardPhoto from "@/public/images/home/v3/card-destiny-physiognomy.webp";
import cardPhonePhoto from "@/public/images/home/v3/card-destiny-physiognomy-phone.webp";
import photo00 from "@/public/images/services/destiny-physiognomy/00.webp";
import photo01 from "@/public/images/services/destiny-physiognomy/01.webp";
import photo02 from "@/public/images/services/destiny-physiognomy/02.webp";
import photo03 from "@/public/images/services/destiny-physiognomy/03.webp";
import photo04 from "@/public/images/services/destiny-physiognomy/04.webp";
import photo05 from "@/public/images/services/destiny-physiognomy/05.webp";
import photo06 from "@/public/images/services/destiny-physiognomy/06.webp";
import photo07 from "@/public/images/services/destiny-physiognomy/07.webp";
import photo08 from "@/public/images/services/destiny-physiognomy/08.webp";
import photo09 from "@/public/images/services/destiny-physiognomy/09.webp";
import full00 from "@/public/images/services/destiny-physiognomy/carousel/00.webp";
import full01 from "@/public/images/services/destiny-physiognomy/carousel/01.webp";
import full02 from "@/public/images/services/destiny-physiognomy/carousel/02.webp";
import full03 from "@/public/images/services/destiny-physiognomy/carousel/03.webp";
import full04 from "@/public/images/services/destiny-physiognomy/carousel/04.webp";
import full05 from "@/public/images/services/destiny-physiognomy/carousel/05.webp";
import full06 from "@/public/images/services/destiny-physiognomy/carousel/06.webp";
import full07 from "@/public/images/services/destiny-physiognomy/carousel/07.webp";
import full08 from "@/public/images/services/destiny-physiognomy/carousel/08.webp";
import full09 from "@/public/images/services/destiny-physiognomy/carousel/09.webp";

export const destinyPhysiognomy: ServiceDetail = {
  slug: "destiny-physiognomy",
  title: "Personal โหงวเฮ้ง",
  summaryLines: ["ให้คำปรึกษาดวงชะตาส่วนบุคคล เข้าใจพื้นดวง", "ค้นหาจังหวะชีวิต และวิเคราะห์โหงวเฮ้งเฉพาะบุคคล"],
  card: { eyebrow: "風水", lines: ["เข้าใจพื้นดวง ค้นหาจังหวะชีวิต", "และวิเคราะห์โหงวเฮ้งเฉพาะบุคคล"], photo: { src: cardPhoto, alt: "อาจารย์ดำรงชัยอธิบายการดูโหงวเฮ้งให้ลูกค้าที่ถือแผ่นภาพการดูโหงวเฮ้ง" }, phonePhoto: cardPhonePhoto },
  byline: "Personal โหงวเฮ้ง โดย อ.ดำรงชัย",
  seo: {
    title: "ดูโหงวเฮ้ง วิเคราะห์ใบหน้าเฉพาะบุคคล",
    description:
      "วิเคราะห์โหงวเฮ้งใบหน้าเฉพาะบุคคลกับอาจารย์ดำรงชัย สำรวจบุคลิกภาพ จุดเด่น และแนวโน้มชีวิตผ่านศาสตร์จีน พร้อมคำแนะนำด้านการงาน ธุรกิจ และความสัมพันธ์",
  },
  gallery: [
    { src: photo00, full: full00, alt: "อาจารย์ดำรงชัยอธิบายการดูโหงวเฮ้งให้ลูกค้าที่ถือแผ่นภาพการดูโหงวเฮ้งไว้ตรงใบหน้า" },
    { src: photo01, full: full01, alt: "อาจารย์ดำรงชัยบรรยายเรื่องโหงวเฮ้งบนเวที" },
    { src: photo02, full: full02, alt: "อาจารย์ดำรงชัยกับผู้มาดูโหงวเฮ้งที่ถือแผ่นภาพการดูโหงวเฮ้ง" },
    { src: photo03, full: full03, alt: "ผู้ร่วมงานถือแผ่นภาพการดูโหงวเฮ้งไว้ตรงใบหน้า" },
    { src: photo04, full: full04, alt: "หนังสือการดูโหงวเฮ้งที่แสดงตำแหน่งต่างๆ บนใบหน้า" },
    { src: photo05, full: full05, alt: "โปสเตอร์เปิดจองดูดวงชะตา" },
    { src: photo06, full: full06, alt: "อาจารย์ดำรงชัยกับผู้มาดูโหงวเฮ้งในสำนักงาน" },
    { src: photo07, full: full07, alt: "อาจารย์ดำรงชัยกับลูกค้าสองท่านในสำนักงาน" },
    { src: photo08, full: full08, alt: "อาจารย์ดำรงชัยกับลูกค้าที่ถือแผ่นภาพการดูโหงวเฮ้ง" },
    { src: photo09, full: full09, alt: "ลูกค้าถือแผ่นภาพการดูโหงวเฮ้งข้างอาจารย์ดำรงชัย" },
  ],
  body: [
    { type: "heading", lines: ["ค้นพบศักยภาพและโอกาสในชีวิต", "ผ่านศาสตร์แห่งการวิเคราะห์ใบหน้า"] },
    {
      type: "text",
      lines: [
        "ลักษณะใบหน้าแต่ละส่วนสะท้อนถึงบุคลิกภาพ จุดเด่น และแนวโน้มของชีวิต",
        "การวิเคราะห์โหงวเฮ้งโดย อ.ดำรงชัย ช่วยให้คุณได้สำรวจตัวตนผ่านมุมมองของศาสตร์จีน พร้อมรับคำแนะนำเฉพาะบุคคล",
        "เพื่อเสริมความมั่นใจและประกอบการตัดสินใจในด้านการงาน ธุรกิจ ความสัมพันธ์ และการดำเนินชีวิต",
      ],
    },
    { type: "text", lines: ["เพราะทุกใบหน้า มีเรื่องราวและเอกลักษณ์ที่แตกต่างกัน"] },
    {
      type: "text",
      lines: [
        "เปิดมุมมองใหม่ในการเข้าใจตนเอง ค้นพบจุดเด่นที่ควรส่งเสริม",
        "และแนวทางปรับสมดุลชีวิตให้เหมาะสมกับแต่ละบุคคล",
        "เพื่อก้าวสู่โอกาสและความสำเร็จอย่างมั่นใจ",
      ],
    },
  ],
};
