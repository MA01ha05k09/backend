// import {app} from "./app.js"
// import dotenv from "dotenv"
// import {connectDb} from "./config/database.js"
const app = require("./app")
const dotenv = require("dotenv")
const connectDb = require("./config/database")

// Load environment variables
dotenv.config();

// load database 
connectDb()

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });