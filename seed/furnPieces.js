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
      seller: 'Adam Allen',
      furnSpace_id: livingRoom[0]._id,
      itemName: 'Couch',
      price: 1350,
      warrantyMonths: 8,
      description: 'A nice sectional L-shaped couch that is perfect for all your lounging needs whether sitting or laying down. Water-resistant leather outer with a sturdy steel frame.',
      pieceImgUrl:'https://nyfurnitureoutlets.com/products/light-grey-top-grain-leather-sectional-sofa-set-3p-908-esf-contemporary-modern/original/244663-1-042758137701.jpg'
    },
    {
      seller: 'Ryan Peterson',
      furnSpace_id: livingRoom[0]._id,
      itemName: 'TV Stand',
      price: 700,
      warrantyMonths: 12,
      description: 'A beautiful hardwood TV stand with a delicately crafted woodwork exterior. Perfect for mounting a TV above, but also has ample storage space within.',
      pieceImgUrl:'https://www.totallyfurniture.com/pub/media/catalog/product/cache/c737bc2bb56453f5ad2db0b642720541/w/5/w58iv3dca_1.jpg'
    },
    {
      seller: 'Christie Adams',
      furnSpace_id: livingRoom[0]._id,
      itemName: 'Coffee Table',
      price: 500,
      warrantyMonths: 6,
      description: 'A simply designed coffee table formed with a combination of hardwood and premium metal materials. Could be used for eating, paperwork, games, and even as a informal footrest.',
      pieceImgUrl:'https://wwmake.com/cdn/shop/products/DSC_9494.jpg?v=1628193312'
    },
    {
      seller: 'Gina Longwood',
      furnSpace_id: diningRoom[0]._id,
      itemName: 'Dining Table',
      price: 680,
      warrantyMonths: 4,
      description: 'An elegant but not overly formal dining table that is perfect for meals, gatherings, and games. Made from elegant hardwood with hidden metal reinforcements in all weakpoints.',
      pieceImgUrl:'https://carpenterjames.com/cdn/shop/files/Noelle_white_oak_dining_table_Darla_dining_lifestyle_1_1200x1200.jpg?v=1686840674'
    },
    {
      seller: 'William Johnson',
      furnSpace_id: diningRoom[0]._id,
      itemName: 'Dining Chair',
      price: 180,
      warrantyMonths: 4,
      description: 'A sturdy chair with a very nice balance of comfort, support, and class. Made from elegant hardwood with hidden metal reinforcements in all weakpoints.',
      pieceImgUrl:'https://us.audocph.com/cdn/shop/products/MENU_Ready_Dining_Chair_Harbour_Column_Dining_Table_Umanoff_Candle_Holder.jpg?v=1650249411'
    },
    {
      seller: 'May Byrd',
      furnSpace_id: diningRoom[0]._id,
      itemName: 'Buffet',
      price: 1000,
      warrantyMonths: 12,
      description: 'An elegant sideboard/buffet table decorated with elegant woodworks. Can be used for serving food, storing fine china, or even double as a liquor cabinet.',
      pieceImgUrl:'https://i.etsystatic.com/27136853/r/il/ee6a82/4637701108/il_fullxfull.4637701108_pyb5.jpg'
    },
    {
      seller: 'Sabrina Ng',
      furnSpace_id: studyRoom[0]._id,
      itemName: 'Desk',
      price: 900,
      warrantyMonths: 15,
      description: 'A high tech solution to the outdated design of a classic desk. Features automatic raising and lowering to adjust for work while standing, sitting, or even on treadmill. Also has drawers for ample storage of any necessary office supplies.',
      pieceImgUrl:'https://www.ozstudydesks.com.au/cdn/shop/products/1_b26f10bf-b82b-4c00-b9e1-33f815c973b6.jpg?v=1691455782&width=1800'
    },
    {
      seller: 'Stephanie Cancel',
      furnSpace_id: studyRoom[0]._id,
      itemName: 'Desk Chair',
      price: 600,
      warrantyMonths: 4,
      description: 'A beautifully ergonomic chair designed for peak health along with productivity. This chair will improve posture and reduce back pain significantly compared to a standard office chair.',
      pieceImgUrl:'https://m.media-amazon.com/images/I/71NsmczuYEL.jpg'
    },
    {
      seller: 'Jacob Liu',
      furnSpace_id: studyRoom[0]._id,
      itemName: 'Bookshelf',
      price: 650,
      warrantyMonths: 18,
      description: 'A modernized but classic bookshelf. Can hold countless books and decorative items. Contains several hidden compartments for secret storage. Height: 8ft',
      pieceImgUrl:'https://s2982.pcdn.co/wp-content/uploads/2022/11/rotating_bookshelf.jpg.optimal.jpg'
    },
    {
      seller: 'Rahat Ahmed',
      furnSpace_id: bedRoom[0]._id,
      itemName: 'Bed Frame',
      price: 750,
      warrantyMonths: 24,
      description: 'A sleek hardwood bedframe crafted with interlocking joints to ensure maximum stability and durability. Manufacturer claims it will last more than a lifetime.',
      pieceImgUrl:'https://www.sierralivingconcepts.com/images/thumbs/0394887_modern-simplicity-solid-wood-custom-platform-bed-frame.jpeg'
    },
    {
      seller: 'Cody Cadena',
      furnSpace_id: bedRoom[0]._id,
      itemName: 'Dresser',
      price: 680,
      warrantyMonths: 24,
      description: 'A large sized dresser that should be able to fit an entire wardrobe within. Crafted from elegant hardwood with interlocked joints and reinforced drawers made to last a lifetime.',
      pieceImgUrl:'https://www.sierralivingconcepts.com/images/thumbs/0397255_modern-simplicity-solid-wood-bedroom-dresser-chest-with-5-drawers.jpeg'
    },
    {
      seller: 'Christiano Renaldo',
      furnSpace_id: bedRoom[0]._id,
      itemName: 'Nightstand',
      price: 800,
      warrantyMonths: 16,
      description: 'A large and sturdy nightstand with a sizeable drawer and one hidden compartment. Crafted with unique woodworks on the exterior and metal hardware.',
      pieceImgUrl:'https://www.sierralivingconcepts.com/images/thumbs/0396020_modern-simplicity-box-style-solid-wood-nightstand-with-drawers.jpeg'
    },
    {
      seller: 'Abby Woods',
      furnSpace_id: patioRoom[0]._id,
      itemName: 'Outdoor Table',
      price: 1500,
      warrantyMonths: 4,
      description: 'A heavy-duty table meant to fit in perfectly with any number of styles and surroundings while also withstanding the elements. Built with treated Ipe wood supported with reinforced weakpoints.',
      pieceImgUrl:'https://i.etsystatic.com/10372732/r/il/e45f70/3898271761/il_570xN.3898271761_7sw1.jpg'
    },
    {
      seller: 'Emma Ulyses',
      furnSpace_id: patioRoom[0]._id,
      itemName: 'Greenhouse',
      price: 900,
      warrantyMonths: 6,
      description: 'A futuristically designed greenhouse meant to provide a controlled growing environment for any number of plants ranging from edibles to ornamentals to exotic plants. This greenhouse is tested successfully against hurricane force winds. Size: 80sqft, Has water and electric hookups.',
      pieceImgUrl:'https://cdn.mos.cms.futurecdn.net/rkcPQf9b9Uq6EQDNYhkKod-1200-80.jpg'
    },
    {
      seller: 'Richard Branson',
      furnSpace_id: patioRoom[0]._id,
      itemName: 'Fire Table',
      price: 450,
      warrantyMonths: 6,
      description: `Dubbed "The best s'more roaster on the market" by Outdoor Homes Magazine. High quality fire table designed by former flame thrower engineers. This table runs on propane and will provide an adjustable flame that can rise up to 1.5 feet off the table.`,
      pieceImgUrl:'https://images.thdstatic.com/productImages/0c270d34-839f-4f3e-8558-cdffbcf0bae0/svn/black-heatmaxx-gas-fire-pits-srgf11666-64_1000.jpg'
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