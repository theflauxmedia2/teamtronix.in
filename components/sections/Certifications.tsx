const certifications = [
  {
    title: "ISO 9001:2008",
    detail: "British Certifications Inc.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    title: "CPRI Certified",
    detail: "Central Power Research Institute",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "ETDC Approved",
    detail: "Electronic Test & Dev Center",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "MSME Registered",
    detail: "Govt. of India",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
  },
];

export function Certifications() {
  return (
    <section className="certifications" id="certifications">
      <div className="container">
        <div style={{ textAlign: "center" }} className="reveal">
          <span className="section-label" style={{ justifyContent: "center" }}>
            Quality Assurance
          </span>
          <h2 className="section-title">
            CERTIFIED <span className="highlight">EXCELLENCE</span>
          </h2>
        </div>
        <div className="cert-grid">
          {certifications.map((item, index) => (
            <div className="cert-item reveal" key={item.title} style={{ transitionDelay: `${(index + 1) * 0.1}s` }}>
              {item.icon}
              <div className="cert-text">
                {item.title}
                <span>{item.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
