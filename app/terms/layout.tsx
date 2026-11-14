import { Inter, Noto_Serif_Thai } from "next/font/google";
import { CheckoutBackdrop } from "@/components/ui/CheckoutBackdrop";
import { CheckoutHeader } from "@/components/sections/CheckoutHeader";

// The terms-and-payment flow's headings and numerals are set in Noto Serif Thai.
const notoSerifThai = Noto_Serif_Thai({
  subsets: ["thai", "latin"],
  weight: ["600", "700"],
  variable: "--font-noto-serif-thai",
  display: "swap",
});

// Inter draws only the payment card's "THAI QR PAYMENT" badge and step numbers, below
// the fold on phones, so it is not preloaded.
const inter = Inter({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-inter-latin",
  display: "swap",
  preload: false,
});

// Shared by the terms page and the payment page: the red lacquer ground with the
// carved dragon, and the slim brand header.
export default function TermsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`${notoSerifThai.variable} ${inter.variable} checkout-page relative isolate min-h-svh bg-lacquer font-thai text-parchment`}>
      <CheckoutBackdrop />
      <CheckoutHeader />
      {children}
    </div>
  );
}
