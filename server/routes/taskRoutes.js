import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/taskController.js";
import express from "express";
import { authenticated } from "../middlewares/auth.js";
const router = express.Router();
router.get("/getTasks", authenticated, getTasks);
router.post("/createTask", authenticated, createTask);
router.put("/updateTask/:id", authenticated, updateTask);
router.delete("/deleteTask/:id", authenticated, deleteTask);
export default router;
