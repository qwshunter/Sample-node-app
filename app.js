const express = require('express')

const app = express()

app.get('/', async (req, res) => {
	console.log("FInal healthCheck ===> ");
   res.send('Hello World from viren piranha ')
})

app.get('/healthCheck', async (req, res) => {
	console.log("FInal healthCheck ===> ");
   res.send('Hello World from viren piranha healthCheck ')
})

const port = process.env.PORT || 3000;
	app.listen(port, () => console.log(`Listening on port ..vifen`));

