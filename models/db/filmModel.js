/** Import library mongoose */
const mongoose = require('mongoose');

/** Create mongoose Schema */
const filmSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    year: {
        type: String,
        required: true,
    },
    tags: {
        type: Array,
        default: [],
    },
});

module.exports = mongoose.model('Film', filmSchema);