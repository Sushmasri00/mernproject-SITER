import DashboardLayout from "../layouts/DashboardLayout";
import { useAuth } from "../context/AuthContext";

function Profile() {
  const { user } = useAuth();

  return (
    <DashboardLayout>
      <div className="section-header">
        <div>
          <h2 className="section-title">Profile</h2>
          <p className="section-subtitle">Your student profile and achievements.</p>
        </div>
      </div>

      <div className="card">
        <div className="card-body" style={{ display: "grid", gap: 16 }}>
          <div className="section-header" style={{ marginBottom: 0 }}>
            <div>
              <h3>{user?.fullName || "Student"}</h3>
              <p className="section-subtitle">{user?.email || "student@placementpro.com"}</p>
            </div>
            <span className="badge">Student</span>
          </div>
          <div className="grid-2">
            <div className="course-card">
              <h3>College</h3>
              <p className="section-subtitle">{user?.college || "NIT Jaipur"}</p>
            </div>
            <div className="course-card">
              <h3>Branch</h3>
              <p className="section-subtitle">{user?.branch || "Computer Science"}</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Profile;