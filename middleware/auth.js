const verify=require('../helpers/jwt')

const verifyToken = (req,res,next) =>{
    try {
        const authHeader = req.headers['authorization']|| req.headers.token;
        if(!authHeader){
         res.status(401).json({status:"error",error:"You are not authenticated please"});
        }
        const token = authHeader.split(' ')[1];
        if(!token) return res.status(401).json("You are not Authenticated!");
        const verified = verify.verify(token);
        req.user = verified;
        next();
    } catch (error) {
        res.status(401).json({status:"error"});
    }
}
const verifyTokenAndRole = (req,res,next) =>{
    verifyToken(req,res,() =>{
        if(req.user.role === "admin"){
            next();
        }
        else{
            return res.status(401).json({status:"error",error:"You are not authenticated"});
        }
    })
}
module.exports={verifyToken,verifyTokenAndRole}