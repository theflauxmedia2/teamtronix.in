import Link from "next/link";
import { ArrowIcon, CheckIcon } from "@/components/Icons";

const features = [
  "Galvanic Isolation for complete electrical safety",
  "Power Factor Correction (PFC) for efficiency",
  "Remote monitoring & Battery Misery Topology",
  "Xtra Cooling Device for extended lifespan",
  "Zero transfer time — instant power backup",
];

export function Featured() {
  return (
    <section className="featured">
      <div className="container">
        <div className="featured-grid">
          <div className="featured-visual reveal-left">
            <div className="featured-image-container">
              <img
                src="/assets/products/product-range.png"
                alt="Teamtronix Complete Product Range"
                style={{ width: "100%", height: "auto", objectFit: "contain" }}
              />
            </div>
          </div>
          <div className="featured-content reveal-right">
            <span className="section-label">Complete Power Solutions</span>
            <h2>
              TEAMTRONIX <span className="highlight">PRODUCT RANGE</span>
            </h2>
            <p className="subtitle">UPS Systems • Solar Solutions • Batteries • Stabilizers</p>
            <p>
              From online UPS and elevator backup to solar and stabilizers, we offer a complete range of power electronics engineered for homes, businesses, and industry. Trusted by hospitals, data centers, and leading companies across India.
            </p>
            <ul className="feature-list">
              {features.map((feature) => (
                <li key={feature}>
                  <CheckIcon />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link className="btn-primary" href="/#contact">
              Request Quotation
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
