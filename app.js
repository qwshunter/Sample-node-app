const express = require('express')

const app = express()

app.get('/', async (req, res) => {
	console.log(" ===> ");
   res.send('Edureka Demo Check..123.')
})

app.get('/healthCheck', async (req, res) => {
	console.log("===> ");
   res.send('Edureka Demo healthCheck123... ')
})

const port = process.env.PORT || 3000;
	app.listen(port, () => console.log(`Listening on port ..vifen`));

