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
  message.subject = 'New Comment from zhehao-lu.me';
  message.text = req.body.text;
  let send = require('gmail-send')(message, (err, res) => {
    console.log(err, res);
  });
  res.status(200).send();
});


app.listen(8002, 'localhost', () => {
  console.log('Listening on port 8002');
});
