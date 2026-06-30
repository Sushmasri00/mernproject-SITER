import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function DashboardLayout({ children }) {
  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="main-panel">
        <Navbar />
        <div className="content-panel">{children}</div>
      </div>
    </div>
  );
}

export default DashboardLayout;