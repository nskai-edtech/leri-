import type { Metadata } from "next";
import IndustryPage from "@/components/IndustryPage";
import { industryBySlug } from "@/lib/industries-content";

export const metadata: Metadata = { title: "Travel & hospitality — Leri" };

export default function Page() {
  return <IndustryPage industry={industryBySlug["travel"]} />;
}
