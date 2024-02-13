const { FurnPiece } = require('../models');

const getAllFurnPiece = async (req,res) => {
    try {
        const furnPieces = await FurnPiece.find()
        res.json(furnPieces)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


const getFurnPieceById = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        const furnPieces = await FurnPiece.findById(id);
        if (furnPieces) {
            return res.json(furnPieces);
        }
        return res.status(404).send('Furniture not found!');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createFurnPiece = async (req, res) => {
    try {
        const furnPieces = await new FurnPiece(req.body);
        await furnPieces.save();
        return res.status(201).json({furnPieces,});

    } catch (error) {
        return res.status(500).json({ error: error.message});
    }
}

const updateFurnPiece = async (req, res) => {
    try {
        let { id } = req.params;
        let furnPieces = await FurnPiece.findByIdAndUpdate(id, req.body, { new: true })
        if (furnPieces) {
            return res.status(200).json(furnPieces)
        }
        throw new Error("Furniture not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteFurnPiece = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await FurnPiece.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Furniture deleted");
        }
        throw new Error("Furniture not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllFurnPiece,
    getFurnPieceById,
    createFurnPiece,
    updateFurnPiece,
    deleteFurnPiece
}