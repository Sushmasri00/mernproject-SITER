import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import api from "../services/api";

function CourseDetails() {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCourse = async () => {
      setLoading(true);
      try {
        const coursesRes = await api.get("/courses");
        const selectedCourse = (coursesRes.data.courses || []).find((item) => item._id === courseId);
        setCourse(selectedCourse || null);

        if (selectedCourse) {
          const lessonsRes = await api.get(`/lessons/${selectedCourse._id}`);
          setLessons(lessonsRes.data.lessons || []);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadCourse();
  }, [courseId]);

  return (
    <DashboardLayout>
      <div className="section-header">
        <div>
          <h2 className="section-title">Course Details</h2>
          <p className="section-subtitle">A complete view of your selected placement prep course.</p>
        </div>
        <Link className="btn btn-secondary" to="/courses">Back to Courses</Link>
      </div>

      {loading ? (
        <div className="loader">Loading course details…</div>
      ) : course ? (
        <div className="card">
          <div className="card-body">
            <div className="hero-section" style={{ marginBottom: 24, padding: 28 }}>
              <div className="hero-copy">
                <span className="badge">{course.category}</span>
                <h1>{course.title}</h1>
                <p>{course.description}</p>
                <div className="hero-actions">
                  <button className="btn btn-primary">Enroll Now</button>
                  <Link className="btn btn-secondary" to={`/learning/${course._id}`}>Start Learning</Link>
                </div>
              </div>
              <div className="hero-card">
                <h3>Course Snapshot</h3>
                <ul>
                  <li><span>Instructor</span><strong>{course.instructor}</strong></li>
                  <li><span>Duration</span><strong>{course.duration}</strong></li>
                  <li><span>Lessons</span><strong>{lessons.length}</strong></li>
                </ul>
              </div>
            </div>

            <div className="grid-2">
              <div className="course-card">
                <h3>Lessons</h3>
                <div className="list-grid" style={{ marginTop: 12 }}>
                  {lessons.length ? lessons.map((lesson) => (
                    <div key={lesson._id} className="course-card">
                      <h3>{lesson.title}</h3>
                      <p className="section-subtitle">{lesson.description || "Core concept lesson"}</p>
                    </div>
                  )) : <div className="empty-state">Lessons will appear here when the backend adds them.</div>}
                </div>
              </div>
              <div className="course-card">
                <h3>Resources</h3>
                <p className="section-subtitle">PDF notes, interview cheat sheets, coding practice sets, and progress tracker are bundled into this course experience.</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="empty-state">Course not found.</div>
      )}
    </DashboardLayout>
  );
}

export default CourseDetails;