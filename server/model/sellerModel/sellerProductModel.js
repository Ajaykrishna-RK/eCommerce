const { default: mongoose } = require("mongoose");

const sellerProductSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  // image: {
  //   required: true,
  //   type: String,
  // },
});

const sellerProduct = mongoose.model("sellerProduct", sellerProductSchema);

module.exports = sellerProduct;
