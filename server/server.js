const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");

// Load Environment Variables
dotenv.config();

// Initialize Express App
const app = express();

// ====================================
// Import Routes
// ====================================
const authRoutes = require("./routes/authRoutes");
const courseRoutes = require("./routes/courseRoutes");
const lessonRoutes = require("./routes/lessonRoutes");
const enrollmentRoutes = require("./routes/enrollmentRoutes");
const progressRoutes = require("./routes/progressRoutes");
const mockTestRoutes = require("./routes/mockTestRoutes");

// ====================================
// Middleware
// ====================================
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// ====================================
// Home Route
// ====================================
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 Welcome to PlacementPro Backend API",
    version: "1.0.0",
  });
});

// ====================================
// API Routes
// ====================================

// Authentication
app.use("/api/auth", authRoutes);

// Courses
app.use("/api/courses", courseRoutes);

// Lessons
app.use("/api/lessons", lessonRoutes);

// Enrollments
app.use("/api/enrollments", enrollmentRoutes);

// Progress Tracking
app.use("/api/progress", progressRoutes);

// Mock Tests
app.use("/api/mock-tests", mockTestRoutes);

// ====================================
// 404 Handler
// ====================================
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

// ====================================
// Global Error Handler
// ====================================
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json({
    success: false,
    message: "Internal Server Error",
    error: err.message,
  });
});

// ====================================
// MongoDB Connection
// ====================================
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected Successfully");

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`🚀 Server Running on Port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ MongoDB Connection Failed");
    console.error(error.message);
  });