const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true},
    genre: { type: String},
    yearPublished: { type: Number},
    authors: [{ type: mongoose.Schema.Types,ObjectId, ref: "Author"}],
});

module.exports = mongoose.model("Book", bookSchema);