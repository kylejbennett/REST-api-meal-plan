const express = require('express');
const router = express.Router();
const Ingredient = require('../models/ingredient');

// Get all ingredients
router.get('/', async (req, res) => {
	try {
		const ingredients = await Ingredient.find();
		res.json(ingredients);	
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

// Get one ingredient
router.get('/:id', getIngredient, (req, res) => {
	res.json(res.ingredient);
})

// Create one ingredient
router.post('/', async (req, res) => {
	const ingredient = new Ingredient({
		name: req.body.name,
		ingredient_type: req.body.ingredient_type
	})

	try {
		const newIngredient = await ingredient.save()
		res.status(201).json(newIngredient)
	} catch (err) {
		res.status(400).json({ message: err.message })
	}
})

// Update one ingredient
router.patch('/:id', getIngredient, async (req, res) => {
	if (req.body.name != null) {
		res.ingredient.name = req.body.name
	}

	if (req.body.ingredient_type != null) {
		res.ingredient.ingredient_type = req.body.ingredient_type
	}

	try {
		const updatedIngredient = await res.ingredient.save()
		res.json(updatedIngredient)
	} catch (err) {
		res.status(400).json({ message: err.message })
	}
})

// Delete one ingredient
router.delete('/:id', getIngredient, async (req, res) => {
	try {
		await res.ingredient.remove()
		res.json({ message: 'Deleted This Ingredient' })
	} catch(err) {
		res.status(500).json({ message: err.message })
	}
})

async function getIngredient(req, res, next) {
	try {
		ingredient = await Ingredient.findById(req.params.id)
		if (ingredient == null) {
		  	return res.status(404).json({ message: 'Cant find ingredient'})
		}
	} catch(err){
		return res.status(500).json({ message: err.message })
	}

	res.ingredient = ingredient
	next()
}

module.exports = router;