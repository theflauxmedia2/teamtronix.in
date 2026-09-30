import type { Metadata } from "next";
import { About } from "@/components/sections/About";
import { AreasWeServe } from "@/components/sections/AreasWeServe";
import { Brands } from "@/components/sections/Brands";
import { Certifications } from "@/components/sections/Certifications";
import { Clients } from "@/components/sections/Clients";
import { Contact } from "@/components/sections/Contact";
import { Featured } from "@/components/sections/Featured";
import { Hero } from "@/components/sections/Hero";
import { Products } from "@/components/sections/Products";
import { ReviewsSection } from "@/components/ReviewsSection";
import { Stats } from "@/components/sections/Stats";
import { homeSeo, site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: homeSeo.title },
  description: homeSeo.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: homeSeo.title,
    description: homeSeo.description,
    url: "/",
    images: [
      {
        url: site.previewImage,
        width: 1200,
        height: 630,
        alt: homeSeo.title,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: homeSeo.title,
    description: homeSeo.description,
    images: [site.previewImage],
  },
};

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <Clients />
      <Products />
      <Brands />
      <Featured />
      <Stats />
      <About />
      <AreasWeServe />
      <Certifications />
      <ReviewsSection />
      <Contact />
    </main>
  );
}
