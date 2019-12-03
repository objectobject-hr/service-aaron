const router = require('express').Router();
const controllers = require('./controllers.js');

router
  .route('/products')
  .get(controllers.getAll)
  .post(controllers.postOne)

module.exports = router;