import express from "express";
const router = express.Router();
import { authenticated } from "../middlewares/auth.js";
import {
  registerUser,
  loginUser,
  getTasks,
  logoutUser,
} from "../controllers/userController.js";

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/tasks", authenticated, getTasks);
router.get("/logout", authenticated, logoutUser);
export default router;
