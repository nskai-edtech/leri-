import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { c } from "@/lib/tokens";

export const metadata: Metadata = { title: "Contact — Leri" };

const shell = { maxWidth: 1240, margin: "0 auto" } as const;

const expect = [
  { k: "45 MIN", v: "A working session, not a presentation" },
  { k: "WHO", v: "An engineer who works on the deployment, and a founder" },
  { k: "BRING", v: "A week of transcripts, or your help centre URL" },
  { k: "OUT", v: "A written read on resolution rate and where it would escalate" },
];

// Cities we cover, not leased offices: no street address or staffed hours,
// because those are checkable claims and we'd be inventing them.
const offices = [
  { city: "London" },
  { city: "Lagos" },
  { city: "Addis Ababa" },
  { city: "Nairobi" },
];

export default function Page() {
  return (
    <main>
      <section style={{ borderBottom: `1px solid ${c.rule}` }}>
        <div
          style={{
            ...shell,
            padding: "clamp(44px,5.5vw,80px) clamp(20px,4vw,40px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "clamp(32px,4.5vw,72px)",
            alignItems: "start",
          }}
        >
          <div>
            <p className="mono-label" style={{ fontSize: 10.5, letterSpacing: ".18em", color: c.accent, margin: "0 0 18px" }}>
              Book a demo
            </p>
            <h1
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontWeight: 400,
                fontSize: "clamp(34px,4.2vw,58px)",
                lineHeight: 1.04,
                letterSpacing: "-0.03em",
                margin: "0 0 18px",
                maxWidth: 520,
              }}
            >
              Send us a week of real conversations
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: c.body, margin: "0 0 30px", maxWidth: 460, textWrap: "pretty" }}>
              We come back with what Leri would have done with them, action by action. Forty-five minutes, an
              engineer in the room, no deck.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 440 }}>
              {expect.map((e) => (
                <div key={e.k} style={{ display: "flex", gap: 12, alignItems: "baseline", borderBottom: `1px solid ${c.rulePale}`, paddingBottom: 11 }}>
                  <span className="mono-label" style={{ fontSize: 10.5, color: c.accent, flex: "none", letterSpacing: ".1em" }}>{e.k}</span>
                  <span style={{ fontSize: 14.5, color: c.bodyStrong, lineHeight: 1.5 }}>{e.v}</span>
                </div>
              ))}
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <section style={{ ...shell, padding: "clamp(40px,5vw,72px) clamp(20px,4vw,40px)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "clamp(26px,3.5vw,48px)" }}>
          {offices.map((o) => (
            <div key={o.city} className="reveal" style={{ borderTop: `1px solid ${c.ink}`, paddingTop: 16 }}>
              <h3 style={{ fontSize: 18, fontWeight: 500, letterSpacing: "-0.024em", margin: 0 }}>{o.city}</h3>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
