'use es6';

const express = require('express');
const app = express();
const credentials = require('./credentials');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.post('/', (req, res) => {
  console.log(req.body);
  var message = credentials;
  message.subject = 'New Comment';
  message.text = 'Whatever the comment is';
  // let send = require('gmail-send')(message);
  res.status(200);
});


app.listen(8002, 'localhost', () => {
  console.log('Listening on port 8002');
});
