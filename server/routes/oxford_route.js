const express = require('express');
const router = express.Router();
const middleware = require('../middleware'); 

router.get('/', middleware.oxford);

module.exports = router;