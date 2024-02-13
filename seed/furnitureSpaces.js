const db = require('../db')
const { FurnSpace } = require('../models')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const furnSpaces = [
    {
        spaceName: 'Living Room',
        outdoor: false,
        description: 'The room where most of your time is spent. Can be used for lounging, family-time, and maybe even casual eating.',
        squareFootage: 0
    },
    {
      spaceName: 'Dining Room',
      outdoor: false,
      description: 'The room where most eating occurs. Can be used for meals, gatherings, or games.',
      squareFootage: 0
    },
    {
      spaceName: 'Study Room',
      outdoor: false,
      description: 'The room where most formal tasks are done. Can be used for a variety of activities such as work, studying, reading, or important phone calls.',
      squareFootage: 0
    },
    {
      spaceName: 'Bedroom',
      outdoor: false,
      description: 'The room where sleeping occurs. Can be used for quiet activities such as reading, studying, or napping.',
      squareFootage: 0
    },
    {
      spaceName: 'Patio',
      outdoor: true,
      description: 'The room that is outdoors but usually secluded from neighbors. Can be used for lounging, gatherings, or outdoor activities such as gardening.',
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