"use client";

import { useState } from "react";
import { c } from "@/lib/tokens";

const fieldStyle = {
  fontFamily: "inherit",
  fontSize: 15,
  color: c.ink,
  background: "#fff",
  border: `1px solid ${c.ruleMid}`,
  borderRadius: 9,
  padding: "12px 15px",
} as const;

export default function CareersForm() {
  const [note, setNote] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setNote("Got it — thanks. We read every one, and we'll write back if it lines up.");
    e.currentTarget.reset();
  }

  return (
    <>
      <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 460 }}>
        <input type="email" required placeholder="Email" aria-label="Email" style={fieldStyle} />
        <textarea
          required
          rows={5}
          placeholder="What you'd want to work on"
          aria-label="What you'd want to work on"
          style={{ ...fieldStyle, lineHeight: 1.55, resize: "vertical" }}
        />
        <button
          type="submit"
          style={{
            alignSelf: "flex-start",
            background: c.ink,
            color: c.ground,
            border: "none",
            fontFamily: "inherit",
            fontSize: 15,
            padding: "12px 22px",
            borderRadius: 9,
            cursor: "pointer",
          }}
        >
          Send it over
        </button>
      </form>
      <p style={{ fontSize: 13, color: c.muted, margin: "12px 0 0" }}>{note}</p>
    </>
  );
}
