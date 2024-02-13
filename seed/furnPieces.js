const db = require('../db')
const { FurnPiece, FurnSpace } = require('../models')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  
  const livingRoom = await FurnSpace.find({spaceName: 'Living Room'})
  const diningRoom = await FurnSpace.find({spaceName: 'Dining Room'})
  const studyRoom = await FurnSpace.find({spaceName: 'Study Room'})
  const bedRoom = await FurnSpace.find({spaceName: 'Bedroom'})
  const patioRoom = await FurnSpace.find({spaceName: 'Patio'})
  
  const furnPieces = [
    {
      furnSpace_id: livingRoom[0]._id,
      itemName: 'Couch',
      price: 1350,
      warrantyMonths: 8,
      description: 'A nice sectional L-shaped couch that is perfect for all your lounging needs whether sitting or laying down. Water-resistant leather outer with a sturdy steel frame.'
    },
    {
      furnSpace_id: livingRoom[0]._id,
      itemName: 'TV Stand',
      price: 700,
      warrantyMonths: 12,
      description: 'A beautiful hardwood TV stand with a delicately crafted woodwork exterior. Perfect for mounting a TV above, but also has ample storage space within.'
    },
    {
      furnSpace_id: livingRoom[0]._id,
      itemName: 'Coffee Table',
      price: 500,
      warrantyMonths: 6,
      description: 'A simply designed coffee table formed with a combination of hardwood and premium metal materials. Could be used for eating, paperwork, games, and even as a informal footrest.'
    },
    {
      furnSpace_id: diningRoom[0]._id,
      itemName: 'Dining Table',
      price: 680,
      warrantyMonths: 4,
      description: 'An elegant but not overly formal dining table that is perfect for meals, gatherings, and games. Made from elegant hardwood with hidden metal reinforcements in all weakpoints.'
    },
    {
      furnSpace_id: diningRoom[0]._id,
      itemName: 'Dining Chair',
      price: 180,
      warrantyMonths: 4,
      description: 'A sturdy chair with a very nice balance of comfort, support, and class. Made from elegant hardwood with hidden metal reinforcements in all weakpoints.'
    },
    {
      furnSpace_id: diningRoom[0]._id,
      itemName: 'Buffet',
      price: 1000,
      warrantyMonths: 12,
      description: 'An elegant sideboard/buffet table decorated with elegant woodworks. Can be used for serving food, storing fine china, or even double as a liquor cabinet.'
    },
    {
      furnSpace_id: studyRoom[0]._id,
      itemName: 'Desk',
      price: 900,
      warrantyMonths: 15,
      description: 'A high tech solution to the outdated design of a classic desk. Features automatic raising and lowering to adjust for work while standing, sitting, or even on treadmill. Also has drawers for ample storage of any necessary office supplies.'
    },
    {
      furnSpace_id: studyRoom[0]._id,
      itemName: 'Desk Chair',
      price: 600,
      warrantyMonths: 4,
      description: 'A beautifully ergonomic chair designed for peak health along with productivity. This chair will improve posture and reduce back pain significantly compared to a standard office chair.'
    },
    {
      furnSpace_id: studyRoom[0]._id,
      itemName: 'Bookshelf',
      price: 650,
      warrantyMonths: 18,
      description: 'A modernized but classic bookshelf. Can hold countless books and decorative items. Contains several hidden compartments for secret storage. Height: 8ft'
    },
    {
      furnSpace_id: bedRoom[0]._id,
      itemName: 'Bed Frame',
      price: 750,
      warrantyMonths: 24,
      description: 'A sleek hardwood bedframe crafted with interlocking joints to ensure maximum stability and durability. Manufacturer claims it will last more than a lifetime.'
    },
    {
      furnSpace_id: bedRoom[0]._id,
      itemName: 'Dresser',
      price: 680,
      warrantyMonths: 24,
      description: 'A large sized dresser that should be able to fit an entire wardrobe within. Crafted from elegant hardwood with interlocked joints and reinforced drawers made to last a lifetime.'
    },
    {
      furnSpace_id: bedRoom[0]._id,
      itemName: 'Nightstand',
      price: 800,
      warrantyMonths: 16,
      description: 'A large and sturdy nightstand with a sizeable drawer and one hidden compartment. Crafted with unique woodworks on the exterior and metal hardware.'
    },
    {
      furnSpace_id: patioRoom[0]._id,
      itemName: 'Outdoor Table',
      price: 1500,
      warrantyMonths: 4,
      description: 'A heavy-duty table meant to fit in perfectly with any number of styles and surroundings while also withstanding the elements. Built with treated Ipe wood supported with reinforced weakpoints.'
    },
    {
      furnSpace_id: patioRoom[0]._id,
      itemName: 'Greenhouse',
      price: 900,
      warrantyMonths: 6,
      description: 'A futuristically designed greenhouse meant to provide a controlled growing environment for any number of plants ranging from edibles to ornamentals to exotic plants. This greenhouse is tested successfully against hurricane force winds. Size: 80sqft, Has water and electric hookups.'
    },
    {
      furnSpace_id: patioRoom[0]._id,
      itemName: 'Fire Table',
      price: 450,
      warrantyMonths: 6,
      description: `Dubbed "The best s'more roaster on the market" by Outdoor Homes Magazine. High quality fire table designed by former flame thrower engineers. This table runs on propane and will provide an adjustable flame that can rise up to 1.5 feet off the table.`
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