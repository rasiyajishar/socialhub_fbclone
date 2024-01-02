const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
app.use(cors());

// Apply body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route
const useRoutes = require("./routes/user");
app.use("/register", useRoutes);

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
