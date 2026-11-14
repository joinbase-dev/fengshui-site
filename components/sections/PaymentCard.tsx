import Image from "next/image";
import { CornerMarks } from "@/components/ui/CornerMarks";
import { SaveQrButton } from "@/components/ui/SaveQrButton";
import { payment } from "@/content/terms";
import qrCode from "@/public/images/terms/promptpay-qr.png";

// Figma "Payment card" (95:1908, phones 95:2325): the heading, the white QR block with
// brass corner marks and the account name, "บันทึกรูป QR", three steps for paying from
// a bank app, then "แจ้งชำระเงินแล้ว", which opens the club's LINE to send the slip.
export function PaymentCard() {
  return (
    <section
      aria-labelledby="payment-title"
      className="flex w-full flex-col items-center gap-5 rounded-card border border-brass/70 bg-parchment px-5 py-6 text-umber shadow-payment md:gap-6 md:rounded-document md:px-12 md:py-11"
    >
      <header className="flex flex-col items-center gap-1.5 text-center leading-label">
        <p className="text-fine font-medium text-brass">
          <span lang="zh-Hans">{payment.eyebrowZh}</span> · {payment.eyebrow}
        </p>
        <h1 id="payment-title" className="font-serif-thai text-display-sm font-bold text-cinnabar md:text-pay-title">
          {payment.title}
        </h1>
      </header>

      <figure className="relative flex flex-col items-center gap-3.5 rounded-card border border-brass/80 bg-white p-4.5 md:p-5.5">
        <CornerMarks variant="qr" />
        <figcaption className="flex items-center gap-2 leading-label">
          <span lang="en" className="rounded-photo bg-lacquer-deep px-2.5 py-1 font-inter text-micro font-bold tracking-[0.06em] text-parchment">
            {payment.qrBadge}
          </span>
          <span className="text-fine font-semibold text-lacquer-deep">{payment.qrLabel}</span>
        </figcaption>
        <Image src={qrCode} alt={payment.qrAlt} sizes="(min-width: 768px) 260px, 220px" className="size-55 md:size-65" />
        <div className="flex flex-col items-center gap-0.5 text-center text-xs leading-label md:text-fine">
          <p className="font-medium">{payment.accountName}</p>
          <p className="whitespace-pre text-umber-soft">{payment.reference}</p>
        </div>
      </figure>

      <SaveQrButton src={qrCode.src} />

      <hr className="w-full border-0 border-t border-brass/45" />

      <ol aria-label={payment.howToLabel} className="flex w-full flex-col gap-3 md:flex-row md:gap-4">
        {payment.howTo.map((step, index) => (
          <li key={step.title} className="flex items-start gap-2.5 md:flex-1">
            <span
              aria-hidden="true"
              className="flex size-6.5 shrink-0 items-center justify-center rounded-full bg-cinnabar font-inter text-xs font-semibold text-parchment"
            >
              {index + 1}
            </span>
            <span className="flex flex-col leading-label">
              <span className="text-sm font-semibold">{step.title}</span>
              <span className="text-fine text-umber-soft">{step.text}</span>
            </span>
          </li>
        ))}
      </ol>

      <a
        href={payment.done.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-full items-center justify-center rounded-button bg-linear-to-r from-brass-light to-brass px-6 text-note font-semibold text-lacquer-deep transition duration-200 ease-refined hover:brightness-105 hover:shadow-md active:scale-98 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-cinnabar md:h-13"
      >
        {payment.done.label}
        <span className="sr-only"> (เปิด LINE ของคลับ)</span>
      </a>
    </section>
  );
}
