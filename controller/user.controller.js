const User = require("../models/user.model");
const { setCookie, DeleteCookie } = require("../utils");
const ErrorHandler = require("../utils/ErrorHandler");

// create user function
exports.CreateUser = async (req, res) => {
  try {
    const { fullname, username, email, password } = req.body;

    // checking if user already exists.

    let user = await User.findOne({ email });
    if (user) {
      return res.status(406).json({
        success: false,
        message: "Email alraedy exists.",
      });
    }

    // creating new user

    user = await User.create({
      fullname,
      username,
      email,
      password,
      avatar: {
        public_id: "sample id",
        public_url: "sample url",
      },
    });

    // sending final reesponce

    res.status(200).json({
      success: true,
      user,
      message: "Account created successfully.",
    });
  } catch (error) {
    ErrorHandler(res, 500, error.message);
  }
};

//login function

exports.LoginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email }).select("+password");
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "No account found." });

    const isPassOk = await user.matchPassword(password);

    if (!isPassOk) {
      return res
        .status(423)
        .json({ success: false, message: "Invalid Credientials." });
    }

    const token = await user.generateAuthToken(user);
    user.password = undefined;
    setCookie(res, token);
    res.status(200).json({
      success: true,
      user,
      message: "Logged in ",
    });
  } catch (error) {
    ErrorHandler(res, 500, error.message);
  }
};

// Logout Function
exports.Logout = async (req, res) => {
  try {

    const token =" ";

    DeleteCookie(res,token)
    res.status(200).json({
      success: true,
      message: "Logged out.",
    });
  } catch (error) {
    ErrorHandler(res, 500, error.message);
  }
};

//Get user Profile function

exports.GetProfile = async (req, res) => {
  try {
    const user = res.user;
    res.status(200).json({
      success: true,
      data: user,
      message: "Data Fetched Successfully.",
    });
  } catch (error) {
    ErrorHandler(res, 500, error.message);
  }
};
