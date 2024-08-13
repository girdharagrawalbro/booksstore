const mongoose = require('mongoose');
const { Schema } = mongoose;

const BookSchema = new Schema({
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

const Book = mongoose.model('Book', BookSchema);
module.exports = Book;
