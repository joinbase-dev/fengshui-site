// Personal โหวงเฮ้ง. Overlay copy transcribed from Ohm's mock-up (2026-10-17).

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
    "ค้นพบศักยภาพและโอกาสในชีวิต ผ่านศาสตร์แห่งการวิเคราะห์ใบหน้า ลักษณะใบหน้าแต่ละส่วนสะท้อนถึงบุคลิกภาพ จุดเด่น และแนวโน้มของชีวิต",
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
    { type: "heading", lines: ["ค้นพบศักยภาพและโอกาสในชีวิต ผ่านศาสตร์แห่งการวิเคราะห์ใบหน้า"] },
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
