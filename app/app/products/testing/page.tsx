import type { Metadata } from "next";
import PageStub from "@/components/PageStub";

export const metadata: Metadata = { title: "Testing & QA — Leri" };

export default function Page() {
  return (
    <PageStub
      kicker="Products"
      title="Simulations at scale"
      blurb="Replay thousands of past conversations before a customer sees anything."
    />
  );
}
