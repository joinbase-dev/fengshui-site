import { consultCta, lineBooking } from "@/content/site";
import { ArrowUpRightIcon } from "@/components/ui/ArrowUpRightIcon";

// The design's "primary-button" (Figma 1:773 and 1:3321): red text with the up-right
// arrow, opening the LINE account, the site's only booking channel. On hover the
// text darkens and the arrow nudges the way it points.
export function ConsultLink({ className = "" }: { className?: string }) {
  return (
    <a
      href={lineBooking}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex min-h-11 items-center gap-3 rounded-xs text-cta-sm font-medium text-red-800 transition-colors duration-200 ease-refined hover:text-red-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-800 md:text-cta ${className}`}
    >
      {consultCta}
      <ArrowUpRightIcon className="size-6 transition-transform duration-200 ease-refined group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-focus-visible:translate-x-0.5 group-focus-visible:-translate-y-0.5" />
    </a>
  );
}
