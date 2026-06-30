import DashboardLayout from "../layouts/DashboardLayout";

function CompanyPreparation() {
  return (
    <DashboardLayout>
      <div className="section-header">
        <div>
          <h2 className="section-title">Company Preparation</h2>
          <p className="section-subtitle">Focused prep for top recruiters and placement drives.</p>
        </div>
        <span className="badge">8 companies</span>
      </div>

      <div className="grid-3">
        <div className="course-card"><h3>Amazon</h3><p className="section-subtitle">DSA + leadership principles + coding rounds.</p></div>
        <div className="course-card"><h3>Microsoft</h3><p className="section-subtitle">System design fundamentals and debugging practice.</p></div>
        <div className="course-card"><h3>Google</h3><p className="section-subtitle">Problem solving, communication, and mock interviews.</p></div>
      </div>
    </DashboardLayout>
  );
}

export default CompanyPreparation;
