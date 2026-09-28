import Link from "next/link";
import { ArrowIcon } from "@/components/Icons";
import { products } from "@/lib/products";

export function Products({ heading = "h2" }: { heading?: "h1" | "h2" }) {
  const Title = heading;

  return (
    <section className="products" id="products">
      <div className="container">
        <div className="products-header reveal">
          <div className="products-header-text">
            <span className="section-label">Our Solutions</span>
            <Title className="section-title">
              POWER SOLUTIONS FOR <span className="highlight">EVERY NEED</span>
            </Title>
            <p style={{ color: "var(--gray-300)" }}>
              Online and offline UPS, elevator backup, batteries, solar, and stabilizers. We also deal in{" "}
              <Link href="/#brands">Luminous, Amaron, Microtek, and Amaze</Link>.{" "}
              <Link href="/products">See the full range.</Link>
            </p>
          </div>
          <div className="products-nav" aria-hidden="true">
            <button type="button" tabIndex={-1}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <button type="button" tabIndex={-1}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        <div className="products-grid">
          {products.map((product, index) => (
            <article className="product-card-grid reveal" key={product.slug} style={{ transitionDelay: `${(index + 1) * 0.1}s` }}>
              <Link href={`/products/${product.slug}`} className="product-image">
                <img src={product.image} alt={product.imageAlt} />
              </Link>
              <h3>
                <Link href={`/products/${product.slug}`}>{product.cardTitle}</Link>
              </h3>
              <span className="tagline">{product.tagline}</span>
              <p>{product.summary}</p>
              <Link href={`/?product=${product.inquiry}#contact`} className="learn-more">
                Get Quote
                <ArrowIcon />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
