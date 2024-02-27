import express, { Request, Response } from "express";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024 // 5mb
    }
})

router.post("/", upload.array("imageFiles", 6), async (req: Request, res: Response) => {
    try{

        const imagesFiles = req.files as Express.Multer.File[];
        const hotelData = req.body;

        // 1. upload the image to cloudinary

        const uploadImage = imagesFiles.map(async (image) => {
            const b64 = Buffer.from(image.buffer).toString("base64");           // convert the image to base64 image
            const imageURI = "data:" + image.mimetype + ";base64," + b64;
            const res = await cloudinary.uploader.upload(imageURI);
            return res.url;
        });

        const uploadedImageUrls = await Promise.all(uploadImage);

        console.log(uploadedImageUrls)

        // 2. if upload was successful, add the url along the hotelData
        // 3. save the hotelData to the database
        // 4. return 201 status that a new hotel is created

    }catch(error){
        console.log(error);
        res.status(500).json({ message: error });
    }
})

export default router;