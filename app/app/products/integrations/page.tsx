import type { Metadata } from "next";
import PageStub from "@/components/PageStub";

export const metadata: Metadata = { title: "Integrations — Leri" };

export default function Page() {
  return (
    <PageStub
      kicker="Products"
      title="Tool connectors"
      blurb="Read and write access to the systems where the work actually happens."
    />
  );
}
