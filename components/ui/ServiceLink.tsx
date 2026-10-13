"use client";

import type { ComponentProps, MouseEvent } from "react";
import { openService, serviceHref } from "@/lib/service-overlay";

type ServiceLinkProps = Omit<ComponentProps<"a">, "href" | "onClick"> & {
  slug: string;
};

// A real link to /?service=<slug>, so it can be opened in a new tab or copied. A plain
// click opens the overlay in place instead of reloading the page.
export function ServiceLink({ slug, ...props }: ServiceLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    openService(slug);
  }

  return <a href={serviceHref(slug)} onClick={handleClick} {...props} />;
}
