export type ProductFaq = { question: string; answer: string };

export type ProductSeo = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  whatIs: string[];
  priceDrivers: string[];
  areaLinks: { href: string; label: string }[];
  relatedBrandSlugs?: string[];
  faqs: ProductFaq[];
  /** Extra HTML sections as paragraphs / tables described in data */
  extraSections?: {
    id: string;
    heading: string;
    paragraphs?: string[];
    table?: { headers: string[]; rows: string[][] };
  }[];
  /** Show ratings table only when filled */
  ratings: { label: string; value: string }[];
  showRatings: boolean;
  priceFrom: number | null;
  lastModified: string;
};

export const productSeo: ProductSeo[] = [
  {
    slug: "lifton",
    title: "Lift UPS for Apartments in Bangalore | Lifton Elevator UPS",
    description:
      "Lift UPS that runs your apartment elevator during power cuts, cheaper than a DG set. Supply, installation & AMC in Bengaluru.",
    h1: "Lift UPS for Apartments & Buildings in Bengaluru",
    whatIs: [
      "A lift UPS (elevator UPS) keeps a passenger or service lift moving when BESCOM fails. Instead of starting a diesel generator for one elevator, the UPS draws from a battery bank and feeds the lift drive with clean power.",
      "Apartments across Bengaluru — especially newer towers in HBR Layout, Thanisandra and North Bengaluru — use lift UPS so residents are not stranded between floors during evening cuts. Hospitals and commercial buildings use the same idea for stretcher and service lifts.",
      "Lifton from Teamtronix is built for this duty: fully automatic changeover, pure sine-wave output suited to modern lift drives, and economics that favour elevator-only backup over running a DG set every time the mains dips.",
    ],
    priceDrivers: [
      "Lift motor kilowatts and passenger capacity",
      "Single-phase vs three-phase supply",
      "Number of floors and expected trips during an outage",
      "Battery bank size and chemistry",
      "Installation access, cabling and commissioning",
    ],
    areaLinks: [
      { href: "/lift-ups-hbr-layout/", label: "Lift UPS in HBR Layout & Kalyan Nagar" },
      { href: "/lift-ups-thanisandra/", label: "Lift UPS in Thanisandra" },
      { href: "/ups-amc-bangalore/", label: "Lift UPS AMC in Bengaluru" },
    ],
    faqs: [
      {
        question: "Will the lift run during a complete power cut?",
        answer:
          "Yes — when the Lifton unit and batteries are sized for your motor and trip profile. Runtime is not unlimited; we design for the trips your association expects during typical outages.",
      },
      {
        question: "Do I still need a DG set?",
        answer:
          "If the DG only exists to move the lift, many associations can rely on lift UPS for that job. If the genset also feeds pumps, common lights or shops, you may keep both. We advise after seeing the electrical layout.",
      },
      {
        question: "How is lift UPS sized?",
        answer:
          "We need lift capacity and passengers, motor kW, phase, floors, and how many trips you want during an outage. From that we propose UPS rating and battery bank.",
      },
      {
        question: "Does it work with all lift brands?",
        answer:
          "Most residential and commercial lift brands — share the make and model so we can confirm drive compatibility.",
      },
      {
        question: "Do you offer AMC for lift UPS?",
        answer:
          "Yes. Scheduled visits check batteries, connections and operation. Ask for current visit frequency when you request a quote.",
      },
    ],
    extraSections: [
      {
        id: "vs-dg",
        heading: "Lift UPS vs DG set",
        paragraphs: [
          "Associations often compare Lifton with keeping a diesel generator solely for the elevator. The table below is qualitative — we do not invent rupee savings.",
        ],
        table: {
          headers: ["Factor", "Lift UPS", "DG set (lift-only use)"],
          rows: [
            ["Fuel", "None during backup — batteries recharge from mains/solar", "Diesel required for every run"],
            ["Noise", "Quiet indoor/plant-room operation", "Audible exhaust and engine noise"],
            ["Fumes", "No exhaust fumes", "Diesel exhaust near the building"],
            ["Maintenance", "Battery and UPS checks on AMC", "Engine oil, filters, fuel, start batteries"],
            ["Changeover", "Automatic", "Auto-start if configured; still mechanical"],
            ["Space", "UPS + battery footprint in plant room", "Genset room / outdoor pad and exhaust path"],
          ],
        },
      },
      {
        id: "sizing-info",
        heading: "Information we need to size your lift UPS",
        paragraphs: [
          "Before a quotation we ask for: lift capacity (kg / passengers), motor rating in kW, supply phase, number of floors, and how many up/down trips you want during a typical outage. A photo of the lift controller nameplate helps. With that we match Lifton rating and battery bank to the building — not a generic catalogue pick.",
        ],
      },
      {
        id: "use-cases",
        heading: "Where Lifton is used",
        paragraphs: [
          "Residential apartment associations, commercial complexes, hospitals and offices across Bengaluru use lift UPS so vertical transport stays available when the grid fails. Pure sine-wave output suits the drives found in modern elevators.",
        ],
      },
    ],
    ratings: [],
    showRatings: false, // TODO(owner): add kVA / battery options
    priceFrom: null,
    lastModified: "2026-09-30",
  },
  {
    slug: "online-ups",
    title: "Online UPS Dealer in Bangalore | Teamtronix",
    description:
      "Double-conversion online UPS for hospitals, clinics, offices and servers in Bengaluru. Sizing, installation and AMC.",
    h1: "Online UPS for Hospitals, Offices & Servers in Bengaluru",
    whatIs: [
      "An online UPS continuously converts incoming AC to DC and back to AC. The load runs from the inverter all the time, so utility spikes, sags and brief failures are filtered before they reach equipment. Transfer to battery is effectively seamless.",
      "Hospitals, diagnostic labs, clinics, server rooms, CCTV/NVR racks, CNC controls and bank back-offices in Bengaluru use online UPS when even a short break is unacceptable. Home lighting loads usually do not need this class — that is what offline / home UPS is for.",
      "Teamtronix Trust Embedded online UPS systems are sized after we understand your load in VA/kVA, required backup time and whether the site is single-phase or three-phase.",
    ],
    priceDrivers: [
      "kVA rating and redundancy needs",
      "Single-phase vs three-phase",
      "Battery bank size and backup minutes/hours required",
      "Installation environment (server room, clinic, industrial)",
      "AMC and monitoring options",
    ],
    areaLinks: [
      { href: "/online-ups-for-hospitals/", label: "Online UPS for hospitals & clinics" },
      { href: "/ups-amc-bangalore/", label: "UPS AMC in Bengaluru" },
      { href: "/ups-dealer-hebbal/", label: "UPS dealer in Hebbal" },
    ],
    relatedBrandSlugs: ["luminous", "microtek"],
    faqs: [
      {
        question: "What is double conversion?",
        answer:
          "The UPS rectifies AC to DC, then inverts DC back to AC for the load. That continuous conversion creates an electrical firewall against many mains disturbances.",
      },
      {
        question: "When do I need three-phase online UPS?",
        answer:
          "Larger hospital wings, industrial controls and bigger IT loads often need three-phase. Smaller clinics and office racks may stay single-phase. We confirm after a load survey.",
      },
      {
        question: "How long will batteries last on an online UPS?",
        answer:
          "Runtime depends on load and battery Ah — there is no universal hours figure. Tell us the critical load and desired backup window and we size the bank.",
      },
      {
        question: "Do you offer AMC for online UPS?",
        answer:
          "Yes, including battery health checks and load tests for clinics, hospitals and offices.",
      },
      {
        question: "Can online UPS protect CCTV and NVR?",
        answer:
          "Yes — a correctly sized online or line-interactive system keeps recorders and cameras up through short cuts. Share camera count and recorder wattage.",
      },
    ],
    extraSections: [
      {
        id: "phase",
        heading: "Single phase and three phase",
        paragraphs: [
          "Single-phase online UPS suits many clinics, small server rooms and office floors. Three-phase systems serve larger hospitals, factories and buildings with three-phase distribution. Matching the UPS to the site’s supply avoids nuisance trips and unbalanced loading.",
        ],
      },
    ],
    ratings: [],
    showRatings: false, // TODO(owner): confirm kVA range table
    priceFrom: null,
    lastModified: "2026-09-30",
  },
  {
    slug: "offline-ups",
    title: "Home UPS & Inverter Dealer in Bangalore | Teamtronix",
    description:
      "Home UPS and inverters for flats, houses and shops in Bengaluru. Right-sized for your load, installed at your doorstep.",
    h1: "Home UPS & Inverters in Bengaluru",
    whatIs: [
      "A home UPS (offline / standby UPS or inverter) keeps essential circuits alive when the mains fails. Under normal conditions it passes utility power through; when voltage drops out of range it switches to battery and inverter output.",
      "Bengaluru flats and independent houses use home UPS for lights, fans, TV, Wi-Fi and laptops. Shops use them for billing counters and lighting. It is the practical choice when you do not need the continuous double conversion of an online UPS.",
      "Teamtronix offline UPS systems are paired with the right battery Ah after we see your appliance list — not a one-size brochure pick.",
    ],
    priceDrivers: [
      "Inverter VA rating vs your simultaneous load",
      "Battery Ah and whether tubular or SMF",
      "Sine-wave vs basic waveform preference",
      "Wiring, MCB and installation labour",
      "Brand choice (Teamtronix / Team Tech, Luminous, Microtek, Amaze)",
    ],
    areaLinks: [
      { href: "/ups-dealer-rt-nagar/", label: "UPS dealer in R.T. Nagar" },
      { href: "/inverter-dealer-hbr-layout/", label: "Inverter dealer in HBR Layout" },
      { href: "/inverter-dealer-thanisandra/", label: "Inverter dealer in Thanisandra" },
    ],
    relatedBrandSlugs: ["luminous", "microtek", "amaze"],
    faqs: [
      {
        question: "What can a home UPS run?",
        answer:
          "Typically fans, LED lights, TV, Wi-Fi router and a laptop or desktop. Some setups include a mixer or a fridge — that needs careful sizing. Share your list for a firm recommendation.",
      },
      {
        question: "Is sine wave worth it for a flat?",
        answer:
          "For modern electronics and quieter fans, yes. Pure sine wave is gentler on LED drivers and small motors than square-wave output.",
      },
      {
        question: "How do I size a 3BHK inverter?",
        answer:
          "Add up the watts you want on backup at once, include inverter efficiency headroom, then choose battery Ah for the hours you need. We do this with you from an appliance list.",
      },
      {
        question: "Do you install in apartments across North Bengaluru?",
        answer:
          "Yes — R.T. Nagar, Hebbal, HBR Layout, Thanisandra, Frazer Town and nearby areas.",
      },
    ],
    extraSections: [
      {
        id: "load-table",
        heading: "What can a home UPS run?",
        paragraphs: [
          "Guidance only — final sizing is done by our team after your list:",
        ],
        table: {
          headers: ["Load", "Usually on home UPS?", "Notes"],
          rows: [
            ["Ceiling / pedestal fans", "Yes", "Count how many run together"],
            ["LED lights", "Yes", "Low wattage; easy to include"],
            ["TV", "Yes", "Add set-top box if needed"],
            ["Wi-Fi router", "Yes", "Small continuous load"],
            ["Laptop / desktop", "Yes", "Desktops draw more than laptops"],
            ["Mixer / grinder", "Sometimes", "High surge — confirm before adding"],
            ["Fridge", "Sometimes", "Compressor surge; needs headroom"],
            ["AC / geyser / induction", "Usually no", "Needs a much larger system"],
          ],
        },
      },
      {
        id: "waveform",
        heading: "Sine wave vs square wave",
        paragraphs: [
          "Pure sine wave mimics mains and suits sensitive electronics. Square or modified square can cause buzzing fans or stress on some adapters. Ask for sine wave when you buy a new home UPS for a Bengaluru flat.",
        ],
      },
    ],
    ratings: [],
    showRatings: false, // TODO(owner): VA / Ah catalogue
    priceFrom: null,
    lastModified: "2026-09-30",
  },
  {
    slug: "inverter-batteries",
    title: "Inverter Battery Dealer in Bangalore | Teamtronix",
    description:
      "Inverter and solar batteries from Team Tech, Amaron and Luminous. Replacement, old-battery exchange and installation in Bengaluru.",
    h1: "Inverter & Solar Batteries in Bengaluru",
    whatIs: [
      "The battery is what actually stores backup energy. Inverter and solar batteries for Bengaluru homes are usually tubular flooded, flat-plate, or sealed SMF types — each with different maintenance and cycling behaviour.",
      "Team Tech batteries (including TT 150 Ah class — ask for the rating that matches your load) sit alongside Amaron and Luminous options we supply and install. Undersizing the Ah bank is a common reason batteries die early: the inverter may start, but deep daily discharge shortens life.",
      "Heat, low water level on flooded cells, and leaving batteries deeply discharged all shorten life. We test ageing banks before you replace them and help match Ah to your real load.",
    ],
    priceDrivers: [
      "Ah capacity and voltage (typically 12 V modules in series/parallel)",
      "Tubular vs SMF construction",
      "Brand (Team Tech, Amaron, Luminous)",
      "Delivery and installation",
      "Any old-battery exchange credit (if offered)",
    ],
    areaLinks: [
      { href: "/inverter-dealer-hbr-layout/", label: "Battery dealer in HBR Layout" },
      { href: "/ups-dealer-rt-nagar/", label: "Battery shop in R.T. Nagar" },
      { href: "/ups-dealer-frazer-town/", label: "Batteries for Frazer Town" },
    ],
    relatedBrandSlugs: ["amaron", "luminous"],
    faqs: [
      {
        question: "Tubular vs SMF – which lasts longer?",
        answer:
          "It depends on cycling and care. Tubular banks are popular for daily inverter duty; SMF suits low-maintenance sites. Neither lasts if chronically deep-discharged or overheated.",
      },
      {
        question: "Do you take old batteries in exchange?",
        answer:
          "Ask at quote time — exchange depends on type and condition.",
      },
      {
        question: "What is TT 150 Ah class?",
        answer:
          "Team Tech offers batteries in the 150 Ah class among other ratings. Confirm the exact model against your inverter charger and load rather than assuming any 150 Ah battery fits.",
      },
      {
        question: "Can you replace batteries for Luminous or Microtek inverters?",
        answer:
          "Yes, when voltage and Ah class match. Share the inverter model sticker.",
      },
    ],
    extraSections: [
      {
        id: "types",
        heading: "Tubular, flat-plate and SMF",
        paragraphs: [
          "Tubular plates are widely used for home inverters and generally handle regular cycling when watered correctly. Flat-plate designs appear in some budget and automotive-adjacent uses. SMF / VRLA batteries are sealed, need less watering, and prefer correct charging voltages — useful in tighter indoor spaces.",
        ],
      },
      {
        id: "life",
        heading: "What shortens battery life",
        paragraphs: [
          "Deep daily discharge, skipped water top-ups on flooded cells, hot plant rooms, undersized Ah banks, and leaving a battery flat for days. Correct inverter charging settings matter as much as the brand name on the case.",
        ],
      },
    ],
    ratings: [],
    showRatings: false, // TODO(owner): Ah range table
    priceFrom: null,
    lastModified: "2026-09-30",
  },
  {
    slug: "servo-stabilizer",
    title: "Servo Stabilizer Dealer in Bangalore | Single & 3 Phase",
    description:
      "Servo voltage stabilizers for homes, clinics, offices and factories in Bengaluru, with under 2% no-load loss. Get a quote.",
    h1: "Servo Voltage Stabilizers in Bengaluru",
    whatIs: [
      "A servo voltage stabilizer continuously corrects high or low mains voltage so ACs, fridges, lifts, medical equipment and machines see a steady supply. Unlike a simple relay stabilizer, a servo design uses a motor-driven variable transformer for finer, continuous correction without breaking the supply.",
      "Bengaluru sites with long feeders or industrial neighbours often see swings that trip equipment or cook compressors. Team Tech servo stabilizers are built as mains voltage stabilizers with less than 2% no-load losses, wide input range and overload protection.",
      "We supply single-phase and three-phase units after confirming your load and incoming voltage range. Air-cooled vs oil-cooled availability depends on rating — confirm with us for the size you need.",
    ],
    priceDrivers: [
      "kVA rating and single vs three phase",
      "Input voltage window required",
      "Air-cooled vs oil-cooled construction (where applicable)",
      "Indoor vs outdoor / industrial enclosure",
      "Installation and cabling",
    ],
    areaLinks: [
      { href: "/ups-dealer-frazer-town/", label: "Stabilizers for Frazer Town homes & shops" },
      { href: "/ups-dealer-hebbal/", label: "Stabilizers in Hebbal" },
      { href: "/ups-dealer-rt-nagar/", label: "Visit us in R.T. Nagar" },
    ],
    faqs: [
      {
        question: "What does a servo stabilizer protect?",
        answer:
          "ACs, refrigerators, medical equipment, CNC and other machines, and sometimes lift feeders — anything that suffers when mains voltage wanders.",
      },
      {
        question: "Single phase or three phase?",
        answer:
          "Match the stabilizer to the supply feeding the load. Homes and small shops are often single-phase; factories and larger buildings need three-phase.",
      },
      {
        question: "Air-cooled or oil-cooled?",
        answer:
          "Higher continuous industrial ratings may use oil-cooled designs; smaller ratings are often air-cooled.",
      },
      {
        question: "Is no-load loss really under 2%?",
        answer:
          "Team Tech servo stabilizers are specified with less than 2% no-load losses. Ask for the datasheet on the exact model you are buying.",
      },
    ],
    ratings: [],
    showRatings: false, // TODO(owner): kVA table
    priceFrom: null,
    lastModified: "2026-09-30",
  },
  {
    slug: "solar-ongrid",
    title: "On-Grid & Hybrid Solar Inverter in Bangalore | Teamtronix",
    description:
      "On-grid and hybrid solar UPS from 1 kW to 100 kW+ with lithium or lead-acid batteries, for Bengaluru homes and businesses.",
    h1: "On-Grid & Hybrid Solar UPS in Bengaluru",
    whatIs: [
      "On-grid solar ties into the distribution supply: panels generate for your loads and can export surplus through net metering where the utility allows it. When the grid is down, a pure on-grid inverter typically shuts off for safety unless the design includes backup.",
      "Hybrid solar UPS adds battery storage so essential loads can continue during a cut. Off-grid systems run independently of the utility — a different design brief. Teamtronix supplies on-grid and hybrid solar UPS from 1–10 kW single phase and 10–100 kW+ three phase, with lithium or lead-acid battery support on hybrid models.",
      "Whether we handle BESCOM net-metering paperwork end-to-end is confirmed per project — ask when you enquire.",
    ],
    priceDrivers: [
      "kW array size and inverter rating",
      "On-grid vs hybrid (battery cost dominates hybrid)",
      "Lithium vs lead-acid storage",
      "Roof structure, mounting and DC/AC cabling",
      "Net-metering and inspection requirements",
    ],
    areaLinks: [
      { href: "/ups-dealer-rt-nagar/", label: "Solar enquiry at R.T. Nagar" },
      { href: "/ups-dealer-hebbal/", label: "Solar for Hebbal homes & offices" },
      { href: "/inverter-dealer-thanisandra/", label: "Thanisandra apartment & villa solar" },
    ],
    faqs: [
      {
        question: "On-grid vs hybrid vs off-grid — which do I need?",
        answer:
          "On-grid maximises bill savings when the utility is present. Hybrid adds batteries for backup. Off-grid is for sites without a reliable grid. Most Bengaluru homes start with on-grid or hybrid.",
      },
      {
        question: "What sizes do you offer?",
        answer:
          "1–10 kW single phase and 10–100 kW+ three phase, matched to your roof and sanctioned load.",
      },
      {
        question: "Do you support lithium batteries?",
        answer:
          "Hybrid models can support lithium or lead-acid — confirm chemistry for the inverter you choose.",
      },
      {
        question: "Do you handle BESCOM net metering?",
        answer:
          "Ask when you request a quote. Paperwork support depends on the project scope we agree.",
      },
    ],
    ratings: [
      { label: "Single phase", value: "1 kW – 10 kW" },
      { label: "Three phase", value: "10 kW – 100 kW+" },
    ],
    showRatings: true,
    priceFrom: null,
    lastModified: "2026-09-30",
  },
  {
    slug: "solar-street-lights",
    title: "Solar Street Light Supplier in Bangalore | Teamtronix",
    description:
      "Solar street lights for layouts, apartments, campuses and roads in Bengaluru. Dusk-to-dawn LED with separate panel and battery.",
    h1: "Solar Street Lights in Bengaluru",
    whatIs: [
      "Solar street lights light roads, parking lots, gardens and campuses without a grid trench to every pole. Our split (all-in-two) design keeps the solar panel as one unit and the battery with the LED lamp as another — useful for maintenance and for aiming the panel at the sun.",
      "Model-I stays at full brightness from dusk to dawn. Model-II runs full brightness for the first four hours, then a lower level until sunrise. There are no motion sensors on these models; they are built for predictable dusk-to-dawn duty.",
      "Layouts, apartment common areas, college campuses, factories and rural approach roads around Bengaluru are typical sites. Wattage, pole height and backup-night options are confirmed per project.",
    ],
    priceDrivers: [
      "LED wattage and pole height",
      "Battery capacity / backup nights",
      "Model-I vs Model-II dimming profile",
      "Quantity and civil/pole work",
      "Lead-acid battery as a separate unit if required",
    ],
    areaLinks: [
      { href: "/ups-dealer-rt-nagar/", label: "Discuss street lights in R.T. Nagar" },
      { href: "/inverter-dealer-hbr-layout/", label: "Layout lighting near HBR Layout" },
      { href: "/ups-dealer-hebbal/", label: "Campus & road lighting near Hebbal" },
    ],
    faqs: [
      {
        question: "Separate panel vs all-in-one?",
        answer:
          "Our split design separates the panel from the lamp/battery unit. All-in-one poles integrate everything in one head — different maintenance trade-offs. We supply the split range described on this page.",
      },
      {
        question: "Do they need a BESCOM connection?",
        answer:
          "No — they run on solar with battery storage for the night. Civil poles and orientation still matter.",
      },
      {
        question: "What is the difference between Model-I and Model-II?",
        answer:
          "Model-I: full brightness dusk to dawn. Model-II: full brightness about four hours, then dimmed until sunrise.",
      },
      {
        question: "Can you quote wattage and pole options?",
        answer:
          "Yes after we know the road width, mounting height and how many nights of autonomy you want.",
      },
    ],
    ratings: [],
    showRatings: false, // TODO(owner): wattage / pole / backup-night options
    priceFrom: null,
    lastModified: "2026-09-30",
  },
];

export function getProductSeo(slug: string) {
  return productSeo.find((item) => item.slug === slug);
}
