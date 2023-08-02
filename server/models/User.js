const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      trim: true,
      text: true,
      unique: true
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true
    },
    password: {
      type: String,
      required: [true, "Password is required"]
    },
    picture: {
      type: String,
      default:
        "https://res.cloudinary.com/dmhcnhtng/image/upload/v1643044376/avatars/default_pic_jeaybr.png"
    },
    cover: {
      type: String,
      trim: true
    },
    gender: {
      type: String,
      required: [true, "gender is required"]
    },
    dob: {
      type: Date,
      trim: true,
      default: ""
    },
    friends: [
      {
        type: ObjectId,
        ref: "User"
      }
    ],
    requests: [
      {
        type: ObjectId,
        ref: "User"
      }
    ],
    phoneNumber: {
      type: String,
      default: ""
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("User", userSchema);
