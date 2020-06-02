const express = require('express');
const router = express.Router();
const IngredientType = require('../models/ingredient_type');

// Get all ingredient_types
router.get('/', async(req, res) => {
	try {
		const ingredientTypes = await IngredientType.find();
		res.json(ingredientTypes);	
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

// Get one ingredient_type
router.get('/:id', getIngredientType, (req, res) => {
	res.json(res.ingredientType);
})

// Create one ingredient
router.post('/', async(req, res) => {
	const ingredientType = new IngredientType({
		name: req.body.name
	})

	try {
		const newIngredientType = await ingredientType.save()
		res.status(201).json(newIngredientType)
	} catch (err) {
		res.status(400).json({ message: err.message })
	}
})

// Update one ingredient
router.patch('/:id', getIngredientType, async(req, res) => {
	if (req.body.name != null) {
		res.ingredientType.name = req.body.name
	}

	try {
		const updatedIngredientType = await res.ingredientType.save()
		res.json(updatedIngredientType)
	} catch (err) {
		res.status(400).json({ message: err.message })
	}
})

// Delete one ingredient
router.delete('/:id', getIngredientType, async(req, res) => {
	try {
		await res.ingredientType.remove()
		res.json({ message: 'Deleted This Ingredient Type' })
	} catch(err) {
		res.status(500).json({ message: err.message })
	}
})

async function getIngredientType(req, res, next) {
	try {
		ingredientType = await IngredientType.findById(req.params.id)
		if (ingredientType == null) {
		  	return res.status(404).json({ message: 'Cant find ingredient type'})
		}
	} catch(err){
		return res.status(500).json({ message: err.message })
	}

	res.ingredientType = ingredientType
	next()
}

module.exports = router;