import express from "express";
import { authenticateAdmin } from "../middlewares/authMiddleware";
import { adminDetails, adminJobs, deleteAdmin, updateAdmin } from "../controllers/adminController";

import { loginAdmin, registerAdmin } from "../controllers/authController";
const router = express.Router();

router.post("/register", registerAdmin);
router.post("/login", loginAdmin)
router.get("/details", authenticateAdmin, adminDetails)
router.get("/jobs", authenticateAdmin, adminJobs)
router.post("/update", authenticateAdmin, updateAdmin)
router.post("/delete", authenticateAdmin, deleteAdmin)

export default router;