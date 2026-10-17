// Draws the share images (Open Graph and X cards, 1200×630) of every page in the
// sitemap except the home page, whose image is Ohm's design (public/og/home.jpg). Each
// one follows that design: the red and orange glow, the faded club emblem, the page's
// heading (its <h1>) in white and the club's name in cream. Run it against a running
// server after adding a page or changing a service's title, and commit the results:
//
//   npm run build && npm run start      # in one terminal
//   npm run og-images                   # in another; JPEGs land in public/og/
//
// OG_SOURCE_URL points it at another server. It loads Noto Sans Thai from Google Fonts,
// so it needs the network, and a Chromium (npx playwright-core install chromium).
import { mkdir, readFile } from "node:fs/promises";
import { dirname } from "node:path";
import { chromium } from "playwright-core";

const baseUrl = (process.env.OG_SOURCE_URL ?? "http://localhost:3000").replace(/\/$/, "");
const size = { width: 1200, height: 630 };
// The club's name as Ohm's home image sets it.
const brand = "คลับฮวงจุ้ยแห่งประเทศไทย · FengShui Club Thailand";

async function pagePaths() {
  const response = await fetch(`${baseUrl}/sitemap.xml`);
  if (!response.ok) throw new Error(`Could not read ${baseUrl}/sitemap.xml (${response.status})`);
  const xml = await response.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => new URL(match[1]).pathname).filter((path) => path !== "/");
}

function escapeHtml(text) {
  return text.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function template({ heading, emblem }) {
  return `<!doctype html>
<html lang="th">
<head>
<meta charset="utf-8">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@600&display=block">
<style>
  * { margin: 0; box-sizing: border-box; }
  html, body { width: ${size.width}px; height: ${size.height}px; overflow: hidden; }
  body {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 28px;
    padding: 0 96px;
    font-family: "Noto Sans Thai", sans-serif;
    text-align: center;
    background: #c80a0c;
  }
  /* The glow of Ohm's image: orange along the top, deep crimson at the left and the
     foot, bright red in the middle, all blurred together. */
  .glow {
    position: absolute;
    inset: -120px;
    filter: blur(70px);
    background:
      radial-gradient(30% 34% at 28% 12%, #ffa14c 0%, rgba(255, 161, 76, 0) 80%),
      radial-gradient(44% 38% at 64% 12%, #ff7d1c 0%, rgba(255, 125, 28, 0) 80%),
      radial-gradient(30% 50% at 96% 24%, #ff9a3e 0%, rgba(255, 154, 62, 0) 80%),
      radial-gradient(30% 36% at 12% 22%, #c40f1c 0%, rgba(196, 15, 28, 0) 80%),
      radial-gradient(30% 46% at 6% 62%, #8c0618 0%, rgba(140, 6, 24, 0) 80%),
      radial-gradient(80% 40% at 40% 108%, #5a0006 0%, rgba(90, 0, 6, 0) 85%),
      radial-gradient(44% 38% at 80% 64%, #e00c04 0%, rgba(224, 12, 4, 0) 80%),
      linear-gradient(180deg, #f2581a 0%, #e0260d 26%, #cc0a0a 50%, #a80509 76%, #7a0207 100%);
  }
  .emblem {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 470px;
    translate: -50% -50%;
    filter: brightness(0) invert(1);
    opacity: 0.14;
  }
  h1, p { position: relative; }
  h1 {
    color: #fff;
    font-size: 88px;
    font-weight: 600;
    line-height: 1.3;
    text-wrap: balance;
    text-shadow: 0 2px 12px rgba(80, 0, 0, 0.35);
  }
  p {
    color: #f8dfb4;
    font-size: 34px;
    font-weight: 600;
    line-height: 1.3;
    text-shadow: 0 1px 8px rgba(80, 0, 0, 0.3);
  }
</style>
</head>
<body>
  <div class="glow"></div>
  <img class="emblem" src="${emblem}" alt="">
  <h1>${escapeHtml(heading)}</h1>
  <p>${escapeHtml(brand)}</p>
</body>
</html>`;
}

const emblem = `data:image/png;base64,${(await readFile("public/images/emblem.png")).toString("base64")}`;
const paths = await pagePaths();
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: size });

for (const path of paths) {
  await page.goto(`${baseUrl}${path}`, { waitUntil: "load" });
  const heading = (await page.locator("h1").first().textContent())?.trim();
  if (!heading) throw new Error(`${path} has no <h1> to put on its image`);

  await page.setContent(template({ heading, emblem }), { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  const file = `public/og${path}.jpg`;
  await mkdir(dirname(file), { recursive: true });
  await page.screenshot({ path: file, type: "jpeg", quality: 88 });
  console.log(`${file}: ${heading}`);
}

await browser.close();
