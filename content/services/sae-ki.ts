// แซกีเสริมดวง แก้กรรม: the name is from the single-page design's service list (Figma
// 415:1610); detail frame 406:3086. Its frame has not been read yet, so the copy from the
// first sae-ki design (389:518) is laid into the shared template: the intro as the
// opening, the highlight card as a red band and text, and the four qualities of the
// site as the list. Replace it with the frame's copy.

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
  byline: "แซกีเสริมดวง แก้กรรม โดย อ.ดำรงชัย",
  description:
    "แซกีเสริมดวง เปลี่ยนดวง แก้กรรม ศาสตร์แขนงหนึ่งของฮวงจุ้ยที่เสริมพลังชีวิตและลดพลังปะทะ กับอาจารย์ดำรงชัย",
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
    { type: "lead", lines: ["เปลี่ยนดวง แก้กรรม"] },
    {
      type: "text",
      lines: [
        "แซกีเป็นศาสตร์แขนงหนึ่งของฮวงจุ้ย ในอดีตนั้น ฮวงจุ้ยเป็นเรื่องการจัดพลังงานของที่อยู่อาศัย พลังงานของสิ่งแวดล้อม เพื่อให้พลังงานนั้นกลับมาส่งเสริมชีวิตและครอบครัว",
      ],
    },
    {
      type: "text",
      lines: [
        "แต่เมื่อจักรพรรดิ และขุนนางชั้นสูงต้องเดินทาง ไม่สามารถเลือกสิ่งแวดล้อมได้ ซินแสจึงต้องคิดวิธีเพิ่มพลังชีวิตอยู่เสมอ โดยการนำส่วนหนึ่งของ DNA ไปรับพลัง อยู่ท่ามกลางฮวงจุ้ยที่ดี ให้พลังชี่พัดผ่านอยู่เสมอ ดวงชะตาจะแข็งแรง ไม่ว่าจะไปรบ ทำการค้า หรือทำการฑูตอะไรก็สำเร็จ",
      ],
    },
    { type: "highlight", text: "แซกีช่วยปรับฮวงจุ้ยชีวิต เคล็ดลับความรุ่งเรืองของจีนกว่า 1,000 ปี" },
    {
      type: "text",
      lines: [
        "อีกหนึ่งเหตุผลที่ต้องทำแซกีคือเสริมพลังชีวิตวัยจร มนุษย์ทุกคนต้องมีช่วงที่วัยจร “ชง” หรือได้รับพลังปะทะ ไม่ว่าจะดวงชะตาแข็งแรงแค่ไหน ชะตาฟ้าก็จะส่งพลังงาน ที่ไม่ถูกกับดวงชะตาของเรา ให้ในช่วงใดช่วงช่วงของชีวิต เป็นเรื่องธรรมชาติ การทำแซกีจะช่วยลดพลังปะทะ และเสริมดวงชะตา",
      ],
    },
    {
      type: "list",
      title: "ชัยภูมิการทำแซกีที่ได้ผลดีที่สุด “ชัยภูมิที่มีพลังมังกร”",
      items: [
        "ต้นไม้ – เขียวชะอุ่มตลอดทั้งปี",
        "ดิน 5 สี – อุดมสมบูรณ์ จากพื้นที่โดยตรง ไม่มีการถมทับ",
        "แม่น้ำธรรมชาติ – ใสสะอาด ไม่มีโรงงานปล่อยน้ำเสีย",
        "อากาศบริสุทธิ์ – ไม่มีมลพิษจากอุสาหกรรม และการเผาไหม้",
      ],
    },
  ],
};
