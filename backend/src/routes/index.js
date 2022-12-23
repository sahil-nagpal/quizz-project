const express = require('express');
const questionRouter = require('./questionBankRouter');
const resultsRouter = require('./resultRouter');
const mainRouter = express.Router()
const userRouter = require('./userRouter')
mainRouter.use("/user",userRouter)
mainRouter.use("/questions",questionRouter)
mainRouter.use("/results",resultsRouter)

module.exports = mainRouter