import type { Metadata } from "next";
import ProductPage from "@/components/ProductPage";
import { productBySlug } from "@/lib/products-content";

export const metadata: Metadata = { title: "Insights & reporting — Leri" };

export default function Page() {
  return <ProductPage product={productBySlug["insights"]} />;
}
