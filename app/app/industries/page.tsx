import type { Metadata } from "next";
import PageStub from "@/components/PageStub";

export const metadata: Metadata = { title: "All industries — Leri" };

export default function Page() {
  return (
    <PageStub
      kicker="Industries"
      title="Same agent, different rulebook"
      blurb="What changes per sector is identity, limits and the system of record — not the agent."
    />
  );
}
