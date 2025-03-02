const User = require("../models/UserModel");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(403).json({
                success: false,
                error: true,
                message: "Please provide all the details"
            });
        }

        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(403).json({
                success: false,
                error: true,
                message: "User already exists!"
            });
        }

        const hashPassword = await argon2.hash(password);

        const newUser = await User.create({ username, email, password: hashPassword });

        return res.status(200).json({
            success: true,
            error: false,
            message: "User signup successfully"
        });

    } catch (err) {
        console.log("Error occurred at signup: ", err);
        return res.status(500).json({
            success: false,
            error: true,
            message: "Internal Server Error",
        });
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(403).json({
                success: false,
                error: true,
                message: "Please provide all the details"
            });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(403).json({
                success: false,
                error: true,
                message: "Email or password is incorrect"
            });
        }

        const isMatch = await argon2.verify(user.password, password);

        if (!isMatch) {
            return res.status(403).json({
                success: false,
                error: true,
                message: "Email or password is wrong!"
            });
        }

        const payload = {
            id: user._id,
            email: user.email,
        }

        const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '15d' });

        res.cookie(token);

        return res.status(200).json({
            success: true,
            error: false,
            message: "User logged in successfully",
            token: token,
            data: user
        });

    } catch (err) {
        console.log("Something went wrong at login: ", err);
        return res.status(500).json({
            success: false,
            error: true,
            message: "Internal Server Error",
        });
    }
}