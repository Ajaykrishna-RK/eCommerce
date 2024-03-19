const express = require("express");
const sellerAuthRoute = require("./routes/seller/sellerAuthRoute");
const productCrudRoute = require("./routes/seller/productCrudRoute");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbConnection = require("./config/dbConnection");
dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
dbConnection();

app.use("/", sellerAuthRoute);
app.use("/", productCrudRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running on port 5000");
});
