import type { Metadata } from "next";
import Link from "next/link";
import { c } from "@/lib/tokens";

export const metadata: Metadata = { title: "About — Leri" };

const shell = { maxWidth: 1240, margin: "0 auto" } as const;

const shots = [
  {
    src: "https://images.pexels.com/photos/48828/pexels-photo-48828.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "Daylight entering a room across a plaster wall",
    cap: "We build the layer underneath first: permissions, limits, audit, replay.",
  },
  {
    src: "https://images.pexels.com/photos/16408400/pexels-photo-16408400.jpeg?auto=compress&cs=tinysrgb&w=1400",
    alt: "Soft repeated shadows on warm concrete",
    cap: "Then capability on top of it, one topic and one channel at a time.",
  },
];

const principles = [
  { n: "01", title: "The customer, not the metric", body: "One contact, no repeating, the thing actually done. Deflection is a side effect, never the target." },
  { n: "02", title: "Nothing unexplained", body: "If a customer's team can't trace why an action happened, the feature isn't finished." },
  { n: "03", title: "Boring parts first", body: "Permissions, limits and audit before capability. It slows the demo and speeds the deployment." },
  { n: "04", title: "In the room", body: "Forward-deployed engineers sit with the support team for the first month. Requirements do not survive email." },
];

export default function Page() {
  return (
    <main>
      <section style={{ borderBottom: `1px solid ${c.rule}` }}>
        <div style={{ ...shell, padding: "clamp(48px,6vw,92px) clamp(20px,4vw,40px) clamp(36px,4vw,56px)" }}>
          <p className="mono-label" style={{ fontSize: 10.5, letterSpacing: ".18em", color: c.accent, margin: "0 0 18px" }}>
            About
          </p>
          <h1
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontWeight: 400,
              fontSize: "clamp(36px,4.6vw,64px)",
              lineHeight: 1.04,
              letterSpacing: "-0.03em",
              margin: "0 0 18px",
              maxWidth: 760,
            }}
          >
            Leri builds agents that are allowed to act
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: c.body, margin: 0, maxWidth: 600, textWrap: "pretty" }}>
            Agentic customer service for enterprises: an agent that reads the account, takes the action, and hands
            over the moment a person should. The customer is the only reason any of it exists.
          </p>
        </div>
      </section>

      <section style={{ ...shell, padding: "clamp(44px,5.5vw,80px) clamp(20px,4vw,40px)" }}>
        <div className="reveal" style={{ maxWidth: 640, display: "flex", flexDirection: "column", gap: 18 }}>
          <p style={{ fontSize: 17.5, lineHeight: 1.62, color: c.bodyStrong, margin: 0, textWrap: "pretty" }}>
            Enterprise support teams document everything, then spend their days repeating it. The knowledge is
            rarely the problem. Nothing in the stack is allowed to act on it, so a customer waits three days for a
            refund a policy already approved.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.65, color: c.body, margin: 0, textWrap: "pretty" }}>
            Leri is agentic customer service. The agent verifies who it is speaking to, reads the account before it
            answers, and completes the action — the refund, the rebooking, the plan switch — inside permissions,
            limits and an audit trail a risk team wrote. Capability sits on top of that, never the other way around.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.65, color: c.body, margin: 0, textWrap: "pretty" }}>
            Our obsession is the customer on the other end, not deflection rate. We&apos;re early, so instead of
            quoting results we haven&apos;t earned, we run the system against a week of your conversations and let
            the transcripts make the case.
          </p>
        </div>

        <div
          className="reveal"
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "clamp(14px,1.6vw,22px)", marginTop: "clamp(34px,4vw,58px)" }}
        >
          {shots.map((sh) => (
            <div key={sh.alt} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ position: "relative", aspectRatio: "4 / 3", borderRadius: 12, overflow: "hidden", background: c.band, filter: "saturate(0.18) sepia(0.34) contrast(1.02) brightness(1.07)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={sh.src} alt={sh.alt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: c.accent, opacity: 0.12, mixBlendMode: "multiply", pointerEvents: "none" }} />
              </div>
              <p style={{ fontSize: 14, lineHeight: 1.55, color: c.muted, margin: 0, textWrap: "pretty" }}>{sh.cap}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: c.band, borderTop: `1px solid ${c.rule}`, borderBottom: `1px solid ${c.rule}` }}>
        <div style={{ ...shell, padding: "clamp(44px,5.5vw,80px) clamp(20px,4vw,40px)" }}>
          <h2 className="reveal" style={{ fontWeight: 500, fontSize: "clamp(26px,3vw,40px)", letterSpacing: "-0.036em", margin: "0 0 36px", maxWidth: 520, lineHeight: 1.1 }}>
            How we decide what to build
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "clamp(24px,3vw,44px)" }}>
            {principles.map((p) => (
              <div key={p.n} className="reveal" style={{ borderTop: "1px solid #C9C0B2", paddingTop: 16 }}>
                <div className="mono-label" style={{ fontSize: 10.5, letterSpacing: ".16em", color: c.accent, marginBottom: 12 }}>{p.n}</div>
                <h3 style={{ fontSize: 18, fontWeight: 500, letterSpacing: "-0.024em", margin: "0 0 9px" }}>{p.title}</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.6, color: c.muted, margin: 0 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: c.ink, color: c.onDark }}>
        <div className="reveal" style={{ maxWidth: 820, margin: "0 auto", padding: "clamp(60px,7vw,104px) clamp(20px,4vw,40px)", textAlign: "center" }}>
          <h2 style={{ fontWeight: 500, fontSize: "clamp(30px,3.8vw,50px)", letterSpacing: "-0.04em", margin: "0 0 18px", lineHeight: 1.06 }}>
            Come build the boring parts with us
          </h2>
          <p style={{ fontSize: 17.5, lineHeight: 1.6, color: c.onDarkMuted, margin: "0 0 28px" }}>
            No open roles listed. Leave an email and what you&apos;d want to work on.
          </p>
          <Link href="/careers" style={{ background: c.ground, color: c.ink, textDecoration: "none", fontSize: 15.5, padding: "13px 26px", borderRadius: 9, display: "inline-block" }}>
            Tell us what you&apos;d build
          </Link>
        </div>
      </section>
    </main>
  );
}
