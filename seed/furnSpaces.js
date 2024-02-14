const db = require('../db')
const { FurnSpace } = require('../models')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const furnSpaces = [
    {
        spaceName: 'Living Room',
        outdoor: false,
        description: 'The room where most of your time is spent. Can be used for lounging, family-time, and maybe even casual eating.',
        spaceImgUrl:'https://hips.hearstapps.com/hmg-prod/images/461-w-montecito-ave-virtuallyherestudios-com-13-646eaa638cb69.jpg'
    },
    {
      spaceName: 'Dining Room',
      outdoor: false,
      description: 'The room where most eating occurs. Can be used for meals, gatherings, or games.',
      spaceImgUrl:'https://www.decorilla.com/online-decorating/wp-content/uploads/2023/05/Modern-dining-room-ideas-and-designs.jpg'
    },
    {
      spaceName: 'Study Room',
      outdoor: false,
      description: 'The room where most formal tasks are done. Can be used for a variety of activities such as work, studying, reading, or important phone calls.',
      spaceImgUrl: 'https://media.designcafe.com/wp-content/uploads/2021/04/23193918/study-room-decoration-ideas-for-your-home.jpg'
    },
    {
      spaceName: 'Bedroom',
      outdoor: false,
      description: 'The room where sleeping occurs. Can be used for quiet activities such as reading, studying, or napping.',
      spaceImgUrl:'https://www.decorilla.com/online-decorating/wp-content/uploads/2022/07/Organic-modern-bedroom-House-and-Hold.jpg'
    },
    {
      spaceName: 'Patio',
      outdoor: true,
      description: 'The room that is outdoors but usually secluded from neighbors. Can be used for lounging, gatherings, or outdoor activities such as gardening.',
      spaceImgUrl:'https://unilock.com/wp-content/uploads/2022/08/Blog-BHS_LDS_UCP_MI_Limpari_10272118-1300x649.jpg'
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