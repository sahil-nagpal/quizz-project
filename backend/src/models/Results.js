const mongoose = require('mongoose');
const {Schema} = mongoose;
const random = require('meteor-random');
const resultSchema = new Schema({
    "_id":{
        type:String,
        default:`res_${random.id(10)}`
    },
    "user":{
        type:String,
        ref:'User'
    },
    "marks":{
        type:Number
    }

}, { timestamps: true })

const Results = mongoose.model('Results',resultSchema)
module.exports = Results