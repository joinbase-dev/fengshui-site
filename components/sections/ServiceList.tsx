import { services } from "@/content/site";

function CloudIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0">
      <path
        opacity="0.5"
        d="M19.35 10.04C18.67 6.59 15.64 4 12 4C9.11 4 6.6 5.64 5.35 8.04C2.34 8.36 0 10.91 0 14C0 17.31 2.69 20 6 20H19C21.76 20 24 17.76 24 15C24 12.36 21.95 10.22 19.35 10.04Z"
        fill="white"
      />
    </svg>
  );
}

export function ServiceList() {
  return (
    <div
      id="services"
      className="relative scroll-mt-6 rounded-xl bg-brand px-6 py-8 md:px-8 md:py-6 xl:px-16 xl:rounded-2xl"
    >
      {/* The design's row is 1184px (3 × 316 + 2 × 118), 32px wider than the padded box. */}
      <h2 className="sr-only">{services.heading}</h2>
      <ul className="reveal-group grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-10 xl:-mr-8 xl:gap-29.5">
        {services.items.map((item) => (
          <li key={item.title} className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <CloudIcon />
              <h3 className="font-lato text-service-sm font-semibold text-white xl:text-service">
                {item.title}
              </h3>
            </div>
            <p className="font-lato text-service-body-sm text-white xl:text-service-body">{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
