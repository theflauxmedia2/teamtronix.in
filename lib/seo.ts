import type { Metadata } from "next";
import { site } from "@/lib/site";

export function pageMeta({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = path.endsWith("/") ? path : `${path}/`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Teamtronix India",
      locale: site.locale,
      type: "website",
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
      title,
      description,
      images: [site.previewImage],
    },
  };
}
