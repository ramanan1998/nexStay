import { v2 as cloudinary } from "cloudinary";

export const connectCloudinary = () => {
    try{
        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET
        });

        console.log("connected to cloudinary");
    }catch(error){
        console.log(error)
    }
}