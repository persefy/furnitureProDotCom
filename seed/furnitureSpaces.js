const db = require('../db')
const { FurnSpace } = require('../models')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const furnSpaces = [
    {
        spaceName: '',
        outdoor: true,
        description: '',
        squareFootage: 0

    },
    {
        spaceName: '',
        outdoor: true,
        description: '',
        squareFootage: 0
    }
  ]
 

  await FurnSpace.insertMany(furnSpaces)

  console.log('Created furniture spaces!')
}

const run = async () => {
  await main()
  db.close()
}

run()