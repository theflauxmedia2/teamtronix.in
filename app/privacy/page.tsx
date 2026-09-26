import type { Metadata } from "next";
import { ContentPage } from "@/components/ContentPage";
import { site } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Privacy Policy",
  description: "How Teamtronix India collects and uses the details you send through the quote form, email, or phone.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <ContentPage
      label="Legal"
      title={
        <>
          PRIVACY <span className="highlight">POLICY</span>
        </>
      }
      crumbs={[{ href: "/", label: "Home" }, { label: "Privacy" }]}
    >
      <p>This policy describes what {site.name} does with information you send through this website.</p>
      <h2>What we collect</h2>
      <p>
        The quote form asks for your name, phone number, email address, the product you are interested in, and a description of your requirement. If you call or email, we keep the details needed to answer you.
      </p>
      <h2>Why we collect it</h2>
      <p>We use those details to reply to enquiries, prepare quotations, and arrange installation or service. We do not sell the list.</p>
      <h2>How the form is delivered</h2>
      <p>
        If a form endpoint is configured for this site, the enquiry is sent to that service. Otherwise the form opens your email app so you can send the message to {site.email} yourself.
      </p>
      <h2>How long we keep it</h2>
      <p>Enquiry records are kept for as long as needed to quote, supply, service, or meet a legal requirement, and then deleted or archived.</p>
      <h2>Your choices</h2>
      <p>
        To ask what we hold, or to ask us to correct or delete an enquiry, email <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
      <h2>Contact</h2>
      <p>
        {site.name}, {site.address.street}, {site.address.locality} {site.address.postalCode}.
      </p>
    </ContentPage>
  );
}
