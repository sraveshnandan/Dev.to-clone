const {
  CreateUser,
  LoginUser,
  GetProfile,
  Logout,
} = require("../controller/user.controller");
const { is_Authenticated } = require("../middlewares/Auth");

const router = require("express").Router();

router.route("/user/register").post(CreateUser);
router.route("/user/login").post(LoginUser);
router.route("/user/logout").get(Logout);
router.route("/user/get-profile").get(is_Authenticated, GetProfile);

module.exports = router;
