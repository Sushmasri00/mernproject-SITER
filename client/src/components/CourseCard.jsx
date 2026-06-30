import { Link } from "react-router-dom";

function CourseCard({ course, progress = 0, actionLabel = "Continue", onAction }) {
  return (
    <article className="course-card">
      <div className="section-header" style={{ marginBottom: 8 }}>
        <div>
          <h3>{course.title}</h3>
          <p className="section-subtitle">{course.instructor || "Expert mentor"}</p>
        </div>
        <span className="badge">{course.category}</span>
      </div>

      <p className="section-subtitle">{course.description}</p>
      <div className="meta-row">
        <span>⏱ {course.duration || "6 weeks"}</span>
        <span>⭐ {course.rating || 4.8}</span>
        <span>👥 {course.totalStudents || 1200}+ learners</span>
      </div>

      <div className="progress-bar" style={{ marginTop: 12 }}>
        <span style={{ width: `${Math.min(100, progress)}%` }}></span>
      </div>
      <div className="section-header" style={{ marginTop: 12 }}>
        <span className="tag">{Math.round(progress)}% completed</span>
        <div style={{ display: "flex", gap: 8 }}>
          <Link className="btn btn-secondary" to={`/courses/${course._id || course.id}`}>View</Link>
          <button className="btn btn-primary" onClick={onAction}>{actionLabel}</button>
        </div>
      </div>
    </article>
  );
}

export default CourseCard;