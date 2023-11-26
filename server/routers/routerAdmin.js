const express = require("express");
const router = express.Router();
const authentication = require("../middlewares/authentification");
const upload = require("../helpers/multer")
const {
  addTrans,
  deleteTrans,
  editTrans
} = require("../controllers/adminController")

router.post("/add-trans", authentication, upload.single('image'), addTrans);
router.delete("/del-trans/:id", authentication, deleteTrans);
router.put("/edit-trans/:id", authentication, upload.single('image'), editTrans)


module.exports = router;