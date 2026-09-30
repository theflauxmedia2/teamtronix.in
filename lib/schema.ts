import { products } from "@/lib/products";
import {
  SITE,
  addressLine,
  allServiceAreas,
  streetAddressWithLandmark,
} from "@/lib/site";

const BUSINESS_ID = `${SITE.url}/#business`;

export function organizationSchema() {
  const geo =
    SITE.geo.lat !== 0 && SITE.geo.lng !== 0
      ? {
          geo: {
            "@type": "GeoCoordinates",
            latitude: SITE.geo.lat,
            longitude: SITE.geo.lng,
          },
        }
      : {};

  const hasMap = SITE.googleMapsUrl ? { hasMap: SITE.googleMapsUrl } : {};

  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ElectronicsStore"],
    "@id": BUSINESS_ID,
    name: SITE.legalName,
    taxID: SITE.gstin,
    alternateName: SITE.brandName,
    url: SITE.url,
    logo: `${SITE.url}/assets/logo.png`,
    image: SITE.previewImage,
    description:
      "UPS, inverter, lift UPS, stabilizer and solar dealer in R.T. Nagar, Bengaluru since 1994. Sales, installation and service across North Bengaluru.",
    foundingDate: SITE.foundingDate,
    slogan: SITE.slogan,
    email: SITE.emails[0],
    telephone: SITE.phoneE164.primary,
    address: {
      "@type": "PostalAddress",
      streetAddress: streetAddressWithLandmark(),
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    ...geo,
    ...hasMap,
    openingHoursSpecification: SITE.openingHours.flatMap((block) =>
      block.days.map((day) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: day,
        opens: block.opens,
        closes: block.closes,
      })),
    ),
    areaServed: allServiceAreas().map((name) => ({
      "@type": "Place",
      name: name === "Bengaluru" ? name : `${name}, Bengaluru`,
    })),
    brand: ["Teamtronix", "Team Tech", "Luminous", "Amaron", "Microtek", "Amaze"].map(
      (name) => ({ "@type": "Brand", name }),
    ),
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: SITE.phoneE164.primary,
        contactType: "sales",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi", "Kannada", "Tamil"],
      },
      {
        "@type": "ContactPoint",
        telephone: SITE.phoneE164.secondary,
        contactType: "sales",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi", "Kannada", "Tamil"],
      },
      ...SITE.emails.map((email) => ({
        "@type": "ContactPoint",
        email,
        contactType: "sales",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi", "Kannada", "Tamil"],
      })),
    ],
    sameAs: [SITE.social.instagram, SITE.social.facebook, SITE.social.linkedin],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Power Solutions",
      itemListElement: products.map((product) => ({
        "@type": "Offer",
        url: `${SITE.url}/products/${product.slug}/`,
        itemOffered: {
          "@type": "Product",
          name: product.name,
          description: product.summary,
          url: `${SITE.url}/products/${product.slug}/`,
          image: `${SITE.url}${product.image}`,
          brand: { "@type": "Brand", name: "Teamtronix" },
        },
      })),
    },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE.url}${item.path.endsWith("/") || item.path === "/" ? item.path : `${item.path}/`}`,
    })),
  };
}

export function productSchema(product: {
  name: string;
  summary: string;
  image: string;
  slug: string;
  priceFrom?: number | null;
}) {
  const url = `${SITE.url}/products/${product.slug}/`;
  const base = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.summary,
    image: `${SITE.url}${product.image}`,
    brand: { "@type": "Brand", name: "Teamtronix" },
    manufacturer: { "@id": BUSINESS_ID },
    url,
    category: "Power electronics",
  };

  if (product.priceFrom != null && product.priceFrom > 0) {
    return {
      ...base,
      offers: {
        "@type": "Offer",
        url,
        priceCurrency: "INR",
        price: product.priceFrom,
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
        seller: { "@id": BUSINESS_ID },
      },
    };
  }

  // No public list price — omit offers so Rich Results Test does not flag missing price
  return base;
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function serviceSchema({
  name,
  description,
  areaName,
  url,
}: {
  name: string;
  description: string;
  areaName: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: name,
    provider: { "@id": BUSINESS_ID },
    areaServed: { "@type": "Place", name: areaName },
    url: `${SITE.url}${url}`,
  };
}

export function articleSchema({
  title,
  description,
  path,
  datePublished,
  dateModified,
}: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: { "@id": BUSINESS_ID },
    publisher: {
      "@type": "Organization",
      name: SITE.legalName,
      logo: { "@type": "ImageObject", url: `${SITE.url}/assets/logo.png` },
    },
    mainEntityOfPage: `${SITE.url}${path}`,
  };
}

export { addressLine, BUSINESS_ID };
