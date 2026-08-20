import type { Metadata } from "next";
import CareersForm from "@/components/CareersForm";
import { c } from "@/lib/tokens";

export const metadata: Metadata = { title: "Careers — Leri" };

const shell = { maxWidth: 1240, margin: "0 auto" } as const;

const areas = [
  { t: "Applied AI", b: "Evaluation, retrieval and the grading harness that decides whether an answer was good." },
  { t: "Backend", b: "Permissions, limits, audit and the connectors that let the agent act safely." },
  { t: "Forward deployed", b: "Sitting with a support team through a deployment, and writing the policy with them." },
  { t: "Design", b: "The console, the transcripts, and the words the agent uses." },
];

const process = [
  { n: "01", title: "Intro call", body: "Half an hour on what you've built and what you want to build next." },
  { n: "02", title: "Craft conversation", body: "A real problem from our backlog, discussed rather than whiteboarded." },
  { n: "03", title: "Paid exercise", body: "Scoped to a few hours, on something adjacent to the work." },
  { n: "04", title: "Decision", body: "Written down, with the band and the equity, as fast as we can get there." },
];

export default function Page() {
  return (
    <main>
      <section style={{ borderBottom: `1px solid ${c.rule}` }}>
        <div style={{ ...shell, padding: "clamp(48px,6vw,92px) clamp(20px,4vw,40px) clamp(36px,4vw,56px)" }}>
          <p className="mono-label" style={{ fontSize: 10.5, letterSpacing: ".18em", color: c.accent, margin: "0 0 18px" }}>
            Careers
          </p>
          <h1
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontWeight: 400,
              fontSize: "clamp(36px,4.6vw,64px)",
              lineHeight: 1.04,
              letterSpacing: "-0.03em",
              margin: "0 0 18px",
              maxWidth: 640,
            }}
          >
            Come build the boring parts
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: c.body, margin: 0, maxWidth: 520, textWrap: "pretty" }}>
            Permissions, limits, audit, replay — the work that makes an agent safe to put in front of a customer.
            We&apos;re not listing roles yet. Tell us what you&apos;d want to work on.
          </p>
        </div>
      </section>

      <section
        id="interest"
        style={{
          ...shell,
          padding: "clamp(36px,4.5vw,64px) clamp(20px,4vw,40px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "clamp(30px,4vw,60px)",
          alignItems: "start",
        }}
      >
        <div className="reveal">
          <h2 style={{ fontWeight: 500, fontSize: "clamp(22px,2.4vw,30px)", letterSpacing: "-0.032em", margin: "0 0 14px" }}>
            Leave an email
          </h2>
          <p style={{ fontSize: 15.5, lineHeight: 1.6, color: c.body, margin: "0 0 24px", maxWidth: 460, textWrap: "pretty" }}>
            One paragraph is plenty: what you&apos;d want to work on here, and something you&apos;ve built that
            you&apos;d point at.
          </p>
          <CareersForm />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 22 }}>
          {areas.map((x) => (
            <div key={x.t} className="reveal" style={{ borderTop: `1px solid ${c.ruleMid}`, paddingTop: 14 }}>
              <h3 style={{ fontSize: 15.5, fontWeight: 500, letterSpacing: "-0.02em", margin: "0 0 7px" }}>{x.t}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.55, color: c.muted, margin: 0 }}>{x.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: c.band, borderTop: `1px solid ${c.rule}`, borderBottom: `1px solid ${c.rule}` }}>
        <div style={{ ...shell, padding: "clamp(44px,5.5vw,80px) clamp(20px,4vw,40px)" }}>
          <h2 className="reveal" style={{ fontWeight: 500, fontSize: "clamp(26px,3vw,38px)", letterSpacing: "-0.036em", margin: "0 0 34px", maxWidth: 520, lineHeight: 1.1 }}>
            How hiring runs here
          </h2>
          <div className="reveal" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 1, background: c.ruleDeep, border: `1px solid ${c.ruleDeep}` }}>
            {process.map((p) => (
              <div key={p.n} style={{ background: c.ground, padding: "20px 18px", display: "flex", flexDirection: "column", gap: 9 }}>
                <span className="mono-label" style={{ fontSize: 10, letterSpacing: ".14em", color: c.accent }}>{p.n}</span>
                <span style={{ fontSize: 15.5, fontWeight: 500, letterSpacing: "-0.02em" }}>{p.title}</span>
                <span style={{ fontSize: 13, lineHeight: 1.5, color: c.muted }}>{p.body}</span>
              </div>
            ))}
          </div>
          <p className="reveal" style={{ fontSize: 14, color: c.muted, margin: "18px 0 0" }}>
            The exercise is paid and scoped to a few hours. We don&apos;t ask anyone to do a take-home twice.
          </p>
        </div>
      </section>

      <section style={{ background: c.ink, color: c.onDark }}>
        <div className="reveal" style={{ maxWidth: 820, margin: "0 auto", padding: "clamp(60px,7vw,104px) clamp(20px,4vw,40px)", textAlign: "center" }}>
          <h2 style={{ fontWeight: 500, fontSize: "clamp(30px,3.8vw,50px)", letterSpacing: "-0.04em", margin: "0 0 18px", lineHeight: 1.06 }}>
            No roles listed, still interested
          </h2>
          <p style={{ fontSize: 17.5, lineHeight: 1.6, color: c.onDarkMuted, margin: "0 0 28px" }}>
            Send us the paragraph. We read every one, and we answer the ones we can.
          </p>
          <a href="#interest" style={{ background: c.ground, color: c.ink, textDecoration: "none", fontSize: 15.5, padding: "13px 26px", borderRadius: 9, display: "inline-block" }}>
            Leave an email
          </a>
        </div>
      </section>
    </main>
  );
}
