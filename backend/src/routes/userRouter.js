const express = require('express');
const userRouter = express.Router();
const {create,checklogin} = require("../controllers/UserController");
userRouter.post("/user-login",checklogin)
userRouter.post("/",create)
module.exports = userRouter