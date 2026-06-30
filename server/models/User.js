const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    role: {
      type: String,
      enum: ["student", "trainer", "admin"],
      default: "student",
    },

    college: String,
    branch: String,
    year: Number,
    phone: String,
    profileImage: String,

    placementScore: {
      type: Number,
      default: 0,
    },

    xpPoints: {
      type: Number,
      default: 0,
    },

    streak: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);