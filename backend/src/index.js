import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.routes.js";
import connectDB from "./lib/db.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5001;

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173",
  crendentials: true,
}));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);  // fixed route path and variable name

// Connect DB and start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((err) => {
  console.error("Failed to connect to DB:", err.message);
});
