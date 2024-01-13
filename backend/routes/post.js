// const express = require("express");
// const {createPost }=require("../controllers/post")

//     const {authuser}=require("../middlewares/auth");

//     const router = express.Router();
//     router.post("/createPost",authuser,createPost);

//     module.exports = router;

const express = require("express");
const { createPost } = require("../controllers/post");
const { authuser } = require("../middlewares/auth");

const router = express.Router();

// Updated route path without "user/"
router.post("/createPost", authuser, createPost);

module.exports = router;
