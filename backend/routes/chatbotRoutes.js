const express = require("express");
const router = express.Router();
const chatbotController = require("../controllers/ChatBotController");

router.post("/", chatbotController.getResponse);

module.exports = router;
