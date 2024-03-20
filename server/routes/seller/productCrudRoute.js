const express = require("express");
const multer = require("multer");
const { addProduct } = require("../../controllers/seller/productCrud");
const router = express.Router();

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Destination folder for storing uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use original file name
  },
});

// Multer upload instance
const upload = multer({ storage: storage });

// POST route for adding a product with image upload
router.post("/seller/addProduct", upload.single("image"), addProduct);

// router.post("/seller/addProduct", addProduct);

module.exports = router;
