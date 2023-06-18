const mongoose = require('mongoose');
const Schema = mongoose.Schema;


Repairs = new Schema({
    RID: {
        type: String
    },
    ItemName: {
        type: String
    },
    RepairPeriod: {
        type: String
    },
    EstimatedCost: {
        type: String
    },
    Description: {
        type: String
    },
    status: {
        type: String
    }
});

module.exports = mongoose.model('Repairs',Repairs);