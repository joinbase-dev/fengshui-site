// ดูดวงชะตา 3 ศาสตร์ (Figma 406:2959). Its frame has not been read yet: the title and
// the opening line are the wording of this service's card on the new Home design.
// Replace the body with the frame's copy.

import { placeholderGallery } from "./placeholders";
import type { ServiceDetail } from "./types";

export const destinyPhysiognomy: ServiceDetail = {
  slug: "destiny-physiognomy",
  title: "ดูดวงชะตา 3 ศาสตร์",
  titleLines: ["ดูดวงชะตา", "3 ศาสตร์"],
  metaTitle: "ดูดวงชะตา 3 ศาสตร์ | คลับฮวงจุ้ยแห่งประเทศไทย",
  metaDescription:
    "วิเคราะห์ลักษณะใบหน้าและองค์ประกอบบนเรือนหน้า อ่านนิสัย วาสนา และโชคชะตาที่ซ่อนอยู่ พร้อมแนวทางเสริมราศีให้โดดเด่น กับอาจารย์ดำรงชัย",
  heroGallery: placeholderGallery(1),
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
