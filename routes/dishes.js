const express = require('express');
const router = express.Router();
const Dish = require('../models/dish');

// Get all dishes
router.get('/', async(req, res) => {
	try {
		const dishes = await Dish.find();
		res.json(dishes);	
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
});

// Get one dish
router.get('/:id', getDish, (req, res) => {
	res.json(res.dish);
})

// Create one dish
router.post('/', async(req, res) => {
	const dish = new Dish({
		name: req.body.name,
		description: req.body.description,
		ingredients: req.body.ingredients,
		categories: req.body.categories,
		recipe_url: req.body.recipe_url,
	})

	try {
		const newDish = await dish.save()
		res.status(201).json(newDish)
	} catch (err) {
		res.status(400).json({ message: err.message })
	}
})

// Update one dish
router.patch('/:id', getDish, async(req, res) => {
	if (req.body.name != null) {
		res.dish.name = req.body.name
	}

	if (req.body.description != null) {
		res.dish.description = req.body.description
	}

	if (req.body.ingredients != null) {
		res.dish.ingredients = req.body.ingredients
	}

	if (req.body.categories != null) {
		res.dish.categories = req.body.categories
	}

	if (req.body.recipe_url != null) {
		res.dish.recipe_url = req.body.recipe_url
	}

	try {
		const updatedDish = await res.dish.save()
		res.json(updatedDish)
	} catch (err) {
		res.status(400).json({ message: err.message })
	}
})

// Delete one dish
router.delete('/:id', getDish, async(req, res) => {
	try {
		await res.dish.remove()
		res.json({ message: 'Deleted This Dish' })
	} catch(err) {
		res.status(500).json({ message: err.message })
	}
})

async function getDish(req, res, next) {
	try {
		dish = await Dish.findById(req.params.id)
		if (dish == null) {
		  	return res.status(404).json({ message: 'Cant find dish'})
		}
	} catch(err){
		return res.status(500).json({ message: err.message })
	}

	res.dish = dish
	next()
}

module.exports = router;