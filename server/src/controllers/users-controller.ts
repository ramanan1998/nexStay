import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { userModel } from "../models/user";
import jwt from "jsonwebtoken";

export const register = async (req: Request, res: Response) => {

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

        return res.status(200).json({ message: "User Registered successfully" });

    }catch(error){
        console.log(error);
        res.status(500).send({ message: "internal server error" });
    }
}