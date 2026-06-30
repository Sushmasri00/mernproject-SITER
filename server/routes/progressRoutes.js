const express = require("express");
const router = express.Router();

const {
  createProgress,
  getProgress,
} = require("../controllers/progressController");

router.post("/", createProgress);
router.get("/", getProgress);

module.exports = router;