import type { Metadata } from "next";
import PageStub from "@/components/PageStub";

export const metadata: Metadata = { title: "Suggestions — Leri" };

export default function Page() {
  return (
    <PageStub
      kicker="Products"
      title="AI-powered knowledge"
      blurb="The gaps in your help centre, surfaced with the fix already drafted."
    />
  );
}
