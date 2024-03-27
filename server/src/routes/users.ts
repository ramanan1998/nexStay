import express from "express";
import { register } from "../controllers/users-controller";
import { validateRegisterBody } from "../middleware/validation";

const router = express.Router();

router.post("/register", validateRegisterBody, register)

export default router;