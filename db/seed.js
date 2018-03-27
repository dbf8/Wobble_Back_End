const Website = require('../models/Websites')

Website.remove({}).then(() => {
  Promise.all([
    Website.create({
      title: 'STUMBLEUPON',
      website: 'www.stumbleupon.com', // too meta?
      username: 'Admin'
    })
  ]).then(() => {
    console.log('done')
    process.exit()
  })
})
