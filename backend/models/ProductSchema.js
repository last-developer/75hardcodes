const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: String,
    description: String,
    // ... other fields ...
});

module.exports = mongoose.model("Product", ProductSchema);