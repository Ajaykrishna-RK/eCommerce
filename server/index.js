const express = require("express");
const sellerAuthRoute = require("./routes/seller/sellerAuthRoute");
const dotenv = require("dotenv");
const dbConnection = require("./config/dbConnection");
dotenv.config();
const app = express();
app.use(express.json());

dbConnection();

app.use("/", sellerAuthRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running on port 5000");
});
