import { announcement } from "@/content/site";
import { BullhornIcon } from "@/components/ui/BullhornIcon";

function Notice({ hidden = false }: { hidden?: boolean }) {
  return (
    <p aria-hidden={hidden || undefined} className="flex shrink-0 items-center gap-2 pr-10 text-home-body-sm text-black lg:text-home-body">
      <span className="text-red-800">
        <BullhornIcon />
      </span>
      <span className="motion-safe:whitespace-nowrap">{announcement}</span>
    </p>
  );
}

// Figma section-announce (403:1346): the notice between two 2px red rules, repeated
// in a clipped row. It scrolls as a ticker (see .marquee in motion.css); the
// second copy is hidden from screen readers. Ohm asked for the band to run the
// full page width rather than the 1080px content row.
export function Announcement() {
  return (
    <section aria-label="ประกาศ" className="py-8">
      <div className="marquee overflow-hidden border-y-2 border-red-800 py-8 motion-reduce:px-5 md:motion-reduce:px-10">
        <div className="marquee-track">
          <Notice />
          <Notice hidden />
        </div>
      </div>
    </section>
  );
}
