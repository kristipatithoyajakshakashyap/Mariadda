const User = require("../models/User");
const colors = require("colors");
const {
  validateEmail,
  validateLength,
  validateUsername
} = require("../helpers/validation");
const bcrypt = require("bcrypt");
const { generateToken } = require("../helpers/tokens");
const Post = require("../models/Post");

exports.register = async (req, res) => {
  try {
    const { username, email, password, gender } = req.body;
    if (!validateEmail(email)) {
      return res.status(400).json({
        message: "invalid email address"
      });
    }
    const check = await User.findOne({ email });
    if (check) {
      return res.status(400).json({
        message:
          "This email address already exists,try with a different email address"
      });
    }
    if (!validateUsername(username)) {
      return res.status(400).json({
        message: "last name must between 3 and 30 characters."
      });
    }
    if (!validateLength(password, 6, 40)) {
      return res.status(400).json({
        message: "password must be atleast 6 characters."
      });
    }
    const cryptedPassword = await bcrypt.hash(password, 12);
    const user = await new User({
      username,
      email,
      password: cryptedPassword,
      gender
    }).save();
    const token = generateToken({ id: user._id.toString() }, "7d");
    res.send({
      id: user._id,
      username: user.username,
      picture: user.picture,
      token: token,
      message: "Register Success ! please activate your email to start"
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// LOGIN
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({
        error: "Invalid Credentials"
      });
    }
    const check = await bcrypt.compare(password, user.password);
    if (!check) {
      return res.status(400).json({
        error: "Invalid credentials"
      });
    }
    const token = generateToken({ id: user._id.toString() }, "7d");
    res.send({
      id: user._id,
      username: user.username,
      picture: user.picture,
      token: token,
      message: "Successfully Signed In"
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET PROFILE DETAILS
exports.getProfile = async (req, res) => {
  try {
    const { username } = req.params;
    const profile = await User.findOne({ username }).select("-password");
    if (!profile) {
      return res.status(422).json({ ok: false });
    }
    const posts = await Post.find({ user: profile._id }).populate("user");
    res.status(200).json({ ...profile.toObject(), posts });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//UPDATE PROFILE
exports.updateProfile = async (req, res) => {
  try {
    const { username, email, phoneNumber, dob, gender, id } = req.body;

    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (dob && !dateRegex.test(dob)) {
      return res
        .status(400)
        .json({ error: "Date of birth must be in yyyy-mm-dd format" });
    }
    const user = await User.findOneAndUpdate(
      { _id: id },
      { $set: { username, email, phoneNumber, dob, gender } },
      { new: true }
    ).select("-password");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ADD FRIEND
exports.addFriend = async (req, res) => {
  const { senderUserId, receiverUserId } = req.body;

  try {
    const senderUser = await User.findById(senderUserId);
    const receiverUser = await User.findById(receiverUserId);

    if (!senderUser || !receiverUser) {
      return res.status(404).json({ error: "User not found" });
    }

    if (senderUser.friends.includes(receiverUserId)) {
      return res.status(400).json({ error: "Already friends" });
    }

    if (senderUser.requests.includes(receiverUserId)) {
      return res.status(400).json({ error: "Request already sent" });
    }

    receiverUser.requests.push(senderUserId);
    await receiverUser.save();

    res.json({ message: "Friend request sent successfully" });
  } catch (error) {
    console.error("Error sending friend request:", error.message);
    res.status(500).json({ error: "Server error" });
  }
};
//ACCEPT FRIEND REQUEST
exports.acceptFriendRequest = async (req, res) => {
  const { senderUserId, receiverUserId } = req.body;

  try {
    const senderUser = await User.findById(senderUserId);
    const receiverUser = await User.findById(receiverUserId);

    if (!senderUser || !receiverUser) {
      return res.status(404).json({ error: "User not found" });
    }

    if (!senderUser.requests.includes(receiverUserId)) {
      return res.status(400).json({ error: "Friend request not found" });
    }

    // Accept the request
    senderUser.friends.push(receiverUserId);
    await senderUser.save();

    receiverUser.friends.push(senderUserId);
    receiverUser.requests.pull(senderUserId);
    await receiverUser.save();

    res.json({ message: "Friend request accepted successfully" });
  } catch (error) {
    console.error("Error accepting friend request:", error.message);
    res.status(500).json({ error: "Server error" });
  }
};
// CANCEL FRIEND REQUEST
exports.cancelFriendRequest = async (req, res) => {
  const { senderUserId, receiverUserId } = req.body;

  try {
    const senderUser = await User.findById(senderUserId);
    const receiverUser = await User.findById(receiverUserId);

    if (!senderUser || !receiverUser) {
      return res.status(404).json({ error: "User not found" });
    }

    if (!receiverUser.requests.includes(senderUserId)) {
      return res.status(400).json({ error: "Friend request not found" });
    }

    // Cancel the request
    receiverUser.requests.pull(senderUserId);
    await receiverUser.save();

    res.json({ message: "Friend request canceled successfully" });
  } catch (error) {
    console.error("Error canceling friend request:", error.message);
    res.status(500).json({ error: "Server error" });
  }
};
// UNFRIEND
exports.unfriend = async (req, res) => {
   const { senderUserId, receiverUserId } = req.body;

   try {
     const senderUser = await User.findById(senderUserId);
     const receiverUser = await User.findById(receiverUserId);

     if (!senderUser || !receiverUser) {
       return res.status(404).json({ error: "User not found" });
     }

     // Unfriend both users
     senderUser.friends.pull(receiverUserId);
     await senderUser.save();

     receiverUser.friends.pull(senderUserId);
     await receiverUser.save();

     res.json({ message: "Unfriended successfully" });
   } catch (error) {
     console.error("Error unfriending user:", error.message);
     res.status(500).json({ error: "Server error" });
   }
};
