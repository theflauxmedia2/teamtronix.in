import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info reveal-left">
            <span className="section-label">Get In Touch</span>
            <h2>
              LET&apos;S <span className="highlight">POWER</span> YOUR SUCCESS
            </h2>
            <p>
              Empowering homes and businesses with reliable energy solutions for a brighter tomorrow. Visit us in
              R.T. Nagar or call either line. Full details, map and hours are on our{" "}
              <Link href="/contact/">contact page</Link>.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div className="info">
                  <h3>Visit Us</h3>
                  <p>
                    {site.address.line}
                    <br />
                    GSTIN: {site.gstin}
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <div className="info">
                  <h3>Call Us</h3>
                  <p>
                    <a href={`tel:${site.phones[0].tel}`}>{site.phones[0].display}</a>
                    <br />
                    <a href={`tel:${site.phones[1].tel}`}>{site.phones[1].display}</a>
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <div className="info">
                  <h3>Email Us</h3>
                  <p>
                    {site.emails.map((email, index) => (
                      <span key={email}>
                        {index > 0 ? <br /> : null}
                        <a href={`mailto:${email}`}>{email}</a>
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
            <p>
              <Link href="/contact/#quote">Open the full contact page</Link> for WhatsApp links, map and service areas.
            </p>
          </div>
          <div className="contact-form-container reveal-right" id="quote">
            <h3>Request a Quote</h3>
            <p className="form-subtitle">Fill this in and WhatsApp opens with your details already written, ready to send.</p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
