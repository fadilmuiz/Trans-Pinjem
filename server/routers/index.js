const express = require("express");
const router = express.Router();
const user = require("./routerUser");
const transport = require("./routerTransport");
const admin = require("./routerAdmin")

router.use("/users", user);
router.use("/api", transport)
router.use("/adm", admin)

module.exports = router;