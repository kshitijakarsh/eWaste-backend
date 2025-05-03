import express from "express";

import { loginUser, register } from "../controllers/authController";
import { authenticateUser } from "../middlewares/authMiddleware";
import { userDetails } from "../controllers/userController";

const router = express.Router();

router.post("/register", register);
router.post("/login", loginUser);
router.get("/details", authenticateUser, userDetails)

export default router;