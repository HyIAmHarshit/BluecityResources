const mongoose=require("mongoose");
const initBranchData = require("../init/BranchData.js");
const Branch = require("../models/Branch.js")

main().then(()=>{
     console.log("connected to db");
}).catch((err)=>{
     console.log(err);
});

async function main(){
     await mongoose.connect("mongodb://127.0.0.1:27017/BluecityResource")
};


const initdb = async()=>{
await Branch.deleteMany({});
await Branch.insertMany(initBranchData.branches);
console.log("data was initialized");
}
initdb();