const express = require('express')

const app = express()

app.get('/', async (req, res) => {
   res.send('Hello World from ')
})

const port = process.env.PORT || 3000;
	app.listen(port, () => console.log(`Listening on port ..`));

