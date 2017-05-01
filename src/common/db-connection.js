'use strict';
import couchbase from 'couchbase';
import config from './config.json';
import logger from './logger';

let dbConnection = (new couchbase.Cluster(config.couchbase.url))
  .openBucket(config.couchbase.bucketName, null, () => {
    logger.debug('Connected to localhost:8091');
  });

export default dbConnection;
