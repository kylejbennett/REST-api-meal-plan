const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv/config');

// Connect to Mongoose
mongoose.connect(
	process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to DB!'))

app.use(express.json());

app.get('/', function(req, res){
	res.send('Home');
});

const ingredientsRouter = require('./routes/ingredients');
app.use('/ingredients', ingredientsRouter);

const ingredientTypesRouter = require('./routes/ingredient_types');
app.use('/ingredient_types', ingredientTypesRouter);

const dishesRouter = require('./routes/dishes');
app.use('/dishes', dishesRouter);

app.listen(5000, () => console.log('Running on Port 5000!'));