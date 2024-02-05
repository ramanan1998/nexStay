import express, { Request, Response } from "express";
import { check, validationResult } from "express-validator";
import { userModel } from "../models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { verifyToken } from "../middleware/auth";


const router = express.Router();

const validateLoginBody = [
    check("email", "Email is required").isString(),
    check("email", "Email is not valid").isEmail(),
    check("password", "Password with 6 or more characters required").isLength({ min: 6 }),
]

router.post("/login", validateLoginBody, async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({ message: errors.array() });
    }

    try{

        const { email, password } = req.body;

        const isUserExist = await userModel.findOne({ email });

        if(!isUserExist){
            return res.status(400).json({ message: "Invalid user credentials" });
        }

        const isPasswordValid = await bcrypt.compare(password, isUserExist.password);

        if(!isPasswordValid){
            return res.status(400).json({ message: "Invalid user credentials" });
        }

        const token = jwt.sign({ userId: isUserExist.id }, process.env.JWT_SECRET_KEY as string, { expiresIn: "1d" });

        res.cookie("authToken", token, { 
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 86400000 
        });

        res.status(200).json({ userId: isUserExist.id })

    }catch(error){
        console.log(error);
        res.status(500).json({ message: "internal server error" })
    }
});

router.get("/validate-token", verifyToken, (req: Request, res: Response) => {
    res.status(200).send({ userId: req.userId })
})

export default router;