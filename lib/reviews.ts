export type Review = {
  name: string;
  area: string;
  product: string;
  text: string;
};

/**
 * Paste real Google reviews only. Leave empty to hide the section.
 * Do NOT invent testimonials. Do NOT emit AggregateRating schema.
 */
export const reviews: Review[] = [
  // TODO(owner): paste real Google review quotes here
];
