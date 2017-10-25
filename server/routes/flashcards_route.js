const router = require('express').Router();
const controller = require('../controllers');

router.post('/createCard', controller.flashcards.insertFlashcard);
router.get('/getFlashcards', controller.flashcards.getFlashcards);
router.delete('/deleteFlashcard', controller.flashcards.deleteFlashcard)

module.exports = router;