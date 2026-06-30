import DashboardLayout from "../layouts/DashboardLayout";

function Notifications() {
  return (
    <DashboardLayout>
      <div className="section-header">
        <div>
          <h2 className="section-title">Notifications</h2>
          <p className="section-subtitle">Stay updated with new courses, events, and deadlines.</p>
        </div>
        <span className="badge warning">3 new</span>
      </div>

      <div className="list-grid">
        <div className="course-card">
          <h3>New mock test released</h3>
          <p className="section-subtitle">A fresh Amazon mock test is now live with detailed solutions.</p>
        </div>
        <div className="course-card">
          <h3>Weekly live session</h3>
          <p className="section-subtitle">Join the live doubt-clearing session on DBMS and OS this Friday.</p>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Notifications;
