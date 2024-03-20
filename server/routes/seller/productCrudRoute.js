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
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix); // Generate unique filename
  },
});

// Multer upload instance
const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
});

// POST route for adding a product with image upload
router.post(
  "/seller/addProduct",
  upload.single("image"),
  async (req, res, next) => {
    try {
      await addProduct(req, res);
    } catch (err) {
      next(err); // Pass error to the next middleware
    }
  }
);

// router.post("/seller/addProduct", addProduct);

module.exports = router;
