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
		type: Array,
	},
	categories:{
		type: String,
	},
	recipe_url:{
		type: String,
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Dish', dishSchema);