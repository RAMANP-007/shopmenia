const mongoose = require("mongoose");

const product = mongoose.model("product", {
    id:{
        type : Number,
        required:true,
    },
    name:{
        type : String,
        required : true,
    },
    image:{
        type : String,
        required : true,  
    },
    category : {
        type : String,
        required : true,   
    },
     new_price : {
        type : Number,
        required : true, 
     },
     old_price : {
        type : Number, 
        required : true,

     },
     date : {
        type : Date,
        default : Date.now,
     },
     avaliable : {
        type : Boolean,
        default : true,
     }
});

module.exports = product;