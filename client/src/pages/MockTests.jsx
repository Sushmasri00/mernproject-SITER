import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import MockTestCard from "../components/MockTestCard";
import api from "../services/api";
import { getDemoMockTests, getStoredQuizAttempts } from "../services/demoData";

function MockTests() {
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [attempts, setAttempts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadTests = async () => {
      try {
        const res = await api.get("/mock-tests");
        const backendTests = res.data.mockTests || [];
        setTests(backendTests.length ? backendTests : getDemoMockTests());
      } catch (error) {
        setTests(getDemoMockTests());
      } finally {
        setLoading(false);
      }
    };

    setAttempts(getStoredQuizAttempts());
    loadTests();
  }, []);

  return (
    <DashboardLayout>
      <div className="section-header">
        <div>
          <h2 className="section-title">Mock Tests</h2>
          <p className="section-subtitle">Practice with company-wise tests and detailed analysis.</p>
        </div>
        <span className="badge">Timer included</span>
      </div>

      {loading ? (
        <div className="loader">Loading mock tests…</div>
      ) : (
        <div className="grid-3">
          {tests.map((test) => {
            const attempted = attempts.some((item) => item.testId === test._id);
            return (
              <MockTestCard
                key={test._id}
                title={test.title}
                company={test.category}
                duration={test.duration}
                difficulty={attempted ? "Attempted" : "Ready"}
                onView={() => navigate(`/mock-tests/${test._id}`)}
              />
            );
          })}
        </div>
      )}

      <div className="card" style={{ marginTop: 24 }}>
        <div className="card-body">
          <h3>Leaderboard</h3>
          <p className="section-subtitle">Top performers this week are tracked on the leaderboard page.</p>
          <Link className="btn btn-primary" to="/leaderboard" style={{ marginTop: 12 }}>View Leaderboard</Link>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default MockTests;