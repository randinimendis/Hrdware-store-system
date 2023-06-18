const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = new Schema({
    productName: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    code:{
        type: Number,
        required: false
    },
    brand:{
        type: String,
        required: false
    },
    qty:{
        type: Number,
        required: false
    },
    allocated:{
        type: Number,
        required: false
    },
    available:{
        type: Number,
        required: false
    },
    alertLevel:{
        type: Number,
        required: false
    } 
});

module.exports = mongoose.model("product", productSchema);