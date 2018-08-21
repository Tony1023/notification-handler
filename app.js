'use es6';

const express = require('express');
const path = require('path');
const app = express();

app.post('/', (req, res) => {

});

app.listen(8002, 'localhost', () => {
  console.log('Listening on port 8002');
});
