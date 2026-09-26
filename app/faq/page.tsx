import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage } from "@/components/ContentPage";
import { JsonLd } from "@/components/JsonLd";
import { faqs } from "@/lib/faqs";
import { faqSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Frequently Asked Questions",
  description:
    "Answers about Teamtronix UPS systems, the money-back guarantee, certifications, the Bangalore office, and how to request a quote.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <ContentPage
      label="Support"
      title={
        <>
          FREQUENTLY ASKED <span className="highlight">QUESTIONS</span>
        </>
      }
      crumbs={[{ href: "/", label: "Home" }, { label: "FAQ" }]}
    >
      <JsonLd data={faqSchema(faqs)} />
      {faqs.map((faq) => (
        <section key={faq.question}>
          <h2>{faq.question}</h2>
          <p>{faq.answer}</p>
        </section>
      ))}
      <p>
        Still deciding on a system? <Link href="/#contact">Send an enquiry</Link> and an engineer will respond.
      </p>
    </ContentPage>
  );
}
