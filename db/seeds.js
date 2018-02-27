const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');

const { db, env } = require('../config/environment');
const Meteorite = require('../models/meteorite');

Meteorite.collection.drop();

const meteoriteData = [{
  name: 'Test meteorite',
  weight: 10,
  height: 10,
  length: 10,
  width: 10,
  location: 'France coords',
  type: 'Stony-Iron',
  found: 2016,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_B1offcdlkKIfCNzCP19zDmZhh1d530IybQq3V6TRHofuy6yx'
}, {
  name: 'Test meteorite 2',
  weight: 30,
  height: 30,
  length: 30,
  width: 30,
  location: 'Greece coords',
  type: 'Iron',
  found: 2011,
  image: 'https://i.kinja-img.com/gawker-media/image/upload/s--gFIEYYTm--/c_scale,fl_progressive,q_80,w_800/18oa0m4vn3qzkjpg.jpg'
}];

mongoose.connect(db[env])
  .then(() => Meteorite.create(meteoriteData))
  .then(meteorites => console.log(`${meteorites.length} meteorites created!`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
