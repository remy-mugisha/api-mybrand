const Message=require('../models/Message');

exports.creatMessage=async(req,res)=>{
    const newMessage=new Message({
        fullName:req.body.fullName,
        email:req.body.email,
        subject:req.body.subject,
        message:req.body.message
     });
    try {
        const saveMessage=await newMessage.save();
        res.status(200).json(saveMessage);
    } catch (error) {
        res.status(500).json(error);
    }
}
exports.gettOne=async(req,res)=>{
    try {
        const message=await Message.findById(req.params.id);
        res.status(200).json(message);
    } catch (error) {
        res.status(500).json(error)
    }
}
exports.gettAll=async(req,res)=>{
    const username=req.query.user;
    try {
        let messages;
        if(username){
            messages=await Message.find({username});
        }
        else{
            messages=await Message.find();
        }
        console.log(messages);
        res.status(200).json(messages); 
    } 
    catch (error) {
        res.status(401).json(error);
    }
}
exports.delete=async(req,res)=>{
    try {
        const message = await Message.findById(req.params.id);
        if(!message) return res.status(404).json({status:"fail",message:"The message is not found"});
        await Message.findByIdAndDelete(req.params.id);
        res.status(200).json({status:"success",message:"Message deleted"});
    } catch (error) {
        res.status(401).json({status:"error", error:error.message});
    }
}