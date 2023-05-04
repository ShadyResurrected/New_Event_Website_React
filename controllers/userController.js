import { User } from "../models/userModel.js";
import { sendCookie } from "../utils/feature.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Registering a user
export const register = async (req, res) => {
  try {
    // accepting the values from the request
    const { name, email, password, username, profilePic, providerId } =
      req.body;

    // finding the user in db
    let user = await User.findOne({ email });

    // if the user already exists
    if (user)
      return res.json({
        success: false,
        message:
          user.providerId === "firebase"
            ? "Email already registered with google"
            : "User already exists",
      });

    // hashing the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // creating user entry in db
    user = await User.create({
      name,
      email,
      password: hashedPassword,
      username,
      profilePic,
      providerId,
    });
    // After registering the user should not fill again the credentials to login, so a cookie is sent
    sendCookie(user, res, "Registered Successfully", 201);
  } catch (error) {
    return res.json({ message: error.message });
  }
};

// User Login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // as we have declared select as false in the model we have to also include password field to recieve it, other than email
    const user = await User.findOne({ email }).select("+password");


    if (!user)
      return res.json({ success: false, message: "Invalid Email or Password" });

    const isMatch = await bcrypt.compare(password, user.password);

    // if the passwords does not match
    if (!isMatch)
      return res.json({ success: false, message: "Invalid Email or Password" });

    sendCookie(user, res, `Welcome Back, ${user.username}`, 200);
  } catch (error) {
    return res.json({ message: error.message });
  }
};

// User Logout
export const logout = (req, res) => {
  try {
    res
      .status(200)
      .cookie(
        "jwt_token",
        "",
        { expires: new Date(Date.now()) },
        {
          sameSite: process.env.DEVELOPMENT ? "" : process.env.COOKIE_SAMESITE,
          secure: process.env.DEVELOPMENT ? "" : process.env.COOKIE_SECURE,
        }
      )
      .json({
        success: true,
      });
  } catch (error) {
    return res.json({ message: error });
  }
};

// Profile
export const profile = async (req, res) => {
  try {
    let id;
    const { jwt_token } = req.cookies;
    jwt.verify(jwt_token, process.env.JWT_SECRET, {}, (err, info) => {
      if (err) throw err;
      id = info._id;
    });

    const result = await User.findById(id);
    res.status(200).json(result);
  } catch (error) {
    return res.json({ message: error.message });
  }
};
