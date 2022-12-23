const express = require('express');
const resultsRouter = express.Router();
const {create,get,update} = require("../controllers/ResultController")
resultsRouter.get("/",get)
resultsRouter.post("/",create)
resultsRouter.patch("/:user_id",update)
module.exports = resultsRouter