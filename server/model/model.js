const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    idNum: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    condition: {
        type: String,
        required: true
    },
    dateAdded: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    externalLink: {
        type: String,
        required: true
    }
})

const Storydb = mongoose.model('storiesdb', schema);

module.exports = Storydb;