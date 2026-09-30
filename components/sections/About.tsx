import Link from "next/link";
import { moneyBackText, yearsInBusiness } from "@/lib/site";

export function About() {
  const years = yearsInBusiness();

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-image reveal-left">
            <div className="about-image-main">
              <img
                src="/assets/logo.png"
                alt="Teamtronix Logo"
                width={200}
                height={188}
                className="about-logo"
                loading="lazy"
                decoding="async"
                style={{ width: 200, height: "auto" }}
              />
              <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
                <div style={{ fontSize: "0.8rem", color: "var(--gray-500)", letterSpacing: "0.2em" }}>INDIA PVT. LTD.</div>
              </div>
            </div>
            <div className="year-badge">
              <span className="since">Since</span>
              <span className="year">1994</span>
            </div>
          </div>
          <div className="about-content reveal-right">
            <span className="section-label">Total Power Solutions</span>
            <h2>
              RELIABLE <span className="highlight">ENERGY</span> SOLUTIONS
            </h2>
            <p className="lead">First • Innovation • Power</p>
            <p>
              For {years}+ years Teamtronix India Private Limited has supplied UPS, inverters, batteries, lift UPS,
              stabilizers and solar systems from R.T. Nagar, Bengaluru. We started in 1994 as Kamati Electro Networks
              and still serve homes, apartments, hospitals, schools and corporates across North Bengaluru.
            </p>
            <p>{moneyBackText()}</p>
            <div className="values-grid">
              <div className="value-item">
                <h3>First</h3>
                <p>Quality and customer satisfaction come first</p>
              </div>
              <div className="value-item">
                <h3>Innovation</h3>
                <p>Dependable technology for homes and industry</p>
              </div>
              <div className="value-item">
                <h3>Power</h3>
                <p>Backup and energy solutions that stay on</p>
              </div>
            </div>
            <Link className="btn-primary" href="/about/" style={{ marginTop: "1.5rem", display: "inline-flex" }}>
              Read our story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
