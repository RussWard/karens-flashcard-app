const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
const routes = require('./routes');

require('dotenv').config();

const IP = process.env.IP || 'localhost';
const PORT = process.env.PORT || '3000';

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', routes.auth);
app.use('/oxford', routes.oxford);
app.use('/webster', routes.webster);
app.use('/flashcards', routes.flashcards);




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

app.listen(PORT, () => {
  console.log('listening on port ', PORT);
});