const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');

const { db, env } = require('../config/environment');
const Meteorite = require('../models/meteorite');
const User = require('../models/user');

mongoose.connect(db[env]);

User.collection.drop();
Meteorite.collection.drop();

User
  .create([
    {
      username: 'Pat',
      email: 'pat@pat.com',
      password: 'p',
      passwordConfirmation: 'p'
    },
    {
      username: 'Its Raneing',
      email: 'rane@rane.com',
      password: 'p',
      passwordConfirmation: 'p'
    },
    {
      username: 'Kenny',
      email: 'kenny@kenny.com',
      password: 'p',
      passwordConfirmation: 'p'
    }
  ])
  .then(users => {
    console.log(`${users.length} users have been added to the db.`);

    return Meteorite.create([
      {
        name: 'Test rock',
        weight: 10,
        height: 10,
        length: 10,
        width: 10,
        location: 'France coords',
        type: 'Stony-Iron',
        found: '2004-11-07',
        forSale: 'yes',
        price: 1000,
        image: 'http://www.meteorite-recon.com/wp-content/uploads/2015/10/Muoninalusta-iron-meteorite-800x600.jpg',
        createdBy: users[0].id,
        comments: [
          {
            content: 'Comment 1',
            createdBy: users[1].id
          }, {
            content: 'Comment 2',
            createdBy: users[2].id
          }
        ]
      }, {
        name: 'Test meteorite 2',
        weight: 30,
        height: 30,
        length: 30,
        width: 30,
        location: 'Greece coords',
        type: 'Iron',
        found: '1976-06-17',
        price: 300,
        forSale: 'yes',
        image: 'https://i.kinja-img.com/gawker-media/image/upload/s--gFIEYYTm--/c_scale,fl_progressive,q_80,w_800/18oa0m4vn3qzkjpg.jpg',
        createdBy: users[0].id,
        comments: [
          {
            content: 'Comment 1',
            createdBy: users[1].id
          }, {
            content: 'Comment 2',
            createdBy: users[2].id
          }
        ]
      }, {
        name: 'Test meteorite 3',
        weight: 70,
        height: 10,
        length: 10,
        width: 10,
        location: 'Spain coords',
        type: 'Iron',
        found: 2017-08-25,
        price: 150,
        forSale: 'yes',
        image: 'https://thumbs-prod.si-cdn.com/FnlEMNrkOvgKMFUTTvrM8qND4fY=/800x600/filters:no_upscale()/https://public-media.smithsonianmag.com/filer/5e/28/5e28245b-fd6a-419d-8eef-e8c34853c83a/sikhotealinmeteorite.jpg',
        createdBy: users[1].id,
        comments: [
          {
            content: 'Comment 1',
            createdBy: users[1].id
          }, {
            content: 'Comment 2',
            createdBy: users[2].id
          }
        ]
      }, {
        name: 'Test meteorite 4',
        weight: 1500,
        height: 40,
        length: 40,
        width: 40,
        location: 'Portugal coords',
        type: 'Iron',
        found: 2017-04-03,
        price: 5600,
        forSale: 'no',
        image: 'http://static.gigapan.org/gigapans0/198296/images/198296-574x360.jpg',
        createdBy: users[2].id,
        comments: [
          {
            content: 'Comment 1',
            createdBy: users[1].id
          }, {
            content: 'Comment 2',
            createdBy: users[2].id
          }
        ]
      }, {
        name: 'Test meteorite 5',
        weight: 30,
        height: 30,
        length: 30,
        width: 30,
        location: 'Russia coords',
        type: 'Iron',
        found: 2018-01-17,
        price: 800,
        forSale: 'yes',
        image: 'http://www.abc.net.au/news/image/8830030-3x2-700x467.jpg',
        createdBy: users[2].id,
        comments: [
          {
            content: 'Comment 1',
            createdBy: users[1].id
          }, {
            content: 'Comment 2',
            createdBy: users[2].id
          }
        ]
      }, {
        name: 'Test meteorite 6',
        weight: 460,
        height: 60,
        length: 60,
        width: 60,
        location: 'China coords',
        type: 'Stone',
        found: 2018-02-19,
        price: 1600,
        forSale: 'no',
        image: 'http://www.pari.edu/wp-content/uploads/2016/05/SeymchanPallasiteMeteoriteSliceRussia-web.jpg',
        createdBy: users[2].id,
        comments: [
          {
            content: 'Comment 1',
            createdBy: users[1].id
          }, {
            content: 'Comment 2',
            createdBy: users[2].id
          }
        ]
      }
    ]);
  })
  .then(meteorites => {
    console.log(`${meteorites.length} meteorites were added to the db.`);
  })
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
