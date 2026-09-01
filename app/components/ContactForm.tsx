"use client";

import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import { c } from "@/lib/tokens";
import { submitDemoRequest, type ContactState } from "@/app/contact/actions";

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

// Split out so it can read useFormStatus, which only reports the status of
// the form it sits inside. Disabling on submit stops double sends.
function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
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
        cursor: pending ? "default" : "pointer",
        opacity: pending ? 0.7 : 1,
      }}
    >
      {pending ? "Sending…" : "Book a demo"}
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 12h15m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

// Shown in place of the form once it has succeeded. Leaving a filled-in form
// on screen with a dead button reads as a failure and invites a second send.
function Confirmation({ company, email }: { company?: string; email?: string }) {
  return (
    <div
      role="status"
      style={{ background: "#fff", border: `1px solid ${c.ruleDeep}`, padding: "clamp(22px,2.6vw,34px)", display: "flex", flexDirection: "column", gap: 14 }}
    >
      <p className="mono-label" style={{ fontSize: 10.5, letterSpacing: ".18em", color: c.accent, margin: 0 }}>
        Request received
      </p>
      <h2 style={{ fontFamily: "var(--font-serif), Georgia, serif", fontWeight: 400, fontSize: "clamp(24px,2.6vw,32px)", lineHeight: 1.1, letterSpacing: "-0.03em", margin: 0 }}>
        Thank you.
      </h2>
      <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: c.body }}>
        We have your details{company ? ` for ${company}` : ""}. An engineer will reply
        {email ? " to " : " "}
        {email ? <strong style={{ fontWeight: 500, color: c.bodyStrong }}>{email}</strong> : null} within one
        business day to arrange the session.
      </p>
      <p style={{ margin: 0, fontSize: 12.5, lineHeight: 1.5, color: c.muted }}>
        Bring a week of transcripts, or your help centre URL — that is all the session needs.
      </p>
    </div>
  );
}

export default function ContactForm() {
  const [sel, setSel] = useState<string[]>(["Chat"]);
  const [state, formAction] = useActionState<ContactState, FormData>(submitDemoRequest, null);

  function toggle(chan: string) {
    setSel((s) => (s.includes(chan) ? s.filter((x) => x !== chan) : s.concat(chan)));
  }

  if (state?.ok) return <Confirmation company={state.company} email={state.email} />;

  return (
    <form
      action={formAction}
      style={{ background: "#fff", border: `1px solid ${c.ruleDeep}`, padding: "clamp(22px,2.6vw,34px)", display: "flex", flexDirection: "column", gap: 16 }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 14 }}>
        <label style={labelStyle}>
          <span style={labelCaption}>Name</span>
          <input name="name" required placeholder="Ana Weill" style={fieldStyle} />
        </label>
        <label style={labelStyle}>
          <span style={labelCaption}>Work email</span>
          <input name="email" type="email" required placeholder="ana@company.com" style={fieldStyle} />
        </label>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 14 }}>
        <label style={labelStyle}>
          <span style={labelCaption}>Company</span>
          <input name="company" required placeholder="Company name" style={fieldStyle} />
        </label>
        <label style={labelStyle}>
          <span style={labelCaption}>Monthly conversations</span>
          <select name="volume" style={fieldStyle}>
            <option>Under 10k</option>
            <option>10k – 50k</option>
            <option>50k – 150k</option>
            <option>150k+</option>
          </select>
        </label>
      </div>
      <div>
        <span style={{ display: "block", ...labelCaption, marginBottom: 9 }}>Channels in scope</span>
        {/* The pills are buttons, so nothing of theirs is submitted. This
            carries the current selection to the server. */}
        <input type="hidden" name="channels" value={sel.join(", ")} />
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
          name="ticket"
          rows={3}
          placeholder="Refund disputes where the carrier says delivered and the customer says otherwise."
          style={{ ...fieldStyle, lineHeight: 1.5, resize: "vertical" }}
        />
      </label>
      <SubmitButton />
      <p
        role="status"
        style={{
          margin: 0,
          fontSize: 12.5,
          lineHeight: 1.5,
          color: state?.error ? "#b3261e" : c.muted,
        }}
      >
        {state?.error
          ? state.error
          : "We reply within one business day. No sales sequence, no gated content."}
      </p>
    </form>
  );
}
