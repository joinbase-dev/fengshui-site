import { lineBooking, site } from "@/content/site";

// Copy for the terms-and-payment flow (Figma 91:1749 / 91:1856 terms, 95:1788 / 95:2193
// payment), kept apart from layout so copy changes do not touch components.

export const termsPath = "/terms";
export const paymentPath = "/terms/payment";

// The footer's way in, the flow's only entrance.
export const termsFooterLink = { label: "ข้อกำหนดและเงื่อนไข", href: termsPath } as const;

export const checkoutSteps = ["ข้อกำหนด", "ชำระเงิน", "ยืนยันนัดหมาย"] as const;

export type TermsSection = {
  id: string;
  number: string;
  title: string;
  // One paragraph, or a numbered list.
  body: string | readonly string[];
};

export const terms = {
  seoTitle: "ข้อกำหนดและเงื่อนไข",
  seoDescription:
    "ข้อกำหนดและเงื่อนไขการใช้บริการของคลับฮวงจุ้ยแห่งประเทศไทย: การนัดหมาย การเลื่อนนัด การชำระเงิน การยกเลิกและคืนเงิน และข้อมูลส่วนบุคคล",
  eyebrowZh: "條款",
  eyebrow: "ข้อกำหนดการใช้บริการ",
  title: "ข้อกำหนดและเงื่อนไขการใช้บริการ",
  intro: "โปรดอ่านให้ครบก่อนยืนยันนัดหมายและชำระค่าบริการ",
  updated: "ปรับปรุงล่าสุด 14 พฤศจิกายน 2569",
  readingTime: "อ่านประมาณ 3 นาที",
  tocTitle: "สารบัญ",
  importantTitle: "สิ่งสำคัญก่อนยืนยัน",
  important: [
    "คำปรึกษาเป็นแนวทางตามหลักฮวงจุ้ยและโหราศาสตร์จีน ไม่ใช่การรับประกันผลลัพธ์",
    "เลื่อนนัดได้ 1 ครั้ง โดยแจ้งล่วงหน้าอย่างน้อย 48 ชั่วโมง",
    "ค่าบริการที่ชำระแล้วไม่สามารถขอคืนได้ ยกเว้นกรณีในข้อ 04",
  ],
  sections: [
    {
      id: "scope",
      number: "01",
      title: "ขอบเขตการให้บริการ",
      body: "คลับฮวงจุ้ยแห่งประเทศไทยให้คำปรึกษาด้านฮวงจุ้ยที่อยู่อาศัย สถานประกอบการ ที่ดิน ดวงชะตา และโหงวเฮ้ง โดย อ.ดำรงชัย แท่นศรีเจริญ หรือทีมงานที่ได้รับมอบหมาย ทั้งแบบลงพื้นที่ ออนไลน์ และผ่าน LINE Official",
    },
    {
      id: "booking",
      number: "02",
      title: "การนัดหมายและการเลื่อนนัด",
      body: [
        "การนัดหมายจะได้รับการยืนยันเมื่อชำระค่าบริการครบถ้วนแล้ว",
        "เลื่อนนัดได้ 1 ครั้ง โดยแจ้งล่วงหน้าไม่น้อยกว่า 48 ชั่วโมง",
        "หากไม่มาตามนัดโดยไม่แจ้งล่วงหน้า ถือว่าได้ใช้บริการแล้ว",
      ],
    },
    {
      id: "payment",
      number: "03",
      title: "การชำระเงิน",
      body: [
        "ชำระผ่าน QR พร้อมเพย์ภายใน 15 นาทีหลังกดยืนยัน ระบบจะส่งใบยืนยันนัดหมายทาง LINE และอีเมล",
        "ค่าเดินทางนอกเขตกรุงเทพฯ และปริมณฑล คิดตามจริง โดยแจ้งให้ทราบก่อนวันนัด",
      ],
    },
    {
      id: "refunds",
      number: "04",
      title: "การยกเลิกและการคืนเงิน",
      body: [
        "คืนเงินเต็มจำนวน หากคลับเป็นฝ่ายยกเลิกนัด หรือมีการชำระเงินซ้ำซ้อน",
        "กรณีผู้รับบริการยกเลิกเอง ไม่สามารถขอคืนเงินได้ แต่โอนสิทธิ์ให้ผู้อื่นได้ 1 ครั้ง",
      ],
    },
    {
      id: "privacy",
      number: "05",
      title: "ข้อมูลส่วนบุคคล",
      body: "ข้อมูลวันเดือนปีเกิด เวลาเกิด ที่ตั้งสถานที่ และข้อมูลติดต่อ ใช้เพื่อการให้คำปรึกษาเท่านั้น ตาม พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 และจะไม่เปิดเผยต่อบุคคลภายนอกโดยไม่ได้รับความยินยอม",
    },
    {
      id: "liability",
      number: "06",
      title: "ข้อจำกัดความรับผิดชอบ",
      body: [
        "คำปรึกษาเป็นแนวทางตามหลักศาสตร์ การตัดสินใจและผลจากการปรับเปลี่ยนเป็นความรับผิดชอบของผู้รับบริการ",
        "ไม่อนุญาตให้บันทึกเสียงหรือวิดีโอระหว่างการปรึกษาเพื่อเผยแพร่ โดยไม่ได้รับอนุญาต",
      ],
    },
  ] satisfies TermsSection[],
  agreement: "ข้าพเจ้าได้อ่านและยอมรับ ข้อกำหนดการใช้บริการ และนโยบายความเป็นส่วนตัว แล้ว",
  next: "ถัดไป",
} as const;

export const payment = {
  seoTitle: "ชำระค่าบริการ",
  seoDescription: "สแกน QR พร้อมเพย์เพื่อชำระค่าบริการคลับฮวงจุ้ยแห่งประเทศไทย แล้วแจ้งชำระเงินทาง LINE",
  back: "กลับไปอ่านข้อกำหนด",
  eyebrowZh: "付款",
  eyebrow: "ชำระเงินผ่าน QR พร้อมเพย์",
  title: "สแกนเพื่อชำระค่าบริการ",
  qrBadge: "THAI QR PAYMENT",
  qrLabel: "พร้อมเพย์",
  qrAlt: "QR พร้อมเพย์สำหรับชำระค่าบริการคลับฮวงจุ้ยแห่งประเทศไทย",
  // The saved file's name on the visitor's device.
  qrFileName: "fengshuiclub-promptpay-qr.png",
  // PLACEHOLDER (Figma's mock-up values): replace with the club's real account name and
  // QR before this goes live.
  accountName: `ชื่อบัญชี: บริษัท ${site.name} จำกัด`,
  reference: "เลขอ้างอิง  FSC-691114-0128",
  save: "บันทึกรูป QR",
  saved: "บันทึกรูป QR แล้ว",
  howTo: [
    { title: "เปิดแอปธนาคาร", text: "เลือกเมนูสแกนจ่าย" },
    { title: "สแกน QR นี้", text: "หรือเลือกรูปจากอัลบั้ม" },
    { title: "ตรวจชื่อบัญชีและยอด", text: "แล้วกดยืนยันการโอน" },
  ],
  howToLabel: "วิธีชำระเงิน",
  // Step 3: the visitor sends the slip in the club's LINE, where the booking is confirmed.
  done: { label: "แจ้งชำระเงินแล้ว", href: lineBooking },
} as const;
