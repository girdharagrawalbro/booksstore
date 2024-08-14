const mongoose = require('mongoose');
const { Schema } = mongoose;
const AuthorSchema = new Schema({
name: {
    type: String,
    required: true,
    },
});

const Author = mongoose.model('Author', AuthorSchema);
module.exports = Author;
