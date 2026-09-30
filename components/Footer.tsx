import Link from "next/link";
import { areas } from "@/lib/areas";
import { products } from "@/lib/products";
import { projects } from "@/lib/projects";
import { SITE, site, yearsInBusiness } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  const years = yearsInBusiness();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid footer-grid--wide">
          <div className="footer-brand">
            <Link href="/#home" className="footer-logo">
              <img src="/assets/logo-mark.png" alt="Teamtronix Logo" className="footer-logo-img" width={48} height={48} />
              <div className="footer-logo-text">
                <span className="brand">TEAMTRONIX</span>
                <span className="tagline">Pure Power. Sure Power.</span>
              </div>
            </Link>
            <p>
              {SITE.legalName} has supplied UPS, inverters, batteries, lift UPS, stabilizers and solar systems in
              Bengaluru for {years}+ years from our R.T. Nagar office.
            </p>
            <p className="footer-hours">
              <strong>Hours:</strong>{" "}
              {SITE.openingHours[0].days[0]}–{SITE.openingHours[0].days[SITE.openingHours[0].days.length - 1]}{" "}
              {SITE.openingHours[0].opens}–{SITE.openingHours[0].closes}
              {/* TODO(owner): confirm opening hours */}
            </p>
          </div>
          <div className="footer-column">
            <h4>Products</h4>
            <ul>
              {products.map((product) => (
                <li key={product.slug}>
                  <Link href={`/products/${product.slug}/`}>{product.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><Link href="/about/">About Us</Link></li>
              <li><Link href="/about/#certifications">Certifications</Link></li>
              <li><Link href="/#clients">Clientele</Link></li>
              <li><Link href="/#brands">Brands We Deal In</Link></li>
              <li><Link href="/service/">Services &amp; AMC</Link></li>
              <li><Link href="/guides/">Guides</Link></li>
              {projects.length > 0 ? <li><Link href="/projects/">Projects</Link></li> : null}
              <li><Link href="/careers/">Careers</Link></li>
              <li><Link href="/contact/">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li><Link href="/service/">Service Request</Link></li>
              <li><Link href="/warranty/">Warranty</Link></li>
              <li><Link href="/downloads/">Downloads</Link></li>
              <li><Link href="/faq/">FAQ</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Areas we serve</h4>
            <ul>
              {areas.map((area) => (
                <li key={area.slug}>
                  <Link href={`/${area.slug}/`}>
                    {area.slug.startsWith("lift-ups-")
                      ? `${area.areaName} · Lift UPS`
                      : area.slug === "online-ups-for-hospitals"
                        ? "Hospitals & clinics"
                        : area.slug === "ups-amc-bangalore"
                          ? "AMC · Bengaluru"
                          : area.areaName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {year} {site.name} All rights reserved.
            <br />
            GSTIN: {site.gstin}
          </p>
          <div className="legal">
            <Link href="/privacy/">Privacy Policy</Link>
            <Link href="/terms/">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
