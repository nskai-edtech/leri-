import type { Metadata } from "next";
import PageStub from "@/components/PageStub";

export const metadata: Metadata = { title: "Assist — Leri" };

export default function Page() {
  return (
    <PageStub
      kicker="Products"
      title="Drafts for your team"
      blurb="For everything it doesn't resolve, it drafts the reply and pulls the account context."
    />
  );
}
