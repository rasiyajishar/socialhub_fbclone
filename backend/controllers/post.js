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

// exports.getAllPosts=async(req,res)=>{
//     try {
//        const posts = await Post.find().populate("user","first_name last_name picture username gender")
//        scrollTo({createdAt:"desc"})  //createdAt:-1
//        res.json(posts)
//     } catch (error) {
//         return res.status(500).json({message:error.message})  
//     }
// }



// const Post = require("../models/Post");

// exports.createPost = async (req, res) => {
//   try {
//     console.log("Request Body:", req.body);
    
//     // Assuming that the post model has a 'user' field that should be associated with the currently logged-in user
//     const post = new Post({
//       ...req.body,
//       user: req.user._id  // Assuming user information is available in the request object
//     });
    
//     const savedPost = await post.save();
    
//     console.log("Created Post:", savedPost);
//     res.json(savedPost);
//   } catch (error) {
//     console.error("Error creating post:", error);
//     return res.status(500).json({ message: error.message });
//   }
// };

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("user", "first_name last_name picture username gender")
      .sort({ createdAt: -1 }); // Sort posts by createdAt in descending order
    
    res.json(posts);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
