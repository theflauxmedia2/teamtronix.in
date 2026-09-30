import type { Metadata } from "next";
import { site } from "@/lib/site";

export function pageMeta({
  title,
  description,
  path,
  image,
  ogType = "website",
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  ogType?: "website" | "article" | "product";
}): Metadata {
  const url = path.endsWith("/") ? path : `${path}/`;
  const ogImage = image
    ? image.startsWith("http")
      ? image
      : `${site.url}${image}`
    : site.previewImage;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Teamtronix India",
      locale: site.locale,
      type: ogType === "product" ? "website" : ogType,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
