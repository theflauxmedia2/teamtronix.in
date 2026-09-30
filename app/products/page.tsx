import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { brandPages } from "@/lib/brands";
import { products } from "@/lib/products";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "UPS, Inverter & Battery Range | Teamtronix Bangalore",
  description:
    "Online & home UPS, lift UPS, inverter batteries, servo stabilizers and solar UPS for homes, apartments and businesses in Bengaluru.",
  path: "/products",
});

const needTable = [
  { need: "Power cuts at home", product: "Home UPS / inverter + battery", href: "/products/offline-ups/" },
  { need: "Apartment lift stops in power cuts", product: "Lifton lift UPS", href: "/products/lifton/" },
  { need: "Hospital, server or clinic equipment", product: "Online UPS", href: "/products/online-ups/" },
  {
    need: "Voltage fluctuations damaging appliances",
    product: "Servo stabilizer",
    href: "/products/servo-stabilizer/",
  },
  { need: "Cut electricity bills", product: "On-grid / hybrid solar UPS", href: "/products/solar-ongrid/" },
  { need: "Lighting for roads and campuses", product: "Solar street lights", href: "/products/solar-street-lights/" },
];

export default function ProductsPage() {
  return (
    <main id="main" className="catalog">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Products", path: "/products/" },
        ])}
      />
      <header className="catalog-hero">
        <div className="container">
          <p className="catalog-kicker">Teamtronix India</p>
          <h1>Power Backup Products for Bengaluru Homes &amp; Businesses</h1>
          <p>
            From R.T. Nagar we supply online and home UPS, Lifton lift UPS for apartment elevators, inverter and solar
            batteries, servo stabilizers, on-grid and hybrid solar UPS, and solar street lights. Whether you are
            protecting a 2BHK, a clinic, or a G+ lift, start with the category below — then ask us to size the rating
            to your load. We also supply and service Luminous, Amaron, Microtek and Amaze alongside Teamtronix and Team
            Tech.
          </p>
        </div>
      </header>

      <div className="container catalog-wrap prose">
        <h2>Which product do I need?</h2>
        <table className="seo-table">
          <thead>
            <tr>
              <th scope="col">Need</th>
              <th scope="col">Product</th>
            </tr>
          </thead>
          <tbody>
            {needTable.map((row) => (
              <tr key={row.need}>
                <td>{row.need}</td>
                <td>
                  <Link href={row.href}>{row.product}</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>Other brands we deal in</h2>
        <ul>
          {brandPages.map((brand) => (
            <li key={brand.slug}>
              <Link href={`/brands/${brand.slug}/`}>{brand.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="container catalog-wrap">
        <ul className="catalog-grid">
          {products.map((product, index) => (
            <li key={product.slug}>
              <article className="catalog-card">
                <Link href={`/products/${product.slug}/`} className="catalog-poster">
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
                    <Link href={`/products/${product.slug}/`}>{product.cardTitle}</Link>
                  </h2>
                  <p>{product.tagline}</p>
                  <Link href={`/products/${product.slug}/`} className="catalog-open">
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
