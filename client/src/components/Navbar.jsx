import { FaBell } from "react-icons/fa";
import SearchBar from "./SearchBar";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user } = useAuth();

  return (
    <header className="navbar">
      <SearchBar placeholder="Search courses, DSA, mock tests..." />

      <div className="navbar-right">
        <button className="btn btn-secondary" style={{ padding: "10px 14px", borderRadius: "999px" }}>
          <FaBell />
        </button>

        <div className="flex" style={{ alignItems: "center", gap: "12px" }}>
          <div className="avatar">{(user?.fullName || "S").charAt(0).toUpperCase()}</div>
          <div>
            <strong>{user?.fullName || "Student"}</strong>
            <div className="section-subtitle">Placement aspirant</div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;