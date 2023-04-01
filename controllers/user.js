import { User } from "../models/user.js";
import { sendCookie } from "../utils/feature.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  try {
    // accepting the values from the request
    const { name, email, password, username } = req.body;

    // finding the user in db
    let user = await User.findOne({ email });

    // if the user already exists
    if (user)
      return res.json({
        success: false,
        message: "User already exists",
      });

    // hashing the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // creating user entry in db
    user = await User.create({
      name,
      email,
      password: hashedPassword,
      username,
    });
    // sending cookie
    sendCookie(user, res, "Registered Successfully", 201);
  } catch (error) {
    return res.json({ message: error });
  }
};

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
    return res.json({ message: error });
  }
};

export const logout = (req, res) => {
  try {
    res
      .status(200)
      .cookie("jwt_token", "", { expires: new Date(Date.now()) })
      .json({
        success: true,
      });
  } catch (error) {
    return res.json({ message: error });
  }
};