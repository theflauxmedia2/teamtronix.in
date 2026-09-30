export type Project = {
  slug: string;
  title: string;
  area: string;
  productSlug: string;
  problem: string;
  solution: string;
  photos: { src: string; alt: string }[];
  date: string;
};

/**
 * Case studies — hidden from nav until at least one project exists.
 * TODO(owner): add real installations with photos.
 * When you add projects, recreate app/projects/[slug]/page.tsx with generateStaticParams
 * (required for next export when the folder exists).
 */
export const projects: Project[] = [];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
