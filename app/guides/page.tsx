import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage } from "@/components/ContentPage";
import { JsonLd } from "@/components/JsonLd";
import { guides } from "@/lib/guides";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "UPS & Inverter Guides for Bangalore | Teamtronix",
  description:
    "Practical guides on lift UPS vs DG sets, inverter sizing for 2BHK/3BHK flats, and power backup in Bengaluru.",
  path: "/guides",
});

export default function GuidesIndexPage() {
  return (
    <ContentPage
      label="Guides"
      title="Power Backup Guides for Bengaluru"
      crumbs={[{ href: "/", label: "Home" }, { label: "Guides" }]}
    >
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides/" },
        ])}
      />
      <ul>
        {guides.map((guide) => (
          <li key={guide.slug}>
            <Link href={`/guides/${guide.slug}/`}>{guide.title}</Link>
            <p>{guide.description}</p>
          </li>
        ))}
      </ul>
    </ContentPage>
  );
}
