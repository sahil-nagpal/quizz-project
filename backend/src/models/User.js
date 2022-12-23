const mongoose = require('mongoose');
const {Schema} = mongoose;
const random = require('meteor-random');
const userSchema = new Schema({
    "_id":{
        type:String,
        default:`user_${random.id(10)}`
    },
    "name":{
        type:String,
        required:[true,'name is required']
    },
}, { timestamps: true })

const User = mongoose.model('User',userSchema)
module.exports = User