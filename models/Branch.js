const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const branchSchema = new mongoose.Schema({
  name: String,
  image: String,
});

const Branch = mongoose.model("Branch", branchSchema);

module.exports = Branch;
