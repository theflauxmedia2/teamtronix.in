import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage } from "@/components/ContentPage";
import { site } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Service Request",
  description: "Request service for a Teamtronix UPS, inverter, battery, stabilizer, or solar system.",
  path: "/service",
});

export default function ServicePage() {
  return (
    <ContentPage
      label="Support"
      title={
        <>
          SERVICE <span className="highlight">REQUEST</span>
        </>
      }
      crumbs={[{ href: "/", label: "Home" }, { label: "Service" }]}
    >
      <p>For a breakdown, installation, or a site visit, contact the Bangalore office with the product name and the site address.</p>
      <ul>
        <li>
          Phone: <a href={`tel:${site.phones[0].tel}`}>{site.phones[0].display}</a>
        </li>
        <li>
          Phone: <a href={`tel:${site.phones[1].tel}`}>{site.phones[1].display}</a>
        </li>
        <li>
          Email:{" "}
          {site.emails.map((email, index) => (
            <span key={email}>
              {index > 0 ? " or " : null}
              <a href={`mailto:${email}`}>{email}</a>
            </span>
          ))}
        </li>
      </ul>
      <p>
        You can also describe the fault in the <Link href="/?product=other#contact">enquiry form</Link>.
      </p>
    </ContentPage>
  );
}
