import Link from "next/link";
import { c } from "@/lib/tokens";
import type { IndustryContent } from "@/lib/industries-content";

const shell = { maxWidth: 1240, margin: "0 auto" } as const;
const tag = {
  fontSize: 11,
  color: c.muted,
  background: c.rulePale,
  borderRadius: 5,
  padding: "4px 9px",
} as const;

export default function IndustryPage({ industry }: { industry: IndustryContent }) {
  const { name, title, intro, chat, image, workflows, limits, readsWrites } = industry;

  return (
    <main>
      <section style={{ borderBottom: `1px solid ${c.rule}` }}>
        <div
          style={{
            ...shell,
            padding: "clamp(48px,6vw,92px) clamp(20px,4vw,40px) clamp(36px,4vw,56px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "clamp(30px,4vw,60px)",
            alignItems: "center",
          }}
        >
          <div>
            <p
              className="mono-label"
              style={{ fontSize: 10.5, letterSpacing: ".18em", color: c.accent, margin: "0 0 18px" }}
            >
              Industries · {name}
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
              {title}
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: c.body, margin: "0 0 30px", maxWidth: 520, textWrap: "pretty" }}>
              {intro}
            </p>
            <Link
              href="/contact"
              style={{ background: c.ink, color: c.ground, textDecoration: "none", fontSize: 15, padding: "11px 22px", borderRadius: 9, display: "inline-block" }}
            >
              Book a demo
            </Link>
          </div>

          <div
            className="reveal"
            style={{
              background: c.cardWarm,
              border: `1px solid ${c.ruleWarm}`,
              borderRadius: 14,
              padding: "clamp(16px,2.2vw,26px)",
              display: "flex",
              flexDirection: "column",
              gap: 14,
              boxShadow: "0 22px 46px -34px rgba(25,23,19,.34)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, paddingBottom: 12, borderBottom: `1px solid ${c.ruleFaint}` }}>
              <span style={{ fontSize: 12.5, fontWeight: 500 }}>{chat.channel}</span>
              <span className="mono-label" style={{ fontSize: 10.5, color: c.fainter }}>{chat.meta}</span>
            </div>
            {chat.messages.map((m) => (
              <div key={m} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: c.ruleDeep, marginTop: 7, flex: "none" }} />
                <span style={{ fontSize: 14.5, lineHeight: 1.55, color: c.bodyStrong }}>{m}</span>
              </div>
            ))}
            <div style={{ marginTop: 6, paddingTop: 14, borderTop: `1px solid ${c.ruleFaint}`, display: "flex", gap: 7, flexWrap: "wrap" }}>
              {chat.tags.map((t) => (
                <span key={t} style={tag}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ borderBottom: `1px solid ${c.rule}` }}>
        <div className="reveal" style={{ ...shell, padding: "clamp(28px,3.4vw,52px) clamp(20px,4vw,40px) clamp(20px,2.4vw,32px)" }}>
          <div
            style={{
              position: "relative",
              aspectRatio: "21 / 9",
              borderRadius: 14,
              overflow: "hidden",
              background: c.band,
              filter: "saturate(0.18) sepia(0.34) contrast(1.02) brightness(1.07)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image.src} alt={image.alt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: c.accent, opacity: 0.12, mixBlendMode: "multiply", pointerEvents: "none" }} />
          </div>
          <p style={{ fontSize: 13.5, lineHeight: 1.5, color: c.muted, margin: "14px 0 0", maxWidth: 640 }}>{image.caption}</p>
        </div>
      </section>

      <section
        style={{
          ...shell,
          padding: "clamp(44px,5.5vw,80px) clamp(20px,4vw,40px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "clamp(28px,4vw,56px)",
          alignItems: "start",
        }}
      >
        <div className="reveal">
          <h2 style={{ fontWeight: 500, fontSize: "clamp(24px,2.6vw,34px)", letterSpacing: "-0.034em", margin: "0 0 12px", lineHeight: 1.14 }}>
            What it takes first
          </h2>
          <p style={{ fontSize: 15.5, lineHeight: 1.6, color: c.muted, margin: 0, maxWidth: 320, textWrap: "pretty" }}>
            A deployment starts with one of these, at a slice of volume, and widens on evidence rather than a schedule.
          </p>
        </div>
        <div className="reveal" style={{ borderTop: `1px solid ${c.ink}` }}>
          {workflows.map((w) => (
            <div
              key={w.tag}
              style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 14, alignItems: "baseline", padding: "15px 2px", borderBottom: `1px solid ${c.ruleFaint}` }}
            >
              <span style={{ fontSize: 15, color: c.bodyStrong, lineHeight: 1.45 }}>{w.text}</span>
              <span style={{ ...tag, whiteSpace: "nowrap" }}>{w.tag}</span>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: c.band, borderTop: `1px solid ${c.rule}`, borderBottom: `1px solid ${c.rule}` }}>
        <div style={{ ...shell, padding: "clamp(44px,5.5vw,80px) clamp(20px,4vw,40px)" }}>
          <h2 className="reveal" style={{ fontWeight: 500, fontSize: "clamp(26px,3vw,38px)", letterSpacing: "-0.036em", margin: "0 0 34px", maxWidth: 520, lineHeight: 1.1 }}>
            The limits, stated
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "clamp(24px,3vw,44px)" }}>
            {limits.map((l) => (
              <div key={l.title} className="reveal" style={{ borderTop: "1px solid #C9C0B2", paddingTop: 16 }}>
                <h3 style={{ fontSize: 17.5, fontWeight: 500, letterSpacing: "-0.022em", margin: "0 0 9px" }}>{l.title}</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.6, color: c.muted, margin: 0, textWrap: "pretty" }}>{l.body}</p>
              </div>
            ))}
          </div>
          <div className="reveal" style={{ marginTop: 34, display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
            <span className="mono-label" style={{ fontSize: 10, letterSpacing: ".16em", color: c.accent, marginRight: 6 }}>
              Reads and writes
            </span>
            {readsWrites.map((r) => (
              <span key={r} style={{ fontSize: 11.5, color: c.body, background: c.ground, border: `1px solid ${c.ruleDeep}`, borderRadius: 6, padding: "5px 10px" }}>
                {r}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: c.ink, color: c.onDark }}>
        <div className="reveal" style={{ maxWidth: 820, margin: "0 auto", padding: "clamp(60px,7vw,104px) clamp(20px,4vw,40px)", textAlign: "center" }}>
          <h2 style={{ fontWeight: 500, fontSize: "clamp(30px,3.8vw,50px)", letterSpacing: "-0.04em", margin: "0 0 18px", lineHeight: 1.06 }}>
            Tell us the ticket you dread most
          </h2>
          <p style={{ fontSize: 17.5, lineHeight: 1.6, color: c.onDarkMuted, margin: "0 0 28px" }}>
            We&apos;ll build that one first and show you the transcript before a customer sees it.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/contact"
              style={{ background: c.ground, color: c.ink, textDecoration: "none", fontSize: 15.5, padding: "13px 26px", borderRadius: 9, display: "inline-block" }}
            >
              Book a demo
            </Link>
            <Link
              href="/industries"
              style={{ border: `1px solid ${c.onDarkField}`, color: c.onDark, textDecoration: "none", fontSize: 15.5, padding: "13px 26px", borderRadius: 9, display: "inline-block" }}
            >
              All industries
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
