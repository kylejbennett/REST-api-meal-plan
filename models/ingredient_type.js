const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const ingredientTypeSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	ingredients:[{
		type: Schema.Types.ObjectId,
		ref: "Ingredient"
	}],
	create_date: {
		type: Date,
    	required: true,
    	default: Date.now
	}
});

module.exports = mongoose.model('IngredientType', ingredientTypeSchema);