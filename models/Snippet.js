const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const snippetSchema = new Schema({
    id: Number,
    title: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true,
        enum: ["Javascript", "Java", "SQL", "Ruby", "PHP", "Python"]
    },
    body: {
        type: String,
        required: true
    },
    comment: {
        type: String,
    },
    tags: {
        type: Array,
        required: true
    }
});

module.exports = mongoose.model("Snippet", snippetSchema);