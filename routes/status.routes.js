const { serverStatus } = require("../controller/server.status.controllers");
const router = require("express").Router();
router.route("/server-status").get(serverStatus);
module.exports = router;
