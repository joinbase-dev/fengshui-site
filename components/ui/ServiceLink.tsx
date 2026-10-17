"use client";

import type { ComponentProps, MouseEvent } from "react";
import { servicePath } from "@/content/services";
import { openService } from "@/lib/service-overlay";

type ServiceLinkProps = Omit<ComponentProps<"a">, "href" | "onClick"> & {
  slug: string;
};

// A real link to the service's own page (/services/<slug>), so search engines can follow
// it and it can be opened in a new tab or copied. A plain click opens the service's
// overlay on the home page in place instead (/?service=<slug>).
export function ServiceLink({ slug, ...props }: ServiceLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    openService(slug);
  }

  return <a href={servicePath(slug)} onClick={handleClick} {...props} />;
}
