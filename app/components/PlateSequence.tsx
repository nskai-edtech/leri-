"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import EmailCapture from "./EmailCapture";
import { plates } from "@/lib/home-content";
import { c } from "@/lib/tokens";

const NAMES = ["Signal", "Understanding", "Policy", "Action", "Resolution"];

function navHeight() {
  const n = document.querySelector("header");
  return n ? n.offsetHeight : 64;
}

export default function PlateSequence() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [idx, setIdx] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const fit = () => {
      const h = navHeight();
      const sticky = stickyRef.current;
      if (sticky) {
        sticky.style.top = `${h}px`;
        sticky.style.height = `calc(100vh - ${h}px)`;
      }
    };

    const read = () => {
      const h = navHeight();
      const span = wrap.offsetHeight - (window.innerHeight - h);
      const raw = span > 0 ? (h - wrap.getBoundingClientRect().top) / span : 0;
      // Travel completes at 90% of the sticky span so the last plate settles
      // while the section is still pinned, rather than at the instant of release.
      const p = Math.min(1, Math.max(0, raw / 0.9));

      const track = trackRef.current;
      if (track && track.parentElement) {
        const max = Math.max(0, track.scrollWidth - track.parentElement.clientWidth);
        track.style.transform = `translate3d(${-p * max}px,0,0)`;
      }
      if (progressRef.current) progressRef.current.style.width = `${p * 100}%`;
      setIdx(Math.min(4, Math.round(p * 4)));
      setDone(p >= 0.995);
    };

    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        read();
      });
    };
    const onResize = () => {
      fit();
      read();
    };

    fit();
    read();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const release = useCallback(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    window.scrollTo({
      top: window.scrollY + wrap.getBoundingClientRect().bottom - navHeight(),
      behavior: "smooth",
    });
  }, []);

  return (
    <div id="top" ref={wrapRef} style={{ position: "relative", height: "420vh", background: c.ground }}>
      <section
        ref={stickyRef}
        className="plate-sticky"
        style={{
          position: "sticky",
          top: 65,
          height: "calc(100vh - 65px)",
          minHeight: 0,
          background: c.ground,
          borderBottom: `1px solid ${c.rule}`,
          overflow: "hidden",
          display: "flex",
          alignItems: "stretch",
        }}
      >
        <div
          className="hero-rise plate-hero"
          style={{
            flex: "0 1 clamp(280px, 33vw, 470px)",
            minWidth: 250,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "clamp(16px,3vh,36px) clamp(20px,3vw,44px)",
            borderRight: `1px solid ${c.ruleWarm}`,
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignSelf: "flex-start",
              alignItems: "center",
              gap: 8,
              fontSize: 12,
              color: c.muted,
              border: `1px solid ${c.ruleMid}`,
              background: "#fff",
              borderRadius: 999,
              padding: "4px 12px 4px 7px",
              marginBottom: "clamp(12px,2.4vh,24px)",
            }}
          >
            <span
              style={{
                background: c.accent,
                color: "#fff",
                borderRadius: 999,
                padding: "2px 8px",
                fontSize: 10.5,
              }}
            >
              New
            </span>
            Now answering on voice
          </div>
          <h1
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontWeight: 400,
              fontSize: "clamp(32px, 2.4vw + 1.6vh, 60px)",
              lineHeight: 1.03,
              letterSpacing: "-0.028em",
              margin: "0 0 clamp(10px,1.8vh,20px)",
            }}
          >
            An AI concierge for <em style={{ fontStyle: "italic", color: c.accent }}>every</em> customer
          </h1>
          <p
            style={{
              fontSize: "clamp(14.5px,.6vw + .5vh,17px)",
              lineHeight: 1.58,
              color: c.body,
              margin: "0 0 clamp(14px,2.4vh,28px)",
              textWrap: "pretty",
            }}
          >
            It knows your policies, takes real action in your systems, and hands over to a person the
            moment that&rsquo;s the right call.
          </p>
          <EmailCapture />
        </div>

        <div
          className="plate-panel"
          style={{ flex: "1 1 0", minWidth: 0, display: "flex", flexDirection: "column", background: c.band }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              gap: 20,
              padding: "clamp(16px,3vh,34px) clamp(20px,3vw,40px) 0",
              flex: "none",
            }}
          >
            <p className="mono-label" style={{ fontSize: 10.5, letterSpacing: ".18em", color: c.accent, margin: 0 }}>
              The system, drawn
            </p>
            <p
              className="mono-label"
              style={{
                fontSize: 10.5,
                letterSpacing: ".14em",
                color: c.muted,
                margin: 0,
                fontVariantNumeric: "tabular-nums",
                textTransform: "none",
              }}
            >
              {NAMES[idx]}&nbsp;&nbsp;·&nbsp;&nbsp;0{idx + 1} / 05
            </p>
          </div>

          <div style={{ flex: "1 1 0", minHeight: 0, display: "flex", alignItems: "stretch", overflow: "hidden" }}>
            <div
              ref={trackRef}
              style={{
                display: "flex",
                alignItems: "stretch",
                height: "100%",
                gap: "clamp(36px,5vw,80px)",
                padding: "0 clamp(20px,3vw,40px)",
                willChange: "transform",
              }}
            >
              {plates.map((p) => (
                <figure
                  key={p.n}
                  style={{
                    flex: "none",
                    width: "clamp(210px, 22vw, 310px)",
                    height: "100%",
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: "clamp(12px,2.2vh,22px)",
                    padding: "clamp(12px,3vh,30px) 0",
                  }}
                >
                  <svg
                    viewBox="0 0 200 200"
                    width="100%"
                    style={{ display: "block", flex: "1 1 auto", minHeight: 0 }}
                    preserveAspectRatio="xMidYMid meet"
                    fill="none"
                    aria-hidden="true"
                  >
                    {p.ink.map((d, i) => (
                      <path key={`i${i}`} d={d} stroke={c.ink} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                    ))}
                    {p.acc.map((d, i) => (
                      <path key={`a${i}`} d={d} stroke={c.accent} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    ))}
                    {p.dots.map((d, i) => (
                      <circle key={`d${i}`} cx={d.x} cy={d.y} r={d.r} fill={d.fill} />
                    ))}
                  </svg>
                  <figcaption style={{ flex: "none", borderTop: `1px solid ${c.ruleDeep}`, paddingTop: 12 }}>
                    <div
                      className="mono-label"
                      style={{ fontSize: 10, letterSpacing: ".16em", color: c.accent, marginBottom: 7 }}
                    >
                      {p.n}
                    </div>
                    <div style={{ fontSize: 16.5, fontWeight: 500, letterSpacing: "-0.022em", marginBottom: 5 }}>
                      {p.title}
                    </div>
                    <div style={{ fontSize: 13.5, lineHeight: 1.5, color: c.muted }}>{p.body}</div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div
            style={{
              padding: "0 clamp(20px,3vw,40px) clamp(16px,3vh,34px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
              flex: "none",
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 14, flex: "1 1 200px", minWidth: 0 }}>
              <div style={{ flex: "0 1 200px", height: 1, background: c.ruleDeep, position: "relative" }}>
                <div
                  ref={progressRef}
                  style={{ position: "absolute", inset: "0 auto 0 0", width: "0%", height: 1, background: c.accent }}
                />
              </div>
              <p style={{ fontSize: 12, color: c.muted, margin: 0 }}>
                {done ? "End of the sequence — keep scrolling." : "Scroll to move across the sequence."}
              </p>
            </div>
            <button
              onClick={release}
              aria-label="Continue down the page"
              className="btn-dark"
              style={{
                flex: "none",
                display: "flex",
                alignItems: "center",
                gap: 10,
                border: "none",
                borderRadius: 999,
                padding: "10px 18px",
                fontFamily: "inherit",
                fontSize: 13,
                cursor: "pointer",
              }}
            >
              {done ? "Continue" : "Skip ahead"}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="drift">
                <path
                  d="M12 4v15m0 0l-6-6m6 6l6-6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
