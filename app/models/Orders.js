const mongoose = require('mongoose');
const { Schema } = mongoose;

const OrdersSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    book: {
        type: Schema.Types.ObjectId,
        ref: 'Book',
        required: true,
    },
    qty: {
        type: Integer,
        required: true,
        default: "01"
    },
    total: {
        type: Integer,
        required: true,
    }
});

const Orders = mongoose.model('Orders', BookSchema);
module.exports = Orders;
