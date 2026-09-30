export function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-image reveal-left">
            <div className="about-image-main">
              <img
                src="/assets/logo.png"
                alt="Teamtronix Logo"
                width={200}
                height={200}
                style={{ width: 200, height: 200, borderRadius: 16, boxShadow: "0 20px 50px rgba(227, 24, 55, 0.3)" }}
              />
              <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
                <div style={{ fontSize: "0.8rem", color: "var(--gray-500)", letterSpacing: "0.2em" }}>INDIA PVT. LTD.</div>
              </div>
            </div>
            <div className="year-badge">
              <span className="since">Since</span>
              <span className="year">1994</span>
            </div>
          </div>
          <div className="about-content reveal-right">
            <span className="section-label">Total Power Solutions</span>
            <h2>
              RELIABLE <span className="highlight">ENERGY</span> SOLUTIONS
            </h2>
            <p className="lead">First • Innovation • Power</p>
            <p>
              Teamtronix India Private Limited is a trusted provider of innovative power backup and energy solutions, delivering reliability, efficiency, and performance for homes, businesses, and industries. With a commitment to quality and customer satisfaction, we offer UPS systems, inverter batteries, solar solutions, stabilizers, and power management equipment.
            </p>
            <p>
              Driven by our core values of First, Innovation, and Power, we provide dependable technology that keeps our customers connected and powered at all times.
            </p>
            <div className="values-grid">
              <div className="value-item">
                <h3>First</h3>
                <p>Quality and customer satisfaction come first</p>
              </div>
              <div className="value-item">
                <h3>Innovation</h3>
                <p>Dependable technology for homes and industry</p>
              </div>
              <div className="value-item">
                <h3>Power</h3>
                <p>Backup and energy solutions that stay on</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
