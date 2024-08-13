const mongoose = require('mongoose');
const { Schema } = mongoose;

const BookSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Author',
        required: true,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        default: null,
    },
    price: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
        default: 0,
    }
});

const Book = mongoose.model('Book', BookSchema);
module.exports = Book;
