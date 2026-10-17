// คอร์สเรียนจาก อ.ดำรงชัย: the fourth service, replacing ดูฤกษ์มงคลต่าง ๆ (Ohm,
// 2026-10-17). Overlay copy transcribed from Ohm's mock-up; photos from the club's
// courses, sent by Ohm. The copy is evergreen, with no dates, prices or deadlines.

import { galleryColumns } from "./gallery";
import type { ServiceDetail } from "./types";
import photo01 from "@/public/images/services/courses/01.webp";
import photo02 from "@/public/images/services/courses/02.webp";
import photo03 from "@/public/images/services/courses/03.webp";
import photo04 from "@/public/images/services/courses/04.webp";
import photo05 from "@/public/images/services/courses/05.webp";
import photo06 from "@/public/images/services/courses/06.webp";
import photo07 from "@/public/images/services/courses/07.webp";

const summary = [
  "รวมคอร์สเรียนและ Workshop ศาสตร์ฮวงจุ้ยและโหงวเฮ้ง",
  "เรียนจบพร้อมนำความรู้ไปประยุกต์ใช้ได้จริง",
];

export const courses: ServiceDetail = {
  slug: "courses",
  title: "คอร์สเรียนจาก อ.ดำรงชัย",
  summaryLines: summary,
  byline: "คอร์สเรียนจาก อ.ดำรงชัย",
  description: summary.join(" "),
  heroGallery: galleryColumns([
    { src: photo01, alt: "อาจารย์ดำรงชัยถือหนังสือยืนหน้าห้องจัดคอร์สเรียนในโรงแรม" },
    { src: photo02, alt: "ผู้เรียนคอร์สถ่ายภาพหมู่กับอาจารย์ดำรงชัยในห้องจัดเลี้ยง" },
    { src: photo03, alt: "ผู้เรียนนั่งฟังอาจารย์ดำรงชัยบรรยายหน้าจอในห้องจัดเลี้ยง" },
    { src: photo04, alt: "ผู้เรียนนั่งเรียนเป็นแถวในห้องจัดเลี้ยงของโรงแรม" },
    { src: photo05, alt: "โปสเตอร์คอร์สฮวงจุ้ยและโหงวเฮ้งวางข้างหนังสือการดูโหงวเฮ้ง" },
    { src: photo06, alt: "ผู้เรียนในเสื้อสีแดงตั้งใจฟังการบรรยาย" },
    { src: photo07, alt: "พิธีกรในเสื้อจีนสีแดงพูดที่โพเดียม" },
  ]),
  body: [
    { type: "heading", lines: ["เปิดโลกศาสตร์ฮวงจุ้ยและโหงวเฮ้ง เรียนรู้จากประสบการณ์จริง สู่การนำไปใช้ได้อย่างมั่นใจ"] },
    {
      type: "text",
      lines: [
        "เรียนรู้ศาสตร์ฮวงจุ้ย โหงวเฮ้ง และภูมิปัญญาจีนโบราณจาก อ.ดำรงชัย แท่นศรีเจริญ",
        "ผู้เชี่ยวชาญที่มีประสบการณ์กว่า 35 ปี",
        "ผ่านหลักสูตรที่ผสมผสานความรู้และการฝึกปฏิบัติจริง",
        "ตั้งแต่พื้นฐานจนถึงการวิเคราะห์เชิงลึก เพื่อให้คุณสามารถนำความรู้ไปใช้ในชีวิตประจำวัน ต่อยอดการทำงาน และสร้างโอกาสใหม่ในเส้นทางอาชีพ",
      ],
    },
  ],
  cta: "สำรวจคอร์สเรียน",
};
