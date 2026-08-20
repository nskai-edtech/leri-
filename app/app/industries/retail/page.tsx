import type { Metadata } from "next";
import IndustryPage from "@/components/IndustryPage";
import { industryBySlug } from "@/lib/industries-content";

export const metadata: Metadata = { title: "Retail — Leri" };

export default function Page() {
  return <IndustryPage industry={industryBySlug["retail"]} />;
}
