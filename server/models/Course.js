const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      enum: [
        "Aptitude",
        "DSA",
        "Programming",
        "Core Subjects",
        "Logical Reasoning",
        "Verbal Ability",
        "Interview Preparation",
      ],
    },

    instructor: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    thumbnail: {
      type: String,
      default: "",
    },

    duration: {
      type: String,
      default: "",
    },

    difficulty: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced"],
      default: "Beginner",
    },

    price: {
      type: Number,
      default: 0,
    },

    rating: {
      type: Number,
      default: 5,
    },

    totalStudents: {
      type: Number,
      default: 0,
    },

    lessons: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Lesson",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Course", courseSchema);