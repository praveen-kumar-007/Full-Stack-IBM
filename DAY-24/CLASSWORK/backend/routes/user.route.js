const express = require("express");
const { signUp } = require("../controllers/user.controller");

const userRouter = express.Router();

userRouter.post("/register", signUp);


module.exports={
    userRouter
}