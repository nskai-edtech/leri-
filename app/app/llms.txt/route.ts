import { menus } from "@/lib/nav";
import { ORG, SITE_URL } from "@/lib/site";

// llms.txt is a proposed convention: a plain-Markdown map of the site for AI
// crawlers, which read it far more cheaply than they parse 24 HTML pages.
// Generated from the nav for the same reason as the sitemap — one source of
// truth, so a new page can't be added to the site and forgotten here.
export const dynamic = "force-static";

function render(): string {
  const lines = [`# ${ORG.name}`, "", `> ${ORG.description}`, ""];

  // Some menus point their overview at a page that also appears as a normal
  // link (Company -> /about). Listing a URL twice tells a crawler nothing new.
  const seen = new Set<string>();
  const push = (title: string, href: string, blurb: string) => {
    if (seen.has(href)) return;
    seen.add(href);
    lines.push(`- [${title}](${SITE_URL}${href}): ${blurb}`);
  };

  for (const menu of menus) {
    lines.push(`## ${menu.label}`, "");
    push(menu.overview.title, menu.overview.href, menu.overview.blurb);
    for (const group of menu.groups) {
      for (const link of group.links) push(link.title, link.href, link.blurb);
    }
    lines.push("");
  }

  lines.push("## Contact", "", `- Email: ${ORG.email}`, `- [Contact](${SITE_URL}/contact)`, "");
  return lines.join("\n");
}

export function GET() {
  return new Response(render(), {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
