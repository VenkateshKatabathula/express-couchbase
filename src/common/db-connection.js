/**
 * Created by WS33 on 4/16/2017.
 */
'use strict';
import couchbase from 'couchbase';
import config from './config.json';
let dbConnection = (new couchbase.Cluster(config.couchbase.url))
  .openBucket(config.couchbase.bucketName, null, () => {
    console.log('Connected to localhost:8091');
  });

module.exports = dbConnection;
