const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const postSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["profilePicture", "cover", "post"],
      default: null
    },
    description: {
      type: String
    },
    image: {
      type: String
    },
    user: {
      type: ObjectId,
      ref: "User",
      required: true
    },
    comments: [
      {
        comment: {
          type: String
        },
        commentBy: {
          type: ObjectId,
          ref: "User"
        },
        commentAt: {
          type: Date,
          default: new Date()
        }
      }
    ]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Post", postSchema);
