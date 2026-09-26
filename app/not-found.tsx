import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main id="main">
      <section className="about">
        <div className="container">
          <span className="section-label">404</span>
          <h1 className="section-title">
            PAGE <span className="highlight">NOT FOUND</span>
          </h1>
          <p className="prose">That address is not on the Teamtronix site.</p>
          <div className="page-actions">
            <Link className="btn-primary" href="/">
              Back to home
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
