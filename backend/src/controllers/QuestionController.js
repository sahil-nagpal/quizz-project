const Question = require('../models/Questions');

const create = (req,res)=>{
    try{
        let {question,answers,correctAnswer,timeForAnswerInSeconds} = req.body
        let newQuestion = new Question(req.body);
        newQuestion.save()
        res.json({"success":true,"message":"new question created"})
    }
    catch(err){
        console.log("error in creating the question ::: ",err.message)
        res.json({success:false,"message":"error while creating the question ::"})
    }
}

const get = async(req,res)=>{
    try{
        let allQuestions = await Question.find({}).sort({"questionNumber":1})
        return res.json({success:true,"questions":allQuestions})
    }
    catch(err){
        console.log("error in getting the questions :: ",err.message)
       return res.json({"success":false,"message":err.message})
    }
}
module.exports = {
    create,
    get
}