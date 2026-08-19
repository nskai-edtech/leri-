import type { Metadata } from "next";
import PageStub from "@/components/PageStub";

export const metadata: Metadata = { title: "Technology — Leri" };

export default function Page() {
  return (
    <PageStub
      kicker="Industries"
      title="Accounts, plans and incidents"
      blurb="Seats, plans, entitlements and the incident everyone is emailing about at once."
    />
  );
}
