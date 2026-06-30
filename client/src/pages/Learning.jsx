import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import {
  getDemoCourses,
  getStoredEnrollments,
  getStoredCourseProgress,
  saveStoredCourseProgress,
} from "../services/demoData";

function Learning() {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [progress, setProgress] = useState(0);
  const [enrolled, setEnrolled] = useState(false);

  useEffect(() => {
    const allCourses = getDemoCourses();
    const selectedCourse = allCourses.find((item) => item._id === courseId) || allCourses[0];
    const enrollments = getStoredEnrollments();
    const savedProgress = getStoredCourseProgress();
    setCourse(selectedCourse);
    setEnrolled(enrollments.some((item) => item.courseId === (selectedCourse?._id || courseId)));
    setProgress(savedProgress[selectedCourse?._id || courseId] || 0);
  }, [courseId]);

  const nextStep = useMemo(() => {
    if (progress >= 100) return "You completed this course!";
    if (progress >= 60) return "You are close to finishing. Try the practice quiz next.";
    return "Continue with the next lesson and keep your streak alive.";
  }, [progress]);

  const handleAdvance = () => {
    const nextValue = Math.min(100, progress + 20);
    setProgress(nextValue);
    const progressMap = getStoredCourseProgress();
    progressMap[course?._id] = nextValue;
    saveStoredCourseProgress(progressMap);
  };

  return (
    <DashboardLayout>
      <div className="section-header">
        <div>
          <h2 className="section-title">Learning</h2>
          <p className="section-subtitle">Continue your lesson from {course?.title || courseId || "your active course"}.</p>
        </div>
        <Link className="btn btn-secondary" to="/courses">Browse Courses</Link>
      </div>

      <div className="card">
        <div className="card-body">
          <div className="hero-section" style={{ padding: 28, marginBottom: 24 }}>
            <div className="hero-copy">
              <span className="badge">Now Playing</span>
              <h1>{course?.title || "Course lesson"}</h1>
              <p>{course?.description || "Follow this guided lesson and mark your progress as you go."}</p>
              <div className="hero-actions">
                <button className="btn btn-primary" onClick={handleAdvance}>Mark Lesson Complete</button>
                <Link className="btn btn-secondary" to="/mock-tests">Try Quiz</Link>
              </div>
            </div>
            <div className="hero-card">
              <h3>Lesson Notes</h3>
              <ul>
                <li><span>Duration</span><strong>{course?.duration || "4 weeks"}</strong></li>
                <li><span>Resources</span><strong>3 files</strong></li>
                <li><span>Status</span><strong>{enrolled ? "Enrolled" : "Not enrolled"}</strong></li>
              </ul>
            </div>
          </div>

          <div className="grid-2">
            <div className="course-card">
              <h3>Resources</h3>
              <p className="section-subtitle">Links to notes, PDFs, and coding challenge files are ready for practice.</p>
            </div>
            <div className="course-card">
              <h3>Next Steps</h3>
              <p className="section-subtitle">{nextStep}</p>
              <span className="badge success" style={{ marginTop: 12 }}>{progress}% completed</span>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Learning;