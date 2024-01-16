const Post=require("../models/Post")


exports.createPost = async (req, res) => {
  try {
    console.log("Request Body:", req.body);
    const post = await new Post(req.body).save();
    console.log("Created Post:", post);
    res.json(post);
  } catch (error) {
    console.error("Error creating post:", error);
    return res.status(500).json({ message: error.message });
  }
};

exports.getAllPosts=async(req,res)=>{
    try {
       const posts = await Post.find().populate("user","first_name last_name picture username gender")
       res.json(posts)
    } catch (error) {
        return res.status(500).json({message:error.message})  
    }
}