import type { MetadataRoute } from "next";
import { products } from "@/lib/products";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const paths = [
    "/",
    "/products/",
    ...products.map((product) => `/products/${product.slug}/`),
    "/faq/",
    "/careers/",
    "/warranty/",
    "/downloads/",
    "/service/",
    "/privacy/",
    "/terms/",
  ];

  return paths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency: path === "/" || path.startsWith("/products") ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/products") ? 0.8 : 0.4,
  }));
}
