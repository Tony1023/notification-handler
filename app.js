'use es6';

const express = require('express');
const app = express();
const credentials = require('./credentials');

app.post('/', (req, res) => {
  console.log('req');
  var message = credentials;
  message.subject = 'New Comment';
  message.text = 'Whatever the comment is';
  // let send = require('gmail-send')(message);
  res.status(200);
});


app.listen(8002, 'localhost', () => {
  console.log('Listening on port 8002');
});
