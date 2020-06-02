const mongoose = require('mongoose');

const ingredientTypeSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	create_date: {
		type: Date,
    	required: true,
    	default: Date.now
	}
});

module.exports = mongoose.model('IngredientType', ingredientTypeSchema);