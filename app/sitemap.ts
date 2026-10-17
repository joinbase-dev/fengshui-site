import { execFileSync } from "node:child_process";
import type { MetadataRoute } from "next";
import { serviceDetails, servicePath } from "@/content/services";
import { absoluteUrl } from "@/lib/site-url";

// When a page's content last changed: the date of the last commit to its content
// file. Left out when git has no full history to ask (a shallow clone dates every file
// to its oldest commit), since a wrong date is worse than none.
function lastCommitDate(file: string): Date | undefined {
  try {
    const git = (args: string[]) => execFileSync("git", args, { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim();
    if (git(["rev-parse", "--is-shallow-repository"]) !== "false") return undefined;
    const date = git(["log", "-1", "--format=%cI", "--", file]);
    return date ? new Date(date) : undefined;
  } catch {
    return undefined;
  }
}

// The home page and each service's page. The home page's ?service= overlay addresses
// are left out: they share the home page's canonical URL.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: absoluteUrl("/"), lastModified: lastCommitDate("content/site.ts"), changeFrequency: "monthly", priority: 1 },
    ...serviceDetails.map((service) => ({
      url: absoluteUrl(servicePath(service.slug)),
      lastModified: lastCommitDate(`content/services/${service.slug}.ts`),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
