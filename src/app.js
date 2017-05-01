'use strict';
import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';

import config from './common/config.json';
import logger from './common/logger';
import ProductRouteHandler from './routes/router-config';

let app = express();
// Setting up the default headers which we receive when a request comes from a browser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(function (req, res, next) {
  logger.log("Received Request"+req.originalUrl);
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
// Enabling cors for above headers
app.use(cors());
// Using body-parser for evaluating json requests


app.use('/', (request, response,next) => {
  // let getData = dbUtil.getData('buu:bakery:product:id:0512');
  // getData.then((success) => {
  //     response.end(JSON.stringify(success.value));
  //   })
  //   .catch(error => {
  //     logger.log('Caught Error :: ' + error);
  //   });
  logger.log("Received Request on :: "+request.originalUrl);
  next();
});

app.use('/resouces', ProductRouteHandler);
// Starting the server on configured port
app.listen(config.server.port, () => {
  logger.log('Started server on ' + config.server.port);
});
