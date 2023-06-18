const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const vehSchema = new Schema ({
    regNo: {
        type: String,
        required: true
    },
    vCode: {
        type: Number,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    
    capacity: {
        type: Number,
        required: true
    },
    licence_expDate: {
        type: Date,
        required: true
    },
});

module.exports = mongoose.model("Veh",vehSchema);