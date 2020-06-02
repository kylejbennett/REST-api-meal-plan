const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const ingredientSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	ingredient_type: {
		type: Schema.Types.ObjectId,
		ref: "Ingredient_type"
	},
	create_date: {
		type: Date,
    	required: true,
    	default: Date.now
	}
});

module.exports = mongoose.model('Ingredient', ingredientSchema);