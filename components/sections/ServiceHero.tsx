import { ContactIcons } from "@/components/ui/ContactIcons";
import { serviceUi } from "@/content/services";

type ServiceHeroProps = {
  titleId: string;
  title: string;
  byline: string;
};

// Top of a service overlay (Figma 1:3287, Ohm's mock-ups of 2026-10-17): the service's
// name after a red dot, a rule, then the byline in grey beside the club's contact
// icons, 16px apart.
export function ServiceHero({ titleId, title, byline }: ServiceHeroProps) {
  return (
    <div className="flex flex-col gap-4 text-black">
      <h2 id={titleId} className="flex items-center gap-3 text-intro-sm font-medium md:text-intro">
        <span aria-hidden="true" className="size-3.5 shrink-0 rounded-full bg-red-800 md:size-4.5" />
        {title}
      </h2>
      <hr className="border-rule" />
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
        {/* The mock-up draws the byline in black at 60%, under 4.5:1 on sand; 70% passes. */}
        <p className="text-copy-sm text-black/70 md:text-copy">{byline}</p>
        <ContactIcons label={serviceUi.contact} />
      </div>
    </div>
  );
}
