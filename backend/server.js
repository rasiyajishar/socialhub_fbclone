const express = require("express");
const mongoose = require("mongoose");
const app = express();

const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// Route
// const useRoutes = require("./routes/user");
// app.use("/register", useRoutes);
// app.use("/login",useRoutes)
// app.use("/activate",useRoutes)


const userRoutes = require("./routes/user");
app.use("/user", userRoutes);




// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
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
console.log((+new Date()*Math.random().toString().substring(0,1)))