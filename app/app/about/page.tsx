import type { Metadata } from "next";
import PageStub from "@/components/PageStub";

export const metadata: Metadata = { title: "About — Leri" };

export default function Page() {
  return (
    <PageStub
      kicker="Company"
      title="How we build, and in what order"
      blurb="We build agents that are allowed to act, which means the permissions and audit layer comes first."
    />
  );
}
