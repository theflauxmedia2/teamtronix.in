import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage } from "@/components/ContentPage";
import { JsonLd } from "@/components/JsonLd";
import { products } from "@/lib/products";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";
import { SITE, moneyBackText } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "UPS & Inverter Warranty | Teamtronix",
  description:
    "Warranty terms for Teamtronix UPS, inverters, batteries and stabilizers, plus how to raise a claim in Bengaluru.",
  path: "/warranty",
});

/** TODO(owner): fill real warranty periods, then set SITE.showWarrantyTable = true */
const warrantyRows = products.map((product) => ({
  product: product.name,
  period: "", // TODO(owner)
}));

export default function WarrantyPage() {
  return (
    <ContentPage
      label="Support"
      title="Warranty & Money-Back Guarantee"
      crumbs={[{ href: "/", label: "Home" }, { label: "Warranty" }]}
    >
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Warranty", path: "/warranty/" },
        ])}
      />

      <p>{moneyBackText()}</p>
      <p>
        This page does not invent a single warranty period for every system. Ask for the written warranty that applies
        to the model you are buying when you request a quotation, and keep that document with the invoice.
      </p>

      {SITE.showWarrantyTable ? (
        <table className="seo-table">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Warranty</th>
            </tr>
          </thead>
          <tbody>
            {warrantyRows.map((row) => (
              <tr key={row.product}>
                <td>{row.product}</td>
                <td>{row.period}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>
          Warranty length depends on the product and serial — ask for the period that applies when you request a quote.
          {/* TODO(owner): fill warranty periods, then set SITE.showWarrantyTable = true */}
        </p>
      )}

      <h2>How to raise a claim</h2>
      <ol>
        <li>WhatsApp or call {SITE.phones.primary} / {SITE.phones.secondary}.</li>
        <li>Keep the invoice and serial number ready.</li>
        <li>Share the site address and a short description of the fault.</li>
        <li>We schedule a site visit or desk assessment as needed.</li>
      </ol>
      <p>
        For breakdowns outside warranty, use the <Link href="/service/">service request</Link> page.
      </p>
    </ContentPage>
  );
}
