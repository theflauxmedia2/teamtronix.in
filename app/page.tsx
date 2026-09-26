import type { Metadata } from "next";
import { About } from "@/components/sections/About";
import { Certifications } from "@/components/sections/Certifications";
import { Clients } from "@/components/sections/Clients";
import { Contact } from "@/components/sections/Contact";
import { Featured } from "@/components/sections/Featured";
import { Hero } from "@/components/sections/Hero";
import { Products } from "@/components/sections/Products";
import { Stats } from "@/components/sections/Stats";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: site.title },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: site.title,
    description: site.description,
    url: "/",
  },
};

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <Clients />
      <Products />
      <Featured />
      <Stats />
      <About />
      <Certifications />
      <Contact />
    </main>
  );
}
