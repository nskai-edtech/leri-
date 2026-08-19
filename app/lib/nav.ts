export type NavLink = { title: string; blurb: string; href: string };
export type NavGroup = { label?: string; links: NavLink[] };
export type NavMenu = {
  label: string;
  href: string;
  overview: { title: string; blurb: string; href: string };
  groups: NavGroup[];
};

export const productMenu: NavMenu = {
  label: "Products",
  href: "/products",
  overview: { title: "Product overview", blurb: "Eleven parts, one policy set", href: "/products" },
  groups: [
    {
      label: "Channels",
      links: [
        { title: "Voice", blurb: "Human-like conversation", href: "/products/voice" },
        { title: "Chat", blurb: "Safe, on-brand replies", href: "/products/chat" },
        { title: "Email", blurb: "Contextual resolutions", href: "/products/email" },
      ],
    },
    {
      label: "Build",
      links: [
        { title: "Assist", blurb: "Drafts for your team", href: "/products/assist" },
        { title: "Playbooks", blurb: "Workflows for AI agents", href: "/products/playbooks" },
        { title: "Integrations", blurb: "Tool connectors", href: "/products/integrations" },
      ],
    },
    {
      label: "Optimize",
      links: [
        { title: "Experiments", blurb: "Live A/B testing", href: "/products/experiments" },
        { title: "Testing & QA", blurb: "Simulations at scale", href: "/products/testing" },
      ],
    },
    {
      label: "Scale",
      links: [
        { title: "Insights & reporting", blurb: "Voice of the customer", href: "/products/insights" },
        { title: "Monitor", blurb: "Always-on QA", href: "/products/monitor" },
        { title: "Suggestions", blurb: "AI-powered knowledge", href: "/products/suggestions" },
      ],
    },
  ],
};

export const industryMenu: NavMenu = {
  label: "Industries",
  href: "/industries",
  overview: { title: "All industries", blurb: "Same agent, different rulebook", href: "/industries" },
  groups: [
    {
      links: [
        { title: "Retail", blurb: "Orders, returns and refunds", href: "/industries/retail" },
        { title: "Travel & hospitality", blurb: "Disruption and rebooking", href: "/industries/travel" },
        { title: "Technology", blurb: "Accounts, plans and incidents", href: "/industries/technology" },
      ],
    },
    {
      links: [
        { title: "Financial services", blurb: "Disputes, cards and payments", href: "/industries/financial-services" },
        { title: "Health & wellness", blurb: "Appointments, coverage, claims", href: "/industries/health" },
      ],
    },
    {
      links: [
        { title: "Media", blurb: "Subscriptions and access", href: "/industries/media" },
        { title: "Telecommunications", blurb: "Outages, upgrades, billing", href: "/industries/telecommunications" },
      ],
    },
  ],
};

export const companyMenu: NavMenu = {
  label: "Company",
  href: "/about",
  overview: { title: "Company", blurb: "Early, and saying so", href: "/about" },
  groups: [
    {
      links: [
        { title: "About", blurb: "How we build, and in what order", href: "/about" },
        { title: "Careers", blurb: "Tell us what you want to build", href: "/careers" },
      ],
    },
    {
      links: [{ title: "Contact", blurb: "Book a demo, or ask a question", href: "/contact" }],
    },
  ],
};

export const menus: NavMenu[] = [productMenu, industryMenu, companyMenu];

export const footerCols = [
  {
    title: "Product",
    links: [
      { t: "Products", href: "/products" },
      { t: "Voice", href: "/products/voice" },
      { t: "Chat", href: "/products/chat" },
      { t: "Email", href: "/products/email" },
    ],
  },
  {
    title: "Industries",
    links: [
      { t: "All industries", href: "/industries" },
      { t: "Retail", href: "/industries/retail" },
      { t: "Financial services", href: "/industries/financial-services" },
      { t: "Telecommunications", href: "/industries/telecommunications" },
    ],
  },
  {
    title: "Company",
    links: [
      { t: "About", href: "/about" },
      { t: "Careers", href: "/careers" },
      { t: "Contact", href: "/contact" },
    ],
  },
];
