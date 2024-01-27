// import express from "express"
// import cookieParser from "cookie-parser";
// import cors from "cors"
// import User from "./routes/userRoute.js"
// import UserRegister from "./routes/ragisterRoute.js";
const express = require("express")
const User = require("./routes/userRoute")

const app = express()
 

// Middleware
app.use(express.json());  

app.use("/",User) 

// exporting 
module.exports= app 