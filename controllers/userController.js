const User=require('../models/User');
const bcrypt=require('bcrypt');

exports.updatUser=async(req,res)=>{
        if(req.body.password){
            const salt=await bcrypt.genSalt(10);
            req.body.password=await bcrypt.hash(req.body.password,salt);
        }
        try {
            const updatedUser=await User.findByIdAndUpdate(req.params.id,{
                $set:req.body,
            },{new:true});
            res.status(200).json(updatedUser);
        } catch (error) {
            res.status(500).json(error)
        }
}
exports.deletUser=async(req,res)=>{
    try {
        const user = await User.findById(req.params.id);
        if(!user){
          return res.status(404).json({status:"fail",message:"The user not found"});
        }
        await User.findByIdAndDelete(req.params.id);
        return res.status(200).json({status:"success",data:null,message:'User deleted!'});
      } catch (error) {
        return res.status(500).json({status:"error", error: error.message });
      }
    }
exports.gettUser=async(req,res)=>{
    try {
        const user=await User.findById(req.params.id);
        const {password,...others}=user._doc;
        return res.status(200).json(others);
    } catch (error) {
        return  res.status(401).json(error)
    }
}
exports.gettAll=async(req,res)=>{
    const username=req.query.user;
    try {
        let users;
        if(username){
            users=await User.find({username});
        }
        else{
            users=await User.find();
        }
        return  res.status(200).json(users); 
    } 
    catch (error) {
        return  res.status(401).json(error);
    }
}