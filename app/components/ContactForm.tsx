"use client";

import { useState } from "react";
import { c } from "@/lib/tokens";

const fieldStyle = {
  fontFamily: "inherit",
  fontSize: 15,
  color: c.ink,
  background: c.ground,
  border: `1px solid ${c.ruleMid}`,
  borderRadius: 8,
  padding: "11px 13px",
} as const;

const labelStyle = { display: "flex", flexDirection: "column", gap: 7 } as const;

const labelCaption = {
  fontSize: 11.5,
  letterSpacing: ".1em",
  textTransform: "uppercase",
  color: c.muted,
} as const;

const channels = ["Chat", "Email", "Voice"];

export default function ContactForm() {
  const [sel, setSel] = useState<string[]>(["Chat"]);
  const [sent, setSent] = useState(false);

  function toggle(chan: string) {
    setSel((s) => (s.includes(chan) ? s.filter((x) => x !== chan) : s.concat(chan)));
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <form
      onSubmit={onSubmit}
      style={{ background: "#fff", border: `1px solid ${c.ruleDeep}`, padding: "clamp(22px,2.6vw,34px)", display: "flex", flexDirection: "column", gap: 16 }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 14 }}>
        <label style={labelStyle}>
          <span style={labelCaption}>Name</span>
          <input required placeholder="Ana Weill" style={fieldStyle} />
        </label>
        <label style={labelStyle}>
          <span style={labelCaption}>Work email</span>
          <input type="email" required placeholder="ana@company.com" style={fieldStyle} />
        </label>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 14 }}>
        <label style={labelStyle}>
          <span style={labelCaption}>Company</span>
          <input required placeholder="Company name" style={fieldStyle} />
        </label>
        <label style={labelStyle}>
          <span style={labelCaption}>Monthly conversations</span>
          <select style={fieldStyle}>
            <option>Under 10k</option>
            <option>10k – 50k</option>
            <option>50k – 150k</option>
            <option>150k+</option>
          </select>
        </label>
      </div>
      <div>
        <span style={{ display: "block", ...labelCaption, marginBottom: 9 }}>Channels in scope</span>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {channels.map((chan) => {
            const on = sel.includes(chan);
            return (
              <button
                key={chan}
                type="button"
                onClick={() => toggle(chan)}
                style={{
                  background: on ? c.ink : c.ground,
                  color: on ? c.ground : c.body,
                  border: `1px solid ${on ? c.ink : c.ruleMid}`,
                  borderRadius: 999,
                  fontFamily: "inherit",
                  fontSize: 13,
                  padding: "7px 15px",
                  cursor: "pointer",
                }}
              >
                {chan}
              </button>
            );
          })}
        </div>
      </div>
      <label style={labelStyle}>
        <span style={labelCaption}>The ticket you dread most</span>
        <textarea
          rows={3}
          placeholder="Refund disputes where the carrier says delivered and the customer says otherwise."
          style={{ ...fieldStyle, lineHeight: 1.5, resize: "vertical" }}
        />
      </label>
      <button
        type="submit"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 9,
          background: c.ink,
          color: c.ground,
          border: "none",
          fontFamily: "inherit",
          fontSize: 15.5,
          padding: "13px 22px",
          borderRadius: 9,
          cursor: "pointer",
        }}
      >
        {sent ? "Request sent" : "Book a demo"}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 12h15m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <p style={{ margin: 0, fontSize: 12.5, lineHeight: 1.5, color: c.muted }}>
        {sent
          ? "Thank you — an engineer will reply within one business day to arrange the session."
          : "We reply within one business day. No sales sequence, no gated content."}
      </p>
    </form>
  );
}
