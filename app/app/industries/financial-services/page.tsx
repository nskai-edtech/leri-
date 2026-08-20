import type { Metadata } from "next";
import PageStub from "@/components/PageStub";

export const metadata: Metadata = { title: "Financial services — Leri" };

export default function Page() {
  return (
    <PageStub
      kicker="Industries"
      title="Disputes, cards and payments"
      blurb="Identity comes first, limits are hard, and every action needs a written trail."
    />
  );
}
