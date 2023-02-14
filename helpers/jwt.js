const jwt=require("jsonwebtoken")
const dotenv=require("dotenv");
dotenv.config();

exports.sign = (payload) => jwt.sign(payload,process.env.JWT_SECRETKEY);
exports.verify = (payload) => jwt.verify(payload,process.env.JWT_SECRETKEY);