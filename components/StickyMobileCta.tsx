"use client";

import { useEffect, useState } from "react";
import { SITE, whatsappHref } from "@/lib/site";

export function StickyMobileCta() {
  const [title, setTitle] = useState("Teamtronix");

  useEffect(() => {
    setTitle(document.title.replace(/\s*\|\s*Teamtronix.*$/, "") || "Teamtronix");
  }, []);

  const wa = whatsappHref(
    `Hi Teamtronix, I am enquiring from: ${title}\n\nPlease help with a quote / service.`,
  );

  return (
    <div className="sticky-mobile-cta" role="region" aria-label="Quick contact">
      <a className="sticky-mobile-cta__btn sticky-mobile-cta__call" href={`tel:${SITE.phoneE164.primary}`}>
        Call
      </a>
      <a
        className="sticky-mobile-cta__btn sticky-mobile-cta__wa"
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
      >
        WhatsApp
      </a>
    </div>
  );
}
