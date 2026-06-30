const MockTest = require("../models/MockTest");

// Create Mock Test
exports.createMockTest = async (req, res) => {
  try {
    const mockTest = await MockTest.create(req.body);

    res.status(201).json({
      success: true,
      message: "Mock Test Created Successfully",
      mockTest,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Mock Tests
exports.getMockTests = async (req, res) => {
  try {
    const mockTests = await MockTest.find();

    res.status(200).json({
      success: true,
      mockTests,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};