const User = require("../models/User");

exports.validateEmail=(email)=>{
    return String(email).toLocaleLowerCase().match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
    
};
exports.validateLength=(text,min,max)=>{
    if(text.length>max || text.length<min){
        return false;
    }
    return true;
}
exports.validateUsername=async(username)=>{
    let a=false;
    do{
      let check = await User.findOne({username})
      if (check)  {
        a= true;
      }else{
        a=false;
      }
    }while(a);
    return username
}