import express from "express";
const router = express.Router();
import { authenticated } from "../middlewares/auth.js";
import {
  registerUser,
  loginUser,
  logoutUser,
} from "../controllers/userController.js";

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", authenticated, logoutUser);
export default router;
