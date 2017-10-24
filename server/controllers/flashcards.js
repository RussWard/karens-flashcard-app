const models = require('../models');

module.exports.insertFlashcard = (req, res) => {
  let flashcard = req.body;
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