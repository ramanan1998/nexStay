import express from "express";
import { verifyToken } from "../middleware/auth";
import { login, logout, verifyTokenController } from "../controllers/auth-controller";
import { validateLoginBody } from "../middleware/validation";


const router = express.Router();

router.post("/login", validateLoginBody, login);

router.get("/validate-token", verifyToken, verifyTokenController)

router.get("/logout", logout)

export default router;