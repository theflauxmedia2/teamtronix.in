"use client";

import Link from "next/link";
import { ArrowIcon } from "@/components/Icons";
import { Counter } from "@/components/Counter";
import { whatsappHref } from "@/lib/site";

const getInTouchHref = whatsappHref(
  "Hello Teamtronix,\n\nI would like to get in touch about your power solutions.",
);

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg" aria-hidden="true">
        <div className="grid-bg" />
        <div className="power-lines">
          <div className="power-line" />
          <div className="power-line" />
          <div className="power-line" />
          <div className="power-line" />
        </div>
        <div className="particles">
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
          <div className="particle" />
        </div>
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <div className="pulse" />
              <span>Total Power Solutions</span>
            </div>
            <h1 className="hero-title">
              <span className="line">POWERING</span>
              <span className="line">INDIA&apos;S</span>
              <span className="line">
                <span className="power-text">FUTURE</span>
              </span>
            </h1>
            <p className="hero-subtitle">
              Empowering homes and businesses with reliable energy solutions for a brighter tomorrow. UPS systems, inverter batteries, solar solutions, and stabilizers.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">
                  <Counter target={26} startDelay={1000} />+
                </div>
                <div className="stat-label">Years of Trust</div>
              </div>
              <div className="stat">
                <div className="stat-number">
                  <Counter target={4000} startDelay={1000} />+
                </div>
                <div className="stat-label">Happy Clients</div>
              </div>
              <div className="stat">
                <div className="stat-number">
                  <Counter target={98} startDelay={1000} />%
                </div>
                <div className="stat-label">Satisfaction</div>
              </div>
            </div>
            <div className="hero-ctas">
              <Link className="btn-primary" href="/products">
                Explore Products
                <ArrowIcon />
              </Link>
              <a
                className="btn-secondary"
                href={getInTouchHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Get in Touch
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-product">
              <div className="product-glow" />
              <div className="product-card">
                <img
                  src="/assets/products/lifton.png"
                  alt="Lifton Elevator UPS"
                  style={{ width: "100%", maxHeight: 220, objectFit: "contain", marginBottom: "1rem" }}
                />
                <div className="product-name">LIFTON UPS</div>
                <div className="product-tag">Elevator Power | Say Goodbye to Gensets</div>
              </div>
              <div className="floating-badge iso">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                ISO 9001:2008
              </div>
              <div className="floating-badge guarantee">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                100% Money Back
              </div>
              <div className="floating-badge clients">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                4000+ Clients
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
