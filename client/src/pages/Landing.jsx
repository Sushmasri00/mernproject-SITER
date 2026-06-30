import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="page-shell">
      <nav className="navbar" style={{ borderBottom: "1px solid #e2e8f0", padding: "18px 24px" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Link to="/" style={{ fontSize: "1.5rem", fontWeight: 800, color: "#2563eb" }}>PlacementPro</Link>
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <Link to="/login" className="btn btn-secondary">Login</Link>
            <Link to="/register" className="btn btn-primary">Register</Link>
          </div>
        </div>
      </nav>

      <main className="container page-content">
        <section className="hero-section">
          <div className="hero-copy">
            <span className="badge">AI Powered Placement Preparation</span>
            <h1>Learn smarter, practice harder, and land your dream role.</h1>
            <p>PlacementPro blends modern learning, mock tests, progress tracking, and recruiter-readiness in one polished student dashboard.</p>
            <div className="hero-actions">
              <Link to="/register" className="btn btn-primary">Get Started</Link>
              <Link to="/dashboard" className="btn btn-secondary">Explore Dashboard</Link>
            </div>
            <div className="card" style={{ marginTop: 18, padding: 16 }}>
              <h3 style={{ marginBottom: 8 }}>How to use PlacementPro</h3>
              <ol style={{ paddingLeft: 18, margin: 0, lineHeight: 1.6 }}>
                <li>Register a student account.</li>
                <li>Enroll in one or more courses.</li>
                <li>Open Learning and mark lessons complete.</li>
                <li>Attempt mock tests and review your score.</li>
              </ol>
            </div>
          </div>

          <div className="hero-card">
            <h3>Placement Readiness</h3>
            <p className="hero-metric">92%</p>
            <p>Average student confidence score after 3 weeks of guided learning.</p>
            <ul>
              <li><span>Courses</span><strong>150+</strong></li>
              <li><span>Mock Tests</span><strong>40+</strong></li>
              <li><span>Daily Practice</span><strong>24/7</strong></li>
            </ul>
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <div>
              <h2 className="section-title">Why students choose PlacementPro</h2>
              <p className="section-subtitle">Everything you need for coding rounds, aptitude, communication, and interview prep.</p>
            </div>
          </div>
          <div className="grid-3">
            <div className="card"><div className="card-body"><h3>Live Learning Paths</h3><p className="section-subtitle">Follow structured paths for DSA, aptitude, programming, and core subjects.</p></div></div>
            <div className="card"><div className="card-body"><h3>Mock Tests</h3><p className="section-subtitle">Practice with timed company-specific assessments and review performance instantly.</p></div></div>
            <div className="card"><div className="card-body"><h3>Career Support</h3><p className="section-subtitle">Build resumes, track progress, and earn certificates as you grow.</p></div></div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-grid">
          <div>
            <h3>PlacementPro</h3>
            <p>Modern placement preparation for ambitious engineering students.</p>
          </div>
          <div>
            <h3>Explore</h3>
            <ul>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/mock-tests">Mock Tests</Link></li>
              <li><Link to="/certificates">Certificates</Link></li>
            </ul>
          </div>
          <div>
            <h3>Get Started</h3>
            <ul>
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/dashboard">Dashboard</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landing;