import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { preload } from "react-dom";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ArrowIcon, CheckIcon } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { getProduct, products } from "@/lib/products";
import { getProductSeo } from "@/lib/product-seo";
import { brandPages } from "@/lib/brands";
import { breadcrumbSchema, faqSchema, productSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";
import { site, whatsappHref } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  const seo = getProductSeo(slug);
  if (!product || !seo) return {};
  return pageMeta({
    title: seo.title,
    description: seo.description,
    path: `/products/${product.slug}`,
    image: product.poster,
    ogType: "product",
  });
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  const seo = getProductSeo(slug);
  if (!product || !seo) notFound();

  const others = products.filter((item) => item.slug !== product.slug).slice(0, 3);
  const posterSrcSet = `${product.posterCard} 480w, ${product.poster} ${product.posterWidth}w`;
  const posterSizes = "(max-width: 860px) 92vw, 520px";
  preload(product.poster, {
    as: "image",
    fetchPriority: "high",
    imageSrcSet: posterSrcSet,
    imageSizes: posterSizes,
  });

  const priceWa = whatsappHref(
    `Hi Teamtronix, please share today's price for ${product.inquiryLabel} in Bangalore.`,
  );
  const relatedBrands = brandPages.filter((b) => seo.relatedBrandSlugs?.includes(b.slug));

  return (
    <main id="main" className="sheet-page">
      <JsonLd data={productSchema({ ...product, priceFrom: seo.priceFrom })} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Products", path: "/products/" },
          { name: product.name, path: `/products/${product.slug}/` },
        ])}
      />
      <JsonLd data={faqSchema(seo.faqs)} />
      <article className="sheet">
        <div className="container">
          <Breadcrumb
            items={[
              { href: "/", label: "Home" },
              { href: "/products/", label: "Products" },
              { label: product.name },
            ]}
          />
          <header className="sheet-hero">
            <div className="sheet-copy">
              <p className="sheet-brand">Teamtronix</p>
              <h1>{seo.h1}</h1>
              <p className="sheet-kicker">{product.kicker}</p>
              {product.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <Link className="btn-primary" href="/contact/#quote">
                Ask for pricing
                <ArrowIcon />
              </Link>
            </div>
            <figure className="sheet-poster">
              <img
                src={product.poster}
                srcSet={posterSrcSet}
                sizes={posterSizes}
                width={product.posterWidth}
                height={product.posterHeight}
                alt={product.imageAlt}
                fetchPriority="high"
                decoding="async"
              />
            </figure>
          </header>

          <ul className="sheet-highlights">
            {product.highlights.map((item) => (
              <li key={item.title}>
                <h2>{item.title}</h2>
                <p>{item.detail}</p>
              </li>
            ))}
          </ul>

          <section className="sheet-seo-block" aria-labelledby="what-is-heading">
            <h2 id="what-is-heading">What is a {product.inquiryLabel} and who needs it</h2>
            {seo.whatIs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </section>

          <section className="sheet-seo-block" aria-labelledby="ratings-heading">
            <h2 id="ratings-heading">Available ratings</h2>
            {seo.showRatings && seo.ratings.length > 0 ? (
              <table className="seo-table">
                <tbody>
                  {seo.ratings.map((row) => (
                    <tr key={row.label}>
                      <th scope="row">{row.label}</th>
                      <td>{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>
                {/* TODO(owner): confirm ratings / kVA / Ah table */}
                We size every {product.inquiryLabel.toLowerCase()} to your load — share your appliance list on WhatsApp.
              </p>
            )}
          </section>

          <section className="sheet-seo-block" aria-labelledby="price-heading">
            <h2 id="price-heading">{product.inquiryLabel} price in Bangalore</h2>
            <p>Price depends on:</p>
            <ul>
              {seo.priceDrivers.map((driver) => (
                <li key={driver}>{driver}</li>
              ))}
            </ul>
            {seo.priceFrom != null ? (
              <p>From ₹{seo.priceFrom.toLocaleString("en-IN")} — confirm today&apos;s figure on WhatsApp.</p>
            ) : (
              <p>We do not publish list prices here. Get today&apos;s price on WhatsApp.</p>
            )}
            <a className="btn-primary" href={priceWa} target="_blank" rel="noopener noreferrer">
              Get today&apos;s price on WhatsApp
              <ArrowIcon />
            </a>
          </section>

          {seo.extraSections?.map((section) => (
            <section key={section.id} className="sheet-seo-block" aria-labelledby={section.id}>
              <h2 id={section.id}>{section.heading}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
              {section.table ? (
                <div className="table-wrap">
                  <table className="seo-table">
                    <thead>
                      <tr>
                        {section.table.headers.map((header) => (
                          <th key={header} scope="col">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row) => (
                        <tr key={row.join("-")}>
                          {row.map((cell) => (
                            <td key={cell}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : null}
            </section>
          ))}

          <section className="sheet-seo-block" aria-labelledby="areas-install-heading">
            <h2 id="areas-install-heading">Where we install in Bengaluru</h2>
            <p>
              We supply and install across North Bengaluru from our R.T. Nagar office. Relevant local pages:
            </p>
            <ul>
              {seo.areaLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="sheet-seo-block" aria-labelledby="install-service-heading">
            <h2 id="install-service-heading">Installation &amp; after-sales service</h2>
            <p>
              Site survey, load calculation, wiring, commissioning and later breakdown or AMC support are handled by
              our Bengaluru team. Details on the <Link href="/service/">service and AMC page</Link>.
            </p>
          </section>

          {relatedBrands.length > 0 ? (
            <section className="sheet-seo-block" aria-labelledby="related-brands-heading">
              <h2 id="related-brands-heading">Related brands</h2>
              <p>We also supply and service:</p>
              <ul>
                {relatedBrands.map((brand) => (
                  <li key={brand.slug}>
                    <Link href={`/brands/${brand.slug}/`}>{brand.name}</Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          <div className="sheet-split">
            <section className="sheet-why" aria-labelledby="why-heading">
              <h2 id="why-heading">Why this range</h2>
              <ul>
                {product.reasons.map((reason) => (
                  <li key={reason}>
                    <CheckIcon />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </section>
            <section className="sheet-specs" aria-labelledby="spec-heading">
              <h2 id="spec-heading">What you get</h2>
              <ul>
                {product.specs.map((spec) => (
                  <li key={spec.title}>
                    <strong>{spec.title}</strong>
                    <span>{spec.detail}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <section className="sheet-use" aria-labelledby="use-heading">
            <h2 id="use-heading">Ideal for</h2>
            <ul>
              {product.applications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="sheet-seo-block" aria-labelledby="product-faq-heading">
            <h2 id="product-faq-heading">FAQs</h2>
            {seo.faqs.map((faq) => (
              <div key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </section>

          <p className="sheet-closing">{product.closing}</p>

          <aside className="sheet-contact">
            <div>
              <h2>Talk to Teamtronix</h2>
              <p>{site.address.line}</p>
            </div>
            <div className="sheet-phones">
              {site.phones.map((phone) => (
                <a key={phone.tel} href={`tel:${phone.tel}`}>
                  {phone.display}
                </a>
              ))}
            </div>
            <Link className="btn-primary" href="/contact/#quote">
              Request a quote
              <ArrowIcon />
            </Link>
          </aside>
        </div>
      </article>

      <section className="sheet-more">
        <div className="container">
          <h2>More from the range</h2>
          <ul>
            {others.map((item) => (
              <li key={item.slug}>
                <Link href={`/products/${item.slug}/`}>
                  <img
                    src={item.posterCard}
                    alt={item.name}
                    width={480}
                    height={680}
                    loading="lazy"
                    decoding="async"
                  />
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
