// แซกีเสริมดวง แก้กรรม. Overlay copy transcribed from Ohm's mock-up (2026-10-17).

import { galleryColumns } from "./gallery";
import type { ServiceDetail } from "./types";
import photo01 from "@/public/images/services/sae-ki/01.webp";
import photo02 from "@/public/images/services/sae-ki/02.webp";
import photo03 from "@/public/images/services/sae-ki/03.webp";
import photo04 from "@/public/images/services/sae-ki/04.webp";
import photo05 from "@/public/images/services/sae-ki/05.webp";
import photo06 from "@/public/images/services/sae-ki/06.webp";
import photo07 from "@/public/images/services/sae-ki/07.webp";

export const saeKi: ServiceDetail = {
  slug: "sae-ki",
  title: "แซกีเสริมดวง แก้กรรม",
  summaryLines: ["แซกีช่วยปรับฮวงจุ้ยและชะตาชีวิต", "เคล็ดลับความรุ่งเรืองของคนจีนกว่า 1,000 ปี"],
  byline: "แซกีเสริมดวง แก้กรรม",
  seo: {
    title: "แซกีเสริมดวง แก้กรรม โดย อ.ดำรงชัย",
    description:
      "ทำแซกีเสริมดวงกับอาจารย์ดำรงชัย เคล็ดลับความรุ่งเรืองของคนจีนกว่า 1,000 ปี เสริมดวงชะตา โชคลาภ และความมั่นคง สำหรับช่วงดวงชงหรือเมื่อต้องการเปิดรับโอกาสใหม่",
  },
  heroGallery: galleryColumns([
    { src: photo01, alt: "ผู้ร่วมพิธีหน้าศาลเจ้า" },
    { src: photo02, alt: "ผู้ร่วมพิธีแซกีในศาลเจ้า" },
    { src: photo03, alt: "ห่อผ้าแดงวางเรียงบนแท่นหน้าป้ายหิน มีภูเขาเป็นฉากหลัง" },
    { src: photo04, alt: "ผู้ร่วมพิธีไหว้ในศาลเจ้าสีแดง" },
    { src: photo05, alt: "การเตรียมพิธีแซกีกลางแจ้ง" },
    { src: photo06, alt: "อาจารย์ดำรงชัยกับผู้ร่วมพิธีในศาลเจ้า" },
    { src: photo07, alt: "อาจารย์ดำรงชัยในชุดจีนสีแดงถือโถกระเบื้องลายอักษรมงคล" },
  ]),
  body: [
    { type: "heading", lines: ["เสริมพลังดวงชะตาเปิดทางรับสิ่งดีๆ เคล็ดลับความรุ่งเรืองของจีนกว่า 1,000 ปี"] },
    { type: "text", lines: ["เสริมพลังดวงชะตา เสริมโชคลาภ ความมั่นคงและความสุข"] },
    {
      type: "list",
      title: "เหมาะสำหรับ",
      items: [
        "ผู้ที่ต้องการเสริมดวงชะตาและเปิดรับโอกาสใหม่ในชีวิต",
        "ผู้ที่กำลังเผชิญช่วงดวงชงหรืออุปสรรคตามความเชื่อ",
        "ผู้ประกอบธุรกิจที่ต้องการเสริมสิริมงคลและความรุ่งเรือง",
        "ผู้ที่ต้องการเสริมพลังชีวิตและความมั่นคงในระยะยาว",
      ],
    },
    {
      type: "text",
      lines: [
        "อีกหนึ่งเหตุผลที่ต้องทำแซกีคือเสริมพลังชีวิต มนุษย์ทุกคนต้องมีช่วงที่ “ชง”",
        "หรือได้รับพลังปะทะ ไม่ว่าจะดวงชะตาแข็งแรงแค่ไหน ชะตาฟ้าก็จะส่งพลังงาน",
        "ที่ไม่ถูกกับดวงชะตาของเรา ให้ในช่วงใดช่วงช่วงของชีวิต เป็นเรื่องธรรมชาติ",
        "การทำแซกีจะช่วยลดพลังปะทะ และเสริมดวงชะตา ส่งเสริมความราบรื่นในด้านการงาน ธุรกิจ โชคลาภ และการดำเนินชีวิต",
      ],
    },
  ],
};
