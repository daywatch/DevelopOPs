const express = require('express');
const Product = require('../model/product');
const { getAllProducts } = require('../controller/product');

const router = express.Router();

router.get("/products", getAllProducts);

module.exports = router;