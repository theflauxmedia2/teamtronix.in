import type { ReactNode } from "react";
import { Breadcrumb } from "@/components/Breadcrumb";

export function ContentPage({
  label,
  title,
  children,
  crumbs,
}: {
  label: string;
  title: ReactNode;
  children: ReactNode;
  crumbs: { href?: string; label: string }[];
}) {
  return (
    <main id="main">
      <section className="about">
        <div className="container">
          <Breadcrumb items={crumbs} />
          <span className="section-label">{label}</span>
          <h1 className="section-title">{title}</h1>
          <div className="prose">{children}</div>
        </div>
      </section>
    </main>
  );
}
