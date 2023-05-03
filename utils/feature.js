import jwt from "jsonwebtoken";

export const sendCookie = (user, res, message, statusCode = 200) => {
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

  res
    .status(statusCode)
    .cookie("jwt_token", token, {
      sameSite: process.env.DEVELOPMENT ? "" : process.env.COOKIE_SAMESITE,
      secure: process.env.DEVELOPMENT ? "" : process.env.COOKIE_SECURE,
    })
    .json({ success: true, message });
};
