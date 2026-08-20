"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { channels } from "@/lib/home-content";
import { c } from "@/lib/tokens";

export default function ChannelsPin() {
  const pinRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const n = channels.length;

    const tick = () => {
      const pin = pinRef.current;
      const track = trackRef.current;
      if (!pin || !track) return;

      const nav = document.querySelector("header");
      const navH = nav ? nav.offsetHeight : 64;
      const sticky = pin.firstElementChild as HTMLElement | null;
      if (sticky) {
        sticky.style.top = `${navH}px`;
        sticky.style.height = `calc(100vh - ${navH}px)`;
      }

      const span = pin.offsetHeight - (window.innerHeight - navH);
      const raw = span > 0 ? (navH - pin.getBoundingClientRect().top) / span : 0;
      const p = Math.min(1, Math.max(0, raw / 0.82));
      const w = track.parentElement ? track.parentElement.clientWidth : window.innerWidth;

      track.style.transform = `translate3d(${-p * (n - 1) * w}px,0,0)`;
      if (progressRef.current) progressRef.current.style.width = `${p * 100}%`;
      setActive(Math.round(p * (n - 1)));
    };

    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        tick();
      });
    };

    tick();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const skip = useCallback(() => {
    const pin = pinRef.current;
    if (pin) {
      window.scrollTo({
        top: window.scrollY + pin.getBoundingClientRect().bottom - 1,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <section
      id="channels"
      ref={pinRef}
      style={{
        position: "relative",
        height: "360vh",
        background: c.band,
        borderTop: `1px solid ${c.rule}`,
        borderBottom: `1px solid ${c.rule}`,
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 62,
          height: "calc(100vh - 62px)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            maxWidth: 1240,
            width: "100%",
            margin: "0 auto",
            padding: "clamp(20px,3vw,48px) clamp(20px,4vw,40px) clamp(12px,2vw,24px)",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 20,
            flexWrap: "wrap",
            flex: "none",
          }}
        >
          <div>
            <p className="mono-label" style={{ fontSize: 11, letterSpacing: ".18em", color: c.accent, margin: "0 0 10px" }}>
              02 — Channels
            </p>
            <h2
              style={{
                fontWeight: 500,
                fontSize: "clamp(24px,2.6vw,40px)",
                letterSpacing: "-0.034em",
                margin: 0,
                lineHeight: 1.08,
                textWrap: "balance",
              }}
            >
              One agent. Three ways to reach it.
            </h2>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            {channels.map((ch, i) => (
              <span
                key={ch.short}
                className="mono-label"
                style={{
                  fontSize: 11,
                  letterSpacing: ".12em",
                  color: i === active ? c.accent : c.fainter,
                  transition: "color .3s",
                }}
              >
                {ch.short}
              </span>
            ))}
            <div style={{ width: 92, height: 2, background: c.ruleMid, borderRadius: 2, overflow: "hidden" }}>
              <div
                ref={progressRef}
                style={{ height: "100%", width: "0%", background: c.accent, transition: "width .1s linear" }}
              />
            </div>
          </div>
        </div>

        <div style={{ flex: "1 1 0", minHeight: 0, display: "flex", alignItems: "center", overflow: "hidden" }}>
          <div ref={trackRef} style={{ display: "flex", willChange: "transform" }}>
            {channels.map((ch) => (
              <div
                key={ch.title}
                style={{
                  width: "100vw",
                  flex: "none",
                  padding: "0 clamp(20px,4vw,40px)",
                  maxHeight: "100%",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    maxWidth: 1240,
                    margin: "0 auto",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "clamp(28px,4vw,64px)",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <div
                      className="mono-label"
                      style={{
                        fontSize: 11,
                        letterSpacing: ".18em",
                        color: c.fainter,
                        marginBottom: "clamp(8px,1.6vh,18px)",
                      }}
                    >
                      {ch.n}
                    </div>
                    <h3
                      style={{
                        fontWeight: 500,
                        fontSize: "clamp(30px, 3.2vw + 1vh, 56px)",
                        letterSpacing: "-0.042em",
                        margin: "0 0 clamp(10px,1.6vh,18px)",
                        lineHeight: 1.02,
                      }}
                    >
                      {ch.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "clamp(15px,1.1vw + .5vh,17.5px)",
                        lineHeight: 1.6,
                        color: c.body,
                        maxWidth: 440,
                        margin: "0 0 clamp(14px,2.4vh,26px)",
                      }}
                    >
                      {ch.body}
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: 10, maxWidth: 420 }}>
                      {ch.points.map((pt) => (
                        <div
                          key={pt.k}
                          style={{
                            display: "flex",
                            gap: 12,
                            alignItems: "baseline",
                            paddingBottom: 10,
                            borderBottom: `1px solid ${c.ruleWarm}`,
                          }}
                        >
                          <span className="mono-label" style={{ fontSize: 10.5, color: c.accent, flex: "none" }}>
                            {pt.k}
                          </span>
                          <span style={{ fontSize: 14.5, color: c.bodyStrong, lineHeight: 1.45 }}>{pt.v}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div
                    style={{
                      background: c.cardWarm,
                      border: `1px solid ${c.ruleWarm}`,
                      borderRadius: 14,
                      padding: "clamp(16px,2.2vw,30px)",
                      display: "flex",
                      flexDirection: "column",
                      gap: 14,
                      boxShadow: "0 20px 46px -34px rgba(25,23,19,.4)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingBottom: 12,
                        borderBottom: `1px solid ${c.ruleFaint}`,
                      }}
                    >
                      <span style={{ fontSize: 12.5, fontWeight: 500, letterSpacing: ".01em" }}>{ch.mockTitle}</span>
                      <span className="mono-label" style={{ fontSize: 10.5, color: c.fainter, textTransform: "none" }}>
                        {ch.mockMeta}
                      </span>
                    </div>
                    {ch.lines.map((l) => (
                      <div key={l} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                        <span
                          style={{
                            width: 5,
                            height: 5,
                            borderRadius: "50%",
                            background: "#D9CFC2",
                            marginTop: 7,
                            flex: "none",
                          }}
                        />
                        <span style={{ fontSize: 14.5, lineHeight: 1.55, color: c.bodyStrong }}>{l}</span>
                      </div>
                    ))}
                    <div
                      style={{
                        marginTop: "auto",
                        paddingTop: 14,
                        borderTop: `1px solid ${c.ruleFaint}`,
                        display: "flex",
                        gap: 7,
                        flexWrap: "wrap",
                      }}
                    >
                      {ch.tags.map((t) => (
                        <span
                          key={t}
                          className="mono-label"
                          style={{
                            fontSize: 11,
                            color: c.muted,
                            background: "#F3EFE8",
                            borderRadius: 5,
                            padding: "4px 9px",
                            textTransform: "none",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            maxWidth: 1240,
            width: "100%",
            margin: "0 auto",
            padding: "0 clamp(20px,4vw,40px) clamp(14px,2.4vh,34px)",
            display: "flex",
            justifyContent: "flex-end",
            flex: "none",
          }}
        >
          <button
            onClick={skip}
            className="skip-btn"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 9,
              marginTop: -4,
              background: "#fff",
              border: `1px solid ${c.ruleMid}`,
              borderRadius: 999,
              padding: "9px 16px",
              fontFamily: "inherit",
              fontSize: 13,
              color: c.body,
              cursor: "pointer",
            }}
          >
            Skip ahead
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12 4v16m0 0l-6-6m6 6l6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
