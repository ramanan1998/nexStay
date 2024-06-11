import { v2 as cloudinary } from "cloudinary";

export const uploadImage = async (imagesFiles: Express.Multer.File[]) => {
    const uploadedImages = imagesFiles.map(async (image) => {
        const b64 = Buffer.from(image.buffer).toString("base64");           // convert the image to base64 image
        const imageURI = "data:" + image.mimetype + ";base64," + b64;
        const res = await cloudinary.uploader.upload(imageURI);
        return res.url;
    });

    return await Promise.all(uploadedImages);
}