export const site = {
  name: "Teamtronix India Private Limited",
  shortName: "Teamtronix",
  slogan: "Total Power Solutions",
  url: "https://www.teamtronix.in",
  title: "Teamtronix India | Total Power Solutions | UPS, Solar & Stabilizers",
  description:
    "Teamtronix India Private Limited delivers UPS systems, inverter batteries, solar solutions, stabilizers, and power management equipment for homes, businesses, and industries in Bangalore.",
  locale: "en_IN",
  email: "info@teamtronix.in",
  salesEmail: "sales@teamtronix.in",
  phones: [
    { display: "+91 99809 43021", tel: "+919980943021" },
    { display: "+91 99800 92410", tel: "+919980092410" },
  ],
  whatsapp: "919980943021",
  instagram: "https://www.instagram.com/teamtronixindia/",
  address: {
    street: "Devagowda Road, Near V-care Hospitals",
    locality: "R.T. Nagar, Bangalore",
    region: "Karnataka",
    postalCode: "560032",
    country: "IN",
  },
  foundingDate: "1994",
  sameAs: [
    "https://www.instagram.com/teamtronixindia/",
    "https://www.facebook.com/teamtronix",
    "https://www.linkedin.com/company/teamtronix",
  ],
} as const;

export const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/#about", label: "About" },
  { href: "/#certifications", label: "Certifications" },
  { href: "/#contact", label: "Contact" },
] as const;

export function absoluteUrl(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${site.url}${normalized}`;
}

export function whatsappHref(text: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}
