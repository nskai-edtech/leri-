import type { Metadata } from "next";
import PageStub from "@/components/PageStub";

export const metadata: Metadata = { title: "Voice — Leri" };

export default function Page() {
  return (
    <PageStub
      kicker="Products"
      title="Human-like conversation"
      blurb="Picks up on the first ring, in a voice that doesn't announce itself as a machine."
    />
  );
}
