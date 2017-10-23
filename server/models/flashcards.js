const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017/karens-flashcard-app';

const insert = (flashcard, db, callback) => {
  let collection = db.collection('documents');
  collection.insertOne(flashcard, (err, result) =>{
    if (err) {
      console.log('Error inserting document ', err);
    } else {
      console.log('Document inserted ');
      callback(result);
    }
  })
}


module.exports.insertFlashcard = (card) => {
  MongoClient.connect(url, (err, db) => {
    if (err) {
      console.log('Error connecting to db ', err);
    } else {
      insert(card, db, () => {
        db.close();
      })
    }
  })
}













// MongoClient.connect(url, (err, db) => {
//   assert.equal(null, err);
//   console.log('Connected successfully to server');
//   findDocuments(db, () => {
//     dropCollection(db, () => {
//       db.close();
//     })
//   })
// });