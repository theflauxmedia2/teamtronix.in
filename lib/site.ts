/** Single source of truth for business details. Unconfirmed values are TODO(owner). */

export const SITE = {
  legalName: "Teamtronix India Private Limited",
  brandName: "Teamtronix",
  slogan: "Total Power Solutions",
  url: "https://teamtronix.in",
  previewImage: "https://teamtronix.in/og-v2.png",
  locale: "en_IN",
  foundingYear: 1994,
  foundingDate: "1994",
  gstin: "29AACCT6355L1ZS",
  address: {
    street: "#518, 19th Cross, Adi Kabeer Ashram Road",
    landmark: "Near VCare Hospital",
    locality: "R.T. Nagar",
    city: "Bengaluru",
    region: "Karnataka",
    postalCode: "560032",
    country: "IN",
  },
  phones: {
    primary: "+91 99809 43021",
    secondary: "+91 99800 92410",
  },
  phoneE164: {
    primary: "+919980943021",
    secondary: "+919980092410",
  },
  whatsapp: {
    primary: "https://wa.me/919980943021",
    secondary: "https://wa.me/919980092410",
  },
  whatsappNumber: "919980943021",
  emails: ["akram@teamtronix.in", "afroze@teamtronix.in"] as const,
  social: {
    instagram: "https://www.instagram.com/teamtronixindia/",
    facebook: "https://www.facebook.com/teamtronix",
    linkedin: "https://www.linkedin.com/company/teamtronix",
  },
  geo: { lat: 0, lng: 0 }, // TODO(owner): copy from the Google Maps pin
  googleMapsUrl: "", // TODO(owner): Google Business Profile share link
  googleMapsEmbedUrl:
    "https://maps.google.com/maps?q=%23518%2C+19th+Cross%2C+Adi+Kabeer+Ashram+Road%2C+R.T.+Nagar%2C+Bengaluru+560032&z=16&output=embed",
  googleReviewUrl: "", // TODO(owner): "Ask for reviews" short link from the Business Profile
  openingHours: [
    // TODO(owner): replace with real hours
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] as const,
      opens: "09:30",
      closes: "20:00",
    },
  ],
  ga4Id: "", // TODO(owner): GA4 Measurement ID, e.g. G-XXXXXXX
  hasFrazerTownBranch: false, // TODO(owner): true only if a staffed Frazer Town shop still operates
  canProveFirstMoneyBack: false,
  showSatisfactionStat: false,
  showWarrantyTable: false, // TODO(owner): set true after filling warranty periods
  offersOldBatteryExchange: null as boolean | null, // TODO(owner): true/false once confirmed
  handlesBescomNetMetering: null as boolean | null, // TODO(owner): true/false once confirmed
  amcVisitFrequency: "", // TODO(owner): e.g. "quarterly"
  serviceResponseTime: "", // TODO(owner): e.g. "same-day in R.T. Nagar"
  isoVersion: "ISO 9001:2008", // TODO(owner): confirm whether renewed to ISO 9001:2015
  moneyBackCopy:
    "Offering a 100% money-back guarantee on inverters and UPS systems. Terms depend on the product — ask for them with your quote.",
  primaryAreas: [
    "R.T. Nagar",
    "HBR Layout",
    "Thanisandra",
    "Frazer Town",
    "Pulakeshinagar",
  ] as const,
  secondaryAreas: [
    "Hebbal",
    "Ganganagar",
    "Sultanpalya",
    "Kammanahalli",
    "Kalyan Nagar",
    "Nagawara",
    "Hennur",
    "Cox Town",
    "Benson Town",
    "Sanjay Nagar",
  ] as const,
} as const;

export type SiteConfig = typeof SITE;

/** Years in business — always compute from founding year. */
export function yearsInBusiness(now = new Date()) {
  return now.getFullYear() - SITE.foundingYear;
}

export function addressLine() {
  const a = SITE.address;
  return `${a.street}, ${a.locality}, ${a.landmark}, ${a.city} - ${a.postalCode}`;
}

export function streetAddressWithLandmark() {
  return `${SITE.address.street}, ${SITE.address.landmark}`;
}

export function moneyBackText() {
  if (SITE.canProveFirstMoneyBack) {
    return "Teamtronix was the first company in India to offer a 100% money-back guarantee on inverters and UPS systems. Terms depend on the product — ask for them with your quote.";
  }
  return SITE.moneyBackCopy;
}

export function whatsappHref(text: string, number = SITE.whatsappNumber) {
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

export function absoluteUrl(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE.url}${normalized}`;
}

export function allServiceAreas() {
  return ["Bengaluru", ...SITE.primaryAreas, ...SITE.secondaryAreas];
}

/** Page SEO defaults for the homepage. */
export const homeSeo = {
  title: "UPS, Inverter & Lift UPS Dealer in Bangalore | Teamtronix",
  description:
    "UPS, inverter, lift UPS, stabilizer & solar dealer in R.T. Nagar, Bengaluru since 1994. Sales, installation & service. Call 99809 43021.",
  h1: "UPS, Inverter & Lift UPS Dealer in R.T. Nagar, Bengaluru",
} as const;

/* -------------------------------------------------------------------------- */
/* Backward-compatible `site` shape used across existing components           */
/* -------------------------------------------------------------------------- */

export const site = {
  name: SITE.legalName,
  shortName: SITE.brandName,
  slogan: SITE.slogan,
  url: SITE.url,
  previewImage: SITE.previewImage,
  title: homeSeo.title,
  description: homeSeo.description,
  locale: SITE.locale,
  emails: [...SITE.emails],
  gstin: SITE.gstin,
  phones: [
    { display: SITE.phones.primary, tel: SITE.phoneE164.primary },
    { display: SITE.phones.secondary, tel: SITE.phoneE164.secondary },
  ],
  whatsapp: SITE.whatsappNumber,
  instagram: SITE.social.instagram,
  address: {
    street: SITE.address.street,
    locality: `${SITE.address.locality}, ${SITE.address.city}`,
    landmark: SITE.address.landmark,
    region: SITE.address.region,
    postalCode: SITE.address.postalCode,
    country: SITE.address.country,
    line: addressLine(),
  },
  foundingDate: SITE.foundingDate,
  sameAs: [SITE.social.instagram, SITE.social.facebook, SITE.social.linkedin],
} as const;

export const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/products/", label: "Products" },
  { href: "/about/", label: "About" },
  { href: "/service/", label: "Service" },
  { href: "/contact/", label: "Contact" },
] as const;
