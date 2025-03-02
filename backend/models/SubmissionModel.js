const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'UserModel', required: true },
  quiz: { type: mongoose.Schema.Types.ObjectId, ref: 'QuizModel', required: true },
  answers: [
    {
      question: { type: String, required: true },
      selectedOption: { type: String, required: true },
      correctAnswer: { type: String, required: true },
      isCorrect: { type: Boolean, required: true },
    }
  ],
  score: { type: Number, required: true },
  submittedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Submission', submissionSchema);
