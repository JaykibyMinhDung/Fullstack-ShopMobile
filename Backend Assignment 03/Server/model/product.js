const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  image: {
    type: Array,
  },
  img1: {
    type: String,
    require: true,
  },
  img2: {
    type: String,
    require: true,
  },
  img3: {
    type: String,
    require: true,
  },
  img4: {
    type: String,
    require: true,
  },
  long_desc: {
    type: String,
    require: true,
  },
  short_desc: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  amount: {
    type: Number,
    require: true,
  },
});

module.exports = mongoose.model("Product", productSchema);
