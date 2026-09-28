import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { preload } from "react-dom";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ArrowIcon, CheckIcon } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { getProduct, products } from "@/lib/products";
import { breadcrumbSchema, productSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return pageMeta({
    title: product.name,
    description: product.summary,
    path: `/products/${product.slug}`,
  });
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const others = products.filter((item) => item.slug !== product.slug).slice(0, 3);
  const posterSrcSet = `${product.posterCard} 480w, ${product.poster} ${product.posterWidth}w`;
  const posterSizes = "(max-width: 860px) 92vw, 520px";
  preload(product.poster, {
    as: "image",
    fetchPriority: "high",
    imageSrcSet: posterSrcSet,
    imageSizes: posterSizes,
  });

  return (
    <main id="main" className="sheet-page">
      <JsonLd data={productSchema(product)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Products", path: "/products/" },
          { name: product.name, path: `/products/${product.slug}/` },
        ])}
      />
      <article className="sheet">
        <div className="container">
          <Breadcrumb
            items={[
              { href: "/", label: "Home" },
              { href: "/products", label: "Products" },
              { label: product.name },
            ]}
          />
          <header className="sheet-hero">
            <div className="sheet-copy">
              <p className="sheet-brand">Trust Embedded</p>
              <h1>{product.cardTitle}</h1>
              <p className="sheet-kicker">{product.kicker}</p>
              {product.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <Link className="btn-primary" href={`/?product=${product.inquiry}#contact`}>
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

          <p className="sheet-closing">{product.closing}</p>

          <aside className="sheet-contact">
            <div>
              <h2>Talk to Teamtronix</h2>
              <p>
                {site.address.line}
              </p>
            </div>
            <div className="sheet-phones">
              {site.phones.map((phone) => (
                <a key={phone.tel} href={`tel:${phone.tel}`}>
                  {phone.display}
                </a>
              ))}
            </div>
            <Link className="btn-primary" href={`/?product=${product.inquiry}#contact`}>
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
                <Link href={`/products/${item.slug}`}>
                  <img src={item.posterCard} alt="" width={480} height={680} loading="lazy" decoding="async" />
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
