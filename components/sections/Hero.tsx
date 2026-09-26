"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowIcon } from "@/components/Icons";
import { Counter } from "@/components/Counter";

export function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    if (!videoOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setVideoOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [videoOpen]);

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
              <button className="btn-secondary" type="button" onClick={() => setVideoOpen(true)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
                </svg>
                Watch Video
              </button>
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

      <div
        className={`video-modal${videoOpen ? " active" : ""}`}
        onClick={(event) => {
          if (event.target === event.currentTarget) setVideoOpen(false);
        }}
        role="dialog"
        aria-modal="true"
        aria-hidden={!videoOpen}
      >
        <div className="video-modal-content">
          <button className="video-modal-close" type="button" onClick={() => setVideoOpen(false)} aria-label="Close video">
            &times;
          </button>
          <div className="video-placeholder">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
            </svg>
            <p id="video-modal-title">Corporate video coming soon</p>
            <span style={{ fontSize: "0.85rem", color: "var(--gray-500)" }}>Discover the Teamtronix story</span>
          </div>
        </div>
      </div>
    </section>
  );
}
