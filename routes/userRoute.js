// import express from "express"
// import {  getAllUsers } from "../controller/User/usercontroller.js";

// const User = express.Router()
const express = require("express")
const router = express.Router()
const data = require("../controller/user")


// Get all users
// User.route("/all-users").get(getAllUsers);
router.route("/register").post(data.createUser)
router.route("/login").post(data.loginUser)
module.exports = router  