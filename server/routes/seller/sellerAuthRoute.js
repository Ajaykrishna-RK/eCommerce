const express = require("express");
const { sellerSignUp, sellerLogin } = require("../../controllers/seller/Auth");
const router = express.Router();

router.post("/auth/signup", sellerSignUp);
router.post("/auth/login", sellerLogin);

module.exports = router;
