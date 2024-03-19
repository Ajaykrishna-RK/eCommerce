const addProduct = async (req, res) => {
  try {
    const { productName, description, price, category } = req.body;
    // const imagePath = req.file.path;

    // Process the product details and send back a response
    const product = {
      productName,
      description,
      price,
      category,
      // image: imagePath,
    };

    res.status(200).json({ message: "Product added successfully", product });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { addProduct };
