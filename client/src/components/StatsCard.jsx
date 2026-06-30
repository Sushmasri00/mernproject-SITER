function StatsCard({ title, value, icon, color }) {
  return (
    <div className="stat-card">
      <div className="icon" style={{ background: color }}>
        {icon}
      </div>
      <h4>{title}</h4>
      <p className="value">{value}</p>
    </div>
  );
}

export default StatsCard;
