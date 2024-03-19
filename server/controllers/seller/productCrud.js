const addProduct = async (req, res) => {
  try {
    const { productName, description, price, category } = req.body;
    const imagePath = req.file.path;

    res.json({ image: imagePath });
  } catch (err) {}
};

module.exports = { addProduct };
