import productRouteHandler from './product-route-handler';

import express from 'express';

let app = express();
export default ( request, response, next ) => {
  app.get( '/', productRouteHandler );
  next();
}
