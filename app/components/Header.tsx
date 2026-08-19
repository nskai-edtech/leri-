import Link from "next/link";
import Wordmark from "./Wordmark";
import { menus, type NavMenu } from "@/lib/nav";
import { c } from "@/lib/tokens";

function Menu({ menu }: { menu: NavMenu }) {
  return (
    <span className="navdd" style={{ display: "inline-flex", position: "relative" }}>
      <Link href={menu.href} className="nav-link">
        {menu.label}
      </Link>
      <div className="menu-panel">
        <div
          style={{
            background: c.ground,
            border: `1px solid ${c.ruleMid}`,
            borderRadius: 14,
            boxShadow: "0 28px 64px -32px rgba(25,23,19,.38)",
            padding: 22,
          }}
        >
          <Link
            href={menu.overview.href}
            className="menu-link"
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              gap: 14,
              padding: "0 2px 14px",
              borderBottom: `1px solid ${c.rule}`,
              marginBottom: 18,
            }}
          >
            <span style={{ fontSize: 15, fontWeight: 500, letterSpacing: "-0.02em" }}>
              {menu.overview.title}
            </span>
            <span style={{ fontSize: 13, color: c.muted }}>{menu.overview.blurb}</span>
          </Link>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
              gap: 26,
            }}
          >
            {menu.groups.map((g, gi) => (
              <div key={gi}>
                {g.label && (
                  <div
                    className="mono-label"
                    style={{
                      fontSize: 10,
                      letterSpacing: ".16em",
                      color: c.accent,
                      marginBottom: 12,
                    }}
                  >
                    {g.label}
                  </div>
                )}
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {g.links.map((l) => (
                    <Link
                      key={l.href + l.title}
                      href={l.href}
                      className="menu-link"
                      style={{ display: "flex", flexDirection: "column", gap: 3 }}
                    >
                      <span style={{ fontSize: 14.5, letterSpacing: "-0.018em" }}>{l.title}</span>
                      <span style={{ fontSize: 12.5, color: c.muted, lineHeight: 1.35 }}>
                        {l.blurb}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </span>
  );
}

export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 60,
        background: "rgba(251,250,247,.86)",
        backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${c.rule}`,
      }}
    >
      <nav
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          gap: "clamp(14px,2vw,32px)",
          padding: "14px clamp(20px,4vw,40px)",
          flexWrap: "wrap",
        }}
      >
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 9,
            marginRight: "auto",
            textDecoration: "none",
            color: c.ink,
          }}
        >
          <Wordmark />
        </Link>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "clamp(12px,1.8vw,26px)",
            fontSize: 14.5,
            flexWrap: "wrap",
          }}
        >
          {menus.map((m) => (
            <Menu key={m.label} menu={m} />
          ))}
        </div>
        <Link
          href="/contact"
          className="btn-dark"
          style={{
            textDecoration: "none",
            fontSize: 14.5,
            padding: "9px 18px",
            borderRadius: 8,
            whiteSpace: "nowrap",
          }}
        >
          Book a demo
        </Link>
      </nav>
    </header>
  );
}
