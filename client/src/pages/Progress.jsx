import { useEffect, useMemo, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import ProgressCard from "../components/ProgressCard";
import api from "../services/api";

function Progress() {
  const [progress, setProgress] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProgress = async () => {
      try {
        const res = await api.get("/progress");
        setProgress(res.data.progress || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadProgress();
  }, []);

  const completion = useMemo(() => {
    if (!progress.length) return "74%";
    const total = progress.reduce((acc, item) => acc + Number(item.progressPercentage || 0), 0);
    return `${Math.round(total / progress.length)}%`;
  }, [progress]);

  return (
    <DashboardLayout>
      <div className="section-header">
        <div>
          <h2 className="section-title">Progress</h2>
          <p className="section-subtitle">Track your weekly momentum and course completion.</p>
        </div>
        <span className="badge success">On track</span>
      </div>

      {loading ? (
        <div className="loader">Loading progress…</div>
      ) : (
        <>
          <div className="grid-3">
            <ProgressCard title="Course Completion" value={completion} caption="Across enrolled courses" accent="#2563eb" />
            <ProgressCard title="Weekly Goal" value="82%" caption="Study streak is improving" accent="#16a34a" />
            <ProgressCard title="Mock Tests" value="63%" caption="Average score this month" accent="#7c3aed" />
          </div>

          <div className="card" style={{ marginTop: 24 }}>
            <div className="card-body">
              <h3>Recent activity</h3>
              <div className="list-grid" style={{ marginTop: 16 }}>
                {progress.length ? progress.slice(0, 4).map((entry) => (
                  <div key={entry._id} className="course-card">
                    <h3>{entry.course?.title || "Course"}</h3>
                    <p className="section-subtitle">Progress: {entry.progressPercentage || 0}%</p>
                  </div>
                )) : <div className="empty-state">No progress data yet.</div>}
              </div>
            </div>
          </div>
        </>
      )}
    </DashboardLayout>
  );
}

export default Progress;