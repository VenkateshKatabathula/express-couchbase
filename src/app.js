'use strict';
import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';

import config from './common/config.json';
import logger from './common/logger';
import routeConfig from './routes/router-config';

let app = express();

// Using body-parser for evaluating json requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Setting up the default headers which we receive when a request comes from a browser
app.use(function (req, res, next) {
  logger.debug('Received Request' + req.originalUrl);
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
// Enabling cors for above headers
app.use(cors());

app.use('/', (request, response, next) => {
  logger.debug('Received Request on :: ' + request.originalUrl);
  next();
});

app.use('/resources', routeConfig);
// Starting the server on configured port
app.listen(config.server.port, () => {
  logger.debug('Started server on ' + config.server.port);
});
