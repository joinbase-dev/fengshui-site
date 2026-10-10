// The design's "primary-button": used by the form submit.
// The service page's header and dark card reuse its shape in a compact size and
// a light colour, so every button on the site shares one radius and shadow.
const buttonBase =
  "inline-flex items-center justify-center rounded-lg font-semibold whitespace-nowrap shadow-base transition-colors duration-200 ease-refined focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-70";

export const primaryButton = `${buttonBase} bg-brand px-10 py-4 text-button text-white hover:bg-red-800 focus-visible:outline-brand`;

export const primaryButtonCompact = `${buttonBase} min-h-11 bg-brand px-6 py-2.5 text-nav text-white hover:bg-red-800 focus-visible:outline-brand`;

export const lightButton = `${buttonBase} bg-cream-300 px-10 py-4 text-button text-gray-900 hover:bg-white focus-visible:outline-white`;

// New Home "CTA button link" (Figma 405:1534): red gradient, LINE icon, 16px bold.
export const ctaButton =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-sm bg-gradient-cta px-10 py-3 text-button-2 font-bold whitespace-nowrap text-white shadow-base transition-[filter] duration-200 ease-refined hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";
