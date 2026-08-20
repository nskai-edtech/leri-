import type { Metadata } from "next";
import PageStub from "@/components/PageStub";

export const metadata: Metadata = { title: "Contact — Leri" };

export default function Page() {
  return (
    <PageStub
      kicker="Company"
      title="Book a demo"
      blurb="Send us a week of real conversations. We'll show you what Leri would have done with them."
    />
  );
}
