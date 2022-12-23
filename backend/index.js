require('dotenv').config();
require('./mongooseConfig')
const express = require('express');
const app = express();
let cors = require("cors");
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors())
const PORT= process.env.PORT || 3600
const mainRouter = require('./src/routes')
app.use("/api",mainRouter)
app.listen(PORT,(req,res)=>{
    console.log("server running on port :: ",PORT)
})