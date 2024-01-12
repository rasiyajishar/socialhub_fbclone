const express = require("express");
const {createPost }=require("../controllers/post")

    const {authuser}=require("../middlewares/auth");

    const router = express.Router();
    router.post("/createPost",authuser,createPost);

    module.exports = router;