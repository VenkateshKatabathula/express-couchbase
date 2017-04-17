'use strict';
let dbConnection = require('./src/common/dbConnection'),
  express = require('express'),
  app = express(),
  dbUtil = require('./src/common/dbUtil');

app.get('/', (request, response) => {
  let getData = dbUtil.getData('buu:bakery:product:id:0512');
  getData.then((success) => {
    console.log('response : ' + JSON.stringify(success));
    response.end(JSON.stringify(success.value));
  }).catch(error => {
    console.log('Caught Error :: ' + error);
  });
});
app.listen(9003, () => {
  console.log('Started server on 9003');
});