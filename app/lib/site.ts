// Absolute origin for the deployed site. Sitemap URLs and Open Graph tags
// must be absolute, so this is the one place the domain is written down.
export const SITE_URL = "https://leri.cx";

// The single Organization description, reused by the JSON-LD on the layout
// and by llms.txt. Only claims we can defend: no employee counts, no founding
// date, no addresses we don't have. No public email either -- the demo form
// is the only route in, so nothing advertises an inbox that isn't watched.
export const ORG = {
  name: "Leri",
  description:
    "An AI concierge that knows your policies, takes real action in your systems, and hands over to a person the moment that's the right call.",
  parent: "NSK AI",
  cities: ["London", "Lagos", "Addis Ababa", "Nairobi"],
};
