const addProduct = async (req, res) => {
  try {
    const { productName, description, price, category } = req.body;
    // const imagePath = req.file.path;

    console.log(productName, description, price, category);
  } catch (err) {}
};

module.exports = { addProduct };
