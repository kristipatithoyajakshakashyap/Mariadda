const express = require("express");
const {
  register,
  login,
  getProfile,
  updateProfile,
  addFriend,
  acceptFriendRequest,
  cancelFriendRequest,
  unFriend
} = require("../controllers/user");
const router = express.Router();
updateProfile;
// REGISTER USER 
router.post("/register", register);
// LOGIN USER 
router.post("/login", login)
// PROFILE DETAILS
router.get("/getProfile/:username", getProfile);
// UPDATE PROFILE
router.post("/updateprofile", updateProfile);
// ADD FRIEND 
router.post('/addfriend', addFriend)
// ACCEPT REQUEST
router.post("/acceptrequest", acceptFriendRequest);
// CANCEL REQUEST 
router.post("/canclerequest", cancelFriendRequest);
// UNFRIEND
router.post("/unfriend", unFriend)
module.exports = router;