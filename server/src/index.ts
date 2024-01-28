import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import { connectDB } from "../configs/dbconfig";
import userRoutes from "./routes/users";

connectDB();

const app = express();

// The express.json() function is a built-in middleware function in Express. 
// It parses incoming requests with JSON payloads and is based on body-parser. 
app.use(express.json());

// The express.urlencoded() function is a built-in middleware function in Express. 
// It parses incoming requests with URL-encoded payloads and is based on a body parser.
app.use(express.urlencoded({ extended: true }));

// cors is a third-party middleware
// it enables CORS (cross-origin resource sharing). In order for your server to be accessible by other origins (domains).
app.use(cors());


app.use("/api/users", userRoutes);

app.listen(5000, () => {
    console.log("server listening to port 5000")
})