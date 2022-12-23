const mongoose = require('mongoose');
const {Schema} = mongoose;
const random = require('meteor-random');
const questionBankSchema = new Schema({
    "_id":{
        type:String,
        default:`ques_${random.id(10)}`
    },
    "question":String,
    "answers":[String],
    "correctAnswer":Number,
    "timeForAnswerInSeconds":Number,
    "questionNumber":Number,
    "points":Number,

}, { timestamps: true })

const Questions = mongoose.model('Questions',questionBankSchema)
module.exports = Questions