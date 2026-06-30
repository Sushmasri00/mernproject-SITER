import { useEffect, useMemo, useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import CourseCard from "../components/CourseCard";
import api from "../services/api";
import { useAuth } from "../context/AuthContext";
import {
  getDemoCourses,
  getStoredEnrollments,
  saveStoredEnrollments,
  getStoredCourseProgress,
  saveStoredCourseProgress,
} from "../services/demoData";

function Courses() {
  const { user } = useAuth();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [enrollments, setEnrollments] = useState([]);
  const [progressMap, setProgressMap] = useState({});

  useEffect(() => {
    const loadCourses = async () => {
      try {
        const res = await api.get("/courses");
        const backendCourses = res.data.courses || [];
        const demoCourses = getDemoCourses();
        const combinedCourses = backendCourses.length ? backendCourses : demoCourses;
        setCourses(combinedCourses);
      } catch (error) {
        setCourses(getDemoCourses());
      } finally {
        setLoading(false);
      }
    };

    const storedEnrollments = getStoredEnrollments();
    const storedProgress = getStoredCourseProgress();
    setEnrollments(storedEnrollments);
    setProgressMap(storedProgress);
    loadCourses();
  }, []);

  const filteredCourses = useMemo(() =>
    courses.filter((course) => `${course.title} ${course.category}`.toLowerCase().includes(search.toLowerCase())),
    [courses, search]
  );

  const handleEnroll = async (courseId) => {
    const existing = enrollments.find((item) => item.courseId === courseId);
    if (existing) {
      alert("You are already enrolled in this course.");
      return;
    }

    const course = courses.find((item) => item._id === courseId);
    const nextEnrollment = {
      id: Date.now().toString(),
      studentId: user?._id || "demo-student",
      courseId,
      courseTitle: course?.title || "Course",
      status: "In Progress",
      progress: 15,
    };

    const nextEnrollments = [...enrollments, nextEnrollment];
    const nextProgress = { ...progressMap, [courseId]: 15 };
    setEnrollments(nextEnrollments);
    setProgressMap(nextProgress);
    saveStoredEnrollments(nextEnrollments);
    saveStoredCourseProgress(nextProgress);
    alert("Enrolled successfully. Your course is now available in learning.");
  };

  return (
    <DashboardLayout>
      <div className="section-header">
        <div>
          <h2 className="section-title">Courses</h2>
          <p className="section-subtitle">Browse our curated placement preparation library.</p>
        </div>
        <span className="badge">{courses.length} available</span>
      </div>

      <div className="card" style={{ marginBottom: 24 }}>
        <div className="card-body">
          <div className="field">
            <label>Search courses</label>
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search by title or category"
            />
          </div>
        </div>
      </div>

      {loading ? (
        <div className="loader">Loading courses…</div>
      ) : filteredCourses.length ? (
        <div className="grid-3">
          {filteredCourses.map((course) => {
            const courseId = course._id;
            const enrolled = enrollments.some((item) => item.courseId === courseId);
            const progress = progressMap[courseId] || 0;
            return (
              <CourseCard
                key={courseId}
                course={course}
                progress={progress}
                actionLabel={enrolled ? "Enrolled" : "Enroll"}
                onAction={() => handleEnroll(courseId)}
              />
            );
          })}
        </div>
      ) : (
        <div className="empty-state">No matching courses were found.</div>
      )}
    </DashboardLayout>
  );
}

export default Courses;