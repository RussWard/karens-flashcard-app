const router = require('express').Router();
const middleware = require('../middleware'); 

router.get('/', middleware.webster);

module.exports = router;