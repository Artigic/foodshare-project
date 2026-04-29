const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  name: String,
  quantity: String,
  location: String,
  contact: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Food", foodSchema);