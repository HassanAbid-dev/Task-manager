import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import authRouter from "./routes/userRoutes.js";
import cors from "cors";
import taskRouter from "./routes/taskRoutes.js";
dotenv.config();
import cookieParser from "cookie-parser";
const app = express();
connectDB();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173", // your Vite port
    credentials: true, // allows cookies to be sent
  }),
);
app.use(cookieParser()); //without this browser will not send cookies to the server, and we won't be able to access them in our routes
app.use("/api/auth/user", authRouter);
app.use("/api/tasks", taskRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
