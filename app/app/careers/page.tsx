import type { Metadata } from "next";
import PageStub from "@/components/PageStub";

export const metadata: Metadata = { title: "Careers — Leri" };

export default function Page() {
  return (
    <PageStub
      kicker="Company"
      title="Come build the boring parts"
      blurb="No open roles listed. Leave an email and what you'd want to work on."
    />
  );
}
