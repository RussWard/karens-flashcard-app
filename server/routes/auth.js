const router = require('express').Router();
const middleware = require('../middleware');

router.route('/')
  .get(middleware.auth.verify, (req, res) => {
    res.render('index.ejs');
  });

  module.exports = router;
  