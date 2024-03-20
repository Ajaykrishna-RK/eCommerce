const express = require("express");
const sellerAuthRoute = require("./routes/seller/sellerAuthRoute");
const productCrudRoute = require("./routes/seller/productCrudRoute");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbConnection = require("./config/dbConnection");
const multer = require("multer");
const fs = require("fs"); // Import the 'fs' module for file system operations
const { addProduct } = require("./controllers/seller/productCrud");

dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
dbConnection();

app.use("/", sellerAuthRoute);
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir = "uploads/";

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    cb(null, dir);
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

app.post(
  "/seller/addProduct",
  upload.single("image"),
  async (req, res, next) => {
    try {
      await addProduct(req, res);
    } catch (err) {
      next(err);
    }
  }
);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running on port 5000");
});
