import type { Metadata } from "next";
import PageStub from "@/components/PageStub";

export const metadata: Metadata = { title: "Chat — Leri" };

export default function Page() {
  return (
    <PageStub
      kicker="Products"
      title="Safe, on-brand replies"
      blurb="The channel your customers already use, answered in seconds with the account open in front of it."
    />
  );
}
