import type { Metadata } from "next";
import Link from "next/link";
import { c } from "@/lib/tokens";
import { industries } from "@/lib/industries-content";

export const metadata: Metadata = { title: "All industries — Leri" };

const shell = { maxWidth: 1240, margin: "0 auto" } as const;

const trio = [
  {
    id: "industries-a",
    src: "https://images.pexels.com/photos/464315/pexels-photo-464315.jpeg?auto=compress&cs=tinysrgb&w=1800",
    kicker: "Identity",
    body: "Who the customer has to prove they are before anything moves. Set per sector, not per conversation.",
  },
  {
    id: "industries-b",
    src: "https://images.pexels.com/photos/6220941/pexels-photo-6220941.jpeg?auto=compress&cs=tinysrgb&w=1800",
    kicker: "Limits",
    body: "The value, the window and the action type an agent may take alone. Everything past it is a handover.",
  },
  {
    id: "industries-c",
    src: "https://images.pexels.com/photos/34968671/pexels-photo-34968671.jpeg?auto=compress&cs=tinysrgb&w=1800",
    kicker: "Record",
    body: "Which system holds the truth, and what the agent is allowed to write back into it.",
  },
];

export default function Page() {
  return (
    <main>
      <section style={{ borderBottom: `1px solid ${c.rule}` }}>
        <div style={{ ...shell, padding: "clamp(48px,6vw,92px) clamp(20px,4vw,40px) clamp(36px,4vw,56px)" }}>
          <p className="mono-label" style={{ fontSize: 10.5, letterSpacing: ".18em", color: c.accent, margin: "0 0 18px" }}>
            Industries
          </p>
          <h1
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontWeight: 400,
              fontSize: "clamp(36px,4.6vw,64px)",
              lineHeight: 1.04,
              letterSpacing: "-0.03em",
              margin: "0 0 18px",
              maxWidth: 680,
            }}
          >
            Same agent, different rulebook
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: c.body, margin: 0, maxWidth: 560, textWrap: "pretty" }}>
            A chargeback in banking and a chargeback in retail are different problems. The permissions, limits and
            audit trail are the same everywhere; what changes is the policy the agent reads and the line it is not
            allowed to cross.
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
              marginBottom: "clamp(28px,3.5vw,44px)",
            }}
          >
            <h2 style={{ fontWeight: 500, fontSize: "clamp(24px,2.6vw,34px)", letterSpacing: "-0.034em", margin: 0, lineHeight: 1.14, maxWidth: 340 }}>
              What actually changes per sector
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 620 }}>
              <p style={{ fontSize: 16.5, lineHeight: 1.62, color: c.bodyStrong, margin: 0, textWrap: "pretty" }}>
                What changes between sectors is not the conversation. It is what counts as proof of identity, which
                action needs a human, how long you have to respond, and which system holds the record that matters.
                A refund in retail and a disputed transaction in banking read the same to a customer and land very
                differently in your stack.
              </p>
              <p style={{ fontSize: 15.5, lineHeight: 1.65, color: c.muted, margin: 0, textWrap: "pretty" }}>
                The agent is the same everywhere. The rulebook is written per sector. Each sector page below states
                the requests we take first, the actions they map to, the limits we hold, and the systems read and
                written. Nothing is implied.
              </p>
              <p style={{ fontSize: 15.5, lineHeight: 1.65, color: c.muted, margin: 0, textWrap: "pretty" }}>
                Regulated work moves slower on purpose. Where an action carries a legal consequence, the default is
                to gather, verify and hand over rather than to act.
              </p>
            </div>
          </div>
          <div className="reveal" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "clamp(14px,1.6vw,22px)" }}>
            {trio.map((t) => (
              <div key={t.id} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ position: "relative", aspectRatio: "4 / 3", borderRadius: 12, overflow: "hidden", background: c.band, filter: "saturate(0.18) sepia(0.34) contrast(1.02) brightness(1.07)" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={t.src} alt={t.kicker} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: c.accent, opacity: 0.12, mixBlendMode: "multiply", pointerEvents: "none" }} />
                </div>
                <div>
                  <div className="mono-label" style={{ fontSize: 10, letterSpacing: ".16em", color: c.accent, marginBottom: 7 }}>{t.kicker}</div>
                  <p style={{ fontSize: 14.5, lineHeight: 1.55, color: c.muted, margin: 0, textWrap: "pretty" }}>{t.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ ...shell, padding: "clamp(36px,4.5vw,64px) clamp(20px,4vw,40px)" }}>
        <div style={{ borderTop: `1px solid ${c.ink}` }}>
          {industries.map((ind) => (
            <Link
              key={ind.slug}
              href={`/industries/${ind.slug}`}
              className="reveal"
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(160px, 0.9fr) 1.4fr auto",
                gap: 20,
                alignItems: "baseline",
                padding: "20px 2px",
                borderBottom: `1px solid ${c.ruleFaint}`,
                textDecoration: "none",
                color: c.ink,
              }}
            >
              <span style={{ fontSize: 18.5, letterSpacing: "-0.024em" }}>{ind.name}</span>
              <span style={{ fontSize: 14.5, color: c.muted, lineHeight: 1.5 }}>{ind.title}</span>
              <span className="mono-label" style={{ fontSize: 11, color: c.accent }}>→</span>
            </Link>
          ))}
        </div>
      </section>

      <section style={{ background: c.ink, color: c.onDark }}>
        <div className="reveal" style={{ maxWidth: 820, margin: "0 auto", padding: "clamp(60px,7vw,104px) clamp(20px,4vw,40px)", textAlign: "center" }}>
          <h2 style={{ fontWeight: 500, fontSize: "clamp(30px,3.8vw,50px)", letterSpacing: "-0.04em", margin: "0 0 18px", lineHeight: 1.06 }}>
            Not on the list
          </h2>
          <p style={{ fontSize: 17.5, lineHeight: 1.6, color: c.onDarkMuted, margin: "0 0 28px" }}>
            The rulebook is yours either way. Send us a week of conversations and we&apos;ll write the first policy
            against them.
          </p>
          <Link href="/contact" style={{ background: c.ground, color: c.ink, textDecoration: "none", fontSize: 15.5, padding: "13px 26px", borderRadius: 9, display: "inline-block" }}>
            Book a demo
          </Link>
        </div>
      </section>
    </main>
  );
}
