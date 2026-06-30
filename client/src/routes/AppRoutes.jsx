import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Courses from "../pages/Courses";
import CourseDetails from "../pages/CourseDetails";
import Learning from "../pages/Learning";
import DSA from "../pages/DSA";
import Aptitude from "../pages/Aptitude";
import LogicalReasoning from "../pages/LogicalReasoning";
import Programming from "../pages/Programming";
import CoreSubjects from "../pages/CoreSubjects";
import MockTests from "../pages/MockTests";
import MockTestDetails from "../pages/MockTestDetails";
import Progress from "../pages/Progress";
import Certificates from "../pages/Certificates";
import Leaderboard from "../pages/Leaderboard";
import ResumeBuilder from "../pages/ResumeBuilder";
import CompanyPreparation from "../pages/CompanyPreparation";
import Notifications from "../pages/Notifications";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import NotFound from "../pages/NotFound";

function ProtectedRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" replace />;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path="/courses" element={<ProtectedRoute><Courses /></ProtectedRoute>} />
      <Route path="/courses/:courseId" element={<ProtectedRoute><CourseDetails /></ProtectedRoute>} />
      <Route path="/learning" element={<ProtectedRoute><Learning /></ProtectedRoute>} />
      <Route path="/learning/:courseId" element={<ProtectedRoute><Learning /></ProtectedRoute>} />
      <Route path="/dsa" element={<ProtectedRoute><DSA /></ProtectedRoute>} />
      <Route path="/aptitude" element={<ProtectedRoute><Aptitude /></ProtectedRoute>} />
      <Route path="/logical-reasoning" element={<ProtectedRoute><LogicalReasoning /></ProtectedRoute>} />
      <Route path="/programming" element={<ProtectedRoute><Programming /></ProtectedRoute>} />
      <Route path="/core-subjects" element={<ProtectedRoute><CoreSubjects /></ProtectedRoute>} />
      <Route path="/mock-tests" element={<ProtectedRoute><MockTests /></ProtectedRoute>} />
      <Route path="/mock-tests/:mockTestId" element={<ProtectedRoute><MockTestDetails /></ProtectedRoute>} />
      <Route path="/progress" element={<ProtectedRoute><Progress /></ProtectedRoute>} />
      <Route path="/certificates" element={<ProtectedRoute><Certificates /></ProtectedRoute>} />
      <Route path="/leaderboard" element={<ProtectedRoute><Leaderboard /></ProtectedRoute>} />
      <Route path="/resume" element={<ProtectedRoute><ResumeBuilder /></ProtectedRoute>} />
      <Route path="/company-preparation" element={<ProtectedRoute><CompanyPreparation /></ProtectedRoute>} />
      <Route path="/notifications" element={<ProtectedRoute><Notifications /></ProtectedRoute>} />
      <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
      <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;