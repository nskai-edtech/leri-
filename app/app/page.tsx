import Link from "next/link";
import PlateSequence from "@/components/PlateSequence";
import ChannelsPin from "@/components/ChannelsPin";
import EmailCapture from "@/components/EmailCapture";
import { c } from "@/lib/tokens";
import {
  promises, steps, features, consoleStats, bars, rows,
  proof, integrations, dataTerms, pricingPoints,
} from "@/lib/home-content";

const shell = {
  maxWidth: 1240,
  margin: "0 auto",
} as const;

export default function Home() {
  return (
    <main>
      <PlateSequence />

      <section style={{ background: c.ink, color: c.onDark }}>
        <div
          className="reveal"
          style={{
            ...shell,
            padding: "clamp(52px,6vw,76px) clamp(20px,4vw,40px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: 34,
          }}
        >
          {promises.map((m) => (
            <div key={m.k} style={{ borderTop: `1px solid ${c.onDarkRule}`, paddingTop: 16 }}>
              <div className="mono-label" style={{ fontSize: 10.5, letterSpacing: ".16em", color: c.accentSoft }}>
                {m.k}
              </div>
              <div style={{ marginTop: 12, fontSize: 16, lineHeight: 1.55, color: c.ruleWarm, textWrap: "pretty" }}>
                {m.t}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="platform"
        style={{ ...shell, padding: "clamp(64px,7.5vw,110px) clamp(20px,4vw,40px) clamp(32px,4vw,48px)" }}
      >
        <p
          className="reveal"
          style={{ fontSize: 11.5, letterSpacing: ".14em", textTransform: "uppercase", color: c.accent, margin: "0 0 16px" }}
        >
          How it works
        </p>
        <h2
          className="reveal"
          style={{
            fontWeight: 500,
            fontSize: "clamp(31px,3.6vw,46px)",
            letterSpacing: "-0.036em",
            margin: "0 0 18px",
            maxWidth: 660,
            lineHeight: 1.1,
          }}
        >
          Four weeks from your help centre to a working agent
        </h2>
        <p
          className="reveal"
          style={{ fontSize: 17, color: c.body, maxWidth: 540, margin: "0 0 52px", lineHeight: 1.6 }}
        >
          No rules engine to maintain, no decision trees to redraw every time a policy changes.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 28 }}>
          {steps.map((s) => (
            <div key={s.n} className="reveal" style={{ borderTop: `1px solid ${c.ruleMid}`, paddingTop: 18 }}>
              <div className="mono-label" style={{ fontSize: 12, color: c.accent, marginBottom: 12, textTransform: "none" }}>
                {s.n}
              </div>
              <h3 style={{ fontSize: 19, fontWeight: 500, margin: "0 0 10px", letterSpacing: "-0.022em" }}>
                {s.title}
              </h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: c.muted, margin: 0 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <ChannelsPin />

      <section id="solutions" style={{ ...shell, padding: "clamp(56px,7vw,100px) clamp(20px,4vw,40px)" }}>
        <h2
          className="reveal"
          style={{
            fontWeight: 500,
            fontSize: "clamp(31px,3.6vw,46px)",
            letterSpacing: "-0.036em",
            margin: "0 0 44px",
            maxWidth: 620,
            lineHeight: 1.1,
          }}
        >
          Everything a support org needs, in one agent
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 18 }}>
          {features.map((f) => (
            <div
              key={f.n}
              className="reveal feature-card"
              style={{
                background: "#fff",
                border: `1px solid ${c.ruleCard}`,
                borderRadius: 14,
                padding: 26,
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "space-between",
                  gap: 12,
                  paddingBottom: 16,
                  marginBottom: 4,
                  borderBottom: `1px solid ${c.rulePale}`,
                }}
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ overflow: "visible" }}>
                  {f.ink.map((d, i) => (
                    <path key={`i${i}`} d={d} stroke={c.ink} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  ))}
                  {f.acc.map((d, i) => (
                    <path key={`a${i}`} d={d} stroke={c.accent} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  ))}
                </svg>
                <span className="mono-label" style={{ fontSize: 10, letterSpacing: ".16em", color: c.faintest }}>
                  {f.n}
                </span>
              </div>
              <h3 style={{ fontSize: 18.5, fontWeight: 500, margin: 0, letterSpacing: "-0.022em" }}>{f.title}</h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: c.muted, margin: 0 }}>{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ ...shell, padding: "clamp(32px,4vw,48px) clamp(20px,4vw,40px) clamp(56px,7vw,100px)" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))",
            gap: "clamp(32px,4vw,60px)",
            alignItems: "center",
          }}
        >
          <div className="reveal">
            <p style={{ fontSize: 11.5, letterSpacing: ".14em", textTransform: "uppercase", color: c.accent, margin: "0 0 16px" }}>
              The console
            </p>
            <h2
              style={{
                fontWeight: 500,
                fontSize: "clamp(28px,3.2vw,40px)",
                letterSpacing: "-0.034em",
                margin: "0 0 16px",
                lineHeight: 1.12,
              }}
            >
              Your team sees exactly what the agent did, and why
            </h2>
            <p style={{ fontSize: 16.5, lineHeight: 1.65, color: c.body, margin: "0 0 20px" }}>
              Every conversation is scored, every action logged against the policy that authorised it.
              When something goes sideways you can trace it in one click and correct it in the same place.
            </p>
            <Link href="/products/monitor" className="link-underline" style={{ fontSize: 15 }}>
              See how Monitor works →
            </Link>
          </div>

          <div
            className="reveal"
            style={{ background: "#fff", border: `1px solid ${c.ruleDeep}`, borderRadius: 4, overflow: "hidden" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
                gap: 12,
                padding: "13px 18px",
                borderBottom: `1px solid ${c.ruleFaint}`,
              }}
            >
              <span className="mono-label" style={{ fontSize: 10.5, letterSpacing: ".18em", color: c.muted }}>
                Console — conversations
              </span>
              <span className="mono-label" style={{ fontSize: 10.5, letterSpacing: ".14em", color: c.accent }}>
                Example view
              </span>
            </div>
            <div style={{ padding: 20 }}>
              <div style={{ display: "flex", gap: 10, marginBottom: 20, flexWrap: "wrap" }}>
                {consoleStats.map((s) => (
                  <div key={s.label} style={{ flex: "1 1 110px", borderLeft: `1px solid ${c.ruleWarm}`, padding: "2px 0 2px 12px" }}>
                    <div style={{ fontSize: 10, letterSpacing: ".1em", textTransform: "uppercase", color: c.faint }}>
                      {s.label}
                    </div>
                    <div
                      style={{
                        fontSize: 25,
                        marginTop: 5,
                        letterSpacing: "-0.035em",
                        fontWeight: 500,
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      {s.value}
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  gap: 5,
                  height: 92,
                  marginBottom: 20,
                  paddingTop: 4,
                  backgroundImage: "repeating-linear-gradient(to top, #F0EBE2 0 1px, transparent 1px 25%)",
                  backgroundPosition: "bottom",
                }}
              >
                {bars.map((b, i) => (
                  <div key={i} style={{ flex: 1, background: c.accentBar, opacity: 0.85, height: b }} />
                ))}
              </div>

              <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1.3fr 1fr",
                    gap: 10,
                    fontSize: 10.5,
                    letterSpacing: ".09em",
                    textTransform: "uppercase",
                    color: c.faint,
                    paddingBottom: 9,
                    borderBottom: `1px solid ${c.ruleFaint}`,
                  }}
                >
                  <span>Conversation</span>
                  <span>Topic</span>
                  <span>Outcome</span>
                </div>
                {rows.map((r) => (
                  <div
                    key={r.id}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1.3fr 1fr",
                      gap: 10,
                      fontSize: 13.5,
                      padding: "11px 0",
                      borderBottom: `1px solid ${c.band}`,
                      color: c.body,
                    }}
                  >
                    <span className="mono-label" style={{ fontSize: 12.5, fontVariantNumeric: "tabular-nums", textTransform: "none" }}>
                      {r.id}
                    </span>
                    <span>{r.topic}</span>
                    <span style={{ color: c.accent }}>{r.outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="evidence" style={{ background: c.band, borderTop: `1px solid ${c.rule}`, borderBottom: `1px solid ${c.rule}` }}>
        <div style={{ ...shell, padding: "clamp(56px,7vw,96px) clamp(20px,4vw,40px)" }}>
          <h2
            className="reveal"
            style={{
              fontWeight: 500,
              fontSize: "clamp(30px,3.5vw,44px)",
              letterSpacing: "-0.034em",
              margin: "0 0 14px",
              maxWidth: 620,
              lineHeight: 1.1,
            }}
          >
            We&rsquo;d rather show you than tell you
          </h2>
          <p
            className="reveal"
            style={{ fontSize: 16.5, lineHeight: 1.65, color: c.body, margin: "0 0 40px", maxWidth: 560, textWrap: "pretty" }}
          >
            We&rsquo;re early, and we say so rather than borrowing someone else&rsquo;s numbers. The argument we
            make is the one you can run against your own conversations, before a customer sees anything.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))", gap: 18 }}>
            {proof.map((q) => (
              <div
                key={q.n}
                className="reveal"
                style={{
                  background: "#fff",
                  border: `1px solid ${c.rule}`,
                  borderRadius: 14,
                  padding: 28,
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  height: "100%",
                }}
              >
                <span className="mono-label" style={{ fontSize: 10.5, letterSpacing: ".16em", color: c.accent }}>
                  {q.n}
                </span>
                <h3 style={{ fontSize: 18.5, fontWeight: 500, letterSpacing: "-0.024em", margin: 0 }}>{q.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: c.muted, margin: 0, textWrap: "pretty" }}>{q.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ ...shell, padding: "clamp(56px,7vw,96px) clamp(20px,4vw,40px)" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "clamp(32px,4vw,56px)",
          }}
        >
          <div className="reveal">
            <h2
              style={{
                fontWeight: 500,
                fontSize: "clamp(28px,3.2vw,40px)",
                letterSpacing: "-0.034em",
                margin: "0 0 16px",
                lineHeight: 1.12,
              }}
            >
              It plugs into the stack you already run
            </h2>
            <p style={{ fontSize: 16.5, lineHeight: 1.65, color: c.body, margin: 0 }}>
              Read and write access to your helpdesk, order system, billing and identity provider — through
              connectors we maintain, or your own API.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(105px, 1fr))", gap: 10 }}>
            {integrations.map((i) => (
              <div
                key={i}
                className="reveal"
                style={{
                  background: "#fff",
                  border: `1px solid ${c.ruleCard}`,
                  borderRadius: 10,
                  padding: "15px 10px",
                  textAlign: "center",
                  fontSize: 13,
                  color: c.body,
                }}
              >
                {i}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="data" style={{ borderTop: `1px solid ${c.rule}` }}>
        <div style={{ ...shell, padding: "clamp(56px,7vw,96px) clamp(20px,4vw,40px)" }}>
          <p
            className="reveal"
            style={{ fontSize: 11.5, letterSpacing: ".14em", textTransform: "uppercase", color: c.accent, margin: "0 0 16px" }}
          >
            How your data is handled
          </p>
          <h2
            className="reveal"
            style={{
              fontWeight: 500,
              fontSize: "clamp(30px,3.5vw,44px)",
              letterSpacing: "-0.034em",
              margin: "0 0 42px",
              maxWidth: 600,
              lineHeight: 1.1,
            }}
          >
            Written for the review your security team will run
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 30 }}>
            {dataTerms.map((s) => (
              <div key={s.title} className="reveal">
                <h4 style={{ fontSize: 16.5, fontWeight: 500, margin: "0 0 8px", letterSpacing: "-0.018em" }}>
                  {s.title}
                </h4>
                <p style={{ fontSize: 14.5, lineHeight: 1.6, color: c.muted, margin: 0 }}>{s.body}</p>
              </div>
            ))}
          </div>
          <p
            className="reveal"
            style={{ fontSize: 14.5, lineHeight: 1.65, color: c.muted, margin: "34px 0 0", maxWidth: 620, textWrap: "pretty" }}
          >
            Formal certification work is in progress. We&rsquo;ll walk your team through the current
            architecture, hosting and status on a call rather than post a badge we don&rsquo;t hold yet.
          </p>
        </div>
      </section>

      <section id="pricing" style={{ ...shell, padding: "clamp(40px,5vw,72px) clamp(20px,4vw,40px)" }}>
        <div
          className="reveal"
          style={{
            background: "#fff",
            border: `1px solid ${c.rule}`,
            borderRadius: 18,
            padding: "clamp(28px,4vw,52px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "clamp(30px,4vw,52px)",
            alignItems: "center",
          }}
        >
          <div>
            <h2
              style={{
                fontWeight: 500,
                fontSize: "clamp(28px,3.2vw,40px)",
                letterSpacing: "-0.034em",
                margin: "0 0 14px",
                lineHeight: 1.12,
              }}
            >
              Pricing comes after the demo
            </h2>
            <p style={{ fontSize: 16.5, lineHeight: 1.65, color: c.body, margin: "0 0 24px", textWrap: "pretty" }}>
              We price on conversations resolved, not seats. What that costs depends on your channels, your
              volume and how much you want the agent to be able to do, so we put a number on it once
              we&rsquo;ve looked at your traffic together.
            </p>
            <Link
              href="/contact"
              className="btn-dark"
              style={{ textDecoration: "none", fontSize: 15.5, padding: "12px 24px", borderRadius: 9, display: "inline-block" }}
            >
              Book a demo
            </Link>
          </div>
          <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
            {pricingPoints.map((p) => (
              <li key={p} style={{ display: "flex", gap: 12, fontSize: 15.5, lineHeight: 1.5, color: c.bodyStrong }}>
                <span style={{ color: c.accent, flex: "none" }}>—</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="careers" style={{ borderTop: `1px solid ${c.rule}` }}>
        <div
          style={{
            ...shell,
            padding: "clamp(52px,6vw,84px) clamp(20px,4vw,40px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "clamp(32px,4vw,56px)",
            alignItems: "center",
          }}
        >
          <div className="reveal">
            <h2
              style={{
                fontWeight: 500,
                fontSize: "clamp(26px,3vw,36px)",
                letterSpacing: "-0.034em",
                margin: "0 0 14px",
                lineHeight: 1.12,
              }}
            >
              Come build the boring parts
            </h2>
            <p style={{ fontSize: 16.5, lineHeight: 1.65, color: c.body, margin: 0, textWrap: "pretty" }}>
              Permissions, limits, audit, replay — the work that makes an agent safe to put in front of a
              customer. No open roles listed. Leave an email and what you&rsquo;d want to work on.
            </p>
          </div>
          <div className="reveal">
            <Link
              href="/careers"
              className="btn-dark"
              style={{ textDecoration: "none", fontSize: 15.5, padding: "12px 24px", borderRadius: 9, display: "inline-block" }}
            >
              Tell us what you&rsquo;d build
            </Link>
          </div>
        </div>
      </section>

      <section id="demo" style={{ background: c.ink, color: c.onDark }}>
        <div
          className="reveal"
          style={{ maxWidth: 820, margin: "0 auto", padding: "clamp(70px,8vw,120px) clamp(20px,4vw,40px)", textAlign: "center" }}
        >
          <h2
            style={{
              fontWeight: 500,
              fontSize: "clamp(34px,4.4vw,58px)",
              letterSpacing: "-0.042em",
              margin: "0 0 20px",
              lineHeight: 1.05,
            }}
          >
            Let&rsquo;s put it in front of your hardest tickets
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: c.onDarkMuted, margin: "0 0 32px" }}>
            Send us a week of real conversations. We&rsquo;ll show you what Leri would have done with them.
          </p>
          <EmailCapture tone="dark" />
        </div>
      </section>
    </main>
  );
}
