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

export const getAllHotels = async (req: Request, res: Response) => {
    try{

        const hotels = await HotelModel.find({ userId: req.userId });
        
        res.status(200).json(hotels);

    }catch(error){
        console.log(error);
        res.status(500).json({ message: "internal server error" });
    }
}

export const getHotelById = async (req: Request, res: Response) => {
    try{

        const [ hotel ] = await HotelModel.find({ userId: req.userId, _id: req.params.id });
        res.status(200).json(hotel);

    }catch(error){
        console.log(error);
        res.status(500).json({ message: "internal server error" });
    }
}

export const deleteHotelById = async (req: Request, res: Response) => {
    try{

        const hotel = await HotelModel.find({ userId: req.userId, _id: req.params.id });

        if(!!hotel.length){
            await HotelModel.deleteOne({ userId: req.userId, _id: req.params.id });
            res.status(200).json({ message: "Hotel deleted successfully" });
        }else{
            res.status(400).json({ message: "Hotel name doesn't exist" });
        }

    }catch(error){
        console.log(error);
        res.status(500).json({ message: "internal server error" });
    }
}

