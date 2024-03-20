const express = require("express");
const multer = require("multer");
const {
  addProduct,
  getProduct,
} = require("../../controllers/seller/productCrud");
const router = express.Router();

router.get("seller/products", getProduct);
module.exports = router;
