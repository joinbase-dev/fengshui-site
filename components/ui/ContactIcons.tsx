import { social } from "@/content/site";

type Platform = keyof typeof social;

// Iconify glyphs from the overlay's contact row (Figma 1:3292), in its order.
const icons: { platform: Platform; viewBox: string; width: number; height: number; path: string }[] = [
  {
    // fa-brands:line, drawn 22×25.
    platform: "line",
    viewBox: "0 0 448 512",
    width: 22,
    height: 25,
    path: "M272.1 204.2v71.1c0 1.8-1.4 3.2-3.2 3.2h-11.4c-1.1 0-2.1-.6-2.6-1.3l-32.6-44v42.2c0 1.8-1.4 3.2-3.2 3.2h-11.4c-1.8 0-3.2-1.4-3.2-3.2v-71.1c0-1.8 1.4-3.2 3.2-3.2H219c1 0 2.1.5 2.6 1.4l32.6 44v-42.2c0-1.8 1.4-3.2 3.2-3.2h11.4c1.8-.1 3.3 1.4 3.3 3.1m-82-3.2h-11.4c-1.8 0-3.2 1.4-3.2 3.2v71.1c0 1.8 1.4 3.2 3.2 3.2h11.4c1.8 0 3.2-1.4 3.2-3.2v-71.1c0-1.7-1.4-3.2-3.2-3.2m-27.5 59.6h-31.1v-56.4c0-1.8-1.4-3.2-3.2-3.2h-11.4c-1.8 0-3.2 1.4-3.2 3.2v71.1c0 .9.3 1.6.9 2.2c.6.5 1.3.9 2.2.9h45.7c1.8 0 3.2-1.4 3.2-3.2v-11.4c0-1.7-1.4-3.2-3.1-3.2M332.1 201h-45.7c-1.7 0-3.2 1.4-3.2 3.2v71.1c0 1.7 1.4 3.2 3.2 3.2h45.7c1.8 0 3.2-1.4 3.2-3.2v-11.4c0-1.8-1.4-3.2-3.2-3.2H301v-12h31.1c1.8 0 3.2-1.4 3.2-3.2V234c0-1.8-1.4-3.2-3.2-3.2H301v-12h31.1c1.8 0 3.2-1.4 3.2-3.2v-11.4c-.1-1.7-1.5-3.2-3.2-3.2M448 113.7V399c-.1 44.8-36.8 81.1-81.7 81H81c-44.8-.1-81.1-36.9-81-81.7V113c.1-44.8 36.9-81.1 81.7-81H367c44.8.1 81.1 36.8 81 81.7m-61.6 122.6c0-73-73.2-132.4-163.1-132.4S60.2 163.3 60.2 236.3c0 65.4 58 120.2 136.4 130.6c19.1 4.1 16.9 11.1 12.6 36.8c-.7 4.1-3.3 16.1 14.1 8.8s93.9-55.3 128.2-94.7c23.6-26 34.9-52.3 34.9-81.5",
  },
  {
    // streamline-logos:tiktok-logo-block
    platform: "tiktok",
    viewBox: "0 0 24 24",
    width: 24,
    height: 24,
    path: "M5 1a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4zm7.34 3.5h2.387c0 1.6 1.352 3.41 3.41 3.41v2.386c-1.417-.098-2.628-.33-3.41-1.023v6.136c0 1.705-1.348 4.091-4.431 4.091c-3.766 0-4.432-3.41-4.432-4.432s.6-4.432 4.772-4.432v2.387c-1.091-.231-2.386.681-2.386 2.045c0 1.705 1.023 2.046 2.046 2.046s2.045-1.023 2.045-2.046z",
  },
  {
    // akar-icons:facebook-fill
    platform: "facebook",
    viewBox: "0 0 24 24",
    width: 24,
    height: 24,
    path: "M0 12.067C0 18.034 4.333 22.994 10 24v-8.667H7V12h3V9.333c0-3 1.933-4.666 4.667-4.666c.866 0 1.8.133 2.666.266V8H15.8c-1.467 0-1.8.733-1.8 1.667V12h3.2l-.533 3.333H14V24c5.667-1.006 10-5.966 10-11.933C24 5.43 18.6 0 12 0S0 5.43 0 12.067",
  },
  {
    // f7:logo-instagram
    platform: "instagram",
    viewBox: "0 0 56 56",
    width: 24,
    height: 24,
    path: "M39.006 3C46.735 3 53 9.27 53 16.994v22.012C53 46.735 46.73 53 39.006 53H16.994C9.265 53 3 46.73 3 39.006V16.994C3 9.265 9.27 3 16.994 3zM28 15c-7.18 0-13 5.82-13 13s5.82 13 13 13s13-5.82 13-13s-5.82-13-13-13m0 4a9 9 0 1 1 0 18a9 9 0 0 1 0-18m14.5-9a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7",
  },
];

// The club's accounts as a row of icons, 16px apart as drawn. Each link's hit area is
// 44px, overlapping its neighbours' spacing rather than widening the row.
export function ContactIcons({ label }: { label: string }) {
  return (
    <ul aria-label={label} className="flex items-center gap-4">
      {icons.map((icon) => (
        <li key={icon.platform} className="flex">
          <a
            href={social[icon.platform].href}
            target="_blank"
            rel="noopener noreferrer"
            className="-m-2.5 flex size-11 items-center justify-center rounded-sm text-black transition-colors duration-200 ease-refined hover:text-red-800 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-red-800"
          >
            <svg width={icon.width} height={icon.height} viewBox={icon.viewBox} aria-hidden="true">
              <path fill="currentColor" fillRule="evenodd" d={icon.path} />
            </svg>
            <span className="sr-only">{social[icon.platform].label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
