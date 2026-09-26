import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "@/components/Icons";
import { products } from "@/lib/products";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "UPS, Batteries, Solar & Stabilizers",
  description:
    "Teamtronix product range: online and offline UPS, Lifton elevator UPS, inverter and solar batteries, servo stabilizers, solar street lights, and ongrid hybrid solar UPS.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <main id="main" className="catalog">
      <header className="catalog-hero">
        <div className="container">
          <p className="catalog-kicker">Teamtronix India</p>
          <h1>Complete power solutions</h1>
          <p>
            UPS systems, batteries, solar, and stabilizers for homes, offices, and industry. Open a product for the
            full specification, then ask us for pricing and installation.
          </p>
        </div>
      </header>
      <div className="container catalog-wrap">
        <ul className="catalog-grid">
          {products.map((product, index) => (
            <li key={product.slug}>
              <article className="catalog-card">
                <Link href={`/products/${product.slug}`} className="catalog-poster">
                  <img
                    src={product.posterCard}
                    alt={product.imageAlt}
                    width={480}
                    height={680}
                    loading={index === 0 ? "eager" : "lazy"}
                    fetchPriority={index === 0 ? "high" : "low"}
                    decoding="async"
                  />
                </Link>
                <div className="catalog-body">
                  <h2>
                    <Link href={`/products/${product.slug}`}>{product.cardTitle}</Link>
                  </h2>
                  <p>{product.tagline}</p>
                  <Link href={`/products/${product.slug}`} className="catalog-open">
                    Open product
                    <ArrowIcon />
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
