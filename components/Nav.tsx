"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/site";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.getAttribute("data-theme") === "dark");
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    if (next) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    }
  }

  function closeMenu() {
    setOpen(false);
  }

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`} id="nav">
      <Link href="/#home" className="nav-logo" onClick={closeMenu}>
        <img src="/assets/logo.svg" alt="Teamtronix Logo" className="logo-img" width={48} height={48} />
        <div className="logo-text">
          <span className="brand">TEAMTRONIX</span>
          <span className="tagline">Pure Power. Sure Power.</span>
        </div>
      </Link>
      <ul className={`nav-links${open ? " mobile-active" : ""}`}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href} onClick={closeMenu}>
              {link.label}
            </Link>
          </li>
        ))}
        <li className="nav-menu-quote">
          <Link href="/#contact" onClick={closeMenu}>
            Get Quote
          </Link>
        </li>
      </ul>
      <div className="nav-actions">
        <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label="Toggle theme">
          <svg className="moon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
          <svg className="sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
        </button>
        <Link href="/#contact" className="nav-cta" onClick={closeMenu}>
          Get Quote
        </Link>
        <button
          className={`mobile-menu-btn${open ? " active" : ""}`}
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
