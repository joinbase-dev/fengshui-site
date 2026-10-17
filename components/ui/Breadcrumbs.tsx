import Link from "next/link";

type Crumb = { label: string; href: string };

type BreadcrumbsProps = {
  label: string;
  // From the home page down to the current page, which is the last entry.
  items: Crumb[];
};

// Not in the design (derived for the service pages): the trail from the home page to
// this one, as plain small text with the current page unlinked.
export function Breadcrumbs({ label, items }: BreadcrumbsProps) {
  return (
    <nav aria-label={label}>
      <ol className="flex flex-wrap items-center gap-x-2 text-copy-sm text-black">
        {items.map((item, index) => {
          const current = index === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-2">
              {index > 0 && <span aria-hidden="true">/</span>}
              {current ? (
                <span aria-current="page">{item.label}</span>
              ) : (
                <Link
                  href={item.href}
                  className="inline-flex min-h-11 items-center rounded-xs underline-offset-4 transition-colors duration-200 ease-refined hover:text-red-800 hover:underline focus-visible:outline-2 focus-visible:outline-red-800"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
