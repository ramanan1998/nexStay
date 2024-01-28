import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { userModel } from "../models/user";
import { check, validationResult } from "express-validator";

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

router.post("/register", validateRegisterBody, async (req: Request, res: Response) => {

    const bodyValidatedArray = validationResult(req);

    if(!bodyValidatedArray.isEmpty()){
        return res.status(400).json({ message: bodyValidatedArray.array() })
    }
    try{

        const { email } = req.body;

        const isEmailExists = await userModel.findOne({ email });

        console.log(isEmailExists)

        if(isEmailExists){
            return res.status(400).json({ message: "email already exists" });
        }

        const createUser = await userModel.create(req.body);

        const token = jwt.sign({ userId: createUser.id }, process.env.JWT_SECRET_KEY as string, { expiresIn: "1d" });

        res.cookie("authToken", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 86400000
        });

        return res.sendStatus(200);

    }catch(error){
        console.log(error);
        res.status(500).send({ message: "internal server error" });
    }
})

export default router;