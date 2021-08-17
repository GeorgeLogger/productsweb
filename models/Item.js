const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Exporting new mongoose model, taking the name and the schema object
module.exports = Item = mongoose.model('item', ItemSchema);