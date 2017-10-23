const router = require('express').Router();
const middleware = require('../middleware'); 

router.get('/', middleware.oxford);

module.exports = router;