import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage } from "@/components/ContentPage";
import { JsonLd } from "@/components/JsonLd";
import { faqGroups, faqs } from "@/lib/faqs";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "UPS & Inverter FAQs | Teamtronix Bangalore",
  description:
    "Answers on UPS sizing, backup time, lift UPS, batteries, warranty and service areas from a Bengaluru dealer since 1994.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <ContentPage
      label="Support"
      title="UPS, Inverter & Lift UPS Questions"
      crumbs={[{ href: "/", label: "Home" }, { label: "FAQ" }]}
    >
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq/" },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />

      {faqGroups.map((group) => (
        <section key={group.id} id={group.id}>
          <h2>{group.title}</h2>
          {group.items.map((faq) => (
            <div key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </section>
      ))}

      <p>
        Still deciding on a system? <Link href="/contact/#quote">Send an enquiry</Link> and an engineer will respond.
      </p>
    </ContentPage>
  );
}
