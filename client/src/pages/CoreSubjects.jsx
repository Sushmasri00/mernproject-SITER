import DashboardLayout from "../layouts/DashboardLayout";

function CoreSubjects() {
  return (
    <DashboardLayout>
      <div className="hero-section" style={{ marginBottom: 24 }}>
        <div className="hero-copy">
          <span className="badge">Core Subjects</span>
          <h1>Strengthen your fundamentals in DBMS, OS, OOPs, and Networks.</h1>
          <p>Prepare for technical interviews with crisp concept notes and revision material.</p>
          <div className="hero-actions">
            <button className="btn btn-primary">Open Notes</button>
            <button className="btn btn-secondary">Take Revision Quiz</button>
          </div>
        </div>
        <div className="hero-card">
          <h3>Revision Progress</h3>
          <p className="hero-metric">78%</p>
          <p>Completed this semester</p>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default CoreSubjects;
