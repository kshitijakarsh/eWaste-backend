import express from "express";
import { getUserSubmissions, submitProduct } from "../controllers/submissionController";
import { authenticateUser } from "../middlewares/authMiddleware";
import { uploadImages } from "../middlewares/upload";
const router = express.Router();

router.post("/submit", authenticateUser, uploadImages, submitProduct);
router.get("/submission", authenticateUser, getUserSubmissions)

export default router;