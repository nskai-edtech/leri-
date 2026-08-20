import type { Metadata } from "next";
import PageStub from "@/components/PageStub";

export const metadata: Metadata = { title: "Monitor — Leri" };

export default function Page() {
  return (
    <PageStub
      kicker="Products"
      title="Always-on QA"
      blurb="Every conversation scored, every action logged against the policy that authorised it."
    />
  );
}
