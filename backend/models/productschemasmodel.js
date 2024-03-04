

const mongoose= require('mongoose')


const productschema= new mongoose.Schema(
  
    {
        productname:String,
        price:String,
        stock:String,
        location:String,
        productdescription:String,
        category:String,
        userid:mongoose.Schema.Types.ObjectId
    }

);


const productmodel= mongoose.model('products', productschema);

module.exports=productmodel;