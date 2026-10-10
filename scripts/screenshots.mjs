// Full-page screenshots of every page in the sitemap at the widths CLAUDE.md asks us to
// test, for comparing against the design side by side. Also fails if any page scrolls
// horizontally. Run against a running server:
//
//   npm run build && npm run start      # in one terminal
//   npm run screenshots                 # in another; PNGs land in screenshots/
//
// SCREENSHOT_URL points it at another server (a Vercel preview, say). The first run needs
// a browser: npx playwright-core install chromium
import { mkdir } from "node:fs/promises";
import { chromium } from "playwright-core";

const baseUrl = (process.env.SCREENSHOT_URL ?? "http://localhost:3000").replace(/\/$/, "");
const outDir = "screenshots";

const viewports = [
  { name: "360", width: 360, height: 800, mobile: true },
  { name: "390", width: 390, height: 844, mobile: true },
  { name: "844-landscape", width: 844, height: 390, mobile: true },
  { name: "768", width: 768, height: 1024, mobile: true },
  { name: "1024", width: 1024, height: 768, mobile: false },
  { name: "1280", width: 1280, height: 800, mobile: false },
  { name: "1440", width: 1440, height: 900, mobile: false },
  { name: "1920", width: 1920, height: 1080, mobile: false },
];

// The sitemap lists every public page, so new pages are picked up without editing this file.
async function pagePaths() {
  const response = await fetch(`${baseUrl}/sitemap.xml`);
  if (!response.ok) throw new Error(`Could not read ${baseUrl}/sitemap.xml (${response.status})`);
  const xml = await response.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => new URL(match[1]).pathname);
}

function fileName(path) {
  return path === "/" ? "home" : path.replace(/^\/|\/$/g, "").replaceAll("/", "-");
}

const paths = await pagePaths();
const browser = await chromium.launch();
const overflowing = [];

try {
  for (const viewport of viewports) {
    // Reduced motion shows scroll-revealed content in its final state.
    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
      isMobile: viewport.mobile,
      hasTouch: viewport.mobile,
      deviceScaleFactor: 1,
      reducedMotion: "reduce",
    });
    const page = await context.newPage();

    for (const path of paths) {
      await page.goto(`${baseUrl}${path}`, { waitUntil: "networkidle" });
      await page.evaluate(() => document.fonts.ready);

      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      if (scrollWidth > viewport.width) {
        overflowing.push(`${path} at ${viewport.name}: ${scrollWidth}px wide`);
      }

      const dir = `${outDir}/${fileName(path)}`;
      await mkdir(dir, { recursive: true });
      await page.screenshot({ path: `${dir}/${viewport.name}.png`, fullPage: true });
    }

    await context.close();
  }
} finally {
  await browser.close();
}

console.log(`Saved ${paths.length * viewports.length} screenshots to ${outDir}/`);
if (overflowing.length > 0) {
  console.error(`Horizontal scroll found:\n  ${overflowing.join("\n  ")}`);
  process.exitCode = 1;
}
