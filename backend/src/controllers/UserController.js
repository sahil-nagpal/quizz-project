const User = require('../models/User');

const create = async(req,res)=>{
    try{
        let {name} = req.body
        let newUser = new User({"name":(name.toLowerCase())})
        try{
           await newUser.save()
        }
        catch(err){
            return res.json({"success":false,"message":err.message})
        }
        return res.json({"success":true,"message":"new user created"})
    }
    catch(err){
        console.log("error in creating the user ::: ",err.message)
        return res.json({success:false,"message":"error while creating the user ::"})
    }
}

const checklogin = async(req,res)=>{
    try{
        let {name} = req.body
        console.log("name :: ",name)
        let userObj  = await User.findOne({"name":name})
        if(userObj){
            return res.json({success:true,userId:userObj._id,"message":"user found"})
        }
        else{
            return res.json({success:false,"userId":null,"message":"user not found"})
        }
    }
    catch(err){
        console.log("error in checkLogin function :: ",err)
        return res.json({success:false,"message":"some error"})
    }
}

module.exports = {
    create,
    checklogin
}