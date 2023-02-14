const router=require('express').Router();
const User=require('../models/User');
const bcrypt=require('bcrypt');
const jwt=require('../helpers/jwt');
router.post('/register',async(req,res)=>{
    try {
        const user = new User(req.body);
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password,salt)
        await user.save();
        res.status(200).json({status:"success",data:user});
      } catch (error) {
        res.status(400).json({status:"fail", error: error.message });
      }
})
router.post('/login',async(req,res)=>{
    try {
        const user = await User.findOne({email:req.body.email});
        if(!user) return res.status(401).json({status:"fail",error:"Invalid credentials" });
        const match = await bcrypt.compare(req.body.password,user.password);
        if(!match){
          res.status(401).json({status:"fail",error:"Invalid password" })
          return;
        }
        const accessToken = jwt.sign({id:user._id,role:user.role})
        res.status(200).json({status:"success",data:user,token:accessToken});

      } catch (error) {
        res.status(401).json({status:"fail", error: error.message });
      }
    })
module.exports=router;