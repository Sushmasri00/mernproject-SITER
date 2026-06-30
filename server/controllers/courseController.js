const Course = require("../models/Course");

// Create Course
exports.createCourse = async (req, res) => {
  try {
    const course = await Course.create(req.body);

    res.status(201).json({
      success: true,
      message: "Course Created Successfully",
      course,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// Get All Courses
exports.getCourses = async (req, res) => {

  try {

    const courses = await Course.find();

    res.status(200).json({
      success: true,
      courses,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};