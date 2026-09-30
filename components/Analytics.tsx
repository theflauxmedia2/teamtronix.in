"use client";

import Script from "next/script";
import { useEffect } from "react";
import { SITE } from "@/lib/site";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function track(event: string, params: Record<string, string>) {
  if (typeof window === "undefined" || !SITE.ga4Id || !window.gtag) return;
  window.gtag("event", event, params);
}

export function Analytics() {
  const id = SITE.ga4Id;

  useEffect(() => {
    if (!id) return;

    function onClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest?.("a") as HTMLAnchorElement | null;
      if (!anchor?.href) return;

      const href = anchor.href;
      if (href.startsWith("tel:")) {
        track("click_call", { number: href.replace("tel:", "") });
        return;
      }

      if (href.includes("wa.me") || href.includes("whatsapp.com")) {
        const page = window.location.pathname;
        const numberMatch = href.match(/wa\.me\/(\d+)/);
        const number = numberMatch?.[1] ?? "";
        track("click_whatsapp", { number, page });
        if (anchor.dataset.lead === "quote") {
          track("generate_lead", { number, page });
        }
      }
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [id]);

  if (!id) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${id}');`}
      </Script>
    </>
  );
}
