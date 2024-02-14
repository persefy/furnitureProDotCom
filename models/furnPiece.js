const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const FurnPiece = new Schema(
    {
        seller: {type: String, required: true},
        furnSpace_id: {type: Schema.Types.ObjectId, ref: 'furnSpace_id'},
        itemName: { type: String, required: true },
        price: { type: Number, required: true },
        warrantyMonths: { type: Number, required: true},
        description: {type: String, required: true},
        pieceImgUrl: {type: String, required: true}
        
    },
    { timestamps: true },
)
module.exports = FurnPiece