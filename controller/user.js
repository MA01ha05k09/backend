// import User from "../../model/User/user.js";
const { json } = require("express")
const User  = require("../model/user")


// create user
const createUser = async(req,res)=>{
    const user = await User.create(req.body)
    res.json({message:"user create succesfully",user})
}
//login user
const loginUser =async(req,res)=>{
  const email =req.body.email
  const password =req.body.password
res, json({message:"user login succesfully",email,password})
  
}

module.exports =  {createUser,loginUser}
