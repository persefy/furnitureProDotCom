const mongoose = require('mongoose')
const FurnSpaceSchema = require('./furnSpace')
const FurnPieceSchema = require('./furnPiece')

const FurnSpace = mongoose.model('FurnSpace', FurnSpaceSchema)
const FurnPiece = mongoose.model('FurnPiece', FurnPieceSchema)

module.exports = {
    FurnSpace,
    FurnPiece
}