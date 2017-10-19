const express = require('express');
const router = express.Router();
const middleware = require('../middleware'); 

router.get('/', middleware.webster);

module.exports = router;