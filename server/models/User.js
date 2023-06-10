const { Schema, model } = require("mongoose");

const schema = new Schema({
	firstName: {type: String},
    lastName: {type: String},
	email: {type: String, required: true, unique: true},
	password: {type: String},
    city: String,
    country: String,
    sex: {type: String},
    img: String,
    birthDate: String,
    about: {type: String},
    socialNetworks: [{type: Object}],
    selectedArticlesList: [{type: String}],
    accountType: {type: String},
    rate: Number,
    licence: Boolean
}, {
    timestamps: true
});

module.exports = model("User", schema);