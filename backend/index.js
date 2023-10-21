require("./db/mongosconfig");
const PORT=3000;
const express = require("express");
const cors= require("cors");
const User = require("./models/userschemasmodel");

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