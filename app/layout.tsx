import type { Metadata, Viewport } from "next";
import { Bebas_Neue, DM_Sans, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Nav } from "@/components/Nav";
import { ScrollTop } from "@/components/ScrollTop";
import { ServiceIntent } from "@/components/ServiceIntent";
import { SiteEffects } from "@/components/SiteEffects";
import { organizationSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import "./globals.css";

const display = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: "%s | Teamtronix India",
  },
  description: site.description,
  applicationName: "Teamtronix India",
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  keywords: [
    "UPS systems India",
    "Online UPS",
    "Offline UPS",
    "Elevator UPS",
    "Lifton UPS",
    "Solar UPS",
    "Servo Stabilizers",
    "SMF Batteries",
    "Teamtronix",
    "power electronics",
    "power solutions",
    "Cyberon AX",
    "inverter",
    "power backup",
    "Bangalore UPS",
    "R.T. Nagar UPS",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: "Teamtronix India",
    title: site.title,
    description: site.description,
    images: [
      {
        url: site.previewImage,
        width: 1200,
        height: 630,
        alt: "Teamtronix India — Pure Power. Sure Power.",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Teamtronix India | Total Power Solutions",
    description: site.description,
    images: [site.previewImage],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" }],
  },
  category: "business",
  other: {
    "geo.region": "IN-KA",
    "geo.placename": "Bengaluru",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#E31837",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){try{if(localStorage.getItem("theme")==="dark"){document.documentElement.setAttribute("data-theme","dark")}}catch(e){}})();`}
        </Script>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <JsonLd data={organizationSchema()} />
        <Nav />
        <SiteEffects />
        {children}
        <Footer />
        <ScrollTop />
        <ServiceIntent />
      </body>
    </html>
  );
}
