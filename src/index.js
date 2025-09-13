import express from "express"
import dotenv from "dotenv"
import connectDB from "./db/index.js";
dotenv.config({
    path: './env'
});
const app = express();
//connection to DB
connectDB();
app.listen("8000",()=>{
    console.log("server is listening");
})
