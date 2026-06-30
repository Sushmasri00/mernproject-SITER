import DashboardLayout from "../layouts/DashboardLayout";

function Leaderboard() {
  return (
    <DashboardLayout>
      <div className="section-header">
        <div>
          <h2 className="section-title">Leaderboard</h2>
          <p className="section-subtitle">Stay motivated and track your rank among peers.</p>
        </div>
        <span className="badge">XP driven</span>
      </div>

      <div className="card">
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Student</th>
                <th>XP</th>
                <th>Badges</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>#1</td><td>Riya Sharma</td><td>12,400</td><td>🏅🔥</td></tr>
              <tr><td>#2</td><td>Arjun Singh</td><td>11,820</td><td>⚡</td></tr>
              <tr><td>#3</td><td>Meera Nair</td><td>10,950</td><td>🎯</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Leaderboard;
