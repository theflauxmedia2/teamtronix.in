export type Guide = {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  /** Paragraphs and simple structures rendered by the guide template */
  sections: {
    heading?: string;
    paragraphs: string[];
    table?: { headers: string[]; rows: string[][] };
    links?: { href: string; label: string }[];
  }[];
};

export const guides: Guide[] = [
  {
    slug: "lift-ups-vs-dg-set-apartments-bangalore",
    title: "Lift UPS vs DG Set for Apartments in Bangalore",
    description:
      "Compare lift UPS and diesel generators for apartment elevators in Bangalore — fuel, noise, fumes, maintenance and changeover, without invented prices.",
    datePublished: "2026-09-30",
    dateModified: "2026-09-30",
    sections: [
      {
        paragraphs: [
          "When BESCOM fails, most Bengaluru apartment residents care about one thing first: will the lift still move? Associations traditionally answer with a diesel generator. A growing number of North Bengaluru towers — especially in HBR Layout and Thanisandra — are asking whether a dedicated lift UPS is a better fit for elevator-only backup.",
          "This guide compares the two approaches on practical grounds. It does not invent rupee savings or claim a single answer for every building. If you manage an association, use it to prepare questions for a site survey.",
        ],
      },
      {
        heading: "What each system is for",
        paragraphs: [
          "A diesel generator can power many common loads: lifts, pumps, corridor lights, sometimes shops. That flexibility is why older buildings installed one. The downside is fuel, noise, exhaust, and the cost of keeping a genset healthy for short evening cuts.",
          "A lift UPS is sized for the elevator motor and a planned number of trips. It sits on batteries, changes over automatically, and feeds pure sine-wave power suited to modern lift drives. It will not replace a DG that also runs the entire common area — unless you redesign the backup scheme.",
        ],
      },
      {
        heading: "Side-by-side comparison",
        paragraphs: ["Qualitative comparison for elevator-focused backup:"],
        table: {
          headers: ["Factor", "Lift UPS", "DG set"],
          rows: [
            ["Best at", "Elevator-only automatic backup", "Multi-load building backup"],
            ["Fuel", "None while discharging batteries", "Diesel every run"],
            ["Noise & fumes", "Low / none", "Engine noise and exhaust"],
            ["Changeover", "Automatic, electrical", "Auto-start if configured"],
            ["Maintenance", "UPS + battery schedule", "Engine, fuel, filters, start battery"],
            ["Space", "Plant room UPS and batteries", "Genset pad / room and exhaust path"],
          ],
        },
      },
      {
        heading: "When lift UPS is usually the better conversation",
        paragraphs: [
          "New mid-rise apartments where the DG exists mainly because residents refuse a stuck lift. Towers that already have partial lighting backup but hate diesel smell in the evening. Associations tired of fuel pilferage paperwork for short outages.",
          "HBR Layout and Thanisandra have many such associations. If that sounds like your building, read our local pages and product page before you call:",
        ],
        links: [
          { href: "/products/lifton/", label: "Lifton lift UPS product page" },
          { href: "/lift-ups-hbr-layout/", label: "Lift UPS for HBR Layout & Kalyan Nagar" },
          { href: "/lift-ups-thanisandra/", label: "Lift UPS for Thanisandra apartments" },
        ],
      },
      {
        heading: "When you may still want a DG",
        paragraphs: [
          "If pumps, large common lighting, shops or a clubhouse must stay up for hours, a genset (or a hybrid plan) may still be required. Some associations keep a DG for whole-building emergencies and add lift UPS so routine cuts do not burn diesel for one elevator.",
          "Never remove a fire- or code-required backup path without an electrical consultant. Lift UPS is a power product decision inside a wider safety plan.",
        ],
      },
      {
        heading: "What to prepare for a quote",
        paragraphs: [
          "Lift make and model, motor kW, phase, floors, passenger capacity, and how many trips you want during a typical outage. A plant-room photo helps. Teamtronix sizes Lifton from those facts — we do not sell a generic “apartment kit” without them.",
          "Ready to talk? Call +91 99809 43021 or WhatsApp from the Lifton page. Ask about AMC at the same time so batteries are checked on a schedule after installation.",
        ],
        links: [
          { href: "/products/lifton/", label: "Get a Lifton lift UPS quote" },
          { href: "/ups-amc-bangalore/", label: "UPS & lift UPS AMC in Bengaluru" },
          { href: "/contact/", label: "Contact Teamtronix in R.T. Nagar" },
        ],
      },
    ],
  },
  {
    slug: "inverter-size-2bhk-3bhk-bengaluru",
    title: "Inverter Size for a 2BHK or 3BHK in Bengaluru",
    description:
      "Practical guidance on sizing a home inverter and battery for 2BHK and 3BHK flats in Bengaluru — without fake watt charts pretending to be exact.",
    datePublished: "2026-09-30",
    dateModified: "2026-09-30",
    sections: [
      {
        paragraphs: [
          "Searching “inverter size for 2BHK” usually returns a single VA number. That number is rarely right for your flat. Backup needs depend on which rooms you care about, whether the fridge stays on, and how long Bengaluru cuts last in your pocket of the city.",
          "This guide explains the sizing method Teamtronix uses with homeowners in R.T. Nagar, HBR Layout, Thanisandra and nearby areas — so you can arrive at a quote conversation with a clear appliance list.",
        ],
      },
      {
        heading: "Step 1 — List simultaneous loads",
        paragraphs: [
          "Write down every appliance that must run at the same time on backup. Typical 2BHK lists include ceiling fans, LED lights, TV, Wi-Fi router and a laptop. A 3BHK list is the same idea with more rooms — not automatically a huge jump in VA unless you add kitchen or AC loads.",
          "Note surge loads separately: fridge compressors and mixers draw more at start than their nameplate running watts. If you want those on backup, say so explicitly.",
        ],
        table: {
          headers: ["Load", "Often included?", "Watch-outs"],
          rows: [
            ["Fans + LED lights", "Yes", "Count fixtures that run together"],
            ["TV + set-top", "Yes", "Add speaker bars if used"],
            ["Wi-Fi / mesh nodes", "Yes", "Small but always-on"],
            ["Laptop / PC", "Yes", "Desktops need more VA"],
            ["Fridge", "Optional", "Surge + longer runtime needs"],
            ["Mixer", "Optional", "High surge — confirm"],
            ["AC / geyser / induction", "Rare on home UPS", "Needs a much larger system"],
          ],
        },
      },
      {
        heading: "Step 2 — Convert to VA and add headroom",
        paragraphs: [
          "Sum running watts, convert with a power-factor assumption your dealer uses (ask us), then leave headroom so the inverter is not at 100% on day one. Exact maths belongs in the quote — the important habit is not guessing from a neighbour’s model number alone.",
        ],
      },
      {
        heading: "Step 3 — Choose battery Ah for hours, not ego",
        paragraphs: [
          "Battery capacity (Ah) sets how long you last at a given load. Doubling Ah roughly doubles runtime for the same watts; doubling the load halves it. Tubular vs SMF is a maintenance and space choice on top of Ah.",
          "Team Tech, Amaron and Luminous batteries we supply must match the inverter’s charging profile. Replacing only the battery? Bring the inverter model sticker.",
        ],
        links: [
          { href: "/products/offline-ups/", label: "Home UPS & inverters" },
          { href: "/products/inverter-batteries/", label: "Inverter & solar batteries" },
        ],
      },
      {
        heading: "Online UPS is a different product",
        paragraphs: [
          "If you are protecting a clinic fridge of reagents, a server, or medical devices, ask about online double-conversion UPS instead of a home inverter. The transfer behaviour and filtering are different. Most 2BHK lighting backups do not need online UPS.",
        ],
      },
      {
        heading: "Get a Bengaluru-specific recommendation",
        paragraphs: [
          "WhatsApp your appliance list and flat type (2BHK / 3BHK) to Teamtronix. We size from R.T. Nagar for homes across North Bengaluru and can install once you approve the combination.",
        ],
        links: [
          { href: "/ups-dealer-rt-nagar/", label: "UPS dealer in R.T. Nagar" },
          { href: "/products/offline-ups/", label: "Home UPS product page" },
          { href: "/products/inverter-batteries/", label: "Battery options" },
          { href: "/contact/", label: "Contact & quote form" },
        ],
      },
    ],
  },
];

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
