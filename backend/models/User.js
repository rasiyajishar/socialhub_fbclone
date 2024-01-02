const { ObjectId, Timestamp } = require("mongodb")
const mongoose = require("mongoose")


const userSchema = mongoose.Schema({
    first_name:{
        type:String,
        required:[true,"firstname is requires"],
        trim:true,
        text:true,
    },
    last_name:{
        type:String,
        required:[true,"lastname is required is requires"],
        trim:true,
        text:true,
    },
    username:{
        type:String,
        required:[true,"username is requires"],
        trim:true,
        text:true,
        unique:true
    },
    email:{
        type:String,
        required:[true,"email is requires"],
        trim:true,
       
    },
    password:{
        type:String,
        required:[true,"password is requires"],
        
       
    },
  picture:{
        type:String,
        trim:true,
        default:"data:image/png;base64,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"
    },
cover:{
    type:String,
    trim:true,
},
gender:{
    type:String,
    required:[true,"gender is requires"],
    trim:true,
   
},
byear:{
    type:Number,
    required:false,
    trim:true,
},
verified:{
    type:Boolean,
    default:false,
},
friends:{
type:Array,
default:[],
},
following:{
type:Array,
default:[],
},
followers:{
type:Array,
default:[],
},
requests:{
type:Array,
default:[],
},
search:{
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"user",
    }
},
details:{
    othername:{
        type:String,

    },
    job:{
        type:String,
    },
    hometown:{
        type:String,
    },
    highSchool:{
        type:String,
    },
},
savedPosts:[
    {
        post:{
        type:ObjectId,
        // ref:post,
    },
    savedAt:{
        type:Date,
        default:new Date(),
    },
},

],
},
{
    timestamps:true,
}

)
module.exports = mongoose.model("User",userSchema)