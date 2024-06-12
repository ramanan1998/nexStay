import { Request, Response } from "express";
import { HotelType } from "../types";
import { v2 as cloudinary } from "cloudinary";
import { HotelModel } from "../models/hotel";
import { uploadImage } from "../helpers/uploadImage";

export const createHotel = async (req: Request, res: Response) => {
    try{

        const imagesFiles = req.files as Express.Multer.File[];
        const hotelData: HotelType = req.body;

        // 1. upload the image to cloudinary

        const uploadedImageUrls = await uploadImage(imagesFiles);

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

        const [ hotel ] = await HotelModel.find({ userId: req.userId, _id: req.params.id.toString() });
        res.status(200).json(hotel);

    }catch(error){
        console.log(error);
        res.status(500).json({ message: "internal server error" });
    }
}

export const updateHotel = async (req: Request, res: Response) => {
    try{

        const hotelId = req.params.id;
        const hotelData = req.body as HotelType;
        const imagesFiles = req.files as Express.Multer.File[];
        hotelData.lastUpdated = new Date();

        const hotel = await HotelModel.findOne({
            _id: hotelId,
            userId: req.userId
        });

        if (!hotel) {
            return res.status(404).json({ message: "Hotel not found" });
        }
    
        const updatedImageUrls = await uploadImage(imagesFiles);
    
        hotelData.imageUrl = [
            ...updatedImageUrls,
            ...(hotelData.imageUrl || [])
        ];

        await HotelModel.findOneAndUpdate({ _id: hotelId, userId: req.userId }, hotelData, { new: true });

        return res.status(200).json({ message: "hotel updated successfully" });

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

export const searchHotel = async (req: Request, res: Response) => {
    try{

        const page = 5;
        const skip =(parseInt(req.query.page ? req.query.page.toString() : "1") - 1) * page;

        const hotel = await HotelModel.find().skip(skip).limit(page);

        console.log(hotel);

    }catch(error){
        console.log(error);
        res.status(500).json({ message: "internal server error" });
    }
}

