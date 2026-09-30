import type { MetadataRoute } from "next";
import { areas } from "@/lib/areas";
import { brandPages } from "@/lib/brands";
import { guides } from "@/lib/guides";
import { products } from "@/lib/products";
import { getProductSeo } from "@/lib/product-seo";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

export const dynamic = "force-static";

type Entry = {
  path: string;
  lastModified: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

function productLastMod(slug: string) {
  return getProductSeo(slug)?.lastModified ?? "2026-09-30";
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: Entry[] = [
    { path: "/", lastModified: "2026-09-30", priority: 1, changeFrequency: "weekly" },
    { path: "/products/", lastModified: "2026-09-30", priority: 0.8, changeFrequency: "weekly" },
    ...products.map((product) => ({
      path: `/products/${product.slug}/`,
      lastModified: productLastMod(product.slug),
      priority: 0.8,
      changeFrequency: "weekly" as const,
    })),
    { path: "/about/", lastModified: "2026-09-30", priority: 0.6, changeFrequency: "monthly" },
    { path: "/contact/", lastModified: "2026-09-30", priority: 0.8, changeFrequency: "monthly" },
    { path: "/service/", lastModified: "2026-09-30", priority: 0.8, changeFrequency: "monthly" },
    { path: "/faq/", lastModified: "2026-09-30", priority: 0.6, changeFrequency: "monthly" },
    { path: "/warranty/", lastModified: "2026-09-30", priority: 0.5, changeFrequency: "monthly" },
    { path: "/downloads/", lastModified: "2026-09-30", priority: 0.5, changeFrequency: "monthly" },
    { path: "/careers/", lastModified: "2026-09-30", priority: 0.4, changeFrequency: "monthly" },
    { path: "/privacy/", lastModified: "2026-09-30", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms/", lastModified: "2026-09-30", priority: 0.3, changeFrequency: "yearly" },
    { path: "/guides/", lastModified: "2026-09-30", priority: 0.6, changeFrequency: "weekly" },
    { path: "/projects/", lastModified: "2026-09-30", priority: 0.4, changeFrequency: "monthly" },
    ...guides.map((guide) => ({
      path: `/guides/${guide.slug}/`,
      lastModified: guide.dateModified,
      priority: 0.6,
      changeFrequency: "monthly" as const,
    })),
    ...areas.map((area) => ({
      path: `/${area.slug}/`,
      lastModified: area.lastModified,
      priority: 0.8,
      changeFrequency: "monthly" as const,
    })),
    ...brandPages.map((brand) => ({
      path: `/brands/${brand.slug}/`,
      lastModified: brand.lastModified,
      priority: 0.6,
      changeFrequency: "monthly" as const,
    })),
  ];

  if (projects.length > 0) {
    entries.push({
      path: "/projects/",
      lastModified: "2026-09-30",
      priority: 0.5,
      changeFrequency: "monthly",
    });
    for (const project of projects) {
      entries.push({
        path: `/projects/${project.slug}/`,
        lastModified: project.date,
        priority: 0.5,
        changeFrequency: "monthly",
      });
    }
  }

  return entries.map((entry) => ({
    url: `${site.url}${entry.path}`,
    lastModified: new Date(entry.lastModified),
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}
