import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage } from "@/components/ContentPage";
import { products } from "@/lib/products";
import { site } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Product Datasheets",
  description: "Request Teamtronix product datasheets for UPS, inverters, batteries, stabilizers, and solar systems.",
  path: "/downloads",
});

export default function DownloadsPage() {
  return (
    <ContentPage
      label="Support"
      title={
        <>
          DATASHEETS <span className="highlight">& DOWNLOADS</span>
        </>
      }
      crumbs={[{ href: "/", label: "Home" }, { label: "Downloads" }]}
    >
      <p>
        Product datasheets are sent on request so you receive the sheet that matches the rating you need. Email{" "}
        {site.emails.map((email, index) => (
          <span key={email}>
            {index > 0 ? " or " : null}
            <a href={`mailto:${email}`}>{email}</a>
          </span>
        ))}{" "}
        or use the quote form and name the product.
      </p>
      <ul>
        {products.map((product) => (
          <li key={product.slug}>
            <Link href={`/products/${product.slug}`}>{product.name}</Link> — {product.tagline}
          </li>
        ))}
      </ul>
    </ContentPage>
  );
}
