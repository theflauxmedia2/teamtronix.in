import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "@/components/Icons";
import { SITE, whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  const wa = whatsappHref("Hi Teamtronix, I could not find a page on your website. Please help.");

  return (
    <main id="main">
      <section className="about">
        <div className="container">
          <span className="section-label">404</span>
          <h1 className="section-title">
            PAGE <span className="highlight">NOT FOUND</span>
          </h1>
          <p className="prose">That address is not on the Teamtronix site. Try one of these:</p>
          <div className="page-actions" style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            <Link className="btn-primary" href="/products/">
              Products
              <ArrowIcon />
            </Link>
            <Link className="btn-primary" href="/service/">
              Service
              <ArrowIcon />
            </Link>
            <Link className="btn-primary" href="/contact/">
              Contact
              <ArrowIcon />
            </Link>
            <a className="btn-secondary" href={wa} target="_blank" rel="noopener noreferrer">
              WhatsApp {SITE.phones.primary}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
