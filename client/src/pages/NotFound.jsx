import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="auth-page">
      <div className="auth-card" style={{ textAlign: "center" }}>
        <h1>404</h1>
        <p>The page you are looking for does not exist.</p>
        <div className="hero-actions" style={{ justifyContent: "center", marginTop: 20 }}>
          <Link className="btn btn-primary" to="/">Go Home</Link>
          <Link className="btn btn-secondary" to="/dashboard">Open Dashboard</Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;