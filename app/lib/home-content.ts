import { c } from "./tokens";

// Geometry helpers — the plate drawings are computed, not hand-drawn, so the
// octagons stay true regular octagons and the dial ticks sit at exact 10° steps.
export function ring(cx: number, cy: number, r: number) {
  return `M${cx - r} ${cy}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0`;
}

export function octa(r: number) {
  let d = "";
  for (let i = 0; i < 8; i++) {
    const a = (Math.PI / 4) * i + Math.PI / 8;
    d += (i ? "L" : "M") + (100 + r * Math.cos(a)).toFixed(1) + " " + (100 + r * Math.sin(a)).toFixed(1);
  }
  return d + "Z";
}

export function ticks() {
  const out: string[] = [];
  for (let i = 0; i < 36; i++) {
    const a = ((Math.PI * 2) / 36) * i;
    const r1 = i % 9 === 0 ? 66 : 74;
    out.push(
      "M" + (100 + r1 * Math.cos(a)).toFixed(1) + " " + (100 + r1 * Math.sin(a)).toFixed(1) +
      "L" + (100 + 84 * Math.cos(a)).toFixed(1) + " " + (100 + 84 * Math.sin(a)).toFixed(1),
    );
  }
  return out;
}

export function grid() {
  const out = [];
  for (let r = 0; r < 7; r++)
    for (let col = 0; col < 7; col++) {
      const mid = r === 3 && col === 3;
      out.push({ x: 28 + col * 24, y: 28 + r * 24, r: mid ? 5 : 1.9, fill: mid ? c.accent : "#BEB5A7" });
    }
  return out;
}

export type Plate = {
  n: string;
  title: string;
  body: string;
  ink: string[];
  acc: string[];
  dots: { x: number; y: number; r: number; fill: string }[];
};

export const plates: Plate[] = [
  {
    n: "01", title: "Signal",
    body: "A customer reaches out. Chat, mail or voice — it arrives as one thing.",
    ink: [ring(100, 100, 86), ring(100, 100, 56)], acc: [ring(100, 100, 26)],
    dots: [{ x: 100, y: 100, r: 4, fill: c.accent }],
  },
  {
    n: "02", title: "Understanding",
    body: "It reads the account, the history and the policy before it forms a sentence.",
    ink: [], acc: [], dots: grid(),
  },
  {
    n: "03", title: "Policy",
    body: "Every answer sits inside a boundary your team drew, and can point at it.",
    ink: [octa(84), octa(46)], acc: [octa(20)],
    dots: [{ x: 100, y: 100, r: 3, fill: c.accent }],
  },
  {
    n: "04", title: "Action",
    body: "It moves in your systems. Refunds, freezes, rebookings — done, not described.",
    ink: [ring(100, 100, 84), ...ticks()], acc: ["M100 100L152 40"],
    dots: [{ x: 100, y: 100, r: 2.5, fill: c.ink }],
  },
  {
    n: "05", title: "Resolution",
    body: "The customer leaves settled. Your queue never learned their name.",
    ink: ["M18 148h164", ring(100, 92, 46)], acc: ["M62 148a38 38 0 0 1 76 0"],
    dots: [{ x: 100, y: 148, r: 6, fill: c.accent }],
  },
];

export const promises = [
  { k: "Policy", t: "Every answer is drawn from your own documented policy, and can point at the clause it came from." },
  { k: "Permissions", t: "Actions run inside limits your team sets per system, per topic, per amount." },
  { k: "Audit", t: "Each conversation and action is logged and replayable exactly as it ran." },
  { k: "Handover", t: "When confidence drops or a topic is out of scope, a person takes it over with full context." },
];

export const steps = [
  { n: "01", title: "It reads what you already wrote", body: "Help centre, macros, past tickets, internal policy docs. No one has to author a knowledge base from scratch." },
  { n: "02", title: "You give it hands", body: "Connect the systems where the work happens — orders, billing, identity — and set what it's allowed to do in each." },
  { n: "03", title: "It rehearses on real history", body: "Leri replays thousands of past conversations so you can see its answers before a customer ever does." },
  { n: "04", title: "You turn traffic on slowly", body: "Start at 5% of one topic. Widen it as the numbers earn your trust. Roll back in one click." },
];

export type Channel = {
  short: string; n: string; title: string; body: string;
  points: { k: string; v: string }[];
  mockTitle: string; mockMeta: string; lines: string[]; tags: string[];
};

export const channels: Channel[] = [
  {
    short: "Chat", n: "01 / 03", title: "Chat",
    body: "The channel your customers already use, answered in seconds rather than hours — with the account open in front of it.",
    points: [
      { k: "SPD", v: "Answers in seconds rather than hours" },
      { k: "CTX", v: "Order, billing and identity in view before it replies" },
      { k: "ESC", v: "Hands to a person with a written summary" },
    ],
    mockTitle: "Live conversation", mockMeta: "web · 04:12",
    lines: [
      "Customer opens with a billing question at 2am.",
      "Leri reads the account, checks the policy, answers.",
      "Refund issued inside the same conversation.",
      "Transcript and actions land in your helpdesk.",
    ],
    tags: ["web", "in-app", "whatsapp"],
  },
  {
    short: "Email", n: "02 / 03", title: "Email",
    body: "Long, messy threads with three questions buried in them. Leri answers all three, in your house style, with the attachments the customer forgot to read.",
    points: [
      { k: "THR", v: "Reads the whole thread, not the last message" },
      { k: "TON", v: "Matches your voice and signature blocks" },
      { k: "SLA", v: "First reply in under two minutes, day or night" },
    ],
    mockTitle: "Thread · 6 messages", mockMeta: "inbox · queued 0",
    lines: [
      "Three separate asks in one 400-word email.",
      "Leri splits them, answers each, cites the policy.",
      "Drafts for review, or sends outright — your call.",
      "Anything unresolved routes to the right team.",
    ],
    tags: ["gmail", "outlook", "zendesk"],
  },
  {
    short: "Voice", n: "03 / 03", title: "Voice",
    body: "Picks up on the first ring, in a voice that doesn't announce itself as a machine. Interruptions, accents and half-sentences included.",
    points: [
      { k: "LAT", v: "Sub-500ms response, barge-in supported" },
      { k: "LNG", v: "34 languages on the same policy set" },
      { k: "HND", v: "Warm transfer with full context attached" },
    ],
    mockTitle: "Call · inbound", mockMeta: "voice · 00:47",
    lines: [
      "Caller interrupts mid-sentence. Leri yields.",
      "Verifies identity by voice and account detail.",
      "Books the callback, sends the confirmation SMS.",
      "Recording, transcript and actions logged together.",
    ],
    tags: ["twilio", "genesys", "sip"],
  },
];

export const features = [
  { n: "01", title: "Chat, email and voice", body: "One agent, one set of policies, across every channel your customers reach for. Context follows them between channels.", ink: ["M4 20a16 16 0 0 1 16-16", "M4 20a10.5 10.5 0 0 1 10.5-10.5"], acc: ["M4 20a5 5 0 0 1 5-5", "M4 20h.01"] },
  { n: "02", title: "Takes real action", body: "Refunds, address changes, card freezes, rebookings. Each action is written into your systems and recorded against the conversation.", ink: ["M3 12h11", "M19 4v16"], acc: ["M10.5 8.5 14 12l-3.5 3.5"] },
  { n: "03", title: "Knows when to stop", body: "Confidence thresholds and topic rules decide what escalates. Handoffs arrive with a summary a human can act on.", ink: ["M3 12h6", "M15 12h6"], acc: ["M12 5v14"] },
  { n: "04", title: "Speaks 34 languages", body: "Fluently, in your brand's voice, without a separate agent or knowledge base per market.", ink: ["M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18", "M3 12h18"], acc: ["M12 3c3.2 4.6 3.2 13.4 0 18"] },
  { n: "05", title: "Agent assist", body: "For everything it doesn't resolve, it drafts the reply and pulls the account context your team would have gone looking for.", ink: ["M4 7h16", "M4 12h11"], acc: ["M4 17h6"] },
  { n: "06", title: "Improves on a schedule", body: "Weekly reviews surface the topics it's failing and the policy gaps behind them, with fixes you approve or reject.", ink: ["M3 20h18", "M3 16.5l5-4.5 4 3"], acc: ["M12 15l8-8"] },
];

export const consoleStats = [
  { label: "Resolved", value: "71.4%" },
  { label: "Escalated", value: "22.1%" },
  { label: "CSAT", value: "4.7" },
];

export const bars = ["38%", "52%", "44%", "61%", "58%", "72%", "66%", "80%", "74%", "88%", "82%", "94%", "90%", "100%"];

export const rows = [
  { id: "#48213", topic: "Unrecognised charge", outcome: "Dispute filed" },
  { id: "#48214", topic: "Late delivery", outcome: "Reshipped" },
  { id: "#48216", topic: "Plan downgrade", outcome: "Resolved" },
  { id: "#48219", topic: "Refund policy", outcome: "Escalated" },
];

export const proof = [
  { n: "01", title: "Replay your own history", body: "Point Leri at past conversations. It answers them offline, and you read its transcripts next to what actually happened." },
  { n: "02", title: "Graded, not vibed", body: "Each replayed answer is scored for resolution, policy adherence and tone, so the decision rests on numbers from your data." },
  { n: "03", title: "Start at five percent", body: "First live traffic is one topic and a slice of volume, with a rollback that takes one click." },
];

export const integrations = ["Zendesk", "Salesforce", "Intercom", "Freshdesk", "Shopify", "Stripe", "Twilio", "Genesys", "Snowflake", "Okta", "Slack", "Custom API"];

export const dataTerms = [
  { title: "Your data stays yours", body: "Nothing you send is used to train shared models, and retention windows are set by you." },
  { title: "Redaction before inference", body: "Sensitive fields are masked before a prompt is built, and are not written to logs." },
  { title: "Scoped credentials", body: "Every connector runs with least-privilege access you grant, and can revoke without a ticket." },
  { title: "Exportable audit trail", body: "What the agent did, the policy that authorised it and who approved it, streamed to your own tooling." },
];

export const pricingPoints = [
  "No per-seat licences, and no charge for a conversation we hand to your team.",
  "Modelled against your own historical volume before anything is signed.",
  "Pilot scope first, then a rate you can hold us to.",
];
