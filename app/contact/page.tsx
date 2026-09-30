import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { areas } from "@/lib/areas";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";
import { SITE, site, whatsappHref } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Contact Teamtronix – UPS Dealer in R.T. Nagar, Bengaluru",
  description:
    "Visit Teamtronix at Adi Kabeer Ashram Road, R.T. Nagar, Bengaluru. Call 99809 43021 / 99800 92410 or WhatsApp for a UPS quote.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main id="main">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact/" },
        ])}
      />
      <section className="about">
        <div className="container">
          <Breadcrumb items={[{ href: "/", label: "Home" }, { label: "Contact" }]} />
          <span className="section-label">R.T. Nagar office</span>
          <h1 className="section-title">Contact Teamtronix in R.T. Nagar</h1>

          <div className="prose">
            <p>
              Walk in or call from anywhere in North Bengaluru. We are on Adi Kabeer Ashram Road near VCare Hospital,
              easy to reach from Hebbal, Ganganagar and Sultanpalya.
            </p>

            <h2>Address &amp; phones</h2>
            <p>{site.address.line}</p>
            <p>GSTIN: {SITE.gstin}</p>
            <ul>
              <li>
                Phone / WhatsApp:{" "}
                <a href={`tel:${SITE.phoneE164.primary}`}>{SITE.phones.primary}</a> ·{" "}
                <a href={SITE.whatsapp.primary} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
              <li>
                Phone / WhatsApp:{" "}
                <a href={`tel:${SITE.phoneE164.secondary}`}>{SITE.phones.secondary}</a> ·{" "}
                <a href={SITE.whatsapp.secondary} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
              {SITE.emails.map((email) => (
                <li key={email}>
                  Email: <a href={`mailto:${email}`}>{email}</a>
                </li>
              ))}
            </ul>

            <h2>Opening hours</h2>
            <table className="seo-table">
              <thead>
                <tr>
                  <th scope="col">Days</th>
                  <th scope="col">Opens</th>
                  <th scope="col">Closes</th>
                </tr>
              </thead>
              <tbody>
                {SITE.openingHours.map((block) => (
                  <tr key={block.days.join("-")}>
                    <td>{block.days.join(", ")}</td>
                    <td>{block.opens}</td>
                    <td>{block.closes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* TODO(owner): replace opening hours with confirmed values */}

            <h2>Map</h2>
            {SITE.googleMapsUrl ? (
              <p>
                <a href={SITE.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                  Open in Google Maps
                </a>
              </p>
            ) : null}
            {/* TODO(owner): add Google Business Profile share link */}
            <div className="map-embed">
              <iframe
                title="Teamtronix R.T. Nagar on Google Maps"
                src={SITE.googleMapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <h2>How to reach us</h2>
            <p>
              Our shop is near VCare Hospital on Adi Kabeer Ashram Road in R.T. Nagar. Visitors from Hebbal,
              Ganganagar and Sultanpalya typically reach us in a short drive across North Bengaluru. Call ahead if you
              need parking guidance or a specific engineer.
            </p>

            <h2>Areas we serve</h2>
            <ul>
              {areas.map((area) => (
                <li key={area.slug}>
                  <Link href={`/${area.slug}/`}>{area.h1}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="contact" id="quote">
        <div className="container">
          <div className="contact-form-container" style={{ maxWidth: 560, margin: "0 auto" }}>
            <h2>Request a Quote</h2>
            <p className="form-subtitle">WhatsApp opens with your details ready to send.</p>
            <ContactForm />
            <p style={{ marginTop: "1rem" }}>
              Or message directly:{" "}
              <a
                href={whatsappHref("Hi Teamtronix, I would like a quote.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp {SITE.phones.primary}
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
