function ProgressCard({ title, value, caption, accent }) {
  return (
    <div className="course-card">
      <div className="section-header" style={{ marginBottom: 8 }}>
        <div>
          <h3>{title}</h3>
          <p className="section-subtitle">{caption}</p>
        </div>
        <span className="badge" style={{ background: accent, color: "white" }}>{value}</span>
      </div>
      <div className="progress-bar">
        <span style={{ width: `${value}` }}></span>
      </div>
    </div>
  );
}

export default ProgressCard;
