import express from "express";
import { authenticateAdmin } from "../middlewares/authMiddleware";
import { adminDetails, adminJobs } from "../controllers/adminController";

import { loginAdmin, registerAdmin } from "../controllers/authController";
const router = express.Router();

router.post("/register", registerAdmin);
router.post("/login", loginAdmin)
router.get("/details", authenticateAdmin, adminDetails)
router.get("/jobs", authenticateAdmin, adminJobs)

export default router;