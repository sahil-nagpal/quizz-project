const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI).then((res)=>{
    console.log("mongo db connected successfully")
}).catch((err)=>{
    console.log(`error in connecting mongodb :: ${err.message}`)
})