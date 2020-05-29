const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	ingredient_type: {
		type: String
	},
	create_date: {
		type: Date,
    	required: true,
    	default: Date.now
	}
});

module.exports = mongoose.model('Ingredient', ingredientSchema);