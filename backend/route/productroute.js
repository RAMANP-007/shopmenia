const express = require("express");
const router = express.Router();

const { Create, Delete, GetAllProducts, Newcollection } = require("../controllers/productcontroller.js");
const product = require("../models/productmodel.js");

router.post("/addproduct", Create);
router.post('/deleteproduct', Delete);
router.get("/allproducts", GetAllProducts);
router.get('/newcollection', Newcollection );


module.exports = router;
