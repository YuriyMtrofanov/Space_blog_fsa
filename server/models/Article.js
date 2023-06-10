const {Schema, model } = require("mongoose");

const schema = new Schema({
    name: {type: String},
    author: {type: String},
    date: Number,
    category: {type: String},
    img: {type: String},
    content: {type: String},
    rate: Number,
    licence: Boolean
}, {
    timestamps: true
});

module.exports = model("Article", schema);