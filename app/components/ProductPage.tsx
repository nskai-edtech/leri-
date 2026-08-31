import Link from "next/link";
import { c } from "@/lib/tokens";
import type { ProductContent, ProductPanel } from "@/lib/products-content";
import JsonLd from "@/components/JsonLd";
import { ORG, SITE_URL } from "@/lib/site";

const shell = { maxWidth: 1240, margin: "0 auto" } as const;
const cardBase = {
  background: c.cardWarm,
  border: `1px solid ${c.ruleWarm}`,
  borderRadius: 14,
  boxShadow: "0 22px 46px -34px rgba(25,23,19,.34)",
} as const;
const panelHeader = {
  padding: "13px 18px",
  borderBottom: `1px solid ${c.ruleFaint}`,
  fontFamily: "'Instrument Sans', system-ui, sans-serif",
  fontWeight: 500,
  fontSize: 10.5,
  letterSpacing: ".18em",
  textTransform: "uppercase",
  color: c.muted,
} as const;
const tag = { fontSize: 11, color: c.muted, background: c.rulePale, borderRadius: 5, padding: "4px 9px" } as const;

function Panel({ panel }: { panel: ProductPanel }) {
  if (panel.kind === "chat") {
    return (
      <div className="reveal" style={{ ...cardBase, padding: "clamp(16px,2.2vw,26px)", display: "flex", flexDirection: "column", gap: 14 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, paddingBottom: 12, borderBottom: `1px solid ${c.ruleFaint}` }}>
          <span style={{ fontSize: 12.5, fontWeight: 500 }}>{panel.header.label}</span>
          <span className="mono-label" style={{ fontSize: 10.5, color: c.fainter }}>{panel.header.meta}</span>
        </div>
        {panel.messages.map((m) => (
          <div key={m} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: c.ruleDeep, marginTop: 7, flex: "none" }} />
            <span style={{ fontSize: 14.5, lineHeight: 1.55, color: c.bodyStrong }}>{m}</span>
          </div>
        ))}
        <div style={{ marginTop: 6, paddingTop: 14, borderTop: `1px solid ${c.ruleFaint}`, display: "flex", gap: 7, flexWrap: "wrap" }}>
          {panel.tags.map((t) => <span key={t} style={tag}>{t}</span>)}
        </div>
      </div>
    );
  }

  if (panel.kind === "log") {
    return (
      <div className="reveal" style={{ ...cardBase, overflow: "hidden" }}>
        <div style={panelHeader}>{panel.title}</div>
        {panel.rows.map((r) => (
          <div key={r.n} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 14, alignItems: "baseline", padding: "13px 18px", borderBottom: `1px solid ${c.ruleFaint}` }}>
            <span className="mono-label" style={{ fontSize: 10.5, color: c.accent }}>{r.n}</span>
            <span style={{ fontFamily: "'Instrument Sans', system-ui, sans-serif", fontWeight: 500, fontSize: 13, color: c.bodyStrong }}>{r.text}</span>
          </div>
        ))}
        <div style={{ padding: "14px 18px", display: "flex", gap: 7, flexWrap: "wrap" }}>
          {panel.tags.map((t) => <span key={t} style={tag}>{t}</span>)}
        </div>
      </div>
    );
  }

  if (panel.kind === "compare") {
    return (
      <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {panel.rows.map((r) => (
          <div key={r.label} style={{ ...cardBase, padding: "16px 18px", display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 14 }}>
            <span style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span className="mono-label" style={{ fontSize: 10, letterSpacing: ".16em", color: c.fainter }}>{r.label}</span>
              <span style={{ fontSize: 15, color: c.bodyStrong }}>{r.value}</span>
            </span>
            <span style={{ fontSize: 11, fontWeight: 500, color: c.accent, background: "#F6EAE3", borderRadius: 5, padding: "4px 9px", whiteSpace: "nowrap" }}>{r.badge}</span>
          </div>
        ))}
        <p style={{ fontSize: 13, lineHeight: 1.55, color: c.muted, margin: "4px 2px 0" }}>{panel.footnote}</p>
      </div>
    );
  }

  return (
    <div className="reveal" style={{ ...cardBase, overflow: "hidden" }}>
      <div style={panelHeader}>{panel.title}</div>
      {panel.rows.map((r) => (
        <div key={r.label} style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 14, alignItems: "baseline", padding: "14px 18px", borderBottom: `1px solid ${c.ruleFaint}` }}>
          <span style={{ fontSize: 14.5, color: c.bodyStrong }}>{r.label}</span>
          <span style={{ ...tag, whiteSpace: "nowrap" }}>{r.badge}</span>
        </div>
      ))}
    </div>
  );
}

export default function ProductPage({ product }: { product: ProductContent }) {
  const { slug, group, name, title, intro, panel, image, caps, how, limits } = product;

  // One block per product page, built from the same content the page renders,
  // so the two can't drift. No offers or ratings: we'd be inventing both.
  const softwareApplication = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `${ORG.name} ${name}`,
    url: `${SITE_URL}/products/${slug}`,
    description: intro,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: group,
    operatingSystem: "Web",
    publisher: { "@type": "Organization", name: ORG.name, url: SITE_URL },
    featureList: caps.map((cap) => cap.t),
  };

  return (
    <main>
      <JsonLd data={softwareApplication} />
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
            <p className="mono-label" style={{ fontSize: 10.5, letterSpacing: ".18em", color: c.accent, margin: "0 0 18px" }}>
              {group} · {name}
            </p>
            <h1
              style={{
                fontFamily: "var(--font-serif), Georgia, serif",
                fontWeight: 400,
                fontSize: "clamp(36px,4.6vw,64px)",
                lineHeight: 1.04,
                letterSpacing: "-0.03em",
                margin: "0 0 18px",
                maxWidth: 720,
              }}
            >
              {title}
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: c.body, margin: "0 0 30px", maxWidth: 560, textWrap: "pretty" }}>{intro}</p>
            <Link href="/contact" style={{ background: c.ink, color: c.ground, textDecoration: "none", fontSize: 15, padding: "11px 22px", borderRadius: 9, display: "inline-block" }}>
              Book a demo
            </Link>
          </div>
          <Panel panel={panel} />
        </div>
      </section>

      <section style={{ borderBottom: `1px solid ${c.rule}` }}>
        <div className="reveal" style={{ ...shell, padding: "clamp(28px,3.4vw,52px) clamp(20px,4vw,40px) clamp(20px,2.4vw,32px)" }}>
          <div style={{ position: "relative", aspectRatio: "21 / 9", borderRadius: 14, overflow: "hidden", background: c.band, filter: "saturate(0.18) sepia(0.34) contrast(1.02) brightness(1.07)" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image.src} alt={image.alt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: c.accent, opacity: 0.12, mixBlendMode: "multiply", pointerEvents: "none" }} />
          </div>
          <p style={{ fontSize: 13.5, lineHeight: 1.5, color: c.muted, margin: "14px 0 0", maxWidth: 640 }}>{image.caption}</p>
        </div>
      </section>

      <section style={{ ...shell, padding: "clamp(44px,5.5vw,80px) clamp(20px,4vw,40px)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "clamp(24px,3vw,44px)" }}>
          {caps.map((cap) => (
            <div key={cap.t} className="reveal" style={{ borderTop: `1px solid ${c.ink}`, paddingTop: 16 }}>
              <h2 style={{ fontSize: 18.5, fontWeight: 500, letterSpacing: "-0.024em", margin: "0 0 9px" }}>{cap.t}</h2>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: c.muted, margin: 0, textWrap: "pretty" }}>{cap.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: c.band, borderTop: `1px solid ${c.rule}`, borderBottom: `1px solid ${c.rule}` }}>
        <div style={{ ...shell, padding: "clamp(44px,5.5vw,80px) clamp(20px,4vw,40px)" }}>
          <h2 className="reveal" style={{ fontWeight: 500, fontSize: "clamp(26px,3vw,38px)", letterSpacing: "-0.036em", margin: "0 0 34px", maxWidth: 520, lineHeight: 1.1 }}>
            How it runs
          </h2>
          <div className="reveal" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 1, background: c.ruleDeep, border: `1px solid ${c.ruleDeep}` }}>
            {how.map((s) => (
              <div key={s.n} style={{ background: c.ground, padding: "22px 20px", display: "flex", flexDirection: "column", gap: 9 }}>
                <span className="mono-label" style={{ fontSize: 10, letterSpacing: ".14em", color: c.accent }}>{s.n}</span>
                <span style={{ fontSize: 16, fontWeight: 500, letterSpacing: "-0.02em" }}>{s.t}</span>
                <span style={{ fontSize: 14, lineHeight: 1.55, color: c.muted }}>{s.b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ ...shell, padding: "clamp(44px,5.5vw,80px) clamp(20px,4vw,40px)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "clamp(28px,4vw,56px)" }}>
        <h2 className="reveal" style={{ fontWeight: 500, fontSize: "clamp(24px,2.6vw,34px)", letterSpacing: "-0.034em", margin: 0, lineHeight: 1.14 }}>
          The limits, stated
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          {limits.map((l) => (
            <div key={l.t} className="reveal" style={{ borderTop: `1px solid ${c.ruleMid}`, paddingTop: 14 }}>
              <h3 style={{ fontSize: 16, fontWeight: 500, letterSpacing: "-0.02em", margin: "0 0 7px" }}>{l.t}</h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: c.muted, margin: 0 }}>{l.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: c.ink, color: c.onDark }}>
        <div className="reveal" style={{ maxWidth: 820, margin: "0 auto", padding: "clamp(60px,7vw,104px) clamp(20px,4vw,40px)", textAlign: "center" }}>
          <h2 style={{ fontWeight: 500, fontSize: "clamp(30px,3.8vw,50px)", letterSpacing: "-0.04em", margin: "0 0 18px", lineHeight: 1.06 }}>
            See it on your own conversations
          </h2>
          <p style={{ fontSize: 17.5, lineHeight: 1.6, color: c.onDarkMuted, margin: "0 0 28px" }}>
            Send us a week of real traffic and we&apos;ll show you what {name} would have done with it.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" style={{ background: c.ground, color: c.ink, textDecoration: "none", fontSize: 15.5, padding: "13px 26px", borderRadius: 9, display: "inline-block" }}>
              Book a demo
            </Link>
            <Link href="/products" style={{ border: `1px solid ${c.onDarkField}`, color: c.onDark, textDecoration: "none", fontSize: 15.5, padding: "13px 26px", borderRadius: 9, display: "inline-block" }}>
              All products
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
