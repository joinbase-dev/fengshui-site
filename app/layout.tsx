import type { Metadata, Viewport } from "next";
import { Epilogue, Noto_Sans_Thai } from "next/font/google";
import { site } from "@/content/site";
import { isProduction, siteUrl } from "@/lib/site-url";
import "./globals.css";

// Epilogue is the site font. It has no Thai glyphs, so Thai text falls through to
// Noto Sans Thai (see --font-sans in app/styles/tokens.css). Both are variable fonts,
// so every weight comes from one file per subset.
const epilogue = Epilogue({
  subsets: ["latin"],
  variable: "--font-epilogue",
  display: "swap",
});

const notoThai = Noto_Sans_Thai({
  subsets: ["thai"],
  variable: "--font-noto-thai",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: site.title,
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: "/",
    siteName: site.nameEn,
    title: site.title,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: isProduction ? { index: true, follow: true } : { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#ac0805",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="th" className={`${epilogue.variable} ${notoThai.variable}`}>
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-sm focus:bg-white focus:px-4 focus:py-2 focus:text-body-2 focus:text-ink focus:outline-2 focus:outline-brand"
        >
          ข้ามไปยังเนื้อหา
        </a>
        {children}
      </body>
    </html>
  );
}
