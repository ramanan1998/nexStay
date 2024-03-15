import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { userModel } from "../models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({ message: errors.array() });
    }

    try{

        const { email, password } = req.body;

        const isUserExist = await userModel.findOne({ email });

        if(!isUserExist){
            return res.status(400).json({ message: "Email does not exist" });
        }

        const isPasswordValid = await bcrypt.compare(password, isUserExist.password);

        if(!isPasswordValid){
            return res.status(400).json({ message: "Wrong password" });
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
}

export const verifyTokenController = (req: Request, res: Response) => {
    res.status(200).json({ userId: req.userId, success: true, role: "user" })
}

export const logout = (req: Request, res: Response) => {
    res.cookie("authToken", "", {
        expires: new Date(0)
    })

    res.status(200).send({ message: "Signout successful" })
}