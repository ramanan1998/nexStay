import mongoose from "mongoose";
import { HotelType } from "../types";

const hotelSchema = new mongoose.Schema<HotelType>({
    userId: {
        required: true,
        type: String
    },
    name: {
        required: true,
        type: String
    },
    city: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    type: {
        required: true,
        type: String
    },
    adultCount: {
        required: true,
        type: Number
    },
    childrenCount: {
        required: true,
        type: Number
    },
    infantCount: {
        required: true,
        type: Number
    },
    facilities: [
        {
            required: true,
            type: String
        }
    ],
    pricePerNight: {
        required: true,
        type: Number
    },
    rating: {
        required: true,
        type: Number,
        min: 1,
        max: 5
    },
    imageUrl: [
        {
            required: true,
            type: String
        }
    ],
    lastUpdated: {
        required: true,
        type: Date
    }
});

export const HotelModel = mongoose.model<HotelType>("Hotel", hotelSchema);
