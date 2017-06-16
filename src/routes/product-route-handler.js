import express from "express";
/*import { N1qlQuery }from 'couchbase';

 import dbUtil from './../common/db-util';
 import logger from './../common/logger';
 import { couchbase } from './../common/config.json';*/

let router = express.Router();
/*let bucket = `${couchbase.bucketName}`;
 router.get('/products', (request, response) => {
 logger.debug('Received request to get all products :: ' + request.originalUrl);
 let queryString = 'Select * from ' + bucket + ' where product_id like \'buu:bakery:product:id%\'';
 logger.info('query fired :: ' + queryString);
 dbUtil.queryDb(N1qlQuery.fromString(queryString))
 .then(dbResponse => {
 response.json({
 data: dbResponse,
 success: true
 });
 })
 .catch(error => {
 logger.debug('Error :: ' + error);
 response.json({
 success: false,
 message: error
 });
 });
 });*/
router.get('/', (request, response) => {
    let res = require('./../common/temp.json');
    //console.log(res);
    response.json({
        data: res,
        success: true
    });
});
/*router.post('/products', (request, response) => {
 response = {success: true};
 logger.debug('response :: ' + response);
 });

 router.delete('/delete',(request,response)=>{

 });*/
export default router;
