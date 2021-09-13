const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imgDir: {
    type: String,
    required: true,
  },
  desc: {
    type: String
  },
  dateAdded: {
    type: Date,
    default: Date.now,
  },
});

// Exporting new mongoose model, taking the name and the schema object
module.exports = Item = mongoose.model('item', ItemSchema);