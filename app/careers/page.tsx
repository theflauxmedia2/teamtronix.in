import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage } from "@/components/ContentPage";
import { site } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Careers",
  description: "Send your resume to Teamtronix India. Engineering and service roles are reviewed by the Bangalore team.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <ContentPage
      label="Company"
      title={
        <>
          WORK WITH <span className="highlight">TEAMTRONIX</span>
        </>
      }
      crumbs={[{ href: "/", label: "Home" }, { label: "Careers" }]}
    >
      <p>
        Teamtronix has grown since 1994 on knowledge, honesty, and quality. When a role opens, the team looks for people who can stand behind the equipment they sell and service.
      </p>
      <p>
        There is no open listing on this page. Send a resume and a short note about the work you want to do to{" "}
        {site.emails.map((email, index) => (
          <span key={email}>
            {index > 0 ? " or " : null}
            <a href={`mailto:${email}`}>{email}</a>
          </span>
        ))}
        .
      </p>
      <p>
        For product or service questions, use the <Link href="/#contact">quote form</Link> instead.
      </p>
    </ContentPage>
  );
}
