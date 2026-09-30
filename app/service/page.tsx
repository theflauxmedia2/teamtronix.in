import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage } from "@/components/ContentPage";
import { JsonLd } from "@/components/JsonLd";
import { areas } from "@/lib/areas";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";
import { SITE, moneyBackText, whatsappHref } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "UPS & Inverter Repair & AMC in Bangalore | Teamtronix",
  description:
    "UPS, inverter, battery and lift UPS repair and AMC in North Bengaluru: R.T. Nagar, Hebbal, HBR Layout, Thanisandra and nearby.",
  path: "/service",
});

const serviceFaqs = [
  {
    question: "Do you service other brands?",
    answer:
      "Yes. Besides Teamtronix and Team Tech we service Luminous, Amaron, Microtek and Amaze UPS, inverters and batteries. Share the model when you book.",
  },
  {
    question: "Do you offer AMC for apartment lift UPS?",
    answer:
      "Yes. Lifton and similar lift UPS installations can be enrolled for scheduled battery and connection checks.",
  },
  {
    question: "Which areas do you cover?",
    answer:
      "North Bengaluru including R.T. Nagar, Hebbal, HBR Layout, Thanisandra, Frazer Town, Pulakeshinagar and the localities linked below.",
  },
  {
    question: "How do I book a service visit?",
    answer:
      "WhatsApp or call with the product name, model, site address and a short description of the fault. We schedule the next workable visit.",
  },
  {
    question: "Do you install as well as repair?",
    answer:
      "Yes — site survey, load calculation, wiring and commissioning for new UPS, inverters, batteries, lift UPS, stabilizers and solar systems.",
  },
  {
    question: "Is there a money-back guarantee on new systems?",
    answer: moneyBackText(),
  },
];

export default function ServicePage() {
  const bookWa = whatsappHref(
    "Hi Teamtronix, I need a service visit.\nProduct:\nModel:\nSite address:\nFault:",
  );

  return (
    <ContentPage
      label="Support"
      title="UPS & Inverter Service and AMC in North Bengaluru"
      crumbs={[{ href: "/", label: "Home" }, { label: "Service" }]}
    >
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Service", path: "/service/" },
        ])}
      />
      <JsonLd data={faqSchema(serviceFaqs)} />

      <p>
        When a UPS, inverter or lift backup fails in North Bengaluru, you need a team that already knows the product
        families and the traffic between R.T. Nagar, Hebbal, HBR Layout and Thanisandra. Teamtronix handles breakdown
        repair, battery work, installation and annual maintenance from our Adi Kabeer Ashram Road office — for our own
        systems and for common brands we supply every week.
      </p>

      <h2>What we service</h2>
      <p>
        Online and offline UPS, home inverters, inverter batteries, Lifton lift UPS, servo stabilizers and solar UPS.
        Brands: Teamtronix / Team Tech, Luminous, Amaron, Microtek and Amaze. If your panel sticker shows another make,
        send a photo — we will say honestly whether we can help.
      </p>

      <h2>Breakdown repair</h2>
      <p>
        Book on{" "}
        <a href={bookWa} target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>{" "}
        or call <a href={`tel:${SITE.phoneE164.primary}`}>{SITE.phones.primary}</a>. Share the product type, model,
        site address and what the unit is doing (no display, beeping, no backup, battery not taking charge). Clear
        details mean fewer wasted trips across Bangalore traffic.
      </p>

      <h2>Battery testing &amp; replacement</h2>
      <p>
        We test ageing inverter and UPS batteries and supply Team Tech, Amaron and Luminous replacements when the bank
        is spent. Old-battery exchange may be available depending on type and condition — ask when you request a
        quote. {/* TODO(owner): confirm old-battery exchange policy */}
      </p>

      <h2>AMC (annual maintenance contracts)</h2>
      <p>
        Apartments (lift UPS), hospitals and clinics (online UPS), schools, colleges and offices enrol for scheduled
        visits instead of only calling after a failure. A typical visit covers battery health check, load test,
        cleaning, connection inspection and a short report for your facility file.
      </p>
      {SITE.amcVisitFrequency ? (
        <p>Visit frequency: {SITE.amcVisitFrequency}.</p>
      ) : (
        <p>{/* TODO(owner): set amcVisitFrequency in SITE */}Ask us for the current AMC visit frequency when you enrol.</p>
      )}

      <h2>Installation</h2>
      <p>
        New sites get a survey, load calculation, wiring plan, mounting, commissioning and a handover walkthrough.
        Associations buying <Link href="/products/lifton/">Lifton lift UPS</Link> should also review{" "}
        <Link href="/ups-amc-bangalore/">AMC options</Link> so batteries stay healthy after day one.
      </p>

      <h2>Service areas</h2>
      <ul>
        {areas.map((area) => (
          <li key={area.slug}>
            <Link href={`/${area.slug}/`}>{area.h1}</Link>
          </li>
        ))}
      </ul>

      <h2>Response time</h2>
      {SITE.serviceResponseTime ? (
        <p>{SITE.serviceResponseTime}</p>
      ) : (
        <p>
          {/* TODO(owner): set serviceResponseTime — hidden claim until set */}
          We schedule the soonest workable visit after we understand the fault and location. Call for urgent
          hospital or lift cases.
        </p>
      )}

      <h2>FAQs</h2>
      {serviceFaqs.map((faq) => (
        <section key={faq.question}>
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p>
        </section>
      ))}

      <p>
        <a className="btn-primary" href={bookWa} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex" }}>
          Book on WhatsApp
        </a>{" "}
        <a href={`tel:${SITE.phoneE164.primary}`}>Call {SITE.phones.primary}</a>
      </p>
    </ContentPage>
  );
}
