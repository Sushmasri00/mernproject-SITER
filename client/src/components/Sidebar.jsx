import {
  FaHome,
  FaBook,
  FaCode,
  FaBrain,
  FaLaptopCode,
  FaClipboardList,
  FaCertificate,
  FaChartLine,
  FaTrophy,
  FaUserGraduate,
  FaCog,
  FaSignOutAlt,
  FaFileAlt,
} from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Sidebar() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const menu = [
    { title: "Dashboard", icon: <FaHome />, path: "/dashboard" },
    { title: "My Courses", icon: <FaBook />, path: "/courses" },
    { title: "DSA Practice", icon: <FaCode />, path: "/dsa" },
    { title: "Aptitude", icon: <FaBrain />, path: "/aptitude" },
    { title: "Logical Reasoning", icon: <FaBrain />, path: "/logical-reasoning" },
    { title: "Programming", icon: <FaLaptopCode />, path: "/programming" },
    { title: "Core Subjects", icon: <FaClipboardList />, path: "/core-subjects" },
    { title: "Mock Tests", icon: <FaClipboardList />, path: "/mock-tests" },
    { title: "Progress", icon: <FaChartLine />, path: "/progress" },
    { title: "Certificates", icon: <FaCertificate />, path: "/certificates" },
    { title: "Leaderboard", icon: <FaTrophy />, path: "/leaderboard" },
    { title: "Resume Builder", icon: <FaFileAlt />, path: "/resume" },
    { title: "Company Preparation", icon: <FaClipboardList />, path: "/company-preparation" },
    { title: "Notifications", icon: <FaClipboardList />, path: "/notifications" },
    { title: "Profile", icon: <FaUserGraduate />, path: "/profile" },
    { title: "Settings", icon: <FaCog />, path: "/settings" },
  ];

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <h2>PlacementPro</h2>
        <p>Placement Preparation Platform</p>
      </div>

      <nav className="sidebar-nav">
        {menu.map((item) => (
          <NavLink key={item.path} to={item.path} className={({ isActive }) => `sidebar-link ${isActive ? "active" : ""}`}>
            <span>{item.icon}</span>
            <span>{item.title}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <button className="btn btn-danger" style={{ width: "100%" }} onClick={handleLogout}>
          <FaSignOutAlt /> Logout
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;