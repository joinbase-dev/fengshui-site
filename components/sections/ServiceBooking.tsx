import Image from "next/image";
import { serviceBooking } from "@/content/services";
import { consultation, lineBooking } from "@/content/site";
import { ctaButton } from "@/components/ui/button-styles";
import { LineChatIcon } from "@/components/ui/LineChatIcon";

// Figma 405:2008 booking block, the same on every service page: a rule across the
// content row, then the master's framed portrait and caption beside the booking copy
// and the LINE button, centred as a 775px group. Phones stack the two columns.
// It carries the consultation id so in-page "consult" links land here.
export function ServiceBooking() {
  const { portrait } = serviceBooking;
  return (
    <section
      id={consultation.id}
      aria-labelledby="service-booking-title"
      className="scroll-mt-6 px-5 pb-16 md:px-10 lg:pb-30"
    >
      <hr className="mx-auto max-w-home border-divider" />
      <div className="reveal-group mx-auto mt-12 flex max-w-193.75 flex-col gap-8 md:flex-row md:items-start md:gap-17.5 lg:mt-17.5">
        <figure className="flex shrink-0 flex-col gap-6">
          <div className="relative size-48.75 overflow-hidden border-2 border-red-800">
            {portrait.src && (
              <Image src={portrait.src} alt={portrait.alt} fill sizes="195px" className="object-cover object-[50%_20%]" />
            )}
          </div>
          <figcaption className="text-detail-body text-black">
            <span className="block font-bold">{serviceBooking.name}</span>
            {serviceBooking.affiliation}
          </figcaption>
        </figure>

        <div className="flex max-w-127.5 flex-col items-start md:pt-4.5">
          <h2 id="service-booking-title" className="text-home-h2-sm font-semibold text-black lg:text-home-h2">
            {serviceBooking.title}
          </h2>
          <p className="mt-1 text-detail-booking text-black">
            {serviceBooking.bodyLines.map((line, index) => (
              <span key={line} className="lg:block">
                {index > 0 && " "}
                {line}
              </span>
            ))}
          </p>
          <a href={lineBooking} target="_blank" rel="noopener noreferrer" className={`mt-6 ${ctaButton}`}>
            <LineChatIcon className="size-7" />
            {serviceBooking.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
