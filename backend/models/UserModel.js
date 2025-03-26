const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 100,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 100,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 4,
    maxLength: 100,
  },
  verifyOtp: { type: String, default: "" },
  verifyOtpExpireAt: { type: Number, default: 0 },
  isAccountVerified: { type: Boolean, default: false },
  resetOtp: { type: String, default: "" },
  resetOtpExpireAt: { type: Number, default: 0 },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  profilePicture: {
    type: String,
  },
  quiz: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "QuizModel",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);