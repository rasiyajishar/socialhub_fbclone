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
const cookieSession = require("cookie-session");
const cors = require("cors");
const fileUpload = require('express-fileupload');

const dotenv = require("dotenv").config();
const passportSetup = require("./passport");
const userRoutes = require("./routes/user");
const postRoutes = require("./routes/post")

app.use(cors());
app.use(
  fileUpload({
    useTempFiles:true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "session",
     keys: ["cyberkey"],
    maxAge: 24 * 60 * 60 * 1000, 
  })
);

app.use(passport.initialize());
app.use(passport.session());

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
