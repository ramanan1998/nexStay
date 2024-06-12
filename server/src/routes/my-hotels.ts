import express from "express";
import multer from "multer";
import { verifyToken } from "../middleware/auth";
import { createHotel, deleteHotelById, getAllHotels, getHotelById, updateHotel } from "../controllers/hotel-controller";
import { validateHotelId } from "../middleware/validation";

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

router.get(
    "/", 
    verifyToken, 
    getAllHotels
);

router.get(
    "/:id",
    verifyToken,
    validateHotelId,
    getHotelById
)

router.put(
    "/:id",
    verifyToken,
    upload.array("imageFiles", 6),
    updateHotel
)

router.delete(
    "/:id",
    verifyToken,
    validateHotelId,
    deleteHotelById
)

export default router;