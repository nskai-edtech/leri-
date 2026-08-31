import type { MetadataRoute } from "next";
import { menus } from "@/lib/nav";
import { SITE_URL } from "@/lib/site";

// Derived from the nav so a new page can't be added to the site and
// forgotten here. Home is added by hand: it has no nav entry.
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = new Set<string>(["/"]);
  for (const menu of menus) {
    paths.add(menu.overview.href);
    for (const group of menu.groups) {
      for (const link of group.links) paths.add(link.href);
    }
  }

  const lastModified = new Date();
  return [...paths].map((path) => ({ url: `${SITE_URL}${path}`, lastModified }));
}
