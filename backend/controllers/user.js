
const User = require("../models/User")
exports.register = async(req, res) => {
   try {
    const{
        first_name,
        last_name,
        email,
        password,username,byear,gender
       }=req.body;
       const user = await new User({
        first_name,
        last_name,
        email,
        password,username,byear,gender
       }).save()
       res.json(user)
   } catch (error) {
    res.status(500).json({message:error.message})
   }
};
