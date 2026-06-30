const express = require("express");

const router = express.Router();

const {
  enrollCourse,
  getEnrollments,
} = require("../controllers/enrollmentController");

router.post("/", enrollCourse);

router.get("/", getEnrollments);

module.exports = router;