require("./db/mongosconfig");
const PORT=3000;
const express = require("express");
const cors= require("cors");
const User = require("./models/userschemasmodel");
const Product = require("./models/productschemasmodel");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/register", async (req, res) => {

  let data = new User(req.body);
  let result = await data.save();
  result = result.toObject();
  delete result.password; 
  res.send(result);
});

app.listen(PORT, ()=>{
    console.log(`Listening on port : ${PORT}`);
});



app.post("/login", async (req, res) => {

    if (req.body.email && req.body.password) 
    {
        let data = await User.findOne(req.body).select("-password");
        data ? res.send(data) : res.send({result:"no user found"});

    }
    else
    {
        res.send({result:"no user found"});
    }




})


app.post("/addproduct", async (req, res) => {
    try {
      const productData = req.body;
      const newProduct = new Product(productData);
      const result = await newProduct.save();
      res.send(result);
    } catch (error) {
      console.error('Error adding product:', error);
      res.status(500).send('Error adding product');
    }
  });


  // Get all products route
app.get("/products", async (req, res) => {
    try {
      const products = await Product.find();
      res.send(products);
    } catch (error) {
      console.error('Error fetching products:', error);
      res.status(500).send('Error fetching products');
    }
  });



  // Get products of a specific user route
app.get("/products/:userId", async (req, res) => {
    try {
      const userid = req.params.userId;
      const products = await Product.find({userid});
      res.send(products);
    } catch (error) {
      console.error('Error fetching user products:', error);
      res.status(500).send('Error fetching user products');
    }
  });


  // Get product of a specific user route
app.get("/products/:userId/:productId", async (req, res) => {
    try {
      const userid = req.params.userId;
      const productId = req.params.productId;
      const product = await Product.findOne({ userid, _id: productId });
      
      if (!product) {
        return res.status(404).send('Product not found');
      }
      
      res.send(product);
    } catch (error) {
      console.error('Error fetching user product:', error);
      res.status(500).send('Error fetching user product');
    }
  });