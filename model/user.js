// import mongoose from "mongoose";
const mongoose = require("mongoose")

// Define user schema
const registerSchema = new mongoose.Schema({
    FirstName:{
        type:String
    },
    LastName:{
        type:String
    },
    MobileNO:{
        type:Number
    },  
    Emali:{
        type:String
    },
    Paasword:{
        type:String,Number
    } 
});


// export user model
const User = mongoose.model("user",registerSchema)
module.exports =  User
