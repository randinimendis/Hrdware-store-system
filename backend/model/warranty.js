//const { default: mongoose, model } = require("mongoose");
const  mongoose = require("mongoose");
const Schema = mongoose.Schema;
const warrantySchema = new Schema({

    firstname: {
        type:String,
        required:true
    },

    lastname: {
        type:String,
        required:true
    },
    
    itemname: {
        type:String,
        required:true
    },

    contactnumber: {
        type:Number,
        required:true
    },

    invoicenumber: {
        type:String,
        required:true
    },

    purchaseddate: {
        type:String,
        required:true
    },

    natureoftheproblem: {
        type:String,
        required:true
    },

    attachitemphotos: {
        type:String,
        required:false
    },



});

module.exports = mongoose.model("warranty" , warrantySchema);