const express = require("express");
const router = express.Router();
const multer = require("multer");
const ProductsCtrl = require("../../controllers/productsCtrl");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

router.get("/", ProductsCtrl.index);
router.get("/new", ProductsCtrl.new);
router.post("/create", upload.single("image"), ProductsCtrl.create);
router.delete("/delete", ProductsCtrl.delete);
router.get("/edit/:id", ProductsCtrl.edit);
router.put("/update", upload.single("image"), ProductsCtrl.update);

module.exports = router;
