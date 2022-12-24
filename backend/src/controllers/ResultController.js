const Result = require('../models/Results');

const create = async(req,res)=>{
    try{
        let newResult = new Result(req.body)
        try{
            newResult.save()
        }
        catch(err){
            return res.json({"success":false,"message":err.message})
        }
        return res.json({"success":true,"message":"new result inserted"})
    }
    catch(err){
        console.log("error in creating the result ::: ",err.message)
        return res.json({success:false,"message":"error while creating the result ::"})
    }
}
const get = async(req,res)=>{
    try{
        let allResults = await Result.find({}).populate('user')
        return res.json({success:true,"results":allResults})
    }
    catch(err){
        console.log("error in getting the questions :: ",err.message)
       return res.json({"success":false,"message":err.message})
    }
}

const update = async(req,res)=>{
    try{
        let {user_id} = req.params
        let doc = await Result.findOneAndUpdate({"user":user_id},req.body,{
            new:true,
            upsert:true,
            returnOriginal: false
        })
        return res.json({"success":true,resultObj :doc,"message":"successfully updated"})
    }

    catch(err){
        console.log("error in updating Results :: ",err)
        return res.json({"success":true,"message":`error in updating result :: ${err.message}`})
    }
}

module.exports = {
    create,
    get,
    update
}