import User from "../models/User.js";
import jwt from "jsonwebtoken";

export const authenticated = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "User not authenticated." });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select("-password");
    next();
  } catch (error) {
    console.error("Token verification failed:", error);

    res.status(401).json({ message: "Token is not valid" });
  }
};
