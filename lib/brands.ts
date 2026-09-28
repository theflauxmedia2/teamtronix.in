export const brands = [
  {
    name: "Luminous",
    src: "/assets/brands/luminous.svg",
    inquiry: "luminous",
  },
  {
    name: "Amaron",
    src: "/assets/brands/amaron.jpg",
    inquiry: "amaron",
  },
  {
    name: "Microtek",
    src: "/assets/brands/microtek.svg",
    inquiry: "microtek",
  },
  {
    name: "Amaze",
    src: "/assets/brands/amaze.png",
    inquiry: "amaze",
  },
] as const;

export const brandInquiryOptions = brands.map((brand) => ({
  value: brand.inquiry,
  label: brand.name,
}));
