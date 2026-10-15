import { ContactIcons } from "@/components/ui/ContactIcons";
import { serviceUi } from "@/content/services";

type ServiceHeroProps = {
  titleId: string;
  title: string;
  byline: string;
};

// Top of a service overlay (Figma 1:3287): the service's name, a rule, then the byline
// beside the club's contact icons, 16px apart.
export function ServiceHero({ titleId, title, byline }: ServiceHeroProps) {
  return (
    <div className="flex flex-col gap-4 text-black">
      <h2 id={titleId} className="text-intro-sm font-medium md:text-intro">
        {title}
      </h2>
      <hr className="border-rule" />
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
        <p className="text-copy-sm md:text-copy">{byline}</p>
        <ContactIcons label={serviceUi.contact} />
      </div>
    </div>
  );
}
