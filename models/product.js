var mongoose = require("mongoose");

var productSchema = mongoose.Schema({
  id: String,
  name: String,
  category: String,
  price: String,
  prDetails: String,
  prImage: String,
});
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
