const Meteorite = require('../models/meteorite');

function meteoritesIndex(req, res, next) {
  Meteorite
    .find()
    .exec()
    .then(meteorites => res.json(meteorites))
    .catch(next);
}

function meteoritesSale(req, res, next) {
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
    .populate('comments.createdBy')
    .exec()
    .then((meteorite) => {
      if (!meteorite) return res.notFound();
      res.json(meteorite);
    })
    .catch(next);
}

function meteoritesUpdate(req, res, next) {
  delete req.body.createdBy;


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

function createCommentRoute(req, res, next) {
  req.body.createdBy = req.currentUser;

  Meteorite
    .findById(req.params.id)
    .exec()
    .then((meteorite) => {
      if(!meteorite) return res.notFound();

      const comment = meteorite.comments.create(req.body);
      meteorite.comments.push(comment);
      return meteorite.save();
    })
    .then(meteorite => res.json(meteorite))
    .catch(next);
}

function deleteCommentRoute(req, res, next) {
  Meteorite
    .findById(req.params.id)
    .exec()
    .then((meteorite) => {
      if(!meteorite) return res.notFound();

      const comment = meteorite.comments.id(req.params.commentId);
      comment.remove();
      meteorite.save();
      return res.status(204).json(meteorite.comments);
    })
    .catch(next);
}

module.exports = {
  index: meteoritesIndex,
  sale: meteoritesSale,
  create: meteoritesCreate,
  show: meteoritesShow,
  update: meteoritesUpdate,
  delete: meteoritesDelete,
  createComment: createCommentRoute,
  deleteComment: deleteCommentRoute
};
