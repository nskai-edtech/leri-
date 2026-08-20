import type { Metadata } from "next";
import PageStub from "@/components/PageStub";

export const metadata: Metadata = { title: "Experiments — Leri" };

export default function Page() {
  return (
    <PageStub
      kicker="Products"
      title="Live A/B testing"
      blurb="Run a variant against a slice of traffic, with a rollback that takes one click."
    />
  );
}
