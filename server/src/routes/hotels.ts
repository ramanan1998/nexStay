import express from "express";
import { searchHotel } from "../controllers/hotel-controller";

const router =  express.Router();

router.get("/search", searchHotel);

export default router;