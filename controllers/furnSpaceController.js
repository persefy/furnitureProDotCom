const { FurnSpace } = require('../models');

const getAllFurnSpace = async (req,res) => {
    try {
        const furnSpaces = await FurnSpace.find()
        res.json(furnSpaces)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}


const getFurnSpaceById = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        const furnSpaces = await FurnSpace.findById(id);
        if (furnSpaces) {
            return res.json(furnSpaces);
        }
        return res.status(404).send('Furniture use space not found!');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createFurnSpace = async (req, res) => {
    try {
        const furnSpaces = await new FurnSpace(req.body);
        await furnSpaces.save();
        return res.status(201).json({furnSpaces,});

    } catch (error) {
        return res.status(500).json({ error: error.message});
    }
}

// const updateFurnSpace = async (req, res) => {
//     try {
//         let { id } = req.params;
//         let furnSpaces = await FurnSpace.findByIdAndUpdate(id, req.body, { new: true })
//         if (furnSpaces) {
//             return res.status(200).json(furnSpaces)
//         }
//         throw new Error("Furniture space info not found")
//     } catch (error) {
//         return res.status(500).send(error.message);
//     }
// }

// const deleteFurnSpace = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const deleted = await FurnSpace.findByIdAndDelete(id)
//         if (deleted) {
//             return res.status(200).send("Furniture space info deleted");
//         }
//         throw new Error("Furniture space info not found");
//     } catch (error) {
//         return res.status(500).send(error.message);
//     }
// }

module.exports = {
    getAllFurnSpace,
    getFurnSpaceById,
    createFurnSpace,
    // updateFurnSpace,
    // deleteFurnSpace
}