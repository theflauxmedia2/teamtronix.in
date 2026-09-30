export type BrandPage = {
  slug: string;
  name: string;
  logo: string;
  inquiry: string;
  authorised: boolean; // TODO(owner): set true only with written authorisation
  h1: string;
  title: string;
  description: string;
  intro: string;
  productsSupplied: string[];
  relatedProductSlugs: string[];
  faqs: { question: string; answer: string }[];
  lastModified: string;
};

export const brandPages: BrandPage[] = [
  {
    slug: "luminous",
    name: "Luminous",
    logo: "/assets/brands/luminous.svg",
    inquiry: "luminous",
    authorised: false, // TODO(owner): confirm authorised dealer status
    h1: "Luminous Inverter, UPS & Battery Dealer in R.T. Nagar, Bangalore",
    title: "Luminous Inverter & Battery Dealer in Bangalore | Teamtronix",
    description:
      "We supply and service Luminous inverters, UPS and batteries from our R.T. Nagar, Bengaluru shop. Installation and AMC. Call 99809 43021.",
    intro:
      "Luminous is one of the most common home-inverter and battery brands in Bengaluru flats. Alongside our own Teamtronix and Team Tech range, we supply and service Luminous inverters, home UPS and batteries from the R.T. Nagar office — sizing for your load, installing at site, and helping with later battery replacements.",
    productsSupplied: [
      "Home inverters and offline UPS",
      "Tubular and SMF inverter batteries",
      "Related home power-backup accessories",
    ],
    relatedProductSlugs: ["offline-ups", "inverter-batteries", "online-ups"],
    faqs: [
      {
        question: "Do you sell Luminous inverters in R.T. Nagar?",
        answer:
          "Yes. We supply Luminous home inverters and related batteries. Share your appliance list for a sizing recommendation.",
      },
      {
        question: "Can you service a Luminous UPS I already own?",
        answer:
          "In many cases yes — bring the model number and describe the fault. We also handle battery replacement for Luminous systems.",
      },
      {
        question: "Are you an authorised Luminous dealer?",
        answer:
          "We supply and service Luminous products from our Bengaluru shop. Ask us for the current authorisation status when you request a quote.",
      },
    ],
    lastModified: "2026-09-30",
  },
  {
    slug: "amaron",
    name: "Amaron",
    logo: "/assets/brands/amaron.jpg",
    inquiry: "amaron",
    authorised: false, // TODO(owner): confirm authorised dealer status
    h1: "Amaron Inverter Battery Dealer in R.T. Nagar, Bangalore",
    title: "Amaron Inverter Battery Dealer in Bangalore | Teamtronix",
    description:
      "Amaron inverter batteries supplied and installed from Teamtronix in R.T. Nagar, Bengaluru. Call 99809 43021.",
    intro:
      "When an inverter battery ages out, Bengaluru homes often ask for Amaron tubular or SMF options that match their existing inverter. Teamtronix supplies Amaron inverter batteries from R.T. Nagar, helps confirm Ah rating against your load, and can install at the flat or shop. We also continue to offer Team Tech batteries for customers who prefer our own range.",
    productsSupplied: [
      "Amaron inverter batteries (tubular / SMF as available)",
      "Matching advice for existing home inverters",
      "Installation and terminal checks",
    ],
    relatedProductSlugs: ["inverter-batteries", "offline-ups", "solar-ongrid"],
    faqs: [
      {
        question: "Do you stock Amaron batteries in Bengaluru?",
        answer:
          "We supply Amaron inverter batteries for common home ratings. Availability of a specific Ah rating is confirmed when you enquire.",
      },
      {
        question: "Can you exchange my old battery?",
        answer:
          "Ask us when you request a quote — old-battery exchange depends on type and condition.",
      },
      {
        question: "Will Amaron batteries work with a Teamtronix inverter?",
        answer:
          "Often yes when the voltage and Ah class match. Share both models so we can confirm.",
      },
    ],
    lastModified: "2026-09-30",
  },
  {
    slug: "microtek",
    name: "Microtek",
    logo: "/assets/brands/microtek.svg",
    inquiry: "microtek",
    authorised: false, // TODO(owner): confirm authorised dealer status
    h1: "Microtek Inverter & UPS Dealer in R.T. Nagar, Bangalore",
    title: "Microtek Inverter & UPS Dealer in Bangalore | Teamtronix",
    description:
      "Supply and service for Microtek inverters and UPS from Teamtronix, R.T. Nagar, Bengaluru. Call 99809 43021.",
    intro:
      "Microtek inverters and UPS are widely installed in Bengaluru homes and small offices. We supply and service Microtek systems from our R.T. Nagar shop, help with battery pairing, and can compare them with Teamtronix online/offline UPS when you are choosing a new installation rather than only replacing a battery.",
    productsSupplied: [
      "Microtek home inverters and UPS",
      "Battery pairing and replacement",
      "Breakdown service for supported models",
    ],
    relatedProductSlugs: ["offline-ups", "online-ups", "inverter-batteries"],
    faqs: [
      {
        question: "Do you repair Microtek inverters?",
        answer:
          "We take service requests for Microtek and other common brands. Share the model and fault symptoms on WhatsApp or the service page.",
      },
      {
        question: "Can I buy a Microtek UPS from Teamtronix?",
        answer:
          "Yes — we supply Microtek home power-backup products alongside our own range. Ask for current models and pricing.",
      },
      {
        question: "Should I choose Microtek or Teamtronix for a new home UPS?",
        answer:
          "It depends on load, backup time and budget. We will recommend after you share the appliance list — without pushing a brand for its own sake.",
      },
    ],
    lastModified: "2026-09-30",
  },
  {
    slug: "amaze",
    name: "Amaze",
    logo: "/assets/brands/amaze.png",
    inquiry: "amaze",
    authorised: false, // TODO(owner): confirm authorised dealer status
    h1: "Amaze Inverter & Battery Dealer in R.T. Nagar, Bangalore",
    title: "Amaze Inverter & Battery Dealer in Bangalore | Teamtronix",
    description:
      "Amaze inverters and batteries supplied and serviced by Teamtronix in R.T. Nagar, Bengaluru. Call 99809 43021.",
    intro:
      "Amaze is another home-inverter and battery brand we supply and service from R.T. Nagar for Bengaluru customers who already own Amaze systems or prefer that line. We help with sizing, installation and battery replacement, and we remain available for Teamtronix Lifton, online UPS and solar when your site needs more than a standard home inverter.",
    productsSupplied: [
      "Amaze home inverters",
      "Matching inverter batteries",
      "Installation and service support",
    ],
    relatedProductSlugs: ["offline-ups", "inverter-batteries", "servo-stabilizer"],
    faqs: [
      {
        question: "Do you sell Amaze inverters in Bangalore?",
        answer:
          "Yes. Contact us with your load list and we will confirm available Amaze options and installation.",
      },
      {
        question: "Can Teamtronix service an Amaze system I already have?",
        answer:
          "Typically yes for common home models — share the model sticker and fault details when you book a visit.",
      },
      {
        question: "Do you also supply batteries for Amaze inverters?",
        answer:
          "Yes. We pair batteries by voltage and Ah class, including Amaron, Luminous and Team Tech where suitable.",
      },
    ],
    lastModified: "2026-09-30",
  },
];

export function getBrandPage(slug: string) {
  return brandPages.find((brand) => brand.slug === slug);
}

/** Keep homepage brand strip data in sync with brand pages. */
export const brands = brandPages.map((brand) => ({
  name: brand.name,
  src: brand.logo,
  inquiry: brand.inquiry,
  slug: brand.slug,
}));

export const brandInquiryOptions = brands.map((brand) => ({
  value: brand.inquiry,
  label: brand.name,
}));
