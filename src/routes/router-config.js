'use strict';
import productRouteHandler from './product-route-handler';

import express from 'express';
let router = express.Router();

router.use('/', productRouteHandler);
export default router;

/*
 export default (request, response) => {
 /!*app.get('/', (request, response) => {
 logger.info('received request ::: ' + request.originalUrl);
 response = {success: true};
 logger.debug(response);

 });*!/
 router.get('/', productRouteHandler);
 }
 */
