const mongoose = require("mongoose");

const authorsSchema = new mongoose.Schema({
	name: {
		type: String,
	},
	nationality: {
		type: String,
		maxlength: 2,
	},
	books: {
		type: String,
        maxlength: 100,
	},
	lastConnection: Date,
	orders: Number,
});

const authors = mongoose.model("authors", authorsSchema);

// exporter le modèle
module.exports = authors;