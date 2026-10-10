import Link from "next/link";
import { services, type ServiceIcon as ServiceIconName } from "@/content/site";
import { ArrowRightIcon } from "@/components/ui/ArrowRightIcon";
import { ServiceIcon } from "@/components/ui/ServiceIcon";

const circle: Record<ServiceIconName, string> = {
  home: "bg-gradient-olive",
  eye: "bg-gradient-red",
  seedling: "bg-gradient-gold",
};

// Figma section service (403:1258): three cards 125px apart (1160px in all, so the
// row starts at xl; narrower screens stack them), each a 130px gradient
// circle, a 32px title with an arrow and 250px of centred copy. A card with its own
// page links there; the link covers the whole card.
export function Services() {
  return (
    <section
      id={services.id}
      aria-labelledby="services-title"
      className="scroll-mt-6 px-5 py-20 md:px-10 lg:py-45"
    >
      <h2 id="services-title" className="sr-only">
        {services.heading}
      </h2>
      <ul className="reveal-group mx-auto flex w-fit flex-col items-center gap-16 xl:flex-row xl:items-start xl:gap-31.25">
        {services.items.map((item) => (
          <li key={item.title} className="relative flex flex-col items-center gap-10 text-center text-black lg:gap-14">
            <div className={`flex size-32.5 items-center justify-center rounded-full text-white ${circle[item.icon]}`}>
              <ServiceIcon name={item.icon} />
            </div>
            <div className="flex flex-col items-center gap-4.75">
              <h3 className="flex items-center gap-4.75 text-home-h2-sm font-semibold whitespace-nowrap lg:text-home-h2">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="rounded-sm after:absolute after:inset-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                  >
                    {item.title}
                  </Link>
                ) : (
                  item.title
                )}
                <ArrowRightIcon />
              </h3>
              <p className="max-w-home-service text-home-body-sm lg:text-home-body">{item.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
