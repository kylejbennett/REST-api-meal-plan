var mongoose = require('mongoose');

// Dish Schema
var dishSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	description:{
		type: String,
		required: true
	},
	ingredients:{
		type: String,
		required: true
	},
	categories:{
		type: String,
		required: true
	},
	recipe_url:{
		type: String,
		required: true
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});