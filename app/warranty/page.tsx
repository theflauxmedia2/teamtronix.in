import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage } from "@/components/ContentPage";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Warranty & Money-Back Guarantee",
  description:
    "Teamtronix was the first company in India to offer a 100% money-back guarantee on inverters and UPS systems. Ask sales for the terms on your product.",
  path: "/warranty",
});

export default function WarrantyPage() {
  return (
    <ContentPage
      label="Support"
      title={
        <>
          WARRANTY <span className="highlight">& GUARANTEE</span>
        </>
      }
      crumbs={[{ href: "/", label: "Home" }, { label: "Warranty" }]}
    >
      <p>
        Teamtronix was the first company in India to offer a 100% money-back guarantee on inverters and UPS systems. That guarantee is part of how the company sells, and the written terms depend on the product.
      </p>
      <p>
        This page does not publish a single warranty period for every system. Ask for the warranty that applies to the model you are buying when you request a quotation, and keep that document with the invoice.
      </p>
      <p>
        For a service visit or a claim, use the <Link href="/service">service request</Link> page or call +91 99809 43021.
      </p>
    </ContentPage>
  );
}
