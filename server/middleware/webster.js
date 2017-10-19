require('dotenv').config();
const dictionary = require('mw-dict').CollegiateDictionary;

const dict = new dictionary(process.env.WEBSTER_KEY);

module.exports = (req, res) => {
  dict.lookup(req.query.word)
    .then(data => {
      res.send(200, data);
    })
    .catch(err => {
      res.send(404, err);
    })
}