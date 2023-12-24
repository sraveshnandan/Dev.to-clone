require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// generating user model schema

const UserSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: [true, "Full Name is required."],
    },
    avatar: {
      public_id: String,
      public_url: String,
    },
    username: {
      type: String,
      required: [true, "Username is required."],
      unique: [true, "Username should be unique."],
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: [true, "Email should be unique."],
    },
    password: {
      type: String,
      select: false,
      minlength: [6, "Password must conatain at least 6 character."],
      required: [true, "Password can't be empty."],
    },
    profession: String,
    is_verified: {
      type: Boolean,
      default: false,
    },
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
  },
  {
    timestamps: true,
  }
);

//Some user Middilewares functions

//Function to hash user password before saving it to the database
UserSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

//Function to match the user password

UserSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

//For generating authentication token
UserSchema.methods.generateAuthToken = (user) => {
  return jwt.sign({ _id: user._id }, process.env.PRIVATE_KEY, {
    expiresIn: "7d",
  });
};

//Exporting user model

let User = mongoose.model("User", UserSchema);
module.exports = User;
