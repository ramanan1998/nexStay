import { NextFunction, Request, Response } from "express";
import { check, param, validationResult } from "express-validator";

export const validateRegisterBody = [
    check("firstname", "First name is required").isString(),
    check("lastname", "Last name is required").isString(),
    check("firstname", "First name is required").isLength({ min: 1 }),
    check("lastname", "Last name is required").isLength({ min: 1 }),
    check("email", "Email is required").isString(),
    check("email", "Email is not valid").isEmail(),
    check("password", "Password with 6 or more characters required").isLength({ min: 6 }),
    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.status(422).json({errors: errors.array()});
        }
        next();
    },
]

export const validateLoginBody = [
    check("email", "Email is required").isString(),
    check("email", "Email is not valid").isEmail(),
    check("password", "Password with 6 or more characters required").isLength({ min: 6 }),
    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.status(422).json({errors: errors.array()});
        }
        next();
    },
]

export const validateHotelId = [
    param("id")
        .isLength({ min: 24, max: 24})
        .withMessage("id must be a 24 character hex string"),
    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.status(422).json({errors: errors.array()});
        }
        next();
    }
]