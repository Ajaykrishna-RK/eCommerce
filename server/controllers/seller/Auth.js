const bcrypt = require("bcryptjs");
const sellerAuth = require("../../model/sellerModel/SellerAuthModel");
const jwt = require("jsonwebtoken");

const sellerSignUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const isEmail = await sellerAuth.findOne({ email });
    if (isEmail) return res.status(404).json({ msg: "Email already exists" });
    const hashPassword = bcrypt.hashSync(password, 10);
    const seller = new sellerAuth({ name, email, password: hashPassword });
    await seller.save();
    res.status(200).json({ seller });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

const sellerLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const findUser = await sellerAuth.findOne({ email });
    if (!findUser) return res.status(404).json({ msg: "Email not found" });
    const checkPassword = bcrypt.compareSync(password, findUser?.password);
    if (!checkPassword)
      return res.status(404).json({ msg: "Invalid Credantials" });
    const token = jwt.sign({ id: findUser._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = findUser?._doc;
    res.status(200).json({ seller: rest, token });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

module.exports = { sellerSignUp, sellerLogin };
