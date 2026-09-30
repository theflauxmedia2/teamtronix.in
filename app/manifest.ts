import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Teamtronix India",
    short_name: "Teamtronix",
    description: site.slogan,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#E31837",
    lang: "en-IN",
    icons: [
      { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
      { src: "/assets/logo-192.png", sizes: "192x192", type: "image/png" },
      { src: "/assets/logo-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
