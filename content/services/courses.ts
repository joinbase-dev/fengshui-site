// คอร์สเรียนจาก อ.ดำรงชัย: the fourth service, replacing ดูฤกษ์มงคลต่าง ๆ (Ohm,
// 2026-10-17). Its copy is evergreen, with no dates, prices or deadlines, so it does not
// go stale between courses. There are no course photos yet, so the overlay leaves the
// image loop out and the card has no hover preview.

import type { ServiceDetail } from "./types";

const summary = [
  "รวมคอร์สเรียนและ Workshop ศาสตร์ฮวงจุ้ยและโหงวเฮ้ง",
  "เรียนจบพร้อมนำความรู้ไปประยุกต์ใช้ได้จริง",
];

export const courses: ServiceDetail = {
  slug: "courses",
  title: "คอร์สเรียนจาก อ.ดำรงชัย",
  summaryLines: summary,
  byline: "คอร์สเรียนและ Workshop โดย อ.ดำรงชัย",
  description: summary.join(" "),
  heroGallery: [],
  body: [
    {
      type: "text",
      lines: [
        "เรียนรู้ศาสตร์ฮวงจุ้ย โหงวเฮ้ง และภูมิปัญญาจีนโบราณจาก อ.ดำรงชัย แท่นศรีเจริญ ผ่านหลักสูตรที่ผสมผสานความรู้และการฝึกปฏิบัติจริง ตั้งแต่พื้นฐานจนถึงการวิเคราะห์เชิงลึก เพื่อให้สามารถนำความรู้ไปประยุกต์ใช้ในชีวิตประจำวัน ต่อยอดการทำงาน และสร้างโอกาสใหม่ในเส้นทางอาชีพ",
      ],
    },
  ],
  cta: "สำรวจคอร์สเรียน",
};
