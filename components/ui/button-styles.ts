// The design's "primary-button": used by the form submit.
const buttonBase =
  "inline-flex items-center justify-center rounded-lg font-semibold whitespace-nowrap shadow-base transition-colors duration-200 ease-refined focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-70";

export const primaryButton = `${buttonBase} bg-brand px-10 py-4 text-button text-white hover:bg-red-800 focus-visible:outline-brand`;

// New Home "CTA button link" (Figma 405:1534): red gradient, LINE icon, 16px bold.
// Hover brightens and lifts it 2px; pressing settles it back.
export const ctaButton =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-sm bg-gradient-cta px-10 py-3 text-button-2 font-bold whitespace-nowrap text-white shadow-base transition duration-200 ease-refined hover:brightness-110 hover:shadow-card motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-0 active:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";
