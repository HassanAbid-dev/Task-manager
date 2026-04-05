import express from "express";
const router = express.Router();
import { authenticated } from "../middlewares/auth.js";
import {
  registerUser,
  loginUser,
  logoutUser,
  getMe,
} from "../controllers/userController.js";

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", authenticated, logoutUser);
router.get("/me", authenticated, getMe);

export default router;
