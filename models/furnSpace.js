const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const FurnSpace = new Schema(
    {
        spaceName: { type: String, required: true },
        outdoor: { type: Boolean, required: true },
        description: {type: String,  required: true },
        squareFootage: { type: Number, required: true }
    },
    { timestamps: true },
)
module.exports = FurnSpace