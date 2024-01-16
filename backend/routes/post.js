// const express = require("express");
// const {createPost }=require("../controllers/post")

//     const {authuser}=require("../middlewares/auth");

//     const router = express.Router();
//     router.post("/createPost",authuser,createPost);

//     module.exports = router;

const express = require("express");
const { createPost,getAllPosts } = require("../controllers/post");
const { authuser } = require("../middlewares/auth");

const router = express.Router();


// Include express-fileupload middleware for handling file uploads
const fileUpload = require('express-fileupload');
router.use(fileUpload());




router.post("/createPost", authuser, createPost);
router.get("/getAllPosts", getAllPosts);

module.exports = router;
