const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const paymentschema = new Schema({
   
   
    name : {
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true
    },
   
    paymenttype :{
        type : String,
        required : true
    }
    
  
});
const pay =  mongoose.model('payment',paymentschema);
module.exports = pay;