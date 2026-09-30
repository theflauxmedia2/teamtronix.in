import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage } from "@/components/ContentPage";
import { JsonLd } from "@/components/JsonLd";
import { clientGroups, products } from "@/lib/products";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";
import { SITE, moneyBackText, yearsInBusiness } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "About Teamtronix – UPS Experts in Bengaluru Since 1994",
  description:
    "Teamtronix India Pvt. Ltd. started in 1994 as Kamati Electro Networks. UPS, inverter, lift UPS and solar from R.T. Nagar, Bengaluru.",
  path: "/about",
});

const showFounders = false; // TODO(owner): set true after adding names and photos

export default function AboutPage() {
  const years = yearsInBusiness();
  const corporates = clientGroups.find((g) => g.label === "Corporates")?.clients ?? [];
  const hospitals = clientGroups.find((g) => g.label === "Hospitals")?.clients ?? [];
  const institutions = clientGroups.find((g) => g.label === "Institutions")?.clients ?? [];

  return (
    <ContentPage
      label="Company"
      title="About Teamtronix India"
      crumbs={[{ href: "/", label: "Home" }, { label: "About" }]}
    >
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about/" },
        ])}
      />

      <section>
        <h2>Our story</h2>
        <p>
          Teamtronix began in {SITE.foundingYear} as Kamati Electro Networks — one employee and Rs. 5,000. Over {years}+
          years that workshop became Teamtronix India Private Limited, still rooted in R.T. Nagar, Bengaluru, and still
          focused on power backup that homes and businesses can rely on.
        </p>
        <p>
          From Adi Kabeer Ashram Road near VCare Hospital we design, supply and service UPS systems, inverters,
          batteries, Lifton lift UPS, servo stabilizers and solar solutions across North Bengaluru — Bangalore and
          Bengaluru customers know us as a local dealer who also manufactures under Teamtronix and Team Tech brands.
        </p>
      </section>

      <section>
        <h2>What we do</h2>
        <ul>
          {products.map((product) => (
            <li key={product.slug}>
              <Link href={`/products/${product.slug}/`}>{product.name}</Link> — {product.tagline}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Who we serve</h2>
        <p>
          Homes, apartments, shops, offices, hospitals, schools and colleges, and corporates. Clientele shown on this
          site includes {corporates.map((c) => c.name).slice(0, 8).join(", ")} and others; hospitals such as{" "}
          {hospitals.map((c) => c.name).join(", ")}; and institutions including{" "}
          {institutions.map((c) => c.name).join(", ")}.
        </p>
      </section>

      <section id="certifications">
        <h2>Certifications</h2>
        <ul>
          <li>
            {SITE.isoVersion} (British Certifications Inc.)
            {/* TODO(owner): confirm ISO 9001:2015 renewal */}
          </li>
          <li>CPRI — Central Power Research Institute</li>
          <li>ETDC approval</li>
          <li>MSME registration with the Government of India</li>
        </ul>
      </section>

      <section>
        <h2>Our values: First, Innovation, Power</h2>
        <p>
          <strong>First</strong> — quality and customer satisfaction come first. <strong>Innovation</strong> —
          dependable technology for homes and industry. <strong>Power</strong> — backup and energy solutions that stay
          on. {moneyBackText()}
        </p>
      </section>

      {showFounders ? (
        <section>
          <h2>Founders &amp; team</h2>
          {/* TODO(owner): names and photos */}
        </section>
      ) : null}

      <p>
        <Link className="btn-primary" href="/contact/#quote" style={{ display: "inline-flex" }}>
          Talk to Teamtronix
        </Link>
      </p>
    </ContentPage>
  );
}
