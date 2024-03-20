const sellerProduct = require("../../model/sellerModel/sellerProductModel");

const addProduct = async (req, res) => {
  try {
    const { productName, description, price, category } = req.body;
    const imagePath = req.file.filename;

    const product = new sellerProduct({
      productName,
      description,
      price,
      category,
      image: imagePath,
    });

    await product.save();
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const getProduct = async () => {
  try {
    const allProduct = await sellerProduct.find();
    res.status(200).json(allProduct);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { addProduct, getProduct };
