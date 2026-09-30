import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage } from "@/components/ContentPage";
import { JsonLd } from "@/components/JsonLd";
import { projects } from "@/lib/projects";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "UPS & Lift UPS Projects in Bengaluru | Teamtronix",
  description: "Installation case studies from Teamtronix across North Bengaluru — added as real jobs are documented.",
  path: "/projects",
});

export default function ProjectsIndexPage() {
  return (
    <ContentPage
      label="Projects"
      title="Installations across Bengaluru"
      crumbs={[{ href: "/", label: "Home" }, { label: "Projects" }]}
    >
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects/" },
        ])}
      />
      {projects.length === 0 ? (
        <p>
          {/* TODO(owner): add real installation case studies to lib/projects.ts */}
          Case studies will appear here as we document real installations with photos. Meanwhile see our{" "}
          <Link href="/products/">products</Link> and <Link href="/service/">service</Link> pages.
        </p>
      ) : (
        <ul>
          {projects.map((project) => (
            <li key={project.slug}>
              <Link href={`/projects/${project.slug}/`}>{project.title}</Link>
              <p>
                {project.area} · {project.date}
              </p>
            </li>
          ))}
        </ul>
      )}
    </ContentPage>
  );
}
