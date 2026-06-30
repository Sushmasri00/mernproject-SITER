import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    college: "",
    branch: "",
    year: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/register", formData);
      alert(res.data.message || "Registration successful");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>PlacementPro</h1>
        <p>Create your student account</p>

        <form onSubmit={handleRegister}>
          <div className="field">
            <label htmlFor="fullName">Full Name</label>
            <input id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>
          <div className="field">
            <label htmlFor="college">College</label>
            <input id="college" name="college" value={formData.college} onChange={handleChange} />
          </div>
          <div className="field">
            <label htmlFor="branch">Branch</label>
            <input id="branch" name="branch" value={formData.branch} onChange={handleChange} />
          </div>
          <div className="field">
            <label htmlFor="year">Year</label>
            <input id="year" type="number" name="year" value={formData.year} onChange={handleChange} />
          </div>
          <div className="field">
            <label htmlFor="phone">Phone Number</label>
            <input id="phone" name="phone" value={formData.phone} onChange={handleChange} />
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: "100%", marginTop: 20 }}>Register</button>
        </form>

        <p style={{ marginTop: 16, textAlign: "center" }}>
          Already have an account?
          <Link to="/login" className="inline-link" style={{ marginLeft: 8 }}>Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;