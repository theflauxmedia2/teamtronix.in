import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { JsonLd } from "@/components/JsonLd";
import { getGuide, guides } from "@/lib/guides";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return pageMeta({
    title: guide.title.length > 55 ? guide.title : `${guide.title} | Teamtronix`,
    description: guide.description,
    path: `/guides/${guide.slug}`,
    ogType: "article",
  });
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  return (
    <main id="main">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides/" },
          { name: guide.title, path: `/guides/${guide.slug}/` },
        ])}
      />
      <JsonLd
        data={articleSchema({
          title: guide.title,
          description: guide.description,
          path: `/guides/${guide.slug}/`,
          datePublished: guide.datePublished,
          dateModified: guide.dateModified,
        })}
      />

      <article className="about">
        <div className="container prose">
          <Breadcrumb
            items={[
              { href: "/", label: "Home" },
              { href: "/guides/", label: "Guides" },
              { label: guide.title },
            ]}
          />
          <span className="section-label">Guide</span>
          <h1 className="section-title">{guide.title}</h1>
          <p>
            <time dateTime={guide.datePublished}>{guide.datePublished}</time>
          </p>

          {guide.sections.map((section, index) => (
            <section key={section.heading ?? index}>
              {section.heading ? <h2>{section.heading}</h2> : null}
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
              {section.table ? (
                <table className="seo-table">
                  <thead>
                    <tr>
                      {section.table.headers.map((header) => (
                        <th key={header} scope="col">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.table.rows.map((row) => (
                      <tr key={row.join("-")}>
                        {row.map((cell) => (
                          <td key={cell}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : null}
              {section.links ? (
                <ul>
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
