const Progress = require("../models/Progress");

// Create Progress
exports.createProgress = async (req, res) => {
  try {
    const progress = await Progress.create(req.body);

    res.status(201).json({
      success: true,
      message: "Progress Created Successfully",
      progress,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Progress
exports.getProgress = async (req, res) => {
  try {
    const progress = await Progress.find()
      .populate("student")
      .populate("course")
      .populate("completedLessons");

    res.status(200).json({
      success: true,
      progress,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};