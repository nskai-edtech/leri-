import type { Metadata } from "next";
import PageStub from "@/components/PageStub";

export const metadata: Metadata = { title: "Health & wellness — Leri" };

export default function Page() {
  return (
    <PageStub
      kicker="Industries"
      title="Appointments, coverage, claims"
      blurb="Tight boundaries on what may be said, and a fast handover when they are reached."
    />
  );
}
