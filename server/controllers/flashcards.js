const models = require('../models');

module.exports.insertFlashcard = (req, res) => {
  let flashcard = req.query.flashcard;
  models.insertFlashcard(flashcard, (err, result) => {
    if (err) {
      console.log('Error in controller ', err);
      res.send(404, err);
    } else {
      res.send(200, result);
    }
  })
}