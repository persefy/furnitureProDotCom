const express = require('express');
//morgan
const logger = require('morgan')
const bodyParser = require('body-parser')
const db = require('./db')
const cors = require('cors')
//


const { FurnPiece } = require('./models')
const furnPieceController = require('./controllers/furnPieceController')

// const { FurnSpace } = require('./models')
// const furnSpaceController = require('./controllers/furnSpaceController')

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
app.get('/furnitures', furnPieceController.getAllFurnPiece)
app.get('/furnitures/:id', furnPieceController.getFurnPieceById)
app.post('/furnitures', furnPieceController.createFurnPiece)
app.put('/furnitures/:id',furnPieceController.updateFurnPiece)
app.delete('/furnitures/:id',furnPieceController.deleteFurnPiece)