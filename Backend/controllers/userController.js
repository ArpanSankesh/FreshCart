import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import cookie from "cookie-parser";

// Register User : /api/user/register
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.json({ success: false, message: "Missing Details" });
    }
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.json({ success: false, message: "User Already Exist" });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const user = User.create({ name, email, password: hashPassword });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("token", token, {
      httpOnly: true, //Prevents JavaScript to accecc cookie
      secure: process.env.NODE_ENV === "production", //use secure cookies in production
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict", // CSRF Protection
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.json({ success: ture, user: {email: user.email, name: user.name}});

  } catch (error) {
console.log(error.message);
res.json({success: false, message: error.message})

  }
};
