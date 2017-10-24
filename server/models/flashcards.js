const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017/karens-flashcard-app';

// const insert = (flashcard, db, callback) => {
//   let collection = db.collection('documents');
//   collection.insertOne(flashcard, (err, result) =>{
//     if (err) {
//       console.log('Error inserting document ', err);
//     } else {
//       console.log('Document inserted ');
//       callback(result);
//     }
//   })
// }

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
      // insert(card, db, () => {
      //   db.close();
      // })
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