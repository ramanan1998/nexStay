import express from "express";
import cors from "cors";
import "dotenv/config";
import { connectDB } from "./configs/dbconfig";
import userRoutes from "./routes/users";
import authRoutes from "./routes/auth";
import myHotelsRoutes from "./routes/my-hotels";
import cookieParser from "cookie-parser";
import path from "path";
import { connectCloudinary } from "./configs/cloudinary-config";

connectDB();

connectCloudinary();

const app = express();

// The express.json() function is a built-in middleware function in Express. 
// It parses incoming requests with JSON payloads and is based on body-parser. 
app.use(express.json());

// cookie parser middleware to parse cookies
app.use(cookieParser());

// The express.urlencoded() function is a built-in middleware function in Express. 
// It parses incoming requests with URL-encoded payloads and is based on a body parser.
app.use(express.urlencoded({ extended: true }));

// cors is a third-party middleware
// it enables CORS (cross-origin resource sharing). In order for your server to be accessible by other origins (domains).
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));


app.use(express.static(path.join(__dirname, "../../client/dist")))

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/my-hotels", myHotelsRoutes);

app.listen(5000, () => {
    console.log("server listening to port 5000")
})