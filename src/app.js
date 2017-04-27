'use strict';

import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import config from './common/config.json';
import dbUtil from './common/db-util';

let app = express();
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.get('/', (request, response) => {
  let getData = dbUtil.getData('buu:bakery:product:id:0512');
  getData.then((success) => {
    response.end(JSON.stringify(success.value));
  }).catch(error => {
    console.log('Caught Error :: ' + error);
  });
});
app.use(cors());
app.use(bodyParser());
app.listen(config.server.port, () => {
  console.log('Started server on '+config.server.port);
});