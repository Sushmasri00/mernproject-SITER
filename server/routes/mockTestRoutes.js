const express = require("express");
const router = express.Router();

const {
  createMockTest,
  getMockTests,
} = require("../controllers/mockTestController");

router.post("/", createMockTest);

router.get("/", getMockTests);

module.exports = router;