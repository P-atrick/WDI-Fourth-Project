const User = require('../models/user');
const Meteorite = require('../models/meteorite');

function usersShow(req, res, next) {
  User
    .findById(req.params.id)
    .exec()
    .then((user) => {
      if (!user) return res.notFound();
      res.json(user);
    })
    .catch(next);
}

function usersMeteorites(req, res, next) {
  Meteorite
    .find()
    .exec()
    .then(meteorites => res.json(meteorites))
    .catch(next);
}

function usersMeteoritesForSale(req, res, next) {
  Meteorite
    .find()
    .exec()
    .then(meteorites => res.json(meteorites))
    .catch(next);
}

module.exports = {
  show: usersShow,
  meteorites: usersMeteorites,
  sell: usersMeteoritesForSale
};
