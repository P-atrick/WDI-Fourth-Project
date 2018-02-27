const Meteorite = require('../models/meteorite');

function meteoritesIndex(req, res, next) {
  Meteorite
    .find()
    .exec()
    .then(meteorites => res.json(meteorites))
    .catch(next);
}

function meteoritesCreate(req, res, next) {
  Meteorite
    .create(req.body)
    .then(meteorite => res.status(201).json(meteorite))
    .catch(next);
}

function meteoritesShow(req, res, next) {
  Meteorite
    .findById(req.params.id)
    .exec()
    .then((meteorite) => {
      if (!meteorite) return res.notFound();
      res.json(meteorite);
    })
    .catch(next);
}

function meteoritesUpdate(req, res, next) {
  Meteorite
    .findById(req.params.id)
    .exec()
    .then((meteorite) => {
      if (!meteorite) return res.notFound();
      meteorite = Object.assign(meteorite, req.body);
      return meteorite.save();
    })
    .then(meteorite => res.json(meteorite))
    .catch(next);
}

function meteoritesDelete(req, res, next) {
  Meteorite
    .findById(req.params.id)
    .exec()
    .then((meteorite) => {
      if (!meteorite) return res.notFound();
      return meteorite.remove();
    })
    .then(() => res.status(204).end())
    .catch(next);
}

module.exports = {
  index: meteoritesIndex,
  create: meteoritesCreate,
  show: meteoritesShow,
  update: meteoritesUpdate,
  delete: meteoritesDelete
};
