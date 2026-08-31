"use server";

// Where demo requests land. Deliberately a constant, not an env var: it is
// not a secret, and a wrong value here should be visible in code review.
const TO = "nsukka.ai@gmail.com";

// Until leri.cx is verified as a sending domain in Resend, onboarding@resend.dev
// is the only sender Resend permits, and it can only deliver to the address that
// owns the Resend account. Swap this for hello@leri.cx once the domain is verified.
const FROM = "Leri <onboarding@resend.dev>";

export type ContactState = { ok: boolean; error?: string } | null;

function field(data: FormData, key: string): string {
  const v = data.get(key);
  return typeof v === "string" ? v.trim() : "";
}

export async function submitDemoRequest(
  _prev: ContactState,
  data: FormData,
): Promise<ContactState> {
  const name = field(data, "name");
  const email = field(data, "email");
  const company = field(data, "company");
  const volume = field(data, "volume");
  const channels = field(data, "channels");
  const ticket = field(data, "ticket");

  // The browser enforces `required` too, but a form can be submitted without
  // JavaScript or by a script, so the server cannot trust that it ran.
  if (!name || !email || !company) {
    return { ok: false, error: "Name, work email and company are all required." };
  }

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    // Better to tell the visitor it failed than to show a thank-you that lies.
    return { ok: false, error: "Something went wrong on our end. Please try again shortly." };
  }

  const lines = [
    `Name:     ${name}`,
    `Email:    ${email}`,
    `Company:  ${company}`,
    `Volume:   ${volume || "not given"}`,
    `Channels: ${channels || "none selected"}`,
    "",
    "The ticket they dread most:",
    ticket || "(left blank)",
  ];

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { authorization: `Bearer ${key}`, "content-type": "application/json" },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        // Replying in the inbox should reach the person who filled the form.
        reply_to: email,
        subject: `Leri demo request — ${company}`,
        text: lines.join("\n"),
      }),
    });

    if (!res.ok) {
      console.error("Resend rejected the send:", res.status, await res.text());
      return { ok: false, error: "Something went wrong on our end. Please try again shortly." };
    }
  } catch (err) {
    console.error("Could not reach Resend:", err);
    return { ok: false, error: "Something went wrong on our end. Please try again shortly." };
  }

  return { ok: true };
}
