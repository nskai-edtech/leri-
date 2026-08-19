import type { Metadata } from "next";
import PageStub from "@/components/PageStub";

export const metadata: Metadata = { title: "Retail — Leri" };

export default function Page() {
  return (
    <PageStub
      kicker="Industries"
      title="Orders, returns and refunds"
      blurb="Where the order sits, what it costs to send back, and who pays for it."
    />
  );
}
