const Lesson = require("../models/Lesson");

// Create Lesson
exports.createLesson = async (req, res) => {
  try {
    const lesson = await Lesson.create(req.body);

    res.status(201).json({
      success: true,
      message: "Lesson Created Successfully",
      lesson,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Lessons by Course
exports.getLessons = async (req, res) => {
  try {
    const lessons = await Lesson.find({
      course: req.params.courseId,
    });

    res.status(200).json({
      success: true,
      lessons,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};