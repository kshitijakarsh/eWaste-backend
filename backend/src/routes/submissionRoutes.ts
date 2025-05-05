import express from "express";
import { getUserSubmissions, submitProduct, updateSubmission } from "../controllers/submissionController";
import { authenticateAdmin, authenticateUser } from "../middlewares/authMiddleware";
import { uploadImages } from "../middlewares/upload";
const router = express.Router();

router.post("/submit", authenticateUser, uploadImages, submitProduct);
router.get("/submission", authenticateUser, getUserSubmissions);
router.patch("/update", updateSubmission)

export default router;