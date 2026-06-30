import DashboardLayout from "../layouts/DashboardLayout";

function ResumeBuilder() {
  return (
    <DashboardLayout>
      <div className="hero-section" style={{ marginBottom: 24 }}>
        <div className="hero-copy">
          <span className="badge">Resume Builder</span>
          <h1>Build a recruiter-ready resume in minutes.</h1>
          <p>Upload your current resume and get actionable recommendations to improve impact and formatting.</p>
          <div className="hero-actions">
            <button className="btn btn-primary">Upload Resume</button>
            <button className="btn btn-secondary">See Tips</button>
          </div>
        </div>
        <div className="hero-card">
          <h3>Resume Score</h3>
          <p className="hero-metric">82/100</p>
          <p>Strong content, add more measurable achievements.</p>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default ResumeBuilder;
