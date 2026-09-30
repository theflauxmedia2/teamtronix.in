import { moneyBackText, SITE } from "@/lib/site";

export type FaqItem = { question: string; answer: string };
export type FaqGroup = { id: string; title: string; items: FaqItem[] };

export const faqGroups: FaqGroup[] = [
  {
    id: "about",
    title: "About Teamtronix",
    items: [
      {
        question: "What does Teamtronix manufacture?",
        answer:
          "UPS systems, sine-wave inverters, tubular batteries, servo stabilizers, solar UPS systems, solar street lights, and rooftop or ground-mounted solar projects.",
      },
      {
        question: "How long has Teamtronix been in business?",
        answer:
          "Teamtronix began in 1994 as Kamati Electro Networks, with one employee and Rs. 5,000. We now operate as Teamtronix India Private Limited from R.T. Nagar, Bengaluru.",
      },
      {
        question: "Do you offer a money-back guarantee?",
        answer: moneyBackText(),
      },
      {
        question: "Where is the Bangalore office?",
        answer: `#518, 19th Cross, Adi Kabeer Ashram Road, R.T. Nagar, Near VCare Hospital, Bengaluru - 560032. Call ${SITE.phones.primary} or ${SITE.phones.secondary}.`,
      },
      {
        question: "How do I request a quote?",
        answer:
          "Use the quote form on this website, email akram@teamtronix.in or afroze@teamtronix.in, or call the numbers above. The team aims to reply within 24 hours.",
      },
      {
        question: "Which certifications does Teamtronix list?",
        answer:
          "ISO 9001:2008 with British Certifications Inc., CPRI certification from the Central Power Research Institute, ETDC approval, and MSME registration with the Government of India.",
      },
    ],
  },
  {
    id: "choosing",
    title: "Choosing a UPS or inverter",
    items: [
      {
        question: "What size inverter do I need for a 2BHK?",
        answer:
          "It depends on which rooms and appliances you want on backup. A typical 2BHK lighting-and-fan set with TV and Wi-Fi often lands in a modest home-inverter class, but a fridge or mixer changes the picture. Share your appliance list on WhatsApp and we will size it — we do not quote a one-size Ah figure without your load.",
      },
      {
        question: "Online UPS vs offline UPS – which do I need?",
        answer:
          "Online (double-conversion) UPS continuously rebuilds the waveform and is preferred for hospitals, labs, servers and sensitive electronics. Offline / home UPS switches to battery when mains fails and suits lights, fans and everyday home or shop loads. If transfer time must be effectively zero, choose online.",
      },
      {
        question: "How long will my inverter backup last?",
        answer:
          "Backup time depends on battery capacity (Ah), inverter efficiency and how many watts you draw. Halving the load roughly doubles runtime for the same battery. We estimate backup after you list the loads — avoid relying on a generic “hours” claim on a brochure.",
      },
      {
        question: "Sine wave vs square wave – does it matter?",
        answer:
          "Pure sine-wave output is gentler on motors, LED drivers and modern electronics. Square or modified waveforms can make some fans buzz or stress sensitive gear. For lift drives and most new home electronics we recommend sine wave.",
      },
    ],
  },
  {
    id: "batteries",
    title: "Batteries",
    items: [
      {
        question: "Tubular vs SMF battery – which should I buy?",
        answer:
          "Tubular batteries are common for home inverters and typically tolerate deeper cycling with periodic water top-ups. SMF (sealed) batteries need less maintenance and suit tighter spaces, but cycling and heat still limit life. We recommend based on your inverter, space and maintenance preference.",
      },
      {
        question: "How long does an inverter battery last?",
        answer:
          "Typically a few years in Bengaluru home duty, shorter if the battery is deeply discharged often, kept in heat, or undersized for the load. Water level (for flooded types) and correct charging matter. Ask us to test an ageing battery before you replace it.",
      },
      {
        question: "Do you take old batteries in exchange?",
        answer:
          "Ask when you request a quote. Whether we offer old-battery exchange depends on type and condition — confirmed at the time of sale.",
      },
    ],
  },
  {
    id: "lift",
    title: "Lift UPS",
    items: [
      {
        question: "What is a lift UPS?",
        answer:
          "A lift UPS (elevator UPS) is a dedicated backup system that keeps a passenger or service lift running during a power cut. Lifton from Teamtronix is built for this duty with pure sine-wave output suited to lift drives.",
      },
      {
        question: "Is a lift UPS cheaper than a DG set?",
        answer:
          "For elevator-only backup, associations often prefer lift UPS because there is no diesel, less noise and no fumes, and changeover is automatic. Whole-building loads may still need a DG. We compare options on a site visit without inventing rupee figures.",
      },
      {
        question: "Can a lift UPS run the lift during a full power cut?",
        answer:
          "Yes, when the UPS and battery bank are sized for the motor kilowatts and the number of trips you expect during an outage. Share lift capacity, motor kW, phase and floors for sizing.",
      },
    ],
  },
  {
    id: "service",
    title: "Service & areas",
    items: [
      {
        question: "Which areas do you serve?",
        answer:
          "Primary areas include R.T. Nagar, HBR Layout, Thanisandra, Frazer Town and Pulakeshinagar, plus Hebbal, Ganganagar, Sultanpalya, Kammanahalli, Kalyan Nagar, Nagawara, Hennur, Cox Town, Benson Town and Sanjay Nagar across North Bengaluru.",
      },
      {
        question: "Do you offer AMC?",
        answer:
          "Yes — annual maintenance for UPS and lift UPS used by apartments, hospitals, clinics, schools and offices. Visits typically cover battery health, load checks, cleaning and a report.",
      },
      {
        question: "Do you service Luminous, Microtek and Amaron?",
        answer:
          "Yes. Besides Teamtronix / Team Tech we supply and service Luminous, Amaron, Microtek and Amaze UPS, inverters and batteries. Share the model when you book a visit.",
      },
    ],
  },
];

/** Flat list for FAQPage JSON-LD and simple iterators. */
export const faqs: FaqItem[] = faqGroups.flatMap((group) => group.items);
