import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/ui/ArrowUpRightIcon";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { serviceDetails, servicePath, serviceUi } from "@/content/services";

// Design line breaks hold from sm up; on phones the lines run together and wrap.
function Lines({ lines }: { lines: readonly string[] }) {
  return lines.map((line, index) => (
    <span key={line} className="sm:block">
      {index > 0 && " "}
      {line}
    </span>
  ));
}

// Not in the design (derived for the service pages): the club's other services as a
// ruled list in the home page's service-card style, each linking to its page.
export function OtherServices({ current }: { current: string }) {
  const others = serviceDetails.filter((service) => service.slug !== current);
  return (
    <section aria-labelledby="other-services-title">
      <SectionLabel id="other-services-title">{serviceUi.otherServices}</SectionLabel>
      <ul className="mt-8 border-y border-rule">
        {others.map((service) => (
          <li key={service.slug} className="border-b border-rule last:border-b-0">
            <Link
              href={servicePath(service.slug)}
              className="group flex items-start justify-between gap-4 px-5 py-6 text-black transition-colors duration-300 ease-refined hover:bg-sand focus-visible:bg-sand focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-red-800 md:px-8"
            >
              <span className="flex min-w-0 flex-col">
                <span className="text-service-title-sm font-semibold">{service.title}</span>
                <span className="text-copy-sm">
                  <Lines lines={service.summaryLines} />
                </span>
              </span>
              <ArrowUpRightIcon className="mt-2 size-5 shrink-0 text-red-800 transition-transform duration-200 ease-refined group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-focus-visible:translate-x-0.5 group-focus-visible:-translate-y-0.5" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
