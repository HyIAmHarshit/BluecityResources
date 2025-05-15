const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const { rmSync } = require("fs");
const methodOverride = require("method-override")
const ejsMate = require("ejs-mate");
const router = express.Router();
const Branch = require('./models/Branch');

main().then(()=>{
     console.log("connected to db");
}).catch((err)=>{
     console.log(err);
});

async function main(){
     await mongoose.connect("mongodb://127.0.0.1:27017/BluecityResource")

};

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use (methodOverride("_method"));
app.engine('ejs',ejsMate);
app.use(express.static(path.join(__dirname,"/public")));

//root route
app.get("/",(req,res)=>{
     res.send("hy i am root");
});

//index route
app.get("/bresources", async (req, res) => {
     const branches = await Branch.find();
     res.render("bresources/index", { branches });
});
   
//server port
app.listen(5555,()=>{
     console.log("server is running on port 5555");
});