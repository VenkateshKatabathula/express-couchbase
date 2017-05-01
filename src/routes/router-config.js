'use strict';
import productRouteHandler from './product-route-handler';

import express from 'express';
let router = express.Router();

router.use('/', productRouteHandler);
export default router;