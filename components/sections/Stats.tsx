import { Counter } from "@/components/Counter";
import { SITE, yearsInBusiness } from "@/lib/site";

const years = yearsInBusiness();

export function Stats() {
  const stats = [
    { target: years, suffix: "+", label: "Years of Excellence", kind: "counter" as const },
    { target: 4000, suffix: "+", label: "Happy Clients", kind: "counter" as const },
    { target: 100, suffix: "%", label: "Money Back Guarantee", kind: "counter" as const },
    SITE.showSatisfactionStat
      ? { target: 98, suffix: "%", label: "Customer Satisfaction", kind: "counter" as const }
      : { target: SITE.foundingYear, suffix: "", label: "Serving Bengaluru since", kind: "since" as const },
  ];

  return (
    <section className="stats" aria-label="Company figures">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div className="stat-card reveal" key={stat.label} style={{ transitionDelay: `${(index + 1) * 0.1}s` }}>
              <div className="number">
                {stat.kind === "since" ? (
                  <span>{stat.target}</span>
                ) : (
                  <>
                    <Counter target={stat.target} inView />
                    <span>{stat.suffix}</span>
                  </>
                )}
              </div>
              <div className="label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
