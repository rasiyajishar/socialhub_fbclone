const express = require("express")
const mongoose = require("mongoose")
const app = express()
const cors=require("cors")
const dotenv = require("dotenv")

dotenv.config()
app.use(cors())


//route
const useRoutes = require("./routes/user")
app.use("/api",useRoutes)



//dbconnection
// mongoose.connect("mongodb://127.0.0.1:27017/socialhub_app")
mongoose.connect(process.env.MONGODB_URI )

.then(()=>{
    console.log("mongodb connected")
})
.catch((error)=>{
    console.error("failed to connect mongodb",error.message)
})



const PORT=process.env.PORT || 8000
app.listen(PORT,()=>{
    console.log(`server is listenig..on ${PORT}`)
})
