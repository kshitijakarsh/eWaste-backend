import express from "express";
import { submitProduct } from "../controllers/submissionController";
import { authenticateUser } from "../middlewares/authMiddleware";
const router = express.Router();

router.post("/submit", authenticateUser, submitProduct);

export default router;