const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

exports.connect = async () => {
    await mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("MongoDB is connected successfully!");
    }).catch ((err) => {
        console.log("Error connecting to MongoDB: ", err);
    });
}
