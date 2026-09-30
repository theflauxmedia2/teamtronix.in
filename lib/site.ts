export const site = {
  name: "Teamtronix India Private Limited",
  shortName: "Teamtronix",
  slogan: "Total Power Solutions",
  url: "https://teamtronix.in",
  previewImage: "https://teamtronix.in/og.png",
  title: "Teamtronix India | Total Power Solutions | UPS, Solar & Stabilizers",
  description:
    "Teamtronix India Private Limited delivers UPS systems, inverter batteries, solar solutions, stabilizers, and power management equipment for homes, businesses, and industries in Bangalore.",
  locale: "en_IN",
  emails: ["akram@teamtronix.in", "afroze@teamtronix.in"],
  gstin: "29AACCT6355L1ZS",
  phones: [
    { display: "+91 99809 43021", tel: "+919980943021" },
    { display: "+91 99800 92410", tel: "+919980092410" },
  ],
  whatsapp: "919980943021",
  instagram: "https://www.instagram.com/teamtronixindia/",
  address: {
    street: "#518, 19th Cross, Adi Kabeer Ashram Road",
    locality: "R.T. Nagar, Bengaluru",
    landmark: "Near VCare Hospital",
    region: "Karnataka",
    postalCode: "560032",
    country: "IN",
    line: "#518, 19th Cross, Adi Kabeer Ashram Road, R.T. Nagar, Near VCare Hospital, Bengaluru - 560032",
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
