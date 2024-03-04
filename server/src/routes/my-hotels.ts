import express, { Request, Response } from "express";
import multer from "multer";
import { verifyToken } from "../middleware/auth";
import { createHotel } from "../controllers/hotel-controller";

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024 // 5mb
    }
})

router.post(
    "/", 
    verifyToken,
    upload.array("imageFiles", 6), 
    createHotel
)

export default router;