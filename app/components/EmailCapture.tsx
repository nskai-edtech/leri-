"use client";

import { useState } from "react";
import { c } from "@/lib/tokens";

const DEFAULT_NOTE = "Work email only. We'll reply within a day.";

export default function EmailCapture({ tone = "light" }: { tone?: "light" | "dark" }) {
  const [note, setNote] = useState(DEFAULT_NOTE);
  const dark = tone === "dark";

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const input = e.currentTarget.querySelector("input") as HTMLInputElement;
          setNote(`Thank you — we'll be in touch at ${input.value}.`);
          input.value = "";
        }}
        style={{
          display: "flex",
          gap: 8,
          alignItems: "stretch",
          flexWrap: "wrap",
          justifyContent: dark ? "center" : undefined,
          maxWidth: dark ? 470 : undefined,
          margin: dark ? "0 auto" : undefined,
        }}
      >
        <input
          type="email"
          required
          placeholder="Work email"
          aria-label="Work email"
          className={dark ? "field field-dark" : "field"}
          style={{
            flex: dark ? "1 1 230px" : "1 1 180px",
            minWidth: 0,
            fontFamily: "inherit",
            fontSize: dark ? 15.5 : 15,
            color: dark ? c.onDark : c.ink,
            background: dark ? "transparent" : "#fff",
            border: `1px solid ${dark ? c.onDarkField : c.ruleMid}`,
            borderRadius: 9,
            padding: dark ? "13px 16px" : "12px 15px",
          }}
        />
        <button
          type="submit"
          className={dark ? "btn-light" : "btn-dark"}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 9,
            border: "none",
            fontFamily: "inherit",
            fontSize: dark ? 15.5 : 15,
            padding: dark ? "13px 26px" : "12px 20px",
            borderRadius: 9,
            cursor: "pointer",
          }}
        >
          Book a demo
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M4 12h15m0 0l-6-6m6 6l-6 6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </form>
      <p
        role="status"
        style={{
          margin: dark ? "14px 0 0" : "12px 0 0",
          fontSize: dark ? 13 : 12.5,
          color: dark ? c.onDarkFaint : c.muted,
        }}
      >
        {note}
      </p>
    </>
  );
}
