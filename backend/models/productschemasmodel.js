

const mongoose= require('mongoose')


const productschema= new mongoose.Schema(
  
    {
        name:String,
        price:String,
        category:String,
        userid:String
    }

);


const productmodel= mongoose.model('products', productschema);

module.exports=productmodel;