import Link from "next/link";
import Wordmark from "./Wordmark";
import { footerCols } from "@/lib/nav";
import { c } from "@/lib/tokens";

export default function Footer() {
  return (
    <footer style={{ background: c.ink, color: c.onDarkMuted, borderTop: `1px solid ${c.onDarkRule2}` }}>
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "52px clamp(20px,4vw,40px) 36px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(165px, 1fr))",
          gap: 36,
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 12, color: c.onDark }}>
            <Wordmark size={22} accent={c.accentSoft} />
          </div>
          <p style={{ fontSize: 13.5, margin: 0, maxWidth: 230, lineHeight: 1.5, color: c.onDarkFaint }}>
            An AI concierge for every customer.
          </p>
        </div>
        {footerCols.map((col) => (
          <div key={col.title}>
            <div
              style={{
                fontSize: 11,
                letterSpacing: ".12em",
                textTransform: "uppercase",
                color: c.onDarkLabel,
                marginBottom: 14,
              }}
            >
              {col.title}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {col.links.map((l) => (
                <Link key={l.href} href={l.href} className="footer-link" style={{ fontSize: 14 }}>
                  {l.t}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "0 clamp(20px,4vw,40px) 36px",
          fontSize: 12.5,
          color: c.onDarkLabel,
        }}
      >
        © 2026 Leri. All rights reserved.
      </div>
    </footer>
  );
}
