const express = require("express");
const multer = require('multer');
const router = express.Router();

const quizController = require("../controllers/QuizController");
const { uploadPDF } = require('../controllers/QuizController');

const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('pdfFile'), uploadPDF);
router.post("/generate-quiz", quizController.generateQuiz);

module.exports = router;
