import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import { useAuth } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await api.post("/auth/login", formData);
      login(res.data.user, res.data.token);
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>PlacementPro</h1>
        <p>Login to your student dashboard</p>

        <form onSubmit={handleLogin}>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="field">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>

          <div className="form-actions">
            <label style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#" className="inline-link">Forgot Password?</a>
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: "100%", marginTop: 20 }} disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="card" style={{ marginTop: 16, padding: 14 }}>
          <p style={{ margin: 0, fontSize: 14 }}><strong>Demo tip:</strong> you can register a new account or use the app immediately after signup and then go to Courses to start learning.</p>
        </div>

        <p style={{ marginTop: 16, textAlign: "center" }}>
          Don&apos;t have an account?
          <Link to="/register" className="inline-link" style={{ marginLeft: 8 }}>Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;