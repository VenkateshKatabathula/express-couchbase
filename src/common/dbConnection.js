/**
 * Created by WS33 on 4/16/2017.
 */
'use strict';
let couchbase = require('couchbase');
let config = require('./config.json');
let dbConnection = (new couchbase.Cluster(config.couchbase.url))
  .openBucket(config.couchbase.bucketName, null, () => {
    console.log('Connected to localhost:8091');
  });

module.exports = dbConnection;