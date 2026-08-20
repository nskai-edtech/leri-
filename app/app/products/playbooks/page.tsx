import type { Metadata } from "next";
import PageStub from "@/components/PageStub";

export const metadata: Metadata = { title: "Playbooks — Leri" };

export default function Page() {
  return (
    <PageStub
      kicker="Products"
      title="Workflows for AI agents"
      blurb="The steps an agent may take, written once and enforced everywhere."
    />
  );
}
