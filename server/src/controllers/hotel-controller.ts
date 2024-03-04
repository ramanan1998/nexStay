import { Request, Response } from "express";
import { HotelType } from "../types";
import { v2 as cloudinary } from "cloudinary";
import { HotelModel } from "../models/hotel";

export const createHotel = async (req: Request, res: Response) => {
    try{

        const imagesFiles = req.files as Express.Multer.File[];
        const hotelData: HotelType = req.body;

        // 1. upload the image to cloudinary

        const uploadImage = imagesFiles.map(async (image) => {
            const b64 = Buffer.from(image.buffer).toString("base64");           // convert the image to base64 image
            const imageURI = "data:" + image.mimetype + ";base64," + b64;
            const res = await cloudinary.uploader.upload(imageURI);
            return res.url;
        });

        const uploadedImageUrls = await Promise.all(uploadImage);

        // 2. if upload was successful, add the url along the hotelData

        hotelData.imageUrl = uploadedImageUrls;
        hotelData.lastUpdated = new Date();
        hotelData.userId = req.userId;

        // 3. save the hotelData to the database

        const hotel = new HotelModel(hotelData);
        await hotel.save();

        // 4. return 201 status that a new hotel is created

        res.status(201).send(hotel);

    }catch(error){
        console.log(error);
        res.status(500).json({ message: error });
    }
}