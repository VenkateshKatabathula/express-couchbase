import express from 'express';

import dbUtil from './../common/db-util';
import logger from './../common/logger';

let router = express.Router();
router.get('/', (request, response, next) => {
  logger.log("Received request to get all products :: ");
  let queryString = "Select * from bakery-db where product_id like buu:bakery:product:id%";
  dbUtil.queryDb(queryString)
    .then(dbResponse => {
      response = {
        data: dbResponse.data,
        success: true
      };
      next();
    })
    .catch(error => {
      response = {
        success: false,
        message: error
      }
    });
  logger.log(response);
});

router.post('/products', (request, response) => {
  logger.log("response :: " + response);
});
export default router;
