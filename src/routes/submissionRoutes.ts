import express from "express";
import { getUserSubmissions, submitProduct } from "../controllers/submissionController";
import { authenticateUser } from "../middlewares/authMiddleware";
const router = express.Router();

router.post("/submit", authenticateUser, submitProduct);
router.get("/submission", authenticateUser, getUserSubmissions)

export default router;