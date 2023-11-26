const express = require("express");
const router = express.Router();
// const authentication = require("../middlewares/authentication");
const {
  register,
  login,
  updateUser
} = require("../controllers/userController")


router.post("/register", register);
router.post("/login", login);
router.post("/update-user", updateUser)

module.exports = router;