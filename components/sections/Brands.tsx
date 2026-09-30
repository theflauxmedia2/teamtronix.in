import Link from "next/link";
import { brands } from "@/lib/brands";

export function Brands() {
  return (
    <section className="brands" id="brands">
      <div className="container">
        <div className="brands-head reveal">
          <span className="section-label">Other Brands</span>
          <h2 className="section-title">
            BRANDS <span className="highlight">WE DEAL IN</span>
          </h2>
          <p>
            Besides Teamtronix systems, we supply and service Luminous, Amaron, Microtek, and Amaze UPS, inverters, and batteries.
          </p>
        </div>
        <div className="brand-grid">
          {brands.map((brand) => (
            <Link key={brand.name} href={`/brands/${brand.slug}/`} className="brand-card">
              <img src={brand.src} alt={`${brand.name} logo`} loading="lazy" decoding="async" width={160} height={80} />
              <span>{brand.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
