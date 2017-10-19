
require('dotenv').config();
const Dictionary = require('oxford-dictionary-api');
const app_id = process.env.OXFORD_ID;
const app_key = process.env.OXFORD_KEY;

const dict = new Dictionary(app_id, app_key);

module.exports = (req, res) => {
  console.log('APP ID=======> ', app_id);
  dict.find(req.query.word, (err, data) => {
    if (err) {
      console.log('Error in middleware ', err);
      res.send(404, err);
    } else {
      res.send(200, data)
    }
  }); 
}