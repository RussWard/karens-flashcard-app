const router = require('express').Router();
const controller = require('../controllers');

router.post('/createCard', controller.flashcards.insertFlashcard);
router.get('/getFlashcards', controller.flashcards.getFlashcards);

module.exports = router;