const jwt = require("jsonwebtoken")

exports.authuser=async(req,res,next)=>{
    try {
      const temp =req.header("authorization")
      const token  = temp ? temp.slice(7,temp.length) : ""
      if(!token){
        return res.status(400).json({message:"token is missing"})
      }

      jwt.verify(token,process.env.TOKEN_SECRET,(err,user)=>{
        if(err){
            return res.status(400).json({message:"invalid aaaaaaaaaaauthentication"})
        }
       req.user = user; 
       next();
      })
    } catch (error) {
       return res.status(500) .json({message:error.message})
    }
}