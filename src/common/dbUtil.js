/**
 * Created by WS33 on 4/16/2017.
 */
'use strict';
let dbConnection = require('./dbConnection');
class dbUtil {
  static getData (documentName) {
    return new Promise((resolve, reject) => {
      dbConnection.get(documentName, (error, data) => {
        if (error) {
          console.log('Error loading Data :: ' + error);
          reject(error);
        } else {
          resolve(data);
        }
      });
    });
  };
}

module.exports = dbUtil;