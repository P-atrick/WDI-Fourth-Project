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
        name: 'Gibeon Slice',
        weight: 2220,
        height: 28.1,
        length: 22.1,
        width: 0.5,
        location: 'Great Nama Land, Namibia',
        type: 'Iron',
        found: '2004-11-07',
        forSale: 'yes',
        price: 8500,
        image: 'https://pccdn.perfectchannel.com/christies/live/images/item/TSN15410/6072311/large/ECO_15410_0009.jpg',
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
        name: 'Seymchan Sphere',
        weight: 434,
        height: 5.3,
        length: 5.3,
        width: 5.3,
        location: 'Magadan District, Russia',
        type: 'Pallasite',
        found: '1967-06-01',
        price: 92500,
        forSale: 'yes',
        image: 'https://www.christies.com/img/LotImages/2016/CSK/2016_CSK_12341_0035_000(seymchan_sphere_an_extraterrestrial_crystal_ball_pallasite_pmg_magadan).jpg',
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
        name: 'Muonionalusta Meteorite ',
        weight: 3530,
        height: 8.9,
        length: 8.9,
        width: 8.9,
        location: 'Kiruna, Sweden',
        type: 'Iron',
        found: '1906-06-15',
        price: 30000,
        forSale: 'yes',
        image: 'https://www.christies.com/img/LotImages/2016/CSK/2016_CSK_12341_0009_000(muonionalusta_meteorite_crystal_ball_dramatizing_the_crystalline_struc).jpg',
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
        name: 'Canyon Diablo',
        weight: 31900,
        height: 34.4,
        length: 20.3,
        width: 18.4,
        location: 'Coconino County, Arizona',
        type: 'Iron',
        found: '1891-01-01',
        price: 171000,
        forSale: 'no',
        image: 'https://www.christies.com/img/LotImages/2018/NYR/2018_NYR_16596_0041_000(matchless_canyon_diablo_meteorite_natural_sculpture_from_outer_space_i).jpg',
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
        name: 'Imilac Meteorite',
        weight: 227.9,
        height: 16.5,
        length: 13.9,
        width: 0.3,
        location: 'Atacama Desert, Chile',
        type: 'Stony-Iron',
        found: '1822-04-17',
        price: 8100,
        forSale: 'yes',
        image: 'https://www.christies.com/img/LotImages/2018/NYR/2018_NYR_16596_0022_000(a_complete_slide_of_imilac_meteorite_extraterrestrial_peridot_stony_ir).jpg',
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
        name: 'Seymchan End Piece',
        weight: 18110,
        height: 25.7,
        length: 22.9,
        width: 11.9,
        location: 'Magadan District, Russia',
        type: 'Pallasite',
        found: '1967-06-01',
        price: 18000,
        forSale: 'no',
        image: 'https://pccdn.perfectchannel.com/christies/live/images/item/TSN15410/6072335/large/ECO_15410_0033.jpg',
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
