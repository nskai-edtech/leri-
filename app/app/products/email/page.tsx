import type { Metadata } from "next";
import PageStub from "@/components/PageStub";

export const metadata: Metadata = { title: "Email — Leri" };

export default function Page() {
  return (
    <PageStub
      kicker="Products"
      title="Contextual resolutions"
      blurb="Long threads with three questions buried in them, answered in your house style."
    />
  );
}
