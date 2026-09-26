import { Counter } from "@/components/Counter";

const stats = [
  { target: 26, suffix: "+", label: "Years of Excellence" },
  { target: 4000, suffix: "+", label: "Happy Clients" },
  { target: 100, suffix: "%", label: "Money Back Guarantee" },
  { target: 98, suffix: "%", label: "Customer Satisfaction" },
];

export function Stats() {
  return (
    <section className="stats" aria-label="Company figures">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div className="stat-card reveal" key={stat.label} style={{ transitionDelay: `${(index + 1) * 0.1}s` }}>
              <div className="number">
                <Counter target={stat.target} inView />
                <span>{stat.suffix}</span>
              </div>
              <div className="label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
