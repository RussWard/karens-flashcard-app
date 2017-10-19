const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017/karens-flashcard-app';

require('dotenv').config();

const IP = process.env.IP || 'localhost';
const PORT = process.env.PORT || '3000';

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../dist')));
app.use('/oxford', routes.oxford);
app.use('/webster', routes.webster);


const insertDocuments = (db, callback) => {
  let collection = db.collection('documents');
  collection.insertMany([
    {a : 1}, {a : 2}, {a : 3}
  ], (err, result) =>{
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log('inserted 3 documents into the collection');
    callback(result);
  })
}

const findDocuments = (db, callback) => {
  let collection = db.collection('documents');
  collection.find({}).toArray((err, docs) => {
    assert.equal(err, null);
    console.log('found the following records');
    console.log(docs);
    callback(docs);
  })
}

MongoClient.connect(url, (err, db) => {
  assert.equal(null, err);
  console.log('Connected successfully to server');
  findDocuments(db, () => {
    db.close();
  })
});

app.listen(PORT, () => {
  console.log('listening on port ', PORT);
});