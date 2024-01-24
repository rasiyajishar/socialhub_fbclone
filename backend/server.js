// // const express = require("express");
// // const mongoose = require("mongoose");
// // const app = express();
// // const passport = require("passport");
// // const cookieSession = require("cookie-session");
// // const cors = require("cors");
// // const dotenv = require("dotenv");
// // const passportSetup=require("./passport");
// // dotenv.config();
// // app.use(cors());

// // app.use(express.json());
// // app.use(express.urlencoded({ extended: true }));

// // // app.use(cookieSession({
// // //     name:"session",
// // //     keys:["cyberwolve"],
// // //     maxAge:24*60*60*100,
// // // }))


// // app.use(passport.initialize());
// // app.use(passport.session())

// // // Route
// // // const useRoutes = require("./routes/user");
// // // app.use("/register", useRoutes);
// // // app.use("/login",useRoutes)
// // // app.use("/activate",useRoutes)


// // const userRoutes = require("./routes/user");
// // app.use("/user", userRoutes);




// // // MongoDB connection
// // mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
// //   .then(() => {
// //       console.log("mongodb connected");
// //   })
// //   .catch((error) => {
// //       console.error("failed to connect mongodb", error.message);
// //   });

// // const PORT = process.env.PORT || 8000;
// // app.listen(PORT, () => {
// //     console.log(`server is listening on ${PORT}`);
// // });
// // console.log((+new Date()*Math.random().toString().substring(0,1)))


// const express = require("express");
// const mongoose = require("mongoose");
// const app = express();
// const passport = require("passport");
// const cookieSession = require("cookie-session");
// const cors = require("cors");
// const dotenv = require("dotenv").config();
// const passportSetup = require("./passport");
// const userRoutes = require("./routes/user");


// app.use(cors());

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use(cookieSession({
//     name: "session",
//     keys: ["cyberwolve"],
//     maxAge: 24 * 60 * 60 * 1000, // Set the session expiration time
// }));

// app.use(passport.initialize());
// app.use(passport.session());


//  app.use("/user", userRoutes);
// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log("mongodb connected");
//   })
//   .catch((error) => {
//     console.error("failed to connect mongodb", error.message);
//   });

// const PORT = process.env.PORT || 8000;
// app.listen(PORT, () => {
//   console.log(`server is listening on ${PORT}`);
// });
// console.log((+new Date() * Math.random().toString().substring(0, 1)));



const express = require("express");
const mongoose = require("mongoose");
const app = express();
const passport = require("passport");
const session=require("express-session")//googlelog
const OAuth20Strategy = require("passport-google-oauth20").Strategy
const cookieSession = require("cookie-session");
const cors = require("cors");
const fileUpload = require('express-fileupload');

const dotenv = require("dotenv").config();
const passportSetup = require("./passport");
const userRoutes = require("./routes/user");
const postRoutes = require("./routes/post")
const User=require('./models/User')
app.use(cors());
app.use(
  fileUpload({
    useTempFiles:true,
  })
);
app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true }));

// app.use(
//   cookieSession({
//     name: "session",
//      keys: ["cyberkey"],
//     maxAge: 24 * 60 * 60 * 1000, 
//   })
// );


//setup session
app.use(session({
 secret:"123456abcdef",
 resave:false,
 saveUninitialized:true
}))


//setup passport
 app.use(passport.initialize());
 app.use(passport.session());
 passport.use(
  new OAuth20Strategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:8000/auth/google/callback",
      scope:["profile","email"]
  },async (accessToken,refreshToken,profile,done)=>{
    console.log(profile)
    try{
      let user = await User.findOne({googleId:profile.id})
      if(!user){
        user = new User({
          googleId:profile.id,

          first_name: profile.name.given_name || 'DefaultFirstName',
          last_name: profile.name.family_name || 'DefaultLastName',
          username:profile.displayName,
          gender: 'unknown', // Provide a default value or get it from the Google profile if available
          password: 'some_secure_password', 
          // email:profile.email[0].value,
          email: profile.emails ? profile.emails[0].value : '',
        });
        await user.save()
      }
      done(null, user); // Pass the user to done
    }catch(error){
      return done(error,null)
    }
  }

  )
 )

 passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});


//initialise google auth login

app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));





app.get(
    "/auth/google/callback",
     passport.authenticate("google", {
     successRedirect: "http://localhost:3000",
       failureRedirect: "http://localhost:3000/login",
    })
  );




app.use("/user", userRoutes); 
app.use("/post", postRoutes); 

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((error) => {
    console.error("failed to connect mongodb", error.message);
  });

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`);
});
console.log(+new Date() * Math.random().toString().substring(0, 1));
