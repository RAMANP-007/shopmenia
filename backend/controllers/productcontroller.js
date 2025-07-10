const product = require("../models/productmodel.js");
const Product = require("../models/productmodel.js");

const Create = async(req, res) => {
    try {
         let products = await Product.find({});
    let id;
    if(products.length > 0) {
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id+1;
    }
    else {
        id = 1;
    }
 const product = new Product({
    id : id,
    name : req.body.name,
    image : req.body.image,
    category : req.body.category,
    new_price : req.body.new_price,
    old_price : req.body.old_price,

 });
 console.log(product);
 await product.save();
 console.log("product has been saved");
 res.json({
    success : true,
    name : req.body.name,
 })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
   
}

const Delete = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.body.id);
    console.log("Product has been deleted");
    res.json({
      success: true,
    });
  } catch (error) {
    console.error("Deletion error:", error);
    res.status(500).json({ message: error.message });
  }
};


const GetAllProducts = async (req, res) => {
    try {
     let products = await Product.find({}); 
     res.send(products);  
    } catch (error) {
        
    }
}


const Newcollection = async (req, res) => {
  const products = await product.find({});
  const newcollection = products.slice(1).slice(-8);
  console.log("New collection fetched");
  res.send(newcollection);
};





module.exports = {Create ,Delete, GetAllProducts, Newcollection};