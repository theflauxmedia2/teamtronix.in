import { reviews } from "@/lib/reviews";
import { SITE } from "@/lib/site";

/** Renders only when real Google reviews are pasted into lib/reviews.ts. No review schema. */
export function ReviewsSection() {
  if (reviews.length === 0) return null;

  return (
    <section className="reviews-section" aria-labelledby="reviews-heading">
      <div className="container">
        <span className="section-label">Customer feedback</span>
        <h2 id="reviews-heading" className="section-title">
          WHAT <span className="highlight">CUSTOMERS</span> SAY
        </h2>
        <ul className="reviews-list">
          {reviews.map((review) => (
            <li key={`${review.name}-${review.area}`}>
              <blockquote>
                <p>{review.text}</p>
                <footer>
                  <strong>{review.name}</strong>
                  <span>
                    {review.area} · {review.product}
                  </span>
                </footer>
              </blockquote>
            </li>
          ))}
        </ul>
        {SITE.googleReviewUrl || SITE.googleMapsUrl ? (
          <p>
            <a
              href={SITE.googleReviewUrl || SITE.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read our reviews on Google
            </a>
          </p>
        ) : null}
      </div>
    </section>
  );
}
