const express = require('express');
const Product = require('../model/product');
const { addProduct, deleteOne} = require('../controller/product');

const router = express.Router();

router.post("/add-product", addProduct);
router.delete("/delete-product/:id", deleteOne)     // the user can add id to url

module.exports = router;