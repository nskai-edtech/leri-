export type IndustryContent = {
  slug: string;
  name: string;
  title: string;
  intro: string;
  chat: {
    channel: string;
    meta: string;
    messages: string[];
    tags: string[];
  };
  image: { src: string; alt: string; caption: string };
  workflows: { text: string; tag: string }[];
  limits: { title: string; body: string }[];
  readsWrites: string[];
};

export const industries: IndustryContent[] = [
  {
    slug: "retail",
    name: "Retail",
    title: "Where is it, and can I change it",
    intro:
      "Order status, address edits before dispatch, returns, exchanges and refunds — with the carrier record and the inventory both in view before it answers.",
    chat: {
      channel: "Chat · web widget",
      meta: "web · 00:31",
      messages: [
        "Tracking says delivered, the parcel is not here.",
        "Carrier record read, marked delivered two days ago.",
        "Policy allows a reship under $250 without approval.",
        "Reship created, customer told when it arrives.",
      ],
      tags: ["shopify", "zendesk", "stripe"],
    },
    image: {
      src: "https://images.pexels.com/photos/29126440/pexels-photo-29126440.jpeg?auto=compress&cs=tinysrgb&w=1800",
      alt: "A facade of repeating vertical bays",
      caption: "Orders, returns and refunds",
    },
    workflows: [
      { text: "“Parcel says delivered, isn't here”", tag: "reship_order" },
      { text: "Wrong size, wants an exchange", tag: "start_return" },
      { text: "Change the delivery address", tag: "change_address" },
      { text: "Refund asked for outside the window", tag: "check_policy" },
      { text: "Promo code didn't apply", tag: "apply_credit" },
    ],
    limits: [
      { title: "Refund ceilings", body: "Set per topic and per amount. Above the ceiling it asks a person rather than deciding." },
      { title: "Stock checked first", body: "An exchange is never promised before inventory confirms it." },
      { title: "Saved cards are off limits", body: "Anything touching stored payment details goes to your team." },
    ],
    readsWrites: ["shopify", "zendesk", "stripe", "carrier api"],
  },
  {
    slug: "travel",
    name: "Travel & hospitality",
    title: "Disruption at three in the morning",
    intro:
      "Cancellations, rebookings, seat and room changes and compensation questions, read straight from the fare rules rather than a summary of them.",
    chat: {
      channel: "Call · inbound",
      meta: "voice · 01:12",
      messages: [
        "Flight cancelled, caller needs the next one out.",
        "Fare rules read; two eligible options offered.",
        "Rebooked, seat kept, confirmation sent.",
        "Compensation eligibility explained with the clause.",
      ],
      tags: ["amadeus", "twilio", "zendesk"],
    },
    image: {
      src: "https://images.pexels.com/photos/3521944/pexels-photo-3521944.jpeg?auto=compress&cs=tinysrgb&w=1800",
      alt: "Wind ridges running to the horizon",
      caption: "Disruption and rebooking",
    },
    workflows: [
      { text: "Flight cancelled, needs the next one", tag: "rebook_flight" },
      { text: "Asks about compensation eligibility", tag: "check_policy" },
      { text: "Add a checked bag to a booking", tag: "amend_booking" },
      { text: "Change a room or a date", tag: "modify_reservation" },
      { text: "Group or special assistance", tag: "escalate" },
    ],
    limits: [
      { title: "Rules, not summaries", body: "Eligibility is read from the fare or rate rules that apply to that booking." },
      { title: "Groups always escalate", body: "Group bookings and special assistance go to a person, every time." },
      { title: "No involuntary downgrade", body: "Anything that worsens what the customer paid for needs a person." },
    ],
    readsWrites: ["amadeus", "sabre", "twilio", "zendesk"],
  },
  {
    slug: "technology",
    name: "Technology",
    title: "Support that reads the account before it answers",
    intro:
      "Lockouts, plan and seat changes, billing questions and incident status — answered with the account record and the status page in front of it.",
    chat: {
      channel: "Chat · in-app",
      meta: "app · 00:24",
      messages: [
        "Locked out after the SSO change this morning.",
        "Identity verified, provider config read.",
        "Known incident matched; workaround given.",
        "Ticket linked to the incident for the update.",
      ],
      tags: ["okta", "intercom", "statuspage"],
    },
    image: {
      src: "https://images.pexels.com/photos/464315/pexels-photo-464315.jpeg?auto=compress&cs=tinysrgb&w=1800",
      alt: "Geometric glass panels in sequence",
      caption: "Accounts, plans and incidents",
    },
    workflows: [
      { text: "Locked out after an SSO change", tag: "verify_identity" },
      { text: "Add or remove seats", tag: "update_subscription" },
      { text: "Webhook stopped firing", tag: "check_status" },
      { text: "Invoice higher than expected", tag: "explain_charge" },
      { text: "Reproducible bug", tag: "route_to_engineering" },
    ],
    limits: [
      { title: "No changes to code or data", body: "It reads. Writes are limited to the account actions you declared." },
      { title: "Security reports skip the agent", body: "Anything that looks like a vulnerability report goes straight to a person." },
      { title: "Incidents are quoted, not guessed", body: "Status comes from your incident source, or it says it doesn't know." },
    ],
    readsWrites: ["okta", "stripe", "intercom", "statuspage"],
  },
  {
    slug: "financial-services",
    name: "Financial services",
    title: "Money questions, answered inside the rules",
    intro:
      "Disputes, frozen cards, failed payments and statement queries — with identity verified and dual control in place before anything touches a balance.",
    chat: {
      channel: "Chat · mobile app",
      meta: "app · 00:39",
      messages: [
        "Customer flags a charge they don't recognise.",
        "Identity verified; merchant and history read.",
        "Dispute filed under the policy, limits respected.",
        "Card frozen at the customer's request, confirmed.",
      ],
      tags: ["core banking", "okta", "siem"],
    },
    image: {
      src: "https://images.pexels.com/photos/34492972/pexels-photo-34492972.jpeg?auto=compress&cs=tinysrgb&w=1800",
      alt: "Structural beams crossing at a joint",
      caption: "Disputes and payments",
    },
    workflows: [
      { text: "“I don't recognise this charge”", tag: "file_dispute" },
      { text: "Lost card, needs it stopped tonight", tag: "freeze_card" },
      { text: "Direct debit failed twice", tag: "retry_payment" },
      { text: "Copy of a statement", tag: "send_statement" },
      { text: "Suspected fraud on the account", tag: "escalate" },
    ],
    limits: [
      { title: "Identity first", body: "Nothing moves before the customer is verified to the standard you set." },
      { title: "Dual control", body: "Above your threshold, an action needs a second approval from your team." },
      { title: "Fraud is never automated", body: "Suspected fraud goes to a person with the trail attached." },
    ],
    readsWrites: ["core banking", "stripe", "okta", "siem"],
  },
  {
    slug: "health",
    name: "Health & wellness",
    title: "Careful by default, escalating early",
    intro:
      "Appointments, coverage questions, claim status and billing. Clinical questions are refused and routed, always, with the reason recorded.",
    chat: {
      channel: "Chat · patient portal",
      meta: "web · 00:28",
      messages: [
        "Asks to move Thursday's appointment.",
        "Eligibility and calendar read; two slots offered.",
        "Rebooked, reminder updated, note written back.",
        "Follow-up clinical question routed to a clinician.",
      ],
      tags: ["ehr", "scheduling", "redaction"],
    },
    image: {
      src: "https://images.pexels.com/photos/33377261/pexels-photo-33377261.jpeg?auto=compress&cs=tinysrgb&w=1800",
      alt: "An arched stone passage, repeated",
      caption: "Appointments and coverage",
    },
    workflows: [
      { text: "Reschedule an appointment", tag: "book_slot" },
      { text: "Is this procedure covered", tag: "check_coverage" },
      { text: "Claim status after six weeks", tag: "claim_status" },
      { text: "Explain a charge on an invoice", tag: "explain_charge" },
      { text: "Anything clinical", tag: "route_to_clinician" },
    ],
    limits: [
      { title: "No clinical advice", body: "Clinical questions are refused and routed, and the refusal is recorded." },
      { title: "Redaction before inference", body: "Identifiers are masked before a prompt is built, and are not written to logs." },
      { title: "Read-only unless granted", body: "Write access is turned on per action, per limit, by you." },
    ],
    readsWrites: ["ehr", "scheduling", "billing", "redaction"],
  },
  {
    slug: "media",
    name: "Media",
    title: "Subscriptions, access and the paywall",
    intro:
      "Sign-in trouble, plan changes, double charges and playback problems — resolved without turning a cancellation into an argument.",
    chat: {
      channel: "Chat · web",
      meta: "web · 00:22",
      messages: [
        "Signed in but the app says no subscription.",
        "Entitlement read; payment retried last night.",
        "Access restored and explained in one message.",
        "Cancellation request honoured without a detour.",
      ],
      tags: ["zuora", "stripe", "entitlements"],
    },
    image: {
      src: "https://images.pexels.com/photos/6220941/pexels-photo-6220941.jpeg?auto=compress&cs=tinysrgb&w=1800",
      alt: "A curved facade of lit apertures",
      caption: "Subscriptions and access",
    },
    workflows: [
      { text: "Can't sign in on the app", tag: "verify_identity" },
      { text: "Cancel or pause the subscription", tag: "change_plan" },
      { text: "Charged twice this month", tag: "issue_refund" },
      { text: "Video won't play on one device", tag: "check_entitlement" },
      { text: "Asks what plans cost", tag: "explain_plans" },
    ],
    limits: [
      { title: "Cancellation is never delayed", body: "No retention detour unless you've explicitly allowed an offer." },
      { title: "Offers only where allowed", body: "Any discount comes from a list your team approved, with a ceiling." },
      { title: "No price changes", body: "Nothing that changes what a customer pays happens without a person." },
    ],
    readsWrites: ["zuora", "stripe", "braze", "entitlements"],
  },
  {
    slug: "telecommunications",
    name: "Telecommunications",
    title: "Outages, upgrades and the bill",
    intro:
      "Plan changes, roaming, device swaps and fault reports, with live outage data read before it tells a customer anything.",
    chat: {
      channel: "Call · inbound",
      meta: "voice · 00:51",
      messages: [
        "No broadband at home since this morning.",
        "Outage feed read: known fault, ETA available.",
        "Diagnostics run; no truck roll needed yet.",
        "Credit applied under the limit, SMS confirmed.",
      ],
      tags: ["oss/bss", "twilio", "outage feed"],
    },
    image: {
      src: "https://images.pexels.com/photos/34968671/pexels-photo-34968671.jpeg?auto=compress&cs=tinysrgb&w=1800",
      alt: "A spiral structure rising",
      caption: "Outages and upgrades",
    },
    workflows: [
      { text: "No service at home", tag: "check_outage" },
      { text: "Bill higher than usual", tag: "explain_charge" },
      { text: "Upgrade or change plan", tag: "change_plan" },
      { text: "Roaming before travelling", tag: "enable_roaming" },
      { text: "Report a fault", tag: "run_diagnostics" },
    ],
    limits: [
      { title: "Diagnostics before dispatch", body: "No engineer visit is offered until the line has been tested." },
      { title: "Contract changes under limits", body: "Term and price changes stay inside the ceilings you set." },
      { title: "Outage data, not guesses", body: "If the feed is silent, it says so instead of speculating." },
    ],
    readsWrites: ["oss/bss", "stripe", "twilio", "outage feed"],
  },
];

export const industryBySlug = Object.fromEntries(industries.map((i) => [i.slug, i]));
