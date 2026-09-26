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
      {
        src: "/assets/icon.jpg",
        sizes: "192x192",
        type: "image/jpeg",
      },
    ],
  };
}
