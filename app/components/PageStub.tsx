import Link from "next/link";
import { c } from "@/lib/tokens";

export default function PageStub({
  kicker,
  title,
  blurb,
}: {
  kicker: string;
  title: string;
  blurb: string;
}) {
  return (
    <main style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(70px,9vw,140px) clamp(20px,4vw,40px)" }}>
      <p
        className="mono-label"
        style={{ fontSize: 11.5, letterSpacing: ".18em", color: c.accent, margin: "0 0 16px" }}
      >
        {kicker}
      </p>
      <h1
        style={{
          fontFamily: "var(--font-serif), Georgia, serif",
          fontWeight: 400,
          fontSize: "clamp(38px,5vw,68px)",
          letterSpacing: "-0.028em",
          lineHeight: 1.05,
          margin: "0 0 20px",
          maxWidth: 780,
        }}
      >
        {title}
      </h1>
      <p style={{ fontSize: 17.5, lineHeight: 1.6, color: c.body, margin: "0 0 40px", maxWidth: 560, textWrap: "pretty" }}>
        {blurb}
      </p>
      <div
        style={{
          borderTop: `1px solid ${c.ruleMid}`,
          paddingTop: 22,
          display: "flex",
          alignItems: "center",
          gap: 20,
          flexWrap: "wrap",
        }}
      >
        <span style={{ fontSize: 14.5, color: c.muted }}>This page is not built yet.</span>
        <Link href="/contact" className="link-underline" style={{ fontSize: 15 }}>
          Book a demo →
        </Link>
      </div>
    </main>
  );
}
