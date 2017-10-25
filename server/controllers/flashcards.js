const models = require('../models');
const uuidv1 = require('uuid/v1');

module.exports.insertFlashcard = (req, res) => {
  let flashcard = req.body;
  flashcard.cardId = uuidv1();
  models.flashcards.insertFlashcard(flashcard, (err, result) => {
    if (err) {
      console.log('Error in controller ', err);
      res.send(404, err);
    } else {
      res.send(200, result);
    }
  })
}

module.exports.getFlashcards = (req, res) => {
  models.flashcards.getFlashcards((err, result) => {
    if (err) {
      console.log('Error in Controller ', err);
      res.send(404, err);
    } else {
      res.send(200, result);
    }
  })
}

module.exports.deleteFlashcard = (req, res) => {
  models.flashcards.deleteFlashcard(req.query.cardId, (err, result) => {
    if (err) {
      console.log('Error in Controller ', err);
      res.send(404, err);
    } else {
      res.send(200, result);
    }
  })
}