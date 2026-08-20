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

const routes = [
  { t: "Security review", d: "DPA, hosting and architecture detail, walked through with your team.", a: "security@leri.example" },
  { t: "Technical questions", d: "Connectors, permissions model, evaluation — straight to an engineer.", a: "engineering@leri.example" },
  { t: "Pricing", d: "How we price, and what a pilot scope usually looks like.", a: "pricing@leri.example" },
  { t: "Careers", d: "A note about what you'd want to work on. No roles listed yet.", a: "jobs@leri.example" },
];

const offices = [
  { city: "New York", addr: "112 Greene Street, Floor 4\nNew York, NY 10012", hours: "Mon–Thu, 09:00–18:00 ET" },
  { city: "London", addr: "8 Hoxton Square\nLondon N1 6NU", hours: "Mon–Thu, 09:00–18:00 GMT" },
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

      <section style={{ background: c.band, borderBottom: `1px solid ${c.rule}` }}>
        <div style={{ ...shell, padding: "clamp(40px,5vw,72px) clamp(20px,4vw,40px)" }}>
          <p className="reveal mono-label" style={{ fontSize: 10.5, letterSpacing: ".18em", color: c.accent, margin: "0 0 26px" }}>
            Other ways through
          </p>
          <div className="reveal" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 1, background: c.ruleDeep, border: `1px solid ${c.ruleDeep}` }}>
            {routes.map((r) => (
              <div key={r.t} style={{ background: c.ground, padding: "22px 20px", display: "flex", flexDirection: "column", gap: 8 }}>
                <span style={{ fontSize: 15.5, fontWeight: 500, letterSpacing: "-0.02em" }}>{r.t}</span>
                <span style={{ fontSize: 13.5, lineHeight: 1.5, color: c.muted }}>{r.d}</span>
                <span style={{ marginTop: 4, fontSize: 14, color: c.accent }}>{r.a}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ ...shell, padding: "clamp(40px,5vw,72px) clamp(20px,4vw,40px)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "clamp(26px,3.5vw,48px)" }}>
          {offices.map((o) => (
            <div key={o.city} className="reveal" style={{ borderTop: `1px solid ${c.ink}`, paddingTop: 16 }}>
              <h3 style={{ fontSize: 18, fontWeight: 500, letterSpacing: "-0.024em", margin: "0 0 10px" }}>{o.city}</h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: c.muted, margin: "0 0 6px", whiteSpace: "pre-line" }}>{o.addr}</p>
              <p className="mono-label" style={{ fontSize: 12.5, color: c.faint, margin: 0 }}>{o.hours}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
