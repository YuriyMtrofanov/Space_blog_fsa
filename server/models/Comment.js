const { Schema, model } = require("mongoose");

const schema = new Schema({
    content: {type: String, required: true},
	pageId: {type: String, required: true},
	userId: {type: String, required: true},
    created_at: {type: Number, required: true}
}, {
    timestamps: {createdAt: "created_at"}
});

module.exports = model("Comment", schema);