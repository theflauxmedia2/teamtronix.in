import Link from "next/link";
import { areas } from "@/lib/areas";

export function AreasWeServe() {
  return (
    <section className="areas-serve" id="areas" aria-labelledby="areas-heading">
      <div className="container">
        <span className="section-label">North Bengaluru</span>
        <h2 id="areas-heading" className="section-title">
          AREAS <span className="highlight">WE SERVE</span>
        </h2>
        <p>
          UPS, inverter, battery and lift UPS supply, installation and service across these localities — from our
          R.T. Nagar shop near VCare Hospital.
        </p>
        <ul className="areas-serve-grid">
          {areas.map((area) => (
            <li key={area.slug}>
              <Link href={`/${area.slug}/`}>{area.h1.replace(/ \|.*$/, "")}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
