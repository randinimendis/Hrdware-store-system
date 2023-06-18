const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const purchdelSchema = new Schema({
    productname: {
        type: String,
        required: true
    },
    suppliername: {
        type: String,
        required: true
    },
    supplierid: {
        type:Number,
        required: true
    },
    quentity: {
        type:Number,
        required: true
    },
    requireddate: {
        type:String,
        required: true
    },
    note: {
        type: String,
        required: true
    },
});
//*** */
module.exports = mongoose.model("purchdel",purchdelSchema);
//purchdel