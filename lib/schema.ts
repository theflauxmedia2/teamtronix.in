import { products } from "@/lib/products";
import { site } from "@/lib/site";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: site.name,
    alternateName: "Team Tech",
    url: site.url,
    logo: `${site.url}/assets/icon.jpg`,
    image: `${site.url}/assets/icon.jpg`,
    description: site.description,
    foundingDate: site.foundingDate,
    slogan: site.slogan,
    email: site.email,
    telephone: site.phones[0].tel,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    areaServed: "IN",
    contactPoint: site.phones.map((phone) => ({
      "@type": "ContactPoint",
      telephone: phone.tel,
      contactType: "sales",
      areaServed: "IN",
      availableLanguage: ["English", "Tamil", "Hindi"],
    })),
    sameAs: site.sameAs,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Power Solutions",
      itemListElement: products.map((product) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: product.name,
          description: product.summary,
          url: `${site.url}/products/${product.slug}/`,
          image: `${site.url}${product.image}`,
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
      item: `${site.url}${item.path}`,
    })),
  };
}

export function productSchema(product: {
  name: string;
  summary: string;
  image: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.summary,
    image: `${site.url}${product.image}`,
    brand: { "@type": "Brand", name: "Teamtronix" },
    manufacturer: { "@type": "Organization", name: site.name },
    url: `${site.url}/products/${product.slug}/`,
    category: "Power electronics",
  };
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
