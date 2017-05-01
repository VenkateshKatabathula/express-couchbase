'use strict';
import dbConnection from './db-connection';
import logger from './logger';

class dbUtil {
  static getData (documentName) {
    return new Promise((resolve, reject) => {
      dbConnection.get(documentName, (error, data) => {
        if (error) {
          logger.console.error('Error loading Data :: ' + error);
          reject(error);
        } else {
          resolve(data);
        }
      });
    });
  }
  static queryDb(queryString){
    return new Promise((resolve,reject) =>{
      dbConnection.query(queryString, (error, data)=>{
        if(error) {
          logger.error("Error fetching data from db ::: "+error);
          reject(error);
        }
        else {
          resolve(data);
        }
      });
    });
  }
}

module.exports = dbUtil;
