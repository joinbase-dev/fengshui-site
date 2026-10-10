import Link from "next/link";
import { services, type ServiceIcon as ServiceIconName } from "@/content/site";
import { ArrowRightIcon } from "@/components/ui/ArrowRightIcon";
import { ServiceIcon } from "@/components/ui/ServiceIcon";

const circle: Record<ServiceIconName, string> = {
  home: "bg-gradient-olive",
  eye: "bg-gradient-red",
  seedling: "bg-gradient-gold",
};

// Shared timing for the card's hover: transform and colour only, and no movement
// under reduced motion.
const ease = "transition duration-200 ease-refined";

// Figma section service (403:1258), scaled down at Ohm's request: a 112px gradient
// circle (130 in Figma), a 24px title (32) and 16px copy (20), with tighter spacing.
// Three across from lg, stacked below. Each card links to its service page; the link
// covers the whole card, and hover or keyboard focus lifts the circle, reddens the
// title and nudges the arrow.
export function Services() {
  return (
    <section
      id={services.id}
      aria-labelledby="services-title"
      className="scroll-mt-6 px-5 py-16 md:px-10 lg:py-24"
    >
      <h2 id="services-title" className="sr-only">
        {services.heading}
      </h2>
      <ul className="reveal-group mx-auto grid max-w-home gap-12 lg:grid-cols-3 lg:gap-10">
        {services.items.map((item) => (
          <li
            key={item.title}
            className="group relative mx-auto flex max-w-72 flex-col items-center gap-6 text-center text-black lg:gap-8"
          >
            <div
              className={`flex size-24 items-center justify-center rounded-full text-white ${ease} lg:size-28 ${circle[item.icon]} motion-safe:group-hover:-translate-y-1 motion-safe:group-has-focus-visible:-translate-y-1`}
            >
              <ServiceIcon name={item.icon} className="size-12 lg:size-14" />
            </div>
            <div className="flex flex-col items-center gap-3">
              <h3
                className={`flex items-center gap-2 text-home-card font-semibold whitespace-nowrap ${ease} group-hover:text-brand group-has-focus-visible:text-brand lg:text-home-h3`}
              >
                <Link
                  href={item.href}
                  className="rounded-sm after:absolute after:inset-0 after:rounded-lg focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-8 focus-visible:after:outline-brand"
                >
                  {item.title}
                </Link>
                <ArrowRightIcon
                  className={`${ease} motion-safe:group-hover:translate-x-1 motion-safe:group-has-focus-visible:translate-x-1`}
                />
              </h3>
              <p className="text-home-body-sm">{item.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
