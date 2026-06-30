const Enrollment = require("../models/Enrollment");

// Enroll Student
exports.enrollCourse = async (req, res) => {
  try {
    const enrollment = await Enrollment.create(req.body);

    res.status(201).json({
      success: true,
      message: "Course Enrolled Successfully",
      enrollment,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// Get Student Enrollments
exports.getEnrollments = async (req, res) => {
  try {
    const enrollments = await Enrollment.find()
      .populate("student")
      .populate("course");

    res.status(200).json({
      success: true,
      enrollments,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};