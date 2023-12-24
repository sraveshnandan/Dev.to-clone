const User = require("../models/user.model");
const ErrorHandler = require("../utils/ErrorHandler");
const jwt = require("jsonwebtoken");

exports.is_Authenticated = async (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token)
      return res.status(423).json({
        success: false,
        message: "No Token , please login first.",
      });

    let decode = jwt.verify(token, process.env.PRIVATE_KEY);

    if (!decode) {
      return res.status(423).json({
        success: false,
        message: "Invalid token , please login again.",
      });
    }

    let user = await User.findById(decode._id);
    if (!user)
      return res.status(412).json({
        success: false,
        message: "Invalid token , plesae login first.",
      });

    res.user = user;

    next();
  } catch (error) {
    ErrorHandler(res, 500, error.message);
  }
};
