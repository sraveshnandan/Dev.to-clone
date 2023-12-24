const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    
  },
  {
    timestamps: true,
  }
);

module.exports = Post = mongoose.model("Post", PostSchema);
