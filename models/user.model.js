require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// generating user model schema

const UserSchema = new mongoose.Schema({});

//Some user Middilewares functions

//Function to hash user password before saving it to the database
UserSchema.pre("save", async function () {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
});

//Function to match the user password

UserSchema.methods.matchPassword = async (password) => {
  return await bcrypt.compare(password, this.password);
};

//For generating authentication token
UserSchema.methods.generateAuthToken = (user) => {
  return jwt.sign({ user }, process.env.PRIVATE_KEY, {
    expiresIn: "7d",
  });
};

//Exporting user model

module.exports = User = mongoose.model("User", UserSchema);
