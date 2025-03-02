const axios = require("axios");
const fs = require("fs");
const pdfParse = require("pdf-parse");

const MISTRAL_API_KEY = process.env.MISTRAL_API_KEY;
const MISTRAL_URL = "https://api.mistral.ai/v1/chat/completions";

exports.uploadPDF = async (req, res) => {
    try {
        console.log("Headers:", req.headers);
        console.log("Body:", req.body);
        console.log("File:", req.file);

        if (!req.file) {
            return res.status(400).json({ error: "No file uploaded." });
        }

        res.status(200).json({ message: "File uploaded successfully", file: req.file });
    } catch (error) {
        console.error("Error processing upload:", error.message);
        res.status(500).json({ error: "Error processing upload." });
    }
};



exports.generateQuiz = async (req, res) => {
    const { content } = req.body;
    if (!content) return res.status(400).json({ error: "Content is required." });

    try {
        const quiz = await generateQuizFromContent(content);
        res.json({ quiz });

    } catch (error) {
        console.error("Error generating quiz:", error);
        res.status(500).json({ error: "Failed to generate quiz." });
    }
};

const generateQuizFromContent = async (content) => {
    const prompt = `Generate a quiz with 5 multiple-choice questions in JSON format based on this content: ${content}`;
    
    const response = await axios.post(MISTRAL_URL, {
        model: "mistral-tiny",
        messages: [{ role: "user", content: prompt }],
    }, {
        headers: {
            "Authorization": `Bearer ${MISTRAL_API_KEY}`,
            "Content-Type": "application/json",
        },
    });

    return JSON.parse(response.data.choices[0].message.content.trim());
};
