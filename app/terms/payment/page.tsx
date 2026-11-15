import Link from "next/link";
import { PaymentCard } from "@/components/sections/PaymentCard";
import { shareImage } from "@/content/seo";
import { payment, paymentPath, termsPath } from "@/content/terms";
import { pageMetadata } from "@/lib/metadata";

// The payment step is reached from the terms page, never from a search result.
export const metadata = {
  ...pageMetadata({
    title: payment.seoTitle,
    description: payment.seoDescription,
    path: paymentPath,
    image: shareImage.home,
  }),
  robots: { index: false, follow: true },
};

// Step 2 of the flow (Figma 95:1788, phones 95:2193, revised 2026-11-15 without the step
// indicator): under the site's navbar, the PromptPay QR to scan or save, and
// "แจ้งชำระเงินแล้ว" to confirm in the club's LINE.
export default function PaymentPage() {
  return (
    <main
      id="main"
      className="mx-auto flex w-full max-w-160 flex-col items-start gap-4 px-4 pt-26 pb-6 md:box-content md:gap-6 md:px-10 md:pb-24 lg:pt-57"
    >
      <Link
        href={termsPath}
        className="rounded-sm text-kicker text-parchment/80 transition-colors duration-200 ease-refined hover:text-parchment hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass-light"
      >
        <span aria-hidden="true">←&nbsp;&nbsp;</span>
        <span className="md:hidden">{payment.backCompact}</span>
        <span className="hidden md:inline">{payment.back}</span>
      </Link>
      <PaymentCard />
    </main>
  );
}
