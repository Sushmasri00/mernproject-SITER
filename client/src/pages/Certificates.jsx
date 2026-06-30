import DashboardLayout from "../layouts/DashboardLayout";
import CertificateCard from "../components/CertificateCard";

function Certificates() {
  return (
    <DashboardLayout>
      <div className="section-header">
        <div>
          <h2 className="section-title">Certificates</h2>
          <p className="section-subtitle">Celebrate your milestones with professional credentials.</p>
        </div>
        <span className="badge success">4 earned</span>
      </div>

      <div className="list-grid">
        <CertificateCard title="DSA Mastery Certificate" issuer="PlacementPro" status="Ready" />
        <CertificateCard title="Mock Interview Excellence" issuer="PlacementPro" status="Ready" />
      </div>
    </DashboardLayout>
  );
}

export default Certificates;