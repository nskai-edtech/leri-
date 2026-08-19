import type { Metadata } from "next";
import PageStub from "@/components/PageStub";

export const metadata: Metadata = { title: "Telecommunications — Leri" };

export default function Page() {
  return (
    <PageStub
      kicker="Industries"
      title="Outages, upgrades, billing"
      blurb="An outage means thousands of identical questions arriving in the same ten minutes."
    />
  );
}
