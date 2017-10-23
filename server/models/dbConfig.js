// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');
// const url = 'mongodb://localhost:27017/karens-flashcard-app';

// const insertDocuments = (db, callback) => {
//   let collection = db.collection('documents');
//   collection.insertMany([
//     {a : 1}, {a : 2}, {a : 3}
//   ], (err, result) =>{
//     assert.equal(err, null);
//     assert.equal(3, result.result.n);
//     assert.equal(3, result.ops.length);
//     console.log('inserted 3 documents into the collection');
//     callback(result);
//   })
// }

// const findDocuments = (db, callback) => {
//   let collection = db.collection('documents');
//   collection.find({}).toArray((err, docs) => {
//     assert.equal(err, null);
//     console.log('found the following records');
//     console.log(docs);
//     callback(docs);
//   })
// }

// const dropCollection = (db, callback) => {
//   let collection = db.collection('documents');
//   collection.drop((err, delOkay) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log('collection dropped');
//     }
//   })
// }

// MongoClient.connect(url, (err, db) => {
//   assert.equal(null, err);
//   console.log('Connected successfully to server');
//   findDocuments(db, () => {
//     dropCollection(db, () => {
//       db.close();
//     })
//   })
// });

// module.exports = MongoClient.connect(url, cb);
