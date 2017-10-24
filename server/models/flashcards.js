const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = process.env.MONGODB_URI;

module.exports.getFlashcards = (cb) => {
  MongoClient.connect(url, (err, db) => {
    if (err) {
      console.log('Error connecting to db ', err);
    } else {
      db.collection('flashcards').find({}).toArray((err, result) => {
        if (err) {
          console.log('ERROR IN MODEL ======> ', err)
          cb(err, null);
        } else {
          cb(null, result);
        }
      })
    }
  })
}

module.exports.insertFlashcard = (card, cb) => {
  MongoClient.connect(url, (err, db) => {
    if (err) {
      console.log('Error connecting to db ', err);
    } else {
      db.collection('flashcards').insertOne(card, (err, result) => {
        if (err) {
          console.log('ERROR INSERTING DOCUMENT =====> ', err);
          cb(err, null);
        } else {
          console.log('document inserted');
          cb(null, result);
        }
      })
    }
  })
}
