const { FurnPiece } = require('../models');

const getAllFurnPiece = async (req,res) => {
    try {
        const furnitures = await FurnPiece.find()
        res.json(furnitures)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


const getFurnPieceById = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        const furniture = await FurnPiece.findById(id);
        if (furniture) {
            return res.json(furniture);
        }
        return res.status(404).send('Furniture not found!');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createFurnPiece = async (req, res) => {
    try {
        const furniture = await new FurnPiece(req.body);
        await furniture.save();
        return res.status(201).json({furniture,});

    } catch (error) {
        return res.status(500).json({ error: error.message});
    }
}

const updateFurnPiece = async (req, res) => {
    try {
        let { id } = req.params;
        let furniture = await FurnPiece.findByIdAndUpdate(id, req.body, { new: true })
        if (furniture) {
            return res.status(200).json(furniture)
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