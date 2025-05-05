import express from "express";

import { loginUser, register } from "../controllers/authController";
import { authenticateUser } from "../middlewares/authMiddleware";
import { deleteUser, updateUser, userDetails } from "../controllers/userController";

const router = express.Router();

router.post("/register", register);
router.post("/login", loginUser);
router.post("/delete", authenticateUser, deleteUser)
router.patch("/update", authenticateUser, updateUser)
router.get("/details", authenticateUser, userDetails)


export default router;