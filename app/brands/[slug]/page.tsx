import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { JsonLd } from "@/components/JsonLd";
import { brandPages, getBrandPage } from "@/lib/brands";
import { getProduct } from "@/lib/products";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";
import { SITE, whatsappHref } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return brandPages.map((brand) => ({ slug: brand.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const brand = getBrandPage(slug);
  if (!brand) return {};
  return pageMeta({
    title: brand.title,
    description: brand.description,
    path: `/brands/${brand.slug}`,
  });
}

export default async function BrandPage({ params }: Props) {
  const { slug } = await params;
  const brand = getBrandPage(slug);
  if (!brand) notFound();

  const wa = whatsappHref(`Hi Teamtronix, I need ${brand.name} supply / service in Bengaluru.`);

  return (
    <main id="main">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Brands", path: "/#brands" },
          { name: brand.name, path: `/brands/${brand.slug}/` },
        ])}
      />
      <JsonLd data={faqSchema(brand.faqs)} />

      <section className="about">
        <div className="container prose">
          <Breadcrumb
            items={[
              { href: "/", label: "Home" },
              { href: "/#brands", label: "Brands" },
              { label: brand.name },
            ]}
          />
          <span className="section-label">{brand.name}</span>
          <h1 className="section-title">{brand.h1}</h1>

          <p>{brand.intro}</p>
          <p>
            {brand.authorised
              ? `Authorised ${brand.name} dealer in R.T. Nagar, Bengaluru.`
              : `We supply and service ${brand.name} products from our R.T. Nagar shop.`}{" "}
            {/* TODO(owner): set authorised=true only with written authorisation */}
          </p>

          <h2>What we supply</h2>
          <ul>
            {brand.productsSupplied.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2>Sales, installation and service</h2>
          <p>
            From quotation to installation and later battery or board-level service, the same Bengaluru team handles{" "}
            {brand.name} enquiries. Call {SITE.phones.primary} or use WhatsApp.
          </p>

          <h2>Related Teamtronix product pages</h2>
          <ul>
            {brand.relatedProductSlugs.map((productSlug) => {
              const product = getProduct(productSlug);
              return (
                <li key={productSlug}>
                  <Link href={`/products/${productSlug}/`}>{product?.name ?? productSlug}</Link>
                </li>
              );
            })}
          </ul>

          <h2>FAQs</h2>
          {brand.faqs.map((faq) => (
            <div key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}

          <p>
            <a className="btn-primary" href={wa} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex" }}>
              Enquire about {brand.name} on WhatsApp
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
