const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const supdelSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    discription: {
        type: String,
        required: true
    },
});
//*** */
module.exports = mongoose.model("supdel",supdelSchema);
//supdel