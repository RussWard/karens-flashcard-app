const router = require('express').Router();
const controller = require('../controllers');

router.post('/createCard', controller.flashcards.insertFlashcard);

module.exports = router;