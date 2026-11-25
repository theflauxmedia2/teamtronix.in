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

  const pixelId = SITE.metaPixelId;

  return (
    <>
      {id && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive" />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${id}');`}
          </Script>
        </>
      )}
      {/* Meta Pixel. WHY no route-change code: fbevents.js fires PageView on history pushState itself. */}
      {pixelId && (
        <>
          <Script id="meta-pixel" strategy="afterInteractive">
            {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${pixelId}');fbq('track','PageView');`}
          </Script>
          <noscript>
            <img height="1" width="1" style={{ display: "none" }} alt="" src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`} />
          </noscript>
        </>
      )}
    </>
  );
}
