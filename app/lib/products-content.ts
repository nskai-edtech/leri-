export type ChatPanel = {
  kind: "chat";
  header: { label: string; meta: string };
  messages: string[];
  tags: string[];
};

export type LogPanel = {
  kind: "log";
  title: string;
  rows: { n: string; text: string }[];
  tags: string[];
};

export type ComparePanel = {
  kind: "compare";
  rows: { label: string; value: string; badge: string }[];
  footnote: string;
};

export type StatusPanel = {
  kind: "status";
  title: string;
  rows: { label: string; badge: string }[];
};

export type ProductPanel = ChatPanel | LogPanel | ComparePanel | StatusPanel;

export type ProductContent = {
  slug: string;
  group: string;
  name: string;
  title: string;
  intro: string;
  panel: ProductPanel;
  image: { src: string; alt: string; caption: string };
  caps: { t: string; b: string }[];
  how: { n: string; t: string; b: string }[];
  limits: { t: string; b: string }[];
};

export const products: ProductContent[] = [
  {
    slug: "voice",
    group: "Channels",
    name: "Voice",
    title: "Answers the phone without announcing itself as a machine",
    intro:
      "Inbound calls picked up on the first ring, with interruptions, accents and half-sentences handled, and a warm transfer the moment a person should take over.",
    panel: {
      kind: "chat",
      header: { label: "Call · inbound", meta: "voice · 00:47" },
      messages: [
        "Caller: my card was declined at the till.",
        "Identity verified from the number and date of birth.",
        "Block explained, temporary limit raised under policy.",
        "Offer to transfer accepted — warm handover with context.",
      ],
      tags: ["sip", "barge-in", "transcript"],
    },
    image: {
      src: "https://images.pexels.com/photos/9667518/pexels-photo-9667518.jpeg?auto=compress&cs=tinysrgb&w=1800",
      alt: "A single ripple spreading across still water",
      caption: "Inbound calls, answered",
    },
    caps: [
      { t: "Sub-second turns", b: "The response budget is treated as a product requirement, not a benchmark. Barge-in is supported, so a customer can cut in mid-sentence." },
      { t: "Reads the account first", b: "Identity is verified and the record is open before the agent commits to an answer, so it isn't guessing out loud." },
      { t: "Warm transfer", b: "When it hands over, the person receives a written summary, the verified identity and every action already taken." },
    ],
    how: [
      { n: "01", t: "Number routes in", b: "Point a SIP trunk or a number at Leri, per queue or per line." },
      { n: "02", t: "Policy applies", b: "The same policy set as chat and email, with voice-specific limits where you want them." },
      { n: "03", t: "Recording and transcript", b: "Both land in the audit trail, aligned to the actions taken during the call." },
    ],
    limits: [
      { t: "Escalation is explicit", b: "Topics you mark as out of scope never get an attempt; the call is routed and the reason is recorded." },
      { t: "Nothing silent", b: "Every call has a transcript, a policy trail and a replay you can run again." },
    ],
  },
  {
    slug: "chat",
    group: "Channels",
    name: "Chat",
    title: "On-brand replies, inside the policy you wrote",
    intro:
      "The channel most customers reach for first, answered in seconds with the account, the order and the policy in view before a word is sent.",
    panel: {
      kind: "chat",
      header: { label: "Chat · web widget", meta: "web · 00:31" },
      messages: [
        "Tracking says delivered, the parcel is not here.",
        "Carrier record read, marked delivered two days ago.",
        "Policy allows a reship under $250 without approval.",
      ],
      tags: ["shopify", "zendesk", "stripe"],
    },
    image: {
      src: "https://images.pexels.com/photos/9302825/pexels-photo-9302825.jpeg?auto=compress&cs=tinysrgb&w=1800",
      alt: "Two sets of ripples meeting on a water surface",
      caption: "Live chat, on your policies",
    },
    caps: [
      { t: "Answers, not deflection", b: "It resolves the request or hands it over. There is no third state where the customer is sent back to the help centre." },
      { t: "Your voice", b: "Tone, formality and phrasing are set from your existing replies rather than a personality prompt." },
      { t: "Context carries", b: "A conversation that started on chat and continues by email keeps its history and its verified identity." },
    ],
    how: [
      { n: "01", t: "Widget or existing helpdesk", b: "Run it in your own widget, or inside the helpdesk your team already uses." },
      { n: "02", t: "Scope one topic", b: "Start with a single topic and a slice of traffic, with a rollback that takes one click." },
      { n: "03", t: "Widen on evidence", b: "Each topic widens when its graded results say it should, not on a schedule." },
    ],
    limits: [
      { t: "Confidence thresholds", b: "Below the threshold you set, the conversation goes to a person with the draft attached." },
      { t: "Cited answers", b: "Policy answers point at the clause they came from, visible to your team in the console." },
    ],
  },
  {
    slug: "email",
    group: "Channels",
    name: "Email",
    title: "Reads the whole thread, not the last message",
    intro:
      "Long, messy threads with three questions buried in them, answered in one reply, with the attachment the customer skipped.",
    panel: {
      kind: "chat",
      header: { label: "Thread · 6 messages", meta: "inbox · draft" },
      messages: [
        "Three questions in one thread, each answered in order.",
        "Attachment from the second message read, not asked for again.",
        "Refund window answered with the clause quoted.",
      ],
      tags: ["gmail", "outlook", "zendesk"],
    },
    image: {
      src: "https://images.pexels.com/photos/48828/pexels-photo-48828.jpeg?auto=compress&cs=tinysrgb&w=1800",
      alt: "Daylight entering a room across a plaster wall",
      caption: "Email threads, resolved",
    },
    caps: [
      { t: "Multi-question replies", b: "It separates the questions in a thread, answers each, and says plainly which it can't." },
      { t: "Draft or send", b: "Per topic, choose whether replies go out directly or wait in your queue for one click." },
      { t: "Signature and format", b: "House style, signature blocks and the formatting your customers already recognise." },
    ],
    how: [
      { n: "01", t: "Connect the inbox", b: "Gmail, Outlook or the helpdesk queue, with scoped credentials you can revoke." },
      { n: "02", t: "Set the mode", b: "Draft-only to start. Sending is a per-topic decision, not a global switch." },
      { n: "03", t: "Route the rest", b: "Anything unresolved lands with the right team, threaded and summarised." },
    ],
    limits: [
      { t: "No silent sends", b: "Every outbound reply is logged with the policy and the draft history behind it." },
      { t: "Attachment aware", b: "It reads what was attached before it asks the customer to send it again." },
    ],
  },
  {
    slug: "assist",
    group: "Build",
    name: "Assist",
    title: "The draft is already there when a person picks it up",
    intro:
      "For everything the agent doesn't resolve, Assist writes the reply, pulls the account context and shows the policy it would have relied on.",
    panel: {
      kind: "log",
      title: "Escalation handed over",
      rows: [
        { n: "01", text: "escalation_received · confidence below threshold" },
        { n: "02", text: "draft_written · reply proposed, not sent" },
        { n: "03", text: "context_attached · order, billing, identity" },
        { n: "04", text: "policy_cited · clause the draft relies on" },
      ],
      tags: ["accept", "edit", "reject"],
    },
    image: {
      src: "https://images.pexels.com/photos/16408400/pexels-photo-16408400.jpeg?auto=compress&cs=tinysrgb&w=1800",
      alt: "Soft repeated shadows falling on warm concrete",
      caption: "Drafts and context for your team",
    },
    caps: [
      { t: "Draft with reasoning", b: "Your team sees the proposed reply and the clause behind it, so accepting is a judgement, not a leap." },
      { t: "Context gathered", b: "Order, billing and identity are collected before the agent hands over, not after." },
      { t: "Edits teach", b: "What your team changes in a draft becomes evidence in the weekly review of what to fix." },
    ],
    how: [
      { n: "01", t: "Sits in the helpdesk", b: "Assist appears where your team already works, not in a second tool." },
      { n: "02", t: "Draft on arrival", b: "Every escalation lands with a draft, a summary and the actions already taken." },
      { n: "03", t: "Accept, edit, reject", b: "Each of the three is recorded, and each one is a signal." },
    ],
    limits: [
      { t: "Never sends for a person", b: "Assist proposes. The person handling the conversation decides." },
      { t: "Same limits", b: "Actions offered in a draft respect the permissions the agent itself runs under." },
    ],
  },
  {
    slug: "playbooks",
    group: "Build",
    name: "Playbooks",
    title: "Workflows an agent can follow, and you can read",
    intro:
      "A playbook is the procedure your team already follows, written down in a form the agent executes and an auditor can check.",
    panel: {
      kind: "log",
      title: "Playbook · refund request",
      rows: [
        { n: "01", text: "verify_identity" },
        { n: "02", text: "lookup_order" },
        { n: "03", text: "check_policy · refund window" },
        { n: "04", text: "issue_refund ≤ $250" },
        { n: "05", text: "confirm_to_customer" },
      ],
      tags: ["version 14", "replayed", "reversible"],
    },
    image: {
      src: "https://images.pexels.com/photos/29309722/pexels-photo-29309722.jpeg?auto=compress&cs=tinysrgb&w=1800",
      alt: "A curved concrete stair, one clear path",
      caption: "Workflows an agent can follow",
    },
    caps: [
      { t: "Steps and conditions", b: "Verify, look up, decide, act, confirm. Each step names the system it touches and the limit it runs under." },
      { t: "Versioned", b: "Playbooks are versioned like code. Any conversation can be traced to the version that ran it." },
      { t: "Written with you", b: "The first drafts come out of your macros and past tickets, then your team edits them directly." },
    ],
    how: [
      { n: "01", t: "Draft from your material", b: "Macros, help centre articles and past resolutions become a first playbook." },
      { n: "02", t: "Review line by line", b: "Your team edits the steps, the thresholds and what is out of scope." },
      { n: "03", t: "Replay before live", b: "The playbook runs against past conversations before it sees a customer." },
    ],
    limits: [
      { t: "No implicit actions", b: "If a step isn't in the playbook, the agent can't take it." },
      { t: "Change is reviewable", b: "Every edit is attributed, diffed and reversible." },
    ],
  },
  {
    slug: "integrations",
    group: "Build",
    name: "Integrations",
    title: "Tool connectors with credentials you can revoke",
    intro:
      "Read and write access to the systems where the work actually happens — through connectors we maintain, or your own API.",
    panel: {
      kind: "log",
      title: "Connectors · declared scope",
      rows: [
        { n: "01", text: "zendesk · read, write comment" },
        { n: "02", text: "stripe · read, refund ≤ limit" },
        { n: "03", text: "okta · verify identity only" },
        { n: "04", text: "your API · declared actions only" },
      ],
      tags: ["least privilege", "revocable"],
    },
    image: {
      src: "https://images.pexels.com/photos/34492972/pexels-photo-34492972.jpeg?auto=compress&cs=tinysrgb&w=1800",
      alt: "Structural beams crossing at a joint",
      caption: "Connectors with scoped credentials",
    },
    caps: [
      { t: "Least privilege", b: "Each connector runs with the narrowest scope that lets it do its job, granted by you." },
      { t: "Read before write", b: "Most deployments start read-only. Write access is turned on per action, per limit." },
      { t: "Your own API", b: "Where no connector exists, the agent calls your endpoint under the same permission model." },
    ],
    how: [
      { n: "01", t: "Connect", b: "Helpdesk, order system, billing and identity provider, one at a time." },
      { n: "02", t: "Declare actions", b: "Each callable action gets a name, arguments and a ceiling." },
      { n: "03", t: "Watch the log", b: "Every call is recorded with its arguments, its result and the policy that allowed it." },
    ],
    limits: [
      { t: "Revocable in place", b: "Pull a credential and the agent loses that capability immediately, not at the next deploy." },
      { t: "No shadow access", b: "The agent cannot reach a system that isn't declared as a connector." },
    ],
  },
  {
    slug: "experiments",
    group: "Optimize",
    name: "Experiments",
    title: "A/B tests on live traffic, with a rollback",
    intro:
      "Change a prompt, a threshold or a playbook step on a share of traffic, and read the result against the version it replaced.",
    panel: {
      kind: "compare",
      rows: [
        { label: "Baseline", value: "Policy set v12, all traffic", badge: "running" },
        { label: "Variant", value: "Policy set v13, 5% of one topic", badge: "graded" },
        { label: "Stop condition", value: "Escalation rate above baseline", badge: "armed" },
      ],
      footnote: "Guardrails never vary between arms. A variant that breaches its stop condition is pulled without waiting for a human.",
    },
    image: {
      src: "https://images.pexels.com/photos/29070625/pexels-photo-29070625.jpeg?auto=compress&cs=tinysrgb&w=1800",
      alt: "One water surface, two distinct tones",
      caption: "Live tests with a rollback",
    },
    caps: [
      { t: "Split by topic or share", b: "Run the variant on one topic, one language or five percent of volume." },
      { t: "Graded, not eyeballed", b: "Resolution, policy adherence, escalation rate and tone, scored on both arms." },
      { t: "One-click revert", b: "A variant that loses is removed from traffic without a deployment." },
    ],
    how: [
      { n: "01", t: "Define the change", b: "One variable at a time, against a named baseline." },
      { n: "02", t: "Set the exposure", b: "Traffic share and stop conditions are set before the test starts." },
      { n: "03", t: "Read and decide", b: "The result is written up with the sample size it rests on." },
    ],
    limits: [
      { t: "Guardrails don't vary", b: "Limits, redaction and escalation rules are never part of an experiment." },
      { t: "Automatic stop", b: "A variant that breaches its stop condition is pulled without waiting for a human." },
    ],
  },
  {
    slug: "testing",
    group: "Optimize",
    name: "Testing & QA",
    title: "Simulations at scale, before a customer is involved",
    intro:
      "Run thousands of conversations against a candidate change offline, and read the transcripts next to what actually happened.",
    panel: {
      kind: "compare",
      rows: [
        { label: "Corpus", value: "One topic, ninety days of history", badge: "selected" },
        { label: "Run", value: "Offline, writes mocked", badge: "complete" },
        { label: "Regression suite", value: "Conversations that must keep passing", badge: "blocking" },
      ],
      footnote: "A candidate that regresses the suite cannot be promoted to live traffic.",
    },
    image: {
      src: "https://images.pexels.com/photos/30726054/pexels-photo-30726054.jpeg?auto=compress&cs=tinysrgb&w=1800",
      alt: "A stairwell repeating from above",
      caption: "Simulations before release",
    },
    caps: [
      { t: "Replay your history", b: "Past conversations are re-run against the new version, with the original outcome for comparison." },
      { t: "Synthetic edge cases", b: "Generated variants cover the awkward paths your history doesn't contain yet." },
      { t: "Regression suite", b: "Conversations you care about become fixed tests that must keep passing." },
    ],
    how: [
      { n: "01", t: "Pick a corpus", b: "A topic, a date range or a hand-picked set of hard conversations." },
      { n: "02", t: "Run offline", b: "No customer contact, no writes to your systems, full transcripts out." },
      { n: "03", t: "Compare", b: "Scores and diffs per conversation, with the failures listed first." },
    ],
    limits: [
      { t: "Sandboxed writes", b: "Simulations run against mocks, so nothing reaches a production system." },
      { t: "Failures block", b: "A candidate that regresses the suite cannot be promoted to live traffic." },
    ],
  },
  {
    slug: "insights",
    group: "Scale",
    name: "Insights & reporting",
    title: "What your customers keep asking for, in their words",
    intro:
      "Volume, resolution and escalation by topic, alongside the phrasing customers actually use — the part support teams usually lose.",
    panel: {
      kind: "status",
      title: "Topics · this week",
      rows: [
        { label: "Order status", badge: "rising" },
        { label: "Refund after 30 days", badge: "policy gap" },
        { label: "Address change", badge: "resolved" },
        { label: "Damaged on arrival", badge: "escalates" },
      ],
    },
    image: {
      src: "https://images.pexels.com/photos/14070660/pexels-photo-14070660.jpeg?auto=compress&cs=tinysrgb&w=1800",
      alt: "Weathered plaster under raking light",
      caption: "Reporting on what happened",
    },
    caps: [
      { t: "Topic clustering", b: "Conversations group themselves, so a rising problem shows up before someone files it." },
      { t: "Reasons for escalation", b: "Each handover carries a reason, so the report says what to fix rather than how often you failed." },
      { t: "Exportable", b: "Every figure comes with the conversation list behind it, and streams to your own warehouse." },
    ],
    how: [
      { n: "01", t: "Nothing to instrument", b: "Reporting comes from the same trail the agent already writes." },
      { n: "02", t: "Slice it", b: "By topic, channel, language, playbook version or experiment arm." },
      { n: "03", t: "Send it on", b: "Scheduled digests, or a stream into the warehouse you already query." },
    ],
    limits: [
      { t: "Redacted by default", b: "Reports are built on masked fields; raw values stay out of the analytics path." },
      { t: "Numbers you can open", b: "No figure appears without the conversations that produced it." },
    ],
  },
  {
    slug: "monitor",
    group: "Scale",
    name: "Monitor",
    title: "Always-on QA, not a sample someone finds time for",
    intro:
      "Every conversation is scored as it closes, and the ones that look wrong are surfaced to your team the same day.",
    panel: {
      kind: "status",
      title: "Review queue",
      rows: [
        { label: "Refund explained, clause cited", badge: "policy ok" },
        { label: "Handed over three turns late", badge: "escalated late" },
        { label: "Reply read as curt", badge: "tone flagged" },
        { label: "Refused above limit, correctly", badge: "limit held" },
      ],
    },
    image: {
      src: "https://images.pexels.com/photos/315938/pexels-photo-315938.jpeg?auto=compress&cs=tinysrgb&w=1800",
      alt: "Long-exposure light continuing through the night",
      caption: "Continuous quality checks",
    },
    caps: [
      { t: "Scored on close", b: "Resolution, policy adherence, tone and whether it should have escalated earlier." },
      { t: "Alerts with a threshold", b: "A drop on a topic, a spike in escalations or a limit refusal pattern raises an alert you configured." },
      { t: "Queue for review", b: "Flagged conversations arrive as a review queue with the transcript and the policy trail attached." },
    ],
    how: [
      { n: "01", t: "Scoring runs by default", b: "Nothing to enable per topic; every conversation is graded." },
      { n: "02", t: "Set the thresholds", b: "You decide what counts as bad enough to interrupt someone." },
      { n: "03", t: "Fix at the source", b: "Findings link to the playbook step or policy clause behind them." },
    ],
    limits: [
      { t: "Independent of the answer", b: "Grading runs separately from the agent that produced the reply." },
      { t: "Nothing is unreviewable", b: "Any conversation can be replayed exactly as it ran, months later." },
    ],
  },
  {
    slug: "suggestions",
    group: "Scale",
    name: "Suggestions",
    title: "The gaps in your knowledge, written up as edits",
    intro:
      "Where the agent had to escalate for lack of a documented answer, Suggestions drafts the missing article or playbook step for your approval.",
    panel: {
      kind: "status",
      title: "Suggested edits",
      rows: [
        { label: "Refunds after the 30-day window", badge: "draft ready" },
        { label: "Partial cancellations", badge: "draft ready" },
        { label: "Promo stacking rules", badge: "needs an owner" },
        { label: "Bag fees", badge: "approved · v9" },
      ],
    },
    image: {
      src: "https://images.pexels.com/photos/3989906/pexels-photo-3989906.jpeg?auto=compress&cs=tinysrgb&w=1800",
      alt: "Light moving over dark water",
      caption: "Knowledge kept current",
    },
    caps: [
      { t: "Gap detection", b: "Repeated escalations on the same question become a single suggestion, with the evidence attached." },
      { t: "Drafted, not decided", b: "Each suggestion is a proposed edit. Nothing enters the policy set without your approval." },
      { t: "Straight into review", b: "Approved suggestions become a versioned change to the playbook or the article, attributed to whoever accepted it." },
    ],
    how: [
      { n: "01", t: "Collected weekly", b: "Suggestions arrive as a short list, ordered by how much traffic they'd resolve." },
      { n: "02", t: "Approve or reject", b: "Rejection is a signal too, and stops the same suggestion returning." },
      { n: "03", t: "Live on the next version", b: "Approved edits ship as a normal versioned change, replayed before they go live." },
    ],
    limits: [
      { t: "No self-editing", b: "The agent cannot change its own policy set. Every edit needs a person." },
      { t: "Sourced", b: "Each suggestion names the conversations that motivated it." },
    ],
  },
];

export const productBySlug = Object.fromEntries(products.map((p) => [p.slug, p]));
