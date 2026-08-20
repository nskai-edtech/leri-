import type { Metadata } from "next";
import PageStub from "@/components/PageStub";

export const metadata: Metadata = { title: "Travel & hospitality — Leri" };

export default function Page() {
  return (
    <PageStub
      kicker="Industries"
      title="Disruption and rebooking"
      blurb="Things go wrong at 3am in another timezone. The rebooking cannot wait for business hours."
    />
  );
}
