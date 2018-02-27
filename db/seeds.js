const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');

const { db, env } = require('../config/environment');
const Meteorite = require('../models/meteorite');

Meteorite.collection.drop();

const meteoriteData = [{
  weight: 10,
  height: 10,
  length: 10,
  width: 10,
  location: 'Test',
  type: 'Stony-Iron',
  found: 2016,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_B1offcdlkKIfCNzCP19zDmZhh1d530IybQq3V6TRHofuy6yx'
}];

mongoose.connect(db[env])
  .then(() => Meteorite.create(meteoriteData))
  .then(meteorites => console.log(`${meteorites.length} meteorites created!`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
