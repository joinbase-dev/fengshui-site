import Image from "next/image";
import { CornerMarks } from "@/components/ui/CornerMarks";
import { SaveQrButton } from "@/components/ui/SaveQrButton";
import { payment } from "@/content/terms";
import qrCode from "@/public/images/terms/promptpay-qr.png";

// Figma "Payment card" (95:1908, phones 95:2325, revised 2026-11-15): the heading, the
// white QR block with brass corner marks and the account name, "บันทึกรูป", then
// "แจ้งชำระเงินแล้ว", which opens the club's LINE to send the slip. Type follows the
// site's Fengshui styles (H2, Label, Eyebrow) in Noto Sans Thai. On wider screens the
// two buttons are 318px wide and centred; on phones they span the card, and the account
// lines drop to 12px (95:2529) so the name stays on one line.
export function PaymentCard() {
  return (
    <section
      aria-labelledby="payment-title"
      className="flex w-full flex-col items-center gap-5 rounded-card border border-brass/70 bg-parchment px-5 py-6 text-umber shadow-payment md:gap-6 md:rounded-document md:px-12 md:py-11"
    >
      <h1 id="payment-title" className="text-center text-h2 leading-tight font-semibold text-cinnabar">
        {payment.title}
      </h1>

      <figure className="relative flex flex-col items-center gap-3.5 rounded-card border border-brass/80 bg-white p-4.5 md:p-5.5">
        <CornerMarks variant="qr" />
        <figcaption className="flex items-center gap-2 text-kicker">
          <span lang="en" className="rounded-photo bg-lacquer-deep px-2.5 py-1 text-parchment">
            {payment.qrBadge}
          </span>
          <span className="text-lacquer-deep">{payment.qrLabel}</span>
        </figcaption>
        <Image src={qrCode} alt={payment.qrAlt} sizes="(min-width: 768px) 260px, 220px" className="size-55 md:size-65" />
        <div className="flex flex-col items-center gap-0.5 text-center text-xs leading-5 md:text-kicker">
          <p>{payment.accountName}</p>
          <p className="whitespace-pre text-umber-soft">{payment.reference}</p>
        </div>
      </figure>

      <SaveQrButton src={qrCode.src} />

      <a
        href={payment.done.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-full items-center justify-center rounded-button bg-linear-to-r from-brass-light to-brass px-6 text-action font-semibold text-lacquer-deep transition duration-200 ease-refined hover:brightness-105 hover:shadow-md active:scale-98 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-cinnabar md:h-13 md:w-79.5"
      >
        {payment.done.label}
        <span className="sr-only"> (เปิด LINE ของคลับ)</span>
      </a>
    </section>
  );
}
