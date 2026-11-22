import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Epilogue, Noto_Sans_Thai } from "next/font/google";
import { seo } from "@/content/seo";
import { isProduction, searchConsoleVerification, siteUrl } from "@/lib/site-url";
import "./globals.css";

// Epilogue is the site font. It has no Thai glyphs, so Thai text falls through to
// Noto Sans Thai (see --font-sans in app/styles/tokens.css). Both are variable fonts,
// so every weight comes from one file per subset. The home, terms and payment pages are
// set in Noto Sans Thai alone, so Epilogue is not preloaded: the service pages fetch it
// when they first use it rather than every page paying for it before its hero image.
const epilogue = Epilogue({
  subsets: ["latin"],
  variable: "--font-epilogue",
  display: "swap",
  preload: false,
});

// The home page sets everything in Noto Sans Thai, Latin included, so it loads both
// subsets.
const notoThai = Noto_Sans_Thai({
  subsets: ["thai", "latin"],
  variable: "--font-noto-thai",
  display: "swap",
});

// Site-wide defaults. Each page sets its own title, description, canonical URL and
// share previews (lib/metadata.ts); only production may be indexed.
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: seo.home.title, template: seo.titleTemplate },
  description: seo.home.description,
  applicationName: seo.siteName,
  robots: isProduction ? { index: true, follow: true } : { index: false, follow: false },
  verification: searchConsoleVerification,
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
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-sm focus:bg-white focus:px-4 focus:py-2 focus:text-copy-sm focus:text-black focus:outline-2 focus:outline-red-800"
        >
          ข้ามไปยังเนื้อหา
        </a>
        {children}
        {/* Vercel Web Analytics: page views and visitors, cookieless. Only reports on Vercel deployments. */}
        <Analytics />
      </body>
    </html>
  );
}
