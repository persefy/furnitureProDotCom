const express = require('express');
//morgan
const logger = require('morgan')
const bodyParser = require('body-parser')
const db = require('./db')
const cors = require('cors')

//initial declaration of constants for furniture pieces controller
const { FurnPiece } = require('./models')
const furnPieceController = require('./controllers/furnPieceController')

//initial declaration of constants for furniture space controller
const { FurnSpace } = require('./models')
const furnSpaceController = require('./controllers/furnSpaceController')

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

//controller-related for Furniture Pieces (FurnPiece)
app.get('/furniture', furnPieceController.getAllFurnPiece)
app.get('/furniture/:id', furnPieceController.getFurnPieceById)
app.post('/furniture', furnPieceController.createFurnPiece)
app.put('/furniture/:id',furnPieceController.updateFurnPiece)
app.delete('/furniture/:id',furnPieceController.deleteFurnPiece)

//controller-related for Furniture Spaces (FurnSpace)
app.get('/furnitureSpace', furnSpaceController.getAllFurnSpace)
app.get('/furnitureSpace/:id', furnSpaceController.getFurnSpaceById)
app.post('/furnitureSpace', furnSpaceController.createFurnSpace)
// app.put('/furnitureSpace/:id',furnSpaceController.updateFurnSpace)
// app.delete('/furnitureSpace/:id',furnSpaceController.deleteFurnSpace)