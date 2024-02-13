const express = require('express');
//morgan
const logger = require('morgan')
const bodyParser = require('body-parser')
const db = require('./db')
const cors = require('cors')
//
const furnSpaceController = require('./controllers/furnSpaceController')
const furnPieceController = require('./controllers/furnPieceController')

// require() imports and middleware here ^ ///////
const PORT = process.env.PORT || 3001;
const app = express()
//
app.use(cors())
app.use(express.json())
//morgan
app.use(logger('dev'))
app.use(bodyParser.json())
// app.use() middleware here ^ ///////////////////
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
app.get('/', (req, res) => res.send('This is our landing page!'))