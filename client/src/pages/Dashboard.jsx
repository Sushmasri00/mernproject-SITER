import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import StatsCard from "../components/StatsCard";
import api from "../services/api";
import { useAuth } from "../context/AuthContext";
import {
  FaBook,
  FaClipboardList,
  FaCertificate,
  FaFire,
  FaChartLine,
  FaCode,
  FaLaptopCode,
  FaTrophy,
  FaCalendarAlt,
  FaBell,
  FaRocket,
} from "react-icons/fa";

function Dashboard() {
  const { user } = useAuth();
  const [courses, setCourses] = useState([]);
  const [mockTests, setMockTests] = useState([]);
  const [progress, setProgress] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const [coursesRes, testsRes, progressRes] = await Promise.all([
          api.get("/courses"),
          api.get("/mock-tests"),
          api.get("/progress"),
        ]);

        setCourses(coursesRes.data.courses || []);
        setMockTests(testsRes.data.mockTests || []);
        setProgress(progressRes.data.progress || []);
      } catch (error) {
        console.error("Failed to load dashboard data", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const completion = useMemo(() => {
    if (!progress.length) return 78;
    const total = progress.reduce((acc, item) => acc + Number(item.progressPercentage || 0), 0);
    return Math.round(total / progress.length);
  }, [progress]);

  return (
    <DashboardLayout>
      <section className="hero-section">
        <div className="hero-copy">
          <span className="badge">Placement Readiness</span>
          <h1>Welcome back, {user?.fullName || "Student"} 👋</h1>
          <p>Keep learning consistently and move closer to your dream job with guided courses, mock tests, and progress tracking.</p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/learning">Continue Learning</Link>
            <Link className="btn btn-secondary" to="/mock-tests">Take Mock Test</Link>
          </div>
        </div>

        <div className="hero-card">
          <h3>Current Score</h3>
          <p className="hero-metric">{completion}%</p>
          <p>Excellent momentum this week.</p>
          <ul>
            <li><span>Courses</span><strong>{courses.length}</strong></li>
            <li><span>Tests</span><strong>{mockTests.length}</strong></li>
            <li><span>Activity</span><strong>Live</strong></li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="grid-4">
          <StatsCard title="Courses" value={courses.length} icon={<FaBook />} color="#2563eb" />
          <StatsCard title="Mock Tests" value={mockTests.length} icon={<FaClipboardList />} color="#16a34a" />
          <StatsCard title="Certificates" value="4" icon={<FaCertificate />} color="#f59e0b" />
          <StatsCard title="Leaderboard" value="#12" icon={<FaTrophy />} color="#dc2626" />
          <StatsCard title="DSA Solved" value="145" icon={<FaCode />} color="#7c3aed" />
          <StatsCard title="Coding Hours" value="132" icon={<FaLaptopCode />} color="#db2777" />
          <StatsCard title="Current Streak" value="18 Days" icon={<FaFire />} color="#ea580c" />
          <StatsCard title="Placement Score" value={`${completion}%`} icon={<FaChartLine />} color="#4f46e5" />
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <div>
            <h2 className="section-title">Continue Learning</h2>
            <p className="section-subtitle">Pick up where you last left off and keep your momentum going.</p>
          </div>
          <Link className="btn btn-secondary" to="/courses">Browse All Courses</Link>
        </div>

        {loading ? (
          <div className="loader">Loading your learning path…</div>
        ) : courses.length ? (
          <div className="grid-3">
            {courses.slice(0, 3).map((course) => (
              <div key={course._id} className="course-card">
                <div className="section-header" style={{ marginBottom: 8 }}>
                  <div>
                    <h3>{course.title}</h3>
                    <p className="section-subtitle">{course.instructor}</p>
                  </div>
                  <span className="badge">{course.category}</span>
                </div>
                <p className="section-subtitle">{course.description}</p>
                <div className="meta-row">
                  <span>⏱ {course.duration}</span>
                  <span>⭐ {course.rating}</span>
                </div>
                <div className="form-actions" style={{ marginTop: 16 }}>
                  <Link className="btn btn-primary" to={`/courses/${course._id}`}>Continue</Link>
                  <Link className="btn btn-secondary" to={`/learning/${course._id}`}>Open Lesson</Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state">No courses available yet. The backend can populate them here automatically.</div>
        )}
      </section>

      <section className="section grid-2">
        <div className="card">
          <div className="card-body">
            <h3>Upcoming Mock Tests</h3>
            <div className="list-grid" style={{ marginTop: 16 }}>
              {mockTests.length ? mockTests.slice(0, 3).map((test) => (
                <div key={test._id} className="course-card">
                  <h3>{test.title}</h3>
                  <p className="section-subtitle">{test.category} • {test.duration} mins</p>
                </div>
              )) : <div className="empty-state">Mock tests will appear here as soon as they are created.</div>}
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h3>Daily Focus</h3>
            <div className="list-grid" style={{ marginTop: 16 }}>
              <div className="course-card">
                <h3>DSA Drill</h3>
                <p className="section-subtitle">Solve 3 medium questions before your next study block.</p>
              </div>
              <div className="course-card">
                <h3>Communication Prep</h3>
                <p className="section-subtitle">Review your resume bullet points and refine your pitch.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
}

export default Dashboard;