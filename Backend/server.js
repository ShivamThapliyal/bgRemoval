import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./config/mongodb.js";

//app config
const PORT = process.env.PORT || 4000;
const app = express();

//database connection
await connectDB();

//Intialize Middleware
app.use(express.json());
app.use(cors());

//API routes
app.get("/", (req, res) => res.send("api working"));

app.listen(PORT, () => console.log("serverworking" + PORT));
