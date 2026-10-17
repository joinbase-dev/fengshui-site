// ฮวงจุ้ยบ้านและสถานที่. Overlay copy transcribed from Ohm's mock-up (2026-10-17).

import { galleryColumns } from "./gallery";
import type { ServiceDetail } from "./types";
import photo01 from "@/public/images/services/feng-shui-home/01.webp";
import photo02 from "@/public/images/services/feng-shui-home/02.webp";
import photo03 from "@/public/images/services/feng-shui-home/03.webp";
import photo04 from "@/public/images/services/feng-shui-home/04.webp";
import photo05 from "@/public/images/services/feng-shui-home/05.webp";
import photo06 from "@/public/images/services/feng-shui-home/06.webp";
import photo07 from "@/public/images/services/feng-shui-home/07.webp";
import photo08 from "@/public/images/services/feng-shui-home/08.webp";
import photo09 from "@/public/images/services/feng-shui-home/09.webp";

export const fengShuiHome: ServiceDetail = {
  slug: "feng-shui-home",
  title: "ฮวงจุ้ยบ้านและสถานที่",
  summaryLines: ["ปรับสมดุลพื้นที่อยู่อาศัยและธุรกิจตามหลักศาสตร์ฮวงจุ้ยจีน", "เพื่อความมั่นคง และความเจริญรุ่งเรือง"],
  byline: "ดูฮวงจุ้ยบ้านและสถานที่ โดย อ.ดำรงชัย",
  description:
    "ปรับสมดุลพื้นที่อยู่อาศัยและธุรกิจ ตามหลักศาสตร์ฮวงจุ้ยจีน เพื่อเสริมความเป็นสิริมงคลและสร้างรากฐานที่ดีให้กับทุกช่วงชีวิต",
  heroGallery: galleryColumns([
    { src: photo01, alt: "อาจารย์ดำรงชัยถือเข็มทิศฮวงจุ้ยหน้าอาคาร LADAWAN" },
    { src: photo02, alt: "อาจารย์ดำรงชัยกับเจ้าของบ้านหน้าบ้าน" },
    { src: photo03, alt: "อาจารย์ดำรงชัยกับลูกค้าหน้าร้าน HOT POT" },
    { src: photo04, alt: "อาจารย์ดำรงชัยกับลูกค้าหน้าร้าน Ghee Gelato House" },
    { src: photo05, alt: "อาจารย์ดำรงชัยในชุดจีนสีแดงถือเข็มทิศฮวงจุ้ยในงานตรุษจีน" },
    { src: photo06, alt: "อาจารย์ดำรงชัยดูชัยภูมิบนที่ดินที่กำลังก่อสร้าง" },
    { src: photo07, alt: "อาจารย์ดำรงชัยในสำนักงาน eUnite" },
    { src: photo08, alt: "อาจารย์ดำรงชัยกับลูกค้าหน้าบ้าน" },
    { src: photo09, alt: "อาจารย์ดำรงชัยหน้าโครงการ Baan 365" },
  ]),
  body: [
    { type: "heading", lines: ["ปรับสมดุลพื้นที่อยู่อาศัยและธุรกิจ ตามหลักศาสตร์ฮวงจุ้ยจีน"] },
    {
      type: "text",
      lines: [
        "เพื่อเสริมความเป็นสิริมงคลและสร้างรากฐานที่ดีให้กับทุกช่วงชีวิต เพราะสถานที่ที่ดี",
        "ไม่ได้เป็นเพียงพื้นที่สำหรับอยู่อาศัยหรือประกอบธุรกิจ",
        "แต่ยังเป็นรากฐานสำคัญของความสุข ความมั่นคง และความเจริญรุ่งเรือง",
      ],
    },
    {
      type: "text",
      lines: [
        "คลับฮวงจุ้ยแห่งประเทศไทย ให้คำปรึกษาด้านฮวงจุ้ยบ้าน ที่อยู่อาศัย",
        "และสถานประกอบการ โดยพิจารณาชัยภูมิ ทิศทาง ตำแหน่ง",
        "และการจัดวางพื้นที่ตามหลักศาสตร์ฮวงจุ้ยจีนเพื่อค้นหาแนวทางปรับปรุงให้เหมาะสมกับลักษณะสถานที่และผู้อยู่อาศัย ไม่ว่าจะเป็นบ้านใหม่ บ้านที่อยู่อาศัยอยู่แล้ว อาคารสำนักงาน ร้านค้า หรือพื้นที่ธุรกิจ",
      ],
    },
    {
      type: "list",
      title: "บริการที่ให้คำปรึกษา",
      items: [
        "บ้านและที่อยู่อาศัย – วิเคราะห์ทิศทาง การจัดวางห้อง และพื้นที่สำคัญภายในบ้าน",
        "สำนักงานและธุรกิจ – พิจารณาตำแหน่งทางเข้า โต๊ะทำงาน และการจัดพื้นที่ประกอบกิจการ",
        "ที่ดินและอาคาร – พิจารณาชัยภูมิและทิศทางก่อนตัดสินใจเลือกหรือปรับปรุงสถานที่",
      ],
    },
  ],
};
