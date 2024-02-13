const db = require('../db')
const { FurnPiece, FurnSpace } = require('../models')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const furnPieces = [
    //const furnPiece1 = await FurnSpace.find({ name: 'furnPiece 1' })
    {
        // furnSpace: furnPiece1[0]._id,
        itemName: '',
        price: 0,
        warrantyMonths: 0,
        description: ''
        
    },
    {
        // furnSpace: furnPiece1[0]._id,
        itemName: '',
        price: 0,
        warrantyMonths: 0,
        description: ''
    }
  ]
 

  await FurnPiece.insertMany(furnPieces)

  console.log('Created furniture pieces!')
}

const run = async () => {
  await main()
  db.close()
}

run()