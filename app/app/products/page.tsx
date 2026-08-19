import type { Metadata } from "next";
import PageStub from "@/components/PageStub";

export const metadata: Metadata = { title: "Product overview — Leri" };

export default function Page() {
  return (
    <PageStub
      kicker="Products"
      title="Eleven parts, one policy set"
      blurb="Channels, build tools, optimisation and reporting — all governed by the same permissions and audit layer."
    />
  );
}
