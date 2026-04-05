import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import authRouter from "./routes/userRoutes.js";
import taskRouter from "./routes/taskRoutes.js";
dotenv.config();
import cookieParser from "cookie-parser";
const app = express();
connectDB();
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth/user", authRouter);
app.use("/api/tasks", taskRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
