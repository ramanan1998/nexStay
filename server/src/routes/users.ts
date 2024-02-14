import express from "express";
import { check } from "express-validator";
import { register } from "../controllers/users-controller";

const router = express.Router();

const validateRegisterBody = [
    check("firstname", "First name is required").isString(),
    check("lastname", "Last name is required").isString(),
    check("firstname", "First name is required").isLength({ min: 1 }),
    check("lastname", "Last name is required").isLength({ min: 1 }),
    check("email", "Email is required").isString(),
    check("email", "Email is not valid").isEmail(),
    check("password", "Password with 6 or more characters required").isLength({ min: 6 }),
]

router.post("/register", validateRegisterBody, register)

export default router;