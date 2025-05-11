import express from "express";
import { authenticateAdmin } from "../middlewares/authMiddleware";
import {
  adminDetails,
  adminJobs,
  awardUser,
  deleteAdmin,
  updateAdmin,
  updateStatus,
} from "../controllers/adminController";

import { loginAdmin, registerAdmin } from "../controllers/authController";
const router = express.Router();

router.post("/register", registerAdmin);
router.post("/login", loginAdmin);
router.get("/details", authenticateAdmin, adminDetails);
router.get("/jobs", authenticateAdmin, adminJobs);
router.patch("/update", authenticateAdmin, updateAdmin);
router.post("/delete", authenticateAdmin, deleteAdmin);
router.patch("/award", authenticateAdmin, awardUser);
router.patch("/updateStatus", authenticateAdmin, updateStatus);

export default router;
