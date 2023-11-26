const express = require("express");
const router = express.Router();
const authentication = require("../middlewares/authentification");
const {
  getAll,
  getDetail,
  midtrans
} = require("../controllers/transportController")

router.get("/all",authentication, getAll);
router.get("/detail/:id", getDetail);
router.post('/midtrans', authentication, midtrans)
module.exports = router;