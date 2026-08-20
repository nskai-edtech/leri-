import type { Metadata } from "next";
import ProductPage from "@/components/ProductPage";
import { productBySlug } from "@/lib/products-content";

export const metadata: Metadata = { title: "Suggestions — Leri" };

export default function Page() {
  return <ProductPage product={productBySlug["suggestions"]} />;
}
