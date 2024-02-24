const { default: mongoose } = require("mongoose");

const sellerAuthSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const sellerAuth = mongoose.model("sellerAuth", sellerAuthSchema);
module.exports = sellerAuth;
