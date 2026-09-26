"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { inquiryOptions } from "@/lib/products";
import { site, whatsappHref } from "@/lib/site";

const SHOWS_KEY = "teamtronix-intent-shows";

function waitForShow(shows: number) {
  if (shows <= 0) return 10_000;
  if (shows === 1) return 60_000;
  return 5 * 60_000;
}

function readShows() {
  try {
    const value = Number(sessionStorage.getItem(SHOWS_KEY) || "0");
    return Number.isFinite(value) && value > 0 ? value : 0;
  } catch {
    return 0;
  }
}

const hints: Record<string, string> = {
  "online-ups": "Critical loads",
  "offline-ups": "Everyday backup",
  "elevator-ups": "Lift backup",
  battery: "Store the charge",
  stabilizer: "Steady voltage",
  solar: "Make your own",
  led: "Light the path",
  other: "We'll sort it",
};

function Mark({ id }: { id: string }) {
  if (id === "online-ups") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <rect x="8" y="8" width="22" height="22" />
        <rect x="18" y="18" width="22" height="22" />
      </svg>
    );
  }
  if (id === "offline-ups") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M8 30h8l4-14 6 22 4-12h10" />
      </svg>
    );
  }
  if (id === "elevator-ups") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <rect x="16" y="6" width="16" height="36" />
        <path d="M24 14v8M21 18l3-4 3 4M21 30l3 4 3-4" />
      </svg>
    );
  }
  if (id === "battery") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <rect x="14" y="10" width="20" height="30" />
        <path d="M20 6h8M24 18v8M20 22h8" />
      </svg>
    );
  }
  if (id === "stabilizer") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M6 24c4-10 8-10 12 0s8 10 12 0 8-10 12 0" />
        <path d="M6 34h36" />
      </svg>
    );
  }
  if (id === "solar") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="20" r="7" />
        <path d="M24 6v4M24 30v4M10 20h4M34 20h4M13 10l3 3M32 29l3 3M35 10l-3 3M16 29l-3 3M10 36h28" />
      </svg>
    );
  }
  if (id === "led") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M24 8v22" />
        <path d="M16 30h16l-2 8H18z" />
        <path d="M18 14c2-4 10-4 12 0" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="16" cy="16" r="4" />
      <circle cx="32" cy="18" r="3" />
      <circle cx="24" cy="32" r="4" />
      <path d="M19 18l10 1M18 19l5 10M30 21l-4 8" />
    </svg>
  );
}

export function ServiceIntent() {
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const dismiss = useCallback(() => {
    try {
      sessionStorage.setItem(SHOWS_KEY, String(readShows() + 1));
    } catch {
      /* private mode */
    }
    setOpen(false);
  }, []);

  useEffect(() => {
    if (open) return;
    const timer = window.setTimeout(() => setOpen(true), waitForShow(readShows()));
    return () => window.clearTimeout(timer);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        dismiss();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll<HTMLElement>("button");
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, dismiss]);

  function choose(label: string) {
    try {
      sessionStorage.setItem(SHOWS_KEY, String(readShows() + 1));
    } catch {
      /* private mode */
    }
    const text = `Hello Teamtronix,\n\nI am interested in ${label}. I found you on the website and would like details and a quote.`;
    window.location.href = whatsappHref(text);
  }

  if (!open) return null;

  return (
    <div className="intent-overlay" role="presentation" onClick={dismiss}>
      <div
        className="intent-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        ref={panelRef}
        tabIndex={-1}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="intent-field" aria-hidden="true">
          <span />
          <span />
        </div>
        <button type="button" className="intent-close" onClick={dismiss} aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
        <p className="intent-kicker">A quick start</p>
        <h2 id={titleId}>
          WHAT ARE
          <br />
          YOU HERE FOR?
        </h2>
        <p className="intent-copy">Tap a service. WhatsApp opens with your request already written.</p>
        <div className="intent-grid">
          {inquiryOptions.map((option) => (
            <button key={option.value} type="button" className="intent-tile" onClick={() => choose(option.label)}>
              <Mark id={option.value} />
              <span>
                <strong>{option.label}</strong>
                <em>{hints[option.value]}</em>
              </span>
            </button>
          ))}
        </div>
        <p className="intent-foot">Chat opens with {site.phones[0].display}</p>
      </div>
    </div>
  );
}
