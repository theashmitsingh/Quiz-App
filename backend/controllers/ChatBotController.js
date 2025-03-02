const axios = require("axios");

const MISTRAL_API_KEY = process.env.MISTRAL_API_KEY;
const MISTRAL_URL = "https://api.mistral.ai/v1/chat/completions";

exports.getResponse = async (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ error: "Message cannot be empty!" });
    }

    try {
        const response = await axios.post(MISTRAL_URL, {
            model: "mistral-tiny",
            messages: [{ role: "user", content: `Answer this: ${message}` }],
        }, {
            headers: {
                "Authorization": `Bearer ${MISTRAL_API_KEY}`,
                "Content-Type": "application/json",
            },
        });

        res.json({ reply: response.data.choices[0].message.content.trim() });

    } catch (error) {
        console.error("Chatbot error:", error);
        res.status(500).json({ error: "Failed to get response from AI" });
    }
};
