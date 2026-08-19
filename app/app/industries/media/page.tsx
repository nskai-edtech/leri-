import type { Metadata } from "next";
import PageStub from "@/components/PageStub";

export const metadata: Metadata = { title: "Media — Leri" };

export default function Page() {
  return (
    <PageStub
      kicker="Industries"
      title="Subscriptions and access"
      blurb="Billing cycles, device limits and the login that stopped working mid-episode."
    />
  );
}
