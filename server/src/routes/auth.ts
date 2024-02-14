import express, { Request, Response } from "express";
import { check, validationResult } from "express-validator";
import { userModel } from "../models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { verifyToken } from "../middleware/auth";
import { login, logout, verifyTokenController } from "../controllers/auth-controller";


const router = express.Router();

const validateLoginBody = [
    check("email", "Email is required").isString(),
    check("email", "Email is not valid").isEmail(),
    check("password", "Password with 6 or more characters required").isLength({ min: 6 }),
]

router.post("/login", validateLoginBody, login);

router.get("/validate-token", verifyToken, verifyTokenController)

router.get("/logout", logout)

export default router;