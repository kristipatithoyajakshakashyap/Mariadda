const Post = require("../models/Post");
const User = require("../models/User");

exports.createPost = async (req, res) => {
  const { userId, image, description, type } = req.body;
  try {
    // Verify the type of the post
    if (!["profilePicture", "cover", "post"].includes(type)) {
      return res.status(400).json({ error: "Invalid post type." });
    }
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }
    const post = new Post({
      type,
      description,
      image,
      user: userId
    });
    const savedPost = await post.save();

    res.status(201).json({message: "Post saved",savedPost});
  } catch (error) {
    console.error("Error creating post: ", error);
    res.status(500).json({ error: "Failed to create post." });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("user", "-password -__v")
      .sort({ createdAt: "desc" });
    res.json(posts);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
