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
  price: 300,
  image: 'https://i.kinja-img.com/gawker-media/image/upload/s--gFIEYYTm--/c_scale,fl_progressive,q_80,w_800/18oa0m4vn3qzkjpg.jpg'
}, {
  name: 'Test meteorite 3',
  weight: 70,
  height: 10,
  length: 10,
  width: 10,
  location: 'Spain coords',
  type: 'Iron',
  found: 2011,
  price: 150,
  image: 'https://thumbs-prod.si-cdn.com/FnlEMNrkOvgKMFUTTvrM8qND4fY=/800x600/filters:no_upscale()/https://public-media.smithsonianmag.com/filer/5e/28/5e28245b-fd6a-419d-8eef-e8c34853c83a/sikhotealinmeteorite.jpg'
}, {
  name: 'Test meteorite 4',
  weight: 1500,
  height: 40,
  length: 40,
  width: 40,
  location: 'Portugal coords',
  type: 'Iron',
  found: 2011,
  price: 5600,
  image: 'http://cphpost.dk/wp-content/uploads/2016/02/ChingaMeteorite-630x390.jpg'
}, {
  name: 'Test meteorite 5',
  weight: 30,
  height: 30,
  length: 30,
  width: 30,
  location: 'Russia coords',
  type: 'Iron',
  found: 2011,
  price: 800,
  image: 'http://www.abc.net.au/news/image/8830030-3x2-700x467.jpg'
}, {
  name: 'Test meteorite 6',
  weight: 460,
  height: 60,
  length: 60,
  width: 60,
  location: 'China coords',
  type: 'Stone',
  found: 2011,
  price: 1600,
  image: 'http://www.pari.edu/wp-content/uploads/2016/05/SeymchanPallasiteMeteoriteSliceRussia-web.jpg'
}];

mongoose.connect(db[env])
  .then(() => Meteorite.create(meteoriteData))
  .then(meteorites => console.log(`${meteorites.length} meteorites created!`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
