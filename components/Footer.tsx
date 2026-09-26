import Link from "next/link";
import { site } from "@/lib/site";
import { products } from "@/lib/products";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/#home" className="footer-logo">
              <img src="/assets/icon.jpg" alt="Teamtronix Logo" className="footer-logo-img" width={48} height={48} />
              <div className="footer-logo-text">
                <span className="brand">TEAMTRONIX</span>
                <span className="tagline">Pure Power. Sure Power.</span>
              </div>
            </Link>
            <p>
              Teamtronix India Private Limited delivers UPS systems, inverter batteries, solar solutions, stabilizers,
              and power management equipment for homes, businesses, and industries.
            </p>
          </div>
          <div className="footer-column">
            <h4>Products</h4>
            <ul>
              {products.map((product) => (
                <li key={product.slug}>
                  <Link href={`/products/${product.slug}`}>{product.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><Link href="/#about">About Us</Link></li>
              <li><Link href="/#certifications">Certifications</Link></li>
              <li><Link href="/#clients">Clientele</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/#contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li><Link href="/service">Service Request</Link></li>
              <li><Link href="/warranty">Warranty</Link></li>
              <li><Link href="/downloads">Downloads</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {year} {site.name} All rights reserved.</p>
          <div className="legal">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
