const router = require('express').Router();
const meteorites = require('../controllers/meteorites');
const users = require('../controllers/users');
const auth   = require('../controllers/auth');
const secureRoute = require('../lib/secureRoute');

router.route('/meteorites')
  .get(meteorites.index)
  .post(secureRoute, meteorites.create);

router.route('/meteorites/sale')
  .get(meteorites.sale);

router.route('/meteorites/:id')
  .get(meteorites.show)
  .put(secureRoute, meteorites.update)
  .put(secureRoute, meteorites.sell)
  .put(secureRoute, meteorites.remove)
  .delete(secureRoute, meteorites.delete);

router.route('/meteorites/:id/comments')
  .post(secureRoute, meteorites.createComment);

router.route('/meteorites/:id/comments/:commentId')
  .delete(meteorites.deleteComment);

router.route('/users/:id')
  .get(secureRoute, users.show);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.all('/*', (req, res) => res.notFound());

module.exports = router;
