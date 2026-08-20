import type { Metadata } from "next";
import Link from "next/link";
import { c } from "@/lib/tokens";

export const metadata: Metadata = { title: "Product overview — Leri" };

const shell = { maxWidth: 1240, margin: "0 auto" } as const;

const groups = [
  {
    name: "Channels",
    src: "https://images.pexels.com/photos/9667518/pexels-photo-9667518.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "A single ripple spreading",
    blurb: "Where customers reach you, answered on one policy set.",
    items: [
      { slug: "voice", name: "Voice", short: "Human-like conversation on the phone" },
      { slug: "chat", name: "Chat", short: "Safe, on-brand replies" },
      { slug: "email", name: "Email", short: "Whole threads, resolved in one reply" },
    ],
  },
  {
    name: "Build",
    src: "https://images.pexels.com/photos/29309722/pexels-photo-29309722.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "A curved concrete stair",
    blurb: "How the agent is given hands, and the procedure it follows.",
    items: [
      { slug: "assist", name: "Assist", short: "Drafts and context for your team" },
      { slug: "playbooks", name: "Playbooks", short: "Workflows an agent can follow" },
      { slug: "integrations", name: "Integrations", short: "Connectors with scoped credentials" },
    ],
  },
  {
    name: "Optimize",
    src: "https://images.pexels.com/photos/34492972/pexels-photo-34492972.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "Structural beams crossing at a joint",
    blurb: "How a change is proven before and after it meets traffic.",
    items: [
      { slug: "experiments", name: "Experiments", short: "Live A/B testing with a rollback" },
      { slug: "testing", name: "Testing & QA", short: "Simulations at scale, offline" },
    ],
  },
  {
    name: "Scale",
    src: "https://images.pexels.com/photos/30726054/pexels-photo-30726054.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "A stairwell repeating from above",
    blurb: "What you learn once it's running, and how it stays honest.",
    items: [
      { slug: "insights", name: "Insights & reporting", short: "Voice of the customer, with the receipts" },
      { slug: "monitor", name: "Monitor", short: "Always-on QA" },
      { slug: "suggestions", name: "Suggestions", short: "Knowledge gaps, drafted as edits" },
    ],
  },
];

export default function Page() {
  return (
    <main>
      <section style={{ borderBottom: `1px solid ${c.rule}` }}>
        <div style={{ ...shell, padding: "clamp(48px,6vw,92px) clamp(20px,4vw,40px) clamp(36px,4vw,56px)" }}>
          <p className="mono-label" style={{ fontSize: 10.5, letterSpacing: ".18em", color: c.accent, margin: "0 0 18px" }}>
            Products
          </p>
          <h1
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontWeight: 400,
              fontSize: "clamp(36px,4.6vw,64px)",
              lineHeight: 1.04,
              letterSpacing: "-0.03em",
              margin: "0 0 18px",
              maxWidth: 700,
            }}
          >
            Eleven parts, one policy set
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: c.body, margin: 0, maxWidth: 560, textWrap: "pretty" }}>
            The channels a customer reaches for, the machinery that lets an agent act, the tooling that proves a
            change was an improvement, and the reporting that keeps it honest. Everything below runs on the same
            permissions, limits and audit trail.
          </p>
        </div>
      </section>

      <section style={{ borderBottom: `1px solid ${c.rule}` }}>
        <div style={{ ...shell, padding: "clamp(40px,5vw,72px) clamp(20px,4vw,40px)" }}>
          <div
            className="reveal"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "clamp(24px,3vw,52px)",
            }}
          >
            <h2 style={{ fontWeight: 500, fontSize: "clamp(24px,2.6vw,34px)", letterSpacing: "-0.034em", margin: 0, lineHeight: 1.14, maxWidth: 340 }}>
              One policy set, applied everywhere
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 620 }}>
              <p style={{ fontSize: 16.5, lineHeight: 1.62, color: c.bodyStrong, margin: 0, textWrap: "pretty" }}>
                Leri is not one assistant with a long prompt. It is a set of parts that share a single policy set:
                the channels a customer arrives on, the machinery that lets an agent act inside your systems, the
                tooling to test a change before it ships, and the reporting that tells you what the week actually
                contained.
              </p>
              <p style={{ fontSize: 15.5, lineHeight: 1.65, color: c.muted, margin: 0, textWrap: "pretty" }}>
                Because the policy set is shared, a limit written once holds on voice, chat and email alike. Change
                what an agent may refund and every channel changes with it. Nothing is configured twice, and nothing
                drifts apart quietly.
              </p>
              <p style={{ fontSize: 15.5, lineHeight: 1.65, color: c.muted, margin: 0, textWrap: "pretty" }}>
                Teams usually start with one topic on one channel, hold it for a fortnight, then widen. You do not
                have to adopt eleven things to get value from one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {groups.map((grp) => (
        <section key={grp.name} style={{ borderBottom: `1px solid ${c.rule}` }}>
          <div
            style={{
              ...shell,
              padding: "clamp(36px,4.5vw,64px) clamp(20px,4vw,40px)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "clamp(24px,3vw,44px)",
              alignItems: "start",
            }}
          >
            <div
              className="reveal"
              style={{ position: "relative", aspectRatio: "4 / 3", borderRadius: 12, overflow: "hidden", background: c.band, filter: "saturate(0.18) sepia(0.34) contrast(1.02) brightness(1.07)" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={grp.src} alt={grp.alt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: c.accent, opacity: 0.12, mixBlendMode: "multiply", pointerEvents: "none" }} />
            </div>
            <div className="reveal">
              <h2 style={{ fontWeight: 500, fontSize: "clamp(24px,2.6vw,34px)", letterSpacing: "-0.034em", margin: "0 0 10px", lineHeight: 1.14 }}>
                {grp.name}
              </h2>
              <p style={{ fontSize: 15.5, lineHeight: 1.6, color: c.muted, margin: 0, maxWidth: 300, textWrap: "pretty" }}>{grp.blurb}</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {grp.items.map((it) => (
                <Link
                  key={it.slug}
                  href={`/products/${it.slug}`}
                  className="reveal"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr auto",
                    gap: 16,
                    alignItems: "baseline",
                    padding: "17px 2px",
                    borderTop: `1px solid ${c.rule}`,
                    textDecoration: "none",
                    color: c.ink,
                  }}
                >
                  <span style={{ fontSize: 17, letterSpacing: "-0.022em" }}>{it.name}</span>
                  <span style={{ fontSize: 13.5, color: c.muted, textAlign: "right" }}>{it.short}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section style={{ background: c.ink, color: c.onDark }}>
        <div className="reveal" style={{ maxWidth: 820, margin: "0 auto", padding: "clamp(60px,7vw,104px) clamp(20px,4vw,40px)", textAlign: "center" }}>
          <h2 style={{ fontWeight: 500, fontSize: "clamp(30px,3.8vw,50px)", letterSpacing: "-0.04em", margin: "0 0 18px", lineHeight: 1.06 }}>
            Start with one topic on one channel
          </h2>
          <p style={{ fontSize: 17.5, lineHeight: 1.6, color: c.onDarkMuted, margin: "0 0 28px" }}>
            You don&apos;t buy the list. Pick the ticket you dread most and we&apos;ll build that one first.
          </p>
          <Link href="/contact" style={{ background: c.ground, color: c.ink, textDecoration: "none", fontSize: 15.5, padding: "13px 26px", borderRadius: 9, display: "inline-block" }}>
            Book a demo
          </Link>
        </div>
      </section>
    </main>
  );
}
