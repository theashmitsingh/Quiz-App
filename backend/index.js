require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const database = require("./config/database");
const userController = require("./controllers/AuthController");
database.connect();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const quizRoutes = require("./routes/quizRoutes");
const chatbotRoutes = require("./routes/chatbotRoutes");
const UserRoutes = require('./routes/userRoutes');

app.use("/api/v1", UserRoutes);
app.use("/api/quiz", quizRoutes);
app.use("/api/chatbot", chatbotRoutes);

app.get("/", (req, res) => {
    console.log("Everything is working fine!");
    res.send("Welcome to the EduQuizAI");
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
