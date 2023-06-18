const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const cartSchema = new Schema({
    customer: {
        type: Schema.Types.ObjectId,
        ref: 'customerD'
    },
    products: [{
        qty: {
            type: Number,
            required: false
        },
        product: {
            type: Schema.Types.ObjectId,
            ref: 'product'
        }
    }]
});

module.exports = mongoose.model("cart", cartSchema);