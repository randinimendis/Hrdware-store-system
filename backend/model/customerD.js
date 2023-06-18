const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const customerDSchema = new Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: false
    },
    address: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: false
    },
    payment_method: {
        type: String,
        required: false
    },
    nic: {
        type: String,
        required: false
    },
    gender: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: false
    },
    role:{
        type: String,
        required: false
    },
    emp:{
        type: Schema.Types.ObjectId,
        ref: 'empdetails' 
    }
});

module.exports = mongoose.model("customerD", customerDSchema);
