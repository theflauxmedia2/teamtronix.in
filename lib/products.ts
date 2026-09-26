export type ProductPoint = {
  title: string;
  detail: string;
};

/** Add a product by appending an object below. Catalog, product pages, sitemap, and footer pick it up. */
export type Product = {
  slug: string;
  name: string;
  cardTitle: string;
  tagline: string;
  kicker: string;
  summary: string;
  /** Cutout used on the homepage grid. */
  image: string;
  /** Full poster, WebP, shown on the product page. */
  poster: string;
  posterWidth: number;
  posterHeight: number;
  /** Smaller poster for catalog cards and related products. */
  posterCard: string;
  imageAlt: string;
  inquiry: string;
  inquiryLabel: string;
  description: string[];
  highlights: ProductPoint[];
  reasons: string[];
  specs: ProductPoint[];
  applications: string[];
  closing: string;
};

export const inquiryOptions = [
  { value: "online-ups", label: "Online UPS" },
  { value: "offline-ups", label: "Offline UPS" },
  { value: "elevator-ups", label: "Lifton UPS" },
  { value: "battery", label: "Inverter & Solar Batteries" },
  { value: "stabilizer", label: "Servo Stabilizer" },
  { value: "solar", label: "Ongrid / Hybrid Solar UPS" },
  { value: "led", label: "Solar Street Lights" },
  { value: "other", label: "Other / Multiple" },
] as const;

export const products: Product[] = [
  {
    slug: "online-ups",
    name: "Trust Embedded Online UPS",
    cardTitle: "ONLINE UPS",
    tagline: "Double conversion · Zero downtime",
    kicker: "How Trust Embedded Online UPS helps you",
    summary:
      "Double-conversion online UPS that converts incoming AC to DC and back to AC, creating an electrical firewall for servers, medical equipment, and critical loads.",
    image: "/assets/products/cyberon-ax.png",
    poster: "/assets/posters/online-ups.webp",
    posterWidth: 723,
    posterHeight: 1024,
    posterCard: "/assets/posters/online-ups-card.webp",
    imageAlt: "Teamtronix Trust Embedded Online UPS systems",
    inquiry: "online-ups",
    inquiryLabel: "Online UPS",
    description: [
      "Since the power undergoes double conversion, there is less chance of power disturbances reaching connected devices.",
      "Team Tech Online UPS reacts immediately to interruptions, so the load sees no break in supply.",
    ],
    highlights: [
      { title: "Top-notch power quality", detail: "Double conversion keeps disturbances away from connected devices." },
      { title: "Instantaneous response", detail: "Reacts immediately to interruptions, with zero downtime." },
      { title: "Versatility", detail: "Powers servers, networks, and medical equipment." },
    ],
    reasons: [
      "Complete electrical firewall between utility power and sensitive equipment",
      "Continuous conversion from AC to DC and back to AC",
      "Stable, clean power for critical environments",
    ],
    specs: [
      { title: "Double conversion", detail: "Complete isolation from power disturbances" },
      { title: "Zero downtime", detail: "Instant transfer to battery" },
      { title: "High efficiency", detail: "Stable and clean power output" },
      { title: "Microprocessor controlled", detail: "Reliable, intelligent operation" },
      { title: "Low noise", detail: "Designed for quiet critical rooms" },
    ],
    applications: ["Servers", "Medical equipment", "Offices", "Data and IT loads"],
    closing: "Power cuts can happen anytime. Stay powered. Stay productive.",
  },
  {
    slug: "offline-ups",
    name: "Teamtronix Offline UPS",
    cardTitle: "OFFLINE UPS",
    tagline: "Simple. Reliable. Always ready.",
    kicker: "Reliable power backup when you need it most",
    summary:
      "Standby UPS that keeps essential devices running through power cuts and voltage fluctuations. Cost-effective, simple to maintain, and efficient in normal conditions.",
    image: "/assets/products/city-lite-synergy.png",
    poster: "/assets/posters/offline-ups.webp",
    posterWidth: 723,
    posterHeight: 1024,
    posterCard: "/assets/posters/offline-ups-card.webp",
    imageAlt: "Teamtronix Offline UPS units",
    inquiry: "offline-ups",
    inquiryLabel: "Offline UPS",
    description: [
      "Teamtronix Offline UPS, also called a standby UPS, switches to battery the moment the mains fails.",
      "Fewer components make it easier to install and maintain than an online system, and it is generally more affordable.",
    ],
    highlights: [
      { title: "Cost-effective", detail: "Generally more affordable than online systems." },
      { title: "Simplicity", detail: "Easier to install and maintain, with fewer components." },
      { title: "Energy efficiency", detail: "More efficient under normal mains conditions." },
    ],
    reasons: [
      "Instant switch to battery during an outage",
      "Keeps essential devices running continuously",
      "Protects equipment from surges, spikes, and fluctuations",
    ],
    specs: [
      { title: "Automatic switch", detail: "Moves to battery the moment mains fails" },
      { title: "Battery backup", detail: "Keeps devices running through the cut" },
      { title: "Surge protection", detail: "Safe from spikes and fluctuations" },
      { title: "Wide application", detail: "Homes, offices, shops, and small industries" },
    ],
    applications: ["Homes", "Offices", "Shops", "Small industries"],
    closing: "Trusted quality, long life, and after-sales service.",
  },
  {
    slug: "lifton",
    name: "Trust Embedded Lifton UPS",
    cardTitle: "LIFTON UPS",
    tagline: "Elevator backup · Say goodbye to gensets",
    kicker: "The most affordable Lift UPS for home and work",
    summary:
      "Lift UPS for residential, commercial, and industrial elevators. Fully automatic backup that is more economical than a diesel generator, with pure sine-wave output.",
    image: "/assets/products/lifton.png",
    poster: "/assets/posters/lifton.webp",
    posterWidth: 859,
    posterHeight: 1024,
    posterCard: "/assets/posters/lifton-card.webp",
    imageAlt: "Team Tech Lifton UPS for elevators",
    inquiry: "elevator-ups",
    inquiryLabel: "Lifton UPS",
    description: [
      "Team Tech prices Lifton UPS for residential, industrial, and commercial lifts. Tell us the building and we will match the range to the site.",
      "It is built as an alternative to running a diesel generator every time the mains fails.",
    ],
    highlights: [
      { title: "Safe and reliable", detail: "Performance you can count on when the lift must move." },
      { title: "Smart power", detail: "Consistent, stable backup for elevator loads." },
      { title: "Support you trust", detail: "Complete after-sales assistance." },
    ],
    reasons: [
      "More economical than a diesel generator",
      "Fully automatic",
      "Multipurpose",
      "Hassle free",
      "Uninterrupted power back-up",
      "Complete after-sales support",
    ],
    specs: [
      { title: "Pure sine wave", detail: "Smooth, clean power for sensitive drives" },
      { title: "Wide input range", detail: "Works in low and high voltage conditions" },
      { title: "Overload protection", detail: "Protects the equipment from damage" },
      { title: "Low noise", detail: "Silent running for occupied buildings" },
      { title: "Energy efficient", detail: "Lower consumption and higher savings" },
      { title: "Microprocessor design", detail: "Built for high efficiency" },
    ],
    applications: ["Residential buildings", "Commercial complexes", "Industrial units", "Offices and workspaces"],
    closing: "Powering reliability. Elevating safety.",
  },
  {
    slug: "inverter-batteries",
    name: "Inverter and Solar Batteries",
    cardTitle: "BATTERY SOLUTIONS",
    tagline: "Solar batteries · Inverter batteries",
    kicker: "Complete battery solutions in the town",
    summary:
      "Team Tech solar and inverter batteries for homes, offices, shops, schools, warehouses, and bungalows. More power, fast recharge, safe use, and an eco-friendly build.",
    image: "/assets/products/voyager.png",
    poster: "/assets/posters/batteries.webp",
    posterWidth: 723,
    posterHeight: 1024,
    posterCard: "/assets/posters/batteries-card.webp",
    imageAlt: "Team Tech solar batteries",
    inquiry: "battery",
    inquiryLabel: "Inverter & Solar Batteries",
    description: [
      "From homes and offices to shops, restaurants, schools, start-ups, bungalows, and warehouses.",
      "The Team Tech range of inverter batteries and inverters is built to keep everyday loads and bigger sites running.",
    ],
    highlights: [
      { title: "More power", detail: "Capacity for homes through warehouses." },
      { title: "Fast recharge", detail: "Back to full charge sooner after a discharge." },
      { title: "Safe use", detail: "Built for everyday inverter and solar duty." },
      { title: "Eco friendly", detail: "A cleaner way to store backup power." },
    ],
    reasons: [
      "Solar battery and inverter battery range",
      "Pure sine wave, low-maintenance construction",
      "Pairs with Teamtronix UPS and solar systems",
    ],
    specs: [
      { title: "Solar battery", detail: "For solar UPS and hybrid systems" },
      { title: "Inverter battery", detail: "For home and office inverters" },
      { title: "Low maintenance", detail: "Built for long service intervals" },
      { title: "TT 150 Ah class", detail: "Ask for the rating that matches your load" },
    ],
    applications: ["Homes", "Offices", "Shops and restaurants", "Schools", "Warehouses"],
    closing: "Switching on little joys of life to empowering big dreams.",
  },
  {
    slug: "servo-stabilizer",
    name: "Trust Embedded Stabilizer",
    cardTitle: "STABILIZER",
    tagline: "Servo voltage stabilizer",
    kicker: "Industrial-grade protection for the mains",
    summary:
      "Servo stabilizers for continuous, precise voltage regulation with no break in supply. Highly efficient, with less than 2% no-load losses.",
    image: "/assets/products/servo-stabilizer.png",
    poster: "/assets/posters/stabilizer.webp",
    posterWidth: 723,
    posterHeight: 1024,
    posterCard: "/assets/posters/stabilizer-card.webp",
    imageAlt: "Team Tech servo voltage stabilizers",
    inquiry: "stabilizer",
    inquiryLabel: "Servo Stabilizer",
    description: [
      "Team Tech servo stabilizers are made to be used as mains voltage stabilizers.",
      "They hold the output steady through swings in the incoming supply, without interrupting the load.",
    ],
    highlights: [
      { title: "Wide input range", detail: "Handles low and high incoming voltage." },
      { title: "Fast correction", detail: "Voltage is brought back quickly." },
      { title: "Protected", detail: "Overload and short-circuit protection." },
    ],
    reasons: [
      "Continuous and precise regulation with no break in supply",
      "Less than 2% no-load losses",
      "Reliable protection for homes, offices, and industries",
    ],
    specs: [
      { title: "Wide input voltage", detail: "Works across a broad mains range" },
      { title: "Fast correction", detail: "Quick return to the set voltage" },
      { title: "Overload protection", detail: "Short-circuit protection included" },
      { title: "Energy efficient", detail: "Less than 2% no-load loss" },
      { title: "Heavy duty", detail: "Industrial-grade performance" },
      { title: "Low maintenance", detail: "Long service life" },
    ],
    applications: ["Homes", "Offices", "Industries"],
    closing: "Stable power. Reliable performance.",
  },
  {
    slug: "solar-street-lights",
    name: "Trust Embedded Solar Street Lights",
    cardTitle: "SOLAR STREET LIGHTS",
    tagline: "Illuminating paths, empowering communities",
    kicker: "Split solar street lights, dusk to dawn",
    summary:
      "Solar street lights with a separate panel and battery, LED output, and dusk-to-dawn operation for roads, parking, gardens, and campuses.",
    image: "/assets/products/solar-street-lights.png",
    poster: "/assets/posters/solar-street-lights.webp",
    posterWidth: 768,
    posterHeight: 1024,
    posterCard: "/assets/posters/solar-street-lights-card.webp",
    imageAlt: "Teamtronix solar street lights",
    inquiry: "led",
    inquiryLabel: "Solar Street Lights",
    description: [
      "These are split solar street lights, also called all-in-two lights: the solar panel is one unit, and the battery with the lamp is another.",
      "They run without motion sensors. Model-I stays at full brightness from dusk to dawn. Model-II runs at full brightness for the first four hours, then at a lower level until sunrise.",
    ],
    highlights: [
      { title: "100% solar", detail: "Clean power with no electricity bill." },
      { title: "High brightness", detail: "LED output for maximum visibility." },
      { title: "Long-lasting battery", detail: "Backup sized for the night." },
      { title: "Low maintenance", detail: "Fewer site visits, more savings." },
    ],
    reasons: [
      "No electricity bills",
      "Automatic on and off, dusk to dawn",
      "Weather resistant and durable",
      "Easy installation",
      "Suitable for outdoor areas",
    ],
    specs: [
      { title: "Split design", detail: "Panel separate from battery and lamp" },
      { title: "Model-I", detail: "Full brightness from dusk to dawn" },
      { title: "Model-II", detail: "Full brightness for four hours, then dimmed till sunrise" },
      { title: "Lead-acid option", detail: "Battery can be supplied as a separate unit" },
    ],
    applications: ["Public roads", "Parking lots", "Gardens and parks", "Industrial areas", "Commercial complexes", "Rural and remote sites"],
    closing: "Trust embedded. Brighter tomorrow.",
  },
  {
    slug: "solar-ongrid",
    name: "Ongrid and Hybrid Solar UPS",
    cardTitle: "ONGRID / HYBRID",
    tagline: "1 kW to 100 kW+ · Trust embedded",
    kicker: "Generate power, send the extra to the grid",
    summary:
      "On-grid and hybrid solar UPS from 1 kW to 10 kW single phase and 10 kW to 100 kW+ three phase, with net metering and lithium or lead-acid battery support.",
    image: "/assets/products/solar-ups.png",
    poster: "/assets/posters/solar-ongrid.webp",
    posterWidth: 682,
    posterHeight: 1024,
    posterCard: "/assets/posters/solar-ongrid-card.webp",
    imageAlt: "Team Tech ongrid and hybrid solar UPS",
    inquiry: "solar",
    inquiryLabel: "Ongrid / Hybrid Solar UPS",
    description: [
      "An on-grid system ties into the local distribution supply. It generates electricity for the site and can send surplus power to the grid for compensation through net metering.",
      "Hybrid systems add battery support so essential loads can keep running when the grid is down.",
    ],
    highlights: [
      { title: "Lower bills", detail: "Use your own generation through the day." },
      { title: "Earn from surplus", detail: "Export extra power where net metering applies." },
      { title: "Battery support", detail: "Lithium or lead-acid, on hybrid systems." },
    ],
    reasons: [
      "Seamless grid connectivity",
      "Smart monitoring",
      "High performance",
      "Safe and secure",
      "Advanced technology and expert support",
    ],
    specs: [
      { title: "1 kW – 10 kW", detail: "Single phase" },
      { title: "10 kW – 100 kW+", detail: "Three phase" },
      { title: "How it works", detail: "Panels to the UPS, then the net meter, the grid, and the home" },
      { title: "Battery support", detail: "Lithium or lead-acid on hybrid models" },
    ],
    applications: ["Homes", "Offices", "Industries", "Shops", "Hospitals", "Educational institutions"],
    closing: "Trust embedded. Power assured.",
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export const clients = [
  { src: "/assets/logos/hp.svg", alt: "HP" },
  { src: "/assets/logos/ibm.svg", alt: "IBM" },
  { src: "/assets/logos/google.svg", alt: "Google" },
  { src: "/assets/logos/intel.svg", alt: "Intel" },
  { src: "/assets/logos/oracle.svg", alt: "Oracle" },
  { src: "/assets/logos/tata.svg", alt: "Tata" },
  { src: "/assets/logos/nokia.svg", alt: "Nokia" },
  { src: "/assets/logos/airtel.svg", alt: "Airtel" },
  { src: "/assets/logos/infosys.svg", alt: "Infosys" },
];
