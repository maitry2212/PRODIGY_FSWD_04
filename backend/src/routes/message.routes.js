import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {
  getUsersForSidebar,
  getMessages,
  sendMessages, // You called it `sendMessage` in the route but defined as `sendMessages`
} from "../controllers/message.controller.js"; // Adjust this path if your controller file is named differently

const router = express.Router();

router.get("/user", protectRoute, getUsersForSidebar);
router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessages); // Match function name

export default router;
