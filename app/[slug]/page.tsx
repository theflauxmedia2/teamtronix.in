import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ArrowIcon } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { areas, getArea } from "@/lib/areas";
import { getProduct } from "@/lib/products";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";
import { SITE, moneyBackText, site, whatsappHref, yearsInBusiness } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return areas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return {};
  return pageMeta({
    title: area.title,
    description: area.description,
    path: `/${area.slug}`,
  });
}

export default async function AreaPage({ params }: Props) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  const years = yearsInBusiness();
  const wa = whatsappHref(
    `Hi Teamtronix, I need UPS / inverter help in ${area.areaName}. Please call me back.`,
  );
  const isFrazer = area.slug === "ups-dealer-frazer-town";

  return (
    <main id="main">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: area.h1, path: `/${area.slug}/` },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: area.serviceType,
          description: area.description,
          areaName: area.areaServedLabel,
          url: `/${area.slug}/`,
        })}
      />
      <JsonLd data={faqSchema(area.localFaqs)} />

      <section className="about">
        <div className="container prose">
          <Breadcrumb items={[{ href: "/", label: "Home" }, { label: area.areaName }]} />
          <span className="section-label">Local service</span>
          <h1 className="section-title">{area.h1}</h1>

          <p>{area.intro}</p>

          {isFrazer && !SITE.hasFrazerTownBranch ? (
            <p>
              <strong>Note:</strong> Our staffed shop is in R.T. Nagar (near VCare Hospital on Adi Kabeer Ashram Road).
              We serve Frazer Town and Pulakeshinagar from there — we do not list a Frazer Town branch address on this
              page.
            </p>
          ) : null}

          <h2>Products we supply in {area.areaName}</h2>
          <ul className="area-product-cards">
            {area.focusProducts.map((item) => {
              const product = getProduct(item.slug);
              return (
                <li key={item.slug}>
                  <Link href={`/products/${item.slug}/`}>
                    {product ? (
                      <img
                        src={product.posterCard}
                        alt={product.name}
                        width={240}
                        height={340}
                        loading="lazy"
                        decoding="async"
                      />
                    ) : null}
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <h2>Services in {area.areaName}</h2>
          <p>
            Installation, breakdown repair and AMC are available through our{" "}
            <Link href="/service/">service team</Link>. Tell us the product model and site address when you book.
          </p>

          <h2>Why Teamtronix</h2>
          <p>
            Since {SITE.foundingYear} ({years}+ years) we have operated as a local R.T. Nagar power-backup shop —
            Teamtronix and Team Tech systems plus Luminous, Amaron, Microtek and Amaze. {moneyBackText()}
          </p>

          <h2>Nearby localities we also cover</h2>
          <ul>
            {area.nearbyLocalities.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>

          <h2>How to reach us / our shop</h2>
          <p>{area.fromOffice}</p>
          <p>{site.address.line}</p>
          <p>
            <a href={`tel:${SITE.phoneE164.primary}`}>{SITE.phones.primary}</a> ·{" "}
            <a href={`tel:${SITE.phoneE164.secondary}`}>{SITE.phones.secondary}</a>
          </p>
          <p>
            Hours: {SITE.openingHours[0].days[0]}–Saturday {SITE.openingHours[0].opens}–
            {SITE.openingHours[0].closes} {/* TODO(owner): confirm hours */}
          </p>

          {area.jobs.length > 0 ? (
            <section>
              <h2>Recent work</h2>
              <ul>
                {area.jobs.map((job) => (
                  <li key={job.src}>
                    <img src={job.src} alt={job.caption} loading="lazy" />
                    <p>{job.caption}</p>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
          {/* TODO(owner): add installation photos for area pages */}

          <h2>FAQs</h2>
          {area.localFaqs.map((faq) => (
            <div key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}

          <p>
            <a className="btn-primary" href={wa} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex" }}>
              WhatsApp about {area.areaName}
              <ArrowIcon />
            </a>{" "}
            <a href={`tel:${SITE.phoneE164.primary}`}>Call {SITE.phones.primary}</a>
          </p>
        </div>
      </section>
    </main>
  );
}
