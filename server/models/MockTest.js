const mongoose = require("mongoose");

const mockTestSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      enum: [
        "Aptitude",
        "DSA",
        "Logical Reasoning",
        "Verbal Ability",
        "Programming",
        "Technical"
      ],
      required: true,
    },

    description: {
      type: String,
      default: "",
    },

    duration: {
      type: Number,
      required: true,
    },

    totalMarks: {
      type: Number,
      default: 100,
    },

    passingMarks: {
      type: Number,
      default: 35,
    },

    questions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question",
      },
    ],

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("MockTest", mockTestSchema);