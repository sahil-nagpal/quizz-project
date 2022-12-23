const express = require('express');
const questionRouter = express.Router();
const {create,get} = require('../controllers/QuestionController')
questionRouter.post("/",create),
questionRouter.get("/",get)
module.exports = questionRouter