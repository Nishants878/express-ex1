const express = require("express");
const path = require("path");

// const rootDir = require("../utils/path");
const productsController = require('../controllers/products')

const router = express.Router();

// /admin/add-product ==> get request
router.get("/add-product", productsController.getAddProduct);

// /admin/add-product ==> post request
router.post("/add-product", productsController.postAddProduct);

// exports.routes = router;
// exports.products = products;

module.exports=router;
