export type AreaFaq = { question: string; answer: string };

export type AreaPage = {
  slug: string;
  /** Display name used in body copy */
  areaName: string;
  h1: string;
  title: string;
  description: string;
  intro: string;
  nearbyLocalities: string[];
  fromOffice: string;
  focusProducts: { slug: string; label: string }[];
  localFaqs: AreaFaq[];
  /** Empty until owner adds real photos */
  jobs: { src: string; caption: string }[];
  serviceType: string;
  areaServedLabel: string;
  lastModified: string;
};

export const areas: AreaPage[] = [
  {
    slug: "ups-dealer-rt-nagar",
    areaName: "R.T. Nagar",
    h1: "UPS & Inverter Dealer in R.T. Nagar, Bengaluru",
    title: "UPS & Inverter Dealer in R.T. Nagar, Bengaluru | Teamtronix",
    description:
      "Walk-in UPS, inverter, battery and lift UPS dealer in R.T. Nagar, Bengaluru since 1994. Near VCare Hospital. Call 99809 43021.",
    intro:
      "R.T. Nagar is our home base. From the shop on Adi Kabeer Ashram Road near VCare Hospital we supply online and home UPS, inverter batteries, Lifton lift UPS, servo stabilizers and solar systems to flats, shops, clinics and offices across the locality. Residents and facility managers can walk in for sizing advice, battery replacement, or a same-day conversation about apartment lift backup — without waiting for a distant city-wide dealer to call back.",
    nearbyLocalities: [
      "Ganganagar",
      "Sultanpalya",
      "Kaval Byrasandra",
      "Dinnur",
      "Matadahalli",
    ],
    fromOffice:
      "Our showroom is in R.T. Nagar itself — about a short walk from VCare Hospital on Adi Kabeer Ashram Road.",
    focusProducts: [
      { slug: "offline-ups", label: "Home UPS & inverters" },
      { slug: "inverter-batteries", label: "Inverter batteries" },
      { slug: "lifton", label: "Lifton lift UPS" },
    ],
    localFaqs: [
      {
        question: "Can I walk into the Teamtronix shop in R.T. Nagar?",
        answer:
          "Yes. Our office is at #518, 19th Cross, Adi Kabeer Ashram Road, Near VCare Hospital. Call ahead on +91 99809 43021 if you want a specific engineer available.",
      },
      {
        question: "Do you deliver and install UPS in R.T. Nagar the same day?",
        answer:
          "For stocked home UPS and batteries we often arrange local delivery quickly. Exact timing depends on the model and site — message us on WhatsApp with your load list.",
      },
      {
        question: "Do you replace inverter batteries for R.T. Nagar homes?",
        answer:
          "Yes. We supply Team Tech, Amaron and Luminous batteries and can advise on sizing when you share your inverter model and typical load.",
      },
      {
        question: "Is lift UPS available for apartment associations in R.T. Nagar?",
        answer:
          "Yes. Lifton lift UPS is designed for residential and commercial elevators. Share the lift make, motor kW and floors so we can size it.",
      },
    ],
    jobs: [], // TODO(owner): add real installation photos with captions
    serviceType: "UPS and inverter sales, installation and service",
    areaServedLabel: "R.T. Nagar, Bengaluru",
    lastModified: "2026-09-30",
  },
  {
    slug: "ups-dealer-hebbal",
    areaName: "Hebbal",
    h1: "UPS & Inverter Dealer in Hebbal, Bangalore",
    title: "UPS & Inverter Dealer in Hebbal, Bangalore | Teamtronix",
    description:
      "UPS, inverter and battery dealer for Hebbal, Bangalore — villas, offices and ring-road sites. Since 1994. Call 99809 43021.",
    intro:
      "Hebbal sits on Bengaluru’s northern ring-road belt: independent houses, newer offices, clinics and warehouses all need clean backup when BESCOM dips. From our R.T. Nagar shop we supply home UPS, online UPS for server and clinic loads, inverter batteries and stabilizers across Hebbal and neighbouring pockets. Facility teams often call us when a site wants one vendor for supply, installation and later AMC rather than juggling multiple city dealers.",
    nearbyLocalities: [
      "Hebbal Kempapura",
      "Kodigehalli",
      "Bhoopasandra",
      "Nagawara",
    ],
    fromOffice:
      "Hebbal is roughly 5–7 km (approx.) from our R.T. Nagar shop via Bellary Road / Nagawara.",
    focusProducts: [
      { slug: "online-ups", label: "Online UPS" },
      { slug: "offline-ups", label: "Home UPS" },
      { slug: "servo-stabilizer", label: "Servo stabilizers" },
    ],
    localFaqs: [
      {
        question: "Do you deliver and install in Hebbal?",
        answer:
          "Yes. We supply and install UPS, inverters, batteries and stabilizers across Hebbal. Share the site address and load list on WhatsApp.",
      },
      {
        question: "How fast can you come to Hebbal for a breakdown?",
        answer:
          "Response depends on engineer availability and the fault. Message or call us with the product model and site address — see our service page for how to book.",
      },
      {
        question: "Do you cover offices near Hebbal flyover and Kempapura?",
        answer:
          "Yes. We regularly work across Hebbal, Kempapura, Kodigehalli and nearby commercial stretches.",
      },
    ],
    jobs: [],
    serviceType: "UPS and inverter sales, installation and service",
    areaServedLabel: "Hebbal, Bengaluru",
    lastModified: "2026-09-30",
  },
  {
    slug: "inverter-dealer-hbr-layout",
    areaName: "HBR Layout",
    h1: "Inverter, UPS & Battery Dealer in HBR Layout",
    title: "Inverter, UPS & Battery Dealer in HBR Layout | Teamtronix",
    description:
      "Inverter, UPS and battery dealer for HBR Layout and Kalyan Nagar apartments. Since 1994. Call 99809 43021.",
    intro:
      "HBR Layout and the Kalyan Nagar corridor are dense with mid-rise apartments and independent homes. Power cuts interrupt lifts, lighting and work-from-home setups, so residents look for a local inverter and battery partner who also understands apartment loads. Teamtronix supplies home UPS, tubular and SMF batteries, and can size systems for 2BHK and 3BHK flats after a quick load conversation — plus lift UPS when associations want to stop running a DG set only for the elevator.",
    nearbyLocalities: [
      "Kalyan Nagar",
      "Kacharakanahalli",
      "Kammanahalli",
      "Hennur",
    ],
    fromOffice:
      "HBR Layout is roughly 6–8 km (approx.) from our R.T. Nagar shop via Nagawara / Outer Ring Road.",
    focusProducts: [
      { slug: "offline-ups", label: "Home UPS & inverters" },
      { slug: "inverter-batteries", label: "Inverter batteries" },
      { slug: "lifton", label: "Lifton lift UPS" },
    ],
    localFaqs: [
      {
        question: "Do you install inverters in HBR Layout apartments?",
        answer:
          "Yes. We supply and install home UPS and batteries for flats and independent houses across HBR Layout and Kalyan Nagar.",
      },
      {
        question: "Can you replace an old inverter battery in HBR Layout?",
        answer:
          "Yes. Share your inverter model and battery Ah rating. We stock Team Tech, Amaron and Luminous options and will advise on a match.",
      },
      {
        question: "Do you also do lift UPS for HBR Layout apartments?",
        answer:
          "Yes — see our dedicated Lift UPS for HBR Layout page, or ask for Lifton sizing with your lift motor details.",
      },
      {
        question: "How do I get a quote for a 2BHK in HBR Layout?",
        answer:
          "WhatsApp a list of fans, lights, TV, Wi-Fi and any fridge or mixer you want on backup. We size the inverter and battery for that load.",
      },
    ],
    jobs: [],
    serviceType: "Inverter, UPS and battery sales and installation",
    areaServedLabel: "HBR Layout, Bengaluru",
    lastModified: "2026-09-30",
  },
  {
    slug: "lift-ups-hbr-layout",
    areaName: "HBR Layout",
    h1: "Lift UPS for Apartments in HBR Layout & Kalyan Nagar",
    title: "Lift UPS for Apartments in HBR Layout | Teamtronix",
    description:
      "Lifton lift UPS for HBR Layout and Kalyan Nagar apartments — quieter and cleaner than a DG set for elevator backup. Call 99809 43021.",
    intro:
      "Many HBR Layout and Kalyan Nagar apartments still rely on a diesel generator just to keep one lift moving during a cut. That means fuel, noise, fumes and monthly maintenance for a load that a properly sized lift UPS can handle automatically. Lifton from Teamtronix is built for elevator motors with pure sine-wave output, so associations can offer safer egress without running a genset for every short outage.",
    nearbyLocalities: [
      "Kalyan Nagar",
      "Kammanahalli",
      "Hennur",
      "Kacharakanahalli",
    ],
    fromOffice:
      "HBR Layout / Kalyan Nagar is roughly 6–8 km (approx.) from our R.T. Nagar office.",
    focusProducts: [
      { slug: "lifton", label: "Lifton lift UPS" },
      { slug: "online-ups", label: "Online UPS" },
      { slug: "servo-stabilizer", label: "Servo stabilizers" },
    ],
    localFaqs: [
      {
        question: "Will the lift run during a complete power cut in HBR Layout?",
        answer:
          "A correctly sized Lifton lift UPS is designed to run the elevator on battery during a mains failure. Final runtime depends on motor size, trips and battery bank — we size after your lift details.",
      },
      {
        question: "Do we still need a DG set if we install lift UPS?",
        answer:
          "Many associations keep a DG for whole-building loads and use lift UPS for the elevator alone. Whether you can retire the genset depends on what else must run — we can discuss after a site survey.",
      },
      {
        question: "Do you offer AMC for lift UPS in HBR Layout apartments?",
        answer:
          "Yes. We offer annual maintenance for Lifton installations. Ask for current AMC visit frequency when you request a quote.",
      },
      {
        question: "Which lift brands do you work with?",
        answer:
          "Most common residential and commercial lift brands — share the make, model and motor kW so we can confirm compatibility.",
      },
    ],
    jobs: [],
    serviceType: "Lift / elevator UPS supply and installation",
    areaServedLabel: "HBR Layout, Bengaluru",
    lastModified: "2026-09-30",
  },
  {
    slug: "inverter-dealer-thanisandra",
    areaName: "Thanisandra",
    h1: "Inverter & UPS Dealer in Thanisandra, Bangalore",
    title: "Inverter & UPS Dealer in Thanisandra, Bangalore | Teamtronix",
    description:
      "Inverter and UPS dealer for Thanisandra apartments and homes in Bangalore. Batteries, home UPS and lift UPS. Call 99809 43021.",
    intro:
      "Thanisandra has grown into a corridor of new apartment towers and gated communities where residents expect backup for lights, fans, work-from-home setups and, critically, the lift. From R.T. Nagar we supply home UPS, inverter batteries and can coordinate Lifton lift UPS for associations who want automatic elevator backup without diesel. Site managers often prefer one North Bengaluru team for supply, installation and later service visits.",
    nearbyLocalities: ["Hegde Nagar", "Nagawara", "Jakkur", "Rachenahalli"],
    fromOffice:
      "Thanisandra is roughly 8–10 km (approx.) from our R.T. Nagar shop via Nagawara / Thanisandra Main Road.",
    focusProducts: [
      { slug: "offline-ups", label: "Home UPS" },
      { slug: "inverter-batteries", label: "Inverter batteries" },
      { slug: "lifton", label: "Lifton lift UPS" },
    ],
    localFaqs: [
      {
        question: "Do you deliver and install in Thanisandra?",
        answer:
          "Yes. We cover Thanisandra and nearby localities for home UPS, batteries and lift UPS. Share your tower address and load list on WhatsApp.",
      },
      {
        question: "How fast can you come for a battery failure in Thanisandra?",
        answer:
          "Timing depends on stock and engineer availability. Call or WhatsApp with the inverter model — we schedule the soonest workable visit.",
      },
      {
        question: "Do you size UPS for 2BHK and 3BHK flats in Thanisandra?",
        answer:
          "Yes. Send an appliance list and we recommend an inverter and battery combination suited to that load.",
      },
    ],
    jobs: [],
    serviceType: "Inverter and UPS sales and installation",
    areaServedLabel: "Thanisandra, Bengaluru",
    lastModified: "2026-09-30",
  },
  {
    slug: "lift-ups-thanisandra",
    areaName: "Thanisandra",
    h1: "Lift UPS for Apartments in Thanisandra",
    title: "Lift UPS for Apartments in Thanisandra | Teamtronix",
    description:
      "Lifton lift UPS for Thanisandra apartment towers — automatic elevator backup without diesel fumes. Call 99809 43021.",
    intro:
      "Thanisandra’s newer towers often have one or two passenger lifts that must keep working when the grid fails — for elderly residents, stretchers and evening arrivals. Running a DG set only for the lift is expensive and noisy; a Lifton lift UPS gives automatic changeover and pure sine-wave power suited to modern lift drives. We survey the motor rating, floors and expected trips, then propose a battery bank that matches how the association actually uses the lift during outages.",
    nearbyLocalities: ["Hegde Nagar", "Jakkur", "Nagawara", "Rachenahalli"],
    fromOffice:
      "Thanisandra is roughly 8–10 km (approx.) from our R.T. Nagar office.",
    focusProducts: [
      { slug: "lifton", label: "Lifton lift UPS" },
      { slug: "servo-stabilizer", label: "Servo stabilizers" },
      { slug: "online-ups", label: "Online UPS" },
    ],
    localFaqs: [
      {
        question: "Can a lift UPS run the lift during a full power cut in Thanisandra?",
        answer:
          "Yes, when sized correctly for the motor and trips. We need lift capacity, motor kW, phase and floors to propose a system.",
      },
      {
        question: "Is lift UPS cheaper than a DG set for Thanisandra apartments?",
        answer:
          "For elevator-only backup, associations often find lift UPS lower on fuel, noise and day-to-day hassle than keeping a DG warm for the lift alone. Exact economics depend on your genset costs — we compare qualitatively on a site visit.",
      },
      {
        question: "Do you offer AMC after installation in Thanisandra?",
        answer:
          "Yes. Annual maintenance covers battery health checks, connections and a visit report. Ask for the current visit frequency with your quote.",
      },
    ],
    jobs: [],
    serviceType: "Lift / elevator UPS supply and installation",
    areaServedLabel: "Thanisandra, Bengaluru",
    lastModified: "2026-09-30",
  },
  {
    slug: "ups-dealer-frazer-town",
    areaName: "Frazer Town",
    h1: "UPS & Inverter Dealer for Frazer Town & Pulakeshinagar",
    title: "UPS & Inverter Dealer for Frazer Town | Teamtronix",
    description:
      "UPS, inverter and stabilizer supply for Frazer Town and Pulakeshinagar from our R.T. Nagar shop. Since 1994. Call 99809 43021.",
    intro:
      "Frazer Town and Pulakeshinagar have older independent homes, shops and clinics that feel every voltage swing and evening cut. Many residents still need a straightforward home inverter, battery replacement or a servo stabilizer for ACs and fridges — not a complex industrial package. Teamtronix serves these localities from our R.T. Nagar office: we do not claim a staffed Frazer Town counter unless the owner confirms one, but we deliver, install and service across the area regularly.",
    nearbyLocalities: [
      "Pulakeshinagar",
      "Cox Town",
      "Benson Town",
      "Richards Town",
    ],
    fromOffice:
      "Frazer Town / Pulakeshinagar is roughly 4–6 km (approx.) from our R.T. Nagar shop via Pottery Road / Wheeler Road corridors.",
    focusProducts: [
      { slug: "offline-ups", label: "Home UPS" },
      { slug: "servo-stabilizer", label: "Servo stabilizers" },
      { slug: "inverter-batteries", label: "Inverter batteries" },
    ],
    localFaqs: [
      {
        question: "Do you have a shop in Frazer Town?",
        answer:
          "Our staffed office is in R.T. Nagar near VCare Hospital. We supply and service Frazer Town and Pulakeshinagar from there — call ahead to arrange a visit.",
      },
      {
        question: "Can you replace batteries for older homes in Pulakeshinagar?",
        answer:
          "Yes. Share the inverter brand and Ah rating. We supply Team Tech, Amaron and Luminous batteries and install at the site.",
      },
      {
        question: "Do you install servo stabilizers for shops in Frazer Town?",
        answer:
          "Yes. Stabilizers help when voltage swings damage ACs, fridges or clinic equipment. Tell us the load and phase.",
      },
    ],
    jobs: [],
    serviceType: "UPS, inverter and stabilizer sales and service",
    areaServedLabel: "Frazer Town, Bengaluru",
    lastModified: "2026-09-30",
  },
  {
    slug: "ups-dealer-ganganagar-sanjay-nagar",
    areaName: "Ganganagar",
    h1: "UPS & Inverter Dealer in Ganganagar & Sanjay Nagar",
    title: "UPS & Inverter Dealer in Ganganagar & Sanjay Nagar | Teamtronix",
    description:
      "Nearby UPS and inverter dealer for Ganganagar and Sanjay Nagar from R.T. Nagar. Batteries, home UPS, service. Call 99809 43021.",
    intro:
      "Ganganagar and Sanjay Nagar sit next door to our R.T. Nagar base, so residents and small offices often prefer a dealer they can reach the same afternoon. We supply home UPS, batteries, online UPS for clinic or CCTV loads, and stabilizers when the mains is restless. Being local means quicker site surveys and easier follow-up service without booking a south-city vendor.",
    nearbyLocalities: ["Sanjay Nagar", "R.T. Nagar", "Bhoopasandra"],
    fromOffice:
      "Ganganagar and Sanjay Nagar are roughly 2–4 km (approx.) from our R.T. Nagar shop.",
    focusProducts: [
      { slug: "offline-ups", label: "Home UPS" },
      { slug: "inverter-batteries", label: "Inverter batteries" },
      { slug: "online-ups", label: "Online UPS" },
    ],
    localFaqs: [
      {
        question: "How close is Teamtronix to Ganganagar?",
        answer:
          "Our shop is in neighbouring R.T. Nagar on Adi Kabeer Ashram Road near VCare Hospital — a short drive from Ganganagar and Sanjay Nagar.",
      },
      {
        question: "Do you do same-area battery swaps in Sanjay Nagar?",
        answer:
          "Often yes when the battery type is in stock. WhatsApp your inverter model and we confirm timing.",
      },
      {
        question: "Can offices in Ganganagar get online UPS for servers?",
        answer:
          "Yes. Online (double-conversion) UPS suits servers, NVR and clinic equipment. Share the load in VA/kVA for sizing.",
      },
    ],
    jobs: [],
    serviceType: "UPS and inverter sales and service",
    areaServedLabel: "Ganganagar, Bengaluru",
    lastModified: "2026-09-30",
  },
  {
    slug: "online-ups-for-hospitals",
    areaName: "Bengaluru hospitals",
    h1: "Online UPS for Hospitals & Clinics in Bengaluru",
    title: "Online UPS for Hospitals & Clinics in Bengaluru | Teamtronix",
    description:
      "Double-conversion online UPS for hospitals, clinics and labs in Bengaluru. Sizing, installation and AMC. Call 99809 43021.",
    intro:
      "Diagnostic labs, OPDs and nursing homes cannot afford a transfer gap when the mains fails. Online UPS continuously double-converts power so imaging gear, analysers, servers and theatre-adjacent loads see a clean supply. Teamtronix has supplied hospitals and diagnostic centres in Bengaluru — including names already listed among our clients — and we size single-phase or three-phase systems after a site load study rather than selling a generic box.",
    nearbyLocalities: [
      "R.T. Nagar",
      "Hebbal",
      "Frazer Town",
      "HBR Layout",
      "Thanisandra",
    ],
    fromOffice:
      "Hospital and clinic sites across North Bengaluru are typically reached from our R.T. Nagar office; travel time depends on the exact address.",
    focusProducts: [
      { slug: "online-ups", label: "Online UPS" },
      { slug: "servo-stabilizer", label: "Servo stabilizers" },
      { slug: "inverter-batteries", label: "Batteries" },
    ],
    localFaqs: [
      {
        question: "Why do hospitals need online UPS instead of a home inverter?",
        answer:
          "Online UPS provides continuous double conversion and effectively zero transfer time, which sensitive medical and lab equipment typically needs. A standby home UPS switches after a short break.",
      },
      {
        question: "Do you offer AMC for hospital UPS?",
        answer:
          "Yes. AMC visits include battery health checks, load tests, cleaning and a written report. Ask for visit frequency when you request a quote.",
      },
      {
        question: "Can you size UPS for a small clinic in North Bengaluru?",
        answer:
          "Yes. Share the equipment list (or nameplate ratings) and required backup time. We propose a rating and battery bank accordingly.",
      },
      {
        question: "Do you service other brands of medical UPS?",
        answer:
          "We supply Teamtronix systems and also service common brands such as Luminous, Microtek and others when asked — confirm the model on the service request.",
      },
    ],
    jobs: [],
    serviceType: "Online UPS for hospitals and clinics",
    areaServedLabel: "Bengaluru",
    lastModified: "2026-09-30",
  },
  {
    slug: "ups-amc-bangalore",
    areaName: "Bengaluru",
    h1: "UPS & Lift UPS AMC for Apartments, Hospitals & Schools",
    title: "UPS & Lift UPS AMC for Apartments & Hospitals | Teamtronix",
    description:
      "Annual maintenance for UPS and lift UPS across North Bengaluru apartments, hospitals and schools. Call 99809 43021.",
    intro:
      "A UPS or Lifton installation only stays reliable if batteries, connections and load behaviour are checked on a schedule. Teamtronix offers AMC for apartment lift UPS, hospital and clinic online UPS, and office or school systems across North Bengaluru. Visits typically cover battery health, a load check, cleaning, terminal inspection and a short report so facility managers have a paper trail — exact visit frequency is confirmed when you enrol.",
    nearbyLocalities: [
      "R.T. Nagar",
      "Hebbal",
      "HBR Layout",
      "Thanisandra",
      "Frazer Town",
    ],
    fromOffice:
      "AMC routes run from our R.T. Nagar office across North Bengaluru service areas.",
    focusProducts: [
      { slug: "lifton", label: "Lifton lift UPS" },
      { slug: "online-ups", label: "Online UPS" },
      { slug: "offline-ups", label: "Home / office UPS" },
    ],
    localFaqs: [
      {
        question: "What does a Teamtronix AMC visit cover?",
        answer:
          "Typically battery health check, load test, cleaning, connection inspection and a visit report. Exact scope is written into the AMC you sign.",
      },
      {
        question: "Do you offer AMC for apartment lift UPS?",
        answer:
          "Yes. Lifton and similar lift UPS installations can be enrolled so associations get scheduled checks rather than only breakdown calls.",
      },
      {
        question: "Which areas does AMC cover?",
        answer:
          "North Bengaluru areas we already serve for sales — including R.T. Nagar, Hebbal, HBR Layout, Thanisandra, Frazer Town and nearby localities. Confirm your site when enquiring.",
      },
      {
        question: "How do I enrol an existing UPS on AMC?",
        answer:
          "Call or WhatsApp with the product model, serial if available, and site address. We schedule an assessment visit before quoting AMC.",
      },
    ],
    jobs: [],
    serviceType: "UPS and lift UPS annual maintenance",
    areaServedLabel: "Bengaluru",
    lastModified: "2026-09-30",
  },
];

export function getArea(slug: string) {
  return areas.find((area) => area.slug === slug);
}
