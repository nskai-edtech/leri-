import type { Metadata } from "next";
import PageStub from "@/components/PageStub";

export const metadata: Metadata = { title: "Insights & reporting — Leri" };

export default function Page() {
  return (
    <PageStub
      kicker="Products"
      title="Voice of the customer"
      blurb="What people are actually asking for, and where the policy gaps are."
    />
  );
}
