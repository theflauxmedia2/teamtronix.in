import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import { site } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Terms of Service",
  description: "Terms for using the Teamtronix India website and for quotations requested through it.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <ContentPage
      label="Legal"
      title={
        <>
          TERMS OF <span className="highlight">SERVICE</span>
        </>
      }
      crumbs={[{ href: "/", label: "Home" }, { label: "Terms" }]}
    >
      <p>These terms cover use of the {site.shortName} website at {site.url.replace("https://", "")}.</p>
      <h2>The website</h2>
      <p>
        Product descriptions on this site are a guide. Ratings, availability, and suitability are confirmed in a written quotation. A form submission is a request for that quotation, not an order.
      </p>
      <h2>Quotations and the guarantee</h2>
      <p>
        Price, delivery, warranty, and the 100% money-back guarantee apply only as written in the quotation or invoice for the product you buy.
      </p>
      <h2>Acceptable use</h2>
      <p>Do not misuse the enquiry form, attempt to break the site, or copy the site design or product images for another business.</p>
      <h2>Liability</h2>
      <p>
        The site is provided as a way to learn about Teamtronix and to ask for a quote. Decisions about load, installation, and electrical safety belong with the quotation and the engineer who surveys the site.
      </p>
      <h2>Law</h2>
      <p>These terms are governed by the laws of India. Questions can be sent to {site.email}.</p>
    </ContentPage>
  );
}
