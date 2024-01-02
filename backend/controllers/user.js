
const { validateEmail, validateLength } = require("../helpers/validation");
const User = require("../models/User");
const bcrypt = require("bcrypt");
exports.register = async(req, res) => {
   try {
    const{
        first_name,
        last_name,
        email,
        password,username,byear,gender
       }=req.body;
  
if(!validateEmail(email)){
    return res.status(400).json({
        message:"invalid mail address"
    });
}
const check = await User.findOne({email});
if(check){
    return res.status(400).json({
        message:"This email address already exists,try with a different email",
});
}


if(!validateLength(first_name,3,30)){
    return res.status(400).json({
        message:"firstname must between 3 and 30 characters"
})
}
if(!validateLength(last_name,3,30)){
    return res.status(400).json({
        message:"lastname must between 3 and 30 characters"
})
}
if(!validateLength(password,6,12)){
    return res.status(400).json({
        message:"password must be atleast 6 characters"
})
}


const cryptedPassword = await bcrypt.hash(password,12)
       console.log(cryptedPassword)
      
      
      let tempusername = first_name+last_name;
       const user = await new User({
        first_name,
        last_name,
        email,
        password:cryptedPassword,
        username,byear,gender
       }).save()
       res.json(user)
   } catch (error) {
    res.status(500).json({message:error.message})
   }
};
