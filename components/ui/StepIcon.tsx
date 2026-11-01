// The consultation steps' icons: a white disc in an open red ring with the step's number
// in a black badge at the top right (Figma 19:1915, 19:1921, 19:1927), and the step's
// glyph in the middle. Decorative; the list itself is numbered.
//
// Ohm asked (2026-11-01) for a conversation glyph on step 2 (the design's is a vacuum
// cleaner) and a phone call on step 3 (the design's is a card), all three in one style.
// So every glyph is now drawn the same way: outlined on a 24px grid, 1.75 stroke with
// round ends in brand red, its main shape tinted mint as in the design, centred in the
// disc at the same size. The glyph shapes follow Lucide (ISC licence): calendar,
// messages-square and phone-call.

const ring =
  "M25.624.101a28 28 0 0 1 18.915 5.307l-1.181 1.613A26 26 0 1 0 52.04 18.098l1.85-.762A28 28 0 1 1 25.624.101Z";
const disc = "M56 28c0 15.464-12.536 28-28 28S0 43.464 0 28 12.536 0 28 0s28 12.536 28 28Z";
const badge = "M59 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z";

const handset =
  "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z";

// Each glyph: the tinted shapes, then the lines over them.
const glyphs = {
  // Book a time: a calendar.
  1: {
    tinted: ["M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"],
    lines: ["M8 2v4", "M16 2v4", "M3 10h18"],
  },
  // Talk it through with the master: two speech bubbles, one answering the other.
  2: {
    tinted: ["M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2Z"],
    lines: ["M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"],
  },
  // Follow up afterwards: a phone handset ringing.
  3: {
    tinted: [handset],
    lines: ["M14.05 2a9 9 0 0 1 8 7.94", "M14.05 6A5 5 0 0 1 18 10"],
  },
} as const;

// The step numbers, as exported from the design.
const numbers = {
  1: "M51.315 5.273V14h-1.321V6.594h-.052l-2.088 1.364V6.696l2.178-1.423h1.283Z",
  2: "M47.16 14v-.954l2.953-3.06c.315-.332.575-.623.78-.873.207-.253.362-.493.464-.72.102-.228.154-.47.154-.725 0-.29-.068-.54-.205-.75a1.33 1.33 0 0 0-.558-.49 1.774 1.774 0 0 0-.797-.175c-.313 0-.585.064-.818.192a1.3 1.3 0 0 0-.537.54 1.72 1.72 0 0 0-.188.82h-1.257c0-.532.122-.996.367-1.394.244-.398.579-.706 1.005-.925.426-.221.91-.332 1.453-.332.549 0 1.032.11 1.449.328.42.216.749.511.985.886.235.372.353.793.353 1.262 0 .324-.06.64-.183.95-.12.31-.328.655-.626 1.035-.299.378-.713.837-1.245 1.377l-1.734 1.815v.064h3.93V14H47.16Z",
  3: "M50.01 14.12c-.585 0-1.108-.101-1.568-.303a2.58 2.58 0 0 1-1.086-.84 2.204 2.204 0 0 1-.426-1.252h1.338c.017.258.104.483.26.673.159.188.366.333.622.435.256.102.54.153.852.153.344 0 .648-.06.912-.18.267-.119.476-.285.627-.498.15-.216.226-.464.226-.746 0-.292-.076-.55-.226-.771a1.47 1.47 0 0 0-.652-.528c-.284-.128-.628-.192-1.031-.192h-.737V8.998h.737c.324 0 .608-.059.852-.175.248-.117.44-.279.58-.486.14-.21.209-.456.209-.737 0-.27-.061-.505-.183-.703a1.244 1.244 0 0 0-.512-.473 1.65 1.65 0 0 0-.775-.17c-.284 0-.55.052-.797.157a1.49 1.49 0 0 0-.597.443 1.15 1.15 0 0 0-.247.686h-1.274c.014-.471.153-.886.418-1.244.267-.358.619-.638 1.056-.84a3.38 3.38 0 0 1 1.457-.302c.56 0 1.043.11 1.45.328.408.216.724.504.945.865.225.361.335.756.333 1.185.002.488-.134.903-.41 1.244-.272.341-.636.57-1.09.686v.068c.58.088 1.028.318 1.346.69.321.373.48.835.478 1.386.003.48-.13.91-.4 1.29-.268.381-.633.681-1.096.9-.463.216-.993.324-1.59.324Z",
} as const;

export function StepIcon({ step, className }: { step: 1 | 2 | 3; className?: string }) {
  const glyph = glyphs[step];
  return (
    <svg width="59" height="56" viewBox="0 0 59 56" fill="none" aria-hidden="true" className={className}>
      <path d={disc} fill="#ffffff" />
      <path d={ring} fill="var(--color-brand-red)" />
      <svg
        x="16"
        y="16"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke="var(--color-brand-red)"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {glyph.tinted.map((d) => (
          <path key={d} d={d} fill="var(--color-mint)" />
        ))}
        {glyph.lines.map((d) => (
          <path key={d} d={d} fill="none" />
        ))}
      </svg>
      <path d={badge} fill="var(--color-ink)" />
      <path d={numbers[step]} fill="var(--color-hairline)" />
    </svg>
  );
}
