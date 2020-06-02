var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Dish Schema
var dishSchema = new Schema({
	name:{
		type: String,
		required: true
	},
	description:{
		type: String,
		required: true
	},
	ingredients:[{
		type: Schema.Types.ObjectId,
		ref: "Ingredient"
	}],
	categories:[{
		type: Schema.Types.ObjectId,
		ref: "Category"
	}],
	recipe_url:{
		type: String,
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Dish', dishSchema);