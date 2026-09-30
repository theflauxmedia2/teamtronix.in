import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage } from "@/components/ContentPage";
import { JsonLd } from "@/components/JsonLd";
import { products } from "@/lib/products";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";
import { whatsappHref } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "UPS & Inverter Datasheets | Teamtronix",
  description: "Request datasheets for Teamtronix online UPS, lift UPS, inverters, batteries and stabilizers.",
  path: "/downloads",
});

export default function DownloadsPage() {
  return (
    <ContentPage
      label="Support"
      title="Request a Product Datasheet"
      crumbs={[{ href: "/", label: "Home" }, { label: "Downloads" }]}
    >
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Downloads", path: "/downloads/" },
        ])}
      />

      <p>
        PDF datasheets are sent on request so you receive the sheet that matches the rating you need. Use WhatsApp
        below — each link opens a pre-filled message for that product.
      </p>
      {/* TODO(owner): add PDF files under public/ when available and link them here */}
      <ul>
        {products.map((product) => (
          <li key={product.slug}>
            <Link href={`/products/${product.slug}/`}>{product.name}</Link>
            {" — "}
            <a
              href={whatsappHref(`Hi Teamtronix, please send the datasheet for ${product.inquiryLabel}`)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Request datasheet on WhatsApp
            </a>
          </li>
        ))}
      </ul>
    </ContentPage>
  );
}
